import Link from "next/link";
import { Clapperboard, Globe, Megaphone, Palette } from "lucide-react";
import FadeUpOnScroll from "./fadeUpOnScroll";
import SectionTitle from "./sectionTitle";

// Services de Lola, chacun relié à un projet qui en est l'exemple.
// Hiérarchie conseillée par l'étude de marché (octobre 2026) : au cœur, les réseaux sociaux et la vidéo ;
// en complément, le print événementiel et le web (pour un nouveau site, avec un développeur partenaire)
const coeur = [
  {
    icon: Megaphone,
    title: "Réseaux sociaux",
    text: "Stratégie, calendrier, visuels, stories, modération et bilan chaque mois, pour toucher de nouveaux publics.",
    href: "/projects/halle-aux-grains",
    example: "Halle aux grains",
  },
  {
    icon: Clapperboard,
    title: "Vidéo",
    text: "Capsules, reels et teasers tournés sur place, montés et sous-titrés. C’est ma signature.",
    href: "/videos/scene-nationale-chatodo",
    example: "capsule Chato'do",
  },
];

const complements = [
  {
    icon: Palette,
    title: "Print événementiel",
    text: "Affiches, flyers, programmes et feuilles de salle, déclinés pour vos réseaux.",
    href: "/projects/pole-des-arts",
    example: "Pôle des arts",
  },
  {
    icon: Globe,
    title: "Web",
    text: "Textes, référencement et mise à jour de votre site. Pour en créer un nouveau, je travaille avec un développeur partenaire.",
    href: "/projects/chambres-en-wrach",
    example: "Chambres en Wrac'h",
  },
];

// Lien vers le projet qui sert d'exemple, avec sa flèche qui avance au survol de la carte.
// Sa zone cliquable (::after) recouvre toute la carte : on clique n'importe où, mais il reste
// un seul lien, lu « Exemple : … » par les lecteurs d'écran et atteint en une tabulation
function Exemple({ href, example, onDark = false }: { href: string; example: string; onDark?: boolean }) {
  return (
    <Link
      href={href}
      className={`mt-auto pt-6 text-sm font-semibold outline-none after:absolute after:inset-0 after:rounded-2xl group-hover:underline ${
        onDark ? "text-white" : "text-brand"
      }`}
    >
      Exemple&nbsp;: {example}{" "}
      <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}

// Section « Ce que je fais » sur aplat bleu : le cœur de métier en grand, les compléments plus discrets
export default function Services() {
  return (
    <section id="expertise" className="w-full bg-brand py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-20">
        <FadeUpOnScroll>
          <SectionTitle title="Ce que je fais" sticker="flower" onDark />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            Mon cœur de métier&nbsp;: vos réseaux sociaux et vos vidéos. Le print et le web viennent en complément, pour
            que tous vos supports racontent la même histoire.
          </p>
        </FadeUpOnScroll>

        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {coeur.map(({ icon: Icon, title, text, href, example }, i) => (
            <FadeUpOnScroll
              key={title}
              as="li"
              delay={i * 90}
              className="group relative flex flex-col rounded-2xl bg-white p-7 shadow-lg transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl has-[a:focus-visible]:ring-4 has-[a:focus-visible]:ring-accent md:p-9"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-extrabold text-brand">{title}</h3>
              <p className="mt-3 text-lg font-medium leading-relaxed text-zinc-700">{text}</p>
              <Exemple href={href} example={example} />
            </FadeUpOnScroll>
          ))}
        </ul>

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.15em] text-white/75">En complément</p>
        <ul className="mt-4 grid gap-4 md:grid-cols-2">
          {complements.map(({ icon: Icon, title, text, href, example }, i) => (
            <FadeUpOnScroll
              key={title}
              as="li"
              delay={i * 90}
              className="group relative flex flex-col rounded-2xl border border-white/25 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/10 has-[a:focus-visible]:ring-4 has-[a:focus-visible]:ring-accent"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-transform duration-300 group-hover:-rotate-12">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg font-extrabold text-white">{title}</h3>
              </div>
              <p className="mt-3 font-medium leading-relaxed text-white/85">{text}</p>
              <Exemple href={href} example={example} onDark />
            </FadeUpOnScroll>
          ))}
        </ul>
      </div>
    </section>
  );
}
