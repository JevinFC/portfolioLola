import Link from "next/link";
import { Check, Plus } from "lucide-react";
import FadeUpOnScroll from "./fadeUpOnScroll";
import SectionTitle from "./sectionTitle";
import Sticker from "./sticker";
import { formules, prestations, type Ligne } from "../data/tarifs";

// Prix en euros, avec des espaces insécables (« 1 390 € ») : l'espace fine du format français
// n'existe pas dans Unbounded et s'afficherait presque collée
const euros = (prix: number) => `${prix.toLocaleString("fr-FR").replace(/ /g, " ")} €`;

// Les marches de l'escalier, de la base au sommet : chacune un peu plus large que la précédente,
// avec un titre et un prix un cran plus grands (pensé pour trois formules)
const marches = [
  // La base : fond clair, coches roses
  {
    carte: "border-2 border-zinc-200 bg-zinc-50 md:mr-[26%]",
    contenu: "p-6 md:px-8 md:py-7",
    titre: "text-2xl text-brand md:text-[1.625rem]",
    prix: "text-[2rem] text-brand md:text-[2.125rem]",
    texte: "text-zinc-600",
    liste: "text-zinc-700",
    fort: "text-zinc-900",
    icone: "text-accent",
  },
  // La formule conseillée : fond rose pâle, avec la fleur de Lola
  {
    carte: "border-2 border-accent/35 bg-accent/15 md:mr-[13%]",
    contenu: "p-6 md:p-[2.125rem]",
    titre: "text-[1.75rem] text-brand md:text-[1.875rem]",
    prix: "text-[2.25rem] text-brand md:text-[2.5rem]",
    texte: "text-zinc-700",
    liste: "text-zinc-800",
    fort: "text-zinc-900",
    icone: "text-brand",
  },
  // Le sommet : aplat bleu et pan de damier rose
  {
    carte: "overflow-hidden bg-brand",
    contenu: "p-7 md:p-[2.375rem]",
    titre: "text-[2rem] text-white md:text-[2.125rem]",
    prix: "text-[2.5rem] text-white md:text-[2.875rem]",
    texte: "text-white/80",
    liste: "text-white/90",
    fort: "text-white",
    icone: "text-accent",
  },
];

// Une ligne de formule, avec sa fin éventuelle en gras
function Texte({ ligne, fort }: { ligne: Ligne; fort: string }) {
  if (typeof ligne === "string") return <>{ligne}</>;
  return (
    <>
      {ligne.texte} <strong className={`font-bold ${fort}`}>{ligne.gras}</strong>
    </>
  );
}

