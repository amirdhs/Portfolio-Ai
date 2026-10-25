import Link from "next/link";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { href } from "@/i18n/routes";
import { Value } from "./Value";

/**
 * Privacy policy template reflecting what this website actually does:
 * hosting on an IONOS server behind Cloudflare, a contact form delivered by SMTP, self-hosted fonts,
 * no cookies and no tracking. Must be reviewed by a qualified person before going live.
 */
export function PrivacyText({ locale }: { locale: Locale }) {
  return locale === "de" ? <PrivacyDe /> : <PrivacyEn />;
}

function Controller({ locale }: { locale: Locale }) {
  const missing = getDictionary(locale).legal.missing;
  const { legal, contact } = siteConfig;
  const de = locale === "de";
  return (
    <p>
      <Value
        value={legal.legalName}
        label={de ? "Name des Unternehmens / Inhabers" : "Company / owner name"}
        missing={missing}
      />
      <br />
      <Value
        value={legal.representative}
        label={de ? "Inhaber bzw. Vertreter" : "Owner or representative"}
        missing={missing}
      />
      <br />
      <Value
        value={legal.street}
        label={de ? "Straße und Hausnummer" : "Street and number"}
        missing={missing}
      />
      <br />
      <Value value={legal.postalCode} label={de ? "PLZ" : "Postal code"} missing={missing} />{" "}
      <Value value={legal.city} label={de ? "Ort" : "City"} missing={missing} />
      <br />
      {de ? "E-Mail" : "Email"}:{" "}
      <Value
        value={contact.email}
        label={de ? "E-Mail-Adresse" : "Email address"}
        missing={missing}
      />
    </p>
  );
}

