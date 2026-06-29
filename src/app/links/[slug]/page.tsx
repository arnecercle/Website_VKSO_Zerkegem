import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { linkPages } from "@/data/links";
import { socialLinks } from "@/data/navigation";

export async function generateStaticParams() {
  return linkPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = linkPages.find((p) => p.slug === slug);
  if (!page) return {};
  return { title: page.title };
}

export default async function LinkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = linkPages.find((p) => p.slug === slug);
  if (!page) notFound();

  if (slug === "social-media") {
    return (
      <section className="bg-black py-16" style={{ backgroundColor: "rgba(4,4,4,1)", minHeight: "50vh" }}>
        <div className="mx-auto max-w-[1430px] px-4 text-center">
          <h1 className="mb-8 font-play text-5xl font-bold text-white">Social Media</h1>
          <p className="mb-8 font-archivo text-lg text-white/80">
            Volg ons op onze sociale media kanalen!
          </p>
          <div className="flex items-center justify-center gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 transition-transform hover:scale-110"
              >
                <span className="text-2xl font-bold text-white">
                  {link.label === "Facebook" ? "f" : "ig"}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (page.content) {
    return (
      <section className="bg-black py-16" style={{ backgroundColor: "rgba(4,4,4,1)", minHeight: "50vh" }}>
        <div className="mx-auto max-w-[1430px] px-4 text-white">
          {page.content}
          <div className="mt-8 text-center">
            <Link
              href="/links/"
              className="inline-block rounded bg-white px-6 py-3 font-archivo text-lg font-bold text-black hover:opacity-80"
            >
              Terug naar links
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (page.externalUrl) {
    return (
      <section className="bg-black py-16" style={{ backgroundColor: "rgba(4,4,4,1)", minHeight: "50vh" }}>
        <div className="mx-auto max-w-[1430px] px-4 text-center">
          <h1 className="mb-4 font-play text-5xl font-bold text-white">{page.title}</h1>
          {page.description && (
            <p className="mb-8 font-archivo text-lg text-white/80">{page.description}</p>
          )}
          <a
            href={page.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded bg-white px-6 py-3 font-archivo text-lg font-bold text-black hover:opacity-80"
          >
            Ga naar {page.title}
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black py-16" style={{ backgroundColor: "rgba(4,4,4,1)", minHeight: "50vh" }}>
      <div className="mx-auto max-w-[1430px] px-4 text-center">
        <h1 className="mb-4 font-play text-5xl font-bold text-white">{page.title}</h1>
        {page.description && (
          <p className="mb-8 font-archivo text-lg text-white/80">{page.description}</p>
        )}
        <Link
          href="/links/"
          className="inline-block rounded bg-white px-6 py-3 font-archivo text-lg font-bold text-black hover:opacity-80"
        >
          Terug naar links
        </Link>
      </div>
    </section>
  );
}
