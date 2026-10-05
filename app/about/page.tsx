import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  ChartLine,
  Clapperboard,
  Clock,
  Compass,
  Download,
  Drama,
  Eye,
  Gem,
  MapPin,
  PenLine,
  Smartphone,
  Target,
  Telescope,
  Users,
} from "lucide-react";
import Faq from "../components/faq";
import HeroVisual from "../components/heroVisual";
import SectionTitle from "../components/sectionTitle";
import BandeauContact from "../components/bandeauContact";
import AnimatedWords from "../components/animatedWords";
import FadeUpOnScroll from "../components/fadeUpOnScroll";
import { projects } from "../data/projects";

// Expériences dans l'ordre chronologique (les projets sont rangés du plus récent au plus ancien)
const experiences = [...projects].reverse();

export const metadata = {
  title: "À propos",
  description:
    "Lola Gauchy, communicante digitale à Tours : parcours, formations en marketing digital et compétences en création de contenu, réseaux sociaux et stratégie.",
};

// Repères affichés sous l'introduction
const reperes = [
  { icon: MapPin, label: "Basée à Tours" },
  { icon: Briefcase, label: "Freelance" },
  { icon: Drama, label: "Secteur culturel" },
];

// Formations, dans l'ordre chronologique
const formations = [
  {
    title: "BTS Communication",
    school: "Pôle Supérieur Lycée Sainte-Marguerite",
    img: "/photosHome/BTSCommunication.webp",
    alt: "Décor de la remise des diplômes du BTS Communication",
  },
  {
    title: "Bachelor Communication",
    school: "ESG Tours",
    img: "/photosHome/ESGTours.webp",
    alt: "Étudiants et supports de cours à l’ESG Tours",
  },
  {
    title: "Master Marketing Digital",
    school: "Excelia Campus de Tours",
    img: "/photosHome/ExceliaTours.webp",
    alt: "Hall du campus Excelia à Tours",
    note: "Diplômée · Bac +5",
  },
];

// Ce que Lola apporte à un projet (ses mots, découpés en titre + précision)
const apports = [
  { icon: Eye, title: "Visibilité", text: "Grâce à des contenus cohérents et adaptés à vos objectifs." },
  { icon: Clock, title: "Gain de temps", text: "Grâce à une gestion optimisée de vos réseaux." },
  { icon: Gem, title: "Image de marque renforcée", text: "Avec une identité digitale claire." },
  { icon: Users, title: "Communauté engagée", text: "Grâce à des contenus créatifs et pertinents." },
  { icon: Target, title: "Stratégie solide", text: "Pour développer votre présence en ligne." },
];

const competences = [
  { icon: Compass, title: "Stratégie de communication digitale", text: "Analyse, recommandations, positionnement." },
  { icon: Clapperboard, title: "Création de contenus", text: "Visuels, vidéos courtes, stories, carrousels, montages." },
  { icon: Smartphone, title: "Gestion des réseaux sociaux", text: "Planification, publication, modération, animation." },
  { icon: PenLine, title: "Rédaction & storytelling", text: "Articles, posts, accroches, newsletters." },
  { icon: ChartLine, title: "Analyse et reporting", text: "KPIs, tableaux de bord, insights, optimisations." },
  { icon: Telescope, title: "Veille et tendances", text: "Identification des formats pertinents." },
];

