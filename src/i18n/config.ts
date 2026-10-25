export const LOCALES = ["de", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "de";

/** BCP 47 tags, Open Graph locales and switcher labels per site locale. */
export const LOCALE_META: Record<
  Locale,
  { htmlLang: string; ogLocale: string; label: string; name: string }
> = {
  de: { htmlLang: "de", ogLocale: "de_DE", label: "DE", name: "Deutsch" },
  en: { htmlLang: "en", ogLocale: "en_US", label: "EN", name: "English" },
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
