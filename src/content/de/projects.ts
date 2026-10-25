import type { Project } from "../types";

/**
 * Portfolio entries. All current entries are illustrative solution concepts
 * (type "concept"): nothing here was built for or delivered to a client, and
 * no results are claimed. Add real work with type "client" and fill
 * `verifiedResults` only with outcomes the client has confirmed.
 */
export const projects: Project[] = [
  {
    slug: "relaunch-dienstleister-website",
    title: "Relaunch einer Dienstleister-Website",
    type: "concept",
    categories: ["web"],
    industry: "Professionelle Dienstleistungen",
    summary:
      "Wie eine gewachsene Unternehmenswebsite zu einem klar strukturierten Auftritt mit strukturiertem Anfrageprozess wird.",
    overview:
      "Dieses Beispielkonzept zeigt, wie wir den Relaunch einer typischen Dienstleister-Website angehen: von der Analyse über die neue Struktur bis zur technischen Umsetzung.",
    context:
      "Angenommen wird ein Dienstleistungsunternehmen mit mehreren Leistungsbereichen, dessen Website über Jahre ergänzt wurde. Interessenten finden Informationen nur mühsam, und Anfragen kommen unstrukturiert per E-Mail.",
    challenge:
      "Die Website soll das Angebot verständlich erklären, auf dem Smartphone gut funktionieren und Anfragen so erfassen, dass das Team direkt ein Angebot vorbereiten kann – ohne die bestehende Sichtbarkeit in Suchmaschinen zu verlieren.",
    objectives: [
      "Eine klare Struktur mit einer eigenen Seite pro Leistung",
      "Kurze Ladezeiten und gute Bedienbarkeit auf allen Geräten",
      "Ein Anfrageformular, das die wichtigsten Projektinformationen abfragt",
      "Erhalt bestehender Suchmaschinenrankings durch saubere Weiterleitungen",
    ],
    solution:
      "Eine neu aufgebaute Website mit klarer Navigation, Leistungsseiten nach einheitlichem Muster, einem strukturierten Anfrageformular und technischer Suchmaschinenoptimierung.",
    implementation: [
      {
        title: "Inhaltsinventur",
        description:
          "Alle bestehenden Seiten werden erfasst und bewertet: behalten, überarbeiten, zusammenführen oder entfernen.",
      },
      {
        title: "Struktur und Gestaltung",
        description:
          "Die neue Seitenstruktur orientiert sich an den Fragen der Zielgruppe. Die Gestaltung setzt auf klare Typografie und Hierarchie.",
      },
      {
        title: "Technische Umsetzung",
        description:
          "Statisch generierte Seiten sorgen für kurze Ladezeiten. Das Formular validiert Eingaben und leitet Anfragen per E-Mail weiter.",
      },
      {
        title: "Weiterleitungen und Livegang",
        description:
          "Alte Adressen werden auf die passenden neuen Seiten weitergeleitet, die Sitemap wird in der Google Search Console eingereicht.",
      },
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Google Search Console"],
    verifiedResults: null,
    lessonsLearned: [
      "Eine Inhaltsinventur vor dem Design verhindert, dass alte Probleme in die neue Website übernommen werden.",
      "Ein Formular mit wenigen, gezielten Fragen ist hilfreicher als ein langes Formular, das abschreckt.",
      "Weiterleitungen gehören zum Projektumfang und nicht in die Zeit nach dem Livegang.",
    ],
    considerations: [
      "Bestehende Adressen müssen sauber weitergeleitet werden, damit Sichtbarkeit und Lesezeichen erhalten bleiben.",
      "Texte und Struktur entstehen vor dem Design, damit die Gestaltung dem Inhalt dient.",
      "Formular und Datenschutzhinweise werden gemeinsam geplant, nicht nachträglich ergänzt.",
      "Barrierefreiheit und Ladezeit werden von Beginn an mitgedacht und vor dem Livegang geprüft.",
    ],
    related: ["webdesign", "seo", "wartung-support"],
    featured: true,
    seo: {
      title: "Beispielkonzept: Relaunch einer Dienstleister-Website",
      description:
        "Beispielkonzept: Wie wir den Relaunch einer gewachsenen Dienstleister-Website angehen – Struktur, Anfrageprozess, Technik und SEO.",
    },
  },
  {
    slug: "ki-faq-assistent",
    title: "KI-Assistent für häufige Kundenfragen",
    type: "concept",
    categories: ["ai", "web"],
    industry: "Kundenservice",
    summary:
      "Ein Assistent auf der Website, der wiederkehrende Fragen auf Basis geprüfter Inhalte beantwortet und an Menschen übergibt.",
    overview:
      "Dieses Beispielkonzept beschreibt einen KI-Assistenten, der Website-Besuchern häufige Fragen beantwortet – mit klaren Grenzen, Quellenangaben und Übergabe an das Team.",
    context:
      "Angenommen wird ein Unternehmen, dessen Team täglich ähnliche Fragen zu Leistungen, Abläufen und benötigten Unterlagen per E-Mail und Telefon beantwortet.",
    challenge:
      "Der Assistent soll zuverlässig antworten, nichts erfinden, sensible Themen erkennen und Gespräche, die er nicht lösen kann, sauber an einen Menschen übergeben.",
    objectives: [
      "Sofortige Antworten auf häufige Fragen, auch außerhalb der Geschäftszeiten",
      "Antworten ausschließlich auf Basis geprüfter Inhalte",
      "Übergabe an das Team mit Zusammenfassung des Anliegens",
      "Transparenz für Nutzer, dass sie mit einer KI sprechen",
    ],
    solution:
      "Ein Website-Assistent, der eine kuratierte Wissensbasis durchsucht, Antworten mit Verweis auf die passende Seite gibt und bei Unsicherheit ein vorausgefülltes Kontaktformular anbietet.",
    implementation: [
      {
        title: "Wissensbasis",
        description:
          "Häufige Fragen und geprüfte Antworten werden gesammelt, strukturiert und als Grundlage für den Assistenten aufbereitet.",
      },
      {
        title: "Antwortlogik",
        description:
          "Der Assistent sucht passende Inhalte heraus und formuliert Antworten nur daraus. Ohne passende Quelle verweist er an das Team.",
      },
      {
        title: "Grenzen und Übergabe",
        description:
          "Themen wie Preise im Einzelfall oder rechtliche Fragen werden erkannt und direkt an einen Menschen weitergeleitet.",
      },
      {
        title: "Auswertung",
        description:
          "Unbeantwortete Fragen werden – ohne personenbezogene Daten – gesammelt und zur Verbesserung der Wissensbasis genutzt.",
      },
    ],
    technologies: ["Sprachmodell-API (z. B. mit EU-Datenverarbeitung)", "Vektorsuche", "Next.js"],
    verifiedResults: null,
    lessonsLearned: [
      "Die Qualität der Antworten hängt vor allem von der Qualität der Wissensbasis ab.",
      "Eine gute Übergabe an Menschen ist genauso wichtig wie gute Antworten.",
      "Nutzer sollten jederzeit erkennen können, dass sie mit einem KI-System sprechen.",
    ],
    considerations: [
      "Die Wissensbasis muss von Menschen geprüft werden, bevor der Assistent darauf zugreift.",
      "Der Assistent weist darauf hin, dass er eine KI ist, und nennt Quellen.",
      "Für Themen mit rechtlicher oder individueller Tragweite gibt es eine feste Übergabe an das Team.",
      "Gespräche werden datensparsam behandelt; Anbieter und Datenstandort werden dokumentiert.",
    ],
    related: ["ki-assistenten", "webdesign", "automatisierung"],
    featured: true,
    seo: {
      title: "Beispielkonzept: KI-Assistent für Kundenfragen",
      description:
        "Beispielkonzept eines KI-Assistenten, der häufige Kundenfragen auf Basis geprüfter Inhalte beantwortet und an das Team übergibt.",
    },
  },
  {
    slug: "e-mail-eingang-automatisierung",
    title: "Automatisierte Verarbeitung des E-Mail-Eingangs",
    type: "concept",
    categories: ["automation", "ai"],
    industry: "Verwaltung & Backoffice",
    summary:
      "Eingehende E-Mails werden klassifiziert, wichtige Angaben ausgelesen und Vorgänge automatisch an die richtige Stelle übergeben.",
    overview:
      "Dieses Beispielkonzept zeigt, wie ein Sammelpostfach mithilfe von Automatisierung und KI-gestützter Klassifizierung entlastet werden kann.",
    context:
      "Angenommen wird ein Unternehmen, bei dem Anfragen, Rechnungen, Terminwünsche und Reklamationen in einem gemeinsamen Postfach eingehen und täglich von Hand sortiert werden.",
    challenge:
      "Die Zuordnung soll zuverlässig funktionieren, Fehlzuordnungen müssen erkennbar sein, und personenbezogene Daten dürfen nur so weit verarbeitet werden wie nötig.",
    objectives: [
      "Automatische Zuordnung der häufigsten E-Mail-Arten",
      "Auslesen relevanter Angaben wie Kundennummer oder Datum",
      "Übergabe an das zuständige Team oder System",
      "Prüfliste für unsichere Fälle statt stiller Fehler",
    ],
    solution:
      "Ein automatisierter Ablauf, der neue E-Mails abruft, nach Anliegen klassifiziert, Angaben ausliest und Vorgänge im passenden System anlegt. Unsichere Fälle landen zur Prüfung bei einem Menschen.",
    implementation: [
      {
        title: "Kategorien festlegen",
        description:
          "Gemeinsam mit dem Team werden die wichtigsten Anliegen definiert und mit Beispielen hinterlegt.",
      },
      {
        title: "Klassifizierung",
        description:
          "Ein KI-Baustein ordnet E-Mails den Kategorien zu und gibt eine Einschätzung zur Sicherheit seiner Zuordnung ab.",
      },
      {
        title: "Weiterleitung",
        description:
          "Je nach Kategorie wird eine Aufgabe erstellt, eine Weiterleitung ausgelöst oder ein Datensatz aktualisiert.",
      },
      {
        title: "Kontrolle",
        description:
          "Alle Schritte werden protokolliert. Fehlgeschlagene Vorgänge lösen eine Benachrichtigung aus.",
      },
    ],
    technologies: [
      "Microsoft Graph API bzw. Gmail API",
      "Automatisierungsplattform (z. B. n8n)",
      "Sprachmodell-API",
    ],
    verifiedResults: null,
    lessonsLearned: [
      "Mit wenigen, klar definierten Kategorien zu beginnen ist robuster als alles auf einmal abzudecken.",
      "Eine sichtbare Prüfliste für unsichere Fälle schafft Vertrauen in die Automatisierung.",
    ],
    considerations: [
      "Personenbezogene Daten werden nur verarbeitet, soweit sie für die Einordnung nötig sind.",
      "Unsichere Zuordnungen landen bei einem Menschen, statt automatisch weiterverarbeitet zu werden.",
      "Jeder Schritt wird protokolliert, damit sich Fehlzuordnungen nachvollziehen lassen.",
      "Die Automatisierung startet mit wenigen Kategorien und wird schrittweise erweitert.",
    ],
    related: ["automatisierung", "ki-agenten", "integrationen"],
    featured: true,
    seo: {
      title: "Beispielkonzept: E-Mail-Eingang automatisieren",
      description:
        "Beispielkonzept: Eingehende E-Mails automatisch klassifizieren, Angaben auslesen und Vorgänge an die richtige Stelle übergeben.",
    },
  },
  {
    slug: "crm-synchronisation",
    title: "Synchronisation von Website, CRM und Buchhaltung",
    type: "concept",
    categories: ["integrations", "automation"],
    industry: "Kleine und mittlere Unternehmen",
    summary:
      "Anfragen von der Website, Kontakte im CRM und Kundendaten in der Buchhaltung auf einem einheitlichen Stand.",
    overview:
      "Dieses Beispielkonzept beschreibt, wie drei bislang getrennte Systeme so verbunden werden, dass Kundendaten nur einmal gepflegt werden müssen.",
    context:
      "Angenommen wird ein Unternehmen, das Anfragen per E-Mail erhält, Kontakte in einem CRM pflegt und Kundendaten für Rechnungen erneut in der Buchhaltungssoftware anlegt.",
    challenge:
      "Daten sollen ohne Dubletten und ohne widersprüchliche Stände zwischen den Systemen fließen. Jedes System muss klar wissen, welche Daten es führt.",
    objectives: [
      "Website-Anfragen automatisch als Kontakt und Aufgabe im CRM anlegen",
      "Gewonnene Aufträge mit Stammdaten an die Buchhaltung übergeben",
      "Dubletten vermeiden und Konflikte nachvollziehbar auflösen",
      "Fehler sichtbar machen statt sie zu verschlucken",
    ],
    solution:
      "Eine Integrationsschicht, die Ereignisse aus Website und CRM verarbeitet, Daten abgleicht und an das jeweils zuständige System übergibt – mit Protokollierung und Benachrichtigung bei Fehlern.",
    implementation: [
      {
        title: "Datenmodell",
        description:
          "Für jedes Datenfeld wird festgelegt, welches System führend ist und wie Felder einander zugeordnet werden.",
      },
      {
        title: "Anbindung",
        description:
          "Die Systeme werden über ihre offiziellen Schnittstellen verbunden; Zugangsschlüssel werden sicher verwahrt.",
      },
      {
        title: "Abgleich",
        description:
          "Vor dem Anlegen neuer Datensätze wird auf Dubletten geprüft. Konflikte werden protokolliert und zur Prüfung gemeldet.",
      },
      {
        title: "Überwachung",
        description:
          "Fehlgeschlagene Übertragungen werden erneut versucht und bei anhaltenden Problemen gemeldet.",
      },
    ],
    technologies: [
      "CRM-API (z. B. HubSpot oder Pipedrive)",
      "Buchhaltungs-API",
      "Webhooks",
      "TypeScript",
    ],
    verifiedResults: null,
    lessonsLearned: [
      "Die Frage nach dem führenden System entscheidet über die Qualität jeder Integration.",
      "Vor dem Start lohnt sich eine Bereinigung bestehender Dubletten.",
    ],
    considerations: [
      "Vor dem Start wird festgelegt, welches System für welche Daten führend ist.",
      "Dubletten werden vor der ersten Synchronisation bereinigt.",
      "Zugangsdaten werden verschlüsselt verwahrt und mit minimalen Rechten vergeben.",
      "Fehlgeschlagene Übertragungen werden wiederholt und bei anhaltenden Problemen gemeldet.",
    ],
    related: ["integrationen", "automatisierung", "wartung-support"],
    featured: false,
    seo: {
      title: "Beispielkonzept: CRM und Buchhaltung verbinden",
      description:
        "Beispielkonzept: Wie Website, CRM und Buchhaltung so verbunden werden, dass Kundendaten nur einmal gepflegt werden.",
    },
  },
];