function PrivacyDe() {
  const missing = getDictionary("de").legal.missing;
  const { legal, hosting } = siteConfig;
  return (
    <>
      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der
        Datenschutz-Grundverordnung (DSGVO) ist:
      </p>
      <Controller locale="de" />

      <h2>2. Überblick</h2>
      <p>
        Wir verarbeiten personenbezogene Daten nur, soweit dies für den Betrieb dieser Website, die
        Bearbeitung Ihrer Anfragen oder die Erfüllung gesetzlicher Pflichten erforderlich ist. Diese
        Website verwendet keine Cookies, keine Analyse- oder Tracking-Werkzeuge und bindet keine
        Inhalte von Drittanbietern wie Videoplattformen, Kartendienste oder Social-Media-Plugins
        ein.
      </p>

      <h2>3. Hosting und Server-Logfiles</h2>
      <p>
        Diese Website wird bei {hosting.provider}, {hosting.address}, auf einem Server in{" "}
        {hosting.region} gehostet. Serverseitige Funktionen (z. B. das Kontaktformular) laufen auf
        diesem Server. Vor dem Server ist der Dienst Cloudflare (Cloudflare, Inc., 101 Townsend St,
        San Francisco, CA 94107, USA) als Content-Delivery-Netzwerk und Schutzschicht geschaltet;
        Anfragen an diese Website laufen deshalb über das Netzwerk von Cloudflare.
      </p>
      <p>
        Beim Aufruf der Website verarbeiten der Hosting-Anbieter und Cloudflare technisch notwendige
        Daten, insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Adresse,
        übertragene Datenmenge, Referrer-URL sowie Browser- und Betriebssysteminformationen. Diese
        Verarbeitung ist erforderlich, um die Website sicher und stabil bereitzustellen.
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt im
        sicheren und zuverlässigen Betrieb der Website.
      </p>
      <p>
        Mit dem Hosting-Anbieter und mit Cloudflare besteht jeweils ein Vertrag zur
        Auftragsverarbeitung gemäß Art. 28 DSGVO. Eine Übermittlung in die USA kann nicht
        ausgeschlossen werden; sie erfolgt auf Grundlage des EU-US Data Privacy Framework bzw. von
        Standardvertragsklauseln der EU-Kommission.
      </p>

      <h2>4. Kontaktformular und Anfragen per E-Mail</h2>
      <p>
        Wenn Sie uns über das Anfrageformular oder per E-Mail kontaktieren, verarbeiten wir die von
        Ihnen angegebenen Daten: Name, geschäftliche E-Mail-Adresse, Unternehmen, optional Ihre
        Website, die gewünschte Leistung, Ihre Projektbeschreibung und Herausforderung sowie
        optional Budget und Zeitrahmen. Zweck ist ausschließlich die Bearbeitung Ihrer Anfrage und
        gegebenenfalls die Vorbereitung eines Angebots.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage auf den Abschluss eines
        Vertrags gerichtet ist, im Übrigen Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO, die
        Sie mit dem Absenden des Formulars erteilen. Sie können die Einwilligung jederzeit mit
        Wirkung für die Zukunft widerrufen, z. B. per E-Mail an uns.
      </p>
      <p>
        Die Formulardaten werden per verschlüsselter Verbindung an unseren E-Mail-Anbieter
        übermittelt und in unserem Postfach gespeichert. E-Mail-Anbieter:{" "}
        <Value
          value={legal.emailProvider}
          label="Name und Sitz des E-Mail-Anbieters"
          missing={missing}
        />
        . Eine Speicherung der Anfragen in einer Datenbank dieser Website findet nicht statt.
      </p>
      <p>
        Wir löschen Ihre Anfrage, sobald sie abschließend bearbeitet ist und keine gesetzlichen
        Aufbewahrungspflichten entgegenstehen. Kommt ein Vertrag zustande, gelten die handels- und
        steuerrechtlichen Aufbewahrungsfristen (in der Regel sechs bzw. zehn Jahre).
      </p>

      <h2>5. Schutz vor Missbrauch</h2>
      <p>
        Zum Schutz des Formulars vor automatisierten Spam-Einsendungen verwenden wir ein für
        Menschen unsichtbares Kontrollfeld und prüfen die Ausfülldauer. Außerdem wird die IP-Adresse
        kurzzeitig im Arbeitsspeicher verarbeitet, um die Anzahl der Anfragen pro Absender zu
        begrenzen; sie wird dabei nicht dauerhaft gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1
        lit. f DSGVO; unser berechtigtes Interesse ist der Schutz vor Missbrauch.
      </p>

      <h2>6. Schriftarten</h2>
      <p>
        Die auf dieser Website verwendeten Schriftarten werden von unserem eigenen Server
        ausgeliefert. Es wird keine Verbindung zu Servern von Google oder anderen Schriftanbietern
        aufgebaut.
      </p>

      <h2>7. Cookies</h2>
      <p>
        Diese Website setzt keine Cookies und speichert keine Informationen auf Ihrem Endgerät.
        Weitere Informationen finden Sie in den{" "}
        <Link href={href("cookies")} className="link-underline">
          Cookie-Einstellungen
        </Link>
        .
      </p>

      <h2>8. Ihre Rechte</h2>
      <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
      <ul>
        <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
        <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
        <li>Recht auf Löschung (Art. 17 DSGVO)</li>
        <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>
          Recht auf Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
          (Art. 21 DSGVO)
        </li>
        <li>
          Recht auf Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3
          DSGVO)
        </li>
      </ul>
      <p>
        Sie haben außerdem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren
        (Art. 77 DSGVO). Zuständig ist insbesondere:{" "}
        <Value
          value={legal.dataProtectionAuthority}
          label="Zuständige Aufsichtsbehörde"
          missing={missing}
        />
        .
      </p>

      <h2>9. Pflicht zur Bereitstellung und automatisierte Entscheidungen</h2>
      <p>
        Die Bereitstellung Ihrer Daten über das Formular ist freiwillig. Ohne die als Pflichtfelder
        markierten Angaben können wir Ihre Anfrage jedoch nicht bearbeiten. Eine automatisierte
        Entscheidungsfindung einschließlich Profiling findet nicht statt.
      </p>

      <h2>10. Aktualität</h2>
      <p>
        Stand dieser Datenschutzerklärung:{" "}
        <Value
          value={legal.legalReviewDate}
          label="Datum der rechtlichen Prüfung"
          missing={missing}
        />
        . Wir passen sie an, sobald sich die Datenverarbeitung auf dieser Website ändert.
      </p>
    </>
  );
}

