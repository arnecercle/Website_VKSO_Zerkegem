import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-6xl font-bold font-play text-gray-900">404</h1>
      <p className="mb-8 text-xl text-gray-600">
        Pagina niet gevonden
      </p>
      <Link
        href="/"
        className="rounded bg-[#040404] px-6 py-3 text-white font-archivo hover:opacity-80 transition-opacity"
      >
        Terug naar home
      </Link>
    </div>
  );
}