// Section « Mes tarifs » de l'accueil : les abonnements en escalier cumulatif (chaque formule reprend
// la précédente), puis les prestations à la carte. Des prix « à partir de » : le détail est dans le devis
export default function Tarifs() {
  return (
    <section id="tarifs" className="w-full scroll-mt-20 bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-20">
        <FadeUpOnScroll>
          <SectionTitle title="Mes tarifs" sticker="smiley" />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-700">
            Pour vos réseaux sociaux, trois abonnements qui s’emboîtent&nbsp;: chaque formule reprend la précédente et y
            ajoute de quoi aller plus loin. Sans engagement, avec un préavis de 15&nbsp;jours.
          </p>
        </FadeUpOnScroll>

        {/* ESCALIER : les marches glissent l'une après l'autre (classe « marche », voir globals.css) */}
        <ol className="mt-12 flex flex-col gap-4 md:gap-5">
          {formules.map((formule, i) => {
            const marche = marches[Math.min(i, marches.length - 1)];
            const sommet = i === formules.length - 1;
            const Icone = i === 0 ? Check : Plus;
            return (
              <FadeUpOnScroll
                key={formule.nom}
                as="li"
                delay={i * 150}
                className={`marche group relative flex flex-wrap rounded-3xl transition duration-300 hover:-translate-y-1 hover:shadow-xl ${marche.carte}`}
              >
                <div className={`flex min-w-0 flex-[999_1_560px] flex-wrap gap-x-10 gap-y-5 ${marche.contenu}`}>
                  {/* Nom, public visé et prix */}
                  <div className="min-w-0 flex-[1_1_220px]">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className={`font-display font-extrabold ${marche.titre}`}>{formule.nom}</h3>
                      {formule.conseillee && (
                        <span className="rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white transition-transform duration-300 group-hover:-rotate-3">
                          Conseillée
                        </span>
                      )}
                    </div>
                    <p className={`mt-2 text-[0.9375rem] leading-relaxed ${marche.texte}`}>{formule.pourQui}</p>
                    {/* Sur téléphone, « à partir de » passe au-dessus : le prix et « / mois » restent sur la même ligne */}
                    <p className="mt-4 flex flex-wrap items-baseline gap-x-2">
                      <span className={`w-full text-sm font-semibold sm:w-auto ${marche.texte}`}>à partir de</span>
                      <span className={`font-display font-extrabold leading-none ${marche.prix}`}>{euros(formule.prix)}</span>
                      <span className={`font-semibold ${marche.texte}`}>/&nbsp;mois</span>
                    </p>
                  </div>

                  {/* Contenu : la base, puis seulement ce que chaque formule ajoute (les « + » tournent au survol) */}
                  <div className="min-w-0 flex-[1.4_1_260px]">
                    <p className={`text-[0.9375rem] font-bold ${marche.fort}`}>
                      {i === 0 ? <>La base&nbsp;:</> : <>Tout {formules[i - 1].nom}, et en plus&nbsp;:</>}
                    </p>
                    <ul className={`mt-3 flex flex-col gap-2.5 font-medium leading-snug ${marche.liste}`}>
                      {formule.inclus.map((ligne) => (
                        <li key={typeof ligne === "string" ? ligne : ligne.gras} className="flex items-start gap-3">
                          <Icone
                            className={`mt-px h-5 w-5 flex-shrink-0 transition-transform duration-300 ${marche.icone} ${
                              i > 0 ? "group-hover:rotate-90" : ""
                            }`}
                            aria-hidden="true"
                          />
                          <span>
                            <Texte ligne={ligne} fort={marche.fort} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Au sommet, un pan du damier rose de Lola, qui s'approche au survol */}
                {sommet && (
                  <div aria-hidden="true" className="relative min-h-[120px] flex-[1_1_140px] overflow-hidden">
                    <div className="absolute inset-0 bg-accent bg-[url('/stickers/damier-rose.svg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
                  </div>
                )}

                {/* Sur la formule conseillée, la fleur de Lola flotte */}
                {formule.conseillee && (
                  <div className="absolute -right-2 -top-7 w-14 md:-right-6 md:w-16">
                    <div className="float">
                      <Sticker name="flower" className="w-full rotate-[14deg]" />
                    </div>
                  </div>
                )}
              </FadeUpOnScroll>
            );
          })}
        </ol>

        {/* À LA CARTE : l'audit en premier, comme porte d'entrée */}
        <FadeUpOnScroll className="mt-20">
          <h3 className="font-display text-2xl font-extrabold text-brand md:text-3xl">À la carte</h3>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-zinc-700">
            Pour un besoin ponctuel, ou pour faire le point avant de vous lancer.
          </p>
        </FadeUpOnScroll>
        <ul className="mt-8 grid gap-x-12 md:grid-cols-2">
          {prestations.map((prestation, i) => (
            <FadeUpOnScroll
              key={prestation.nom}
              as="li"
              delay={(i % 2) * 100}
              className="flex items-start justify-between gap-6 border-b border-zinc-200 py-5"
            >
              <div className="min-w-0">
                <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-lg font-bold text-zinc-900">
                  {prestation.nom}
                  {prestation.pourCommencer && (
                    <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-bold uppercase tracking-[0.1em] text-brand">
                      Pour commencer
                    </span>
                  )}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-zinc-600">{prestation.detail}</p>
              </div>
              <p className="flex-shrink-0 text-right">
                <span className="block text-xs font-semibold text-zinc-600">à partir de</span>
                <span className="font-display text-xl font-extrabold text-brand">{euros(prestation.prix)}</span>
              </p>
            </FadeUpOnScroll>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-600">
            TVA non applicable, article 293&nbsp;B du CGI&nbsp;: pas de taxe en plus. Chaque projet fait l’objet d’un
            devis détaillé, ajusté à vos besoins.
          </p>
          <Link
            href="/#contact"
            className="flex-shrink-0 self-start rounded-full bg-brand px-6 py-3 font-semibold text-white transition hover:scale-105 md:self-auto"
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </section>
  );
}
