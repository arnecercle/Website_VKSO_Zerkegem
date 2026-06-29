import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "V.K.S.O. Zerkegem",
    template: "%s | V.K.S.O. Zerkegem",
  },
  description: "Welkom bij V.K.S.O. Zerkegem - Stamnr 8280",
  openGraph: {
    title: "V.K.S.O. Zerkegem",
    siteName: "V.K.S.O. Zerkegem",
    url: "https://vksozerkegem.be/",
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
        <link rel="icon" href="https://impro.usercontent.one/appid/oneComWsb/domain/vksozerkegem.be/media/vksozerkegem.be/onewebmedia/logo%20zerkegem.png?etag=%2279c0a-5d703bb6%22&sourceContentType=image%2Fpng&resize=32,32&ignoreAspectRatio" />
      </head>
      <body className="min-h-screen bg-white">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
