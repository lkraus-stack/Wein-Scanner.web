import Link from "next/link";

import { Footer, Header } from "./shared";

export default function NotFound() {
  return (
    <main>
      <Header />
      <section className="bg-blush">
        <div className="mx-auto grid min-h-[70svh] max-w-3xl items-center px-5 py-16 text-center sm:px-8">
          <div>
            <span className="eyebrow">404</span>
            <h1 className="mt-4 text-5xl font-black text-ink">
              Diese Seite gibt es nicht.
            </h1>
            <p className="mt-5 text-lg leading-8 text-ink-soft">
              Der Link ist möglicherweise veraltet oder wurde falsch eingegeben.
            </p>
            <Link className="primary-action mt-8" href="/">
              Zur Startseite
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
