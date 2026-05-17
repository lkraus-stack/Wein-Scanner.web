import type { Metadata } from "next";

import { InfoCallout, LegalShell } from "../shared";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  alternates: {
    canonical: "/datenschutz",
  },
};

export default function DatenschutzPage() {
  return (
    <LegalShell eyebrow="Stand: Mai 2026" title="Datenschutzerklärung">
      <p>
        Diese Datenschutzerklärung gilt für die mobile iOS-App Wein Scanner und
        für die Website unter wein-scanner.app. Wein Scanner hilft dir dabei,
        Weinetiketten zu scannen, Weindaten mit KI zu erkennen, dein Weinregal
        zu verwalten und Restaurants mit starker Weinkarte zu entdecken.
      </p>

      <InfoCallout>
        <p>
          Wein Scanner verwendet keine Werbung, kein Cross-App-Tracking, keinen
          Verkauf personenbezogener Daten und keine Datenbroker. RevenueCat,
          PostHog, Brave Search und Tavily werden in der App derzeit nicht
          eingesetzt.
        </p>
      </InfoCallout>

      <h2>Verantwortlicher</h2>
      <p>
        Franco Consulting GmbH
        <br />
        Maria-Theresia-Strasse 17
        <br />
        89331 Burgau
        <br />
        Deutschland
      </p>
      <p>
        Vertreten durch die Geschäftsführer Kilian Franco und Lukas Kraus.
        Datenschutzanfragen kannst du an{" "}
        <a href="mailto:support@wein-scanner.app">support@wein-scanner.app</a>{" "}
        senden.
      </p>

      <h2>Welche Daten verarbeitet werden</h2>
      <ul>
        <li>
          Accountdaten wie E-Mail-Adresse, Nutzer-ID und Login-Informationen,
          auch bei Sign in with Apple.
        </li>
        <li>
          Profildaten wie Display-Name, Avatarbild und App-Einstellungen, soweit
          du diese freiwillig hinterlegst.
        </li>
        <li>
          Wein-Scans wie Etikettfotos, optionale Rückseitenbilder und
          KI-extrahierte Weindaten, zum Beispiel Weingut, Weinname, Jahrgang,
          Region, Rebsorte, Farbe, Trinkfenster, Aromen und Beschreibung.
        </li>
        <li>
          Bewertungen, Notizen, Anlässe, Bestandsdaten, Mengen, Lagerorte und
          Kaufpreise.
        </li>
        <li>
          Restaurantdaten, Suchanfragen, Standortfreigaben, gespeicherte
          Restaurants, Restaurantbewertungen und Restaurantbesuche.
        </li>
        <li>
          Technische Fehler- und Crashdaten, die uns helfen, die App stabil und
          sicher zu betreiben.
        </li>
      </ul>

      <h2>Zwecke und Rechtsgrundlagen</h2>
      <p>
        Wir verarbeiten deine Daten, um die App-Funktionen bereitzustellen:
        Login, Profil, Scan-Analyse, Verlauf, Bewertungen, Bestand,
        Datenexport, Account-Löschung und Restaurant Discovery.
      </p>
      <p>
        Account-, Profil-, Scan-, Bewertungs-, Bestands- und Restaurantdaten
        verarbeiten wir auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, soweit
        dies für die Nutzung der App erforderlich ist.
      </p>
      <p>
        Technische Fehlerdaten und Sicherheitsereignisse verarbeiten wir auf
        Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse
        ist ein stabiler, sicherer und fehlerarmer App-Betrieb.
      </p>
      <p>
        Standortdaten werden nur verarbeitet, wenn du der App die
        Standortfreigabe erteilst. Du kannst die Erlaubnis jederzeit in den
        iOS-Einstellungen widerrufen.
      </p>

      <h2>Dienste und Empfänger</h2>
      <h3>Supabase</h3>
      <p>
        Supabase wird für Authentifizierung, Datenbank, Storage und Edge
        Functions genutzt. Dort speichern wir unter anderem Accountdaten,
        Profilinformationen, Scans, Bewertungen, Bestände, Restaurantdaten,
        Avatarbilder und Etikettfotos. Die produktive Datenbank wird nach
        aktuellem Setup in der EU-Region Frankfurt betrieben.
      </p>

      <h3>Vantero KI-API</h3>
      <p>
        Vantero wird für die KI-Analyse von Weinetiketten und für
        KI-Funktionen rund um Restaurant Discovery genutzt. Übermittelt werden
        nur die für die jeweilige Analyse erforderlichen Eingaben, zum Beispiel
        temporäre Bild-URLs, Suchkontext, Restaurantdaten, Chat-Eingaben,
        Rückfragen und Antworten.
      </p>
      <p>
        Nach aktuellem Setup wird Vantero mit EU-Hosting eingesetzt. Die
        Verarbeitung dient ausschließlich der angefragten Analyse in Wein
        Scanner. Die übermittelten Inhalte werden nicht für Werbung,
        Cross-App-Tracking oder den Verkauf personenbezogener Daten genutzt.
      </p>

      <h3>Sentry</h3>
      <p>
        Sentry wird für Crash Reporting und technische Fehleranalyse genutzt.
        Dadurch können technische Ereignisse, Geräteinformationen,
        App-Informationen und Fehlerkontexte verarbeitet werden, soweit dies für
        Stabilität und Sicherheit der App erforderlich ist.
      </p>

      <h3>Google Maps und Google Places API</h3>
      <p>
        Google Maps und Google Places werden für Restaurant Discovery,
        Kartenanzeige, Restaurantdetails, Fotos, Bewertungen, Öffnungszeiten und
        Routenlinks eingesetzt. Wenn du den Standort freigibst, können GPS-Daten
        an Google übermittelt werden, um Restaurants in deiner Umgebung zu
        finden. Google verarbeitet bestimmte Daten in eigener Verantwortung.
      </p>
      <p>
        Weitere Informationen findest du in der{" "}
        <a href="https://policies.google.com/privacy">Google Datenschutzerklärung</a>{" "}
        und in den{" "}
        <a href="https://cloud.google.com/maps-platform/terms">
          Google Maps Platform Terms
        </a>
        .
      </p>

      <h3>Apple Sign In</h3>
      <p>
        Wenn du Sign in with Apple verwendest, verarbeitet Apple die für die
        Anmeldung erforderlichen Daten in eigener Verantwortung. Je nach
        Einstellung kann Apple eine private Relay-E-Mail-Adresse bereitstellen.
      </p>

      <h3>Kamera, Fotobibliothek, Standort, SecureStore und ImagePicker</h3>
      <p>
        Die App nutzt Kamera und Fotobibliothek, damit du Weinetiketten scannen
        oder importieren kannst. Der Standort wird nur mit deiner Erlaubnis für
        die Restaurantsuche verwendet. SecureStore speichert Authentifizierungs-
        und Sitzungsdaten lokal auf deinem Gerät. ImagePicker wird genutzt, wenn
        du Bilder aus der Fotobibliothek auswählst.
      </p>

      <h2>KI-Analyse und Einwilligung</h2>
      <p>
        Vor der ersten KI-Funktion fragt die App separat um Erlaubnis. Ohne
        diese Freigabe startet keine KI-Analyse. Die KI wird für automatische
        Extraktion, Plausibilisierung und Empfehlungen genutzt. Deine App-Daten
        werden nicht für Werbeprofile oder Cross-App-Tracking verwendet.
      </p>

      <h2>Speicherdauer und Account-Löschung</h2>
      <p>
        Deine App-Daten werden gespeichert, solange dein Nutzerkonto besteht. Du
        kannst dein Konto in der App löschen. Öffne dafür dein Profil, wähle
        Account löschen und bestätige die Löschung mit deiner E-Mail-Adresse.
      </p>
      <p>
        Bei Account-Löschung werden personenbezogene User-Daten wie Profil,
        Scans, Bewertungen, Bestände, gespeicherte Restaurants,
        Restaurantbewertungen, Restaurantbesuche, Avatarbilder und gespeicherte
        Etikettfotos entfernt, soweit keine gesetzlichen Aufbewahrungspflichten
        entgegenstehen. Restaurant-Chatverläufe werden zeitlich begrenzt
        gespeichert und bei Account-Löschung entfernt.
      </p>

      <h2>Datenexport und deine Rechte</h2>
      <p>
        Du kannst deine Daten in der App als CSV oder JSON exportieren.
        Außerdem hast du im Rahmen der gesetzlichen Voraussetzungen Rechte auf
        Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
        Datenübertragbarkeit, Widerspruch und Beschwerde bei einer
        Datenschutzaufsichtsbehörde.
      </p>
      <p>
        Zur Ausübung deiner Rechte kannst du dich jederzeit an{" "}
        <a href="mailto:support@wein-scanner.app">support@wein-scanner.app</a>{" "}
        wenden.
      </p>

      <h2>Internationale Datenübermittlung</h2>
      <p>
        Die Hauptdatenverarbeitung für Authentifizierung, Datenbank, Storage und
        App-Daten erfolgt nach aktuellem Setup in der Europäischen Union. Bei
        Apple, Google Maps, Google Places und einzelnen technischen Diensten
        kann eine Verarbeitung außerhalb der Europäischen Union stattfinden.
        Vantero wird nach aktuellem Setup mit EU-Hosting eingesetzt. Soweit
        dennoch eine internationale Übermittlung erforderlich wird, stützen die
        Anbieter solche Übermittlungen auf geeignete Garantien, insbesondere
        Standardvertragsklauseln nach Art. 46 DSGVO oder andere anwendbare
        Übermittlungsmechanismen.
      </p>

      <h2>Änderungen dieser Datenschutzerklärung</h2>
      <p>
        Wir passen diese Datenschutzerklärung an, wenn sich Funktionen,
        Anbieter oder rechtliche Anforderungen ändern. Die jeweils aktuelle
        Fassung ist unter wein-scanner.app/datenschutz erreichbar.
      </p>
    </LegalShell>
  );
}
