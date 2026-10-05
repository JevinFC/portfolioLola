import type { MetadataRoute } from "next";
import { projects, type Project } from "./data/projects";
import { cgvCompletes } from "./data/cgv";
import videos from "./videodata";
import { absolu } from "./lib/seo";
import { dateMiseEnLigne } from "./lib/schema";

// Images d'une étude de cas : visuels de couverture et du carrousel (vignettes pour les vidéos), sans doublon
const imagesProjet = (p: Project) => {
  const chemins = [
    ...p.cover.map((c) => c.src),
    ...(p.imagesCarrousel ?? []).map((item) => (item.videoSlug ? item.thumbnail : item.src)),
  ].filter((src): src is string => Boolean(src?.startsWith("/")));
  return [...new Set(chemins)].map(absolu);
};

const PORTRAIT = absolu("/photosHome/portrait-lola.webp");

// Plan du site pour les moteurs de recherche (/sitemap.xml) : toutes les pages publiques avec leurs
// images (Google Images) et, pour les vidéos, de quoi apparaître dans Google Vidéos (les CGV seulement une fois complètes)
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absolu("/"), images: [PORTRAIT] },
    { url: absolu("/about"), images: [PORTRAIT] },
    { url: absolu("/projects") },
    ...projects.map((p) => ({ url: absolu(`/projects/${p.slug}`), images: imagesProjet(p) })),
    ...videos.map((v) => ({
      url: absolu(`/videos/${v.slug}`),
      videos: [
        {
          title: v.title,
          description: v.description,
          thumbnail_loc: absolu(v.poster),
          content_loc: v.url,
          publication_date: dateMiseEnLigne(v.url),
        },
      ],
    })),
    { url: absolu("/mentions-legales") },
    ...(cgvCompletes ? [{ url: absolu("/cgv") }] : []),
  ];
}
