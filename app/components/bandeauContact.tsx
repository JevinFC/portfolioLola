import Link from "next/link";
import Sticker from "./sticker";

interface BandeauContactProps {
  titre: string; // ← la question, en blanc (ex : « Un projet similaire ? »)
  accent: string; // ← la réponse, en bleu (ex : « Parlons-en. »)
  lien: { href: string; label: string }; // ← second bouton, à côté de « Me contacter »
}

// Bandeau rose de fin de page : une question, la réponse en bleu et deux boutons
export default function BandeauContact({ titre, accent, lien }: BandeauContactProps) {
  return (
    <section className="relative w-full overflow-hidden bg-accent py-16 md:py-20">
      <Sticker name="flower" className="absolute -right-6 -top-6 w-24 rotate-12 opacity-90 md:w-32" />
      <Sticker name="smiley" className="absolute -bottom-6 -left-5 w-20 -rotate-12 opacity-90 md:w-24" />

      {/* Même grille que les sections (1200 px, marges de 80 px) : le texte s'aligne sur les titres au-dessus */}
      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-8 px-6 text-center md:px-20 lg:flex-row lg:justify-between lg:text-left">
        <p className="font-display text-3xl font-extrabold leading-tight text-white md:text-5xl">
          {titre}
          <br />
          <span className="text-brand">{accent}</span>
        </p>
        <div className="flex flex-shrink-0 flex-wrap justify-center gap-3">
          <Link
            href="/#contact"
            className="rounded-full bg-white px-6 py-3 font-semibold text-brand shadow-md transition hover:scale-105"
          >
            Me contacter
          </Link>
          <Link
            href={lien.href}
            className="rounded-full bg-brand px-6 py-3 font-semibold text-white shadow-md transition hover:scale-105"
          >
            {lien.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
