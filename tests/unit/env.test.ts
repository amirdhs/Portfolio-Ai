import { describe, expect, it } from "vitest";
import { readSmtpConfig } from "@/lib/env";

const full = {
  SMTP_HOST: "smtp.example.de",
  SMTP_PORT: "465",
  SMTP_USER: "anfragen@example.de",
  SMTP_PASS: "secret",
  INQUIRY_FROM: "AMIR <anfragen@example.de>",
  INQUIRY_TO: "hallo@example.de",
};

describe("readSmtpConfig", () => {
  it("reports missing when nothing is set", () => {
    expect(readSmtpConfig({})).toEqual({ status: "missing" });
  });

  it("parses a complete configuration and infers TLS from the port", () => {
    const result = readSmtpConfig(full);
    expect(result).toMatchObject({
      status: "configured",
      config: { port: 465, secure: true, to: "hallo@example.de" },
    });
    expect(readSmtpConfig({ ...full, SMTP_PORT: "587" })).toMatchObject({
      config: { secure: false },
    });
    expect(readSmtpConfig({ ...full, SMTP_PORT: "587", SMTP_SECURE: "true" })).toMatchObject({
      config: { secure: true },
    });
  });

  it("reports which keys are invalid without exposing values", () => {
    const result = readSmtpConfig({
      ...full,
      SMTP_PORT: "abc",
      INQUIRY_TO: "not-an-email",
      SMTP_PASS: "",
    });
    expect(result.status).toBe("invalid");
    if (result.status === "invalid")
      expect(result.keys.sort()).toEqual(["INQUIRY_TO", "SMTP_PASS", "SMTP_PORT"]);
  });
});
