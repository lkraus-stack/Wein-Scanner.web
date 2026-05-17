import {
  Apple,
  ArrowRight,
  Camera,
  CheckCircle2,
  Compass,
  MapPinned,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Wine,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/impressum", label: "Impressum" },
  { href: "/support", label: "Support" },
];

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand-link" href="/" aria-label="Wein Scanner Startseite">
        <Image
          alt=""
          className="h-9 w-9 rounded-[10px]"
          height={72}
          src="/icon.png"
          width={72}
        />
        <span>Wein Scanner</span>
      </Link>
      <nav aria-label="Hauptnavigation">
        {navLinks.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1fr_auto] md:items-center lg:px-10">
        <div>
          <p className="font-black text-ink">Wein Scanner</p>
          <p className="mt-2 text-sm leading-6 text-ink-muted">
            Ein Produkt der Franco Consulting GmbH. © {currentYear}
          </p>
        </div>
        <nav aria-label="Footer Navigation">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export function AppStoreBadge({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <a
      aria-label="Wein Scanner bald im App Store laden"
      className={tone === "dark" ? "app-store-badge dark" : "app-store-badge"}
      href="#"
      title="Bald verfügbar"
    >
      <Apple aria-hidden="true" className="h-7 w-7" />
      <span>
        <small>Download im</small>
        App Store
      </span>
    </a>
  );
}

export function PhoneFrame({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <div className="phone" role="img" aria-label={label}>
      <div className="phone-notch" />
      <div className="phone-screen">{children}</div>
    </div>
  );
}

export function ScannerMockup() {
  return (
    <div className="mock-screen scanner-screen">
      <div className="screen-top">
        <span>Scan</span>
        <Camera aria-hidden="true" className="h-4 w-4" />
      </div>
      <div className="label-view">
        <div className="scan-corners" />
        <div className="wine-label">
          <span>Château</span>
          <strong>Mont Rouge</strong>
          <small>Bordeaux 2019</small>
        </div>
      </div>
      <div className="result-sheet">
        <div>
          <small>Erkannt</small>
          <strong>Cabernet Sauvignon</strong>
        </div>
        <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-olive" />
      </div>
    </div>
  );
}

export function WineShelfMockup() {
  const bottles = [
    ["Riesling", "Mosel", "2021"],
    ["Chianti", "Toskana", "2020"],
    ["Syrah", "Rhône", "2018"],
  ];

  return (
    <div className="mock-screen shelf-screen">
      <div className="screen-top">
        <span>Weinregal</span>
        <Wine aria-hidden="true" className="h-4 w-4" />
      </div>
      <div className="shelf-stats">
        <strong>42</strong>
        <span>Flaschen im Bestand</span>
      </div>
      <div className="bottle-list">
        {bottles.map(([name, region, year]) => (
          <div className="bottle-row" key={name}>
            <div className="bottle-mark" />
            <div>
              <strong>{name}</strong>
              <span>
                {region} · {year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SommelierMockup() {
  return (
    <div className="mock-screen chat-screen">
      <div className="screen-top">
        <span>KI-Sommelier</span>
        <Sparkles aria-hidden="true" className="h-4 w-4" />
      </div>
      <div className="chat-bubble user">Was passt zu geschmortem Rind?</div>
      <div className="chat-bubble assistant">
        Ein gereifter Bordeaux oder ein Syrah mit feiner Würze passt sehr gut.
      </div>
      <div className="pairing-card">
        <Star aria-hidden="true" className="h-4 w-4" />
        <span>Top Pairing: Cabernet Blend</span>
      </div>
      <div className="input-row">
        <span>Frag deinen Wein-Assistenten</span>
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </div>
    </div>
  );
}

export function RestaurantMockup() {
  return (
    <div className="mock-screen map-screen">
      <div className="screen-top">
        <span>Entdecken</span>
        <MapPinned aria-hidden="true" className="h-4 w-4" />
      </div>
      <div className="map-panel">
        <div className="map-pin one" />
        <div className="map-pin two" />
        <div className="map-pin three" />
        <Compass aria-hidden="true" className="h-8 w-8 text-bordeaux" />
      </div>
      <div className="restaurant-card">
        <strong>Vinothek am Platz</strong>
        <span>4,8 Google Sterne · starke Weinkarte</span>
      </div>
      <div className="search-chip">
        <Search aria-hidden="true" className="h-4 w-4" />
        <span>Restaurants in München</span>
      </div>
    </div>
  );
}

export function LegalShell({
  children,
  eyebrow,
  title,
}: {
  children: React.ReactNode;
  eyebrow: string;
  title: string;
}) {
  return (
    <main>
      <Header />
      <section className="legal-hero">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
        </div>
      </section>
      <section className="bg-cream">
        <div className="legal-content mx-auto max-w-4xl px-5 py-14 sm:px-8">
          {children}
        </div>
      </section>
      <Footer />
    </main>
  );
}

export function InfoCallout({
  children,
  icon = "shield",
}: {
  children: React.ReactNode;
  icon?: "shield" | "message";
}) {
  const Icon = icon === "message" ? MessageCircle : ShieldCheck;

  return (
    <div className="info-callout">
      <Icon aria-hidden="true" className="mt-1 h-5 w-5 shrink-0" />
      <div>{children}</div>
    </div>
  );
}
