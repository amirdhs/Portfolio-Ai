import { describe, expect, it } from "vitest";
import { formatInquiryEmail, createReferenceId } from "@/lib/inquiry/format";
import { inquirySchema } from "@/lib/inquiry/schema";

const inquiry = inquirySchema.parse({
  requestType: "erstgespraech",
  name: "Erika\r\nBcc: evil@example.com",
  email: "erika@example.de",
  company: "Beispiel GmbH",
  website: "beispiel.de",
  service: "ki-agenten",
  description: "Eine <b>Beschreibung</b> mit genug Inhalt für den Test.",
  challenge: "Zeitaufwand",
  budget: "5000-15000",
  timeline: "asap",
  consent: true,
  locale: "en",
});

describe("formatInquiryEmail", () => {
  const email = formatInquiryEmail(inquiry, {
    referenceId: "AMIR-1",
    receivedAt: new Date("2026-10-14T10:00:00Z"),
  });

  it("builds a single-line subject without header injection", () => {
    expect(email.subject).not.toMatch(/[\r\n]/);
    expect(email.subject).toContain("Erstgespräch");
    expect(email.subject).toContain("Beispiel GmbH");
    expect(email.subject).toContain("AMIR-1");
  });

  it("lists all answers in a plain-text body with readable labels", () => {
    expect(email.text).toContain("Leistung: Individuelle KI-Agenten");
    expect(email.text).toContain("Budget: 5.000 – 15.000 €");
    expect(email.text).toContain("Zeitrahmen: So bald wie möglich");
    expect(email.text).toContain("Website: https://beispiel.de");
    expect(email.text).toContain("Sprache der Anfrage: EN");
    expect(email.text).toContain("<b>Beschreibung</b>");
  });

  it("marks missing optional answers", () => {
    const minimal = inquirySchema.parse({
      ...inquiry,
      website: "",
      budget: "",
      timeline: "",
      service: "unklar",
    });
    const text = formatInquiryEmail(minimal, { referenceId: "x", receivedAt: new Date() }).text;
    expect(text).toContain("Website: –");
    expect(text).toContain("Leistung: Noch unklar");
  });
});

describe("createReferenceId", () => {
  it("creates distinct, readable ids", () => {
    const a = createReferenceId(new Date("2026-10-14T10:00:00Z"));
    const b = createReferenceId(new Date("2026-10-14T10:00:00Z"));
    expect(a).toMatch(/^AMIR-20261014-[A-Z0-9]{6}$/);
    expect(a).not.toBe(b);
  });
});
