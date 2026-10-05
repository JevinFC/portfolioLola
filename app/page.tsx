import Link from "next/link";
import ProjectBento from "./components/projectBento";
import CountUp from "./components/countUp";
import HeroVisual from "./components/heroVisual";
import Sticker from "./components/sticker";
import AnimatedWords from "./components/animatedWords";
import Marquee from "./components/marquee";
import Services from "./components/services";
import Tarifs from "./components/tarifs";
import Temoignages from "./components/temoignages";
import SectionTitle from "./components/sectionTitle";
import FadeUpOnScroll from "./components/fadeUpOnScroll";
import ContactForm from "./components/contactForm";
// import ScrollAnimation from "./components/scrollAnimation";

export default function Home() {
  return (
<div className="flex flex-col text-black font-[urbanist] bg-zinc-50">

  {/* SECTION HERO */}
  <div
    className="
      flex flex-col lg:flex-row
      items-center justify-center
      gap-12 lg:gap-16 xl:gap-24
      px-6 md:px-12 lg:px-20 pt-32 pb-16 lg:min-h-[calc(100svh-4.5rem)] lg:pt-28 lg:pb-12
      overflow-x-clip
    "
  >
    {/* Texte */}
    <div className="flex flex-col items-center lg:items-start max-w-2xl text-center lg:text-left">
      <p className="rise text-sm md:text-base font-semibold uppercase tracking-[0.15em] text-zinc-600 mb-4">
        Communicante digitale freelance&nbsp;·&nbsp;Tours
      </p>

      <h1 className="text-brand text-[1.75rem] sm:text-4xl xl:text-5xl leading-[1.12] font-extrabold mb-6">
        <AnimatedWords text="Je fais parler de vous sur les réseaux," accent="pour que le public vienne." delay={0.15} />
      </h1>

      <p className="rise text-black text-base md:text-lg mb-8" style={{ animationDelay: "0.65s" }}>
        Stratégie, contenus, vidéos tournées sur place&nbsp;: je m’occupe de vos réseaux, vous gardez du temps
        pour votre métier.
      </p>

      {/* Preuve chiffrée */}
      <div className="rise flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-sm mb-8 text-left" style={{ animationDelay: "0.8s" }}>
        <span className="font-display text-2xl md:text-3xl font-extrabold text-accent whitespace-nowrap">
          <CountUp target={25000} prefix="+" duration={2000} />
        </span>
        <span className="text-sm md:text-base text-zinc-600 leading-snug">
          vues par mois pour la <br />
          Scène nationale de Blois
        </span>
      </div>

      {/* Appels à l’action */}
      <div className="rise flex flex-wrap justify-center lg:justify-start gap-3" style={{ animationDelay: "0.95s" }}>
        <Link
          href="/projects"
          className="px-6 py-3 rounded-full border-2 border-brand bg-brand text-white font-semibold hover:scale-105 transition"
        >
          Voir mes projets
        </Link>
        <Link
          href="/#contact"
          className="px-6 py-3 rounded-full border-2 border-brand text-brand font-semibold hover:bg-brand hover:text-white transition"
        >
          Me contacter
        </Link>
      </div>
    </div>

    {/* Visuel en calques : damier, portrait détouré et stickers */}
    <div className="flex justify-center w-full lg:w-auto flex-shrink-0">
      <HeroVisual />
    </div>
  </div>

  {/* BANDEAU DÉFILANT : les services, juste sous le hero */}
  <Marquee />

  {/* SCROLL ANIMATION */}
  {/* <div className="-mt-10 md:-mt-16 lg:-mt-20">
    <FadeUpOnScroll>
      <button onClick={scrollToExpertise} aria-label="Scroll to expertise section" className="cursor-pointer"> {/* FAUT VHANGER CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA */}
        {/* <ScrollAnimation /> */}
      {/* </button> */}
    {/* </FadeUpOnScroll> */}
  {/* </div> */}
      {/* SECTION PROJETS */}
      <div className="w-full bg-zinc-50 py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20 flex flex-col gap-10">

          <FadeUpOnScroll>
            <SectionTitle title="Mes derniers projets" sticker="smiley" />
          </FadeUpOnScroll>

          {/* Grille « bento » : projets, vidéos et chiffres clés */}
          <ProjectBento />

          <Link
            href="/projects"
            className="self-center px-6 py-3 rounded-full border-2 border-brand text-brand font-semibold hover:bg-brand hover:text-white transition"
          >
            Voir tous les projets
          </Link>
        </div>
      </div>

      {/* SECTION SERVICES : aplat bleu */}
      <Services />

      {/* SECTION TARIFS : abonnements mensuels et prestations à la carte, en prix « à partir de » */}
      <Tarifs />

      {/* SECTION AVIS : un avis à la fois, en grand */}
      <div className="w-full bg-zinc-50 py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20 flex flex-col gap-16">
          <FadeUpOnScroll>
            <SectionTitle title="Avis" sticker="flower" />
          </FadeUpOnScroll>
          <Temoignages />
        </div>
      </div>

      {/* SECTION CONTACT : le damier de Lola en fond */}
      <div
        id="contact"
        className="w-full scroll-mt-20 bg-brand bg-cover bg-center px-6 py-20 md:px-20"
        style={{ backgroundImage: "url('/stickers/damier.svg')" }}
      >
        <div className="relative mx-auto flex w-full max-w-md flex-col items-center gap-6">
          <Sticker name="smiley" className="absolute -right-3 -top-10 w-16 rotate-12 md:-right-12 md:w-20" />
          <h2 className="rounded-full bg-white px-6 py-3 text-xl font-bold text-brand shadow-lg sm:text-2xl md:text-3xl">
            On entre en contact&nbsp;?
          </h2>
          <ContactForm />
        </div>
      </div>

    </div>
  );
}
