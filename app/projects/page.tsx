import FadeUpOnScroll from "../components/fadeUpOnScroll";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="w-full font-[urbanist]">

      {/* HERO */}
<div
  id="hero"
  className="w-full h-[500px] md:h-[600px] bg-[url('/photosHome/photosProjects/Banniereweb.webp')] bg-cover bg-center relative flex items-center justify-center"
>
        <div className="relative z-10 flex flex-col items-center text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-10 mt-10 md:mt-20">
            Projets
          </h1>

          <span className="text-lg md:text-2xl leading-relaxed">
            CRÉATION DE SITE WEB<br />
            RÉFÉRENCEMENT SEO<br />
            CRÉATION DE CONTENU SUR LES RÉSEAUX SOCIAUX<br />
            CONCEPTION DE PRINTS<br />
            RÉDACTION DE NEWSLETTER<br />
            CONCEPTION DE CHARTE GRAPHIQUE
          </span>
        </div>
      </div>

      {/* SECTION 1 */}
      <div className="w-full bg-zinc-50 py-20 flex justify-center">
        <div className="max-w-[1200px] w-full px-10 flex flex-col md:flex-row items-center gap-12">

          <div className="flex flex-col max-w-xl text-center md:text-left">
            <FadeUpOnScroll>
              <h2 className="text-3xl font-bold text-[#1800AD] mb-7">
                Halle aux grains, <br />Scène nationale de Blois
              </h2>

              <p className="text-zinc-700 mb-7">
                Création de contenu pour les réseaux sociaux <br />
                Conception et rédaction print <br />
                Reporting <br />
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/projects/halle-aux-grains">
                  <button className="px-5 py-3 bg-[#1800AD] text-white rounded-md hover:scale-105 transition">
                    Voir le projet
                  </button>
                </Link>
                <a href="https://www.halleauxgrains.com/site/" target="_blank">
                  <button className="px-5 py-3 border-2 border-[#1800AD] text-[#1800AD] rounded-md hover:bg-[#1800AD] hover:text-white transition">
                    Voir le site internet
                  </button>
                </a>
              </div>
            </FadeUpOnScroll>
          </div>

          <FadeUpOnScroll>
            <img
              src="/photosHome/HalleAuxGrains.webp"
              alt="Projet"
              className="w-full max-w-[550px] h-auto object-cover rounded-md shadow-lg"
            />
          </FadeUpOnScroll>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="w-full bg-zinc-50 py-20 flex justify-center">
        <div className="max-w-[1200px] w-full px-10 flex flex-col md:flex-row items-center gap-12">

          <FadeUpOnScroll>
            <img
              src="/photosHome/CouvPoleDesArts.webp"
              alt="Projet"
              className="w-full max-w-[550px] h-auto object-cover rounded-md shadow-lg"
            />
          </FadeUpOnScroll>

          <FadeUpOnScroll>
            <div className="flex flex-col max-w-xl text-center md:text-left">
              <h2 className="text-3xl font-bold text-[#1800AD] mb-7">
                Pôle des arts Paul Gaudet
              </h2>

              <p className="text-zinc-700 mb-7">
                Création des réseaux sociaux et community management <br />
                Webdéveloppement du site internet <br />
                Création de newsletters <br />
                Création de prints (flyers, affiches)
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/projects/pole-des-arts">
                <button className="px-5 py-3 bg-[#1800AD] text-white rounded-md hover:scale-105 transition">
                  Voir le projet
                </button>
                </Link>
                <a href="https://poledesarts-paulgaudet.fr/" target="_blank">
                  <button className="px-5 py-3 border-2 border-[#1800AD] text-[#1800AD] rounded-md hover:bg-[#1800AD] hover:text-white transition">
                    Voir le site internet
                  </button>
                </a>
              </div>
            </div>
          </FadeUpOnScroll>

        </div>
      </div>

      {/* SECTION 3 */}
      <div className="w-full bg-zinc-50 py-20 flex justify-center">
        <div className="max-w-[1200px] w-full px-10 flex flex-col md:flex-row items-center gap-12">

          <div className="flex flex-col max-w-xl text-center md:text-left">
            <FadeUpOnScroll>
              <h2 className="text-3xl font-bold text-[#1800AD] mb-7">
                Les Chambres en Wrac’h <br />de L’Aber
              </h2>

              <p className="text-zinc-700 mb-7">
                Création du site Internet, rédaction et prise de photos <br />
                Réalisation de flyers <br />
                Création du logo
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/projects/chambres-en-wrach">
                  <button className="px-5 py-3 bg-[#1800AD] text-white rounded-md hover:scale-105 transition">
                    Voir le projet
                  </button>
                </Link>
                <a href="https://leschambresenwrachdelaber.fr/" target="_blank">
                  <button className="px-5 py-3 border-2 border-[#1800AD] text-[#1800AD] rounded-md hover:bg-[#1800AD] hover:text-white transition">
                    Voir le site internet
                  </button>
                </a>
              </div>
            </FadeUpOnScroll>
          </div>

          <FadeUpOnScroll>
            <img
              src="/photosHome/ChambresEnWrach.webp"
              alt="Projet"
              className="w-full max-w-[550px] h-auto object-cover rounded-md shadow-lg"
            />
          </FadeUpOnScroll>

        </div>
      </div>

    {/* AUTRES PROJETS */}
<div className="w-full bg-zinc-50 py-20 flex justify-center">
  <div className="max-w-[1200px] w-full px-10">

    <h2 className="text-3xl font-bold text-[#1800AD] mb-12 text-center md:text-left">
      Autres projets
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_auto] gap-x-10 gap-y-6">

      {/* LITTLE RIDERS — colonne gauche, ligne 1 */}
      <FadeUpOnScroll className="flex flex-col text-center lg:text-left">
        <img
          src="/photosHome/photosProjects/ProjetLittleriders.webp"
          alt="Projet 1"
          className="w-full object-cover rounded-md shadow-lg"
        />
        <h3 className="text-xl font-semibold mt-4">
          Projet fictif Little Riders
        </h3>
        <p className="text-zinc-700 text-sm">
          Business game sur une entreprise de fatbikes
        </p>
      </FadeUpOnScroll>

      {/* FORMIDABLE — colonne droite, row-span-2 */}
      <FadeUpOnScroll className="lg:row-span-2 flex flex-col text-center lg:text-left">
        <img
          src="/photosHome/photosProjects/ProjetFormidable.webp"
          alt="Projet 2"
          className="w-full h-full object-cover rounded-md shadow-lg"
        />
        <h3 className="text-xl font-semibold mt-4">
          Projet fictif Formidable
        </h3>
        <p className="text-zinc-700 text-sm">
          Création visuelle pour la marque Formidable
        </p>
      </FadeUpOnScroll>

      {/* PERRIER — colonne gauche, ligne 2 */}
      <FadeUpOnScroll className="flex flex-col text-center lg:text-left">
        <img
          src="/photosHome/photosProjects/ProjetPerrier.webp"
          alt="Projet 3"
          className="w-full object-cover rounded-md shadow-lg"
        />
        <h3 className="text-xl font-semibold mt-4">
          Projet fictif en formation - Perrier
        </h3>
        <p className="text-zinc-700 text-sm">
          Conception d'une application mobile
        </p>
      </FadeUpOnScroll>

    </div>
  </div>
</div>

    </div>
  );
}