export default function About() {
  return (
    <div className="flex flex-col text-black font-[urbanist] bg-zinc-50">

      {/* HERO : texte + visuel en calques (version rose) */}
      <section className="flex flex-col lg:flex-row-reverse items-center justify-center gap-14 lg:gap-20 xl:gap-24 px-6 md:px-12 lg:px-20 pt-32 pb-20 lg:pt-36 lg:pb-24 overflow-x-clip">
        <div className="flex flex-col items-center lg:items-start max-w-2xl text-center lg:text-left">
          <p className="rise text-sm md:text-base font-semibold uppercase tracking-[0.15em] text-zinc-600 mb-4">
            Qui suis-je&nbsp;?
          </p>

          <h1 className="text-brand text-[1.6rem] sm:text-3xl xl:text-4xl leading-[1.15] font-extrabold mb-6">
            <AnimatedWords text="Je suis Lola, communicante digitale à Tours," accent="créative dans l’âme et passionnée." delay={0.15} />
          </h1>

          <p className="rise text-base md:text-lg leading-relaxed text-zinc-800 mb-4" style={{ animationDelay: "0.7s" }}>
            Après cinq ans d’expérience à construire des stratégies, créer des contenus et animer des communautés
            dans divers secteurs et notamment culturel, j’ai choisi le freelancing pour accompagner ceux qui veulent
            faire la différence sur les réseaux sociaux.
          </p>
          <p className="rise text-base md:text-lg leading-relaxed text-zinc-800 mb-8" style={{ animationDelay: "0.8s" }}>
            J’imagine des contenus qui captent l’attention, des messages qui marquent et des stratégies qui fonctionnent.
          </p>

          <ul className="rise flex flex-wrap justify-center lg:justify-start gap-2 mb-8" style={{ animationDelay: "0.9s" }}>
            {reperes.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 rounded-full border border-brand/15 bg-white px-4 py-2 text-sm font-semibold text-brand shadow-sm"
              >
                <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>

          <div className="rise flex flex-wrap justify-center lg:justify-start gap-3" style={{ animationDelay: "1s" }}>
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full border-2 border-brand bg-brand text-white font-semibold hover:scale-105 transition"
            >
              Me contacter
            </Link>
            <a
              href="/CV_LolaGauchy.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-brand text-brand font-semibold hover:bg-brand hover:text-white transition"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Télécharger mon CV
            </a>
          </div>
        </div>

        <div className="flex justify-center w-full lg:w-auto flex-shrink-0">
          <HeroVisual variant="rose" />
        </div>
      </section>

      {/* PARCOURS : frise des formations */}
      <section className="w-full bg-white py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <FadeUpOnScroll><SectionTitle title="Mon parcours" sticker="smiley" /></FadeUpOnScroll>
          <p className="mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-zinc-700">
            J’ai découvert la communication pendant mes études, à travers des stages et des alternances, dans des environnements
            variés (entrepreneur, PME, associations...). Ces expériences m’ont appris à m’adapter rapidement, à comprendre
            les enjeux et à créer des stratégies digitales réalisables et efficaces.
          </p>

          {/* Formations : la ligne rose relie les étapes en desktop */}
          <h3 className="mt-14 font-display text-xl font-extrabold text-brand md:text-2xl">Mes formations</h3>
          <ol className="relative mt-10 grid gap-12 md:grid-cols-3 md:gap-8 md:before:absolute md:before:left-[16.66%] md:before:right-[16.66%] md:before:top-6 md:before:h-0.5 md:before:bg-accent/40">
            {formations.map((formation, i) => (
              <FadeUpOnScroll key={formation.title} as="li" delay={i * 120} className="relative flex flex-col items-center text-center">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-accent font-display text-lg font-extrabold text-white ring-8 ring-white">
                  {i + 1}
                </span>
                <img
                  src={formation.img}
                  alt={formation.alt}
                  loading="lazy"
                  className="mt-6 aspect-[4/3] w-full max-w-[320px] rounded-2xl object-cover shadow-md"
                />
                <h4 className="mt-5 font-display text-lg font-extrabold text-brand">{formation.title}</h4>
                <p className="mt-1 text-zinc-700">{formation.school}</p>
                {formation.note && (
                  <p className="mt-3 rounded-full bg-accent/15 px-3 py-1 text-sm font-semibold text-brand">
                    {formation.note}
                  </p>
                )}
              </FadeUpOnScroll>
            ))}
          </ol>

          {/* Expériences : chacune mène à son étude de cas */}
          <h3 className="mt-20 font-display text-xl font-extrabold text-brand md:text-2xl">Mes expériences</h3>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {experiences.map((projet, i) => (
              <FadeUpOnScroll key={projet.slug} as="li" delay={i * 100}>
                <Link
                  href={`/projects/${projet.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-600">
                    {/* « Alternance, assistante en communication digitale » → « Alternance » */}
                    {[projet.fiche?.periode, projet.fiche?.statut?.split(",")[0]].filter(Boolean).join(" · ")}
                  </span>
                  <h4 className="mt-2 font-display text-lg font-extrabold text-brand">{projet.title.split("\n")[0]}</h4>
                  {projet.accroche && <p className="mt-2 font-medium leading-relaxed text-zinc-700">{projet.accroche}</p>}
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-brand">
                    Voir l’étude de cas
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </FadeUpOnScroll>
            ))}
          </ol>
        </div>
      </section>

      {/* CE QUE J'APPORTE : aplat bleu */}
      <section className="w-full bg-brand py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <FadeUpOnScroll><SectionTitle title="Ce que j’apporte à vos projets" sticker="flower" onDark /></FadeUpOnScroll>
          <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            {apports.map(({ icon: Icon, title, text }, i) => (
              <FadeUpOnScroll key={title} as="li" delay={i * 80} className="flex flex-col">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-extrabold text-white">{title}</h3>
                <p className="mt-2 font-medium leading-relaxed text-white/85">{text}</p>
              </FadeUpOnScroll>
            ))}
          </ul>
        </div>
      </section>

      {/* COMPÉTENCES : cartes */}
      <section className="w-full bg-zinc-50 py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <FadeUpOnScroll><SectionTitle title="Mes compétences" sticker="smiley" /></FadeUpOnScroll>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {competences.map(({ icon: Icon, title, text }, i) => (
              <FadeUpOnScroll
                key={title}
                as="li"
                delay={i * 70}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white transition group-hover:bg-accent">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-base font-extrabold text-brand md:text-lg">{title}</h3>
                <p className="mt-2 font-medium leading-relaxed text-zinc-700">{text}</p>
              </FadeUpOnScroll>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ : alignée sur la même grille que les autres sections */}
      <section className="w-full bg-white py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <Faq />
        </div>
      </section>

      {/* APPEL À L'ACTION FINAL : bandeau rose */}
      <BandeauContact
        titre={"Prêt à donner vie à vos idées ?"}
        accent="Moi aussi."
        lien={{ href: "/projects", label: "Voir mes projets" }}
      />

    </div>
  );
}
