import Link from "next/link";
import CountUp from "./countUp";
import FadeUpOnScroll from "./fadeUpOnScroll";
import HoverVideo from "./hoverVideo";

type TileImage = { src: string; alt: string; position?: string };

// Extrait de 6 s en 640 px généré par Cloudinary, joué au survol des tuiles vidéo
const preview = (path: string) =>
  `https://res.cloudinary.com/dkwxhd6ck/video/upload/so_1,du_6,w_640,c_limit,q_auto/${path}.mp4`;

interface VisualTileProps {
  href: string;
  images: TileImage[]; // 1 visuel, ou 2 côte à côte
  kicker: string;
  title: string;
  video?: string; // aperçu vidéo joué au survol
}

// Tuile cliquable : un projet ou une vidéo, avec ses visuels en fond
function VisualTile({ href, images, kicker, title, video }: VisualTileProps) {
  return (
    <Link
      href={href}
      className="group relative block h-full overflow-hidden rounded-xl bg-zinc-200 shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      <div className={`absolute inset-0 grid ${images.length > 1 ? "grid-cols-2 gap-1" : ""}`}>
        {images.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={image.position ? { objectPosition: image.position } : undefined}
          />
        ))}
      </div>

      {video && <HoverVideo src={video} />}

      {/* Dégradé pour que le texte reste lisible (laisse passer la souris jusqu'à la vidéo) */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

      {video && (
        <span className="pointer-events-none absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/45 transition-transform duration-300 group-hover:scale-110">
          <svg viewBox="0 0 24 24" fill="white" className="ml-0.5 h-5 w-5" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 md:p-5 text-white">
        <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.12em] text-white/85">{kicker}</p>
        <h3 className="mt-1 font-sans text-base md:text-lg font-bold leading-snug text-white">{title}</h3>
      </div>
    </Link>
  );
}

interface StatTileProps {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
  source: string;
}

// Tuile chiffre clé, avec compteur animé
function StatTile({ target, prefix, suffix, label, source }: StatTileProps) {
  return (
    <div className="flex h-full flex-col justify-between rounded-xl bg-brand p-4 md:p-5 text-white shadow-md">
      <p className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold leading-none text-accent">
        <CountUp target={target} prefix={prefix} suffix={suffix} />
      </p>
      <div>
        <p className="text-sm md:text-base font-semibold leading-snug">{label}</p>
        <p className="mt-1 text-xs text-white/75">{source}</p>
      </div>
    </div>
  );
}

// Grille « bento » de l'accueil : projets, vidéos et chiffres clés mélangés.
// L'ordre compte : le placement automatique remplit la grille sans trou (4 colonnes en desktop, 2 en mobile).
const tiles = [
  {
    span: "col-span-2 row-span-2",
    tile: (
      <VisualTile
        href="/projects/halle-aux-grains"
        images={[{ src: "/photosProjectSlugs/photosHAG/BrochureHAG.webp", alt: "Brochures de saison de la Halle aux grains" }]}
        kicker="Réseaux sociaux · Print · Reporting"
        title="Halle aux grains, Scène nationale de Blois"
      />
    ),
  },
  {
    span: "",
    tile: (
      <VisualTile
        href="/videos/scene-nationale-chatodo"
        images={[{ src: "/photosHome/CouvChatodo.webp", alt: "" }]}
        kicker="Capsule vidéo"
        title="Scène nationale X Chato'do"
        video={preview("v1781640713/SceneNationaleXChatoDo_l9awwq")}
      />
    ),
  },
  {
    span: "row-span-2",
    tile: (
      <VisualTile
        href="/videos/teaser-halle-aux-grains"
        images={[{ src: "/photosHome/CouvTeaser.webp", alt: "" }]}
        kicker="Teaser"
        title="Teaser Scène nationale"
        video={preview("v1781640740/TeaserHalleAuxGrains2526_klb2zx")}
      />
    ),
  },
  {
    span: "",
    tile: <StatTile target={1800} prefix="+" label="abonnés en 18 mois" source="Halle aux grains" />,
  },
  {
    span: "row-span-2",
    tile: (
      <VisualTile
        href="/projects/pole-des-arts"
        images={[{ src: "/photosProjectSlugs/photosPoleDesArts/Afficheconcert.webp", alt: "Affiche du concert « Fantaisie et féerie »" }]}
        kicker="Réseaux · Web · Print"
        title="Pôle des arts Paul Gaudet"
      />
    ),
  },
  {
    span: "",
    tile: (
      <VisualTile
        href="/videos/decouvertes-scene-nationale"
        images={[{ src: "/photosHome/CouvDecouvertes.webp", alt: "" }]}
        kicker="Retour en images"
        title="Découvertes Scène nationale"
        video={preview("v1781640901/2DecouvertesHAG2526_hwv1jf")}
      />
    ),
  },
  {
    span: "col-span-2 row-span-2",
    tile: (
      <VisualTile
        href="/projects/chambres-en-wrach"
        images={[
          { src: "/photosProjectSlugs/photosChambresEnWrach/site-chambres.webp", alt: "Page d'accueil du site Les Chambres en Wrac'h de l'Aber", position: "top" },
        ]}
        kicker="Site web · Photos · Logo · Flyers"
        title="Les Chambres en Wrac'h de l'Aber"
      />
    ),
  },
  {
    // Placée après la grande tuile : le placement automatique la loge dans la case libre restante
    span: "",
    tile: <StatTile target={54}suffix={" %"} label="d'ouverture des newsletters" source="Pôle des arts Paul Gaudet" />,
  },
];

export default function ProjectBento() {
  return (
    <div className="grid grid-flow-dense grid-cols-2 md:grid-cols-4 auto-rows-[170px] sm:auto-rows-[200px] lg:auto-rows-[220px] gap-3 md:gap-4">
      {tiles.map(({ span, tile }, i) => (
        // Les tuiles apparaissent l'une après l'autre
        <FadeUpOnScroll key={i} className={span} delay={i * 70}>
          {tile}
        </FadeUpOnScroll>
      ))}
    </div>
  );
}
