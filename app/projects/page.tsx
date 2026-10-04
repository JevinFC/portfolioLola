import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeUpOnScroll from "../components/fadeUpOnScroll";
import ProjectCover from "../components/projectCover";
import SectionTitle from "../components/sectionTitle";
import CountUp from "../components/countUp";
import { projects } from "../data/projects";

export const metadata = {
  title: "Projets",
  description:
    "Projets de Lola Gauchy : réseaux sociaux, vidéos, print et sites web pour la Halle aux grains, le Pôle des arts Paul Gaudet et Les Chambres en Wrac'h.",
};

// Projets fictifs réalisés en formation (sans étude de cas détaillée)
const autresProjets = [
  {
    titre: "Little Riders",
    texte: "Business game sur une entreprise de fatbikes",
    src: "/photosHome/photosProjects/ProjetLittleriders.webp",
    alt: "Planche de tendance et goodies du projet Little Riders",
  },
  {
    titre: "Formidable",
    texte: "Création visuelle pour la marque Formidable",
    src: "/photosHome/photosProjects/ProjetFormidable.webp",
    alt: "Logo, couleurs, application et affiches de la marque Formidable",
    grand: true, // ← occupe deux rangées en desktop
  },
  {
    titre: "Perrier",
    texte: "Conception d’une application mobile, en formation",
    src: "/photosHome/photosProjects/ProjetPerrier.webp",
    alt: "Maquette de l’application mobile Perrier et ses couleurs",
  },
];

export default function Projects() {
  return (
    <div className="w-full bg-zinc-50 font-[urbanist] text-black">

      {/* EN-TÊTE : la bannière de Lola et une phrase d'intro (le menu reste transparent tant qu'elle est visible) */}
      <section
        id="hero"
        className="flex w-full items-center justify-center bg-brand bg-[url('/photosHome/photosProjects/Banniereweb.webp')] bg-cover bg-center px-6 pb-20 pt-36 md:pb-28 md:pt-44"
      >
        <div className="flex max-w-2xl flex-col items-center text-center text-white">
          <h1 className="rise text-5xl font-extrabold md:text-7xl">Projets</h1>
          <p className="rise mt-6 text-lg leading-relaxed text-white/90 md:text-xl" style={{ animationDelay: "0.15s" }}>
            Trois études de cas, de la stratégie aux résultats chiffrés, et quelques projets réalisés en formation.
          </p>
        </div>
      </section>

      {/* ÉTUDES DE CAS : le visuel et le texte en alternance */}
      {projects.map((project, i) => {
        const chiffre = project.stats?.[0];
        // « Alternance, assistante en communication digitale » → « Alternance »
        const statut = project.fiche?.statut?.split(",")[0];
        const reperes = [project.fiche?.periode, statut].filter(Boolean).join(" · ");

        return (
          <section key={project.slug} className={`w-full py-16 md:py-24 ${i % 2 === 0 ? "bg-zinc-50" : "bg-white"}`}>
            <div
              className={`mx-auto flex max-w-[1200px] flex-col gap-10 px-6 md:px-10 lg:items-center lg:gap-16 ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <FadeUpOnScroll className="w-full lg:w-[52%] lg:flex-shrink-0">
                {/* Le visuel mène aussi à l'étude de cas (doublon du bouton, donc ignoré au clavier) */}
                <Link
                  href={`/projects/${project.slug}`}
                  tabIndex={-1}
                  aria-hidden="true"
                  className="block transition duration-300 hover:-translate-y-1"
                >
                  <ProjectCover items={project.cover} prioritaire={i === 0} />
                </Link>
              </FadeUpOnScroll>

              <FadeUpOnScroll delay={120} className="flex min-w-0 flex-col">
                {reperes && (
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-600">{reperes}</p>
                )}
                <h2 className="mt-3 whitespace-pre-line text-3xl font-extrabold leading-tight text-brand md:text-4xl">
                  {project.title}
                </h2>
                {project.accroche && <p className="mt-4 text-lg leading-relaxed text-zinc-700">{project.accroche}</p>}

                {chiffre && (
                  <p className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-display text-4xl font-extrabold text-accent md:text-5xl">
                      <CountUp target={chiffre.countTarget} prefix={chiffre.prefix} suffix={chiffre.suffix} />
                    </span>
                    <span className="font-semibold text-zinc-800">{chiffre.label}</span>
                  </p>
                )}

                {project.tags && (
                  <ul aria-label="Missions" className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li key={tag} className="rounded-full border border-brand/15 bg-white px-3 py-1 text-sm font-semibold text-brand">
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}

                <Link
                  href={`/projects/${project.slug}`}
                  className="group mt-8 inline-flex items-center gap-2 self-start rounded-full bg-brand px-6 py-3 font-semibold text-white transition hover:scale-105"
                >
                  Voir l’étude de cas
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </FadeUpOnScroll>
            </div>
          </section>
        );
      })}

      {/* AUTRES PROJETS : projets fictifs réalisés en formation */}
      <section className={`w-full py-20 md:py-24 ${projects.length % 2 === 0 ? "bg-zinc-50" : "bg-white"}`}>
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <FadeUpOnScroll>
            <SectionTitle title="Autres projets" sticker="flower" />
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-700">
              Des projets fictifs, réalisés pendant mes formations.
            </p>
          </FadeUpOnScroll>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:grid-rows-[auto_auto]">
            {autresProjets.map((projet, i) => (
              <FadeUpOnScroll
                key={projet.titre}
                delay={i * 100}
                className={`flex flex-col ${projet.grand ? "lg:row-span-2" : ""}`}
              >
                <img
                  src={projet.src}
                  alt={projet.alt}
                  loading="lazy"
                  className={`w-full rounded-2xl object-cover shadow-lg ${projet.grand ? "lg:min-h-0 lg:flex-1" : ""}`}
                />
                <p className="mt-5 self-start rounded-full bg-accent/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-brand">
                  Projet fictif
                </p>
                <h3 className="mt-3 font-display text-xl font-extrabold text-brand md:text-2xl">{projet.titre}</h3>
                <p className="mt-1 text-zinc-600">{projet.texte}</p>
              </FadeUpOnScroll>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
