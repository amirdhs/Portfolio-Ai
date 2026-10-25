import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { FaqList } from "@/components/ui/FaqList";
import type { Service } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";

interface ServiceBlockProps {
  service: Service;
  index: number;
  locale: Locale;
}

/** Compact service summary used on the services overview: all key facts, linking to the detail page. */
export function ServiceBlock({ service, index, locale }: ServiceBlockProps) {
  const { t, link } = getI18n(locale);
  const headingId = `service-${service.slug}`;
  return (
    <section
      aria-labelledby={headingId}
      id={service.slug}
      className="scroll-mt-28 border-t border-rule py-[var(--space-block)]"
    >
      <div className="scroll-reveal grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <span className="font-mono text-xs text-bronze">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h2 id={headingId} className="mt-4 text-title">
            {service.title}
          </h2>
          <p className="mt-4 leading-relaxed text-ink-2">{service.intro[0]}</p>
          <p className="mt-6 border-l-2 border-bronze pl-4 text-ink">
            <span className="eyebrow block text-bronze">{t.labels.benefit}</span>
            <span className="mt-1 block">{service.primaryBenefit}</span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink
              href={link("contact", { query: { leistung: service.slug }, hash: "anfrage" })}
            >
              {t.cta.requestProposal}
            </ButtonLink>
            <ButtonLink href={link("service", { slug: service.slug })} variant="secondary">
              {t.cta.learnMore}
              <span className="sr-only">: {service.title}</span>
            </ButtonLink>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:pl-8">
          <Fact title={t.serviceBlock.problems}>
            <CheckList items={service.problems.slice(0, 3)} />
          </Fact>
          <Fact title={t.serviceBlock.audience}>
            <CheckList items={service.audience.slice(0, 3)} />
          </Fact>
          <Fact title={t.serviceBlock.included}>
            <CheckList items={service.included.slice(0, 5)} />
          </Fact>
          <Fact title={t.serviceBlock.process}>
            <ol className="grid gap-3">
              {service.process.map((step, stepIndex) => (
                <li key={step.title} className="flex gap-3 text-ink-2">
                  <span className="font-mono text-xs leading-6 text-bronze">{stepIndex + 1}</span>
                  {step.title}
                </li>
              ))}
            </ol>
          </Fact>
          <Fact title={t.serviceBlock.inputs} className="sm:col-span-2">
            <CheckList items={service.clientInputs} className="sm:grid-cols-2 sm:gap-x-8" />
          </Fact>
          <div className="sm:col-span-2">
            <h3 className="eyebrow mb-2 text-ink-3">{t.labels.frequentQuestions}</h3>
            <FaqList items={service.faqs.slice(0, 2)} headingLevel="h4" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Fact({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="eyebrow mb-4 text-ink-3">{title}</h3>
      {children}
    </div>
  );
}
