import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wein-scanner.app"),
  title: {
    default: "Wein Scanner | Dein persönlicher Wein-Assistent",
    template: "%s | Wein Scanner",
  },
  description:
    "Scanne Weinetiketten, verwalte dein Weinregal und entdecke Restaurants mit starker Weinkarte. Die iOS-App für Wein-Sammler.",
  applicationName: "Wein Scanner",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Wein Scanner | Dein persönlicher Wein-Assistent",
    description:
      "Die iOS-App für Wein-Sammler: Etiketten scannen, Sammlung pflegen und Restaurants entdecken.",
    url: "https://wein-scanner.app",
    siteName: "Wein Scanner",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wein Scanner App Vorschau",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wein Scanner | Dein persönlicher Wein-Assistent",
    description:
      "Scanne Weinetiketten, verwalte dein Weinregal und entdecke Restaurants mit starker Weinkarte.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5c1a1e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
