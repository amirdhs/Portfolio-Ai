import { beforeEach, describe, expect, it, vi } from "vitest";
import { handleInquiry, MIN_FILL_TIME_MS, type InquiryHandlerDeps } from "@/lib/inquiry/handler";
import type { InquiryDelivery } from "@/lib/inquiry/mailer";
import { createRateLimiter } from "@/lib/rate-limit";

const NOW = 1_800_000_000_000;

const body = {
  requestType: "projekt",
  name: "Erika Beispiel",
  email: "erika@example.de",
  company: "Beispiel GmbH",
  website: "",
  service: "seo",
  description: "Wir möchten bei Google besser gefunden werden.",
  challenge: "Kaum Sichtbarkeit",
  budget: "",
  timeline: "",
  consent: true,
  locale: "de",
  leave_empty: "",
  elapsedMs: 10_000,
};

function request(payload: unknown, headers: Record<string, string> = {}) {
  return new Request("https://amir.example/api/inquiry", {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": "203.0.113.7", ...headers },
    body: typeof payload === "string" ? payload : JSON.stringify(payload),
  });
}

let send: ReturnType<typeof vi.fn<InquiryDelivery["send"]>>;
let deps: InquiryHandlerDeps;

beforeEach(() => {
  send = vi.fn<InquiryDelivery["send"]>().mockResolvedValue(undefined);
  deps = {
    getDelivery: () => ({ send }),
    limiter: createRateLimiter({ limit: 5, windowMs: 600_000 }),
    now: () => NOW,
    log: vi.fn(),
  };
});

describe("handleInquiry", () => {
  it("delivers a valid inquiry and returns a reference id", async () => {
    const res = await handleInquiry(request(body), deps);
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json).toMatchObject({
      success: true,
      data: { referenceId: expect.stringMatching(/^AMIR-/) },
    });
    expect(send).toHaveBeenCalledOnce();
    expect(send.mock.calls[0][0]).toMatchObject({ email: "erika@example.de", service: "seo" });
  });

  it("returns field error codes for invalid input", async () => {
    const res = await handleInquiry(request({ ...body, email: "nope", consent: false }), deps);
    expect(res.status).toBe(400);
    expect(await res.json()).toEqual({
      success: false,
      error: { code: "VALIDATION", fields: { email: "email", consent: "consent" } },
    });
    expect(send).not.toHaveBeenCalled();
  });

  it("rejects malformed JSON and wrong content types", async () => {
    expect((await handleInquiry(request("{oops"), deps)).status).toBe(400);
    expect(
      (await handleInquiry(request(body, { "content-type": "text/plain" }), deps)).status,
    ).toBe(415);
  });

  it("rejects oversized bodies", async () => {
    const res = await handleInquiry(request({ ...body, description: "x".repeat(40_000) }), deps);
    expect(res.status).toBe(413);
  });

  it("rejects cross-site requests", async () => {
    const res = await handleInquiry(request(body, { origin: "https://evil.example" }), deps);
    expect(res.status).toBe(403);
  });

  it("accepts same-site requests behind a reverse proxy (public host from forwarded headers)", async () => {
    const proxied = await handleInquiry(
      new Request("http://127.0.0.1:3200/api/inquiry", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-forwarded-for": "203.0.113.8",
          "x-forwarded-host": "amir.example",
          origin: "https://amir.example",
        },
        body: JSON.stringify(body),
      }),
      deps,
    );
    expect(proxied.status).toBe(200);
  });

  it("still rejects a foreign origin behind a reverse proxy", async () => {
    const res = await handleInquiry(
      new Request("http://127.0.0.1:3200/api/inquiry", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-forwarded-host": "amir.example",
          origin: "https://evil.example",
        },
        body: JSON.stringify(body),
      }),
      deps,
    );
    expect(res.status).toBe(403);
  });

  it("silently drops honeypot submissions (bots learn nothing)", async () => {
    const bot = await handleInquiry(request({ ...body, leave_empty: "spam" }), deps);
    expect(bot.status).toBe(200);
    expect(send).not.toHaveBeenCalled();
  });

  it("rejects too-fast submissions honestly instead of faking success", async () => {
    const res = await handleInquiry(request({ ...body, elapsedMs: MIN_FILL_TIME_MS - 100 }), deps);
    expect(res.status).toBe(422);
    expect(await res.json()).toEqual({ success: false, error: { code: "TOO_FAST" } });
    expect(send).not.toHaveBeenCalled();
  });

  it("rejects requests without a plausible fill time", async () => {
    const withoutTiming = Object.fromEntries(
      Object.entries(body).filter(([key]) => key !== "elapsedMs"),
    );
    expect((await handleInquiry(request(withoutTiming), deps)).status).toBe(400);
    expect((await handleInquiry(request({ ...body, elapsedMs: "10000" }), deps)).status).toBe(400);
    expect((await handleInquiry(request({ ...body, elapsedMs: -5 }), deps)).status).toBe(400);
    expect(send).not.toHaveBeenCalled();
  });

  it("rejects oversized bodies by content-length before reading them", async () => {
    const res = await handleInquiry(request(body, { "content-length": "999999" }), deps);
    expect(res.status).toBe(413);
  });

  it("answers 503 NOT_CONFIGURED when no mail delivery is set up", async () => {
    const res = await handleInquiry(request(body), { ...deps, getDelivery: () => null });
    expect(res.status).toBe(503);
    expect(await res.json()).toEqual({ success: false, error: { code: "NOT_CONFIGURED" } });
  });

  it("answers 502 when the mail server fails, without leaking details", async () => {
    send.mockRejectedValueOnce(new Error("535 auth failed for secret-user"));
    const res = await handleInquiry(request(body), deps);
    expect(res.status).toBe(502);
    const json = await res.json();
    expect(json).toEqual({ success: false, error: { code: "DELIVERY_FAILED" } });
    expect(deps.log).toHaveBeenCalledWith(
      "inquiry.delivery_failed",
      expect.not.objectContaining({ email: expect.anything() }),
    );
  });

  it("rate limits repeated submissions per client", async () => {
    const limited = { ...deps, limiter: createRateLimiter({ limit: 1, windowMs: 600_000 }) };
    expect((await handleInquiry(request(body), limited)).status).toBe(200);
    const res = await handleInquiry(request(body), limited);
    expect(res.status).toBe(429);
    expect(res.headers.get("retry-after")).toBe("600");
    expect(await res.json()).toEqual({ success: false, error: { code: "RATE_LIMITED" } });
  });
});
