import type { Crumb } from "@/components/layout/Breadcrumbs";
import type { Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";

/** Breadcrumb trail that always starts at the locale's homepage. */
export function trail(locale: Locale, items: Crumb[]): Crumb[] {
  const { t, link } = getI18n(locale);
  return [{ label: t.labels.home, href: link("home") }, ...items];
}

/** Marks the passages (page title and lead) that voice assistants may read aloud; see data-speakable in PageHeader and Hero. */
export const SPEAKABLE = ["[data-speakable]"];
