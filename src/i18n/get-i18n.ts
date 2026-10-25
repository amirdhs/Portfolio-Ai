import { getContent, type SiteContent } from "@/content";
import type { Locale } from "./config";
import { getDictionary, type Dictionary } from "./index";
import { href, type HrefOptions, type RouteKey } from "./routes";

export interface I18n {
  locale: Locale;
  t: Dictionary;
  content: SiteContent;
  /** href() bound to the current locale. */
  link: (key: RouteKey, options?: Omit<HrefOptions, "locale">) => string;
}

export function getI18n(locale: Locale): I18n {
  return {
    locale,
    t: getDictionary(locale),
    content: getContent(locale),
    link: (key, options = {}) => href(key, { ...options, locale }),
  };
}
