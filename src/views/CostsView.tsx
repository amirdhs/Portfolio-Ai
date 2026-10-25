import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta/CtaBand";
import { PageHeader } from "@/components/layout/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { Arrow } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { SideHeading } from "@/components/ui/SideHeading";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/structured-data";
import { SPEAKABLE, trail } from "./shared";

export function costsMetadata(locale: Locale): Metadata {
  const page = getI18n(locale).content.pages.costs;
  return buildMetadata({
    title: page.title,
    description: page.description,
    route: "costs",
    locale,
  });
}

export function CostsView({ locale }: { locale: Locale }) {
  const { t, content, link } = getI18n(locale);
  const page = content.pages.costs;
  const { blocks, closing } = content.costs;
  const crumbs = trail(locale, [{ label: page.title, href: link("costs") }]);

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

      {blocks.map((block, index) => (
        <section
          key={block.id}
          id={block.id}
          aria-labelledby={`${block.id}-heading`}
          className={`scroll-mt-28 py-[var(--space-block)] ${index % 2 === 1 ? "border-y border-rule bg-paper-2" : ""}`}
        >
          <div className="container-page grid gap-8 md:grid-cols-12">
            <SideHeading id={`${block.id}-heading`} index={String(index + 1).padStart(2, "0")}>
              {block.question}
            </SideHeading>
            <div className="md:col-span-9">
              <p className="max-w-[64ch] text-lead text-ink">{block.answer}</p>
              <div className="mt-8 grid gap-10 md:grid-cols-2">
                <div>
                  <h3 className="eyebrow mb-4 text-ink-3">{page.factorsTitle}</h3>
                  <CheckList items={block.factors} />
                </div>
                <div>
                  <h3 className="eyebrow mb-4 text-ink-3">{page.neededTitle}</h3>
                  <CheckList items={block.needed} />
                </div>
              </div>
              <Link
                href={link("service", { slug: block.service })}
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-bronze-strong hover:text-ink"
              >
                {page.serviceLink}
                <Arrow />
              </Link>
            </div>
          </div>
        </section>
      ))}

      <section
        aria-labelledby="closing-heading"
        className="border-t border-rule py-[var(--space-block)]"
      >
        <div className="container-page grid gap-8 md:grid-cols-12">
          <SideHeading id="closing-heading">{closing.title}</SideHeading>
          <p className="max-w-[64ch] text-lead text-ink-2 md:col-span-9">{closing.text}</p>
        </div>
      </section>

      <CtaBand locale={locale} heading={page.cta.heading} text={page.cta.text} />
      <JsonLd
        data={[
          webPageSchema({
            name: page.heading,
            description: page.description,
            path: link("costs"),
            locale,
            speakable: SPEAKABLE,
          }),
          faqSchema(
            blocks.map((b) => ({ question: b.question, answer: b.answer })),
            { path: link("costs"), locale },
          ),
          breadcrumbSchema(crumbs),
        ]}
      />
    </>
  );
}
