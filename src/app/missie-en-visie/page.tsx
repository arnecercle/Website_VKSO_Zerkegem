import type { Metadata } from "next";

export const metadata: Metadata = { title: "Over ons" };

const CDN = "https://impro.usercontent.one/appid/oneComWsb/domain/vksozerkegem.be/media/vksozerkegem.be/onewebmedia";

export default function MissieEnVisiePage() {
  return (
    <>
      {/* MISSIE & VISIE */}
      <section className="bg-black py-16 text-white" style={{ backgroundColor: "rgba(4,4,4,1)" }}>
        <div className="mx-auto max-w-[1000px] px-4">
          <h2 className="mb-8 text-center font-play text-4xl font-bold">
            ONZE MISSIE &amp; VISIE
          </h2>
          <p className="mb-6 font-archivo text-lg leading-relaxed">
            De aanwezigheid van een sportieve cel is voor een voetbalclub zeer belangrijk.
            De sportieve cel staat in voor:
          </p>
          <ul className="mb-8 list-disc space-y-2 pl-6 font-archivo text-lg">
            <li>Het uitwerken van de missie & visie</li>
            <li>De doorstroming van de jeugd</li>
            <li>Individuele opvolging van spelers</li>
            <li>Het uitwerken van een leerplan</li>
            <li>Spelersprofielen voor A-kern</li>
          </ul>

          <h3 className="mb-4 font-play text-2xl font-bold">Sportieve cel</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 font-archivo">
            <div className="rounded bg-white/10 p-4">
              <p className="font-bold">Wim Feys</p>
              <p className="text-white/70">Voorzitter</p>
            </div>
            <div className="rounded bg-white/10 p-4">
              <p className="font-bold">Timothy Scheyving</p>
              <p className="text-white/70">Jeugdcoördinator onderbouw</p>
            </div>
            <div className="rounded bg-white/10 p-4">
              <p className="font-bold">Marc Flederick</p>
              <p className="text-white/70">Jeugdcoördinator middenbouw</p>
            </div>
            <div className="rounded bg-white/10 p-4">
              <p className="font-bold">Bjorn van Cappel</p>
              <p className="text-white/70">Jeugdcoördinator bovenbouw</p>
            </div>
            <div className="rounded bg-white/10 p-4">
              <p className="font-bold">Debruyne Jurrie</p>
              <p className="text-white/70">Jeugdvoorzitter</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSIE */}
      <section className="py-16">
        <div className="mx-auto max-w-[1000px] px-4">
          <div className="mb-8 overflow-hidden rounded-lg">
            <img src={`${CDN}/Missie.jpg`} alt="Missie" className="w-full" />
          </div>
          <h2 className="mb-6 font-play text-4xl font-bold text-gray-900">MISSIE</h2>
          <div className="space-y-4 font-archivo text-lg leading-relaxed text-gray-700">
            <p>
              VKSO Zerkegem brengt spelers, trainers, ouders en vrijwilligers samen in een
              warme en professionele voetbalomgeving.
            </p>
            <p>
              Kwaliteitsvolle trainingen en begeleiding staan centraal, waarbij kinderen en
              jongeren centraal staan.
            </p>
            <p>
              Wij ontwikkelen ieders mogelijkheden, ongeacht talent, achtergrond of geslacht,
              met fair-play en samenhorigheid als kernwaarden.
            </p>
          </div>
        </div>
      </section>

      {/* VISIE */}
      <section className="bg-gray-100 py-16">
        <div className="mx-auto max-w-[1000px] px-4">
          <div className="mb-8 overflow-hidden rounded-lg">
            <img src={`${CDN}/Visie___serialized1.jpeg`} alt="Visie" className="w-full" />
          </div>
          <h2 className="mb-6 font-play text-4xl font-bold text-gray-900">VISIE</h2>
          <div className="space-y-4 font-archivo text-lg leading-relaxed text-gray-700">
            <p>
              <strong>Spelvreugde en enthousiasme</strong> zijn de eerste prioriteit.
            </p>
            <p>Wij streven naar een kwaliteitsvolle jeugdopleiding met:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Plezier centraal in alle trainingen</li>
              <li>Ontwikkeling van technische vaardigheden</li>
              <li>Respect voor elkaar, de tegenstander en de scheidsrechter</li>
              <li>Doorstroming van eigen jeugd naar de kernploegen</li>
              <li>Gemotiveerde en opgeleide trainers</li>
              <li>Een veilige en positieve sportomgeving</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
