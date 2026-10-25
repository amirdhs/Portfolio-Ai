import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";
import { formatDate } from "@/lib/dates";

/** Visible freshness signal; the same date is used in the sitemap and in structured data. */
export function LastUpdated({ locale, className = "" }: { locale: Locale; className?: string }) {
  const { t } = getI18n(locale);
  return (
    <p className={`font-mono text-xs uppercase tracking-[0.12em] text-ink-3 ${className}`}>
      {t.labels.lastUpdated}:{" "}
      <time dateTime={siteConfig.contentUpdated}>
        {formatDate(siteConfig.contentUpdated, locale)}
      </time>
    </p>
  );
}
