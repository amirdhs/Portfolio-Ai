import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { CtaBand } from "@/components/cta/CtaBand";
import { PageHeader } from "@/components/layout/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { SideHeading } from "@/components/ui/SideHeading";
import { siteConfig } from "@/config/site";
import type { TitledText } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/structured-data";
import { SPEAKABLE, trail } from "./shared";

export function aboutMetadata(locale: Locale): Metadata {
  const page = getI18n(locale).content.pages.about;
  return buildMetadata({
    title: page.title,
    description: page.description,
    route: "about",
    locale,
  });
}

export function AboutView({ locale }: { locale: Locale }) {
  const { t, content, link } = getI18n(locale);
  const { about, pages } = content;
  const crumbs = trail(locale, [{ label: pages.about.title, href: link("about") }]);
  const founder = siteConfig.founder;

  return (
    <>
      <PageHeader
        eyebrow={about.intro.title}
        title={about.intro.heading}
        lead={about.intro.lead}
        breadcrumbs={crumbs}
        breadcrumbsLabel={t.a11y.breadcrumbs}
        locale={locale}
      />

      <Row id="who" label={about.whoWeAre.title}>
        <div className="grid gap-6 text-lead text-ink-2">
          {about.whoWeAre.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Row>

      {/* Rendered only once verified founder details are added to src/config/site.ts. */}
      {founder ? (
        <Row id="founder" label={founder.role[locale]}>
          <div className="grid gap-8 md:grid-cols-[15rem_1fr] md:gap-10">
            <Image
              src={founder.image.src}
              alt={`${founder.name}, ${founder.role[locale]}`}
              width={founder.image.width}
              height={founder.image.height}
              sizes="(min-width: 768px) 240px, 60vw"
              className="aspect-[4/5] w-48 rounded-2xl border border-rule object-cover object-top md:w-full"
            />
            <div>
              <h3 className="text-title">{founder.name}</h3>
              <div className="mt-6 grid gap-4 text-lg leading-relaxed text-ink-2">
                {founder.bio[locale].map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <dl className="mt-8 grid gap-4 border-t border-rule pt-6 sm:grid-cols-[9rem_1fr]">
                {founder.details[locale].map((row) => (
                  <div key={row.label} className="contents">
                    <dt className="text-sm text-bronze">{row.label}</dt>
                    <dd className="text-ink-2">{row.value}</dd>
                  </div>
                ))}
              </dl>
              {siteConfig.socials.length > 0 ? (
                <ul className="mt-6 flex flex-wrap gap-5 text-sm">
                  {siteConfig.socials.map((social) => (
                    <li key={social.url}>
                      <a
                        href={social.url}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="link-underline text-ink hover:text-bronze-strong"
                      >
                        {social.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </Row>
      ) : null}

      <section
        aria-labelledby="mission-heading"
        className="grain bg-night py-[var(--space-section)] text-on-night"
      >
        <div className="container-page grid gap-8 md:grid-cols-12">
          <SideHeading id="mission-heading" tone="night">
            {about.mission.title}
          </SideHeading>
          <p className="text-display md:col-span-9">{about.mission.text}</p>
        </div>
      </section>

      <Row id="approach" label={about.approach.title}>
        <div className="grid gap-6 text-lead text-ink-2">
          {about.approach.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Row>

      <Row id="ai" label={about.aiPhilosophy.title} tone="alt">
        <div className="grid gap-6 text-lead text-ink-2">
          {about.aiPhilosophy.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Row>

      <Row id="principles" label={about.principles.title}>
        <ItemGrid items={about.principles.items} />
      </Row>

      <Row id="management" label={about.projectManagement.title} tone="alt">
        <ItemGrid items={about.projectManagement.items} />
      </Row>

      <Row id="long-term" label={about.longTerm.title}>
        <p className="text-lead text-ink-2">{about.longTerm.text}</p>
      </Row>

      <CtaBand locale={locale} heading={pages.about.cta.heading} text={pages.about.cta.text} />
      <JsonLd
        data={[
          webPageSchema({
            name: about.intro.heading,
            description: pages.about.description,
            path: link("about"),
            locale,
            type: "AboutPage",
            speakable: SPEAKABLE,
          }),
          breadcrumbSchema(crumbs),
        ]}
      />
    </>
  );
}

function ItemGrid({ items }: { items: TitledText[] }) {
  return (
    <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.title} className="border-t border-rule-strong/60 pt-5">
          <h3 className="text-xl font-semibold tracking-[-0.02em]">{item.title}</h3>
          <p className="mt-2 leading-relaxed text-ink-2">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}

interface RowProps {
  id: string;
  label: string;
  tone?: "default" | "alt";
  children: ReactNode;
}

function Row({ id, label, tone = "default", children }: RowProps) {
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
