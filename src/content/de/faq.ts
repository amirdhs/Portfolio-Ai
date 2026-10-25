import type { FaqItem } from "../types";

export interface FaqGroup {
  id: string;
  title: string;
  items: FaqItem[];
}

/** The eight questions shown on the homepage, in order. */
export const coreFaqs: FaqItem[] = [
  {
    question: "Welche Leistungen bietet AMIR an?",
    answer:
      "AMIR bietet sieben Leistungen an: Website-Entwicklung, Suchmaschinenoptimierung, KI-Assistenten, KI-Agenten, Prozessautomatisierung, Software- und CRM-Integrationen sowie Wartung und Support. Alle Leistungen lassen sich einzeln oder kombiniert beauftragen, etwa eine neue Website mit angebundenem Anfrageprozess und anschließender laufender Betreuung. Welche Kombination sinnvoll ist, klären wir im Erstgespräch.",
  },
  {
    question: "Wie beginnt ein Projekt?",
    answer:
      "Ein Projekt beginnt mit Ihrer Anfrage über das Kontaktformular oder per E-Mail. Danach vereinbaren wir ein unverbindliches Erstgespräch, in dem wir Ausgangslage und Ziele klären. Auf dieser Grundlage erhalten Sie eine ehrliche Einschätzung und, wenn es passt, ein schriftliches Angebot mit klar beschriebenem Umfang und Zeitplan.",
  },
  {
    question: "Was kostet eine Website?",
    answer:
      "Der Preis einer Website hängt vom Umfang ab: Anzahl und Art der Seiten, Gestaltungsaufwand, benötigte Funktionen, Textarbeit und Anbindungen an andere Systeme. Eine seriöse Zahl nennen wir erst, wenn wir Ihre Anforderungen kennen. Danach erhalten Sie ein schriftliches Angebot mit festgelegtem Leistungsumfang. Die wichtigsten Preisfaktoren erklärt unsere Kostenseite.",
  },
  {
    question: "Wie lange dauert die Umsetzung?",
    answer:
      "Die Dauer richtet sich nach Umfang, Komplexität und danach, wie schnell Inhalte und Freigaben vorliegen. Eine kompakte Website braucht in der Regel weniger Zeit als ein Projekt mit Schnittstellen oder KI-Funktionen. Mit dem Angebot erhalten Sie einen realistischen Zeitplan mit Meilensteinen, sodass Sie jederzeit wissen, wo das Projekt steht.",
  },
  {
    question: "Kann AMIR eine bestehende Website verbessern?",
    answer:
      "Ja, AMIR kann eine bestehende Website verbessern. Wir prüfen zuerst Technik, Inhalte und Sichtbarkeit und empfehlen dann, ob eine gezielte Überarbeitung oder ein Neuaufbau sinnvoller ist. Die Entscheidung treffen Sie auf Basis einer nachvollziehbaren Einschätzung, nicht auf Basis von Annahmen oder Verkaufsinteressen.",
  },
  {
    question: "Lassen sich KI-Lösungen in bestehende Werkzeuge integrieren?",
    answer:
      "In vielen Fällen ja, sofern Ihre Programme geeignete Schnittstellen (APIs) bieten. Vor einem Angebot prüfen wir, welche Anbindungen möglich sind, und sagen Ihnen offen, wenn etwas nicht sinnvoll umsetzbar ist. Typische Beispiele sind die Anbindung an CRM, E-Mail, Kalender oder Dokumentenablage.",
  },
  {
    question: "Bietet AMIR laufende Betreuung an?",
    answer:
      "Ja, AMIR bietet laufende Betreuung an. Nach dem Livegang können Sie Wartung, Updates, Überwachung und Weiterentwicklung im Rahmen einer Betreuungsvereinbarung an uns übergeben. Den Umfang und die Reaktionszeiten legen wir gemeinsam fest, sodass Sie wissen, was Sie erwarten können und was zusätzlich vereinbart werden muss.",
  },
  {
    question: "Wie wird der Projektpreis festgelegt?",
    answer:
      "Der Projektpreis richtet sich nach dem vereinbarten Leistungsumfang. Je nach Projekt bieten wir einen Festpreis für klar definierte Leistungen oder eine Abrechnung nach Aufwand mit transparenter Schätzung an. Zusätzliche Wünsche werden vor ihrer Umsetzung mit Aufwand und Preis abgestimmt, sodass keine Überraschungen entstehen.",
  },
];

