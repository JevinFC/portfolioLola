import { SITE_NAME, SITE_URL, absolu } from "./seo";
import { contact } from "../data/contact";
import { formules, prestations } from "../data/tarifs";

// Données structurées (schema.org) : elles décrivent à Google qui est Lola, ce qu'elle propose,
// à quel prix et où, pour les résultats enrichis et le panneau d'informations.
// Les identifiants (@id) relient les blocs entre eux d'une page à l'autre.
const ID_LOLA = `${SITE_URL}/#lola`;
const ID_ACTIVITE = `${SITE_URL}/#activite`;
const ID_SITE = `${SITE_URL}/#site`;

const CONTEXTE = "https://schema.org";

// Ville seulement : l'adresse complète reste dans les mentions légales (activité sans accueil du public)
const adresse = {
  "@type": "PostalAddress",
  addressLocality: "Tours",
  postalCode: "37000",
  addressRegion: "Centre-Val de Loire",
  addressCountry: "FR",
};

const telephone = "+33" + contact.telephone.replace(/\s/g, "").slice(1);
const reseaux = [contact.linkedin, contact.instagram];

// Lola : la personne derrière le site
export const personne = {
  "@type": "Person",
  "@id": ID_LOLA,
  name: "Lola Gauchy",
  givenName: "Lola",
  familyName: "Gauchy",
  jobTitle: "Communicante digitale freelance",
  url: SITE_URL,
  image: absolu("/photosHome/portrait-lola.webp"),
  email: `mailto:${contact.email}`,
  address: adresse,
  sameAs: reseaux,
  worksFor: { "@id": ID_ACTIVITE },
  alumniOf: [
    { "@type": "EducationalOrganization", name: "Excelia Campus de Tours" },
    { "@type": "EducationalOrganization", name: "ESG Tours" },
    { "@type": "EducationalOrganization", name: "Pôle Supérieur Lycée Sainte-Marguerite" },
  ],
  knowsAbout: [
    "Community management",
    "Réseaux sociaux",
    "Création de contenu",
    "Vidéo",
    "Stratégie de communication digitale",
    "Print événementiel",
    "Communication culturelle",
  ],
};

// Une offre « à partir de » (abonnement au mois, ou prestation ponctuelle)
const offre = (nom: string, description: string, prix: number, mensuel: boolean) => ({
  "@type": "Offer",
  itemOffered: { "@type": "Service", name: nom, description },
  priceSpecification: {
    "@type": "UnitPriceSpecification",
    minPrice: prix,
    priceCurrency: "EUR",
    ...(mensuel ? { unitCode: "MON", unitText: "mois" } : {}),
  },
});

const tousLesPrix = [...formules, ...prestations].map((p) => p.prix);

// L'activité de Lola : ses services, sa zone d'intervention et ses tarifs (data/tarifs.ts)
export const activite = {
  "@type": "ProfessionalService",
  "@id": ID_ACTIVITE,
  name: `${SITE_NAME}, communicante digitale freelance`,
  description:
    "Communicante digitale et community manager freelance à Tours : stratégie, réseaux sociaux, vidéos tournées sur place et print événementiel.",
  url: SITE_URL,
  image: absolu("/og-image.jpg"),
  email: contact.email,
  telephone,
  address: adresse,
  areaServed: [
    { "@type": "City", name: "Tours" },
    { "@type": "AdministrativeArea", name: "Indre-et-Loire" },
    { "@type": "AdministrativeArea", name: "Loir-et-Cher" },
    { "@type": "AdministrativeArea", name: "Centre-Val de Loire" },
  ],
  priceRange: `${Math.min(...tousLesPrix)} € – ${Math.max(...tousLesPrix)} €`,
  founder: { "@id": ID_LOLA },
  sameAs: reseaux,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tarifs",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Abonnements mensuels pour les réseaux sociaux",
        itemListElement: formules.map((f) => offre(f.nom, f.pourQui, f.prix, true)),
      },
      {
        "@type": "OfferCatalog",
        name: "Prestations à la carte",
        itemListElement: prestations.map((p) => offre(p.nom, p.detail, p.prix, false)),
      },
    ],
  },
};

// Le site lui-même
export const siteWeb = {
  "@type": "WebSite",
  "@id": ID_SITE,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "fr-FR",
  publisher: { "@id": ID_LOLA },
};

// Accueil : le site, Lola et son activité, dans un seul graphe
export const grapheAccueil = {
  "@context": CONTEXTE,
  "@graph": [siteWeb, personne, activite],
};

// Page « À propos » : une page de profil dont le sujet est Lola
export const pageProfil = {
  "@context": CONTEXTE,
  "@type": "ProfilePage",
  url: absolu("/about"),
  name: "À propos de Lola Gauchy",
  inLanguage: "fr-FR",
  isPartOf: { "@id": ID_SITE },
  mainEntity: personne,
};

// Foire aux questions (data/faq.json)
export const pageFaq = (items: { question: string; answer: string }[]) => ({
  "@context": CONTEXTE,
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
});

// Fil d'Ariane (Accueil › Projets › …), affiché par Google à la place de l'URL
export const filAriane = (etapes: { nom: string; chemin: string }[]) => ({
  "@context": CONTEXTE,
  "@type": "BreadcrumbList",
  itemListElement: etapes.map((etape, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: etape.nom,
    item: absolu(etape.chemin),
  })),
});

// Date de mise en ligne d'une vidéo : le numéro de version Cloudinary de son URL
// est l'heure de l'envoi (ex : …/upload/v1781640901/… → 16 juin 2026)
export const dateMiseEnLigne = (url: string) => {
  const version = url.match(/\/v(\d{10})\//)?.[1];
  return version ? new Date(Number(version) * 1000).toISOString() : undefined;
};

// Une vidéo du site (videodata.ts), pour qu'elle apparaisse dans les résultats vidéo de Google
export const objetVideo = (video: { title: string; description: string; url: string; poster: string; slug: string }) => ({
  "@context": CONTEXTE,
  "@type": "VideoObject",
  name: video.title,
  description: video.description,
  thumbnailUrl: absolu(video.poster),
  contentUrl: video.url,
  uploadDate: dateMiseEnLigne(video.url),
  inLanguage: "fr-FR",
  url: absolu(`/videos/${video.slug}`),
  creator: { "@id": ID_LOLA, "@type": "Person", name: "Lola Gauchy" },
});
