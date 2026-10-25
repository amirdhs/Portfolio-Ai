import { getSiteUrl, siteConfig } from "@/config/site";
import type { FaqItem, Service } from "@/content/types";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "@/i18n/config";
import { getI18n } from "@/i18n/get-i18n";
import { href } from "@/i18n/routes";
import { absoluteUrl } from "./seo";

type Schema = Record<string, unknown>;

/** Organization data — only fields that are actually configured are emitted. */
export function organizationSchema(locale: Locale = DEFAULT_LOCALE): Schema {
  const { contact, legal, socials } = siteConfig;
  const { content } = getI18n(locale);
  const hasAddress = legal.street && legal.postalCode && legal.city;
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${getSiteUrl()}/#organization`,
    name: siteConfig.name,
    ...(legal.legalName ? { legalName: legal.legalName } : {}),
    description: content.pages.home.description,
    url: absoluteUrl(href("home", { locale })),
    logo: absoluteUrl("/brand/amir-logo.png"),
    slogan: siteConfig.tagline,
    areaServed: { "@type": "Country", name: "Deutschland" },
    knowsLanguage: [...LOCALES],
    ...(contact.email || contact.phone
      ? {
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            availableLanguage: [...LOCALES],
            ...(contact.email ? { email: contact.email } : {}),
            ...(contact.phone ? { telephone: contact.phone } : {}),
          },
        }
      : {}),
    ...(siteConfig.founder ? { founder: founderSchema(locale) } : {}),
    ...(contact.email ? { email: contact.email } : {}),
    ...(contact.phone ? { telephone: contact.phone } : {}),
    ...(hasAddress
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: legal.street,
            postalCode: legal.postalCode,
            addressLocality: legal.city,
            addressCountry: "DE",
          },
        }
      : {}),
    ...(socials.length > 0 ? { sameAs: socials.map((s) => s.url) } : {}),
  };
}

function founderSchema(locale: Locale): Schema {
  const founder = siteConfig.founder!;
  return {
    "@type": "Person",
    "@id": `${getSiteUrl()}/#founder`,
    name: founder.name,
    jobTitle: founder.role[locale],
    description: founder.bio[locale].join(" "),
    image: absoluteUrl(founder.image.src),
    url: absoluteUrl(href("about", { locale })),
    knowsAbout: founder.knowsAbout,
    knowsLanguage: [...LOCALES, "fa"],
    ...(siteConfig.socials.length > 0 ? { sameAs: siteConfig.socials.map((s) => s.url) } : {}),
  };
}

const orgRef = () => ({ "@id": `${getSiteUrl()}/#organization` });
const siteRef = () => ({ "@id": `${getSiteUrl()}/#website` });

export function webSiteSchema(locale: Locale = DEFAULT_LOCALE): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${getSiteUrl()}/#website`,
    url: absoluteUrl(href("home", { locale })),
    name: siteConfig.name,
    inLanguage: locale,
    publisher: orgRef(),
  };
}

interface WebPageInput {
  name: string;
  description: string;
  path: string;
  locale: Locale;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "FAQPage";
  /** CSS selectors of the passages best suited to be read aloud by voice assistants. */
  speakable?: string[];
}

/** The page itself: language, freshness (dateModified) and the entities it belongs to. */
export function webPageSchema({
  name,
  description,
  path,
  locale,
  type = "WebPage",
  speakable,
}: WebPageInput): Schema {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: locale,
    isPartOf: siteRef(),
    about: orgRef(),
    dateModified: siteConfig.contentUpdated,
    ...(speakable
      ? { speakable: { "@type": "SpeakableSpecification", cssSelector: speakable } }
      : {}),
  };
}

export function serviceSchema(service: Service, locale: Locale = DEFAULT_LOCALE): Schema {
  const url = absoluteUrl(href("service", { slug: service.slug, locale }));
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.seo.description,
    url,
    mainEntityOfPage: { "@id": `${url}#webpage` },
    inLanguage: locale,
    provider: orgRef(),
    areaServed: { "@type": "Country", name: "Deutschland" },
  };
}

export function faqSchema(
  items: FaqItem[],
  page?: { path: string; locale: Locale },
): Schema & { mainEntity: Schema[] } {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(page
      ? {
          url: absoluteUrl(page.path),
          inLanguage: page.locale,
          isPartOf: siteRef(),
          dateModified: siteConfig.contentUpdated,
        }
      : {}),
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/** Step-by-step process (used for the eight-stage collaboration process). */
export function howToSchema(
  name: string,
  description: string,
  steps: { name: string; text: string }[],
  locale: Locale,
): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    inLanguage: locale,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function definedTermSetSchema(
  name: string,
  terms: { term: string; definition: string }[],
  path: string,
  locale: Locale,
): Schema {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name,
    url,
    inLanguage: locale,
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
      inDefinedTermSet: url,
    })),
  };
}

export function breadcrumbSchema(
  items: { label: string; href: string }[],
): Schema & { itemListElement: Schema[] } {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };
}
