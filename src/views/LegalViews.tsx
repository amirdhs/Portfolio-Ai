import type { Metadata } from "next";
import { CookiesText } from "@/components/legal/CookiesText";
import { ImprintText } from "@/components/legal/ImprintText";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { PrivacyText } from "@/components/legal/PrivacyText";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";
import type { RouteKey } from "@/i18n/routes";
import { hasMissingLegalInfo } from "@/lib/launch-check";
import { buildMetadata } from "@/lib/seo";
import { trail } from "./shared";

type LegalKey = "imprint" | "privacy" | "cookies";

function legalMetadata(locale: Locale, key: LegalKey): Metadata {
  const page = getI18n(locale).content.pages.legal[key];
  return buildMetadata({
    title: page.title,
    description: page.description,
    route: key as RouteKey,
    locale,
    // Keep incomplete legal pages (with "missing" markers) out of search results until the details are filled in.
    noIndex: key !== "cookies" && hasMissingLegalInfo(),
  });
}

function LegalView({ locale, pageKey }: { locale: Locale; pageKey: LegalKey }) {
  const { t, content, link } = getI18n(locale);
  const page = content.pages.legal[pageKey];
  const crumbs = trail(locale, [{ label: page.title, href: link(pageKey) }]);
  const Text = { imprint: ImprintText, privacy: PrivacyText, cookies: CookiesText }[pageKey];
  return (
    <LegalLayout
      title={page.title}
      crumbs={crumbs}
      t={t}
      showReviewBanner={pageKey !== "cookies" && hasMissingLegalInfo()}
    >
      <Text locale={locale} />
    </LegalLayout>
  );
}

export const imprintMetadata = (locale: Locale) => legalMetadata(locale, "imprint");
export const privacyMetadata = (locale: Locale) => legalMetadata(locale, "privacy");
export const cookiesMetadata = (locale: Locale) => legalMetadata(locale, "cookies");

export const ImprintView = ({ locale }: { locale: Locale }) => (
  <LegalView locale={locale} pageKey="imprint" />
);
export const PrivacyView = ({ locale }: { locale: Locale }) => (
  <LegalView locale={locale} pageKey="privacy" />
);
export const CookiesView = ({ locale }: { locale: Locale }) => (
  <LegalView locale={locale} pageKey="cookies" />
);
