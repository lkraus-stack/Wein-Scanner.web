"use client";

import { ArrowRight, QrCode, Smartphone } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Footer, Header } from "../shared";

const deepLink = "winescanner://auth/callback";

export default function AppLoginPage() {
  const [isIos, setIsIos] = useState(false);

  useEffect(() => {
    const nextIsIos = /iPad|iPhone|iPod/.test(window.navigator.userAgent);
    setIsIos(nextIsIos);

    if (nextIsIos) {
      window.setTimeout(() => {
        window.location.href = deepLink;
      }, 450);
    }
  }, []);

  return (
    <main>
      <Header />
      <section className="bg-blush">
        <div className="mx-auto grid min-h-[78svh] max-w-5xl items-center px-5 py-16 sm:px-8">
          <div className="app-login-panel">
            <div>
              <span className="eyebrow">App-Login</span>
              <h1 className="mt-4 text-4xl font-black leading-tight text-ink sm:text-5xl">
                Wein Scanner auf deinem iPhone öffnen.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-soft">
                {isIos
                  ? "Wir versuchen, die App automatisch zu öffnen. Falls nichts passiert, tippe auf den Button."
                  : "Wein Scanner ist eine iOS-App. Öffne diesen Link auf deinem iPhone oder scanne den QR-Code."}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-[1fr_220px] md:items-center">
              <div className="grid gap-4">
                <a className="primary-action w-fit" href={deepLink}>
                  <Smartphone aria-hidden="true" className="mr-2 h-5 w-5" />
                  App öffnen
                  <ArrowRight aria-hidden="true" className="ml-2 h-5 w-5" />
                </a>
                <p className="text-sm leading-6 text-ink-muted">
                  Bis zur App Store Freigabe führt der QR-Code zur Website. Der
                  App Store Link wird nach Approval ergänzt.
                </p>
              </div>

              <div className="qr-card">
                <QrCode aria-hidden="true" className="h-5 w-5 text-bordeaux" />
                <Image
                  alt="QR-Code für wein-scanner.app"
                  height={180}
                  src="/app-qr.svg"
                  width={180}
                />
                <span className="text-center text-xs font-bold text-ink-muted">
                  wein-scanner.app
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
