import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { teams, getTeamBySlug } from "@/data/teams";

export async function generateStaticParams() {
  return teams
    .filter((t) => t.slug !== "jeugd")
    .map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const team = getTeamBySlug(slug);
  if (!team) return {};
  return { title: team.name };
}

export default async function TeamPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const team = getTeamBySlug(slug);
  if (!team) notFound();

  return <TeamDetail team={team} />;
}

function TeamDetail({ team }: { team: NonNullable<ReturnType<typeof getTeamBySlug>> }) {
  return (
    <>
      <section className="bg-black py-16" style={{ backgroundColor: "rgba(4,4,4,1)" }}>
        <div className="mx-auto max-w-[1430px] px-4">
          <h1 className="mb-8 text-center font-play text-5xl font-bold text-white">
            {team.name}
          </h1>

          {team.staff.length > 0 && (
            <>
              <h2 className="mb-6 text-center font-play text-3xl font-bold text-white">Staf</h2>
              <div className={`mx-auto flex max-w-4xl flex-wrap justify-center gap-8 ${team.staff.length === 1 ? "" : ""}`}>
                {team.staff.map((member) => (
                  <div key={member.name} className="flex flex-col items-center text-center">
                    {member.image && (
                      <div className="mb-4 h-36 w-36 overflow-hidden rounded-full">
                        <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                      </div>
                    )}
                    <p className="font-archivo text-lg font-bold text-white">{member.role}</p>
                    <p className="font-archivo text-white/90">{member.name}</p>
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="mt-1 font-archivo text-sm text-blue-400 hover:underline">
                        {member.email}
                      </a>
                    )}
                    {member.phone && (
                      <a href={`tel:${member.phone}`} className="font-archivo text-sm text-blue-400 hover:underline">
                        {member.phone}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {team.trainingSchedule && (
        <section className="bg-white py-12">
          <div className="mx-auto max-w-[1430px] px-4 text-center">
            <h3 className="mb-4 font-play text-2xl font-bold text-gray-900">Trainingen</h3>
            <p className="font-archivo text-lg text-gray-700">{team.trainingSchedule}</p>
          </div>
        </section>
      )}

      {team.image && (
        <section className="bg-white pb-12">
          <div className="mx-auto max-w-[1430px] px-4">
            <img src={team.image} alt={`${team.name} teamfoto`} className="w-full rounded-lg" />
          </div>
        </section>
      )}

      {team.voetbalvlaanderenSlug && (
        <section className="bg-gray-100 py-12">
          <div className="mx-auto flex max-w-[1430px] flex-wrap items-center justify-center gap-4 px-4">
            <a
              href={`https://www.voetbalvlaanderen.be/competities?team=${team.voetbalvlaanderenSlug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-black px-6 py-3 font-archivo text-white hover:opacity-80"
            >
              Spelers
            </a>
            <a
              href={`https://www.voetbalvlaanderen.be/kalender?team=${team.voetbalvlaanderenSlug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-black px-6 py-3 font-archivo text-white hover:opacity-80"
            >
              Voetbalkalender
            </a>
            <a
              href={`https://www.voetbalvlaanderen.be/ranking?team=${team.voetbalvlaanderenSlug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-black px-6 py-3 font-archivo text-white hover:opacity-80"
            >
              Rangschikking
            </a>
          </div>
        </section>
      )}
    </>
  );
}
