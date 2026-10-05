import Link from "next/link";
import Sticker from "./components/sticker";

// Jamais indexée : la consigne remplace celle du layout (index, follow)
export const metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
};

// Page 404 aux couleurs du site : le smiley de Lola remplace le 0
export default function NotFound() {
  return (
    <div className="flex min-h-[80svh] w-full flex-col items-center justify-center bg-zinc-50 px-6 pb-24 pt-36 text-center font-[urbanist] text-black">
      <p aria-hidden="true" className="flex items-center font-display text-8xl font-extrabold leading-none text-brand md:text-9xl">
        4
        <Sticker name="smiley" className="mx-1 w-20 -rotate-12 md:w-28" />
        4
      </p>

      <h1 className="mt-8 text-3xl font-extrabold text-brand md:text-4xl">
        <span className="sr-only">Erreur 404 : </span>
        Cette page n’existe pas
      </h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-zinc-700">
        Le lien est peut-être cassé, ou la page a changé d’adresse.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-full border-2 border-brand bg-brand px-6 py-3 font-semibold text-white transition hover:scale-105"
        >
          Retour à l’accueil
        </Link>
        <Link
          href="/projects"
          className="rounded-full border-2 border-brand px-6 py-3 font-semibold text-brand transition hover:bg-brand hover:text-white"
        >
          Voir les projets
        </Link>
      </div>
    </div>
  );
}
