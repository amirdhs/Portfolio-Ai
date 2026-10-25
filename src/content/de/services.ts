import type { Service } from "../types";

export const services: Service[] = [
  {
    slug: "webdesign",
    title: "Website Design & Entwicklung",
    shortDescription:
      "Schnelle, gut strukturierte Websites, die Ihr Angebot klar erklären und Besucher zur Anfrage führen.",
    primaryBenefit: "Eine Website, die Vertrauen schafft und qualifizierte Anfragen bringt.",
    intro: [
      "Ihre Website ist oft der erste Kontakt mit potenziellen Kunden. Wir gestalten und entwickeln Websites, die schnell laden, auf jedem Gerät gut funktionieren und Ihr Angebot so erklären, dass Besucher verstehen, warum sie mit Ihnen arbeiten sollten.",
      "Wir beginnen nicht beim Design, sondern bei Ihren Zielen: Wer soll die Website besuchen, welche Fragen haben diese Menschen, und welche Handlung soll am Ende stehen? Daraus entstehen Struktur, Texte und Gestaltung.",
    ],
    problems: [
      "Die bestehende Website wirkt veraltet und passt nicht mehr zum heutigen Angebot.",
      "Besucher finden nicht schnell genug, was sie suchen, und springen ab.",
      "Die Website ist auf dem Smartphone schwer bedienbar oder lädt langsam.",
      "Inhalte lassen sich nur umständlich oder gar nicht selbst pflegen.",
      "Über die Website kommen kaum Anfragen, obwohl Besucher vorhanden sind.",
    ],
    audience: [
      "Kleine und mittlere Unternehmen, die online professioneller auftreten möchten",
      "Dienstleister und Beratungen, die erklärungsbedürftige Leistungen anbieten",
      "Lokale Unternehmen, die in ihrer Region besser gefunden werden wollen",
      "Unternehmen mit einer bestehenden Website, die modernisiert werden soll",
    ],
    included: [
      "Analyse von Zielgruppe, Zielen und bestehender Website",
      "Seitenstruktur, Navigation und Nutzerführung",
      "Individuelles, responsives Design ohne Baukasten-Optik",
      "Technische Umsetzung mit Fokus auf Ladezeit und Barrierearmut",
      "Kontakt- und Anfrageformulare mit sauberer Validierung",
      "Technische SEO-Grundlagen: Seitentitel, Meta-Beschreibungen, Sitemap, strukturierte Daten",
      "Einrichtung von Impressum- und Datenschutzseiten (Inhalte durch Sie bzw. Ihre Rechtsberatung)",
    ],
    deliverables: [
      "Eine einsatzbereite, veröffentlichte Website",
      "Dokumentation zu Aufbau, Pflege und Hosting",
      "Übergabe aller Zugänge und des Quellcodes",
      "Einweisung in die Pflege Ihrer Inhalte",
    ],
    exampleUseCases: [
      {
        title: "Relaunch einer Dienstleister-Website",
        description:
          "Eine über Jahre gewachsene Website wird neu strukturiert: klare Leistungsseiten, verständliche Texte und ein Anfrageformular, das die wichtigsten Informationen direkt abfragt.",
      },
      {
        title: "Neue Website für ein junges Unternehmen",
        description:
          "Ein neues Angebot braucht einen glaubwürdigen Auftritt. Wir entwickeln eine kompakte Website, die mit dem Unternehmen wachsen kann.",
      },
      {
        title: "Landingpage für eine neue Leistung",
        description:
          "Für ein neues Produkt oder eine Kampagne entsteht eine fokussierte Seite mit einem klaren Ziel – etwa Terminanfragen oder Downloads.",
      },
    ],
    process: [
      {
        title: "Ziele und Inhalte klären",
        description:
          "Wir besprechen Zielgruppe, Angebot und vorhandene Inhalte und legen den Umfang der Website fest.",
      },
      {
        title: "Struktur und Gestaltung",
        description:
          "Sie erhalten eine Seitenstruktur und Gestaltungsentwürfe, die wir gemeinsam abstimmen.",
      },
      {
        title: "Entwicklung und Inhalte",
        description:
          "Wir setzen die Website technisch um und arbeiten Ihre Inhalte ein. Sie sehen den Fortschritt in einer Vorschauumgebung.",
      },
      {
        title: "Test, Livegang und Übergabe",
        description:
          "Nach Tests auf verschiedenen Geräten und Browsern geht die Website live. Anschließend erhalten Sie Dokumentation und Einweisung.",
      },
    ],
    clientInputs: [
      "Beschreibung Ihres Angebots und Ihrer wichtigsten Zielgruppen",
      "Vorhandene Inhalte: Texte, Bilder, Logo, Referenzen (sofern vorhanden)",
      "Zugang zur bestehenden Website und Domain, falls vorhanden",
      "Rechtliche Angaben für Impressum und Datenschutz",
      "Eine Ansprechperson für Abstimmungen und Freigaben",
    ],
    faqs: [
      {
        question: "Können Sie meine bestehende Website überarbeiten statt neu zu bauen?",
        answer:
          "Ja, eine bestehende Website lässt sich oft überarbeiten, statt sie neu zu bauen. Zu Beginn prüfen wir, ob Struktur, Technik und Inhalte tragfähig sind oder ob ein Neuaufbau langfristig sinnvoller ist. Sie entscheiden anhand einer nachvollziehbaren, begründeten Einschätzung. Das spart oft Kosten und bewahrt Inhalte, die bereits gut funktionieren.",
      },
      {
        question: "Kann ich Inhalte später selbst ändern?",
        answer:
          "Ja, das ist möglich und wir legen es zu Beginn fest. Je nachdem, wie oft sich Ihre Inhalte ändern, setzen wir eine Lösung mit einfacher Inhaltspflege um oder übernehmen Änderungen im Rahmen einer Betreuung. Bei der Übergabe erhalten Sie eine Einweisung und eine verständliche Dokumentation.",
      },
      {
        question: "Wer schreibt die Texte?",
        answer:
          "Sie kennen Ihr Geschäft am besten, deshalb liefern Sie in der Regel die fachlichen Inhalte. Wir helfen bei Struktur und Formulierung und überarbeiten vorhandene Texte, damit sie klar und verständlich sind. Wie viel Textarbeit wir übernehmen, legen wir im Angebot fest.",
      },
    ],
    sources: [
      {
        label: "W3C: Web Content Accessibility Guidelines (WCAG), englisch",
        url: "https://www.w3.org/WAI/standards-guidelines/wcag/",
      },
      { label: "web.dev: Core Web Vitals", url: "https://web.dev/articles/vitals?hl=de" },
      {
        label: "Google Search Central: Hilfreiche, verlässliche Inhalte erstellen",
        url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=de",
      },
    ],
    related: ["seo", "wartung-support", "ki-assistenten"],
    seo: {
      title: "Website Design & Entwicklung",
      description:
        "Moderne, schnelle und responsive Websites für kleine und mittlere Unternehmen – mit klarer Struktur, die Besucher zur Anfrage führt.",
    },
  },
  {
    slug: "seo",
    title: "SEO & Sichtbarkeit in Suchmaschinen",
    shortDescription:
      "Technische Optimierung, klare Inhalte und lokale Sichtbarkeit, damit Interessenten Sie bei Google finden.",
    primaryBenefit: "Mehr Sichtbarkeit bei den Suchanfragen, die für Ihr Geschäft relevant sind.",
    intro: [
      "Suchmaschinenoptimierung sorgt dafür, dass Menschen, die nach Ihren Leistungen suchen, Ihre Website finden. Dazu gehören eine technisch saubere Website, Inhalte, die echte Fragen beantworten, und – für lokale Unternehmen – ein gepflegtes Unternehmensprofil.",
      "Wir versprechen keine Platzierungen, denn die kann seriös niemand garantieren. Was wir liefern: eine fundierte Analyse, konkrete Maßnahmen und eine nachvollziehbare Messung der Entwicklung.",
    ],
    problems: [
      "Ihre Website erscheint bei relevanten Suchanfragen nicht oder sehr weit hinten.",
      "Technische Fehler verhindern, dass Suchmaschinen Seiten richtig erfassen.",
      "Es ist unklar, nach welchen Begriffen Ihre Kunden eigentlich suchen.",
      "Lokale Mitbewerber werden in Ihrer Region häufiger gefunden.",
    ],
    audience: [
      "Unternehmen, deren Kunden aktiv online nach Lösungen suchen",
      "Lokale Betriebe und Dienstleister mit regionalem Einzugsgebiet",
      "Unternehmen mit einer neuen oder überarbeiteten Website",
      "E-Commerce-Unternehmen mit vielen Produkt- und Kategorieseiten",
    ],
    included: [
      "Technischer SEO-Audit: Indexierung, Ladezeit, mobile Darstellung, Struktur",
      "Recherche relevanter Suchbegriffe und Suchabsichten",
      "Optimierung von Seitentiteln, Beschreibungen, Überschriften und interner Verlinkung",
      "Empfehlungen und Überarbeitung von Inhalten",
      "Strukturierte Daten für bessere Darstellung in Suchergebnissen",
      "Einrichtung der Google Search Console und datenschutzfreundliche Auswertung",
      "Hinweise zur Pflege Ihres Google-Unternehmensprofils",
    ],
    deliverables: [
      "Audit-Bericht mit priorisierten Maßnahmen",
      "Umgesetzte technische und inhaltliche Optimierungen",
      "Übersicht über Suchbegriffe und zugeordnete Seiten",
      "Regelmäßiger Bericht zur Entwicklung, sofern vereinbart",
    ],
    exampleUseCases: [
      {
        title: "Technische Bereinigung nach einem Relaunch",
        description:
          "Nach einem Website-Relaunch fehlen Weiterleitungen und Seiten werden nicht mehr gefunden. Wir identifizieren die Ursachen und beheben sie.",
      },
      {
        title: "Lokale Sichtbarkeit für einen Dienstleister",
        description:
          "Ein Betrieb möchte in seiner Stadt bei Suchanfragen zu seinen Leistungen erscheinen. Wir optimieren Leistungsseiten und Unternehmensprofil gezielt für die Region.",
      },
      {
        title: "Inhalte entlang der Kundenfragen",
        description:
          "Häufige Fragen aus Vertrieb und Kundenservice werden zu hilfreichen Inhalten, die genau diese Fragen in der Suche beantworten.",
      },
    ],
    process: [
      {
        title: "Analyse",
        description:
          "Wir prüfen Technik, Inhalte und aktuelle Sichtbarkeit Ihrer Website und betrachten Ihr Wettbewerbsumfeld.",
      },
      {
        title: "Maßnahmenplan",
        description:
          "Sie erhalten eine priorisierte Liste: zuerst das, was mit vertretbarem Aufwand die größte Wirkung verspricht.",
      },
      {
        title: "Umsetzung",
        description:
          "Wir setzen die vereinbarten Maßnahmen um – direkt in Ihrer Website oder in Abstimmung mit Ihrem bisherigen Dienstleister.",
      },
      {
        title: "Messen und nachsteuern",
        description:
          "Suchmaschinenoptimierung braucht Zeit. Wir beobachten die Entwicklung und passen Maßnahmen bei Bedarf an.",
      },
    ],
    clientInputs: [
      "Zugang zur Website bzw. zum Content-Management-System",
      "Zugang zur Google Search Console oder Freigabe zur Einrichtung",
      "Ihre wichtigsten Leistungen, Zielregionen und Zielgruppen",
      "Bekannte Mitbewerber, an denen Sie sich messen",
    ],
    faqs: [
      {
        question: "Wie schnell sehe ich Ergebnisse?",
        answer:
          "Technische Korrekturen können relativ zügig wirken, inhaltliche Maßnahmen brauchen meist mehrere Monate. Wie schnell sich Veränderungen zeigen, hängt von Ausgangslage, Wettbewerb und Suchbegriffen ab. Deshalb messen wir die Entwicklung transparent, statt feste Zeitpunkte zu versprechen. Ein verbindlicher Zeitplan ist deshalb nicht seriös, bevor wir Ihre Ausgangslage kennen.",
      },
      {
        question: "Garantieren Sie eine Platzierung auf Seite 1?",
        answer:
          "Nein, eine Platzierung auf Seite 1 kann Ihnen seriös niemand garantieren, denn Suchmaschinen bestimmen die Rangfolge selbst. Wir schaffen die bestmöglichen Voraussetzungen durch saubere Technik und hilfreiche Inhalte und zeigen offen, was sich verändert und was nicht. Vorsicht ist bei Anbietern geboten, die das versprechen.",
      },
      {
        question: "Ist SEO eine einmalige Maßnahme?",
        answer:
          "Eine technische Grundoptimierung ist ein abgeschlossenes Projekt. Damit die Sichtbarkeit langfristig wächst, lohnt sich jedoch eine fortlaufende Arbeit an Inhalten und Technik, da sich Suchmaschinen und Wettbewerber verändern. Beides ist möglich: ein einmaliges Projekt oder eine laufende Betreuung. Welche Variante passt, hängt von Ihren Zielen und Ihrem Wettbewerbsumfeld ab.",
      },
    ],
    sources: [
      {
        label: "Google Search Central: Startleitfaden zur Suchmaschinenoptimierung",
        url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=de",
      },
      {
        label: "Google Search Central: Hilfreiche, verlässliche Inhalte erstellen",
        url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=de",
      },
      {
        label: "Google Search Central: Einführung in strukturierte Daten",
        url: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=de",
      },
    ],
    related: ["webdesign", "wartung-support", "ki-assistenten"],
    seo: {
      title: "SEO & Sichtbarkeit bei Google",
      description:
        "Technische Suchmaschinenoptimierung, Inhalte entlang echter Kundenfragen und lokale Sichtbarkeit – mit transparenter Messung statt leerer Versprechen.",
    },
  },
  {
    slug: "ki-assistenten",
    title: "KI-Assistenten & Chatbots",
    shortDescription:
      "Assistenten, die häufige Fragen auf Basis Ihrer eigenen Inhalte beantworten – auf der Website oder intern.",
    primaryBenefit:
      "Schnelle Antworten für Kunden und Mitarbeitende, ohne dass Ihr Team jede Frage selbst beantworten muss.",
    intro: [
      "Ein KI-Assistent beantwortet Fragen in natürlicher Sprache – auf Ihrer Website, im Kundenservice oder intern für Ihr Team. Grundlage sind Ihre eigenen Inhalte: Leistungsbeschreibungen, FAQs, Handbücher oder interne Richtlinien.",
      "Wir setzen Assistenten so auf, dass sie innerhalb klarer Grenzen arbeiten: Sie antworten auf Basis Ihrer Informationen, erkennen, wenn sie etwas nicht wissen, und übergeben an einen Menschen, wenn es nötig ist.",
    ],
    problems: [
      "Ihr Team beantwortet täglich dieselben Fragen per E-Mail oder Telefon.",
      "Interessenten erhalten außerhalb der Geschäftszeiten keine Antwort.",
      "Mitarbeitende suchen lange nach Informationen in Dokumenten und Ordnern.",
      "Wissen ist auf wenige Personen verteilt und schwer zugänglich.",
    ],
    audience: [
      "Unternehmen mit vielen wiederkehrenden Kundenanfragen",
      "Dienstleister, die Interessenten rund um die Uhr erste Auskünfte geben möchten",
      "Teams mit umfangreicher interner Dokumentation",
      "Organisationen, die neue Mitarbeitende schneller einarbeiten möchten",
    ],
    included: [
      "Auswahl geeigneter Anwendungsfälle und Inhalte",
      "Aufbereitung Ihrer Wissensquellen für den Assistenten",
      "Konfiguration von Tonalität, Grenzen und Übergabe an Menschen",
      "Einbindung auf der Website oder in interne Werkzeuge",
      "Datenschutzorientierte Auswahl von Modellen und Anbietern",
      "Tests mit realistischen Fragen vor dem Einsatz",
    ],
    deliverables: [
      "Ein eingerichteter, getesteter KI-Assistent",
      "Dokumentation der Wissensquellen und Einstellungen",
      "Anleitung zur Aktualisierung der Inhalte",
      "Übersicht der eingesetzten Dienste für Ihre Datenschutzdokumentation",
    ],
    exampleUseCases: [
      {
        title: "FAQ-Assistent auf der Website",
        description:
          "Besucher stellen Fragen zu Leistungen, Abläufen oder Öffnungszeiten und erhalten sofort eine Antwort mit Verweis auf die passende Seite.",
      },
      {
        title: "Interner Wissensassistent",
        description:
          "Mitarbeitende fragen nach Abläufen oder Richtlinien und erhalten Antworten mit Quellenangabe aus der internen Dokumentation.",
      },
      {
        title: "Vorqualifizierung von Anfragen",
        description:
          "Der Assistent erfragt die wichtigsten Eckdaten eines Anliegens und übergibt eine strukturierte Zusammenfassung an Ihr Team.",
      },
    ],
    process: [
      {
        title: "Anwendungsfall festlegen",
        description:
          "Wir klären, welche Fragen der Assistent beantworten soll und wo seine Grenzen liegen.",
      },
      {
        title: "Wissen aufbereiten",
        description:
          "Ihre Inhalte werden geprüft, strukturiert und für den Assistenten nutzbar gemacht.",
      },
      {
        title: "Aufbauen und testen",
        description:
          "Wir richten den Assistenten ein und testen ihn gemeinsam mit Ihnen anhand realer Fragen.",
      },
      {
        title: "Einführen und verbessern",
        description:
          "Nach dem Start werten wir aus, wo Antworten fehlen oder unpräzise sind, und verbessern die Wissensbasis.",
      },
    ],
    clientInputs: [
      "Typische Fragen Ihrer Kunden oder Mitarbeitenden",
      "Vorhandene Inhalte: FAQs, Dokumente, Handbücher",
      "Vorgaben zu Tonalität und zu Themen, die der Assistent nicht beantworten soll",
      "Anforderungen an Datenschutz und Datenstandort",
    ],
    faqs: [
      {
        question: "Kann der Assistent falsche Antworten geben?",
        answer:
          "KI-Modelle können Fehler machen. Wir reduzieren das Risiko, indem der Assistent auf Ihre geprüften Inhalte beschränkt wird, Quellen angibt und bei Unsicherheit an einen Menschen verweist. Regelmäßige Stichproben bleiben dennoch sinnvoll, damit Qualität und Aktualität erhalten bleiben. So bleibt der Assistent hilfreich und überprüfbar.",
      },
      {
        question: "Was passiert mit den Daten aus den Gesprächen?",
        answer:
          "Das hängt vom gewählten Anbieter und der Konfiguration ab. Wir zeigen Ihnen die Optionen, etwa Anbieter mit Datenverarbeitung in der EU, und dokumentieren die eingesetzten Dienste, damit Sie Ihre Datenschutzpflichten erfüllen können. Für die rechtliche Bewertung sollten Sie Ihren Datenschutzbeauftragten einbeziehen.",
      },
      {
        question: "Wie aktuell bleibt das Wissen des Assistenten?",
        answer:
          "Wir richten die Wissensbasis so ein, dass Sie Inhalte selbst aktualisieren können, zum Beispiel wenn sich Preise, Abläufe oder Öffnungszeiten ändern. Auf Wunsch übernehmen wir die Pflege im Rahmen einer Betreuung und prüfen regelmäßig, welche Fragen der Assistent nicht beantworten konnte.",
      },
    ],
    sources: [
      {
        label: "EUR-Lex: Datenschutz-Grundverordnung (EU) 2016/679",
        url: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679",
      },
      {
        label: "EUR-Lex: KI-Verordnung (EU) 2024/1689",
        url: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32024R1689",
      },
    ],
    related: ["ki-agenten", "automatisierung", "webdesign"],
    seo: {
      title: "KI-Assistenten & Chatbots",
      description:
        "KI-Assistenten, die Fragen von Kunden und Mitarbeitenden auf Basis Ihrer eigenen Inhalte beantworten – mit klaren Grenzen und Übergabe an Menschen.",
    },
  },
  {
    slug: "ki-agenten",
    title: "Individuelle KI-Agenten",
    shortDescription:
      "KI-Agenten, die mehrstufige Aufgaben über verschiedene Systeme hinweg vorbereiten und erledigen.",
    primaryBenefit:
      "Komplexe Routineaufgaben werden vorbereitet oder erledigt – Ihr Team prüft und entscheidet.",
    intro: [
      "Ein KI-Agent geht über das Beantworten von Fragen hinaus: Er kann Informationen aus verschiedenen Quellen zusammentragen, Entscheidungen vorbereiten und Aktionen in angebundenen Systemen ausführen – etwa einen Entwurf erstellen, einen Datensatz anlegen oder eine Aufgabe zuweisen.",
      "Wir entwickeln Agenten für klar umrissene Aufgaben und mit kontrollierten Befugnissen. Wo es auf Verantwortung ankommt, bereitet der Agent vor und ein Mensch gibt frei.",
    ],
    problems: [
      "Aufgaben erfordern das Zusammentragen von Informationen aus mehreren Systemen.",
      "Wiederkehrende Recherchen oder Auswertungen binden viel Zeit.",
      "Einfache Automatisierungen stoßen an Grenzen, weil Inhalte verstanden werden müssen.",
      "Vorgänge bleiben liegen, weil niemand Zeit für die Vorbereitung hat.",
    ],
    audience: [
      "Unternehmen mit wiederkehrenden, aber nicht vollständig standardisierten Aufgaben",
      "Teams, die viel mit unstrukturierten Informationen wie E-Mails oder Dokumenten arbeiten",
      "Organisationen, die bereits erste Automatisierungen nutzen und weitergehen möchten",
    ],
    included: [
      "Analyse der Aufgabe und Festlegung klarer Grenzen und Befugnisse",
      "Konzeption des Ablaufs inklusive Freigabepunkten",
      "Anbindung der benötigten Systeme über Schnittstellen",
      "Protokollierung der Schritte zur Nachvollziehbarkeit",
      "Tests mit realistischen Fällen und Fehlerszenarien",
      "Überwachung und Benachrichtigung bei Problemen",
    ],
    deliverables: [
      "Ein produktiv einsetzbarer KI-Agent für den vereinbarten Anwendungsfall",
      "Dokumentation von Ablauf, Befugnissen und Schnittstellen",
      "Protokolle, mit denen sich Entscheidungen nachvollziehen lassen",
      "Anleitung für den Umgang mit Fehlern und Ausnahmen",
    ],
    exampleUseCases: [
      {
        title: "Angebotsvorbereitung",
        description:
          "Der Agent liest eine Kundenanfrage, sucht passende Leistungsbausteine und bereitet einen Angebotsentwurf vor, den Ihr Team prüft und versendet.",
      },
      {
        title: "Recherche und Zusammenfassung",
        description:
          "Zu einem neuen Interessenten werden öffentlich verfügbare Informationen gesammelt und als kurzes Briefing für das Erstgespräch aufbereitet.",
      },
      {
        title: "Bearbeitung von Standardvorgängen",
        description:
          "Wiederkehrende Anliegen werden erkannt, mit den nötigen Daten angereichert und im richtigen System als Aufgabe angelegt.",
      },
    ],
    process: [
      {
        title: "Aufgabe verstehen",
        description:
          "Wir dokumentieren gemeinsam, wie die Aufgabe heute erledigt wird, welche Systeme beteiligt sind und wo Entscheidungen fallen.",
      },
      {
        title: "Konzept und Grenzen",
        description:
          "Wir legen fest, was der Agent selbst erledigt, was er vorbereitet und wo ein Mensch freigeben muss.",
      },
      {
        title: "Prototyp und Erprobung",
        description:
          "Ein erster Prototyp wird mit realen, freigegebenen Beispielen getestet und verbessert.",
      },
      {
        title: "Produktivbetrieb",
        description:
          "Der Agent geht schrittweise in den Betrieb – mit Protokollierung, Überwachung und klarer Zuständigkeit.",
      },
    ],
    clientInputs: [
      "Beschreibung der Aufgabe und des heutigen Ablaufs",
      "Beispiele typischer Vorgänge (anonymisiert, falls nötig)",
      "Liste der beteiligten Systeme und Zugänge zu deren Schnittstellen",
      "Festlegung, wer Ergebnisse prüft und freigibt",
    ],
    faqs: [
      {
        question: "Was unterscheidet einen KI-Agenten von einem KI-Assistenten?",
        answer:
          "Ein Assistent beantwortet Fragen, ein Agent erledigt Aufgaben in mehreren Schritten. Ein Agent kann Informationen aus verschiedenen Quellen zusammentragen und Aktionen in angebundenen Systemen ausführen, zum Beispiel einen Datensatz anlegen. Das geschieht stets innerhalb der Befugnisse, die wir gemeinsam festlegen.",
      },
      {
        question: "Kann der Agent eigenständig Entscheidungen treffen?",
        answer:
          "Nur in dem Rahmen, den Sie festlegen. Bei Vorgängen mit Tragweite empfehlen wir Freigabepunkte, an denen ein Mensch prüft und bestätigt. Der Agent bereitet vor und schlägt vor, die Verantwortung für Entscheidungen bleibt bei Ihnen und Ihrem Team. So behalten Sie jederzeit die Kontrolle über Ergebnisse und Auswirkungen.",
      },
      {
        question: "Lohnt sich ein Agent für mein Unternehmen?",
        answer:
          "Das hängt davon ab, wie häufig die Aufgabe anfällt, wie viel Zeit sie bindet und wie klar sie sich beschreiben lässt. Im Erstgespräch schätzen wir gemeinsam ein, ob ein Agent oder eine einfachere Automatisierung besser passt. Oft ist die einfachere Lösung die richtige.",
      },
    ],
    sources: [
      {
        label: "EUR-Lex: KI-Verordnung (EU) 2024/1689",
        url: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32024R1689",
      },
      {
        label: "EUR-Lex: Datenschutz-Grundverordnung (EU) 2016/679",
        url: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679",
      },
    ],
    related: ["ki-assistenten", "automatisierung", "integrationen"],
    seo: {
      title: "Individuelle KI-Agenten",
      description:
        "KI-Agenten für klar umrissene, mehrstufige Aufgaben – mit kontrollierten Befugnissen, Freigabepunkten und nachvollziehbarer Protokollierung.",
    },
  },
  {
    slug: "automatisierung",
    title: "Prozessautomatisierung",
    shortDescription:
      "Wiederkehrende Abläufe automatisieren – von E-Mail-Eingang über Dokumente bis zur Datenübertragung.",
    primaryBenefit:
      "Weniger manuelle Routinearbeit und weniger Übertragungsfehler im Tagesgeschäft.",
    intro: [
      "Viele Unternehmen verlieren täglich Zeit mit Aufgaben, die immer gleich ablaufen: Daten von einem System ins nächste kopieren, E-Mails sortieren, Dokumente ablegen oder Erinnerungen verschicken. Diese Abläufe lassen sich häufig automatisieren.",
      "Wir analysieren Ihre Prozesse, identifizieren lohnende Ansatzpunkte und setzen Automatisierungen um, die zuverlässig laufen und verständlich dokumentiert sind. Wo Inhalte interpretiert werden müssen, ergänzen wir sie gezielt um KI.",
    ],
    problems: [
      "Mitarbeitende übertragen Daten manuell zwischen verschiedenen Programmen.",
      "Eingehende E-Mails und Anfragen werden von Hand sortiert und weitergeleitet.",
      "Dokumente müssen geprüft, umbenannt und abgelegt werden.",
      "Wichtige Schritte werden vergessen, weil sie von einzelnen Personen abhängen.",
    ],
    audience: [
      "Organisationen mit wiederkehrenden administrativen Abläufen",
      "Kleine und mittlere Unternehmen mit mehreren Softwarelösungen im Einsatz",
      "Teams in Vertrieb, Verwaltung oder Kundenservice mit hohem Routineanteil",
    ],
    included: [
      "Aufnahme und Bewertung bestehender Abläufe",
      "Auswahl geeigneter Werkzeuge – bevorzugt solche, die Sie bereits nutzen",
      "Umsetzung der Automatisierungen mit Fehlerbehandlung",
      "KI-Bausteine für das Verstehen von Texten und Dokumenten, wo sinnvoll",
      "Benachrichtigungen bei Fehlern oder Ausnahmen",
      "Dokumentation und Übergabe",
    ],
    deliverables: [
      "Laufende, getestete Automatisierungen",
      "Prozessdokumentation mit Vorher-nachher-Darstellung",
      "Übersicht der eingesetzten Dienste und Zugänge",
      "Anleitung für den Umgang mit Ausnahmen",
    ],
    exampleUseCases: [
      {
        title: "E-Mail-Eingang automatisch verteilen",
        description:
          "Eingehende E-Mails werden nach Anliegen erkannt, mit Kundendaten verknüpft und automatisch an die zuständige Person oder das richtige System übergeben.",
      },
      {
        title: "Website-Anfragen direkt ins CRM",
        description:
          "Anfragen aus dem Kontaktformular landen ohne Kopieren als Kontakt und Aufgabe im CRM, inklusive Bestätigung an das Team.",
      },
      {
        title: "Belege und Dokumente ablegen",
        description:
          "Eingehende Dokumente werden ausgelesen, sinnvoll benannt und in der richtigen Ordnerstruktur abgelegt.",
      },
    ],
    process: [
      {
        title: "Prozesse aufnehmen",
        description:
          "Wir sehen uns gemeinsam an, wie Aufgaben heute erledigt werden und wo Zeit verloren geht.",
      },
      {
        title: "Priorisieren",
        description:
          "Wir bewerten die Ansatzpunkte nach Aufwand und Nutzen und schlagen eine sinnvolle Reihenfolge vor.",
      },
      {
        title: "Umsetzen und testen",
        description:
          "Die Automatisierungen werden umgesetzt und mit echten Beispielfällen getestet, bevor sie produktiv laufen.",
      },
      {
        title: "Übergeben und begleiten",
        description:
          "Sie erhalten Dokumentation und Einweisung. In der Anfangsphase beobachten wir die Abläufe besonders genau.",
      },
    ],
    clientInputs: [
      "Beschreibung der Abläufe, die automatisiert werden sollen",
      "Liste der eingesetzten Programme und Dienste",
      "Zugänge oder Testzugänge zu den beteiligten Systemen",
      "Beispiele typischer Vorgänge inklusive Sonderfällen",
    ],
    faqs: [
      {
        question: "Welche Werkzeuge setzen Sie ein?",
        answer:
          "Das richtet sich nach Ihrer bestehenden Systemlandschaft. Wir nutzen bevorzugt Werkzeuge, die zu Ihnen passen und wartbar sind, von Automatisierungsplattformen bis zu individuell entwickelten Lösungen. Wichtig ist, dass Sie die Abläufe verstehen und nicht von einem einzelnen Werkzeug abhängig werden.",
      },
      {
        question: "Was passiert, wenn eine Automatisierung fehlschlägt?",
        answer:
          "Wir bauen Fehlerbehandlung und Benachrichtigungen ein. Schlägt ein Schritt fehl, wird die zuständige Person informiert, damit kein Vorgang unbemerkt liegen bleibt, und der Vorgang kann erneut angestoßen oder manuell erledigt werden. Alle Schritte werden protokolliert, sodass sich Ursachen nachvollziehen lassen.",
      },
      {
        question: "Muss ich meine Software wechseln?",
        answer:
          "In der Regel nicht. Ziel ist es, Ihre vorhandenen Systeme besser zu verbinden, statt sie zu ersetzen. Nur wenn ein System keine geeignete Schnittstelle bietet oder Abläufe grundsätzlich behindert, besprechen wir mit Ihnen Alternativen und deren Vor- und Nachteile. Das vermeidet Schnellschüsse und unnötige Kosten.",
      },
    ],
    sources: [
      {
        label: "EUR-Lex: Datenschutz-Grundverordnung (EU) 2016/679",
        url: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679",
      },
    ],
    related: ["integrationen", "ki-agenten", "ki-assistenten"],
    seo: {
      title: "Prozessautomatisierung",
      description:
        "Wiederkehrende Geschäftsprozesse automatisieren: E-Mail-Eingang, Dokumente, Datenübertragung und Benachrichtigungen – zuverlässig und dokumentiert.",
    },
  },
  {
    slug: "integrationen",
    title: "CRM- & Software-Integrationen",
    shortDescription:
      "Verbindungen zwischen CRM, Website, E-Mail und Fachanwendungen, damit Daten ohne Umwege fließen.",
    primaryBenefit: "Ein einheitlicher Datenstand über Ihre Systeme hinweg – ohne doppelte Pflege.",
    intro: [
      "In vielen Unternehmen arbeiten CRM, E-Mail, Buchhaltung, Kalender und Website nebeneinander, ohne miteinander zu sprechen. Die Folge sind doppelte Datenpflege, widersprüchliche Informationen und viel manueller Abgleich.",
      "Wir verbinden Ihre Systeme über deren Schnittstellen, legen fest, welches System für welche Daten führend ist, und sorgen dafür, dass Änderungen zuverlässig dort ankommen, wo sie gebraucht werden.",
    ],
    problems: [
      "Kundendaten sind in mehreren Systemen unterschiedlich gepflegt.",
      "Informationen müssen manuell von einem Programm ins andere übertragen werden.",
      "Es fehlt ein Gesamtüberblick über Kunden, Anfragen und Aufträge.",
      "Neue Software wird angeschafft, lässt sich aber nicht in bestehende Abläufe einbinden.",
    ],
    audience: [
      "Unternehmen, die ein CRM einsetzen oder einführen möchten",
      "Teams, die mit mehreren nicht verbundenen Programmen arbeiten",
      "E-Commerce-Unternehmen mit Shop, Warenwirtschaft und Versanddienstleistern",
    ],
    included: [
      "Bestandsaufnahme Ihrer Systeme und Datenflüsse",
      "Festlegung der führenden Systeme und Datenzuordnung",
      "Umsetzung der Schnittstellen und Synchronisation",
      "Umgang mit Dubletten, Konflikten und Fehlern",
      "Absicherung der Zugänge und Protokollierung",
      "Dokumentation der Datenflüsse",
    ],
    deliverables: [
      "Funktionierende, getestete Integrationen",
      "Datenflussdiagramm und technische Dokumentation",
      "Übersicht über Zugänge, Schlüssel und Zuständigkeiten",
      "Überwachung mit Benachrichtigung bei Fehlern",
    ],
    exampleUseCases: [
      {
        title: "Website und CRM verbinden",
        description:
          "Neue Anfragen, Newsletter-Anmeldungen oder Terminbuchungen werden automatisch als Kontakte im CRM angelegt.",
      },
      {
        title: "CRM und Buchhaltung abgleichen",
        description:
          "Gewonnene Aufträge werden mit den richtigen Stammdaten an die Buchhaltung übergeben, ohne erneute Eingabe.",
      },
      {
        title: "Shop und Warenwirtschaft synchronisieren",
        description:
          "Bestände, Bestellungen und Versandstatus bleiben zwischen Onlineshop und Warenwirtschaft auf dem gleichen Stand.",
      },
    ],
    process: [
      {
        title: "Systeme und Datenflüsse erfassen",
        description:
          "Wir dokumentieren, welche Daten heute wo entstehen und wohin sie fließen sollen.",
      },
      {
        title: "Integrationskonzept",
        description:
          "Wir legen führende Systeme, Feldzuordnungen und den Umgang mit Konflikten fest.",
      },
      {
        title: "Umsetzung in Testumgebung",
        description:
          "Die Integration wird zunächst mit Testdaten umgesetzt und geprüft, bevor echte Daten fließen.",
      },
      {
        title: "Livegang und Überwachung",
        description:
          "Nach erfolgreichem Test wird die Integration aktiviert und in der ersten Zeit eng überwacht.",
      },
    ],
    clientInputs: [
      "Liste der beteiligten Systeme mit Version bzw. Tarif",
      "API-Zugänge oder Administratorzugänge zu den Systemen",
      "Beschreibung, welche Daten wohin fließen sollen",
      "Ansprechpersonen bei Software-Anbietern, falls vorhanden",
    ],
    faqs: [
      {
        question: "Lässt sich jede Software anbinden?",
        answer:
          "Nicht jede, denn Voraussetzung ist in der Regel eine dokumentierte Schnittstelle (API). Vor dem Angebot prüfen wir, welche Möglichkeiten Ihre Systeme bieten, und sagen Ihnen offen, wenn eine Anbindung nicht sinnvoll umsetzbar ist. Oft hängt das auch vom Tarif der jeweiligen Software ab.",
      },
      {
        question: "Was passiert bei Updates der angebundenen Software?",
        answer:
          "Schnittstellen können sich ändern, wenn Anbieter ihre Software aktualisieren. Mit einer Überwachung erkennen wir Probleme früh, und im Rahmen einer Betreuung passen wir Integrationen bei Bedarf an. So bleiben Datenflüsse stabil, auch wenn sich einzelne Programme weiterentwickeln. Auch dazu beraten wir Sie vor der Beauftragung.",
      },
      {
        question: "Wie werden Zugangsdaten geschützt?",
        answer:
          "Zugangsdaten und Schlüssel werden verschlüsselt gespeichert, nur mit den nötigen Berechtigungen versehen und nicht im Quellcode abgelegt. Wo möglich, verwenden wir eigene Zugänge mit eingeschränkten Rechten statt Administratorkonten, und Zugriffe werden protokolliert, damit sich Änderungen nachvollziehen lassen. Damit müssen Sie Änderungen bei Drittanbietern nicht selbst im Blick behalten.",
      },
    ],
    sources: [
      {
        label: "EUR-Lex: Datenschutz-Grundverordnung (EU) 2016/679",
        url: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679",
      },
    ],
    related: ["automatisierung", "ki-agenten", "wartung-support"],
    seo: {
      title: "CRM- & Software-Integrationen",
      description:
        "Verbinden Sie CRM, Website, E-Mail und Fachanwendungen: saubere Schnittstellen, ein einheitlicher Datenstand und keine doppelte Datenpflege.",
    },
  },
  {
    slug: "wartung-support",
    title: "Wartung & technischer Support",
    shortDescription:
      "Updates, Sicherheit, Überwachung und Weiterentwicklung – damit Ihre digitale Infrastruktur zuverlässig bleibt.",
    primaryBenefit:
      "Eine sichere, aktuelle Website und stabile Automatisierungen – ohne dass Sie sich selbst darum kümmern müssen.",
    intro: [
      "Websites, Integrationen und Automatisierungen brauchen nach dem Livegang Pflege: Software muss aktualisiert, Sicherheitslücken geschlossen und Schnittstellen bei Änderungen angepasst werden.",
      "Mit einer laufenden Betreuung übernehmen wir diese Aufgaben planbar. Den Umfang legen wir gemeinsam fest – von der regelmäßigen technischen Wartung bis zur kontinuierlichen Weiterentwicklung.",
    ],
    problems: [
      "Updates werden aufgeschoben, weil niemand im Team zuständig ist.",
      "Fehler fallen erst auf, wenn Kunden sich beschweren.",
      "Kleine Änderungswünsche bleiben monatelang liegen.",
      "Der ursprüngliche Dienstleister ist nicht mehr erreichbar.",
    ],
    audience: [
      "Unternehmen, deren Website oder Automatisierungen geschäftskritisch sind",
      "Teams ohne eigene IT- oder Entwicklungsressourcen",
      "Unternehmen nach Abschluss eines Projekts mit AMIR sowie Betreiber bestehender Websites nach einer Übernahmeprüfung",
    ],
    included: [
      "Regelmäßige Updates von Software und Abhängigkeiten",
      "Überwachung von Erreichbarkeit und Funktionen",
      "Sicherheitsprüfungen und Backups nach Vereinbarung",
      "Fehlerbehebung innerhalb vereinbarter Reaktionszeiten",
      "Kleinere Anpassungen und Inhaltsänderungen",
      "Regelmäßige Abstimmung zu Verbesserungen",
    ],
    deliverables: [
      "Vereinbarter Betreuungsumfang mit klaren Leistungen",
      "Protokoll der durchgeführten Wartungsarbeiten",
      "Ansprechpartner für technische Fragen",
      "Empfehlungen zur Weiterentwicklung",
    ],
    exampleUseCases: [
      {
        title: "Übernahme einer bestehenden Website",
        description:
          "Eine Website wurde von einem früheren Dienstleister erstellt. Nach einer technischen Prüfung übernehmen wir Wartung und Weiterentwicklung.",
      },
      {
        title: "Laufende Betreuung nach dem Projekt",
        description:
          "Nach dem Livegang einer neuen Website oder Automatisierung sorgen wir dafür, dass alles aktuell und funktionsfähig bleibt.",
      },
      {
        title: "Kontinuierliche Verbesserung",
        description:
          "In regelmäßigen Abständen werten wir aus, was gut funktioniert, und setzen kleinere Verbesserungen um.",
      },
    ],
    process: [
      {
        title: "Technische Bestandsaufnahme",
        description:
          "Wir prüfen den aktuellen Zustand Ihrer Website oder Systeme und dokumentieren Risiken.",
      },
      {
        title: "Betreuungsumfang festlegen",
        description:
          "Gemeinsam legen wir fest, welche Leistungen und Reaktionszeiten Sie benötigen.",
      },
      {
        title: "Laufende Betreuung",
        description: "Wir führen Wartung und Überwachung durch und dokumentieren alle Arbeiten.",
      },
      {
        title: "Regelmäßige Abstimmung",
        description:
          "In vereinbarten Abständen besprechen wir Auffälligkeiten und mögliche Verbesserungen.",
      },
    ],
    clientInputs: [
      "Zugänge zu Hosting, Domain und Content-Management-System",
      "Bestehende Dokumentation, falls vorhanden",
      "Erwartete Reaktionszeiten und Zuständigkeiten",
      "Liste bekannter Probleme oder offener Wünsche",
    ],
    faqs: [
      {
        question: "Betreuen Sie auch Websites, die Sie nicht selbst erstellt haben?",
        answer:
          "Ja, nach einer technischen Prüfung. Dabei klären wir, in welchem Zustand die Website ist, welche Risiken bestehen und ob eine Betreuung in der bestehenden Form sinnvoll ist. Auf dieser Grundlage legen wir gemeinsam fest, was zur Betreuung gehört und was vorher behoben werden sollte.",
      },
      {
        question: "Wie wird die Betreuung abgerechnet?",
        answer:
          "Üblich ist eine monatliche Pauschale für einen klar definierten Leistungsumfang, zum Beispiel Updates, Überwachung und eine bestimmte Anzahl kleinerer Anpassungen. Zusätzliche Arbeiten werden vorab abgestimmt. So wissen Sie vorher, was die Betreuung umfasst und womit Sie rechnen können. Bei Bedarf passen wir den Umfang später an.",
      },
      {
        question: "Kann ich die Betreuung beenden?",
        answer:
          "Ja. Laufzeit und Kündigungsfristen legen wir im Vertrag fest. Bei einer Beendigung erhalten Sie alle Zugänge und die Dokumentation, damit Sie die Betreuung selbst übernehmen oder an einen anderen Dienstleister übergeben können. Sie sind nicht dauerhaft an uns gebunden. Wichtig ist uns ein geordneter Übergang.",
      },
    ],
    sources: [
      { label: "web.dev: Core Web Vitals", url: "https://web.dev/articles/vitals?hl=de" },
      {
        label: "W3C: Web Content Accessibility Guidelines (WCAG), englisch",
        url: "https://www.w3.org/WAI/standards-guidelines/wcag/",
      },
    ],
    related: ["webdesign", "integrationen", "seo"],
    seo: {
      title: "Wartung & technischer Support",
      description:
        "Planbare Wartung, Sicherheitsupdates, Überwachung und Weiterentwicklung für Websites, Integrationen und Automatisierungen.",
    },
  },
];
