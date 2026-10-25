import { DEFAULT_LOCALE, type Locale } from "./config";
import { de, type Dictionary } from "./dictionaries/de";
import { en } from "./dictionaries/en";

const DICTIONARIES: Record<Locale, Dictionary> = { de, en };

export function getDictionary(locale: Locale = DEFAULT_LOCALE): Dictionary {
  return DICTIONARIES[locale];
}

export type { Dictionary };
