import { z } from "zod";

export interface SmtpConfig {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  from: string;
  to: string;
}

const smtpSchema = z.object({
  SMTP_HOST: z.string().min(1),
  SMTP_PORT: z.coerce.number().int().positive(),
  SMTP_SECURE: z.enum(["true", "false"]).optional(),
  SMTP_USER: z.string().min(1),
  SMTP_PASS: z.string().min(1),
  INQUIRY_FROM: z.string().min(3),
  INQUIRY_TO: z.email(),
});

const SMTP_KEYS = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "INQUIRY_FROM",
  "INQUIRY_TO",
] as const;

export type SmtpConfigResult =
  | { status: "configured"; config: SmtpConfig }
  | { status: "missing" }
  | { status: "invalid"; keys: string[] };

/** Reads SMTP settings from the environment. Missing settings are not an error: the form reports it honestly. */
export function readSmtpConfig(
  env: Record<string, string | undefined> = process.env,
): SmtpConfigResult {
  if (SMTP_KEYS.every((key) => !env[key])) return { status: "missing" };
  const parsed = smtpSchema.safeParse(env);
  if (!parsed.success) {
    return {
      status: "invalid",
      keys: [...new Set(parsed.error.issues.map((i) => String(i.path[0])))],
    };
  }
  const value = parsed.data;
  return {
    status: "configured",
    config: {
      host: value.SMTP_HOST,
      port: value.SMTP_PORT,
      // Port 465 uses implicit TLS; 587 upgrades via STARTTLS.
      secure: value.SMTP_SECURE ? value.SMTP_SECURE === "true" : value.SMTP_PORT === 465,
      user: value.SMTP_USER,
      pass: value.SMTP_PASS,
      from: value.INQUIRY_FROM,
      to: value.INQUIRY_TO,
    },
  };
}
