import type { CostBlock } from "../types";

export const blocks: CostBlock[] = [
  {
    id: "website",
    service: "webdesign",
    question: "Was beeinflusst die Kosten einer Website?",
    answer:
      "Die Kosten einer Website hängen vor allem vom Umfang und vom Aufwand für Konzeption, Gestaltung und Funktionen ab. Eine kompakte Unternehmensseite ist deutlich weniger aufwendig als eine Website mit vielen Leistungsseiten, mehreren Sprachen und Schnittstellen. Einen Preis nennen wir erst, wenn Ihre Anforderungen klar sind.",
    factors: [
      "Anzahl und Art der Seiten",
      "Aufwand für Konzeption und individuelle Gestaltung",
      "Funktionen wie Formulare, Mehrsprachigkeit oder Suche",
      "Textarbeit und Bildmaterial: wer liefert, wer erstellt",
      "Anbindungen an andere Systeme, etwa CRM oder E-Mail-Dienst",
      "Anforderungen an Barrierefreiheit, Geschwindigkeit und Datenschutz",
    ],
    needed: [
      "Ziel der Website und wichtigste Zielgruppen",
      "Vorhandene Inhalte, Bilder und Logo",
      "Gewünschte Funktionen und Anbindungen",
      "Gewünschter Zeitrahmen",
    ],
  },
  {
    id: "seo",
    service: "seo",
    question: "Was beeinflusst die Kosten für Suchmaschinenoptimierung?",
    answer:
      "Die Kosten für SEO richten sich danach, ob Sie ein einmaliges Projekt oder eine laufende Betreuung wünschen und wie groß und wettbewerbsintensiv Ihr Umfeld ist. Ein technischer Audit mit Maßnahmenplan ist klar abgrenzbar; die fortlaufende Arbeit an Inhalten hängt von Umfang und Zielen ab.",
    factors: [
      "Größe der Website und Zustand der Technik",
      "Wettbewerb um die gewünschten Suchbegriffe",
      "Einmaliges Projekt oder laufende Betreuung",
      "Umfang der Inhalte, die neu erstellt oder überarbeitet werden",
      "Regionale oder mehrsprachige Ausrichtung",
      "Umfang von Auswertung und Berichten",
    ],
    needed: [
      "Zugang zur Website und zur Google Search Console",
      "Wichtigste Leistungen, Regionen und Zielgruppen",
      "Bekannte Mitbewerber",
      "Bisherige SEO-Maßnahmen, falls vorhanden",
    ],
  },
  {
    id: "ki-assistent",
    service: "ki-assistenten",
    question: "Was beeinflusst die Kosten eines KI-Assistenten?",
    answer:
      "Die Kosten eines KI-Assistenten hängen davon ab, wie viele Inhalte aufbereitet werden müssen, wo er eingesetzt wird und welche Anforderungen an Datenschutz und Übergabe an Menschen bestehen. Hinzu kommen laufende Nutzungskosten des gewählten Sprachmodells, die wir vorab erläutern.",
    factors: [
      "Menge und Qualität der vorhandenen Inhalte, etwa FAQs und Dokumente",
      "Einsatzort: Website, Kundenservice oder intern",
      "Anforderungen an Datenschutz und Datenstandort",
      "Anbindung an andere Systeme, etwa für die Übergabe an Mitarbeitende",
      "Laufende Nutzungskosten des Sprachmodells",
      "Umfang von Tests und Pflege der Wissensbasis",
    ],
    needed: [
      "Typische Fragen Ihrer Kunden oder Mitarbeitenden",
      "Vorhandene Inhalte und Dokumente",
      "Themen, die der Assistent nicht beantworten soll",
      "Anforderungen an Datenschutz und Datenstandort",
    ],
  },
  {
    id: "automatisierung",
    service: "automatisierung",
    question: "Was beeinflusst die Kosten von Automatisierungen und Integrationen?",
    answer:
      "Die Kosten hängen von der Zahl der beteiligten Systeme, der Komplexität der Abläufe und der Qualität der vorhandenen Schnittstellen ab. Ein einzelner, klar beschriebener Ablauf ist überschaubar; viele Sonderfälle, Datenbereinigung und strenge Anforderungen an die Fehlerbehandlung erhöhen den Aufwand.",
    factors: [
      "Anzahl der beteiligten Systeme",
      "Qualität und Umfang der verfügbaren Schnittstellen",
      "Zahl der Sonderfälle und Ausnahmen im Ablauf",
      "Bereinigung vorhandener Daten, etwa Dubletten",
      "Anforderungen an Überwachung, Fehlerbehandlung und Protokollierung",
      "Laufende Gebühren der eingesetzten Dienste",
    ],
    needed: [
      "Beschreibung des heutigen Ablaufs",
      "Liste der eingesetzten Programme mit Tarif",
      "Beispiele typischer Vorgänge inklusive Sonderfällen",
      "Zugänge oder Testzugänge zu den Systemen",
    ],
  },
  {
    id: "wartung",
    service: "wartung-support",
    question: "Was beeinflusst die Kosten für Wartung und Support?",
    answer:
      "Die Kosten für Wartung und Support richten sich nach dem vereinbarten Leistungsumfang: wie oft Updates und Prüfungen stattfinden, wie schnell wir reagieren sollen und wie viele Anpassungen enthalten sind. Üblich ist eine monatliche Pauschale für klar definierte Leistungen.",
    factors: [
      "Umfang der Website oder der betreuten Systeme",
      "Gewünschte Reaktionszeiten",
      "Häufigkeit von Updates, Sicherungen und Prüfungen",
      "Enthaltene kleinere Anpassungen und Inhaltsänderungen",
      "Zustand der Website bei der Übernahme",
      "Umfang von Überwachung und Berichten",
    ],
    needed: [
      "Zugänge zu Hosting, Domain und Content-Management-System",
      "Bestehende Dokumentation, falls vorhanden",
      "Erwartete Reaktionszeiten und Zuständigkeiten",
      "Liste bekannter Probleme oder offener Wünsche",
    ],
  },
];

export const closing = {
  title: "So kommen Sie zu einem verlässlichen Preis",
  text: "Beschreiben Sie Ihr Vorhaben im Anfrageformular. Wir melden uns mit Rückfragen, schätzen den Aufwand ein und erstellen auf dieser Grundlage ein schriftliches Angebot mit festgelegtem Umfang. Zusätzliche Wünsche werden vor ihrer Umsetzung mit Aufwand und Preis abgestimmt.",
};
