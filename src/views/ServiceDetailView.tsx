import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { CtaBand } from "@/components/cta/CtaBand";
import { PageHeader } from "@/components/layout/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ButtonLink } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { FaqList } from "@/components/ui/FaqList";
import { SideHeading } from "@/components/ui/SideHeading";
import type { Service } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";
import { localizedSlug, resolveSlug } from "@/i18n/routes";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema, webPageSchema } from "@/lib/structured-data";
import { SPEAKABLE, trail } from "./shared";

/** URL params for every service in a locale. */
export function serviceParams(locale: Locale): { slug: string }[] {
  return getI18n(locale).content.services.map((service) => ({
    slug: localizedSlug("service", service.slug, locale),
  }));
}

function findService(locale: Locale, urlSlug: string): Service | undefined {
  const id = resolveSlug("service", urlSlug, locale);
  return id ? getI18n(locale).content.getService(id) : undefined;
}

export function serviceMetadata(locale: Locale, urlSlug: string): Metadata {
  const service = findService(locale, urlSlug);
  if (!service) return {};
  return buildMetadata({
    title: service.seo.title,
    description: service.seo.description,
    route: "service",
    slug: service.slug,
    locale,
  });
}

export function ServiceDetailView({ locale, urlSlug }: { locale: Locale; urlSlug: string }) {
  const service = findService(locale, urlSlug);
  if (!service) notFound();

  const { t, content, link } = getI18n(locale);
  const labels = t.serviceDetail;
  const id = service.slug;
  const crumbs = trail(locale, [
    { label: content.pages.services.title, href: link("services") },
    { label: service.title, href: link("service", { slug: id }) },
  ]);

  return (
    <>
      <PageHeader
        eyebrow={t.labels.service}
        title={service.title}
        lead={service.shortDescription}
        breadcrumbs={crumbs}
        breadcrumbsLabel={t.a11y.breadcrumbs}
        locale={locale}
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={link("contact", { query: { leistung: id }, hash: "anfrage" })}>
            {t.cta.requestProposal}
          </ButtonLink>
          <ButtonLink
            href={link("contact", {
              query: { leistung: id, art: "erstgespraech" },
              hash: "anfrage",
            })}
            variant="secondary"
          >
            {t.cta.bookConsultation}
          </ButtonLink>
        </div>
      </PageHeader>

      <Section id="intro" label={labels.sections.intro(service.title)}>
        <div className="grid gap-6 text-lead text-ink-2">
          {service.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-10 rounded-[1.25rem] border border-gold/25 bg-night p-6 text-on-night shadow-[0_0_80px_-30px_oklch(80%_0.095_80/0.35)] md:p-8">
          <span className="eyebrow block text-gold">{t.labels.yourBenefit}</span>
          <span className="mt-3 block text-title">{service.primaryBenefit}</span>
        </p>
      </Section>

      <Section id="audience" label={labels.sections.audience()} tone="alt">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">{labels.typicalSituations}</h3>
            <CheckList items={service.problems} className="mt-6" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{labels.whoFor}</h3>
            <CheckList items={service.audience} className="mt-6" />
          </div>
        </div>
      </Section>

      <Section id="scope" label={labels.sections.scope()}>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">{labels.included}</h3>
            <CheckList items={service.included} className="mt-6" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{labels.deliverables}</h3>
            <CheckList items={service.deliverables} className="mt-6" />
          </div>
        </div>
      </Section>

      <Section id="examples" label={labels.sections.examples()} tone="alt">
        <p className="max-w-[60ch] text-ink-2">{labels.examplesNote}</p>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {service.exampleUseCases.map((useCase) => (
            <li key={useCase.title} className="rounded-[1.25rem] border border-rule bg-paper p-6">
              <span className="eyebrow text-bronze">{t.labels.example}</span>
              <h3 className="mt-4 text-lg font-semibold tracking-[-0.01em]">{useCase.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-2">{useCase.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="process" label={labels.sections.process()}>
        <ol className="grid gap-px overflow-hidden rounded-[1.25rem] border border-rule bg-rule md:grid-cols-2">
          {service.process.map((step, index) => (
            <li key={step.title} className="bg-paper p-6 md:p-8">
              <span className="font-mono text-xs text-bronze">
                {t.labels.step} {index + 1}
              </span>
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em]">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-2">{step.description}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 rounded-[1.25rem] border border-rule-strong/60 p-6 md:p-8">
          <h3 className="text-xl font-semibold">{labels.clientInputs}</h3>
          <CheckList items={service.clientInputs} className="mt-6 md:grid-cols-2 md:gap-x-10" />
        </div>
      </Section>

      <Section id="faq" label={labels.sections.faq(service.title)}>
        <FaqList items={service.faqs} />
      </Section>

      <Section id="sources" label={labels.sections.sources()}>
        <ul className="grid gap-3">
          {service.sources.map((source) => (
            <li key={source.url}>
              <a
                href={source.url}
                rel="noopener"
                target="_blank"
                className="link-underline text-ink-2 hover:text-ink"
              >
                {source.label}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <RelatedServices services={content.getServices(service.related)} locale={locale} />
      <CtaBand
        locale={locale}
        heading={labels.ctaHeading(service.title)}
        text={labels.ctaText}
        serviceSlug={id}
      />
      <JsonLd
        data={[
          webPageSchema({
            name: service.title,
            description: service.seo.description,
            path: link("service", { slug: id }),
            locale,
            speakable: SPEAKABLE,
          }),
          serviceSchema(service, locale),
          faqSchema(service.faqs, { path: link("service", { slug: id }), locale }),
          breadcrumbSchema(crumbs),
        ]}
      />
    </>
  );
}

interface SectionProps {
  id: string;
  label: string;
  tone?: "default" | "alt";
  children: ReactNode;
}

function Section({ id, label, tone = "default", children }: SectionProps) {
  return (
    <section
      aria-labelledby={`${id}-heading`}
      className={`py-[var(--space-block)] ${tone === "alt" ? "border-y border-rule bg-paper-2" : ""}`}
    >
      <div className="scroll-reveal container-page grid gap-8 md:grid-cols-12">
        <SideHeading id={`${id}-heading`}>{label}</SideHeading>
        <div className="md:col-span-9">{children}</div>
      </div>
    </section>
  );
}
