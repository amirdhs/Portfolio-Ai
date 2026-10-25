import type { Locale } from "@/i18n/config";
import { DEFAULT_LOCALE } from "@/i18n/config";
import type { SiteContent } from "./create-content";
import { de } from "./de";
import { en } from "./en";

export type { SiteContent };

const CONTENT: Record<Locale, SiteContent> = { de, en };

export function getContent(locale: Locale = DEFAULT_LOCALE): SiteContent {
  return CONTENT[locale];
}
