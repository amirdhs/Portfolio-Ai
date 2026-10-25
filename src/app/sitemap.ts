import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getContent } from "@/content";
import { LOCALES } from "@/i18n/config";
import { href, staticRouteKeys, type RouteKey } from "@/i18n/routes";
import { absoluteUrl } from "@/lib/seo";

const PRIORITY: Partial<Record<RouteKey, number>> = {
  home: 1,
  services: 0.9,
  service: 0.8,
  contact: 0.8,
  faq: 0.7,
  glossary: 0.6,
  costs: 0.7,
  solutions: 0.7,
  projects: 0.6,
  project: 0.5,
  imprint: 0.2,
  privacy: 0.2,
  cookies: 0.1,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const { services, projects } = getContent();
  const pages: { key: RouteKey; slug?: string }[] = [
    ...staticRouteKeys.map((key) => ({ key })),
    ...services.map((s) => ({ key: "service" as const, slug: s.slug })),
    ...projects.map((p) => ({ key: "project" as const, slug: p.slug })),
  ];

  return pages.flatMap(({ key, slug }) => {
    const languages = Object.fromEntries(
      LOCALES.map((locale) => [locale, absoluteUrl(href(key, { slug, locale }))]),
    );
    return LOCALES.map((locale) => ({
      url: languages[locale],
      lastModified: siteConfig.contentUpdated,
      changeFrequency: "monthly" as const,
      priority: PRIORITY[key] ?? 0.5,
      alternates: { languages },
    }));
  });
}
