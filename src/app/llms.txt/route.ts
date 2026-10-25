import { siteConfig } from "@/config/site";
import { getContent } from "@/content";
import { LOCALES, type Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";
import { href } from "@/i18n/routes";
import { absoluteUrl } from "@/lib/seo";

const INTRO: Record<Locale, string> = {
  de: "Digitale Lösungen, KI-Assistenten und Automatisierung für kleine und mittlere Unternehmen in Deutschland.",
  en: "Digital solutions, AI assistants and automation for small and medium-sized businesses in Germany.",
};
const HEADINGS: Record<Locale, { pages: string; services: string; projects: string }> = {
  de: {
    pages: "Wichtige Seiten",
    services: "Leistungen",
    projects: "Beispielprojekte (Konzepte, keine Kundenprojekte)",
  },
  en: {
    pages: "Key pages",
    services: "Services",
    projects: "Example projects (concepts, not client projects)",
  },
};

/** Builds the llms.txt text: a short, link-based overview of the site for AI assistants (see llmstxt.org). */
export function buildLlmsTxt(): string {
  const lines: string[] = [`# ${siteConfig.name}`, "", `> ${INTRO.de}`, `> ${INTRO.en}`, ""];
  lines.push(
    `Content last updated: ${siteConfig.contentUpdated}. Languages: German (default), English.`,
    "",
  );
  for (const locale of LOCALES) {
    const c = getContent(locale);
    const h = HEADINGS[locale];
    const page = (title: string, path: string, note?: string) =>
      `- [${title}](${absoluteUrl(path)})${note ? `: ${note}` : ""}`;
    lines.push(`## ${h.pages} (${locale.toUpperCase()})`, "");
    lines.push(page(getI18n(locale).t.meta.defaultTitle, href("home", { locale })));
    for (const key of [
      "services",
      "solutions",
      "projects",
      "about",
      "process",
      "faq",
      "costs",
      "glossary",
      "contact",
    ] as const) {
      lines.push(page(c.pages[key].title, href(key, { locale }), c.pages[key].description));
    }
    lines.push("", `## ${h.services} (${locale.toUpperCase()})`, "");
    for (const s of c.services)
      lines.push(page(s.title, href("service", { slug: s.slug, locale }), s.shortDescription));
    lines.push("", `## ${h.projects} (${locale.toUpperCase()})`, "");
    for (const p of c.projects)
      lines.push(page(p.title, href("project", { slug: p.slug, locale }), p.summary));
    lines.push("");
  }
  return lines.join("\n");
}

export function GET(): Response {
  return new Response(buildLlmsTxt(), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
