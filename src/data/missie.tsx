export type MissiePage = {
  slug: string;
  title: string;
  content: React.ReactNode;
};

const CDN = "https://impro.usercontent.one/appid/oneComWsb/domain/vksozerkegem.be/media/vksozerkegem.be/onewebmedia";

export const missiePages: Record<string, { title: string; content: React.ReactNode }> = {
  bestuur: {
    title: "Bestuur",
    content: (
      <>
        <h1 className="mb-8 text-center font-play text-5xl font-bold">Algemeen bestuur</h1>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
          <Bestuurslid
            name="Wim Feys"
            role="Voorzitter"
            email="wim.feys21@icloud.com"
            phone="+32 474 82 01 13"
            image={`${CDN}/IMG-20230920-WA0011___serialized1.jpg`}
          />
          <Bestuurslid
            name="Sofie Strubbe"
            role="Gerechtelijk correspondent"
            email="gc@vksozerkegem.be"
            phone="+32 494 49 50 30"
            image={`${CDN}/IMG-20230919-WA0003___serialized1.jpg`}
          />
          <Bestuurslid
            name="Marc Flederick"
            role="Jeugdcoördinator"
            email="tvjo@vksozerkegem.be"
            phone="+32 476 57 86 28"
            image={`${CDN}/271239959_645135280166995_3240930686628381363_n.jpg`}
          />
          <Bestuurslid
            name="Matthias Vanhessche"
            role="Bestuurslid"
            email="matthias_vanhessche@hotmail.com"
            phone="+32 472 58 57 97"
            image={`${CDN}/matthias%20vanhessche.jpg`}
          />
          <Bestuurslid
            name="Georges Lievens"
            role="Erebestuurslid - medestichter"
            email="georges.lievens@telenet.be"
            phone=""
            image={`${CDN}/George%20Lievens___serialized1.jpg`}
          />
        </div>
      </>
    ),
  },
  "ons-charter": {
    title: "Ons Charter",
    content: (
      <div className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="mb-6 text-center font-play text-5xl font-bold">Ons Charter</h1>

        <section className="mb-8">
          <h2 className="mb-4 font-play text-3xl font-bold">Inleiding</h2>
          <p className="font-archivo text-lg text-white/80">
            Wij, als vereniging, willen ervoor kunnen zorgen dat al onze leden met plezier kunnen
            voetballen en zich verder kunnen ontwikkelen. Normen en waarden bij de beoefening van
            de voetbalsport vinden wij hierbij heel belangrijk. V.K.S.O. Zerkegem wil actief werken
            aan de bewustwording bij spelers, begeleiders, trainers, en ouders/verzorgers op dit
            vlak. Ons sportterrein moet een ontmoetingsplaats zijn en blijven waar sporters
            gezamenlijk met plezier en voldoening kunnen voetballen.
          </p>
          <p className="mt-4 font-archivo text-lg text-white/80">
            Dit vraagt om duidelijke gedragsregels. V.K.S.O. Zerkegem wil deze gedragscode
            vastleggen door middel van een Charter. Het bestuur, de trainers, begeleiders en
            ouders/verzorgers hebben een belangrijke verantwoordelijkheid en voorbeeldfunctie voor
            wat betreft het uitdragen en bewaken van dit Charter. Bij overtreding van de regels
            kunnen sancties volgen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 font-play text-3xl font-bold">Algemeen</h2>
          <p className="font-archivo text-lg text-white/80">
            Het Charter geldt voor ALLE leden. Voor iedereen geldend zijn de algemene gedragsregels
            (dus voor alle leden en ook bezoekers) en per doelgroep (spelers, trainers, begeleiders,
            ouders/verzorgers) zijn specifieke gedragsregels opgesteld. De specifieke gedragsregels
            voor de jeugd zijn ook van toepassing op de senioren.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 font-play text-3xl font-bold">Doelstelling</h2>
          <p className="font-archivo text-lg text-white/80">
            V.K.S.O. Zerkegem wil alle leden binnen hun persoonlijke mogelijkheden zo goed mogelijk
            laten voetballen. Enthousiasme, ontspanning en plezier zijn daarbij de belangrijkste
            elementen. Het streven is om alle teams op een dusdanig niveau aan de competitie te
            laten deelnemen dat voldoende uitdaging biedt om beter te gaan voetballen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 font-play text-3xl font-bold">Algemene gedragsregels</h2>
          <p className="font-archivo text-lg text-white/80">
            We vragen nadrukkelijk aandacht voor gedragsregels tijdens en na de beoefening van de
            voetbalsport. Voetbal is een teamsport, die je met elkaar en met de tegenstander
            gezamenlijk beoefent. Zonder samenspel geen voetbal en zonder tegenstander geen voetbal.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 font-archivo text-lg text-white/80">
            <li>Sport is er voor iedereen; niet alleen voor uitblinkers</li>
            <li>Bij een teamsport is de speler er voor het team en het team is er voor de speler</li>
            <li>We sporten met elkaar, dus ook met de tegenstander</li>
            <li>We gedragen ons altijd sportief, ook als anderen minder sportief zijn</li>
            <li>We hebben altijd respect voor de scheidsrechter, ook als deze een fout maakt</li>
            <li>De winnaar is degene die ook tegen zijn verlies kan</li>
            <li>Door sport leren mensen hun grenzen ontdekken en verleggen</li>
            <li>Sport geeft mensen zelfkennis en zelfvertrouwen</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 font-play text-3xl font-bold">Op en rond het sportterrein</h2>
          <ul className="list-disc space-y-2 pl-6 font-archivo text-lg text-white/80">
            <li>Schoenen buiten afkloppen</li>
            <li>Douchen na wedstrijd of training aangeraden</li>
            <li>Na het douchen de vloer met trekker schoonmaken</li>
            <li>Toiletten schoon achterlaten</li>
            <li>Papier, kauwgom, modder, gras etc. in afvalbakken</li>
            <li>Niet roken binnen en niet bij de kinderen</li>
            <li>Geen alcoholhoudende drank in kleedkamer of gang</li>
            <li>Gebruik de kleedkamers waar ze voor bedoeld zijn en houd deze netjes</li>
            <li>Velden zijn geen oversteekplaats, maar zijn om op te voetballen</li>
            <li>Blijf als toeschouwer achter de hekken / reclameborden tijdens een wedstrijd</li>
            <li>Voetbalschoenen zijn niet toegestaan in de kantine</li>
            <li>Fietsen plaatsen in de daarvoor bestemde rekken</li>
            <li>Auto&rsquo;s parkeren op de daarvoor bedoelde parkeerplaatsen</li>
            <li>Matig je snelheid op en rond het sportcomplex</li>
            <li>Filmen en foto&rsquo;s nemen is verboden in de kleedkamers</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 font-play text-3xl font-bold">Gedragsregels voor de speler</h2>
          <p className="font-archivo text-lg text-white/80">
            De speler is sportief, vertoont teamgeest als onderdeel van een team en helpt en steunt
            zijn medespelers in het veld; neemt in principe deel aan alle trainingen en wedstrijden
            of meldt zich anders tijdig af bij trainer / leider via Spond; is bij de training
            minimaal 15 minuten voor aanvang aanwezig en omgekleed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 font-play text-3xl font-bold">Gedragsregels voor begeleider/afgevaardigde</h2>
          <p className="font-archivo text-lg text-white/80">
            De begeleider heeft een voorbeeldfunctie voor het team; heeft respect voor spelers,
            ouders/verzorgers, scheidsrechters, grensrechters en tegenstanders; onthoudt zich van
            iedere vorm van verbale of fysieke agressie.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 font-play text-3xl font-bold">Gedragsregels voor de trainer</h2>
          <p className="font-archivo text-lg text-white/80">
            De trainer heeft een voorbeeldfunctie voor het team; heeft respect voor spelers,
            ouders/verzorgers, begeleiders en medetrainers; onthoudt zich van iedere vorm van
            verbale of fysieke agressie ten opzichte van ouders, trainers, spelers en bestuur.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 font-play text-3xl font-bold">Gedragsregels voor de ouders / verzorgers</h2>
          <p className="font-archivo text-lg text-white/80">
            Bij onze vereniging willen we graag dat het gedrag en de invloed van de
            ouders/verzorgers langs de lijn positief en ondersteunend is. De ouder/verzorger is een
            goede supporter en geeft het goede voorbeeld door respect te hebben voor iedereen op en
            om het veld.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 font-play text-3xl font-bold">Alcohol, tabak, drugs</h2>
          <p className="font-archivo text-lg text-white/80">
            Het geven van het goede voorbeeld door volwassenen is van groot belang. Alcohol en tabak
            zijn middelen die onze gezondheid schaden. Het is verboden te roken in de kleedkamers en
            in de kantine. Het is verboden alcohol te gebruiken in de kleedkamers. Drugsbezit en
            drugsgebruik in en om het sportveld is niet toegestaan en zal direct leiden tot een
            veld/complex verbod.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 font-play text-3xl font-bold">Grensoverschrijdend gedrag</h2>
          <p className="font-archivo text-lg text-white/80">
            We spreken over grensoverschrijdend gedrag in volgende gevallen: fysiek geweld,
            psychisch geweld, seksueel geweld, pesten, verwaarlozing. Het is de
            verantwoordelijkheid van iedereen binnen de vereniging (ouders, trainers, spelers,
            begeleiders, vrijwilligers en bestuur) om alert te zijn voor grensoverschrijdend gedrag.
          </p>
          <p className="mt-4 font-archivo text-lg text-white/80">
            Dergelijk gedrag wordt gerapporteerd aan een van onze opgeleide club-API&rsquo;s: Sofie
            Strubbe, Marc Flederick, Jurrie Debruyne. De API gaat aan de slag met de verkregen info,
            gaat in gesprek met de betrokkenen, maar is geen rechter. Uiteraard kunnen sancties wel
            volgen, maar indien de feiten te zwaar zijn, worden deze zonder aarzelen doorgegeven aan
            de voetbalbond.
          </p>
        </section>
      </div>
    ),
  },
  "aanspreekpunt-integriteit": {
    title: "Aanspreekpunt integriteit",
    content: (
      <div className="mx-auto max-w-3xl px-4 py-8">
        <h1 className="mb-6 text-center font-play text-5xl font-bold">Aanspreekpunt integriteit</h1>
        <p className="font-archivo text-lg text-white/80">
          Een club-API is een Aanspreekpunt Integriteit binnen een sportclub voor sporters, trainers,
          ouders, bestuurders en vrijwilligers. Wanneer iemand te maken krijgt met een situatie van
          mogelijk grensoverschrijdend gedrag, als betrokkene of omstander, dan kan je hierover de
          club-API vertrouwelijk aanspreken.
        </p>
        <p className="mt-4 font-archivo text-lg text-white/80">
          Dit kan zowel gaan over gele vlaggen (licht grensoverschrijdend gedrag) als rode en zwarte
          vlaggen (ernstig tot zeer ernstig grensoverschrijdend gedrag). De club-API zal vervolgens
          samen met de melder de situatie in kaart brengen, de ernst inschatten en vervolgens een
          advies geven om hier op een goede manier mee om te gaan als sportclub.
        </p>
        <p className="mt-6 font-archivo text-lg font-bold text-white">
          In onze vereniging zijn er 3 club-API&rsquo;s:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6 font-archivo text-lg text-white/80">
          <li>Sofie Strubbe</li>
          <li>Marc Flederick</li>
          <li>Jurrie Debruyne</li>
        </ul>
        <p className="mt-4 font-archivo text-lg text-white/80">
          Allen kunnen aangesproken worden. We stellen ons graag even voor, zodat u alvast een idee
          hebt van wie we zijn.
        </p>
      </div>
    ),
  },
  Inschrijven: {
    title: "Inschrijven",
    content: (
      <div className="mx-auto max-w-3xl px-4 py-8">
        <h1 className="mb-6 text-center font-play text-5xl font-bold">Inschrijven</h1>
        <p className="font-archivo text-lg text-white/80">
          Beste ouder, beste speler, beste speelster, fijn dat jullie je willen inschrijven bij
          onze familiale vereniging.
        </p>
        <p className="mt-4 font-archivo text-lg text-white/80">
          Inschrijven gebeurt via dit{" "}
          <a
            href="https://forms.gle/4CQZhWNJ5zGUfGqj6"
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            inschrijvingsformulier
          </a>
          . Na het ingeven van alle persoonlijke gegevens ontvang je samen met de bevestiging van
          de inschrijving een uitnodiging van de Spond App. Door de uitnodiging van de Spond App te
          aanvaarden krijg je onmiddellijk (na interne controle) toegang tot de trainingen,
          wedstrijden en evenementen.
        </p>
        <p className="mt-4 font-archivo text-lg text-white/80">
          Vervolgens wordt er met jou contact opgenomen voor een afspraak om je in te schrijven bij
          de Koninklijke Belgische Voetbalbond, waardoor ook de verzekering in orde wordt gebracht.
        </p>
        <p className="mt-4 font-archivo text-lg text-white/80">
          Heb je meer info nodig? Geen probleem, de volledige informatiebrochure kan je{" "}
          <a
            href="/onewebmedia/Infobrochure.pdf"
            className="text-blue-400 hover:underline"
            target="_blank"
          >
            hier downloaden
          </a>
          . Uiteraard kan je steeds bijkomende vragen stellen via{" "}
          <a href="mailto:info@vksozerkegem.be" className="text-blue-400 hover:underline">
            info@vksozerkegem.be
          </a>
          .
        </p>
        <p className="mt-6 text-center font-play text-2xl font-bold text-white">
          Alvast welkom bij V.K.S.O. ZERKEGEM! LEVE ZERKY!!
        </p>
      </div>
    ),
  },
  lidgeld: {
    title: "Lidgeld",
    content: (
      <div className="mx-auto max-w-3xl px-4 py-8">
        <h1 className="mb-6 text-center font-play text-5xl font-bold">Lidgeld</h1>
        <h2 className="mb-4 font-play text-2xl font-bold">Inbegrepen in het lidgeld (U6 t.e.m. U17):</h2>
        <ul className="mb-6 list-disc space-y-2 pl-6 font-archivo text-lg text-white/80">
          <li>Aansluiting bij de Koninklijk Belgische Voetbalbond</li>
          <li>Verzekering tegen lichamelijke ongevallen tijdens trainingen of wedstrijden</li>
          <li>Deelname aan trainingen, wedstrijden en tornooien</li>
          <li>Een drankbonnetje bij thuiswedstrijden</li>
          <li>Drinkfles</li>
          <li>Kledingvoucher van €75 op onze webshop</li>
          <li>Gratis wedstrijdbroek en kousen</li>
          <li>Opleiding van opgeleide trainers</li>
          <li>Fun en plezier</li>
        </ul>

        <h2 className="mb-4 font-play text-2xl font-bold">Tarieven:</h2>
        <table className="mb-6 w-full max-w-sm font-archivo text-lg">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="py-2 text-left">Categorie</th>
              <th className="py-2 text-right">Prijs</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2">U6</td>
              <td className="py-2 text-right">€125</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2">U7 - U17</td>
              <td className="py-2 text-right">€295</td>
            </tr>
          </tbody>
        </table>

        <p className="font-archivo text-lg text-white/80">
          Gelieve het lidgeld voor 1 juli 2025 over te schrijven op rekeningnummer{" "}
          <strong>BE84 1030 4473 5559</strong> van V.K.S.O. Zerkegem met vermelding:{' '}
          <em>&lsquo;LIDGELD 2025-2026 &ndash; NAAM SPELER &ndash; PLOEG&rsquo;</em>
        </p>
        <p className="mt-4 font-archivo text-lg text-white/80">
          Bij inschrijving en betaling van het lidgeld verklaart u zich ook onmiddellijk akkoord
          met ons{" "}
          <a href="/missie-en-visie/ons-charter" className="text-blue-400 hover:underline">
            charter
          </a>
          . Onze{" "}
          <a href="/onewebmedia/Privacyverklaring.pdf" className="text-blue-400 hover:underline" target="_blank">
            privacyverklaring
          </a>{" "}
          kunt u hier terugvinden.
        </p>
      </div>
    ),
  },
  "g-werking": {
    title: "G-Voetbal",
    content: (
      <div className="mx-auto max-w-3xl px-4 py-8">
        <h1 className="mb-6 text-center font-play text-5xl font-bold">G-Voetbal</h1>
        <p className="font-archivo text-lg text-white/80">
          Samen met K.S.V. Jabbeke en K.F.C. Varsenare, vanuit een samenwerkingsakkoord binnen de
          gemeente Groot-Jabbeke, hebben we het gezamenlijke project &ldquo;G-voetbal&rdquo;
          opgericht.
        </p>
        <h2 className="mb-4 mt-6 font-play text-3xl font-bold">Wat is G-Voetbal?</h2>
        <p className="font-archivo text-lg text-white/80">
          Voetbal is voor iedereen. Ook voor mensen met een lichamelijke of verstandelijke
          beperking. Wij geloven in elk talent en vinden dat mensen met een beperking ook van leuke
          activiteiten als voetbal moeten kunnen genieten.
        </p>
        <p className="mt-4 font-archivo text-lg text-white/80">
          Onder impuls van Johan Deseure, Jabbekenaar die zijn ervaring van bij Cercle Brugge
          meebrengt, werd het team &ldquo;G-Black Devils United&rdquo; opgericht, waarmee in reeks
          1 van het G-voetbal wordt aangetreden. Naast Johan zijn Frederic Vanden Bussche voor
          K.S.V. Jabbeke, Matthias Vanhessche voor V.K.S.O. Zerkegem en Danny De Coninck voor
          K.F.C. Varsenare de drijvende krachten.
        </p>
        <p className="mt-4 font-archivo text-lg text-white/80">
          Naast het sociale aspect van G-voetbal te ondersteunen en te promoten, wil men vooral
          mensen met een beperking volop van hun favoriete sport laten genieten en het
          samenwerkingsverband tussen de drie voetbalverenigingen van Groot-Jabbeke versterken.
          In 2020 startte het drieluik K.F.C. Varsenare, K.S.V. Jabbeke, V.K.S.O. Zerkegem
          gezamenlijk het project G-Black Devils United op, een voetbalploeg voor mensen met een
          beperking.
        </p>
        <p className="mt-4 font-archivo text-lg text-white/80">
          Om in te schrijven of aan een proeftraining deel te nemen, zowel voor wat de volwassenen
          als de jongeren betreft, kan contact worden opgenomen met de verantwoordelijke, Johan
          Deseure:{" "}
          <a href="tel:+32477988851" className="text-blue-400 hover:underline">
            +32 477 98 88 51
          </a>{" "}
          &ndash;{" "}
          <a href="mailto:johan.deseure@icloud.com" className="text-blue-400 hover:underline">
            johan.deseure@icloud.com
          </a>
          .
        </p>
      </div>
    ),
  },
  nieuws: {
    title: "Nieuws",
    content: (
      <div className="mx-auto max-w-3xl px-4 py-8">
        <h1 className="mb-6 text-center font-play text-5xl font-bold">Nieuws</h1>
        <p className="font-archivo text-lg text-white/80">
          Hier vind je het laatste nieuws over V.K.S.O. Zerkegem.
        </p>
      </div>
    ),
  },
  evenementen: {
    title: "Evenementen",
    content: (
      <div className="mx-auto max-w-3xl px-4 py-8">
        <h1 className="mb-6 text-center font-play text-5xl font-bold">Evenementen</h1>
        <p className="font-archivo text-lg text-white/80">
          Ontdek onze evenementen en activiteiten doorheen het seizoen.
        </p>
      </div>
    ),
  },
};

function Bestuurslid({
  name,
  role,
  email,
  phone,
  image,
}: {
  name: string;
  role: string;
  email: string;
  phone: string;
  image?: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 h-40 w-40 overflow-hidden rounded-full">
        {image ? (
          <img src={image} alt={name} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-500">
            Geen foto
          </div>
        )}
      </div>
      <p className="font-archivo text-lg font-bold text-white">{name}</p>
      <p className="font-archivo text-sm text-white/60">{role}</p>
      <a href={`mailto:${email}`} className="mt-1 font-archivo text-sm text-blue-400 hover:underline">
        {email}
      </a>
      {phone && (
        <a href={`tel:${phone}`} className="font-archivo text-sm text-blue-400 hover:underline">
          {phone}
        </a>
      )}
    </div>
  );
}
