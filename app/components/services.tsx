import Link from "next/link";
import { Clapperboard, Globe, Megaphone, Palette } from "lucide-react";
import FadeUpOnScroll from "./fadeUpOnScroll";
import SectionTitle from "./sectionTitle";

// Services de Lola (ses mots), chacun relié à un projet qui en est l'exemple
const services = [
  {
    icon: Megaphone,
    title: "Réseaux sociaux",
    text: "Stratégie éditoriale, planification, publication, modération et animation de communauté.",
    href: "/projects/halle-aux-grains",
    example: "Halle aux grains",
  },
  {
    icon: Clapperboard,
    title: "Contenus & vidéo",
    text: "Visuels, vidéos courtes, stories, carrousels, montages et newsletters.",
    href: "/videos/video-2",
    example: "capsule Chato'do",
  },
  {
    icon: Palette,
    title: "Print & identité",
    text: "Flyers, affiches, brochures, supports événementiels et charte graphique.",
    href: "/projects/pole-des-arts",
    example: "Pôle des arts",
  },
  {
    icon: Globe,
    title: "Web & SEO",
    text: "Création de sites, référencement naturel, optimisation UX et content marketing.",
    href: "/projects/chambres-en-wrach",
    example: "Chambres en Wrac'h",
  },
];

// Section « Ce que je fais » sur aplat bleu
export default function Services() {
  return (
    <section id="expertise" className="w-full bg-brand py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-20">
        <FadeUpOnScroll>
          <SectionTitle title="Ce que je fais" sticker="flower" onDark />
        </FadeUpOnScroll>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, text, href, example }, i) => (
            <FadeUpOnScroll
              key={title}
              as="li"
              delay={i * 90}
              className="group flex flex-col rounded-2xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-extrabold text-brand">{title}</h3>
              <p className="mt-2 font-medium leading-relaxed text-zinc-700">{text}</p>
              <Link href={href} className="mt-auto pt-6 text-sm font-semibold text-brand hover:underline">
                Exemple : {example}{" "}
                <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </FadeUpOnScroll>
          ))}
        </ul>
      </div>
    </section>
  );
}
