import { ICON_PATHS, IconTile } from "@/components/ui/IconTile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";

export function WhyAmir({ locale }: { locale: Locale }) {
  const { principles, whySection } = getI18n(locale).content.home;
  return (
    <section aria-labelledby="why-heading" className="section">
      <div className="container-page">
        <SectionHeading id="why-heading" label={whySection.title} heading={whySection.heading} />
        <ul className="mt-[var(--space-block)] grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => (
            <li key={principle.title} className="scroll-reveal panel flex gap-4 p-6">
              <IconTile>{ICON_PATHS[(index + 5) % ICON_PATHS.length]}</IconTile>
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.02em]">{principle.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-2">{principle.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
