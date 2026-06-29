import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const OG_IMAGE = "/images/logo%20zerkegem.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://vksozerkegem.be"),
  title: {
    default: "V.K.S.O. Zerkegem",
    template: "%s | V.K.S.O. Zerkegem",
  },
  description: "Welkom bij V.K.S.O. Zerkegem - Stamnr 8280",
  openGraph: {
    title: "V.K.S.O. Zerkegem",
    siteName: "V.K.S.O. Zerkegem",
    url: "https://vksozerkegem.be/",
    description: "Welkom bij V.K.S.O. Zerkegem - Stamnr 8280",
    images: [{ url: OG_IMAGE, width: 512, height: 512 }],
  },
  twitter: {
    card: "summary",
    title: "V.K.S.O. Zerkegem",
    description: "Welkom bij V.K.S.O. Zerkegem - Stamnr 8280",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Narrow:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Play:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/logo%20zerkegem.png" />
      </head>
      <body className="min-h-screen bg-white">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
