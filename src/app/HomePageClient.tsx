'use client';

import { useState, useEffect, useCallback } from 'react';
import { MapPin } from 'lucide-react';
import { CDN } from '@/lib/constants';

type TeamPhoto = { src: string; alt: string };

export default function geClient({ teamPhotos }: { teamPhotos: TeamPhoto[] }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % teamPhotos.length);
  }, [teamPhotos.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + teamPhotos.length) % teamPhotos.length);
  }, [teamPhotos.length]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <>
      {/* Hero / Carousel Section */}
      <section style={{ backgroundColor: 'rgba(4,4,4,1)' }}>
        <div className="relative mx-auto max-w-[1430px]">
          <div className="relative overflow-hidden">
            {teamPhotos.map((photo, i) => (
              <div
                key={i}
                className={`transition-opacity duration-700 ${
                  i === current ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-[500px] w-full object-contain sm:h-[600px]"
                />
              </div>
            ))}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
              <img
                src={`${CDN}/logo%20zerkegem___serialized2.png`}
                alt="V.K.S.O. Zerkegem"
                className="mb-4 h-[120px] w-auto sm:h-[150px]"
              />
              <h1 className="text-center font-play text-4xl font-bold italic text-white sm:text-6xl">
                We are Zerky!
              </h1>
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/70"
            aria-label="Vorige foto"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/70"
            aria-label="Volgende foto"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {teamPhotos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === current ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Ga naar foto ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <section style={{ backgroundColor: 'rgba(4,4,4,1)' }}>
        <div className="mx-auto flex max-w-[1430px] items-center justify-center gap-2 px-4 py-3">
          <MapPin className="h-5 w-5 text-white" />
          <span className="font-archivo text-lg text-white">
            Vedastusstraat 49, 8490 Zerkegem
          </span>
        </div>
      </section>

      {/* Join our team */}
      <section className="py-16">
        <div className="mx-auto max-w-[1000px] px-4">
          <h2 className="mb-8 text-center font-play text-4xl font-bold text-gray-900">
            Join our team!
          </h2>
          <div className="space-y-4 text-center font-archivo text-lg leading-relaxed text-gray-700">
            <p>
              <strong>Beste ouder, beste speler,</strong>
            </p>
            <p>
              Ben jij op zoek naar een nieuwe hobby en zou je graag voetballen,
              dan nodigt V.K.S.O. Zerkegem je graag uit om vrijblijvend enkele
              voetbaltrainingen mee te volgen.
            </p>
            <p>
              Niet twijfelen en kom zelf eens kijken of uitproberen. Je kan na
              enkele trainingen zelf beslissen of je wenst aan te sluiten.
            </p>
            <p>
              V.K.S.O. Zerkegem is een gezellige en familiale club, waar het
              kind centraal staat. In onze vereniging zijn zowel jongens als
              meisjes heel er welkom.
            </p>
            <p>Wij staan voor jou klaar met een groep enthousiaste trainers.</p>
          </div>

          <div className="mt-8 text-center font-archivo text-gray-700">
            <p className="mb-2 text-lg">
              <strong>Contactgegevens:</strong>
            </p>
            <p className="text-lg">
              <strong>Jeugdvoorzitter Jurrie Debruyne</strong>
            </p>
            <p className="mt-2">
              <a
                href="tel:+32478640063"
                className="text-blue-600 hover:underline"
              >
                Telnr. +32 478 64 00 63
              </a>
            </p>
            <p>
              <a
                href="mailto:jeugdvoorzitter@vksozerkegem.be"
                className="text-blue-600 hover:underline"
              >
                jeugdvoorzitter@vksozerkegem.be
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
