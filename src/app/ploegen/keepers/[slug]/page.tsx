import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { keeperGroups } from '@/data/keepers';

export async function generateStaticParams() {
  return keeperGroups.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const group = keeperGroups.find((g) => g.slug === slug);
  if (!group) return {};
  return { title: group.name };
}

export default async function KeeperGroupPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const group = keeperGroups.find((g) => g.slug === slug);
  if (!group) notFound();

  return (
    <>
      <section
        className="bg-black py-16"
        style={{ backgroundColor: 'rgba(4,4,4,1)' }}
      >
        <div className="mx-auto max-w-[1430px] px-4">
          <h1 className="mb-4 text-center font-play text-5xl font-bold text-white">
            Keepers {group.name}
          </h1>

          {group.staff.length > 0 && (
            <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-8">
              {group.staff.map((member) => (
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

          {group.staff.length === 0 && (
            <p className="text-center font-archivo text-white/40">
              Geen trainers toegevoegd.
            </p>
          )}
        </div>
      </section>

      {group.trainingSchedule && (
        <section className="bg-white py-12">
          <div className="mx-auto max-w-[1430px] px-4 text-center">
            <h3 className="mb-4 font-play text-2xl font-bold text-gray-900">
              Trainingen
            </h3>
            <p className="font-archivo text-lg text-gray-700">
              {group.trainingSchedule}
            </p>
          </div>
        </section>
      )}
    </>
  );
}
