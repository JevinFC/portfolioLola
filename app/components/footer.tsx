import Link from "next/link";
import { contact } from "../data/contact";
import { cgvCompletes } from "../data/cgv";
import { AFFICHER_EMPLACEMENTS } from "./aCompleter";

const lien = "py-1 transition hover:opacity-80";

export default function Footer() {
  return (
    <footer className="w-full bg-brand text-white">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-12 md:flex-row md:items-start md:justify-between md:px-10">

        {/* --- Colonne gauche : nom, contact et réseaux --- */}
        <div className="flex flex-col gap-2">
          <p className="font-display text-3xl font-extrabold tracking-tight">Lola Gauchy</p>
          <p className="text-white/80">Communicante digitale freelance · Tours</p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-3 self-start font-semibold underline decoration-accent decoration-2 underline-offset-4 transition hover:text-accent"
          >
            {contact.email}
          </a>

          {/* Icônes réseaux */}
          <div className="mt-4 flex gap-4 *:transition-transform *:duration-300 *:ease-in-out *:hover:scale-110">

            {/* Instagram */}
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Voir le profil Instagram de Lola Gauchy"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3a3 3 0 110-6zm4.5-3a1 1 0 100 2 1 1 0 000-2z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Voir le profil LinkedIn de Lola Gauchy"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.1C12.2 8.6 14 7.2 16.7 7.2 22 7.2 23 10.8 23 16v8h-4v-7.1c0-2-.04-4.5-2.8-4.5-2.8 0-3.2 2.2-3.2 4.4V24h-4V8z" />
              </svg>
            </a>

          </div>
        </div>

        {/* --- Colonne droite : liens --- */}
        <nav aria-label="Pied de page" className="flex flex-col gap-1 md:text-right">
          <Link href="/projects" className={lien}>Mes projets</Link>
          <Link href="/#tarifs" className={lien}>Mes tarifs</Link>
          <Link href="/about" className={lien}>À propos</Link>
          <a href="/CV_LolaGauchy.pdf" download className={lien}>Télécharger mon CV</a>
          <Link href="/mentions-legales" className={lien}>Mentions légales</Link>
          {/* Lien affiché en production seulement une fois les CGV complètes (data/cgv.ts) */}
          {(cgvCompletes || AFFICHER_EMPLACEMENTS) && <Link href="/cgv" className={lien}>CGV</Link>}
        </nav>
      </div>

      {/* --- Bas de page --- */}
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-[1200px] px-6 py-5 text-sm text-white/70 md:px-10">
          © {new Date().getFullYear()} Lola Gauchy · Développé par{" "}
          <a
            href="https://portfolio.kevinmachado.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition hover:text-white"
          >
            Kévin Machado
          </a>
        </p>
      </div>
    </footer>
  );
}
