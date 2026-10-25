import type { Metadata } from "next";
import { Suspense } from "react";
import { CtaBand } from "@/components/cta/CtaBand";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectCard } from "@/components/projects/ProjectCard";
import {
  ProjectFilter,
  ProjectList,
  type FilterableItem,
} from "@/components/projects/ProjectFilter";
import { ProjectTypeBadge } from "@/components/projects/ProjectTypeBadge";
import { JsonLd } from "@/components/seo/JsonLd";
import { SideHeading } from "@/components/ui/SideHeading";
import { PROJECT_CATEGORIES, type ProjectType } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/structured-data";
import { SPEAKABLE, trail } from "./shared";

const FILTER_PARAM: Record<Locale, string> = { de: "kategorie", en: "category" };
const TYPES: ProjectType[] = ["client", "demo", "concept"];

export function projectsMetadata(locale: Locale): Metadata {
  const page = getI18n(locale).content.pages.projects;
  return buildMetadata({
    title: page.title,
    description: page.description,
    route: "projects",
    locale,
  });
}

export function ProjectsView({ locale }: { locale: Locale }) {
  const { t, content, link } = getI18n(locale);
  const page = content.pages.projects;
  const crumbs = trail(locale, [{ label: page.title, href: link("projects") }]);
  const items: FilterableItem[] = content.projects.map((project) => ({
    id: project.slug,
    categories: project.categories,
    node: <ProjectCard project={project} locale={locale} headingLevel="h2" />,
  }));
  const labels = {
    filter: t.projects.filterLabel,
    all: t.projects.all,
    empty: t.projects.empty,
    count: t.projects.count,
  };

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
      <section className="container-page py-[var(--space-block)]" aria-label={page.title}>
        <aside
          aria-labelledby="legend-heading"
          className="mb-12 rounded-[1.25rem] border border-rule p-6 md:p-8"
        >
          <h2 id="legend-heading" className="eyebrow text-ink-3">
            {page.legendTitle}
          </h2>
          <dl className="mt-6 grid gap-6 md:grid-cols-3">
            {TYPES.map((type) => (
              <div key={type}>
                <dt>
                  <ProjectTypeBadge type={type} locale={locale} />
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-ink-2">
                  {t.projects.types[type].note}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
        {/* The fallback is the unfiltered list: it is what the static HTML contains. */}
        <Suspense fallback={<ProjectList items={items} emptyLabel={labels.empty} />}>
          <ProjectFilter
            items={items}
            param={FILTER_PARAM[locale]}
            categories={PROJECT_CATEGORIES.map((value) => ({
              value,
              label: t.projects.categories[value],
            }))}
            labels={labels}
          />
        </Suspense>
      </section>
      <section
        aria-labelledby="explain-heading"
        className="border-t border-rule py-[var(--space-block)]"
      >
        <div className="container-page grid gap-8 md:grid-cols-12">
          <SideHeading id="explain-heading">{page.explain.title}</SideHeading>
          <div className="grid gap-5 text-lg leading-relaxed text-ink-2 md:col-span-9">
            {page.explain.paragraphs.map((paragraph) => (
              <p key={paragraph} className="max-w-[68ch]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
      <CtaBand locale={locale} heading={page.cta.heading} text={page.cta.text} />
      <JsonLd
        data={[
          webPageSchema({
            name: page.heading,
            description: page.description,
            path: link("projects"),
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
