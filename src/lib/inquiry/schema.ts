import { z } from "zod";
import { LOCALES } from "@/i18n/config";
import { BUDGET_OPTIONS, REQUEST_TYPES, SERVICE_OPTIONS, TIMELINE_OPTIONS } from "./options";

// Skip Zod's `new Function` capability probe: our CSP forbids eval and Chrome would
// report a (harmless) violation on every page that loads the form.
z.config({ jitless: true });

/**
 * Shared by the form (client) and the API route (server). Error messages are
 * codes, translated in the UI via the dictionary's `form.errors`.
 */
export type ErrorCode =
  "required" | "tooShort" | "tooLong" | "email" | "url" | "option" | "consent";

const text = (min: number, max: number) =>
  z
    .string({ error: "required" })
    .trim()
    .min(1, "required")
    .min(min, "tooShort")
    .max(max, "tooLong");

const emptyToUndefined = (value: unknown) =>
  typeof value === "string" && value.trim() === "" ? undefined : value;

const optionalChoice = <T extends readonly [string, ...string[]]>(values: T) =>
  z.preprocess(emptyToUndefined, z.enum(values, { error: "option" }).optional());

/** Accepts "beispiel.de" or "https://beispiel.de"; normalizes to an absolute https URL. */
const website = z.preprocess(
  (value) => {
    const trimmed = emptyToUndefined(value);
    if (typeof trimmed !== "string") return trimmed;
    const candidate = trimmed.trim();
    return /^https?:\/\//i.test(candidate) ? candidate : `https://${candidate}`;
  },
  z
    .string()
    .max(300, "tooLong")
    .refine((value) => {
      try {
        const url = new URL(value);
        return /^https?:$/.test(url.protocol) && url.hostname.includes(".") && !/\s/.test(value);
      } catch {
        return false;
      }
    }, "url")
    .optional(),
);

export const inquirySchema = z.object({
  requestType: z.enum(REQUEST_TYPES, { error: "option" }),
  name: text(2, 120),
  email: z
    .string({ error: "required" })
    .trim()
    .min(1, "required")
    .max(200, "tooLong")
    .pipe(z.email("email")),
  company: text(1, 160),
  website,
  service: z.enum(SERVICE_OPTIONS, { error: "option" }),
  description: text(20, 5000),
  challenge: text(5, 3000),
  budget: optionalChoice(BUDGET_OPTIONS),
  timeline: optionalChoice(TIMELINE_OPTIONS),
  consent: z.literal(true, { error: "consent" }),
  locale: z.enum(LOCALES, { error: "option" }),
});

export type InquiryInput = z.input<typeof inquirySchema>;
export type Inquiry = z.output<typeof inquirySchema>;
export type InquiryField = keyof Inquiry;

/** First error code per field, e.g. `{ email: "email" }`. */
export function issuesToFieldCodes(
  issues: z.core.$ZodIssue[],
): Partial<Record<InquiryField, ErrorCode>> {
  const result: Partial<Record<InquiryField, ErrorCode>> = {};
  for (const issue of issues) {
    const field = issue.path[0] as InquiryField | undefined;
    if (!field || result[field]) continue;
    result[field] = toErrorCode(issue.message);
  }
  return result;
}

const CODES: readonly ErrorCode[] = [
  "required",
  "tooShort",
  "tooLong",
  "email",
  "url",
  "option",
  "consent",
];

export function toErrorCode(message: string | undefined): ErrorCode {
  return CODES.includes(message as ErrorCode) ? (message as ErrorCode) : "required";
}
