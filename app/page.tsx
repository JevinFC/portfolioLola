import Link from "next/link";
import CardProject from "./components/cardProject";
import Avis from "./components/avis";
import FadeUpOnScroll from "./components/fadeUpOnScroll";
import ContactForm from "./components/contactForm";
import SlideLeftOnScroll from "./components/slideLeftOnScroll";
import SlideRightOnScroll from "./components/slideRightOnScroll";
// import ScrollAnimation from "./components/scrollAnimation";

export default function Home() {
  return (
<div className="flex flex-col text-black font-[urbanist] bg-zinc-50">

  {/* SECTION HERO */}
  <div
    className="
      flex flex-col-reverse md:flex-row 
      items-center md:items-start justify-center 
      px-6 md:px-20 py-20 md:py-50 gap-0 md:gap-25
    "
  >
    {/* Texte */}
    <div className="flex flex-col max-w-xl md:pr-10 mt-10 md:mt-20 text-center md:text-left">
      <SlideLeftOnScroll>
        <h2 className="text-[#1800AD] text-4xl md:text-6xl mb-3 font-extrabold">
          Chargée de communication
        </h2>

        <p className="text-black text-base md:text-lg mb-12">
          Bientôt diplômée d’un BAC +5 Marketing digital, j’aide les entreprises
          et les micro-entrepreneurs à gagner en visibilité sur les réseaux sociaux
          et le web.
        </p>
      </SlideLeftOnScroll>

      <FadeUpOnScroll>
        <Link
          href="/about"
          className="bg-black border-black rounded-md text-white px-6 py-3 mx-auto md:mx-0"
        >
          Qui suis-je ?
        </Link>
      </FadeUpOnScroll>
    </div>

    {/* Image */}
    <div className="flex justify-center w-full md:w-auto flex-shrink-0">
      <SlideRightOnScroll>
        <img
          src="/photosHome/LolaProfil.svg"
          alt="Photo de Lola Gauchy"
          className="w-full max-w-[350px] md:max-w-[400px] h-auto mt-10 md:mt-0 rounded-lg shadow-[0_0_40px_20px_#1800AD40]"
        />
      </SlideRightOnScroll>
    </div>
  </div>

  {/* SCROLL ANIMATION */}
  {/* <div className="-mt-10 md:-mt-16 lg:-mt-20">
    <FadeUpOnScroll>
      <button onClick={scrollToExpertise} aria-label="Scroll to expertise section" className="cursor-pointer"> {/* FAUT VHANGER CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA */}
        {/* <ScrollAnimation /> */}
      {/* </button> */}
    {/* </FadeUpOnScroll> */}
  {/* </div> */}
      {/* SECTION EXPERTISE */}
      <div className="w-full bg-zinc-50 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-30 py-20 px-6" id="expertise">

        {/* Image */}
        <SlideLeftOnScroll>
          <img
            src="/photosHome/PageAccueil.webp"
            alt="Image de bureau"
            className="rounded-md w-[300px] md:w-[450px] h-auto shadow-md object-cover"
          />
        </SlideLeftOnScroll>

        {/* Texte */}
        <div className="flex flex-col max-w-xl text-center md:text-left">
          <SlideRightOnScroll>
            <h3 className="mb-4 text-2xl md:text-3xl">Mon expertise</h3>

            <h4 className="text-xl font-semibold">Création de contenu digital</h4>
            <p className="mb-6">
              Contenu visuel, montage vidéo, rédaction de newsletters, contenu
              interactif et réseaux sociaux.
            </p>

            <h4 className="text-xl font-semibold">Création de prints</h4>
            <p className="mb-6">
              Cartes, flyers, brochures, affiches, supports événementiels…
            </p>

            <h4 className="text-xl font-semibold">Optimisation web</h4>
            <p>
              Référencement SEO, optimisation UX, content marketing.
            </p>
          </SlideRightOnScroll>
        </div>
      </div>

      {/* SECTION PROJETS */}
      <div className="w-full bg-zinc-50 py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20 flex flex-col gap-8">

          <FadeUpOnScroll>
            <h3 className="text-3xl">Mes derniers projets</h3>
          </FadeUpOnScroll>

          <div className="flex flex-wrap gap-10 justify-center md:justify-start">
            <CardProject
            cardImg="/photosHome/CouvChatodo.webp"
            cardTitle="Scène nationale X Chato'do"
            cardDesc="Capsule vidéo sur la collaboration"
            linkProject="/videos/video-2"
            isVideo={true}
/>


            <CardProject
            cardImg="/photosHome/CouvDecouvertes.webp"
            cardTitle="Découvertes Scène nationale"
            cardDesc="Retour en images sur un projet"
            linkProject="/videos/video-1"
            isVideo={true}
/>

            <CardProject
              cardImg="/photosHome/CouvTeaser.webp"
              cardTitle="Teaser Scène nationale"
              cardDesc="Création d’un teaser"
              linkProject="/projects/teaser"
              isVideo={true}
            />

            <CardProject
              cardImg="/photosHome/CouvPoleDesArts.webp"
              cardTitle="Présentation Pôle des Arts"
              cardDesc="Vidéo de présentation"
              linkProject="/projects/ludo"
              isVideo={true}
            />
            
          </div>
        </div>
      </div>

      {/* SECTION AVIS */}
      <div className="w-full bg-zinc-50 py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20 flex flex-col gap-8">

          <FadeUpOnScroll>
            <h3 className="text-3xl">Avis</h3>
          </FadeUpOnScroll>

          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <FadeUpOnScroll>
              <Avis 
                avisText="“L’entreprise avait besoin d’un.e salarié.e de l’envergure de Lola. 
                          Très bonne et rapide intégration dans l’équipe ! ”"
                authorName="Sandrine Lhuillier"
                authorTitle={
                  <>
                  Responsable communication/Presse <br /> Scène nationale de Blois                  </>
                }
                authorImg="/photosHome/SandrineLhuillier.webp"
              />
              </FadeUpOnScroll>
              <FadeUpOnScroll>
              <Avis 
                avisText="“Lola est très professionnelle dans les missions qui lui sont confiées. 
                Elle sait mener à bien l'ensemble de ses travaux, avec gentillesse et bienveillance. 
                Je la recommande avec grand plaisir et suis sûr qu'elle fera un beau chemin.”"
                authorName="Pascal Caraty"
                authorTitle="Ancien directeur du Pôle des Arts"
                authorImg="/photosHome/PascalCaraty.webp"
              />
            </FadeUpOnScroll>

            <FadeUpOnScroll>
              <Avis 
                avisText="“J'ai reçu Lola comme stagiaire, chargée de webmarketing, pour l'une de mes activités. Je fus réellement ravie de l'avoir accueillie au sein de mon entreprise ! 
                Elle est impliquée, a soif d'apprendre, a une sensibilité créative, est à l'écoute, est force de propositions et professionnelle. 
                Bref, Lola est une perle et je la recommande chaudement !”"
                authorName="Marika Pech"
                authorTitle="Coach de vie intuitive"
                authorImg="/photosHome/MarikaPech.webp"
              />
            </FadeUpOnScroll>
          </div>
        </div>
      </div>

      {/* SECTION CONTACT */}
      <div className="bg-zinc-50 py-20 w-full px-6 md:px-20 flex flex-col items-center gap-6">
        <h3 className="text-3xl">On entre en contact ?</h3>
        <ContactForm />
      </div>

    </div>
  );
}
