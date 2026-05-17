import type { Metadata } from "next";
import {
  Camera,
  Clock,
  CreditCard,
  Mail,
  MapPin,
  Phone,
  Trash2,
} from "lucide-react";

import { InfoCallout, LegalShell } from "../shared";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Support und Kontakt für Wein Scanner. Hilfe zu Scans, Account-Löschung, Restaurant Finder und App Store Fragen.",
  alternates: {
    canonical: "/support",
  },
};

const contactCards = [
  {
    icon: Mail,
    title: "E-Mail",
    text: "support@wein-scanner.app",
    href: "mailto:support@wein-scanner.app?subject=Support%20Wein%20Scanner",
  },
  {
    icon: Phone,
    title: "Telefon",
    text: "08222 4183998",
    href: "tel:+4982224183998",
  },
  {
    icon: MapPin,
    title: "Anschrift",
    text: "Franco Consulting GmbH, Maria-Theresia-Strasse 17, 89331 Burgau",
  },
];

const faqs = [
  {
    icon: Camera,
    question: "Wie scanne ich einen Wein?",
    answer:
      "Öffne den Scan-Tab, richte die Kamera auf das Etikett und achte auf gutes Licht. Nach der Aufnahme prüfst du die erkannten Daten und speicherst den Wein in deinem Verlauf oder Weinregal.",
  },
  {
    icon: Trash2,
    question: "Wie lösche ich meinen Account?",
    answer:
      "Öffne dein Profil, wähle Account löschen und bestätige die Löschung mit deiner E-Mail-Adresse. Danach werden personenbezogene User-Daten und gespeicherte Bilder entfernt, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
  },
  {
    icon: CreditCard,
    question: "Wie kündige ich ein Abo?",
    answer:
      "Derzeit ist im App-Code kein Abo-System aktiv. Sollte Wein Scanner zukünftig Abos anbieten, kündigst du ein iOS-Abo direkt in den Apple Einstellungen unter Apple-ID, Abonnements.",
  },
  {
    icon: Camera,
    question: "Mein Scan wird nicht erkannt. Was kann ich tun?",
    answer:
      "Nutze gleichmäßiges Licht, vermeide Spiegelungen und halte das Etikett gerade im Rahmen. Wenn möglich, fotografiere zusätzlich das Rücketikett oder prüfe die erkannten Daten vor dem Speichern.",
  },
  {
    icon: MapPin,
    question: "Wie funktioniert der Restaurant-Finder?",
    answer:
      "Restaurant Discovery nutzt Standort oder Stadtangaben, Google Places und KI-Hinweise, um Restaurants mit relevanten Weinsignalen zu finden. Du kannst Restaurants speichern, bewerten und später erneut öffnen.",
  },
];

export default function SupportPage() {
  return (
    <LegalShell eyebrow="Support" title="Hilfe und Kontakt">
      <p>
        Du hast eine Frage, ein technisches Problem oder Feedback zu Wein
        Scanner? Schreib uns eine E-Mail und beschreibe kurz, was passiert ist.
        Wenn es um einen Scan geht, hilft uns der Weinname, der Zeitpunkt und
        dein iPhone-Modell.
      </p>

      <InfoCallout icon="message">
        <p>
          Schnellster Kontakt:{" "}
          <a href="mailto:support@wein-scanner.app?subject=Support%20Wein%20Scanner">
            support@wein-scanner.app
          </a>
          . Wir antworten in der Regel innerhalb von zwei Werktagen.
        </p>
      </InfoCallout>

      <div className="support-contact-grid" aria-label="Kontaktinformationen">
        {contactCards.map((item) => (
          <article className="support-contact-card" key={item.title}>
            <item.icon aria-hidden="true" className="h-5 w-5" />
            <div>
              <h2>{item.title}</h2>
              {item.href ? <a href={item.href}>{item.text}</a> : <p>{item.text}</p>}
            </div>
          </article>
        ))}
      </div>

      <p className="support-action-row">
        <a
          className="primary-action no-underline"
          href="mailto:support@wein-scanner.app?subject=Support%20Wein%20Scanner"
        >
          <Mail aria-hidden="true" className="mr-2 h-5 w-5" />
          Support kontaktieren
        </a>
        <span>
          Bitte sende keine Passwörter, Zugangscodes oder Zahlungsdaten per
          E-Mail.
        </span>
      </p>

      <h2>Häufige Fragen</h2>
      <div className="faq-list">
        {faqs.map((faq) => (
          <article className="faq-item" key={faq.question}>
            <faq.icon aria-hidden="true" className="h-5 w-5" />
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </article>
        ))}
      </div>

      <InfoCallout>
        <p>
          Für Datenschutzanfragen und Account-Löschung kannst du ebenfalls{" "}
          <a href="mailto:support@wein-scanner.app?subject=Datenschutz%20Wein%20Scanner">
            support@wein-scanner.app
          </a>{" "}
          nutzen. Mehr Informationen findest du in der{" "}
          <a href="/datenschutz">Datenschutzerklärung</a>.
        </p>
      </InfoCallout>

      <p className="support-meta">
        Betreiber: Franco Consulting GmbH, Maria-Theresia-Strasse 17, 89331
        Burgau, Deutschland. Geschäftsführer: Lukas Kraus und Kilian Franco.
      </p>

      <p className="support-meta">
        <Clock aria-hidden="true" className="inline h-4 w-4" /> Stand: Mai 2026
      </p>
    </LegalShell>
  );
}
