import type { ReactNode } from "react";

export type LinkPage = {
  slug: string;
  title: string;
  externalUrl?: string;
  description?: string;
  content?: ReactNode;
};

export const linkPages: LinkPage[] = [
  { slug: "spond", title: "Spond", externalUrl: "https://spond.com", description: "Alle sportieve communicatie verloopt via Spond. Download de app voor een overzicht van trainingen, wedstrijden, evenementen en om aan- of afwezigheden aan te duiden." },
  { slug: "webshop", title: "Kledij", externalUrl: "https://www.kitso.be/", description: "Bestel je V.K.S.O. Zerkegem kledij" },
  { slug: "social-media", title: "Social Media", description: "Volg ons op Facebook en Instagram" },
  { slug: "de-groene-bron", title: "Partner Cercle Brugge", externalUrl: "https://www.cerclebrugge.be/", description: "Cercle Brugge - De Groene Bron" },
  {
    slug: "nuttige-documenten",
    title: "Nuttige documenten",
    description: "Belangrijke documenten voor leden",
    content: (
      <div className="mx-auto max-w-3xl px-4 py-8 text-left">
        <h1 className="mb-6 text-center font-play text-5xl font-bold text-white">Nuttige documenten</h1>

        <section className="mb-8">
          <h2 className="mb-4 font-play text-3xl font-bold text-white">Sportongeval</h2>
          <p className="font-archivo text-lg text-white/80">
            Het ongevallenformulier dient zo snel mogelijk ingevuld te worden door de arts.
            Zorg er vooral voor dat alle persoonlijke gegevens zijn ingevuld en dat de dokter
            het formulier heeft ondertekend. Laat bij de minste twijfel ook kinesitherapie
            voorschrijven (zo moet je achteraf niet meer teruggaan).
          </p>
          <p className="mt-4 font-archivo text-lg text-white/80">
            Vul bovenaan het formulier &ldquo;Aangifte van ongeval&rdquo; de volgende items in:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6 font-archivo text-lg text-white/80">
            <li>Naam en voornaam slachtoffer</li>
            <li>Geboortedatum</li>
            <li>Adres slachtoffer</li>
            <li>Functie slachtoffer</li>
            <li>
              Tijdens welke wedstrijd of training het ongeval heeft plaatsgevonden: datum, uur
              en locatie van het ongeval, omstandigheden van het ongeval
            </li>
          </ul>
          <p className="mt-4 font-archivo text-lg text-white/80">
            Dit formulier moet samen met een zelfklever van je zoon/dochter van het
            ziekenfonds/mutualiteit na het ongeval afgeleverd worden bij de gerechtelijk
            correspondent van V.K.S.O. Zerkegem: V.K.S.O. Zerkegem t.a.v. Sofie Strubbe.
            Hiervoor werd een rode postbus voorzien in de gang van de kleedkamers en dit onder
            het AED-toestel.
          </p>
          <p className="mt-4 font-archivo text-lg text-white/80">
            De club zorgt er dan voor dat dit formulier bij de verzekering terecht komt. Daarna
            moet je bij je ziekenfonds/mutualiteit laten weten dat je een sportongeval hebt
            opgelopen.
          </p>
          <p className="mt-4 font-archivo text-lg font-bold text-red-400">
            Het formulier moet ten laatste 10 dagen na het ongeval binnen zijn bij de
            verzekering! Hou hier aub rekening mee!
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <a
              href="/onewebmedia/sportongeval.pdf"
              className="inline-block rounded bg-blue-600 px-6 py-3 font-archivo text-lg font-bold text-white hover:bg-blue-700"
              target="_blank"
            >
              Aangifte sportongeval
            </a>
            <a
              href="/onewebmedia/mutualiteit.pdf"
              className="inline-block rounded bg-blue-600 px-6 py-3 font-archivo text-lg font-bold text-white hover:bg-blue-700"
              target="_blank"
            >
              Aanvraag document mutualiteit
            </a>
          </div>
        </section>
      </div>
    ),
  },
];
