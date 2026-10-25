import { describe, expect, it } from "vitest";
import { siteConfig, type SiteConfig } from "@/config/site";
import { findMissingBusinessInfo, hasMissingLegalInfo } from "@/lib/launch-check";

const complete: SiteConfig = {
  ...siteConfig,
  contact: { email: "hallo@example.de", phone: "+49 30 123", responseTimeBusinessDays: 2 },
  legal: {
    ...siteConfig.legal,
    legalName: "AMIR Digital",
    legalForm: "Einzelunternehmen",
    representative: "Vorname Nachname",
    street: "Musterweg 1",
    postalCode: "12345",
    city: "Musterstadt",
    isSmallBusiness: true,
    emailProvider: "Beispiel Mail GmbH",
    dataProtectionAuthority: "Landesbeauftragte",
    legalReviewDate: "2026-11",
  },
  founder: {
    name: "N",
    image: { src: "/x.jpg", width: 1, height: 1 },
    role: { de: "Gründer", en: "Founder" },
    bio: { de: ["…"], en: ["…"] },
    details: { de: [], en: [] },
    knowsAbout: [],
  },
  socials: [{ label: "LinkedIn", url: "https://linkedin.com/in/x" }],
};

describe("launch check", () => {
  it("flags every required legal field while the config is empty", () => {
    const missing = findMissingBusinessInfo();
    expect(missing.filter((m) => m.required).map((m) => m.key)).toContain("legal.legalName");
    expect(hasMissingLegalInfo()).toBe(true);
  });

  it("passes once all required details are filled", () => {
    expect(hasMissingLegalInfo(complete)).toBe(false);
    // VAT ID is not needed for small businesses; register data stays optional.
    expect(findMissingBusinessInfo(complete).map((m) => m.key)).toEqual([
      "legal.registerCourt",
      "legal.registerNumber",
    ]);
  });
});
