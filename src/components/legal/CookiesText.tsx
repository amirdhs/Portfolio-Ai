import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { href } from "@/i18n/routes";

const COPY = {
  de: {
    statusTitle: "Aktueller Stand",
    status:
      "Diese Website setzt keine Cookies und verwendet keine vergleichbaren Technologien wie Local Storage, Tracking-Pixel oder Fingerprinting. Es werden keine Analyse-, Marketing- oder Social-Media-Dienste eingebunden.",
    consentTitle: "Warum es hier nichts einzustellen gibt",
    consent:
      "Da keine einwilligungspflichtigen Technologien eingesetzt werden, ist kein Cookie-Banner erforderlich und es gibt keine Einstellungen, die Sie ändern müssten.",
    futureTitle: "Wenn sich das ändert",
    future:
      "Sollten wir künftig optionale Dienste wie eine Reichweitenmessung einsetzen, holen wir vorher Ihre Einwilligung über ein entsprechendes Auswahlfenster ein. Auf dieser Seite können Sie Ihre Auswahl dann jederzeit ändern oder widerrufen.",
    privacy: "Weitere Informationen zur Datenverarbeitung finden Sie in der",
    privacyLink: "Datenschutzerklärung",
  },
  en: {
    statusTitle: "Current status",
    status:
      "This website does not set cookies or use comparable technologies such as local storage, tracking pixels or fingerprinting. No analytics, marketing or social media services are embedded.",
    consentTitle: "Why there is nothing to configure",
    consent:
      "Since no technologies requiring consent are used, no cookie banner is needed and there are no settings you would need to change.",
    futureTitle: "If this changes",
    future:
      "Should we use optional services such as audience measurement in the future, we will ask for your consent beforehand through a selection dialog. You will then be able to change or withdraw your choice on this page at any time.",
    privacy: "More information on data processing can be found in the",
    privacyLink: "privacy policy",
  },
} as const;

export function CookiesText({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  return (
    <>
      <h2>{c.statusTitle}</h2>
      <p>{c.status}</p>
      <h2>{c.consentTitle}</h2>
      <p>{c.consent}</p>
      <h2>{c.futureTitle}</h2>
      <p>{c.future}</p>
      <p>
        {c.privacy}{" "}
        <Link href={href("privacy", { locale })} className="link-underline">
          {c.privacyLink}
        </Link>
        .
      </p>
    </>
  );
}
