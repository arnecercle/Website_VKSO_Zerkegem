import type { Metadata } from "next";
import Link from "next/link";
import { youthTeams } from "@/data/teams";

export const metadata: Metadata = { title: "Jeugd" };

export default function JeugdPage() {
  return (
    <section className="bg-black py-16" style={{ backgroundColor: "rgba(4,4,4,1)" }}>
      <div className="mx-auto max-w-[1430px] px-4">
        <h1 className="mb-12 text-center font-play text-5xl font-bold text-white">
          Jeugd
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {youthTeams.map((team) => (
            <Link
              key={team.slug}
              href={`/ploegen/jeugd/${team.slug}`}
              className="group overflow-hidden rounded-lg bg-white/10 transition-transform hover:scale-[1.02]"
            >
              {team.image && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={team.image}
                    alt={team.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-4 text-center">
                <h2 className="font-play text-xl font-bold text-white">{team.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
