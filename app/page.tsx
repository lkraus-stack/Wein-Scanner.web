import {
  Bot,
  Camera,
  CheckCircle2,
  Database,
  LockKeyhole,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Star,
  Wine,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  AppStoreBadge,
  Footer,
  Header,
  ScreenshotFrame,
} from "./shared";

const heroScreens = [
  {
    alt: "Wein Scanner Verlauf mit analysierten Scans",
    className: "hero-phone hero-phone-main",
    priority: true,
    src: "/screenshots/scan-result.png",
  },
  {
    alt: "Wein Scanner Restaurant Finder mit Restaurantliste",
    className: "hero-phone hero-phone-map",
    priority: true,
    src: "/screenshots/restaurants-map.png",
  },
  {
    alt: "Wein Scanner Weinregal mit gespeicherten Flaschen",
    className: "hero-phone hero-phone-cellar",
    priority: true,
    src: "/screenshots/wine-cellar.png",
  },
];

const scanSteps = [
  {
    icon: Camera,
    kicker: "1",
    title: "Etikett aufnehmen",
    text: "Fotografiere das Frontetikett oder ergänze das Rücketikett aus Kamera oder Fotobibliothek.",
  },
  {
    icon: Sparkles,
    kicker: "2",
    title: "Vantero KI analysiert",
    text: "Die App liest sichtbare Etikettzeilen, erkennt Wein, Jahrgang, Region und Rebsorten und bereitet ein Genussprofil auf.",
  },
  {
    icon: CheckCircle2,
    kicker: "3",
    title: "Prüfen und speichern",
    text: "Du kontrollierst die erkannten Daten und speicherst den Wein in Verlauf, Bewertung oder Weinregal.",
  },
];

const wineFeatures = [
  {
    icon: Wine,
    title: "Weinregal",
    text: "Bestand, Mengen, Lagerorte, Kaufpreise und eigene Notizen bleiben an einem Ort.",
  },
  {
    icon: Star,
    title: "Bewertungen",
    text: "Halte fest, welche Weine wirklich begeistert haben und wann du sie getrunken hast.",
  },
  {
    icon: Bot,
    title: "Genussprofil",
    text: "Aromen, Food Pairing, Trinkfenster und Serviertemperatur werden verständlich aufbereitet.",
  },
];

const restaurantPoints = [
  "Suche per Standort oder Stadt",
  "Google Places Daten mit Weinsignalen",
  "Smart Filter für Qualität und Weinfokus",
  "KI-Empfehlungen für Anlass, Küche und Stimmung",
];

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Vantero mit EU-Hosting",
    text: "Die KI-Analyse läuft über die Vantero API mit EU-Hosting und startet erst nach deiner Zustimmung.",
  },
  {
    icon: Database,
    title: "Supabase in Frankfurt",
    text: "Account-, Scan- und App-Daten liegen im aktuellen Setup in der EU-Region Frankfurt.",
  },
  {
    icon: LockKeyhole,
    title: "Keine Werbung",
    text: "Kein Cross-App-Tracking, keine Werbenetzwerke und kein Verkauf personenbezogener Daten.",
  },
];

