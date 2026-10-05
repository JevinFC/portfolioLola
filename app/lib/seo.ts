import type { Metadata } from "next";

// Adresse officielle du site : URL canoniques, plan du site, robots.txt et données structurées.
// Le site répond aussi sur portfoliolola.pages.dev et sur /about.html… : la balise canonique
// de chaque page indique à Google la seule adresse à indexer
export const SITE_URL = "https://lolagauchy.fr";
export const SITE_NAME = "Lola Gauchy";

// Image d'aperçu lors d'un partage (Facebook, LinkedIn, WhatsApp…), 1200 × 630 px dans /public
export const IMAGE_PARTAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Lola Gauchy, communicante digitale freelance à Tours",
};

// Adresse complète d'une page ou d'une image du site (ex : "/about" → "https://lolagauchy.fr/about")
export const absolu = (chemin: string) => new URL(chemin, SITE_URL).toString();

interface PageSeo {
  titre: string; // ← complété par « | Lola Gauchy », sauf si titreComplet
  titreComplet?: boolean; // ← le titre est utilisé tel quel (il contient déjà le nom)
  description: string; // ← environ 150 caractères : au-delà, Google la coupe
  chemin: string; // ← chemin de la page, qui devient son URL canonique (ex : "/about")
  type?: "website" | "article" | "profile";
}

// Métadonnées d'une page : titre, description, URL canonique et aperçus de partage (Open Graph, X).
// Chaque page déclare les siennes : rien n'est hérité d'une autre page
export function metadonnees({ titre, titreComplet = false, description, chemin, type = "website" }: PageSeo): Metadata {
  const titrePartage = titreComplet ? titre : `${titre} | ${SITE_NAME}`;
  return {
    title: titreComplet ? { absolute: titre } : titre,
    description,
    alternates: { canonical: chemin },
    openGraph: {
      type,
      locale: "fr_FR",
      siteName: SITE_NAME,
      url: chemin,
      title: titrePartage,
      description,
      images: [IMAGE_PARTAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: titrePartage,
      description,
      images: [IMAGE_PARTAGE.url],
    },
  };
}
