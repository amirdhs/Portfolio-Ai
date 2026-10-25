import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { getSiteUrl, siteConfig } from "@/config/site";
import { LOCALE_META, type Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";
import { plexMono, schibsted } from "@/lib/fonts";
import { organizationSchema, webSiteSchema } from "@/lib/structured-data";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import "@/styles/global.css";

export function rootMetadata(locale: Locale): Metadata {
  const { t, content } = getI18n(locale);
  return {
    metadataBase: new URL(getSiteUrl()),
    title: { default: t.meta.defaultTitle, template: `%s | ${t.meta.titleSuffix}` },
    description: content.pages.home.description,
    applicationName: siteConfig.name,
    formatDetection: { telephone: false, email: false, address: false },
  };
}

export const rootViewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

/** The <html> document shared by the per-language root layouts. */
export function RootDocument({ locale, children }: { locale: Locale; children: ReactNode }) {
  const { t } = getI18n(locale);
  return (
    <html
      lang={LOCALE_META[locale].htmlLang}
      className={`${schibsted.variable} ${plexMono.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-ink px-5 py-3 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          {t.a11y.skipToContent}
        </a>
        <SiteHeader locale={locale} />
        <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <SiteFooter locale={locale} />
        <JsonLd data={[organizationSchema(locale), webSiteSchema(locale)]} />
      </body>
    </html>
  );
}
