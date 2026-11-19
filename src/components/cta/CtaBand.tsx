import { ButtonLink } from "@/components/ui/Button";
import { GlitchReveal } from "@/components/fx/GlitchReveal";
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
    <section aria-labelledby={id} className="slab relative isolate overflow-hidden">
      <div aria-hidden="true" className="grid-floor" />
      <div className="scroll-reveal container-page flex flex-col items-center py-[var(--space-section)] text-center">
        <p aria-hidden="true" className="font-mono text-xs uppercase tracking-[0.18em] text-ink-2">
          &gt; contact --start
        </p>
        <GlitchReveal>
          <h2
            id={id}
            className="mt-6 max-w-[18ch] text-[clamp(2.4rem,1rem+5vw,5.5rem)] font-bold uppercase leading-[0.92] tracking-[-0.045em]"
          >
            {heading}
          </h2>
        </GlitchReveal>
        <p className="mt-6 max-w-[56ch] text-lead text-ink-2">{text}</p>
        <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <ButtonLink variant="on-lime" href={link("contact", { query, hash: "anfrage" })}>
            {t.cta.startProject}
          </ButtonLink>
          <ButtonLink
            variant="on-lime-outline"
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
