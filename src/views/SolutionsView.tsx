import type { Metadata } from "next";
import { CtaBand } from "@/components/cta/CtaBand";
import { PageHeader } from "@/components/layout/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { SolutionCard } from "@/components/solutions/SolutionCard";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/structured-data";
import { SPEAKABLE, trail } from "./shared";

export function solutionsMetadata(locale: Locale): Metadata {
  const page = getI18n(locale).content.pages.solutions;
  return buildMetadata({
    title: page.title,
    description: page.description,
    route: "solutions",
    locale,
  });
}

export function SolutionsView({ locale }: { locale: Locale }) {
  const { t, content, link } = getI18n(locale);
  const page = content.pages.solutions;
  const crumbs = trail(locale, [{ label: page.title, href: link("solutions") }]);
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
          <ol className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {content.solutions.map((solution, index) => (
              <li key={solution.slug}>
                <a
                  href={`#${solution.slug}`}
                  className="flex gap-3 py-1 text-ink-2 transition-colors hover:text-ink"
                >
                  <span className="font-mono text-xs leading-6 text-bronze">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="link-underline">{solution.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </PageHeader>
      <div className="container-page pb-[var(--space-section)]">
        {content.solutions.map((solution, index) => (
          <SolutionCard
            key={solution.slug}
            solution={solution}
            index={index}
            relatedServices={content.getServices(solution.related)}
            locale={locale}
          />
        ))}
      </div>
      <CtaBand locale={locale} heading={page.cta.heading} text={page.cta.text} />
      <JsonLd
        data={[
          webPageSchema({
            name: page.heading,
            description: page.description,
            path: link("solutions"),
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
