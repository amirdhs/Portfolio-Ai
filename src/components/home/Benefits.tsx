import { ICON_PATHS, IconTile } from "@/components/ui/IconTile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";

export function Benefits({ locale }: { locale: Locale }) {
  const { benefits, benefitsSection } = getI18n(locale).content.home;
  return (
    <section
      aria-labelledby="benefits-heading"
      className="section border-y border-rule/60 bg-paper-2/40"
    >
      <div className="container-page">
        <SectionHeading
          id="benefits-heading"
          label={benefitsSection.title}
          heading={benefitsSection.heading}
        />
        <ul className="mt-[var(--space-block)] grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <li key={benefit.title} className="scroll-reveal panel p-6">
              <IconTile>{ICON_PATHS[(index + 3) % ICON_PATHS.length]}</IconTile>
              <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em]">{benefit.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-2">{benefit.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
