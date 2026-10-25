import type { ProcessStage, Step } from "../types";

/** Four-stage summary for the homepage. */
export const processOverview: Step[] = [
  {
    title: "Analyse & Verständnis",
    description:
      "Wir lernen Ihr Unternehmen, Ihre Ziele und Ihre bestehenden Systeme kennen und klären, wo der größte Hebel liegt.",
  },
  {
    title: "Strategie & Planung",
    description:
      "Sie erhalten ein Angebot mit klarem Umfang, Zeitplan und Ansprechpartner – und wissen vor dem Start, was Sie erwartet.",
  },
  {
    title: "Gestaltung & Umsetzung",
    description:
      "Wir setzen in nachvollziehbaren Schritten um. Sie sehen Zwischenergebnisse früh und geben sie frei.",
  },
  {
    title: "Livegang, Betreuung & Optimierung",
    description:
      "Nach Tests und Übergabe begleiten wir den Betrieb auf Wunsch weiter und verbessern auf Basis echter Nutzung.",
  },
];

/** The complete customer journey for /prozess. */
export const processStages: ProcessStage[] = [
  {
    title: "Erste Anfrage",
    summary:
      "Sie beschreiben Ihr Vorhaben über das Anfrageformular oder per E-Mail. Je konkreter die Angaben, desto gezielter können wir uns vorbereiten.",
    clientRole: [
      "Kurze Beschreibung des Vorhabens und der Ausgangslage",
      "Angabe der gewünschten Leistung, sofern bekannt",
    ],
    amirRole: [
      "Prüfung der Anfrage",
      "Rückmeldung mit Terminvorschlag für ein Erstgespräch oder Rückfragen",
    ],
    deliverables: ["Persönliche Rückmeldung auf Ihre Anfrage"],
    communication: "Per E-Mail – unkompliziert und nachvollziehbar.",
  },
  {
    title: "Erstgespräch",
    summary:
      "In einem unverbindlichen Gespräch klären wir Ziele, Rahmenbedingungen und Erwartungen. Sie lernen uns kennen und können alle Fragen stellen.",
    clientRole: [
      "Ziele, Herausforderungen und Rahmenbedingungen schildern",
      "Ansprechpersonen und Entscheidungswege benennen",
    ],
    amirRole: [
      "Gezielte Fragen zur Ausgangslage",
      "Erste Einschätzung zu Machbarkeit und möglichen Ansätzen",
    ],
    deliverables: ["Gemeinsames Verständnis des Vorhabens", "Vereinbarung der nächsten Schritte"],
    communication: "Videogespräch oder Telefonat.",
  },
  {
    title: "Anforderungsanalyse",
    summary:
      "Wir betrachten Ihre Anforderungen, bestehenden Systeme und Inhalte genauer. Bei größeren Vorhaben kann dies ein eigener, vorab vereinbarter Arbeitsschritt sein.",
    clientRole: [
      "Zugänge oder Einblicke in bestehende Systeme",
      "Beispiele, Dokumente und vorhandene Inhalte bereitstellen",
    ],
    amirRole: [
      "Analyse von Technik, Prozessen und Inhalten",
      "Identifikation von Risiken und offenen Fragen",
    ],
    deliverables: ["Zusammenfassung der Anforderungen", "Liste offener Punkte und Annahmen"],
    communication: "Abstimmung per E-Mail und bei Bedarf ein kurzes Gespräch.",
  },
  {
    title: "Angebot & Umfang",
    summary:
      "Sie erhalten ein schriftliches Angebot mit beschriebenem Leistungsumfang, Zeitplan, Preis und Annahmen. Was nicht enthalten ist, steht ebenfalls drin.",
    clientRole: ["Prüfung des Angebots und Rückfragen", "Freigabe und Beauftragung"],
    amirRole: [
      "Transparente Beschreibung von Umfang, Aufwand und Zeitplan",
      "Erläuterung des Angebots auf Wunsch",
    ],
    deliverables: ["Schriftliches Angebot", "Zeitplan mit Meilensteinen"],
    communication: "Angebot per E-Mail, Besprechung bei Bedarf.",
  },
  {
    title: "Planung & Umsetzung",
    summary:
      "Wir setzen das Projekt in klaren Etappen um. Zwischenergebnisse werden früh sichtbar, sodass Sie Feedback geben können, bevor es aufwendig wird.",
    clientRole: [
      "Inhalte und Feedback termingerecht bereitstellen",
      "Zwischenergebnisse prüfen und freigeben",
    ],
    amirRole: [
      "Umsetzung gemäß vereinbartem Umfang",
      "Regelmäßige Statusinformationen",
      "Frühzeitige Information bei Abweichungen",
    ],
    deliverables: [
      "Zwischenstände in einer Vorschau- oder Testumgebung",
      "Dokumentierte Entscheidungen",
    ],
    communication: "Regelmäßige Updates in vereinbartem Rhythmus.",
  },
  {
    title: "Test & Qualitätssicherung",
    summary:
      "Vor dem Livegang testen wir Funktionen, Darstellung auf verschiedenen Geräten, Formulare, Schnittstellen und Fehlerfälle.",
    clientRole: ["Abnahmetest aus fachlicher Sicht", "Rückmeldung zu gefundenen Auffälligkeiten"],
    amirRole: ["Technische Tests und Prüfung der Barrierearmut", "Behebung gefundener Fehler"],
    deliverables: ["Getestete, abnahmebereite Lösung"],
    communication: "Gemeinsame Liste offener Punkte bis zur Abnahme.",
  },
  {
    title: "Livegang & Übergabe",
    summary:
      "Nach Ihrer Freigabe geht die Lösung live. Sie erhalten Dokumentation, Zugänge und eine Einweisung.",
    clientRole: ["Freigabe für den Livegang", "Teilnahme an der Einweisung"],
    amirRole: [
      "Durchführung des Livegangs",
      "Kontrolle direkt nach dem Start",
      "Übergabe von Dokumentation und Zugängen",
    ],
    deliverables: ["Live geschaltete Lösung", "Dokumentation und Zugänge", "Einweisung"],
    communication: "Abgestimmter Termin für den Livegang und kurze Abschlussbesprechung.",
  },
  {
    title: "Betreuung & Weiterentwicklung",
    summary:
      "Auf Wunsch bleiben wir Ihr Ansprechpartner: für Wartung, Updates, Überwachung und die schrittweise Verbesserung auf Basis echter Nutzung.",
    clientRole: ["Rückmeldung zu Erfahrungen im Alltag", "Priorisierung neuer Wünsche"],
    amirRole: [
      "Wartung und Überwachung gemäß Vereinbarung",
      "Vorschläge für sinnvolle Verbesserungen",
    ],
    deliverables: ["Wartungsprotokolle", "Umgesetzte Verbesserungen nach Abstimmung"],
    communication: "Vereinbarte Reaktionszeiten und regelmäßige Abstimmung.",
  },
];
