import type { ServiceSlug } from "@/content/types";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "./config";

/**
 * Route map: every internal link is built from these keys, so localized paths
 * live in one place. German is served at the root, English under /en.
 */
export const ROUTES = {
  home: { de: "/", en: "/en" },
  services: { de: "/leistungen", en: "/en/services" },
  service: { de: "/leistungen/[slug]", en: "/en/services/[slug]" },
  solutions: { de: "/loesungen", en: "/en/solutions" },
  projects: { de: "/projekte", en: "/en/projects" },
  project: { de: "/projekte/[slug]", en: "/en/projects/[slug]" },
  about: { de: "/ueber-uns", en: "/en/about" },
  process: { de: "/prozess", en: "/en/process" },
  faq: { de: "/faq", en: "/en/faq" },
  glossary: { de: "/glossar", en: "/en/glossary" },
  costs: { de: "/kosten", en: "/en/costs" },
  contact: { de: "/kontakt", en: "/en/contact" },
  imprint: { de: "/impressum", en: "/en/imprint" },
  privacy: { de: "/datenschutz", en: "/en/privacy" },
  cookies: { de: "/cookie-einstellungen", en: "/en/cookie-settings" },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof ROUTES;
type DynamicRouteKey = "service" | "project";

/**
 * Localized URL slugs. Content ids are the German slugs; every id must be listed
 * here (a unit test enforces it). A locale without an entry uses the id itself.
 */
const SLUGS: Record<DynamicRouteKey, Record<string, Partial<Record<Locale, string>>>> = {
  service: {
    webdesign: { en: "web-design" },
    seo: { en: "seo" },
    "ki-assistenten": { en: "ai-assistants" },
    "ki-agenten": { en: "ai-agents" },
    automatisierung: { en: "automation" },
    integrationen: { en: "integrations" },
    "wartung-support": { en: "maintenance-support" },
  } satisfies Record<ServiceSlug, Partial<Record<Locale, string>>>,
  project: {
    "relaunch-dienstleister-website": { en: "service-business-website-relaunch" },
    "ki-faq-assistent": { en: "ai-faq-assistant" },
    "e-mail-eingang-automatisierung": { en: "inbound-email-automation" },
    "crm-synchronisation": { en: "crm-synchronisation" },
  },
};

export interface HrefOptions {
  /** Content id (German slug); translated to the locale's URL slug. */
  slug?: string;
  query?: Record<string, string | undefined>;
  hash?: string;
  locale?: Locale;
}

export const staticRouteKeys = (Object.keys(ROUTES) as RouteKey[]).filter(
  (key) => !ROUTES[key][DEFAULT_LOCALE].includes("["),
);

export function localizedSlug(key: DynamicRouteKey, id: string, locale: Locale): string {
  return SLUGS[key][id]?.[locale] ?? id;
}

/** Maps a localized URL slug back to the content id, or undefined if unknown. */
export function resolveSlug(
  key: DynamicRouteKey,
  slug: string,
  locale: Locale,
): string | undefined {
  const ids = Object.keys(SLUGS[key]);
  return ids.find((id) => localizedSlug(key, id, locale) === slug);
}

function isDynamic(key: RouteKey): key is DynamicRouteKey {
  return key === "service" || key === "project";
}

export function href(key: RouteKey, options: HrefOptions = {}): string {
  const { slug, query, hash, locale = DEFAULT_LOCALE } = options;
  const pattern: string = ROUTES[key][locale];

  let path = pattern;
  if (isDynamic(key)) {
    if (!slug) throw new Error(`Route "${key}" requires a slug`);
    path = pattern.replace("[slug]", encodeURIComponent(localizedSlug(key, slug, locale)));
  }

  const params = new URLSearchParams();
  for (const [name, value] of Object.entries(query ?? {})) {
    if (value) params.set(name, value);
  }
  const search = params.toString();

  return `${path}${search ? `?${search}` : ""}${hash ? `#${hash}` : ""}`;
}

export interface RouteMatch {
  locale: Locale;
  key: RouteKey;
  id?: string;
}

/** Identifies which route (and content id) a pathname belongs to. */
export function matchRoute(pathname: string): RouteMatch | null {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  // Check English first: its paths are prefixed and never collide with German ones.
  for (const locale of [...LOCALES].reverse()) {
    for (const key of Object.keys(ROUTES) as RouteKey[]) {
      const pattern: string = ROUTES[key][locale];
      if (!isDynamic(key)) {
        if (pattern === path) return { locale, key };
        continue;
      }
      const prefix = pattern.replace("/[slug]", "/");
      if (!path.startsWith(prefix)) continue;
      const slug = decodeURIComponent(path.slice(prefix.length));
      if (!slug || slug.includes("/")) continue;
      const id = resolveSlug(key, slug, locale);
      if (id) return { locale, key, id };
    }
  }
  return null;
}

/** The equivalent page in another language, or that language's homepage. */
export function switchLocalePath(pathname: string, target: Locale): string {
  const match = matchRoute(pathname);
  if (!match) return href("home", { locale: target });
  return href(match.key, { slug: match.id, locale: target });
}
