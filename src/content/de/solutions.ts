import type { Solution } from "../types";

/** Problem-first solution examples. All scenarios are illustrative, not client references. */
export const solutions: Solution[] = [
  {
    slug: "anfragen-gewinnen-und-verwalten",
    title: "Website-Anfragen gewinnen und verwalten",
    problem:
      "Über die Website kommen wenige Anfragen – und die, die kommen, sind unvollständig, landen in einem allgemeinen Postfach und werden unterschiedlich schnell bearbeitet.",
    approach:
      "Wir überarbeiten Leistungsseiten und Handlungsaufforderungen, gestalten ein Anfrageformular, das die wichtigsten Informationen strukturiert abfragt, und leiten jede Anfrage automatisch an die zuständige Person oder in Ihr CRM weiter.",
    benefit:
      "Besucher wissen, wie sie anfragen können, Ihr Team erhält vollständige Informationen, und keine Anfrage geht verloren.",
    exampleScenario:
      "Ein Beratungsunternehmen erhält Anfragen per E-Mail ohne Angaben zu Umfang oder Zeitrahmen. Ein strukturiertes Formular mit automatischer Übergabe ins CRM spart Rückfragen und macht den Stand jeder Anfrage sichtbar.",
    feasibilityInputs: [
      "Adresse Ihrer aktuellen Website",
      "Wie Anfragen heute eingehen und bearbeitet werden",
      "Welche Informationen Sie für ein Angebot benötigen",
      "Eingesetztes CRM oder Postfach",
    ],
    related: ["webdesign", "integrationen", "automatisierung"],
  },
  {
    slug: "haeufige-kundenfragen-beantworten",
    title: "Häufige Kundenfragen beantworten",
    problem:
      "Ihr Team beantwortet täglich dieselben Fragen zu Leistungen, Preisen, Abläufen oder Fristen – Zeit, die für anspruchsvollere Aufgaben fehlt.",
    approach:
      "Wir bereiten Ihre Antworten als geprüfte Wissensbasis auf und setzen einen KI-Assistenten ein, der Fragen auf dieser Grundlage beantwortet, auf passende Seiten verweist und bei Bedarf an Ihr Team übergibt.",
    benefit:
      "Kunden erhalten sofort eine Antwort, auch außerhalb der Geschäftszeiten, und Ihr Team kann sich auf individuelle Anliegen konzentrieren.",
    exampleScenario:
      "Ein Dienstleister erhält viele Fragen zu Ablauf und benötigten Unterlagen. Ein Assistent auf der Website beantwortet diese Fragen und verweist für individuelle Fälle auf das Kontaktformular.",
    feasibilityInputs: [
      "Eine Liste der häufigsten Fragen",
      "Vorhandene Antworten, FAQs oder Dokumente",
      "Themen, die der Assistent nicht beantworten soll",
      "Anforderungen an Datenschutz und Datenstandort",
    ],
    related: ["ki-assistenten", "webdesign"],
  },
  {
    slug: "e-mail-eingang-automatisieren",
    title: "Eingehende E-Mails automatisch verarbeiten",
    problem:
      "Ein zentrales Postfach erhält Anfragen, Rechnungen, Terminwünsche und Rückfragen durcheinander. Das Sortieren und Weiterleiten kostet täglich Zeit, und dringende Anliegen gehen unter.",
    approach:
      "Eingehende E-Mails werden automatisch nach Anliegen klassifiziert, wichtige Angaben werden ausgelesen und der Vorgang wird an die zuständige Person oder das passende System übergeben. Unklare Fälle landen in einer Prüfliste.",
    benefit:
      "Anliegen landen schneller bei der richtigen Stelle, und Ihr Team sieht auf einen Blick, was dringend ist.",
    exampleScenario:
      "Eine Verwaltung erhält täglich viele E-Mails in einem Sammelpostfach. Eine Automatisierung erkennt Rechnungen, Terminanfragen und Reklamationen und legt sie jeweils im richtigen System ab.",
    feasibilityInputs: [
      "Eingesetzter E-Mail-Dienst (z. B. Microsoft 365, Google Workspace)",
      "Typische Arten von E-Mails und ihr ungefährer Anteil",
      "Wohin die jeweiligen Vorgänge weitergegeben werden sollen",
      "Anforderungen an Datenschutz und Aufbewahrung",
    ],
    related: ["automatisierung", "ki-agenten", "integrationen"],
  },
  {
    slug: "crm-und-tools-verbinden",
    title: "CRM und Geschäftsanwendungen verbinden",
    problem:
      "Kundendaten werden im CRM, in der Buchhaltung und in Tabellen parallel gepflegt. Niemand weiß sicher, welcher Stand aktuell ist.",
    approach:
      "Wir legen fest, welches System für welche Daten führend ist, und verbinden Ihre Anwendungen über deren Schnittstellen, sodass Änderungen automatisch übertragen werden.",
    benefit:
      "Ein verlässlicher Datenstand, weniger doppelte Eingaben und ein vollständiger Überblick über Ihre Kundenbeziehungen.",
    exampleScenario:
      "Ein Vertriebsteam pflegt Kontakte im CRM, die Buchhaltung arbeitet mit eigenen Stammdaten. Eine Integration überträgt Neukunden und Änderungen automatisch.",
    feasibilityInputs: [
      "Liste der eingesetzten Anwendungen",
      "Welche Daten in welchem System entstehen",
      "Verfügbarkeit von Schnittstellen bzw. Ihr Software-Tarif",
      "Bekannte Probleme mit Dubletten oder veralteten Daten",
    ],
    related: ["integrationen", "automatisierung"],
  },
  {
    slug: "verwaltungsaufwand-reduzieren",
    title: "Wiederkehrenden Verwaltungsaufwand reduzieren",
    problem:
      "Erinnerungen, Statusmeldungen, Terminbestätigungen und Listenpflege erledigt Ihr Team von Hand – jede Woche aufs Neue.",
    approach:
      "Wir nehmen die Abläufe gemeinsam auf, bewerten sie nach Aufwand und Nutzen und automatisieren zuerst die Aufgaben mit dem größten Zeitanteil.",
    benefit:
      "Mehr Zeit für Kunden und Kernaufgaben, weniger vergessene Schritte und verlässlichere Abläufe.",
    exampleScenario:
      "Nach jedem Auftrag werden manuell eine Bestätigung verschickt, eine Aufgabe angelegt und eine Liste aktualisiert. Eine Automatisierung erledigt diese drei Schritte zuverlässig im Hintergrund.",
    feasibilityInputs: [
      "Beschreibung der wiederkehrenden Aufgaben",
      "Wie oft sie anfallen und wer sie erledigt",
      "Beteiligte Programme und Dienste",
    ],
    related: ["automatisierung", "integrationen"],
  },
  {
    slug: "dokumente-und-daten-automatisieren",
    title: "Dokumenten- und Datenabläufe automatisieren",
    problem:
      "Dokumente wie Formulare, Lieferscheine oder Verträge werden geöffnet, abgetippt, umbenannt und abgelegt. Das ist zeitaufwendig und fehleranfällig.",
    approach:
      "Dokumente werden automatisch ausgelesen, die relevanten Daten werden geprüft und in Ihr System übertragen. Abweichungen oder unsichere Fälle werden zur manuellen Prüfung markiert.",
    benefit: "Weniger Abtippen, weniger Übertragungsfehler und eine einheitliche Ablage.",
    exampleScenario:
      "Ein Unternehmen erhält Auftragsformulare als PDF. Die Angaben werden ausgelesen, mit Kundendaten abgeglichen und als Auftrag angelegt – unklare Felder prüft ein Mensch.",
    feasibilityInputs: [
      "Beispieldokumente (anonymisiert)",
      "Welche Angaben ausgelesen werden sollen",
      "Zielsystem für die Daten",
      "Menge der Dokumente pro Woche oder Monat",
    ],
    related: ["automatisierung", "ki-agenten"],
  },
  {
    slug: "internes-wissen-zugaenglich-machen",
    title: "Internes Wissen besser zugänglich machen",
    problem:
      "Informationen zu Abläufen, Produkten und Richtlinien sind über Ordner, Dokumente und Köpfe verteilt. Mitarbeitende fragen nach oder suchen lange.",
    approach:
      "Wir strukturieren Ihre internen Inhalte und machen sie über einen internen KI-Assistenten durchsuchbar, der Antworten mit Quellenangabe liefert und Zugriffsrechte berücksichtigt.",
    benefit:
      "Schnellere Antworten im Arbeitsalltag, einfachere Einarbeitung und weniger Abhängigkeit von einzelnen Personen.",
    exampleScenario:
      "Neue Mitarbeitende haben viele Fragen zu internen Abläufen. Ein Assistent beantwortet sie auf Basis des Handbuchs und verlinkt die jeweilige Quelle.",
    feasibilityInputs: [
      "Wo Ihre Dokumente heute liegen",
      "Wer auf welche Informationen zugreifen darf",
      "Beispiele typischer Fragen",
    ],
    related: ["ki-assistenten", "integrationen"],
  },
  {
    slug: "bestehende-website-modernisieren",
    title: "Eine bestehende Website modernisieren",
    problem:
      "Die Website ist in die Jahre gekommen: langsam, auf dem Smartphone unpraktisch, schwer zu pflegen und inhaltlich nicht mehr aktuell.",
    approach:
      "Wir prüfen Technik, Inhalte und Sichtbarkeit, entscheiden mit Ihnen zwischen Überarbeitung und Neuaufbau und sichern bestehende Suchmaschinen-Rankings durch saubere Weiterleitungen.",
    benefit:
      "Ein zeitgemäßer Auftritt, der schnell lädt, gut gefunden wird und sich einfach pflegen lässt.",
    exampleScenario:
      "Eine über zehn Jahre alte Unternehmenswebsite wird neu aufgebaut. Bestehende Inhalte werden überarbeitet und alte Adressen auf die neuen Seiten weitergeleitet.",
    feasibilityInputs: [
      "Adresse der bestehenden Website",
      "Zugang zu Hosting und Content-Management-System",
      "Was an der aktuellen Website gut bzw. schlecht funktioniert",
    ],
    related: ["webdesign", "seo", "wartung-support"],
  },
];
