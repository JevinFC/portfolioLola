import Link from "next/link";
import { notFound } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  CalendarDays,
  ChevronDown,
  Flag,
  Sparkles,
  Target,
  Users,
  Wrench,
} from "lucide-react";
import { projects, type Fiche } from "../../data/projects";
import { temoignages } from "../../data/temoignages";
import FadeUpOnScroll from "../../components/fadeUpOnScroll";
import CountUp from "../../components/countUp";
import Carousel from "../../components/carrousel";
import ProjectCover from "../../components/projectCover";
import SectionTitle from "../../components/sectionTitle";
import Sticker from "../../components/sticker";
import TopPublications from "../../components/topPublications";
import BandeauContact from "../../components/bandeauContact";
import ACompleter, { AFFICHER_EMPLACEMENTS } from "../../components/aCompleter";


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  return {
    title: project?.title.replace("\n", " ") ?? "Projet",
    description: project?.description.split("\n")[0] ?? "",
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Lignes de la fiche projet, dans l'ordre d'affichage
const ficheLignes: { key: keyof Fiche; label: string; icon: LucideIcon }[] = [
  { key: "periode", label: "Période", icon: CalendarDays },
  { key: "statut", label: "Statut", icon: Briefcase },
  { key: "equipe", label: "Équipe", icon: Users },
  { key: "outils", label: "Outils", icon: Wrench },
];

// Colonnes d'une grille de cartes : 2 côte à côte dès la tablette, 3 seulement sur grand écran (jamais une carte seule sur sa ligne)
const colonnes = (count: number) => (count === 2 ? "md:grid-cols-2" : count >= 3 ? "lg:grid-cols-3" : "");

// Étude de cas : objectif → actions → résultats en grand → visuels → projet suivant
export default async function IndivProject({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const n = index + 1; // ← numéro du projet dans le questionnaire de Lola
  const suivant = projects[(index + 1) % projects.length];
  const visuelSuivant = suivant.cover.find((c) => c.src);
  const avis = temoignages.find((t) => t.projet === slug);

  const ficheVisible = ficheLignes.filter(({ key }) => project.fiche?.[key] || AFFICHER_EMPLACEMENTS);
  const contexte = [
    {
      icon: Flag,
      titre: "Le point de départ",
      texte: project.depart,
      question: `${n}.2`,
      aide: "La situation à l’arrivée de Lola, en une ou deux phrases.",
    },
    {
      icon: Target,
      titre: "L’objectif",
      texte: project.objectif,
      question: `${n}.3`,
      aide: "Ce qu’on attendait d’elle.",
    },
  ].filter((carte) => carte.texte || AFFICHER_EMPLACEMENTS);
  const stats = project.stats ?? [];
  const partisPris = project.partisPris ?? [];
  const preuves = project.preuves ?? [];
  const resultats = stats.length > 0 || project.resultat || preuves.length > 0 || AFFICHER_EMPLACEMENTS;

  // Captures des statistiques, avec leur légende
  const listePreuves = (
    <ul
      className={`grid gap-6 ${
        preuves.length === 1 ? "max-w-2xl" : preuves.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {preuves.map((preuve, i) => (
        <FadeUpOnScroll key={preuve.src} as="li" delay={i * 100}>
          <figure className="overflow-hidden rounded-xl bg-white p-2 shadow-lg">
            <img src={preuve.src} alt={preuve.alt} loading="lazy" className="w-full rounded-lg" />
            {preuve.legende && (
              <figcaption className="px-2 pb-1 pt-3 text-sm font-semibold text-zinc-700">{preuve.legende}</figcaption>
            )}
          </figure>
        </FadeUpOnScroll>
      ))}
    </ul>
  );

  return (
    <div className="w-full bg-zinc-50 font-[urbanist] text-black">

      {/* EN-TÊTE : le projet, sa fiche et les visuels réalisés */}
      <section className="w-full overflow-x-clip border-b border-zinc-200 bg-white pb-16 pt-32 md:pb-20 md:pt-36">
        {/* Côte à côte seulement sur grand écran : sur tablette, la colonne de texte serait trop étroite */}
        <div className="mx-auto flex max-w-[1100px] flex-col gap-12 px-6 md:px-10 lg:flex-row lg:gap-16">
          <div className="min-w-0 max-w-2xl flex-1 lg:max-w-none">
            <p className="rise mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-zinc-600">
              Étude de cas · {n}/{projects.length}
            </p>
            <h1
              className="rise mb-6 whitespace-pre-line text-3xl font-extrabold leading-tight text-brand md:text-4xl"
              style={{ animationDelay: "0.1s" }}
            >
              {project.title}
            </h1>
            <p className="rise whitespace-pre-line leading-relaxed text-zinc-700" style={{ animationDelay: "0.2s" }}>
              {project.description}
            </p>

            {/* Fiche projet : le cadre de la mission */}
            {ficheVisible.length > 0 && (
              <dl
                className="rise mt-8 grid grid-cols-2 gap-x-6 gap-y-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-5"
                style={{ animationDelay: "0.3s" }}
              >
                {ficheVisible.map(({ key, label, icon: Icon }) => (
                  <div key={key} className="min-w-0">
                    <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      <Icon className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                      {label}
                    </dt>
                    <dd className="mt-1 font-semibold text-zinc-900">
                      {project.fiche?.[key] || (
                        <span className="inline-block whitespace-nowrap rounded-md border border-dashed border-accent/60 px-2 py-0.5 text-xs font-semibold text-accent">
                          À compléter · {n}.1
                        </span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            )}

            <a
              href={project.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rise mt-8 inline-flex items-center gap-2 rounded-full border-2 border-brand px-5 py-3 font-semibold text-brand transition hover:bg-brand hover:text-white"
              style={{ animationDelay: "0.4s" }}
            >
              Voir le site internet
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">(nouvel onglet)</span>
            </a>
          </div>

          {/* Sur grand écran, les visuels occupent toute la hauteur de la colonne de texte, de l'intitulé au bouton */}
          <div className="pop-in relative w-full max-w-2xl lg:w-[460px] lg:max-w-none lg:flex-shrink-0" style={{ animationDelay: "0.25s" }}>
            <ProjectCover items={project.cover} pleineHauteur prioritaire className="lg:absolute lg:inset-0" />
          </div>
        </div>
      </section>

      {/* CONTEXTE : le point de départ et l'objectif */}
      {contexte.length > 0 && (
        <section className="w-full bg-zinc-50 py-20 md:py-24">
          <div className="mx-auto max-w-[1100px] px-6 md:px-10">
            <FadeUpOnScroll>
              <SectionTitle title="Le contexte" sticker="smiley" />
            </FadeUpOnScroll>
            <div className={`mt-10 grid gap-6 ${colonnes(contexte.length)}`}>
              {contexte.map(({ icon: Icon, titre, texte, question, aide }, i) => (
                <FadeUpOnScroll
                  key={titre}
                  delay={i * 120}
                  className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm md:p-8"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-extrabold text-brand">{titre}</h3>
                  {texte ? (
                    <p className="mt-3 text-lg leading-relaxed text-zinc-800">{texte}</p>
                  ) : (
                    <ACompleter question={question} className="mt-4">
                      {aide}
                    </ACompleter>
                  )}
                </FadeUpOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ACTIONS : les missions, puis les partis pris de Lola */}
      <section className="w-full bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <FadeUpOnScroll>
            <SectionTitle title="Ce que j’ai fait" sticker="flower" />
          </FadeUpOnScroll>
          <ol className={`mt-10 grid gap-6 ${colonnes(project.sections.length)}`}>
            {project.sections.map((section, i) => (
              <FadeUpOnScroll
                key={section.title}
                as="li"
                delay={i * 100}
                className="flex flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-7"
              >
                <h3 className="font-display text-lg font-extrabold text-brand">{section.title}</h3>
                {section.objective && <p className="mt-2 text-sm italic text-zinc-600">Objectif : {section.objective}</p>}
                <ul className="mt-4 flex flex-col gap-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-medium text-zinc-700">
                      <span aria-hidden="true" className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeUpOnScroll>
            ))}
          </ol>

          {/* Partis pris : ce qui montre la patte de Lola */}
          {(partisPris.length > 0 || AFFICHER_EMPLACEMENTS) && (
            <div className="mt-16">
              <FadeUpOnScroll>
                <h3 className="font-display text-2xl font-extrabold text-brand md:text-3xl">
                  {partisPris.length === 1 ? "Mon parti pris" : "Mes partis pris"}
                </h3>
              </FadeUpOnScroll>
              {partisPris.length > 0 ? (
                <ul
                  className={`mt-8 grid gap-6 ${
                    partisPris.length > 1 ? colonnes(partisPris.length) : partisPris[0].visuels ? "" : "max-w-2xl"
                  }`}
                >
                  {partisPris.map((parti, i) => (
                    <FadeUpOnScroll
                      key={parti.title}
                      as="li"
                      delay={i * 100}
                      className={parti.visuels ? "grid items-center gap-6 lg:grid-cols-2" : "flex"}
                    >
                      <div className="flex w-full flex-col rounded-2xl bg-brand p-6 text-white md:p-7">
                        <Sparkles className="h-7 w-7 text-accent" aria-hidden="true" />
                        <h4 className="mt-4 font-display text-lg font-extrabold">{parti.title}</h4>
                        <p className="mt-2 leading-relaxed text-white/85">{parti.text}</p>
                        {parti.lien && (
                          <Link
                            href={parti.lien.href}
                            className="group mt-5 inline-flex items-center gap-2 self-start font-semibold text-white underline decoration-accent decoration-2 underline-offset-4 transition hover:text-accent"
                          >
                            {parti.lien.label}
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                          </Link>
                        )}
                      </div>

                      {/* Images qui illustrent ce choix (ex : extraits du feed Instagram) */}
                      {parti.visuels && (
                        <figure>
                          <div className={`grid gap-4 ${parti.visuels.length > 1 ? "grid-cols-2" : ""}`}>
                            {parti.visuels.map((visuel) => (
                              <img
                                key={visuel.src}
                                src={visuel.src}
                                alt={visuel.alt}
                                loading="lazy"
                                className="w-full rounded-2xl border border-zinc-200 shadow-md"
                              />
                            ))}
                          </div>
                          {parti.legende && (
                            <figcaption className="mt-3 text-center text-sm text-zinc-500">{parti.legende}</figcaption>
                          )}
                        </figure>
                      )}
                    </FadeUpOnScroll>
                  ))}
                </ul>
              ) : (
                <ACompleter question={`${n}.4`} className="mt-6">
                  Les 2 ou 3 choix dont Lola est fière : un format, une idée, une façon de faire. Chacun avec un titre
                  court et une ou deux phrases.
                </ACompleter>
              )}
            </div>
          )}
        </div>
      </section>

      {/* RÉSULTATS : les chiffres en grand, sur aplat bleu */}
      {resultats && (
        <section className="relative w-full overflow-hidden bg-brand py-20 md:py-24">
          <Sticker name="flower" className="absolute -right-8 -top-8 w-28 rotate-12 opacity-90 md:w-36" />
          <div className="relative mx-auto max-w-[1100px] px-6 md:px-10">
            <FadeUpOnScroll>
              <SectionTitle title="Les résultats" onDark />
            </FadeUpOnScroll>

            {stats.length > 0 ? (
              <ul className={`mt-12 grid gap-12 ${stats.length > 1 ? "sm:grid-cols-2" : ""}`}>
                {stats.map((stat, i) => (
                  <FadeUpOnScroll key={stat.label} as="li" delay={i * 120} className="border-t-2 border-white/20 pt-6">
                    <p className="font-display text-5xl font-extrabold leading-none text-accent md:text-7xl">
                      <CountUp target={stat.countTarget} prefix={stat.prefix} suffix={stat.suffix} />
                    </p>
                    <p className="mt-4 text-lg font-semibold text-white">{stat.label}</p>
                    {stat.detail ? (
                      <p className="mt-2 leading-relaxed text-white/80">{stat.detail}</p>
                    ) : (
                      <ACompleter question={`${n}.5`} onDark className="mt-4">
                        Le point de départ et la période de ce chiffre.
                      </ACompleter>
                    )}
                  </FadeUpOnScroll>
                ))}
              </ul>
            ) : (
              <ACompleter question={`${n}.5`} onDark className="mt-10">
                Aucun chiffre pour l’instant : réservations venues du site, visites, position sur Google ou délai de
                réalisation.
              </ACompleter>
            )}

            {project.resultat ? (
              <FadeUpOnScroll>
                <p className="mt-14 max-w-3xl font-display text-xl font-extrabold leading-snug text-white md:text-2xl">
                  {project.resultat}
                </p>
              </FadeUpOnScroll>
            ) : (
              <ACompleter question={`${n}.5`} onDark className="mt-10">
                Un résultat concret en une phrase : un événement complet, un retour du client…
              </ACompleter>
            )}

            {/* Classement des publications les plus vues, recréé aux couleurs du site */}
            {project.topPublications && <TopPublications data={project.topPublications} />}

            {/* Captures d'origine : repliées quand le classement les reprend déjà, pour garder la preuve sans l'imposer */}
            {preuves.length > 0 ? (
              project.topPublications ? (
                <details className="group mt-8">
                  <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded text-sm font-semibold text-white/85 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white [&::-webkit-details-marker]:hidden">
                    Voir les captures d’origine
                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <div className="mt-6">{listePreuves}</div>
                </details>
              ) : (
                <div className="mt-12">{listePreuves}</div>
              )
            ) : (
              !project.preuves && (
                <ACompleter question={`${n}.6`} onDark className="mt-6">
                  Les captures envoyées à part : statistiques et publications qui ont le mieux marché, avec leurs
                  chiffres.
                </ACompleter>
              )
            )}
          </div>
        </section>
      )}

      {/* AVIS DU CLIENT : repris de data/temoignages.ts quand il est relié à ce projet */}
      {avis && (
        <section className="w-full bg-zinc-50 py-20 md:py-24">
          <div className="mx-auto max-w-[1100px] px-6 md:px-10">
            <FadeUpOnScroll>
              <figure className="relative mx-auto w-full max-w-4xl rounded-3xl bg-white p-8 pt-12 shadow-xl md:p-12 md:pt-14">
                <span aria-hidden="true" className="absolute -top-8 left-8 font-display text-8xl leading-none text-accent md:left-12">
                  “
                </span>
                <blockquote className="text-lg leading-relaxed text-zinc-800 md:text-2xl">{avis.text}</blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <img src={avis.photo} alt="" loading="lazy" className="h-14 w-14 rounded-full object-cover ring-4 ring-accent/30" />
                  <span className="flex flex-col">
                    <span className="font-semibold text-zinc-900">{avis.name}</span>
                    <span className="text-sm text-zinc-600">{avis.role}</span>
                  </span>
                </figcaption>
              </figure>
            </FadeUpOnScroll>
          </div>
        </section>
      )}

      {/* VISUELS */}
      {project.imagesCarrousel && project.imagesCarrousel.length > 0 && (
        <section className="w-full bg-zinc-100 pb-12 pt-20 md:pt-24">
          <div className="mx-auto max-w-[1100px] px-4 md:px-10">
            <FadeUpOnScroll>
              <SectionTitle title="En images" sticker="smiley" />
            </FadeUpOnScroll>
          </div>
          <Carousel images={project.imagesCarrousel} />
        </section>
      )}

      {/* PROJET SUIVANT */}
      <section className="w-full bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <FadeUpOnScroll>
            <Link
              href={`/projects/${suivant.slug}`}
              className="group grid items-center gap-8 rounded-3xl border border-zinc-200 bg-zinc-50 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl md:grid-cols-[minmax(0,1fr)_minmax(0,420px)] md:p-10"
            >
              <span className="flex flex-col">
                <span className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-600">Projet suivant</span>
                <span className="mt-3 whitespace-pre-line font-display text-2xl font-extrabold leading-tight text-brand md:text-4xl">
                  {suivant.title}
                </span>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-brand">
                  Voir l’étude de cas
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </span>
              {visuelSuivant?.src && (
                <span className="block aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-200">
                  <img
                    src={visuelSuivant.src}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    style={visuelSuivant.position ? { objectPosition: visuelSuivant.position } : undefined}
                  />
                </span>
              )}
            </Link>
          </FadeUpOnScroll>
        </div>
      </section>

      {/* APPEL À L'ACTION FINAL : bandeau rose */}
      <BandeauContact
        titre={"Un projet similaire ?"}
        accent="Parlons-en."
        lien={{ href: "/projects", label: "Tous les projets" }}
      />

    </div>
  );
}
