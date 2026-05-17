import {
  Apple,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const headerLinks = [
  { href: "/#scan", label: "Scan" },
  { href: "/#restaurant-finder", label: "Restaurant Finder" },
  { href: "/#datenschutz", label: "Datenschutz" },
  { href: "/support", label: "Support" },
];

const footerLinks = [
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
        {headerLinks.map((link) => (
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
          {footerLinks.map((link) => (
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

export function ScreenshotFrame({
  alt,
  className = "",
  priority = false,
  src,
}: {
  alt: string;
  className?: string;
  priority?: boolean;
  src: string;
}) {
  return (
    <figure className={`screenshot-frame ${className}`}>
      <div className="screenshot-device">
        <div className="device-sensor" />
        <Image
          alt={alt}
          className="screenshot-image"
          height={932}
          priority={priority}
          sizes="(max-width: 640px) 62vw, (max-width: 1024px) 32vw, 360px"
          src={src}
          width={430}
        />
      </div>
    </figure>
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
