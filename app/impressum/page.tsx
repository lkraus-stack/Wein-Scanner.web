import type { Metadata } from "next";

import { LegalShell } from "../shared";

export const metadata: Metadata = {
  title: "Impressum",
  alternates: {
    canonical: "/impressum",
  },
};

export default function ImpressumPage() {
  return (
    <LegalShell eyebrow="Angaben nach § 5 DDG und § 18 MStV" title="Impressum">
      <h2>Anbieter</h2>
      <p>
        Franco Consulting GmbH
        <br />
        Maria-Theresia-Strasse 17
        <br />
        89331 Burgau
        <br />
        Deutschland
      </p>

      <h2>Vertreten durch</h2>
      <p>Die Geschäftsführer Lukas Kraus und Kilian Franco.</p>

      <h2>Kontakt</h2>
      <p>
        E-Mail:{" "}
        <a href="mailto:support@wein-scanner.app">support@wein-scanner.app</a>
        <br />
        Telefon: 08222 4183998
      </p>

      <h2>Registereintrag</h2>
      <p>
        Registergericht: Amtsgericht Memmingen
        <br />
        Registernummer: HRB 20230
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE358098950</p>

      <h2>Verantwortlich für den Inhalt</h2>
      <p>
        Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
        <br />
        Lukas Kraus
        <br />
        Maria-Theresia-Strasse 17
        <br />
        89331 Burgau
      </p>

      <h2>Geltungsbereich</h2>
      <p>
        Dieses Impressum gilt für die Website wein-scanner.app und für die
        mobile iOS-App Wein Scanner.
      </p>

      <h2>Verbraucherstreitbeilegung</h2>
      <p>
        Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </LegalShell>
  );
}
