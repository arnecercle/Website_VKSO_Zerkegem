import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { youthTeams } from '@/data/teams';

export async function generateStaticParams() {
  return youthTeams.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const team = youthTeams.find((t) => t.slug === slug);
  if (!team) return {};
  return { title: team.name };
}

export default async function YouthTeamPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const team = youthTeams.find((t) => t.slug === slug);
  if (!team) notFound();

  return (
    <>
      <section
        className="bg-black py-16"
        style={{ backgroundColor: 'rgba(4,4,4,1)' }}
      >
        <div className="mx-auto max-w-[1430px] px-4">
          <h1 className="mb-8 text-center font-play text-5xl font-bold text-white">
            {team.name}
          </h1>

          {team.staff.length > 0 && (
            <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-8">
              {team.staff.map((member) => (
                <div
                  key={member.name || member.role}
                  className="flex flex-col items-center text-center"
                >
                  {member.image && (
                    <div className="mb-4 h-36 w-36 overflow-hidden rounded-full">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  <p className="font-archivo text-lg font-bold text-white">
                    {member.role}
                  </p>
                  {member.name && (
                    <p className="font-archivo text-white/90">{member.name}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {team.trainingSchedule && (
        <section className="bg-white py-12">
          <div className="mx-auto max-w-[1430px] px-4 text-center">
            <h3 className="mb-4 font-play text-2xl font-bold text-gray-900">
              Trainingen
            </h3>
            <p className="font-archivo text-lg text-gray-700">
              {team.trainingSchedule}
            </p>
          </div>
        </section>
      )}

      {team.image && (
        <section className="bg-white pb-12">
          <div className="mx-auto max-w-[1430px] px-4">
            <img
              src={team.image}
              alt={`${team.name} teamfoto`}
              className="mx-auto max-h-[60vh] w-full rounded-lg object-contain"
            />
          </div>
        </section>
      )}
    </>
  );
}