const galleryScreens = [
  {
    alt: "Scan-Kamera in Wein Scanner",
    label: "Scan",
    src: "/screenshots/scan-camera.png",
  },
  {
    alt: "Weinprofil in Wein Scanner",
    label: "Weinprofil",
    src: "/screenshots/wine-detail.png",
  },
  {
    alt: "Weinregal in Wein Scanner",
    label: "Weinregal",
    src: "/screenshots/wine-cellar.png",
  },
  {
    alt: "Restaurant KI in Wein Scanner",
    label: "Restaurant KI",
    src: "/screenshots/restaurant-chat.png",
  },
];

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero-band" id="top">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="mx-auto grid min-h-[82svh] max-w-7xl items-center gap-12 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:pb-20">
          <div className="hero-copy">
            <div className="brand-kicker">
              <Image
                alt="Wein Scanner App Icon"
                className="h-12 w-12 rounded-[14px] shadow-soft"
                height={96}
                priority
                src="/icon.png"
                width={96}
              />
              <span>iOS-App für Wein-Sammler</span>
            </div>
            <h1>Dein Weinwissen, sobald du das Etikett scannst.</h1>
            <p>
              Wein Scanner erkennt Weine per Vantero KI, baut dein digitales
              Weinregal auf und findet Restaurants mit echter Weinkompetenz.
            </p>
            <div className="hero-actions">
              <AppStoreBadge tone="dark" />
              <Link className="ghost-link" href="#scan">
                So funktioniert der Scan
              </Link>
            </div>
            <div className="hero-proof" aria-label="Wein Scanner Vorteile">
              <span>KI-Analyse mit Einwilligung</span>
              <span>Restaurant Finder</span>
              <span>Keine Werbung</span>
            </div>
          </div>

          <div className="hero-showcase" aria-label="Wein Scanner App Vorschau">
            {heroScreens.map((screen) => (
              <ScreenshotFrame
                alt={screen.alt}
                className={screen.className}
                key={screen.src}
                priority={screen.priority}
                src={screen.src}
              />
            ))}
            <div className="floating-note note-scan">
              <ScanLine aria-hidden="true" className="h-5 w-5" />
              <span>Etikett erkannt</span>
            </div>
            <div className="floating-note note-trust">
              <ShieldCheck aria-hidden="true" className="h-5 w-5" />
              <span>DSGVO-konform</span>
            </div>
          </div>
        </div>
      </section>

      <section className="scan-story" id="scan">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <div className="section-heading sticky-copy">
            <span className="eyebrow">Wein scannen</span>
            <h2>Vom Etikett zum vollständigen Weinprofil.</h2>
            <p>
              Der Scan ist nicht nur Texterkennung. Wein Scanner kombiniert
              Etikettfakten, Plausibilisierung und ein verständliches
              Genussprofil.
            </p>
          </div>
          <div className="story-grid">
            <ScreenshotFrame
              alt="Wein Scanner Kamera mit Etikett im Scan-Rahmen"
              className="story-phone"
              src="/screenshots/scan-camera.png"
            />
            <div className="step-list">
              {scanSteps.map((step) => (
                <article className="step-card" key={step.title}>
                  <div className="step-index">{step.kicker}</div>
                  <step.icon aria-hidden="true" className="h-6 w-6" />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="wine-profile-band" id="weinregal">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div className="device-pair">
            <ScreenshotFrame
              alt="Wein Scanner Weinprofil mit Aromen und Pairing"
              className="pair-phone pair-front"
              src="/screenshots/wine-detail.png"
            />
            <ScreenshotFrame
              alt="Wein Scanner Weinregal mit Bestand"
              className="pair-phone pair-back"
              src="/screenshots/wine-cellar.png"
            />
          </div>
          <div className="section-heading">
            <span className="eyebrow">Weinregal und Profil</span>
            <h2>Aus jedem Scan wird ein nutzbarer Eintrag.</h2>
            <p>
              Verwalte, was du besitzt, was du probiert hast und welche Weine
              du wiederfinden willst. Wein Scanner bleibt dabei praktisch
              genug für den Keller und detailliert genug für Sammler.
            </p>
            <div className="feature-list">
              {wineFeatures.map((feature) => (
                <article className="feature-row" key={feature.title}>
                  <feature.icon aria-hidden="true" className="h-5 w-5" />
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="restaurant-band" id="restaurant-finder">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
          <div className="section-heading">
            <span className="eyebrow">Restaurant Finder</span>
            <h2>Finde Orte, an denen Wein wirklich zählt.</h2>
            <p>
              Restaurant Discovery verbindet Standortsuche, Google Places und
              KI-Hinweise. So findest du nicht nur Restaurants, sondern Orte
              mit sichtbarer Weinkarte, passenden Bewertungen und Kontext für
              deinen Anlass.
            </p>
            <div className="restaurant-checks">
              {restaurantPoints.map((point) => (
                <span key={point}>
                  <CheckCircle2 aria-hidden="true" className="h-4 w-4" />
                  {point}
                </span>
              ))}
            </div>
          </div>
          <div className="restaurant-visual">
            <ScreenshotFrame
              alt="Wein Scanner Restaurant Finder mit Liste und Weinsignalen"
              className="restaurant-phone restaurant-map"
              src="/screenshots/restaurants-map.png"
            />
            <ScreenshotFrame
              alt="Wein Scanner Restaurant KI mit Empfehlungen"
              className="restaurant-phone restaurant-chat"
              src="/screenshots/restaurant-chat.png"
            />
          </div>
        </div>
      </section>

      <section className="trust-band" id="datenschutz">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="trust-panel">
            <div className="section-heading">
              <span className="eyebrow text-gold">Datenschutz und KI</span>
              <h2>Starke Analyse, klare Kontrolle.</h2>
              <p>
                Wein Scanner verarbeitet Scans nur für die App-Funktionen. Vor
                KI-Funktionen fragt die App nach deiner Zustimmung. Deine Daten
                werden nicht für Werbung, Tracking oder Datenhandel genutzt.
              </p>
            </div>
            <div className="trust-grid">
              {trustItems.map((item) => (
                <article className="trust-card" key={item.title}>
                  <item.icon aria-hidden="true" className="h-6 w-6" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-band" id="screens">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="section-heading">
            <span className="eyebrow">App-Vorschau</span>
            <h2>Mehr App, weniger Behauptung.</h2>
            <p>
              Die wichtigsten Arbeitsbereiche zeigen direkt, wie Wein Scanner
              im Alltag hilft: scannen, verstehen, sammeln und entdecken.
            </p>
          </div>
          <div className="screenshot-rail" aria-label="Wein Scanner Screenshots">
            {galleryScreens.map((screen) => (
              <div className="gallery-item" key={screen.src}>
                <ScreenshotFrame alt={screen.alt} src={screen.src} />
                <span>{screen.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10">
          <div>
            <span className="eyebrow text-gold">Bald im App Store</span>
            <h2>Bereit für deinen nächsten Weinmoment.</h2>
            <p>
              Starte kostenlos, sichere deine Scans und entdecke Weine und
              Restaurants mit einem Assistenten, der deine Sammlung versteht.
            </p>
          </div>
          <div className="cta-actions">
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