function PrivacyEn() {
  const missing = getDictionary("en").legal.missing;
  const { legal, hosting } = siteConfig;
  return (
    <>
      <h2>1. Controller</h2>
      <p>
        The controller responsible for data processing on this website within the meaning of the
        GDPR is:
      </p>
      <Controller locale="en" />

      <h2>2. Overview</h2>
      <p>
        We only process personal data to the extent necessary to operate this website, handle your
        inquiries or meet legal obligations. This website does not use cookies or any analytics or
        tracking tools, and does not embed third-party content such as video platforms, map services
        or social media plugins.
      </p>

      <h2>3. Hosting and server log files</h2>
      <p>
        This website is hosted by {hosting.provider}, {hosting.address}, on a server in{" "}
        {hosting.region}. Server-side functions (such as the contact form) run on this server. The
        service Cloudflare (Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA) sits in
        front of the server as a content delivery network and protective layer, so requests to this
        website pass through Cloudflare&apos;s network.
      </p>
      <p>
        When you visit the website, the hosting provider and Cloudflare process technically
        necessary data, in particular your IP address, date and time of access, the requested
        address, amount of data transferred, referrer URL, and browser and operating system
        information. This is required to provide the website securely and reliably. The legal basis
        is Art. 6(1)(f) GDPR; our legitimate interest is the secure and reliable operation of the
        website.
      </p>
      <p>
        A data processing agreement pursuant to Art. 28 GDPR is in place with the hosting provider
        and with Cloudflare. A transfer to the USA cannot be ruled out; it takes place on the basis
        of the EU-US Data Privacy Framework or the European Commission&apos;s standard contractual
        clauses.
      </p>

      <h2>4. Contact form and inquiries by email</h2>
      <p>
        When you contact us via the inquiry form or by email, we process the data you provide: name,
        business email address, company, optionally your website, the service of interest, your
        project description and challenge, and optionally budget and timeline. The sole purpose is
        to handle your inquiry and, where applicable, to prepare a proposal.
      </p>
      <p>
        The legal basis is Art. 6(1)(b) GDPR insofar as your inquiry aims at concluding a contract,
        and otherwise your consent pursuant to Art. 6(1)(a) GDPR, given when you submit the form.
        You can withdraw your consent at any time with effect for the future, for example by email.
      </p>
      <p>
        The form data is transmitted over an encrypted connection to our email provider and stored
        in our mailbox. Email provider:{" "}
        <Value
          value={legal.emailProvider}
          label="Name and location of the email provider"
          missing={missing}
        />
        . Inquiries are not stored in a database on this website.
      </p>
      <p>
        We delete your inquiry once it has been fully handled, unless statutory retention
        obligations apply. If a contract is concluded, the retention periods under German commercial
        and tax law apply (usually six or ten years).
      </p>

      <h2>5. Abuse prevention</h2>
      <p>
        To protect the form against automated spam, we use a control field that is invisible to
        people and check how long the form took to fill in. In addition, your IP address is briefly
        processed in memory to limit the number of requests per sender; it is not stored
        permanently. The legal basis is Art. 6(1)(f) GDPR; our legitimate interest is protection
        against abuse.
      </p>

      <h2>6. Fonts</h2>
      <p>
        The fonts used on this website are delivered from our own server. No connection is made to
        Google or other font providers.
      </p>

      <h2>7. Cookies</h2>
      <p>
        This website does not set cookies or store information on your device. More information is
        available in the{" "}
        <Link href={href("cookies", { locale: "en" })} className="link-underline">
          cookie settings
        </Link>
        .
      </p>

      <h2>8. Your rights</h2>
      <p>You have the following rights regarding your personal data:</p>
      <ul>
        <li>Right of access (Art. 15 GDPR)</li>
        <li>Right to rectification (Art. 16 GDPR)</li>
        <li>Right to erasure (Art. 17 GDPR)</li>
        <li>Right to restriction of processing (Art. 18 GDPR)</li>
        <li>Right to data portability (Art. 20 GDPR)</li>
        <li>Right to object to processing based on Art. 6(1)(f) GDPR (Art. 21 GDPR)</li>
        <li>Right to withdraw consent with effect for the future (Art. 7(3) GDPR)</li>
      </ul>
      <p>
        You also have the right to lodge a complaint with a data protection supervisory authority
        (Art. 77 GDPR). The competent authority is in particular:{" "}
        <Value
          value={legal.dataProtectionAuthority}
          label="Competent supervisory authority"
          missing={missing}
        />
        .
      </p>

      <h2>9. Obligation to provide data and automated decisions</h2>
      <p>
        Providing your data via the form is voluntary. However, we cannot handle your inquiry
        without the fields marked as required. No automated decision-making, including profiling,
        takes place.
      </p>

      <h2>10. Version</h2>
      <p>
        Version of this privacy policy:{" "}
        <Value value={legal.legalReviewDate} label="Date of legal review" missing={missing} />. We
        will update it whenever the data processing on this website changes.
      </p>
    </>
  );
}
