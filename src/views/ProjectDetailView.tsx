import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { CtaBand } from "@/components/cta/CtaBand";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectTypeBadge } from "@/components/projects/ProjectTypeBadge";
import { JsonLd } from "@/components/seo/JsonLd";
import { CheckList } from "@/components/ui/CheckList";
import type { Project } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";
import { localizedSlug, resolveSlug } from "@/i18n/routes";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/structured-data";
import { SPEAKABLE, trail } from "./shared";

export function projectParams(locale: Locale): { slug: string }[] {
  return getI18n(locale).content.projects.map((project) => ({
    slug: localizedSlug("project", project.slug, locale),
  }));
}

function findProject(locale: Locale, urlSlug: string): Project | undefined {
  const id = resolveSlug("project", urlSlug, locale);
  return id ? getI18n(locale).content.getProject(id) : undefined;
}

export function projectMetadata(locale: Locale, urlSlug: string): Metadata {
  const project = findProject(locale, urlSlug);
  if (!project) return {};
  return buildMetadata({
    title: project.seo.title,
    description: project.seo.description,
    route: "project",
    slug: project.slug,
    locale,
  });
}

export function ProjectDetailView({ locale, urlSlug }: { locale: Locale; urlSlug: string }) {
  const project = findProject(locale, urlSlug);
  if (!project) notFound();

  const { t, content, link } = getI18n(locale);
  const labels = t.projects.detail;
  const crumbs = trail(locale, [
    { label: content.pages.projects.title, href: link("projects") },
    { label: project.title, href: link("project", { slug: project.slug }) },
  ]);
  const relatedServices = content.getServices(project.related);
  // Concepts were never built: don't word them as delivered work.
  const isConcept = project.type === "concept";

  return (
    <>
      <PageHeader
        eyebrow={project.industry}
        title={project.title}
        lead={project.summary}
        breadcrumbs={crumbs}
        breadcrumbsLabel={t.a11y.breadcrumbs}
        locale={locale}
      >
        <div className="flex flex-col gap-4 rounded-[1.25rem] border border-rule-strong/60 bg-paper p-5 sm:flex-row sm:items-center">
          <ProjectTypeBadge type={project.type} locale={locale} />
          <p className="text-sm leading-relaxed text-ink-2">
            {t.projects.types[project.type].note}
          </p>
        </div>
      </PageHeader>

      <div className="container-page grid gap-16 py-[var(--space-block)] lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <dl className="grid gap-8 lg:sticky lg:top-28">
            <Meta label={t.labels.industry}>{project.industry}</Meta>
            <Meta label={t.labels.services}>
              <ul className="grid gap-1.5">
                {relatedServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={link("service", { slug: service.slug })}
                      className="link-underline text-ink"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Meta>
            <Meta label={labels.technologies}>
              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li key={tech} className="rounded-full bg-paper-2 px-3 py-1 text-sm text-ink-2">
                    {tech}
                  </li>
                ))}
              </ul>
            </Meta>
          </dl>
        </aside>

        <div className="grid gap-14 lg:col-span-8">
          <Block title={labels.overview}>
            <p>{project.overview}</p>
          </Block>
          <Block title={labels.context}>
            <p>{project.context}</p>
          </Block>
          <Block title={labels.challenge}>
            <p>{project.challenge}</p>
          </Block>
          <Block title={labels.objectives}>
            <CheckList items={project.objectives} />
          </Block>
          <Block title={labels.solution}>
            <p>{project.solution}</p>
          </Block>
          <Block title={isConcept ? labels.implementationConcept : labels.implementation}>
            <ol className="grid gap-px overflow-hidden rounded-[1.25rem] border border-rule bg-rule">
              {project.implementation.map((step, index) => (
                <li key={step.title} className="bg-paper p-6">
                  <span className="font-mono text-xs text-bronze">
                    {t.labels.step} {index + 1}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold tracking-[-0.01em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2">{step.description}</p>
                </li>
              ))}
            </ol>
          </Block>
          <Block title={labels.results}>
            {project.verifiedResults && project.type === "client" ? (
              <CheckList items={project.verifiedResults} />
            ) : (
              <p className="rounded-[1.25rem] bg-paper-2 p-6">{labels.noResults}</p>
            )}
          </Block>
          <Block title={labels.considerations}>
            <CheckList items={project.considerations} />
          </Block>
          <Block title={isConcept ? labels.lessonsConcept : labels.lessons}>
            <CheckList items={project.lessonsLearned} />
          </Block>
        </div>
      </div>

      <CtaBand
        locale={locale}
        heading={labels.ctaHeading}
        text={labels.ctaText}
        serviceSlug={project.related[0]}
      />
      <JsonLd
        data={[
          webPageSchema({
            name: project.title,
            description: project.seo.description,
            path: link("project", { slug: project.slug }),
            locale,
            speakable: SPEAKABLE,
          }),
          breadcrumbSchema(crumbs),
        ]}
      />
    </>
  );
}

function Meta({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="border-t border-rule pt-4">
      <dt className="eyebrow text-ink-3">{label}</dt>
      <dd className="mt-3 text-ink">{children}</dd>
    </div>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-title">{title}</h2>
      <div className="mt-5 max-w-[68ch] text-lg leading-relaxed text-ink-2">{children}</div>
    </section>
  );
}
