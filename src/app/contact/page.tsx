import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="bg-black py-12" style={{ backgroundColor: "rgba(4,4,4,1)" }}>
        <div className="mx-auto max-w-[1430px] px-4">
          <h1 className="mb-8 text-center font-play text-4xl font-bold text-white">
            WIL JE CONTACT MET ONS OPNEMEN?
          </h1>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="mb-6 font-play text-3xl font-bold text-green-400">
                Contactgegevens
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <svg className="mt-1 h-5 w-5 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-archivo text-white">
                      <a href="mailto:info@vksozerkegem.be" className="hover:underline">
                        info@vksozerkegem.be
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="mt-1 h-5 w-5 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-archivo text-white">
                      V.K.S.O. Zerkegem<br />
                      Vedastusstraat 49<br />
                      8490 Jabbeke<br />
                      Belgium
                    </p>
                    <a
                      href="https://maps.google.com/?cid=3284316872742338382"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block font-archivo text-sm text-blue-400 hover:underline"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="mt-1 h-5 w-5 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4.244 4.243a4 4 0 105.656 5.656l1.414-1.414" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 6.636a4 4 0 00-5.656 0l-4.244 4.243a4 4 0 105.656 5.656l1.414-1.414" />
                  </svg>
                  <div>
                    <p className="font-archivo text-white/80">
                      Bezoek en like ons zeker ook op Sociale media!!
                    </p>
                    <div className="mt-2 flex gap-4">
                      <a
                        href="https://facebook.com/VksoZerkegemFanpage/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-archivo text-blue-400 hover:underline"
                      >
                        Facebook
                      </a>
                      <a
                        href="https://instagram.com/vkso_zerkegem/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-archivo text-blue-400 hover:underline"
                      >
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form
                action="/sendmail.php"
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="cmpId" value="80AD81DF-D9F3-45EF-833A-4D67A3A6F772" />
                <input type="hidden" name="replyto" value="" />
                <input type="hidden" name="subject" value="Contactformulier VKSO Zerkegem" />
                <input type="hidden" name="recipient" value="info@vksozerkegem.be" />

                <div>
                  <label htmlFor="naam" className="mb-1 block font-archivo text-sm text-white">
                    Naam en voornaam *
                  </label>
                  <input
                    id="naam"
                    name="Naam en voornaam"
                    type="text"
                    required
                    className="w-full rounded border border-white/20 bg-white/10 px-4 py-2 font-archivo text-white placeholder-white/50 focus:border-white focus:outline-none"
                    placeholder="Naam en voornaam"
                  />
                </div>

                <div>
                  <label htmlFor="bedrijf" className="mb-1 block font-archivo text-sm text-white">
                    Bedrijf
                  </label>
                  <input
                    id="bedrijf"
                    name="Bedrijf"
                    type="text"
                    className="w-full rounded border border-white/20 bg-white/10 px-4 py-2 font-archivo text-white placeholder-white/50 focus:border-white focus:outline-none"
                    placeholder="Bedrijf"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1 block font-archivo text-sm text-white">
                    E-mail *
                  </label>
                  <input
                    id="email"
                    name="E-mail"
                    type="email"
                    required
                    className="w-full rounded border border-white/20 bg-white/10 px-4 py-2 font-archivo text-white placeholder-white/50 focus:border-white focus:outline-none"
                    placeholder="E-mail"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="telefoon" className="mb-1 block font-archivo text-sm text-white">
                      Telefoonnummer
                    </label>
                    <input
                      id="telefoon"
                      name="Telefoonnummer"
                      type="tel"
                      className="w-full rounded border border-white/20 bg-white/10 px-4 py-2 font-archivo text-white placeholder-white/50 focus:border-white focus:outline-none"
                      placeholder="Telefoon"
                    />
                  </div>
                  <div>
                    <label htmlFor="gsm" className="mb-1 block font-archivo text-sm text-white">
                      GSM
                    </label>
                    <input
                      id="gsm"
                      name="GSM"
                      type="tel"
                      className="w-full rounded border border-white/20 bg-white/10 px-4 py-2 font-archivo text-white placeholder-white/50 focus:border-white focus:outline-none"
                      placeholder="GSM"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="bericht" className="mb-1 block font-archivo text-sm text-white">
                    Bericht *
                  </label>
                  <textarea
                    id="bericht"
                    name="Bericht"
                    required
                    rows={5}
                    className="w-full rounded border border-white/20 bg-white/10 px-4 py-2 font-archivo text-white placeholder-white/50 focus:border-white focus:outline-none"
                    placeholder="Bericht"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded bg-white px-6 py-3 font-archivo text-lg font-bold text-black transition-opacity hover:opacity-80"
                >
                  Bericht versturen
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
