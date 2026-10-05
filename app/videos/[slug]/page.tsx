import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import videos from "../../videodata";
import { projects } from "../../data/projects";
import FadeUpOnScroll from "../../components/fadeUpOnScroll";
import SectionTitle from "../../components/sectionTitle";
import BandeauContact from "../../components/bandeauContact";
import JsonLd from "../../components/jsonLd";
import { filAriane, objetVideo } from "../../lib/schema";

// Une page générée à l'avance par vidéo : titre et description dans le <head>, sans rendu à la demande
export function generateStaticParams() {
  return videos.map((v) => ({ slug: v.slug }));
}
export const dynamicParams = false;

// Nom court d'un projet : la première ligne de son titre (ex : « Halle aux grains »)
const nomProjet = (slug?: string) => projects.find((p) => p.slug === slug)?.title.split("\n")[0];

export default async function VideoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = videos.findIndex((v) => v.slug === slug);
  if (index === -1) notFound();

  const video = videos[index];
  const projet = nomProjet(video.projet);
  // Les 3 vidéos suivantes (en boucle), pour continuer la visite
  const suivantes = [1, 2, 3].map((k) => videos[(index + k) % videos.length]);

  return (
    <div className="w-full bg-zinc-50 font-[urbanist] text-black">
      {/* Données structurées : la vidéo (résultats vidéo de Google) et le fil d'Ariane */}
      <JsonLd data={objetVideo(video)} />
      <JsonLd
        data={filAriane([
          { nom: "Accueil", chemin: "/" },
          { nom: "Projets", chemin: "/projects" },
          ...(projet ? [{ nom: projet, chemin: `/projects/${video.projet}` }] : []),
          { nom: video.title, chemin: `/videos/${video.slug}` },
        ])}
      />

      {/* LA VIDÉO, avec son contexte */}
      <section className="w-full bg-white pb-16 pt-32 md:pb-20 md:pt-36">
        <div className="mx-auto max-w-[1000px] px-6 md:px-10">
          <p className="rise text-sm font-semibold uppercase tracking-[0.15em] text-zinc-600">
            Vidéo{projet ? ` · ${projet}` : ""}
          </p>
          <h1
            className="rise mt-3 text-3xl font-extrabold leading-tight text-brand md:text-5xl"
            style={{ animationDelay: "0.1s" }}
          >
            {video.title}
          </h1>
          <p className="rise mt-4 max-w-2xl text-lg leading-relaxed text-zinc-700" style={{ animationDelay: "0.2s" }}>
            {video.description}
          </p>

          <div className="pop-in mt-10 overflow-hidden rounded-2xl bg-black shadow-xl" style={{ animationDelay: "0.25s" }}>
            <video controls preload="metadata" poster={video.poster} className="aspect-video w-full bg-black">
              <source src={video.url} type="video/mp4" />
            </video>
          </div>

          {projet && (
            <Link
              href={`/projects/${video.projet}`}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-white transition hover:scale-105"
            >
              Voir l’étude de cas
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          )}
        </div>
      </section>

      {/* D'AUTRES VIDÉOS */}
      <section className="w-full bg-zinc-50 py-20 md:py-24">
        <div className="mx-auto max-w-[1000px] px-6 md:px-10">
          <FadeUpOnScroll>
            <SectionTitle title="D’autres vidéos" sticker="smiley" />
          </FadeUpOnScroll>

          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {suivantes.map((autre, i) => (
              <FadeUpOnScroll key={autre.slug} as="li" delay={i * 90}>
                <Link
                  href={`/videos/${autre.slug}`}
                  className="group block h-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="relative block aspect-video overflow-hidden bg-zinc-200">
                    <img
                      src={autre.poster}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/45">
                      <svg viewBox="0 0 24 24" fill="white" className="ml-0.5 h-5 w-5" aria-hidden="true">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </span>
                  <span className="block p-5">
                    <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">
                      {nomProjet(autre.projet)}
                    </span>
                    <span className="mt-1 block font-semibold text-zinc-900">{autre.title}</span>
                  </span>
                </Link>
              </FadeUpOnScroll>
            ))}
          </ul>
        </div>
      </section>

      {/* APPEL À L'ACTION FINAL : bandeau rose */}
      <BandeauContact
        titre={"Un projet vidéo ?"}
        accent="Parlons-en."
        lien={{ href: "/projects", label: "Tous les projets" }}
      />

    </div>
  );
}
