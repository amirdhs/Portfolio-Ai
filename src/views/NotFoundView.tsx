import { ButtonLink } from "@/components/ui/Button";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";

export function NotFoundView({ locale }: { locale: Locale }) {
  const { t, link } = getI18n(locale);
  return (
    <section aria-labelledby="not-found-heading" className="grain">
      <div className="container-page py-[var(--space-section)]">
        <p className="eyebrow text-bronze">404</p>
        <h1 id="not-found-heading" className="mt-6 max-w-[16ch] text-display">
          {t.notFound.title}
        </h1>
        <p className="mt-6 max-w-[52ch] text-lead text-ink-2">{t.notFound.text}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href={link("home")}>{t.cta.backHome}</ButtonLink>
          <ButtonLink href={link("services")} variant="secondary">
            {t.cta.allServices}
          </ButtonLink>
          <ButtonLink href={link("contact")} variant="secondary">
            {t.cta.toContact}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
