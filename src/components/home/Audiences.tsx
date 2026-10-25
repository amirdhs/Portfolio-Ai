import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";

export function Audiences({ locale }: { locale: Locale }) {
  const { audiences, audienceSection } = getI18n(locale).content.home;
  return (
    <section
      aria-labelledby="audience-heading"
      className="section border-y border-rule/60 bg-paper-2/40"
    >
      <div className="container-page">
        <SectionHeading
          id="audience-heading"
          label={audienceSection.title}
          heading={audienceSection.heading}
          lead={audienceSection.lead}
        />
        <ul className="mt-[var(--space-block)] grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => (
            <li key={audience.title} className="scroll-reveal panel p-6">
              <h3 className="text-lg font-semibold tracking-[-0.02em]">{audience.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-2">{audience.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
