import {
  Bot,
  CheckCircle2,
  CircleOff,
  MapPinned,
  ScanLine,
  ShieldCheck,
  Wine,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  AppStoreBadge,
  Footer,
  Header,
  PhoneFrame,
  RestaurantMockup,
  ScannerMockup,
  SommelierMockup,
  WineShelfMockup,
} from "./shared";

const features = [
  {
    icon: ScanLine,
    title: "Wein scannen",
    text: "Fotografiere ein Weinetikett und erhalte sofort strukturierte Infos zu Rebsorte, Region, Jahrgang und Charakter.",
  },
  {
    icon: Wine,
    title: "Weinregal",
    text: "Deine persönliche Weinsammlung. Behalte jeden Wein im Blick, den du besitzt, bewertet oder probiert hast.",
  },
  {
    icon: Bot,
    title: "KI-Sommelier",
    text: "Frag die KI nach Empfehlungen, Food Pairings oder Hintergrundwissen zu deinem Wein.",
  },
  {
    icon: MapPinned,
    title: "Restaurants entdecken",
    text: "Finde Restaurants mit hervorragender Weinkarte in deiner Nähe oder in jeder Stadt.",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "DSGVO-konform",
    text: "EU-Server für die zentralen App-Daten und klare Kontrolle über dein Konto.",
  },
  {
    icon: CheckCircle2,
    title: "Kostenlos starten",
    text: "Der Einstieg ist leicht und die wichtigsten Funktionen sind sofort erreichbar.",
  },
  {
    icon: CircleOff,
    title: "Keine Werbung",
    text: "Keine Werbenetzwerke, kein Cross-App-Tracking und kein Verkauf deiner Daten.",
  },
];

const mockups = [
  { title: "Scanner", screen: <ScannerMockup /> },
  { title: "Weinregal", screen: <WineShelfMockup /> },
  { title: "KI-Chat", screen: <SommelierMockup /> },
  { title: "Entdecken", screen: <RestaurantMockup /> },
];

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero-band">
        <div className="mx-auto grid min-h-[86svh] max-w-7xl items-center gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-10">
          <div className="max-w-2xl">
            <div className="mb-7 flex items-center gap-3">
              <Image
                alt="Wein Scanner App Icon"
                className="h-12 w-12 rounded-[14px] shadow-soft"
                height={96}
                priority
                src="/icon.png"
                width={96}
              />
              <span className="eyebrow">iOS-App für Wein-Sammler</span>
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-normal text-ink sm:text-6xl lg:text-7xl">
              Wein Scanner
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-ink-soft sm:text-2xl sm:leading-9">
              Dein persönlicher Wein-Assistent. Scanne Weinetiketten, verwalte
              dein Weinregal und entdecke die besten Restaurants. Powered by KI.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <AppStoreBadge />
              <Link className="secondary-link" href="/app-login">
                Bereits Nutzer?
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <PhoneFrame label="Wein-Scanner-Screen">
              <ScannerMockup />
            </PhoneFrame>
          </div>
        </div>
      </section>

      <section className="section-band bg-cream" id="features">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="section-heading">
            <span className="eyebrow">Vier starke Werkzeuge</span>
            <h2>Alles rund um deinen Wein an einem Ort.</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <feature.icon aria-hidden="true" className="h-6 w-6" />
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band bg-blush">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="section-heading">
            <span className="eyebrow">App-Vorschau</span>
            <h2>Die wichtigsten App-Bereiche auf einen Blick.</h2>
          </div>
          <div className="mockup-strip mt-10" aria-label="Wein Scanner App Vorschau">
            {mockups.map((mockup) => (
              <div className="mockup-item" key={mockup.title}>
                <PhoneFrame label={`${mockup.title} Screen`}>{mockup.screen}</PhoneFrame>
                <p>{mockup.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-4 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article className="benefit" key={benefit.title}>
                <benefit.icon aria-hidden="true" className="h-6 w-6" />
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10">
          <div>
            <span className="eyebrow text-gold">Bald im App Store</span>
            <h2>Jetzt bereit für deinen nächsten Weinmoment.</h2>
            <p>
              Starte kostenlos, sammle deine Lieblingsweine und öffne die App
              direkt über deinen Login-Link.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
            <AppStoreBadge tone="dark" />
            <Link className="light-link" href="/app-login">
              App-Login öffnen
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
