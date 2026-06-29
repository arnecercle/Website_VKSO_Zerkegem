import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { missiePages } from "@/data/missie";

export async function generateStaticParams() {
  return Object.keys(missiePages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = missiePages[slug];
  if (!page) return {};
  return { title: page.title };
}

export default async function MissieDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = missiePages[slug];
  if (!page) notFound();

  return (
    <div className="bg-black py-16" style={{ backgroundColor: "rgba(4,4,4,1)", minHeight: "50vh" }}>
      <div className="mx-auto max-w-[1430px] text-white">{page.content}</div>
    </div>
  );
}
