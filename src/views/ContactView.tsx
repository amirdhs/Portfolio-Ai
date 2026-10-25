import type { Metadata } from "next";
import { InquiryForm } from "@/components/contact/InquiryForm";
import { PageHeader } from "@/components/layout/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { CheckList } from "@/components/ui/CheckList";
import { FaqList } from "@/components/ui/FaqList";
import { SideHeading } from "@/components/ui/SideHeading";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/structured-data";
import { SPEAKABLE, trail } from "./shared";

export function contactMetadata(locale: Locale): Metadata {
  const page = getI18n(locale).content.pages.contact;
  return buildMetadata({
    title: page.title,
    description: page.description,
    route: "contact",
    locale,
  });
}

export function ContactView({ locale }: { locale: Locale }) {
  const { t, content, link } = getI18n(locale);
  const page = content.pages.contact;
  const crumbs = trail(locale, [{ label: page.title, href: link("contact") }]);
  const { email, phone, responseTimeBusinessDays } = siteConfig.contact;
  const serviceLabels = Object.fromEntries(content.services.map((s) => [s.slug, s.title]));

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
      <div className="container-page grid gap-14 py-[var(--space-block)] lg:grid-cols-12">
        <section
          aria-labelledby="anfrage-heading"
          id="anfrage"
          className="scroll-mt-28 lg:col-span-8"
        >
          <h2 id="anfrage-heading" className="text-title">
            {page.formTitle}
          </h2>
          <div className="mt-8">
            <InquiryForm
              locale={locale}
              t={t.form}
              serviceLabels={serviceLabels}
              privacyHref={link("privacy")}
              contactEmail={email}
              responseTimeDays={responseTimeBusinessDays}
            />
          </div>
        </section>

        <aside className="grid content-start gap-10 lg:col-span-4">
          <section aria-labelledby="prepare-heading">
            <h2 id="prepare-heading" className="eyebrow text-bronze">
              {page.prepareTitle}
            </h2>
            <CheckList items={page.prepare} className="mt-6" />
          </section>
          <section
            aria-labelledby="direct-heading"
            className="rounded-[1.25rem] border border-gold/25 bg-night p-6 text-on-night shadow-[0_0_80px_-30px_oklch(80%_0.095_80/0.35)] md:p-8"
          >
            <h2 id="direct-heading" className="eyebrow text-gold">
              {page.directTitle}
            </h2>
            {email || phone ? (
              <ul className="mt-5 grid gap-3 text-lg">
                {email ? (
                  <li>
                    <a href={`mailto:${email}`} className="link-underline">
                      {email}
                    </a>
                  </li>
                ) : null}
                {phone ? (
                  <li>
                    <a href={`tel:${phone.replace(/[^+\d]/g, "")}`} className="link-underline">
                      {phone}
                    </a>
                  </li>
                ) : null}
              </ul>
            ) : (
              <p className="mt-5 leading-relaxed text-on-night-2">{page.directFallback}</p>
            )}
          </section>

          <section aria-labelledby="next-heading">
            <h2 id="next-heading" className="eyebrow text-bronze">
              {page.nextStepsTitle}
            </h2>
            <ol className="mt-6 grid gap-5">
              {page.nextSteps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full border border-bronze font-mono text-xs text-bronze">
                    {index + 1}
                  </span>
                  <p className="leading-relaxed text-ink-2">{step}</p>
                </li>
              ))}
            </ol>
          </section>
        </aside>
      </div>
      <section
        aria-labelledby="contact-faq-heading"
        className="border-t border-rule py-[var(--space-block)]"
      >
        <div className="container-page grid gap-8 md:grid-cols-12">
          <SideHeading id="contact-faq-heading">{page.faqTitle}</SideHeading>
          <div className="md:col-span-9">
            <FaqList items={page.faqs} />
          </div>
        </div>
      </section>
      <JsonLd
        data={[
          webPageSchema({
            name: page.heading,
            description: page.description,
            path: link("contact"),
            locale,
            type: "ContactPage",
            speakable: SPEAKABLE,
          }),
          faqSchema(page.faqs, { path: link("contact"), locale }),
          breadcrumbSchema(crumbs),
        ]}
      />
    </>
  );
}
