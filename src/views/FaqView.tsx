import type { Metadata } from "next";
import { CtaBand } from "@/components/cta/CtaBand";
import { PageHeader } from "@/components/layout/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { FaqList } from "@/components/ui/FaqList";
import { SideHeading } from "@/components/ui/SideHeading";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/structured-data";
import { SPEAKABLE, trail } from "./shared";

export function faqMetadata(locale: Locale): Metadata {
  const page = getI18n(locale).content.pages.faq;
  return buildMetadata({ title: page.title, description: page.description, route: "faq", locale });
}

export function FaqView({ locale }: { locale: Locale }) {
  const { t, content, link } = getI18n(locale);
  const page = content.pages.faq;
  const crumbs = trail(locale, [{ label: page.title, href: link("faq") }]);
  const allItems = content.faqGroups.flatMap((group) => group.items);

  return (
    <>
      <PageHeader
        eyebrow={page.title}
        title={page.heading}
        lead={page.lead}
        breadcrumbs={crumbs}
        breadcrumbsLabel={t.a11y.breadcrumbs}
        locale={locale}
      />
      <div className="container-page py-[var(--space-block)]">
        {content.faqGroups.map((group, index) => (
          <section
            key={group.id}
            id={group.id}
            aria-labelledby={`${group.id}-heading`}
            className="grid gap-8 py-10 md:grid-cols-12"
          >
            <SideHeading
              id={`${group.id}-heading`}
              index={String(index + 1).padStart(2, "0")}
              className="md:pt-7"
            >
              {group.title}
            </SideHeading>
            <div className="md:col-span-9">
              <FaqList items={group.items} />
            </div>
          </section>
        ))}
      </div>
      <CtaBand locale={locale} heading={page.cta.heading} text={page.cta.text} />
      <JsonLd
        data={[
          webPageSchema({
            name: page.heading,
            description: page.description,
            path: link("faq"),
            locale,
            speakable: SPEAKABLE,
          }),
          faqSchema(allItems, { path: link("faq"), locale }),
          breadcrumbSchema(crumbs),
        ]}
      />
    </>
  );
}
