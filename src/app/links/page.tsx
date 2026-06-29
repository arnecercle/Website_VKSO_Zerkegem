import type { Metadata } from "next";
import Link from "next/link";
import { linkPages } from "@/data/links";

export const metadata: Metadata = { title: "Links" };

const CDN = "https://impro.usercontent.one/appid/oneComWsb/domain/vksozerkegem.be/media/vksozerkegem.be/onewebmedia";

export default function LinksPage() {
  return (
    <section className="bg-black py-16" style={{ backgroundColor: "rgba(4,4,4,1)" }}>
      <div className="mx-auto max-w-[1430px] px-4 text-center">
        <div className="mb-8">
          <img
            src={`${CDN}/world-wide-web.jpg`}
            alt="Links"
            className="mx-auto h-auto max-w-md rounded-lg"
          />
        </div>
        <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">
          {linkPages.map((page) => (
            <LinkOrExternal key={page.slug} page={page} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LinkOrExternal({ page }: { page: (typeof linkPages)[number] }) {
  if (page.externalUrl) {
    return (
      <a
        href={page.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-lg bg-white/10 p-6 text-white transition-transform hover:scale-[1.02] hover:bg-white/20"
      >
        <h2 className="font-play text-xl font-bold">{page.title}</h2>
        {page.description && (
          <p className="mt-2 font-archivo text-sm text-white/60">{page.description}</p>
        )}
      </a>
    );
  }

  return (
    <Link
      href={`/links/${page.slug}`}
      className="block rounded-lg bg-white/10 p-6 text-white transition-transform hover:scale-[1.02] hover:bg-white/20"
    >
      <h2 className="font-play text-xl font-bold">{page.title}</h2>
      {page.description && (
        <p className="mt-2 font-archivo text-sm text-white/60">{page.description}</p>
      )}
    </Link>
  );
}
