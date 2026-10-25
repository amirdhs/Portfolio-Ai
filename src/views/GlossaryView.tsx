import type { Metadata } from "next";
import { CtaBand } from "@/components/cta/CtaBand";
import { PageHeader } from "@/components/layout/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { SideHeading } from "@/components/ui/SideHeading";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, definedTermSetSchema, webPageSchema } from "@/lib/structured-data";
import { SPEAKABLE, trail } from "./shared";

export function glossaryMetadata(locale: Locale): Metadata {
  const page = getI18n(locale).content.pages.glossary;
  return buildMetadata({
    title: page.title,
    description: page.description,
    route: "glossary",
    locale,
  });
}

export function GlossaryView({ locale }: { locale: Locale }) {
  const { t, content, link } = getI18n(locale);
  const page = content.pages.glossary;
  const { terms, comparison } = content.glossary;
  const crumbs = trail(locale, [{ label: page.title, href: link("glossary") }]);

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

      <section aria-labelledby="terms-heading" className="py-[var(--space-block)]">
        <div className="container-page grid gap-8 md:grid-cols-12">
          <SideHeading id="terms-heading">{page.title}</SideHeading>
          <dl className="md:col-span-9">
            {terms.map((term) => (
              <div key={term.id} id={term.id} className="scroll-mt-28 border-t border-rule py-6">
                <dt>
                  <h3 className="text-xl font-semibold tracking-[-0.02em]">{term.term}</h3>
                </dt>
                <dd className="mt-3 max-w-[68ch] leading-relaxed text-ink-2">{term.definition}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        aria-labelledby="compare-heading"
        className="border-y border-rule bg-paper-2 py-[var(--space-block)]"
      >
        <div className="container-page grid gap-8 md:grid-cols-12">
          <SideHeading id="compare-heading">{page.comparisonTitle}</SideHeading>
          <div className="md:col-span-9">
            <p className="max-w-[60ch] text-ink-2">{page.comparisonIntro}</p>
            <div className="mt-8 overflow-x-auto rounded-[1.25rem] border border-rule">
              <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
                <caption className="sr-only">{comparison.caption}</caption>
                <thead>
                  <tr className="bg-paper-3">
                    {comparison.headers.map((header, index) => (
                      <th
                        key={header || "row"}
                        scope="col"
                        className={`px-4 py-3 font-semibold ${index === 0 ? "w-[18%]" : ""}`}
                      >
                        {header || <span className="sr-only">{page.title}</span>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.rows.map((row) => (
                    <tr key={row[0]} className="border-t border-rule align-top">
                      <th scope="row" className="px-4 py-4 font-medium text-ink">
                        {row[0]}
                      </th>
                      {row.slice(1).map((cell) => (
                        <td key={cell} className="px-4 py-4 leading-relaxed text-ink-2">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <CtaBand locale={locale} heading={page.cta.heading} text={page.cta.text} />
      <JsonLd
        data={[
          webPageSchema({
            name: page.heading,
            description: page.description,
            path: link("glossary"),
            locale,
            speakable: SPEAKABLE,
          }),
          definedTermSetSchema(
            page.title,
            terms.map((term) => ({ term: term.term, definition: term.definition })),
            link("glossary"),
            locale,
          ),
          breadcrumbSchema(crumbs),
        ]}
      />
    </>
  );
}
