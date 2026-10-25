import type { LogFn } from "@/lib/logger";
import type { RateLimiter } from "@/lib/rate-limit";
import { createReferenceId } from "./format";
import type { InquiryDelivery } from "./mailer";
import { inquirySchema, issuesToFieldCodes, type ErrorCode, type InquiryField } from "./schema";

/** Submissions faster than this are treated as automated. */
export const MIN_FILL_TIME_MS = 3_000;
/** Upper bound for the reported fill time (a form left open for a day is still fine). */
const MAX_FILL_TIME_MS = 24 * 60 * 60 * 1000;
const MAX_BODY_BYTES = 32_000;

export type InquiryErrorCode =
  | "VALIDATION"
  | "BAD_REQUEST"
  | "UNSUPPORTED_MEDIA_TYPE"
  | "PAYLOAD_TOO_LARGE"
  | "FORBIDDEN"
  | "RATE_LIMITED"
  | "TOO_FAST"
  | "NOT_CONFIGURED"
  | "DELIVERY_FAILED";

export type InquiryResponse =
  | { success: true; data: { referenceId: string } }
  | {
      success: false;
      error: { code: InquiryErrorCode; fields?: Partial<Record<InquiryField, ErrorCode>> };
    };

export interface InquiryHandlerDeps {
  getDelivery: () => InquiryDelivery | null;
  limiter: RateLimiter;
  now: () => number;
  log: LogFn;
}

function respond(status: number, body: InquiryResponse, headers: Record<string, string> = {}) {
  return Response.json(body, { status, headers: { "cache-control": "no-store", ...headers } });
}

function fail(
  status: number,
  code: InquiryErrorCode,
  extra: Partial<{ fields: Record<string, ErrorCode> }> = {},
) {
  return respond(status, { success: false, error: { code, ...extra } });
}

function clientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || request.headers.get("x-real-ip") || "unknown";
}

function isCrossSite(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    // Behind a reverse proxy request.url carries the internal address, so the public host comes from the
    // forwarded/Host headers. A browser fixes Origin and cannot be made to send a different Host, so this still
    // blocks cross-site form posts.
    const publicHost =
      request.headers.get("x-forwarded-host")?.split(",")[0]?.trim() ||
      request.headers.get("host") ||
      new URL(request.url).host;
    return new URL(origin).host !== publicHost;
  } catch {
    return true;
  }
}

export async function handleInquiry(request: Request, deps: InquiryHandlerDeps): Promise<Response> {
  if (isCrossSite(request)) return fail(403, "FORBIDDEN");
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return fail(415, "UNSUPPORTED_MEDIA_TYPE");
  }

  const declaredLength = Number(request.headers.get("content-length") ?? 0);
  if (declaredLength > MAX_BODY_BYTES) return fail(413, "PAYLOAD_TOO_LARGE");
  const raw = await request.text();
  if (new TextEncoder().encode(raw).length > MAX_BODY_BYTES) return fail(413, "PAYLOAD_TOO_LARGE");

  let payload: Record<string, unknown>;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed))
      throw new Error("not an object");
    payload = parsed as Record<string, unknown>;
  } catch {
    return fail(400, "BAD_REQUEST");
  }

  const now = deps.now();
  const limit = deps.limiter.check(clientKey(request), now);
  if (!limit.allowed) {
    return respond(
      429,
      { success: false, error: { code: "RATE_LIMITED" } },
      { "retry-after": String(Math.ceil(limit.retryAfterMs / 1000)) },
    );
  }

  // Honeypot filled: only bots see this hidden field. Pretend success so they learn nothing.
  if (typeof payload.leave_empty === "string" && payload.leave_empty.length > 0) {
    deps.log("inquiry.dropped_as_spam", { reason: "honeypot" });
    return respond(200, { success: true, data: { referenceId: createReferenceId(new Date(now)) } });
  }

  // Fill time is measured in the browser (monotonic clock), so device clock skew cannot
  // affect it. Real people who are merely fast get an honest error, never a fake success.
  const elapsed = payload.elapsedMs;
  if (
    typeof elapsed !== "number" ||
    !Number.isFinite(elapsed) ||
    elapsed < 0 ||
    elapsed > MAX_FILL_TIME_MS
  ) {
    return fail(400, "BAD_REQUEST");
  }
  if (elapsed < MIN_FILL_TIME_MS) {
    deps.log("inquiry.rejected_too_fast", { elapsedMs: Math.round(elapsed) });
    return fail(422, "TOO_FAST");
  }

  const result = inquirySchema.safeParse(payload);
  if (!result.success) {
    return fail(400, "VALIDATION", { fields: issuesToFieldCodes(result.error.issues) });
  }

  const delivery = deps.getDelivery();
  if (!delivery) return fail(503, "NOT_CONFIGURED");

  const referenceId = createReferenceId(new Date(now));
  try {
    await delivery.send(result.data, { referenceId, receivedAt: new Date(now) });
  } catch (error) {
    deps.log("inquiry.delivery_failed", {
      referenceId,
      error: error instanceof Error ? error.name : "unknown",
    });
    return fail(502, "DELIVERY_FAILED");
  }

  return respond(200, { success: true, data: { referenceId } });
}
