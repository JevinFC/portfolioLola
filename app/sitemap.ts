import type { MetadataRoute } from "next";
import { projects } from "./data/projects";
import { cgvCompletes } from "./data/cgv";
import videos from "./videodata";

const SITE = "https://lolagauchy.fr";

// Plan du site pour les moteurs de recherche (/sitemap.xml) : toutes les pages publiques,
// études de cas et vidéos comprises (les CGV seulement une fois complètes)
export default function sitemap(): MetadataRoute.Sitemap {
  const chemins = [
    "/",
    "/about",
    "/projects",
    ...projects.map((p) => `/projects/${p.slug}`),
    ...videos.map((v) => `/videos/${v.slug}`),
    "/mentions-legales",
    ...(cgvCompletes ? ["/cgv"] : []),
  ];
  return chemins.map((chemin) => ({ url: new URL(chemin, SITE).toString() }));
}
