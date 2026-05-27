import SlideLeftOnScroll from "../components/slideLeftOnScroll";
import Faq from "../components/faq";

export const metadata = {
  title: "A Propos",
  description: "...",
};
export default function About() {
  return (
    <div className="flex flex-col text-black font-[urbanist]">

  {/* SECTION HERO */}
  <div className="w-full bg-zinc-50 px-6 md:px-20 py-20 flex flex-col gap-10">

    {/* Texte aligné à gauche */}
    <div className="w-full max-w-3xl">
      <SlideLeftOnScroll>
        <h2 className="text-[#1800AD] text-5xl md:text-6xl mt-15 font-extrabold text-left">
          Qui suis-je ?
        </h2>

        <p className="text-black text-lg mb-6 mt-6 text-left">
          Avec trois ans en communication en alternance.
        </p>
      </SlideLeftOnScroll>
    </div>

   <div className="w-full max-w-[1200px] flex flex-col md:flex-row gap-12 px-6 md:px-0">

  {/* Image */}
<div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row gap-10 ">

  {/* Image */}
  <div className="w-full md:w-1/2 flex justify-start">
    <img
      src="/photosHome/PhotoLola.webp"
      alt="Photo template"
      className="rounded-lg shadow-md max-h-[400px] w-full max-w-[450px] object-cover"
    />
  </div>

  {/* Texte */}
  <div className="
    w-full md:w-1/2 
    flex flex-col 
    justify-between 
    text-xl font-light
    gap-6
  ">
    <p>
      Je suis Lola, communicante digitale à Tours, créative dans l’âme et passionnée.
    </p>

    <p>
      Après cinq ans d’expérience à construire des stratégies, créer des contenus et animer des communautés dans divers secteurs et notamment culturel, j’ai choisi le freelancing pour accompagner ceux qui veulent faire la différence sur les réseaux sociaux. <br />
      J’imagine des contenus qui captent l’attention, des messages qui marquent et des stratégies qui fonctionnent.
    </p>

    <p>
      Prêt à donner vie à vos idées ? <br />
      Moi aussi.
    </p>
  </div>
  

</div>


</div>
<div className="w-full mx-auto mt-8">
  <p className="text-zinc-500 text-base md:text-lg leading-relaxed ">
    J’ai découvert la communication il y a 6 ans, à travers des stages et alternances, 
    dans des environnements variés (entrepreneur, PME, associations...). 
    Ces expériences m’ont appris à m’adapter rapidement, à comprendre les enjeux 
    et à créer des stratégies digitales réalisables et efficaces.
  </p>
</div>
    

    {/* 🌟 SECTION AVEC 2 IMAGES CENTRÉES + TEXTE
    <div className="flex flex-col items-center mt-12 gap-6"> */}

      {/* IMAGES CÔTE À CÔTE */}
      {/* <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        <img
          src="/photosHome/photoLudo.webp"
          alt="photo ludo"
          className="w-full max-w-[350px] rounded-lg shadow-md"
        />
        <img
          src="/photosHome/photoLudo.webp"
          alt="photo ludo"
          className="w-full max-w-[350px] rounded-lg shadow-md"
        />
      </div> */}

      {/* TEXTE CENTRÉ EN DESSOUS */}
      {/* <p className="text-center font-semibold max-w-[700px]">
        Excepteur efficient emerging, minim veniam anim cloying aute carefully curated gauche. Espresso exquisite perfect nostrud nisi intricate. 
        Punctual adipisicing Borzoi, essential lovely tempor eiusmod irure. 
        Exclusive izakaya charming Quezon City impeccable aute quality of life soft power pariatur occaecat discerning. Qui wardrobe aliquip, et Amadeus rock opera.
      </p>
      <p className="text-center font-semibold max-w-[700px]">Exquisite sophisticated iconic cutting-edge laborum deserunt esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. 
        Conversation aute wifey id. Qui sunt remarkable deserunt intricate airport excepteur classic esse riot girl.
        </p>
    </div> */}
    <div className="w-full bg-zinc-50 px-6 md:px-20 py-20 mt-10">

  {/* Titre aligné à gauche */}
  <h2 className="text-[#1800AD] text-5xl md:text-6xl font-extrabold text-left mb-12">
    Formations
  </h2>

  {/* Cartes formations */}
  <div className="w-full flex flex-col md:flex-row justify-center items-center gap-20">

    {/* Formation 1 */}
    <div className="flex flex-col items-center text-center max-w-[300px]">
      <img
        src="/photosHome/ExceliaTours.webp"
        alt="Formation 1"
        className="w-full max-h-[300px] rounded-lg shadow-lg object-cover"
      />
      <h3 className="text-2xl font-bold mt-4">Master Marketing Digital</h3>
      <p className="text-black mt-2">
        Excelia Campus de Tours
      </p>
    </div>

    {/* Formation 2 */}
    <div className="flex flex-col items-center text-center max-w-[300px]">
      <img
        src="/photosHome/ESGTours.webp"
        alt="Formation 2"
        className="w-full max-h-[300px] rounded-lg shadow-lg object-cover"
      />
      <h3 className="text-2xl font-bold mt-4">Bachelor Communication</h3>
      <p className="text-black mt-2">
        ESG Tours
      </p>
    </div>

    {/* Formation 3 */}
    <div className="flex flex-col items-center text-center max-w-[300px]">
      <img
        src="/photosHome/BTSCommunication.webp"
        alt="Formation 3"
        className="w-full max-h-[300px] rounded-lg shadow-lg object-cover"
      />
      <h3 className="text-2xl font-bold mt-4">BTS Communication</h3>
      <p className="text-black mt-2">
        Pôle Supérieur Lycée Sainte-Marguerite
      </p>
    </div>

  </div>
  {/* SECTION VALEUR & COMPÉTENCES */}
<div className="w-full bg-zinc-50 py-20">
  <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row gap-16">

    {/* Colonne 1 */}
    <div className="w-full md:w-1/2">
      <h3 className="text-2xl md:text-3xl font-bold text-[#1800AD] mb-8">
        Ce que j’apporte à vos projets
      </h3>

      <ul className="space-y-4 text-base md:text-lg font-light">
        <li>• Visibilité grâce à des contenus cohérents et adaptés à vos objectifs</li>
        <li>• Gain de temps grâce à une gestion optimisée de vos réseaux</li>
        <li>• Image de marque renforcée avec une identité digitale claire</li>
        <li>• Communauté engagée grâce à des contenus créatifs et pertinents</li>
        <li>• Stratégie solide pour développer votre présence en ligne</li>
      </ul>
    </div>

    {/* Colonne 2 */}
    <div className="w-full md:w-1/2">
      <h3 className="text-2xl md:text-3xl font-bold text-[#1800AD] mb-8">
        Mes compétences
      </h3>

      <ul className="space-y-4 text-base md:text-lg font-light">
        <li>• Stratégie de communication digitale : analyse, recommandations, positionnement</li>
        <li>• Création de contenus : visuels, vidéos courtes, stories, carrousels, montages</li>
        <li>• Gestion des réseaux sociaux : planification, publication, modération, animation</li>
        <li>• Rédaction & storytelling : articles, posts, accroches, newsletters</li>
        <li>• Analyse et reporting : KPIs, tableaux de bord, insights, optimisations</li>
        <li>• Veille et tendances : identification des formats pertinents</li>
      </ul>
    </div>

  </div>
</div>
<Faq />
</div>
  </div>

</div>

  );
}
