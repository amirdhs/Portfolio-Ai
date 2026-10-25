import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const sendMail = vi.fn().mockResolvedValue({ messageId: "1" });
const createTransport = vi.fn(() => ({ sendMail }));
vi.mock("nodemailer", () => ({ default: { createTransport } }));

const config = {
  host: "smtp.example.de",
  port: 587,
  secure: false,
  user: "u",
  pass: "p",
  from: "AMIR <anfragen@example.de>",
  to: "hallo@example.de",
};

beforeEach(() => {
  vi.resetModules();
  sendMail.mockClear();
  createTransport.mockClear();
});
afterEach(() => vi.unstubAllEnvs());

describe("SMTP delivery", () => {
  it("sends a plain-text email with the visitor as reply-to and STARTTLS required", async () => {
    const { createSmtpDelivery } = await import("@/lib/inquiry/mailer");
    const { inquirySchema } = await import("@/lib/inquiry/schema");
    const inquiry = inquirySchema.parse({
      requestType: "projekt",
      name: 'Erika "E." Beispiel',
      email: "erika@example.de",
      company: "Beispiel GmbH",
      service: "seo",
      description: "Wir möchten bei Google besser gefunden werden.",
      challenge: "Sichtbarkeit",
      consent: true,
      locale: "de",
    });
    await createSmtpDelivery(config).send(inquiry, {
      referenceId: "AMIR-1",
      receivedAt: new Date(),
    });

    expect(createTransport).toHaveBeenCalledWith(
      expect.objectContaining({ host: "smtp.example.de", requireTLS: true }),
    );
    expect(sendMail).toHaveBeenCalledWith(
      expect.objectContaining({
        from: config.from,
        to: config.to,
        replyTo: { name: "Erika  E.  Beispiel", address: "erika@example.de" },
        subject: expect.stringContaining("AMIR-1"),
        text: expect.stringContaining("Projektbeschreibung"),
      }),
    );
  });

  it("returns no delivery when SMTP is not configured, and logs invalid settings", async () => {
    const errors = vi.spyOn(console, "error").mockImplementation(() => {});
    const { getInquiryDelivery } = await import("@/lib/inquiry/mailer");
    expect(getInquiryDelivery()).toBeNull();

    vi.resetModules();
    vi.stubEnv("SMTP_HOST", "smtp.example.de");
    const fresh = await import("@/lib/inquiry/mailer");
    expect(fresh.getInquiryDelivery()).toBeNull();
    expect(errors).toHaveBeenCalledWith(expect.stringContaining("inquiry.smtp_config_invalid"));
    errors.mockRestore();
  });

  it("creates a delivery once SMTP is configured", async () => {
    vi.stubEnv("SMTP_HOST", "smtp.example.de");
    vi.stubEnv("SMTP_PORT", "465");
    vi.stubEnv("SMTP_USER", "u");
    vi.stubEnv("SMTP_PASS", "p");
    vi.stubEnv("INQUIRY_FROM", "a@example.de");
    vi.stubEnv("INQUIRY_TO", "b@example.de");
    const { getInquiryDelivery } = await import("@/lib/inquiry/mailer");
    expect(getInquiryDelivery()).not.toBeNull();
    expect(getInquiryDelivery()).toBe(getInquiryDelivery());
  });
});

describe("POST /api/inquiry", () => {
  it("answers NOT_CONFIGURED without SMTP settings", async () => {
    const { POST } = await import("@/app/api/inquiry/route");
    const res = await POST(
      new Request("http://localhost/api/inquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          requestType: "projekt",
          name: "Erika Beispiel",
          email: "erika@example.de",
          company: "Beispiel GmbH",
          service: "seo",
          description: "Wir möchten bei Google besser gefunden werden.",
          challenge: "Sichtbarkeit",
          consent: true,
          locale: "de",
          elapsedMs: 60_000,
        }),
      }),
    );
    expect(res.status).toBe(503);
  });
});
