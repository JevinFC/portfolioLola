
export type Stat = {
  label: string;
  countTarget: number;
  prefix?: string;
  suffix?: string;
};

export type CarouselItem = {
  src: string;
  videoSlug?: string; // ← slug de la vidéo si c'est une vidéo
  fit?: "cover" | "contain"; // ← nouveau
  thumbnail?: string; 
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  siteUrl: string;
  image: string;
  imagesCarrousel?: CarouselItem[];
  stats?: Stat[];
  sections: {
    title: string;
    objective?: string;
    items: string[];
  }[];
};




export const projects: Project[] = [
  {
    slug: "halle-aux-grains",
    title: "Halle aux grains\nScène nationale de Blois",
    description:
      "La Halle aux grains - Scène nationale de Blois est un espace dédié au spectacle vivant qui offre une programmation artistique pluridisciplinaire et qui s'adresse à des publics variés.\n\nMon rôle : concevoir, produire et coordonner les contenus de communication, en lien avec l'identité et les missions d'une scène nationale.",
    siteUrl: "https://www.halleauxgrains.com/site/",
    image: "/photosHome/HalleAuxGrains.webp",
    imagesCarrousel: [
  { src: "/photosProjectSlugs/photosHAG/BrochureHAG.webp", fit:"cover"},
  { src: "https://res.cloudinary.com/dkwxhd6ck/video/upload/v1781640759/RecapGenerationClimat_xy0jya.mp4", videoSlug: "video-3", fit:"contain", thumbnail:"/photosProjectSlugs/photosHAG/thumbnailGeneClimat.png"},
  { src: "https://res.cloudinary.com/dkwxhd6ck/video/upload/v1781640740/TeaserHalleAuxGrains2526_klb2zx.mp4", videoSlug: "video-4", fit:"contain", thumbnail:"/photosProjectSlugs/photosHAG/thumbnailTeaser.webp"},
  { src: "https://res.cloudinary.com/dkwxhd6ck/video/upload/v1781640726/Vide%CC%81o_voeux_2026_mxfho0.mp4", videoSlug: "video-5", fit:"contain", thumbnail:"/photosProjectSlugs/photosHAG/thumbnailvoeux2026.png" },
],
   stats: [
  { countTarget: 1600, prefix: "+ ", label: "followers" },
  { countTarget: 25000, prefix: "+ ", suffix: " vues", label: "par mois" },
],
    sections: [
      {
        title: "Stratégie éditoriale et réseaux sociaux",
        items: [
          "Définition des lignes éditoriales selon les canaux et les événements",
          "Création de contenus pour les réseaux sociaux (visuels, textes, formats)",
          "Planification et gestion du calendrier éditorial",
        ],
      },
      {
        title: "Création graphique et supports print",
        objective: "Déployer une communication visuelle cohérente sur l'ensemble des supports",
        items: [
          "Création de flyers, de feuilles de salle",
          "Mise en page et structuration des contenus",
          "Cohérence entre supports print, digital et web",
        ],
      },
    ],
  },
  {
    slug: "pole-des-arts",
    title: "Pôle des arts Paul Gaudet",
    description:
      "Le Pôle des arts Paul Gaudet offre un panel de disciplines artistiques riches et diversifiées : musique, théâtre, danse, ou plus récemment, un département bien être. \n\nMon rôle : création des réseaux sociaux, community management, développement du site internet, newsletters et supports print.",
    siteUrl: "https://poledesarts-paulgaudet.fr/",
    image: "/photosHome/CouvPoleDesArts.webp",
    imagesCarrousel: [
  { src: "/photosProjectSlugs/photosPoleDesArts/Afficheconcert.webp" },
  { src: "/photosProjectSlugs/photosPoleDesArts/Afficheconcertoha.webp" },
  { src: "/photosProjectSlugs/photosPoleDesArts/Portesouvertes.webp" },
],
    stats: [
  { countTarget: 1000, prefix: "+ ", label: "followers" },
  { countTarget: 54, prefix: "+ ", suffix: "%", label: "taux d'ouverture de newsletter" },
],
    sections: [
      {
        title: "Réseaux sociaux & community management",
        items: [
          "Création des comptes et mise en place de la stratégie éditoriale",
          "Production de contenus visuels et rédactionnels",
          "Animation de la communauté et gestion des interactions",
        ],
      },
      {
        title: "Webdéveloppement",
        items: [
          "Conception et développement du site internet",
          "Rédaction des contenus et structuration des pages",
          "Optimisation pour le référencement naturel (SEO)",
        ],
      },
      {
        title: "Newsletters & prints",
        items: [
          "Création et envoi de newsletters régulières",
          "Conception de flyers et affiches événementiels",
          "Cohérence visuelle entre tous les supports",
        ],
      },
    ],
  },
  {
    slug: "chambres-en-wrach",
    title: "Les Chambres en Wrac'h\nde L'Aber",
    description:
      "Les Chambres en Wrac'h est une maison d'hôte située dans le Finistère en Bretagne. \n\nMon rôle : création complète du site internet (rédaction et photos), réalisation de flyers et création du logo de l'établissement.",
    siteUrl: "https://leschambresenwrachdelaber.fr/",
    image: "/photosHome/ChambresEnWrach.webp",
    imagesCarrousel: [
  { src: "/photosProjectSlugs/photosChambresEnWrach/Activitenautique.webp", fit:"cover" },
  { src: "/photosProjectSlugs/photosChambresEnWrach/ChambresEnWrach.webp", fit:"cover" },
  { src: "/photosProjectSlugs/photosChambresEnWrach/Flyer.webp", fit:"contain" },
  { src: "/photosProjectSlugs/photosChambresEnWrach/Françoise.webp", fit:"cover" },
],
    
    sections: [
      {
        title: "Création du site internet",
        items: [
          "Conception et développement du site de A à Z",
          "Rédaction de l'ensemble des contenus textuels",
          "Prises de vues et sélection des photos",
        ],
      },
      {
        title: "Identité visuelle & print",
        items: [
          "Création du logo de l'établissement",
          "Réalisation de flyers de présentation",
          "Cohérence entre l'identité print et le site web",
        ],
      },
    ],
  },
];