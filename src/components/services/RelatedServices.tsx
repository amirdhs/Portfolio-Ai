import Link from "next/link";
import { Arrow } from "@/components/ui/Button";
import type { Service } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";

interface RelatedServicesProps {
  services: Service[];
  locale: Locale;
  headingId?: string;
}

export function RelatedServices({
  services,
  locale,
  headingId = "related-services",
}: RelatedServicesProps) {
  const { t, link } = getI18n(locale);
  return (
    <section aria-labelledby={headingId} className="section border-t border-rule bg-paper-2">
      <div className="container-page">
        <h2 id={headingId} className="eyebrow !font-normal !tracking-[0.14em] text-bronze">
          {t.labels.relatedServices}
        </h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={link("service", { slug: service.slug })}
                className="group flex h-full flex-col rounded-[1.25rem] border border-rule bg-paper p-6 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-rule-strong md:p-8"
              >
                <span className="text-xl font-semibold tracking-[-0.02em] [hyphens:auto]">
                  {service.title}
                </span>
                <span className="mt-3 leading-relaxed text-ink-2">{service.shortDescription}</span>
                <span
                  aria-hidden="true"
                  className="mt-auto flex items-center gap-2 pt-6 text-sm font-medium text-bronze-strong"
                >
                  {t.cta.learnMore} <Arrow />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
