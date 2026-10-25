import type { ServiceSlug, TitledText } from "../types";

export interface ServiceCategory {
  title: string;
  description: string;
  benefit: string;
  /** First slug is the primary link target. */
  slugs: ServiceSlug[];
}

export const hero = {
  eyebrow: "Digital · KI · Automatisierung",
  headline: ["Digitale Lösungen.", "Intelligente Automatisierung.", "Messbarer Erfolg."],
  lead: "Wir entwickeln moderne Websites, verbessern Ihre Sichtbarkeit bei Google und automatisieren wiederkehrende Geschäftsprozesse mit KI.",
  audience:
    "Für kleine und mittlere Unternehmen, Dienstleister und Organisationen in Deutschland, die online mehr erreichen und im Alltag Zeit gewinnen möchten.",
  points: [
    "Mehr qualifizierte Anfragen über Ihre Website",
    "Weniger manuelle Routinearbeit",
    "Systeme, die zusammenarbeiten",
  ],
};

export const heroVisual = {
  posterAlt: "Ein abstrakter Tunnel aus goldenen Lichtfunken auf dunklem Grund.",
  chat: {
    title: "KI-Assistent",
    example: "Beispiel-Dialog",
    question: "Können Sie mir ein Angebot für eine neue Website erstellen?",
    answer:
      "Gerne. Dafür brauche ich ein paar Angaben: Welche Seiten planen Sie, und gibt es schon eine Website? Danach leite ich Ihre Anfrage an das Team weiter.",
    replies: ["Neue Website", "Bestehende überarbeiten"],
    handover: "Anfrage an das Team übergeben",
    inputPlaceholder: "Nachricht schreiben …",
  },
};

export const tools = {
  title: "Werkzeuge und Technologien, mit denen wir arbeiten",
  items: [
    "Next.js",
    "React",
    "WordPress",
    "Python",
    "FastAPI",
    "Flask",
    "PostgreSQL",
    "n8n",
    "LangChain",
    "OpenAI",
    "Mistral",
    "RAG",
    "Docker",
    "REST APIs",
    "Git",
  ],
};

export const servicesSection = {
  title: "Leistungen",
  heading: "Alles, was Ihr Unternehmen digital weiterbringt – aus einer Hand.",
  lead: "Von der Website über die Sichtbarkeit bei Google bis zur KI-gestützten Automatisierung: Die Leistungen greifen ineinander, lassen sich aber auch einzeln beauftragen.",
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Website Design & Entwicklung",
    description:
      "Schnelle, responsive Websites mit klarer Struktur, die Ihr Angebot verständlich erklären.",
    benefit: "Mehr Vertrauen und mehr Anfragen über Ihre Website.",
    slugs: ["webdesign"],
  },
  {
    title: "Suchmaschinenoptimierung (SEO)",
    description:
      "Technische Optimierung, hilfreiche Inhalte und lokale Sichtbarkeit für relevante Suchanfragen.",
    benefit: "Sie werden von Menschen gefunden, die nach Ihren Leistungen suchen.",
    slugs: ["seo"],
  },
  {
    title: "KI-Assistenten & KI-Agenten",
    description:
      "Assistenten, die Fragen auf Basis Ihrer Inhalte beantworten, und Agenten, die mehrstufige Aufgaben vorbereiten.",
    benefit: "Schnellere Antworten und Entlastung bei wiederkehrenden Aufgaben.",
    slugs: ["ki-assistenten", "ki-agenten"],
  },
  {
    title: "Prozessautomatisierung",
    description:
      "Wiederkehrende Abläufe wie E-Mail-Verteilung, Dokumentenablage oder Datenübertragung automatisieren.",
    benefit: "Weniger Routinearbeit und weniger Übertragungsfehler.",
    slugs: ["automatisierung"],
  },
  {
    title: "Software- & Systemintegrationen",
    description: "CRM, Website, E-Mail und Fachanwendungen über ihre Schnittstellen verbinden.",
    benefit: "Ein einheitlicher Datenstand ohne doppelte Pflege.",
    slugs: ["integrationen"],
  },
  {
    title: "Betreuung & Wartung",
    description: "Updates, Sicherheit, Überwachung und Weiterentwicklung nach dem Livegang.",
    benefit: "Ihre digitale Infrastruktur bleibt zuverlässig und aktuell.",
    slugs: ["wartung-support"],
  },
];

export const benefitsSection = {
  title: "Ihr Nutzen",
  heading: "Es geht nicht um Technik. Es geht um Ergebnisse für Ihr Geschäft.",
};

