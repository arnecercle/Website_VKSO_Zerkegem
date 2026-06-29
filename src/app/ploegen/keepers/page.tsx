import type { Metadata } from "next";
import Link from "next/link";
import { keeperGroups } from "@/data/keepers";

export const metadata: Metadata = { title: "Keepers" };

export default function KeepersPage() {
  return (
    <section className="bg-black py-16" style={{ backgroundColor: "rgba(4,4,4,1)" }}>
      <div className="mx-auto max-w-[1430px] px-4">
        <h1 className="mb-4 text-center font-play text-5xl font-bold text-white">Keepers</h1>
        <p className="mb-12 text-center font-archivo text-white/60">
          Onze keeperstraining per leeftijdsgroep
        </p>
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
          {keeperGroups.map((group) => (
            <Link
              key={group.slug}
              href={`/keepers/${group.slug}`}
              className="group rounded-lg bg-white/10 p-8 text-center transition-transform hover:scale-[1.02] hover:bg-white/20"
            >
              <h2 className="font-play text-2xl font-bold text-white">{group.name}</h2>
              <p className="mt-2 font-archivo text-sm text-white/60">{group.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
