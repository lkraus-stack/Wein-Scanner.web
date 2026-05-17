import type { Metadata } from "next";
import { Mail } from "lucide-react";

import { InfoCallout, LegalShell } from "../shared";

export const metadata: Metadata = {
  title: "Support",
  alternates: {
    canonical: "/support",
  },
};

const faqs = [
  {
    question: "Wie scanne ich einen Wein?",
    answer:
      "Öffne den Scan-Tab, richte die Kamera auf das Etikett und achte auf gutes Licht. Nach der Aufnahme prüfst du die erkannten Daten und speicherst den Wein in deinem Verlauf oder Weinregal.",
  },
  {
    question: "Wie lösche ich meinen Account?",
    answer:
      "Öffne dein Profil, wähle Account löschen und bestätige die Löschung mit deiner E-Mail-Adresse. Danach werden personenbezogene User-Daten und gespeicherte Bilder entfernt, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
  },
  {
    question: "Wie kündige ich ein Abo?",
    answer:
      "Derzeit ist im App-Code kein Abo-System aktiv. Sollte Wein Scanner zukünftig Abos anbieten, kündigst du ein iOS-Abo direkt in den Apple Einstellungen unter Apple-ID, Abonnements.",
  },
  {
    question: "Mein Scan wird nicht erkannt. Was kann ich tun?",
    answer:
      "Nutze gleichmäßiges Licht, vermeide Spiegelungen und halte das Etikett gerade im Rahmen. Wenn möglich, fotografiere zusätzlich das Rücketikett oder prüfe die erkannten Daten vor dem Speichern.",
  },
  {
    question: "Wie funktioniert der Restaurant-Finder?",
    answer:
      "Restaurant Discovery nutzt Standort oder Stadtangaben, Google Places und KI-Hinweise, um Restaurants mit relevanten Weinsignalen zu finden. Du kannst Restaurants speichern, bewerten und später erneut öffnen.",
  },
];

export default function SupportPage() {
  return (
    <LegalShell eyebrow="Hilfe und Kontakt" title="Wir helfen gerne.">
      <p>
        Du hast eine Frage oder ein Problem mit Wein Scanner? Schreib uns eine
        E-Mail und beschreibe kurz, was passiert ist.
      </p>

      <InfoCallout icon="message">
        <p>
          Kontakt:{" "}
          <a href="mailto:support@wein-scanner.app">support@wein-scanner.app</a>
        </p>
      </InfoCallout>

      <p>
        <a className="primary-action mt-6 no-underline" href="mailto:support@wein-scanner.app">
          <Mail aria-hidden="true" className="mr-2 h-5 w-5" />
          Support kontaktieren
        </a>
      </p>

      <div className="faq-list">
        {faqs.map((faq) => (
          <article className="faq-item" key={faq.question}>
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
          </article>
        ))}
      </div>
    </LegalShell>
  );
}
