import type { Metadata } from "next";
import { CDN } from "@/lib/constants";

export const metadata: Metadata = { title: "Sponsors" };

const sponsorCategories = [
  {
    title: "Hoofdsponsor V.K.S.O Zerkegem",
    logos: [
      `${CDN}/Sponsors/Crelan%20Zerkegem.png`,
      `${CDN}/Sponsors/Maene.png`,
      `${CDN}/Sponsors/Debaillie.png`,
    ],
  },
  {
    title: "Partnersponsors V.K.S.O Zerkegem",
    logos: [
      `${CDN}/Sponsors/Caros%20Home.png`,
      `${CDN}/Sponsors/Deschacht.png`,
      `${CDN}/Sponsors/Martens.png`,
      `${CDN}/Sponsors/Soncotra.png`,
      `${CDN}/Sponsors/Deveen.png`,
      `${CDN}/Sponsors/Taveirne.png`,
    ],
  },
  {
    title: "Partnersponsors Jeugd V.K.S.O Zerkegem",
    logos: [
      `${CDN}/Sponsors/EV%20Consult.png`,
      `${CDN}/Sponsors/Crea%20Garden%20Design.png`,
      `${CDN}/Sponsors/GDW%20Jats.png`,
      `${CDN}/Sponsors/Krivan.png`,
      `${CDN}/Sponsors/Malfait.png`,
      `${CDN}/Sponsors/Painted.png`,
      `${CDN}/Sponsors/Verheecke.png`,
      `${CDN}/Sponsors/VM%20tegels.png`,
      `${CDN}/Sponsors/Casier.png`,
      `${CDN}/Sponsors/immoseed.png`,
    ],
  },
  {
    title: "Steunsponsors V.K.S.O Zerkegem",
    logos: [
      `${CDN}/Sponsors/Build4ever.png`,
      `${CDN}/Sponsors/De%20Linde%20Les%20Tzars.png`,
    ],
  },
];

export default function SponsorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black py-16" style={{ backgroundColor: "rgba(4,4,4,1)" }}>
        <div className="mx-auto max-w-[1430px] px-4 text-center">
          <div
            className="relative mx-auto mb-8 max-w-3xl overflow-hidden rounded-lg"
          >
            <img
              src={`${CDN}/Sponsors/Sponsors%20gezocht___serialized1.jpg`}
              alt="Sponsors gezocht"
              className="w-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 p-6 text-white">
              <h2 className="mb-2 font-play text-3xl font-bold">Sponsoring 2024-2025</h2>
              <p className="font-play text-2xl font-bold text-yellow-400">NIEUWE MOGELIJKHEDEN!!</p>
              <p className="mt-2 font-archivo text-lg">Truitjes jeugd, dames team, B-elftal</p>
              <a
                href="tel:+32474820113"
                className="mt-4 rounded bg-white px-6 py-2 font-archivo text-lg font-bold text-black hover:opacity-80"
              >
                +32 474 82 01 13
              </a>
            </div>
          </div>

          <h1 className="font-play text-3xl font-bold text-white">
            V.K.S.O. Zerkegem dankt zijn sponsors
          </h1>
        </div>
      </section>

      {/* Sponsor Categories */}
      {sponsorCategories.map((category) => (
        <section key={category.title} className="bg-white py-12">
          <div className="mx-auto max-w-[1430px] px-4">
            <h2 className="mb-8 text-center font-play text-3xl font-bold text-gray-900">
              {category.title}
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {category.logos.map((logo, i) => (
                <div key={i} className="flex h-24 w-40 items-center justify-center rounded-lg bg-white p-4 shadow">
                  <img src={logo} alt={`Sponsor ${i + 1}`} className="max-h-full max-w-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

