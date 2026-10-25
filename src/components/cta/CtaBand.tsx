import { ButtonLink } from "@/components/ui/Button";
import { IconTile } from "@/components/ui/IconTile";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";

interface CtaBandProps {
  locale: Locale;
  heading: string;
  text: string;
  /** Preselects a service (content id) in the inquiry form. */
  serviceSlug?: string;
  id?: string;
}

export function CtaBand({ locale, heading, text, serviceSlug, id = "cta-heading" }: CtaBandProps) {
  const { t, link } = getI18n(locale);
  const query = serviceSlug ? { leistung: serviceSlug } : undefined;
  return (
    <section
      aria-labelledby={id}
      className="glow-center border-t border-rule/60 bg-night text-on-night"
    >
      <div className="scroll-reveal container-page flex flex-col items-center py-[var(--space-section)] text-center">
        <IconTile className="size-16 !rounded-2xl shadow-[0_0_60px_-10px_oklch(70%_0.09_62/0.6)]">
          <path d="M4 5h16v11H8l-4 4zM8 9h8M8 12h5" />
        </IconTile>
        <h2 id={id} className="mt-8 max-w-[22ch] text-display">
          {heading}
        </h2>
        <p className="mt-5 max-w-[56ch] text-lead text-on-night-2">{text}</p>
        <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <ButtonLink variant="on-night" href={link("contact", { query, hash: "anfrage" })}>
            {t.cta.startProject}
          </ButtonLink>
          <ButtonLink
            variant="on-night-outline"
            withArrow={false}
            href={link("contact", { query: { ...query, art: "erstgespraech" }, hash: "anfrage" })}
          >
            {t.cta.bookConsultation}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
