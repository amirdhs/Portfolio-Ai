import { siteConfig, type SiteConfig } from "@/config/site";

export interface MissingItem {
  key: string;
  label: string;
  required: boolean;
}

/**
 * Business details still missing before publication. `required` items are
 * needed for the Impressum/Datenschutz; the others improve the site but are optional.
 */
export function findMissingBusinessInfo(config: SiteConfig = siteConfig): MissingItem[] {
  const { legal, contact } = config;
  const checks: [string, string, unknown, boolean][] = [
    ["legal.legalName", "Name des Unternehmens / Inhabers", legal.legalName, true],
    ["legal.legalForm", "Rechtsform", legal.legalForm, true],
    [
      "legal.representative",
      "Inhaber bzw. vertretungsberechtigte Person",
      legal.representative,
      true,
    ],
    ["legal.street", "Straße und Hausnummer", legal.street, true],
    ["legal.postalCode", "Postleitzahl", legal.postalCode, true],
    ["legal.city", "Ort", legal.city, true],
    ["contact.email", "Geschäftliche E-Mail-Adresse", contact.email, true],
    [
      "legal.isSmallBusiness",
      "Umsatzsteuer: Kleinunternehmer ja/nein",
      legal.isSmallBusiness,
      true,
    ],
    [
      "legal.emailProvider",
      "E-Mail-Anbieter (SMTP) für die Datenschutzerklärung",
      legal.emailProvider,
      true,
    ],
    [
      "legal.dataProtectionAuthority",
      "Zuständige Datenschutz-Aufsichtsbehörde",
      legal.dataProtectionAuthority,
      true,
    ],
    ["legal.legalReviewDate", "Datum der rechtlichen Prüfung", legal.legalReviewDate, true],
    [
      "legal.vatId",
      "USt-IdNr. (falls vorhanden)",
      legal.vatId ?? (legal.isSmallBusiness ? "n/a" : null),
      false,
    ],
    ["legal.registerCourt", "Registergericht (falls eingetragen)", legal.registerCourt, false],
    ["legal.registerNumber", "Registernummer (falls eingetragen)", legal.registerNumber, false],
    ["contact.phone", "Telefonnummer", contact.phone, false],
    [
      "contact.responseTimeBusinessDays",
      "Übliche Antwortzeit in Werktagen",
      contact.responseTimeBusinessDays,
      false,
    ],
    ["founder", "Gründerprofil (Über uns)", config.founder, false],
    ["socials", "Social-Media-Profile", config.socials.length > 0 ? "set" : null, false],
  ];
  return checks
    .filter(([, , value]) => value === null || value === undefined || value === "")
    .map(([key, label, , required]) => ({ key, label, required }));
}

export function hasMissingLegalInfo(config: SiteConfig = siteConfig): boolean {
  return findMissingBusinessInfo(config).some((item) => item.required);
}
