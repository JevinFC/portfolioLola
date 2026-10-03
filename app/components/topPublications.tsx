import type { TopPublications as TopPublicationsData } from "../data/projects";
import FadeUpOnScroll from "./fadeUpOnScroll";

// Icônes des réseaux (lucide-react ne fournit plus les logos de marques)
function IconeReseau({ nom }: { nom: "Instagram" | "Facebook" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 flex-shrink-0" aria-hidden="true">
      {nom === "Instagram" ? (
        <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3a3 3 0 110-6zm4.5-3a1 1 0 100 2 1 1 0 000-2z" />
      ) : (
        <path d="M14 8h3V4h-3c-2.76 0-5 2.24-5 5v2H7v4h2v8h4v-8h3l1-4h-4V9c0-.55.45-1 1-1z" />
      )}
    </svg>
  );
}

// 3100 → « 3,1 k », comme dans les statistiques de Meta
function formatVues(vues: number) {
  if (vues < 1000) return String(vues);
  return `${(vues / 1000).toLocaleString("fr-FR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} k`;
}

// Classement des publications les plus vues, aux couleurs du site.
// Une barre rose par publication, sur la même échelle pour tous les réseaux.
export default function TopPublications({ data }: { data: TopPublicationsData }) {
  const max = Math.max(...data.reseaux.flatMap((reseau) => reseau.publications.map((pub) => pub.vues)));

  return (
    <div className="mt-16">
      <FadeUpOnScroll>
        <h3 className="font-display text-xl font-extrabold text-white md:text-2xl">{data.titre}</h3>
        <p className="mt-2 max-w-2xl leading-relaxed text-white/80">{data.contexte}</p>
      </FadeUpOnScroll>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {data.reseaux.map((reseau, i) => (
          <FadeUpOnScroll key={reseau.nom} delay={i * 120} className="rounded-2xl bg-white/[0.06] p-5 ring-1 ring-white/10 md:p-6">
            <p className="flex items-center gap-2 font-semibold text-white">
              <IconeReseau nom={reseau.nom} />
              {reseau.nom}
              <span className="ml-auto text-sm font-normal text-white/70">vues</span>
            </p>

            <ol className="mt-5 flex flex-col gap-4">
              {reseau.publications.map((pub) => (
                // Colonne des chiffres de largeur fixe : toutes les barres partagent exactement la même échelle
                <li key={pub.titre} className="grid grid-cols-[3.5rem_minmax(0,1fr)_4rem] items-center gap-4">
                  <img src={pub.image} alt="" loading="lazy" className="h-14 w-14 rounded-lg object-cover" />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-snug text-white">{pub.titre}</p>
                    <div aria-hidden="true" className="mt-2 h-2 rounded-r bg-white/10">
                      <div className="h-full rounded-r bg-accent" style={{ width: `${(pub.vues / max) * 100}%` }} />
                    </div>
                  </div>
                  <p className="text-right text-lg font-bold tabular-nums text-white">
                    {formatVues(pub.vues)}
                    <span className="sr-only"> vues</span>
                  </p>
                </li>
              ))}
            </ol>
          </FadeUpOnScroll>
        ))}
      </div>
    </div>
  );
}
