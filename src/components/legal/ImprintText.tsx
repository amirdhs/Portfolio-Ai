import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { Value } from "./Value";

const COPY = {
  de: {
    provider: "Angaben gemäß § 5 DDG",
    legalName: "Name des Unternehmens / Inhabers",
    legalForm: "Rechtsform",
    representative: "Vertreten durch",
    representativeLabel: "Inhaber bzw. vertretungsberechtigte Person",
    street: "Straße und Hausnummer",
    postalCode: "PLZ",
    city: "Ort",
    contact: "Kontakt",
    email: "E-Mail",
    emailLabel: "Geschäftliche E-Mail-Adresse",
    phone: "Telefon",
    register: "Registereintrag",
    registerText: "Eintragung im Handelsregister.",
    registerCourt: "Registergericht",
    registerNumber: "Registernummer",
    vat: "Umsatzsteuer",
    vatText: "Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:",
    vatLabel: "USt-IdNr. oder Hinweis auf Kleinunternehmerregelung",
    smallBusiness: "Kleinunternehmer gemäß § 19 UStG; es wird keine Umsatzsteuer ausgewiesen.",
    responsible: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
    responsibleLabel: "Verantwortliche Person mit Anschrift",
    dispute: "Verbraucherstreitbeilegung",
    disputeText:
      "Angabe gemäß § 36 VSBG, ob AMIR bereit oder verpflichtet ist, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen",
  },
  en: {
    provider: "Information pursuant to § 5 DDG (German Digital Services Act)",
    legalName: "Company / owner name",
    legalForm: "Legal form",
    representative: "Represented by",
    representativeLabel: "Owner or authorized representative",
    street: "Street and number",
    postalCode: "Postal code",
    city: "City",
    contact: "Contact",
    email: "Email",
    emailLabel: "Business email address",
    phone: "Phone",
    register: "Register entry",
    registerText: "Entry in the commercial register.",
    registerCourt: "Register court",
    registerNumber: "Register number",
    vat: "VAT",
    vatText: "VAT identification number pursuant to § 27a of the German VAT Act:",
    vatLabel: "VAT ID or note on the small business exemption",
    smallBusiness: "Small business pursuant to § 19 UStG; no VAT is charged.",
    responsible: "Responsible for content pursuant to § 18 (2) MStV",
    responsibleLabel: "Responsible person with address",
    dispute: "Consumer dispute resolution",
    disputeText:
      "Statement pursuant to § 36 VSBG on whether AMIR is willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board",
  },
} as const;

export function ImprintText({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  const missing = getDictionary(locale).legal.missing;
  const { legal, contact } = siteConfig;
  const hasRegister = Boolean(legal.registerCourt || legal.registerNumber);

  return (
    <>
      <h2>{c.provider}</h2>
      <p>
        <Value value={legal.legalName} label={c.legalName} missing={missing} />
        <br />
        <Value value={legal.legalForm} label={c.legalForm} missing={missing} />
        <br />
        <Value value={legal.street} label={c.street} missing={missing} />
        <br />
        <Value value={legal.postalCode} label={c.postalCode} missing={missing} />{" "}
        <Value value={legal.city} label={c.city} missing={missing} />
        <br />
        {legal.country}
      </p>

      <h3>{c.representative}</h3>
      <p>
        <Value value={legal.representative} label={c.representativeLabel} missing={missing} />
      </p>

      <h2>{c.contact}</h2>
      <p>
        {c.email}:{" "}
        <Value value={contact.email} label={c.emailLabel} missing={missing}>
          {(email) => (
            <a href={`mailto:${email}`} className="link-underline">
              {email}
            </a>
          )}
        </Value>
        {contact.phone ? (
          <>
            <br />
            {c.phone}: {contact.phone}
          </>
        ) : null}
      </p>

      {hasRegister ? (
        <>
          <h2>{c.register}</h2>
          <p>
            {c.registerText}
            <br />
            {c.registerCourt}:{" "}
            <Value value={legal.registerCourt} label={c.registerCourt} missing={missing} />
            <br />
            {c.registerNumber}:{" "}
            <Value value={legal.registerNumber} label={c.registerNumber} missing={missing} />
          </p>
        </>
      ) : null}

      <h2>{c.vat}</h2>
      {legal.vatId ? (
        <p>
          {c.vatText} {legal.vatId}
        </p>
      ) : legal.isSmallBusiness ? (
        <p>{c.smallBusiness}</p>
      ) : (
        <p>
          <Value value={null} label={c.vatLabel} missing={missing} />
        </p>
      )}

      <h2>{c.responsible}</h2>
      <p>
        <Value
          value={legal.contentResponsible ?? legal.representative}
          label={c.responsibleLabel}
          missing={missing}
        />
      </p>

      <h2>{c.dispute}</h2>
      <p>
        <Value value={null} label={c.disputeText} missing={missing} />
      </p>
    </>
  );
}
