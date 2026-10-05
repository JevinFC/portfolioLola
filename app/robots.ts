import type { MetadataRoute } from "next";
import { absolu } from "./lib/seo";

// Consignes pour les moteurs de recherche (/robots.txt) : tout le site est indexable,
// et le plan du site leur indique toutes les pages à explorer
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absolu("/sitemap.xml"),
  };
}