export const faqGroups: FaqGroup[] = [
  { id: "allgemein", title: "Allgemein & Ablauf", items: coreFaqs },
  {
    id: "ki-und-daten",
    title: "KI & Datenschutz",
    items: [
      {
        question: "Ist KI für mein Unternehmen überhaupt sinnvoll?",
        answer:
          "KI lohnt sich vor allem dort, wo Texte verstanden, Informationen zusammengefasst oder viele ähnliche Anfragen beantwortet werden müssen. Für klar regelbasierte Abläufe ist eine klassische Automatisierung oft die bessere und günstigere Wahl. Wir empfehlen ehrlich, was zu Ihrem Fall passt, auch wenn das keine KI ist.",
      },
      {
        question: "Wie gehen Sie mit Datenschutz bei KI-Lösungen um?",
        answer:
          "Wir berücksichtigen den Datenschutz von Beginn an: welche Daten verarbeitet werden, bei welchem Anbieter und an welchem Standort. Die eingesetzten Dienste dokumentieren wir, damit Sie Ihre Pflichten erfüllen können. Das ersetzt keine Rechtsberatung; bei Bedarf sollten Sie Ihren Datenschutzbeauftragten einbeziehen.",
      },
      {
        question: "Können KI-Systeme Fehler machen?",
        answer:
          "Ja, KI-Systeme können Fehler machen und Falsches überzeugend formulieren. Deshalb setzen wir KI mit klaren Grenzen ein: auf Basis geprüfter Inhalte, mit Quellenangaben und Protokollierung und, wo es auf Verantwortung ankommt, mit einer Freigabe durch einen Menschen. Regelmäßige Stichproben bleiben sinnvoll.",
      },
    ],
  },
  {
    id: "zusammenarbeit",
    title: "Zusammenarbeit",
    items: [
      {
        question: "Wem gehören Quellcode und Inhalte nach dem Projekt?",
        answer:
          "Die Nutzungsrechte an den für Sie erstellten Ergebnissen regeln wir im Angebot. Grundsätzlich erhalten Sie nach Abschluss alle Zugänge, den Quellcode und die Dokumentation, damit Sie nicht von uns abhängig sind und jederzeit selbst entscheiden können, wie es weitergeht. Das gilt für Websites ebenso wie für Automatisierungen.",
      },
      {
        question: "Arbeiten Sie auch aus der Ferne?",
        answer:
          "Ja, wir arbeiten remote. Abstimmungen finden in der Regel per Videogespräch, E-Mail und gemeinsamen Dokumenten statt, sodass die Zusammenarbeit unabhängig vom Standort funktioniert. Zwischenergebnisse sehen Sie in einer Vorschauumgebung, bevor etwas live geht, und können dort Rückmeldung geben. So bleiben Entscheidungen und Änderungen für alle Beteiligten nachvollziehbar.",
      },
      {
        question: "Was benötigen Sie von mir für den Start?",
        answer:
          "Für das Erstgespräch genügt eine kurze Beschreibung Ihres Vorhabens. Für die Umsetzung benötigen wir je nach Projekt Inhalte wie Texte und Bilder, Zugänge zu bestehenden Systemen und eine Ansprechperson für Abstimmungen und Freigaben. Eine passende Liste finden Sie auf jeder Leistungsseite.",
      },
    ],
  },
];
