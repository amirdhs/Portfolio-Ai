import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";

export function ProcessPreview({ locale }: { locale: Locale }) {
  const { t, content, link } = getI18n(locale);
  return (
    <section
      aria-labelledby="process-heading"
      className="section grain border-y border-rule/60 bg-night text-on-night"
    >
      <div className="container-page">
        <SectionHeading
          id="process-heading"
          label={content.home.processSection.title}
          heading={content.home.processSection.heading}
        />
        <ol className="relative mt-[var(--space-block)] grid gap-6 md:grid-cols-4">
          {content.processOverview.map((stage, index) => (
            <li key={stage.title} className="scroll-reveal panel relative p-6">
              <span className="grid size-9 place-items-center rounded-full bg-accent text-sm font-medium text-on-accent">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em]">{stage.title}</h3>
              <p className="mt-2 leading-relaxed text-on-night-2">{stage.description}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 flex justify-center">
          <ButtonLink href={link("process")} variant="on-night-outline">
            {t.cta.processDetails}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
