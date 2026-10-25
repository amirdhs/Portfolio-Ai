import type { Metadata } from "next";
import { CtaBand } from "@/components/cta/CtaBand";
import { PageHeader } from "@/components/layout/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { CheckList } from "@/components/ui/CheckList";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, howToSchema, webPageSchema } from "@/lib/structured-data";
import { SPEAKABLE, trail } from "./shared";

export function processMetadata(locale: Locale): Metadata {
  const page = getI18n(locale).content.pages.process;
  return buildMetadata({
    title: page.title,
    description: page.description,
    route: "process",
    locale,
  });
}

export function ProcessView({ locale }: { locale: Locale }) {
  const { t, content, link } = getI18n(locale);
  const page = content.pages.process;
  const crumbs = trail(locale, [{ label: page.title, href: link("process") }]);

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
        <ol className="flex flex-wrap gap-2" aria-label={t.a11y.onThisPage}>
          {content.processStages.map((stage, index) => (
            <li key={stage.title}>
              <a
                href={`#phase-${index + 1}`}
                className="inline-flex items-center gap-2 rounded-full border border-rule-strong/70 px-4 py-2 text-sm text-ink-2 transition-colors hover:border-ink hover:text-ink"
              >
                <span className="font-mono text-[0.7rem] text-bronze">{index + 1}</span>
                {stage.title}
              </a>
            </li>
          ))}
        </ol>
      </PageHeader>

      <ol className="container-page py-[var(--space-block)]">
        {content.processStages.map((stage, index) => (
          <li
            key={stage.title}
            id={`phase-${index + 1}`}
            className="relative grid scroll-mt-28 gap-8 border-t border-rule py-12 lg:grid-cols-12"
          >
            <div className="lg:col-span-4">
              <span className="grid size-12 place-items-center rounded-full border border-bronze font-mono text-sm text-bronze">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-6 text-title">{stage.title}</h2>
              <p className="mt-4 leading-relaxed text-ink-2">{stage.summary}</p>
            </div>
            <dl className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:pl-8">
              <div>
                <dt className="eyebrow mb-3 text-ink-3">{page.labels.clientRole}</dt>
                <dd>
                  <CheckList items={stage.clientRole} />
                </dd>
              </div>
              <div>
                <dt className="eyebrow mb-3 text-ink-3">{page.labels.amirRole}</dt>
                <dd>
                  <CheckList items={stage.amirRole} />
                </dd>
              </div>
              <div>
                <dt className="eyebrow mb-3 text-ink-3">{page.labels.deliverables}</dt>
                <dd>
                  <CheckList items={stage.deliverables} />
                </dd>
              </div>
              <div className="rounded-[1.25rem] bg-paper-2 p-5">
                <dt className="eyebrow mb-2 text-bronze">{page.labels.communication}</dt>
                <dd className="leading-relaxed text-ink-2">{stage.communication}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ol>

      <CtaBand locale={locale} heading={page.cta.heading} text={page.cta.text} />
      <JsonLd
        data={[
          webPageSchema({
            name: page.heading,
            description: page.description,
            path: link("process"),
            locale,
            speakable: SPEAKABLE,
          }),
          howToSchema(
            page.heading,
            page.description,
            content.processStages.map((stage) => ({ name: stage.title, text: stage.summary })),
            locale,
          ),
          breadcrumbSchema(crumbs),
        ]}
      />
    </>
  );
}
