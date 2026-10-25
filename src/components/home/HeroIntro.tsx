import type { Locale } from "@/i18n/config";
import { LastUpdated } from "@/components/layout/LastUpdated";
import { getI18n } from "@/i18n/get-i18n";

/** Who AMIR works for. */
export function HeroIntro({ locale }: { locale: Locale }) {
  const { content } = getI18n(locale);
  const { hero } = content.home;
  return (
    <section aria-label={hero.eyebrow} className="border-b border-rule bg-paper-2">
      <div className="container-page flex flex-col items-center py-[var(--space-block)] text-center">
        <p className="max-w-[60ch] text-lead text-ink-2">{hero.audience}</p>
        <LastUpdated locale={locale} className="mt-4" />
      </div>
    </section>
  );
}
