import Link from "next/link";
import { Arrow } from "@/components/ui/Button";
import { ICON_PATHS, IconTile } from "@/components/ui/IconTile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ServiceCategory } from "@/content/de/home";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";

export function ServicesOverview({ locale }: { locale: Locale }) {
  const { content } = getI18n(locale);
  const section = content.home.servicesSection;
  return (
    <section aria-labelledby="services-heading" className="section grain">
      <div className="container-page">
        <SectionHeading
          id="services-heading"
          label={section.title}
          heading={section.heading}
          lead={section.lead}
        />
        <ul className="mt-[var(--space-block)] grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {content.home.serviceCategories.map((category, index) => (
            <ServiceCategoryCard
              key={category.title}
              locale={locale}
              category={category}
              index={index}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

interface ServiceCategoryCardProps {
  locale: Locale;
  category: ServiceCategory;
  index: number;
}

function ServiceCategoryCard({ locale, category, index }: ServiceCategoryCardProps) {
  const { t, content, link } = getI18n(locale);
  const multiple = category.slugs.length > 1;
  return (
    <li
      className={`scroll-reveal panel flex flex-col p-6 md:p-8 ${index === 0 ? "panel-featured" : ""}`}
    >
      <IconTile>{ICON_PATHS[index]}</IconTile>
      <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-[-0.02em]">
        {category.title}
      </h3>
      <p className="mt-3 leading-relaxed text-ink-2">{category.description}</p>
      <div className="mt-auto pt-7">
        <p className="rounded-xl border border-rule bg-paper/50 px-4 py-3 text-sm text-ink">
          <span className="mr-2 text-bronze">{t.labels.benefit}</span>
          {category.benefit}
        </p>
        <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
          {category.slugs.map((slug) => (
            <li key={slug}>
              <Link
                href={link("service", { slug })}
                className="group inline-flex items-center gap-2 text-sm font-medium text-bronze-strong hover:text-ink"
              >
                {multiple ? content.getService(slug)?.title : t.cta.learnMore}
                {multiple ? null : <span className="sr-only">: {category.title}</span>}
                <Arrow />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
