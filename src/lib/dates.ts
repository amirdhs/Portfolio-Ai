import type { Locale } from "@/i18n/config";

const INTL_LOCALE: Record<Locale, string> = { de: "de-DE", en: "en-GB" };

/** "2026-10-18" → "18. Oktober 2026" / "18 October 2026" (UTC, so it never shifts by timezone). */
export function formatDate(iso: string, locale: Locale): string {
  return new Intl.DateTimeFormat(INTL_LOCALE[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}
