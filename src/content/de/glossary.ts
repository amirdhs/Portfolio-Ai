import type { ComparisonTable, GlossaryTerm } from "../types";

export const terms: GlossaryTerm[] = [
  {
    id: "seo",
    term: "Suchmaschinenoptimierung (SEO)",
    definition:
      "Suchmaschinenoptimierung (SEO) ist die Verbesserung einer Website, damit sie in Suchmaschinen wie Google für relevante Suchanfragen besser gefunden wird. Dazu gehören eine technisch saubere Website, hilfreiche Inhalte und glaubwürdige Informationen über das Unternehmen.",
  },
  {
    id: "geo",
    term: "Generative Engine Optimization (GEO)",
    definition:
      "Generative Engine Optimization (GEO) ist die Aufbereitung von Inhalten, damit KI-Suchsysteme wie ChatGPT Search, Perplexity oder Google AI Overviews sie verstehen, als vertrauenswürdig einstufen und zitieren. Wichtig sind klare Aussagen, nachprüfbare Quellen und eindeutige Angaben zum Unternehmen.",
  },
  {
    id: "aeo",
    term: "Answer Engine Optimization (AEO)",
    definition:
      "Answer Engine Optimization (AEO) ist die Strukturierung von Inhalten, sodass Suchmaschinen und Sprachassistenten kurze, direkte Antworten daraus übernehmen können. Typische Mittel sind Fragen als Überschriften, knappe Antworten, Listen, Tabellen und FAQ-Markup.",
  },
  {
    id: "ki-assistent",
    term: "KI-Assistent",
    definition:
      "Ein KI-Assistent ist ein Programm, das Fragen in natürlicher Sprache beantwortet, zum Beispiel auf einer Website oder intern im Unternehmen. Er stützt sich auf vorgegebene Inhalte wie FAQs oder Handbücher, nennt Quellen und verweist bei Unsicherheit an einen Menschen.",
  },
  {
    id: "ki-agent",
    term: "KI-Agent",
    definition:
      "Ein KI-Agent ist ein System, das eine Aufgabe in mehreren Schritten selbstständig vorbereitet oder erledigt und dabei Informationen sammelt sowie Aktionen in angebundenen Systemen ausführt. Er arbeitet mit klar festgelegten Befugnissen und Freigabepunkten, an denen ein Mensch prüft.",
  },
  {
    id: "prozessautomatisierung",
    term: "Prozessautomatisierung",
    definition:
      "Prozessautomatisierung ist das regelbasierte, automatische Ausführen wiederkehrender Arbeitsschritte, etwa das Übertragen von Daten zwischen Programmen, das Sortieren von E-Mails oder das Versenden von Erinnerungen. Sie spart Zeit und verringert Übertragungsfehler, ohne dass jeder Schritt von Hand erledigt werden muss.",
  },
  {
    id: "systemintegration",
    term: "Systemintegration",
    definition:
      "Eine Systemintegration ist die Verbindung mehrerer Softwareanwendungen, sodass sie Daten automatisch austauschen, etwa Website, CRM und Buchhaltung. Sie sorgt dafür, dass Informationen nur einmal gepflegt werden müssen und in allen beteiligten Systemen den gleichen Stand haben.",
  },
  {
    id: "api",
    term: "API (Programmierschnittstelle)",
    definition:
      "Eine API (Programmierschnittstelle) ist eine definierte Schnittstelle, über die Programme miteinander Daten austauschen. Ob sich ein System anbinden lässt, hängt meist davon ab, ob der Anbieter eine dokumentierte API bereitstellt und welche Funktionen sie umfasst.",
  },
  {
    id: "crm",
    term: "CRM-System",
    definition:
      "Ein CRM-System (Customer-Relationship-Management) ist eine Software, in der Kontakte, Anfragen, Angebote und die Kommunikation mit Kunden zentral gespeichert werden. Es hilft, den Überblick über Kundenbeziehungen zu behalten und Aufgaben im Team zu verteilen.",
  },
  {
    id: "strukturierte-daten",
    term: "Strukturierte Daten",
    definition:
      "Strukturierte Daten sind maschinenlesbare Zusatzinformationen im Code einer Seite, die Suchmaschinen und KI-Systemen sagen, worum es auf der Seite geht, zum Beispiel um eine Leistung, ein Unternehmen oder häufige Fragen. Sie verwenden meist das Vokabular von schema.org.",
  },
  {
    id: "barrierefreiheit",
    term: "Barrierefreiheit",
    definition:
      "Barrierefreiheit bedeutet, dass eine Website von möglichst allen Menschen genutzt werden kann, auch mit Einschränkungen beim Sehen, Hören, Bewegen oder Verstehen. Orientierung geben die Web Content Accessibility Guidelines (WCAG), zum Beispiel mit ausreichenden Kontrasten und Bedienung per Tastatur.",
  },
  {
    id: "responsives-webdesign",
    term: "Responsives Webdesign",
    definition:
      "Responsives Webdesign ist ein Gestaltungsansatz, bei dem sich eine Website automatisch an die Größe des Geräts anpasst, vom Smartphone bis zum großen Monitor. So müssen Inhalte nur einmal gepflegt werden und sind überall gut lesbar und bedienbar.",
  },
];

export const comparison: ComparisonTable = {
  caption: "KI-Assistent, KI-Agent und Automatisierung im Vergleich",
  headers: ["", "KI-Assistent", "KI-Agent", "Automatisierung"],
  rows: [
    [
      "Hauptaufgabe",
      "Fragen beantworten",
      "Mehrstufige Aufgaben vorbereiten oder erledigen",
      "Wiederkehrende Schritte nach festen Regeln ausführen",
    ],
    [
      "Beispiel",
      "Antwort auf eine Kundenfrage mit Link zur passenden Seite",
      "Anfrage lesen, Angebotsentwurf vorbereiten, Aufgabe im CRM anlegen",
      "Formularanfrage automatisch als Kontakt im CRM speichern",
    ],
    [
      "Umgang mit unklaren Fällen",
      "Verweist an einen Menschen",
      "Bittet an Freigabepunkten um Bestätigung",
      "Meldet Fehler und Ausnahmen zur Prüfung",
    ],
    [
      "Geeignet, wenn",
      "viele ähnliche Fragen auftreten",
      "eine Aufgabe mehrere Quellen und Systeme berührt",
      "der Ablauf klar und regelbasiert ist",
    ],
    [
      "Wichtigste Grenze",
      "Antwortet nur aus den hinterlegten Inhalten",
      "Handelt nur innerhalb festgelegter Befugnisse",
      "Setzt nur um, was sich als Regel beschreiben lässt",
    ],
  ],
};
