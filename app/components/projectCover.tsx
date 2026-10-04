import type { ImgHTMLAttributes } from "react";
import { ImagePlus } from "lucide-react";
import type { CoverItem } from "../data/projects";

interface ProjectCoverProps {
  items: CoverItem[];
  className?: string;
  pleineHauteur?: boolean; // ← dès le grand écran, la mosaïque prend la hauteur que lui donne son parent (en-tête d'étude de cas)
  prioritaire?: boolean; // ← mosaïque visible dès l'arrivée sur la page : images chargées tout de suite, la principale en priorité
}

type Chargement = Pick<ImgHTMLAttributes<HTMLImageElement>, "loading" | "fetchPriority">;

// Mosaïque des visuels réalisés pour un projet : le premier en grand, les deux suivants empilés à droite.
// En pleine hauteur, elle devient verticale : le premier en haut sur toute la largeur, les deux suivants côte à côte en dessous
export default function ProjectCover({ items, className = "", pleineHauteur = false, prioritaire = false }: ProjectCoverProps) {
  const [main, ...others] = items;
  const side = others.slice(0, 2);
  // Sous la ligne de flottaison, les images attendent d'approcher de l'écran ; sinon elles partent tout de suite
  const chargementPrincipal: Chargement = prioritaire ? { loading: "eager", fetchPriority: "high" } : { loading: "lazy" };
  const chargementCotes: Chargement = { loading: prioritaire ? "eager" : "lazy" };
  const coins = pleineHauteur ? "lg:rounded-xl" : "";
  const rangeeEntiere = pleineHauteur ? "lg:col-span-2 lg:row-span-1" : "";
  const vertical = pleineHauteur
    ? `lg:aspect-auto lg:gap-3 ${side.length > 0 ? "lg:grid-cols-2 lg:grid-rows-[minmax(0,3fr)_minmax(0,2fr)]" : ""}`
    : "";

  return (
    <div
      className={`grid aspect-[4/3] gap-2 ${
        side.length > 0 ? "grid-cols-[minmax(0,3fr)_minmax(0,2fr)] grid-rows-2" : "grid-cols-1"
      } ${vertical} ${className}`}
    >
      {main && (
        <CoverCell
          item={main}
          chargement={chargementPrincipal}
          className={`${coins} ${side.length > 0 ? `row-span-2 ${rangeeEntiere}` : ""}`}
        />
      )}
      {side.map((item, i) => (
        <CoverCell
          key={i}
          item={item}
          chargement={chargementCotes}
          className={`${coins} ${side.length === 1 ? `row-span-2 ${rangeeEntiere}` : ""}`}
        />
      ))}
    </div>
  );
}

function CoverCell({ item, chargement, className = "" }: { item: CoverItem; chargement: Chargement; className?: string }) {
  // Capture d'un site : affichée dans un cadre de navigateur, avec l'adresse du site
  if (item.src && item.url) {
    return (
      <div className={`flex flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-md ${className}`}>
        <div className="flex items-center gap-1.5 border-b border-zinc-200 px-3 py-2">
          <span className="h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
          <span className="h-2 w-2 flex-shrink-0 rounded-full bg-zinc-300" />
          <span className="h-2 w-2 flex-shrink-0 rounded-full bg-zinc-300" />
          <span className="ml-2 truncate text-[11px] text-zinc-500">{item.url}</span>
        </div>
        <img
          src={item.src}
          alt={item.alt ?? ""}
          {...chargement}
          className="min-h-0 w-full flex-1 object-cover"
          style={{ objectPosition: item.position ?? "top" }}
        />
      </div>
    );
  }

  // Visuel manquant (ex : capture du site) : cadre de navigateur en pointillés, à remplacer plus tard
  if (!item.src) {
    return (
      <div className={`flex flex-col overflow-hidden rounded-lg border-2 border-dashed border-brand/30 bg-brand/5 ${className}`}>
        <div className="flex items-center gap-1.5 border-b border-brand/15 px-3 py-2">
          <span className="h-2 w-2 flex-shrink-0 rounded-full bg-brand/30" />
          <span className="h-2 w-2 flex-shrink-0 rounded-full bg-brand/30" />
          <span className="h-2 w-2 flex-shrink-0 rounded-full bg-brand/30" />
          {item.url && <span className="ml-2 truncate text-[11px] text-brand/70">{item.url}</span>}
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-2 p-3 text-center text-brand/80">
          <ImagePlus className="h-6 w-6" aria-hidden="true" />
          <span className="text-xs font-semibold leading-tight">{item.placeholder}</span>
        </div>
      </div>
    );
  }

  // Visuel à montrer en entier (texte jusqu'aux bords) : la même image, floutée, remplit la case derrière lui
  if (item.fit === "contain") {
    return (
      <div className={`relative overflow-hidden rounded-lg bg-zinc-200 shadow-md ${className}`}>
        <img src={item.src} alt="" aria-hidden="true" loading={chargement.loading} className="absolute inset-0 h-full w-full scale-110 object-cover blur-xl" />
        <img src={item.src} alt={item.alt ?? ""} {...chargement} className="relative h-full w-full object-contain" />
      </div>
    );
  }

  return (
    <div className={`overflow-hidden rounded-lg bg-zinc-200 shadow-md ${className}`}>
      <img
        src={item.src}
        alt={item.alt ?? ""}
        {...chargement}
        className="h-full w-full object-cover"
        style={item.position ? { objectPosition: item.position } : undefined}
      />
    </div>
  );
}