export const benefits: TitledText[] = [
  {
    title: "Stärkerer Online-Auftritt",
    text: "Ein professioneller, schneller Auftritt, der Ihr Angebot klar erklärt und Vertrauen schafft.",
  },
  {
    title: "Mehr qualifizierte Anfragen",
    text: "Klare Handlungsaufforderungen und strukturierte Formulare liefern Anfragen, mit denen Ihr Team direkt arbeiten kann.",
  },
  {
    title: "Bessere Sichtbarkeit",
    text: "Eine technisch saubere Website und hilfreiche Inhalte verbessern die Voraussetzungen, in Suchmaschinen gefunden zu werden.",
  },
  {
    title: "Weniger manuelle Arbeit",
    text: "Wiederkehrende Aufgaben laufen automatisch – Ihr Team gewinnt Zeit für Kunden und anspruchsvolle Arbeit.",
  },
  {
    title: "Verbundene Systeme",
    text: "Daten fließen zwischen CRM, E-Mail, Website und Buchhaltung, statt mehrfach eingegeben zu werden.",
  },
  {
    title: "Effizientere Abläufe",
    text: "Klar dokumentierte, verlässliche Prozesse, die nicht vom Gedächtnis einzelner Personen abhängen.",
  },
  {
    title: "Praktische KI",
    text: "KI dort, wo sie im Alltag tatsächlich hilft – mit klaren Grenzen und nachvollziehbaren Ergebnissen.",
  },
  {
    title: "Gepflegte Infrastruktur",
    text: "Updates, Überwachung und Weiterentwicklung sorgen dafür, dass Ihre Lösungen langfristig funktionieren.",
  },
];

export const projectsSection = {
  title: "Projekte",
  heading: "Beispiele, wie wir Aufgaben angehen.",
  lead: "Die folgenden Einträge sind Beispielkonzepte. Sie zeigen unsere Herangehensweise an typische Aufgaben – es handelt sich nicht um Kundenprojekte und es werden keine Ergebnisse behauptet.",
};

export const processSection = {
  title: "Zusammenarbeit",
  heading: "Vier Phasen. Klare Schritte. Keine Blackbox.",
};

export const whySection = {
  title: "Warum AMIR",
  heading: "Ein Ansatz, der auf Klarheit und Verlässlichkeit setzt.",
};

export const principles: TitledText[] = [
  {
    title: "Direkte Kommunikation",
    text: "Sie sprechen direkt mit den Menschen, die Ihr Projekt umsetzen – ohne Umwege über wechselnde Ansprechpartner.",
  },
  {
    title: "Auf Ihr Unternehmen zugeschnitten",
    text: "Keine Lösungen von der Stange: Wir richten uns nach Ihren Abläufen, Systemen und Zielen.",
  },
  {
    title: "KI mit praktischem Nutzen",
    text: "Wir setzen KI ein, wo sie einen konkreten Vorteil bringt – und sagen offen, wenn eine einfachere Lösung besser passt.",
  },
  {
    title: "Transparenter Projektumfang",
    text: "Leistungen, Zeitplan und Preis stehen vor dem Start schriftlich fest. Änderungen werden vorher abgestimmt.",
  },
  {
    title: "Wartbare Umsetzung",
    text: "Verständlicher Code, dokumentierte Abläufe und vollständige Übergabe – damit Sie nicht von uns abhängig sind.",
  },
  {
    title: "Langfristige Betreuung",
    text: "Nach dem Livegang bleiben wir auf Wunsch Ihr Ansprechpartner für Wartung und Weiterentwicklung.",
  },
  {
    title: "Ausrichtung auf Geschäftsziele",
    text: "Wir legen zu Beginn fest, woran sich der Erfolg messen lässt, und richten die Umsetzung daran aus.",
  },
];

export const audienceSection = {
  title: "Für wen",
  heading: "Für Unternehmen, die digital vorankommen wollen.",
  lead: "Unsere Leistungen richten sich an Organisationen, für die eine starke Website, gute Auffindbarkeit und effiziente Abläufe einen spürbaren Unterschied machen.",
};

export const audiences: TitledText[] = [
  {
    title: "Kleine und mittlere Unternehmen",
    text: "die professioneller auftreten und ihre Abläufe vereinfachen möchten.",
  },
  {
    title: "Professionelle Dienstleister",
    text: "die erklärungsbedürftige Leistungen verständlich präsentieren wollen.",
  },
  {
    title: "Lokale Unternehmen",
    text: "die in ihrer Region besser gefunden werden möchten.",
  },
  {
    title: "Beratungsunternehmen",
    text: "die Anfragen strukturieren und Wissen besser nutzen möchten.",
  },
  {
    title: "E-Commerce-Unternehmen",
    text: "die Shop, Warenwirtschaft und Kundenservice verbinden möchten.",
  },
  {
    title: "Organisationen mit viel Verwaltung",
    text: "die wiederkehrende administrative Aufgaben reduzieren möchten.",
  },
];

export const faqSection = {
  title: "Häufige Fragen",
  heading: "Antworten auf das, was oft gefragt wird.",
};

export const finalCta = {
  heading: "Erzählen Sie uns von Ihrer Herausforderung.",
  text: "Beschreiben Sie kurz, was Sie erreichen möchten oder wo es heute hakt. Wir melden uns mit einer ehrlichen Einschätzung – auch wenn sie lautet, dass Sie uns nicht brauchen.",
};
