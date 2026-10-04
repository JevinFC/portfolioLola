import type { MetadataRoute } from "next";

// Consignes pour les moteurs de recherche (/robots.txt) : tout le site est indexable
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://lolagauchy.fr/sitemap.xml",
  };
}
