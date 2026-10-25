import { describe, expect, it } from "vitest";
import { inquirySchema, issuesToFieldCodes } from "@/lib/inquiry/schema";

export const validInquiry = {
  requestType: "projekt",
  name: "Erika Beispiel",
  email: "erika@example.de",
  company: "Beispiel GmbH",
  website: "",
  service: "webdesign",
  description: "Wir möchten unsere Website neu aufbauen und Anfragen besser erfassen.",
  challenge: "Zu wenige qualifizierte Anfragen.",
  budget: "",
  timeline: "",
  consent: true,
  locale: "de",
};

describe("inquirySchema", () => {
  it("accepts a complete inquiry", () => {
    const result = inquirySchema.safeParse(validInquiry);
    expect(result.success).toBe(true);
  });

  it("normalizes a website without protocol and trims text", () => {
    const result = inquirySchema.parse({
      ...validInquiry,
      website: " beispiel.de ",
      name: "  Erika  ",
    });
    expect(result.website).toBe("https://beispiel.de");
    expect(result.name).toBe("Erika");
  });

  it("treats empty optional fields as undefined", () => {
    const result = inquirySchema.parse(validInquiry);
    expect(result.website).toBeUndefined();
    expect(result.budget).toBeUndefined();
    expect(result.timeline).toBeUndefined();
  });

  it("returns error codes per field", () => {
    const result = inquirySchema.safeParse({
      ...validInquiry,
      name: "",
      email: "keine-mail",
      website: "nicht eine url",
      service: "raketen",
      description: "kurz",
      budget: "eine-million",
      consent: false,
    });
    expect(result.success).toBe(false);
    if (result.success) return;
    expect(issuesToFieldCodes(result.error.issues)).toEqual({
      name: "required",
      email: "email",
      website: "url",
      service: "option",
      description: "tooShort",
      budget: "option",
      consent: "consent",
    });
  });

  it("rejects overly long input", () => {
    const result = inquirySchema.safeParse({ ...validInquiry, description: "x".repeat(5001) });
    expect(result.success).toBe(false);
    if (!result.success)
      expect(issuesToFieldCodes(result.error.issues)).toEqual({ description: "tooLong" });
  });

  it("accepts the 'unsure' service option and English locale", () => {
    expect(
      inquirySchema.safeParse({ ...validInquiry, service: "unklar", locale: "en" }).success,
    ).toBe(true);
  });
});
