import type { Metadata } from "next";
import { CtaBand } from "@/components/cta/CtaBand";
import { PageHeader } from "@/components/layout/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceBlock } from "@/components/services/ServiceBlock";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/structured-data";
import { SPEAKABLE, trail } from "./shared";

export function servicesMetadata(locale: Locale): Metadata {
  const page = getI18n(locale).content.pages.services;
  return buildMetadata({
    title: page.title,
    description: page.description,
    route: "services",
    locale,
  });
}

export function ServicesView({ locale }: { locale: Locale }) {
  const { t, content, link } = getI18n(locale);
  const page = content.pages.services;
  const crumbs = trail(locale, [{ label: page.title, href: link("services") }]);
  return (
    <>
      <PageHeader
        eyebrow={page.title}
        title={page.heading}
        lead={page.lead}
        breadcrumbs={crumbs}
        breadcrumbsLabel={t.a11y.breadcrumbs}
        locale={locale}
      >
        <nav aria-label={t.a11y.onThisPage}>
          <ol className="flex flex-wrap gap-2">
            {content.services.map((service, index) => (
              <li key={service.slug}>
                <a
                  href={`#${service.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-rule-strong/70 px-4 py-2 text-sm text-ink-2 transition-colors hover:border-ink hover:text-ink"
                >
                  <span className="font-mono text-[0.7rem] text-bronze">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {service.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </PageHeader>
      <div className="container-page pb-[var(--space-section)]">
        {content.services.map((service, index) => (
          <ServiceBlock key={service.slug} service={service} index={index} locale={locale} />
        ))}
      </div>
      <CtaBand locale={locale} heading={page.cta.heading} text={page.cta.text} />
      <JsonLd
        data={[
          webPageSchema({
            name: page.heading,
            description: page.description,
            path: link("services"),
            locale,
            type: "CollectionPage",
            speakable: SPEAKABLE,
          }),
          breadcrumbSchema(crumbs),
        ]}
      />
    </>
  );
}
