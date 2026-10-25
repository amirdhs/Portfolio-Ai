/**
 * Business facts for AMIR — the single place to update company details.
 *
 * Every value that is not yet confirmed is `null`. Public sections (header,
 * footer, contact page) simply omit null values; legal pages show a clearly
 * marked placeholder instead. Run `pnpm check:launch` to list what is missing.
 * Never fill these fields with invented data.
 */

import type { Locale } from "@/i18n/config";

export interface SocialLink {
  label: string;
  url: string;
}

export interface Founder {
  name: string;
  /** Portrait under /public that the person has approved for publication. */
  image: { src: string; width: number; height: number };
  role: Record<Locale, string>;
  bio: Record<Locale, string[]>;
  /** Short fact rows (focus, languages, education) shown next to the portrait. */
  details: Record<Locale, { label: string; value: string }[]>;
  knowsAbout: string[];
}

export interface LegalDetails {
  /** Registered business name, e.g. "Max Mustermann – AMIR Digital" or "AMIR GmbH". */
  legalName: string | null;
  /** e.g. "Einzelunternehmen", "GmbH", "UG (haftungsbeschränkt)". */
  legalForm: string | null;
  /** Owner or managing director(s). */
  representative: string | null;
  street: string | null;
  postalCode: string | null;
  city: string | null;
  country: string;
  /** USt-IdNr. — only if one has been issued. */
  vatId: string | null;
  /** Set to true only if the business uses the small-business rule (§ 19 UStG). */
  isSmallBusiness: boolean | null;
  registerCourt: string | null;
  registerNumber: string | null;
  /** Person responsible for content (§ 18 Abs. 2 MStV), if different from representative. */
  contentResponsible: string | null;
  /** Mail provider whose SMTP server delivers form inquiries (named in the privacy policy). */
  emailProvider: string | null;
  /** Competent data protection supervisory authority for the business location. */
  dataProtectionAuthority: string | null;
  /** Date of the last legal review of Impressum/Datenschutz, e.g. "2026-11". */
  legalReviewDate: string | null;
}

export interface SiteConfig {
  name: string;
  /** ISO date (YYYY-MM-DD) of the last meaningful content change. Shown on pages, in the sitemap and in structured data: update it when you change texts. */
  contentUpdated: string;
  tagline: string;
  contact: {
    email: string | null;
    phone: string | null;
    /** Typical response time in business days; shown only when set. */
    responseTimeBusinessDays: number | null;
  };
  legal: LegalDetails;
  socials: SocialLink[];
  founder: Founder | null;
  hosting: {
    provider: string;
    address: string;
    region: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "AMIR",
  contentUpdated: "2026-10-25",
  tagline: "Digital · KI · Automatisierung",
  contact: {
    email: "info@amirdhs.com",
    phone: null,
    responseTimeBusinessDays: null,
  },
  legal: {
    legalName: null,
    legalForm: null,
    representative: null,
    street: null,
    postalCode: null,
    city: null,
    country: "Deutschland",
    vatId: null,
    isSmallBusiness: null,
    registerCourt: null,
    registerNumber: null,
    contentResponsible: null,
    emailProvider: "IONOS SE",
    dataProtectionAuthority: null,
    legalReviewDate: null,
  },
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/amir-dehestani" },
    { label: "GitHub", url: "https://github.com/amirdhs" },
  ],
  founder: {
    name: "Amir Dehestani",
    image: { src: "/brand/amir-dehestani.jpg", width: 896, height: 1088 },
    role: { de: "Gründer & Entwickler", en: "Founder & developer" },
    bio: {
      de: [
        "Amir Dehestani ist Back-End-Entwickler und KI-Spezialist mit Sitz in Deutschland. Er entwickelt Websites, Back-End-Systeme, KI-Assistenten und Automatisierungen und verbindet klassische Softwareentwicklung mit praktisch nutzbaren KI-Lösungen.",
        "Seine Laufbahn begann 2020 mit WordPress-Websites und Suchmaschinenoptimierung. Heute liegt der Schwerpunkt auf Python-Back-Ends, REST-APIs, Chatbots und KI-Agenten, unter anderem für Telegram, WhatsApp und Web-Anwendungen, sowie auf n8n-Workflows und RAG-Systemen.",
        "Er absolvierte das Programm Software Engineering mit Schwerpunkt Back-End an der Masterschool in Berlin (2024–2025) und arbeitet strukturiert, lösungsorientiert und mit Blick auf Qualität, Performance und Skalierbarkeit.",
      ],
      en: [
        "Amir Dehestani is a back-end developer and AI specialist based in Germany. He builds websites, back-end systems, AI assistants and automations, combining classic software engineering with AI solutions that work in practice.",
        "His career began in 2020 with WordPress websites and search engine optimisation. Today his focus is on Python back-ends, REST APIs, chatbots and AI agents, including for Telegram, WhatsApp and web applications, as well as n8n workflows and RAG systems.",
        "He completed the Software Engineering programme with a back-end focus at Masterschool in Berlin (2024–2025) and works in a structured, solution-oriented way, with an eye on quality, performance and scalability.",
      ],
    },
    details: {
      de: [
        {
          label: "Schwerpunkte",
          value: "Python, FastAPI, Flask, PostgreSQL, n8n, LangChain, RAG, WordPress",
        },
        {
          label: "Sprachen",
          value: "Deutsch und Englisch (verhandlungssicher), Persisch (Muttersprache)",
        },
        {
          label: "Ausbildung",
          value: "Software Engineering (Back-End), Masterschool Berlin, 2024–2025",
        },
      ],
      en: [
        {
          label: "Focus",
          value: "Python, FastAPI, Flask, PostgreSQL, n8n, LangChain, RAG, WordPress",
        },
        { label: "Languages", value: "German and English (fluent), Persian (native)" },
        {
          label: "Education",
          value: "Software Engineering (back-end), Masterschool Berlin, 2024–2025",
        },
      ],
    },
    knowsAbout: [
      "Python",
      "FastAPI",
      "Flask",
      "PostgreSQL",
      "n8n",
      "LangChain",
      "Retrieval-Augmented Generation",
      "WordPress",
      "REST APIs",
    ],
  },
  hosting: {
    provider: "IONOS SE",
    address: "Elgendorfer Str. 57, 56410 Montabaur",
    region: "Berlin",
  },
};

/**
 * Absolute site origin without trailing slash. Prefers NEXT_PUBLIC_SITE_URL, then the
 * production domain Vercel provides at build time; localhost only for local development.
 */
export function getSiteUrl(): string {
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ?? (vercel ? `https://${vercel}` : "http://localhost:3000");
  return raw.replace(/\/+$/, "");
}
