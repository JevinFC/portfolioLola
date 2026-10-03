
export type Stat = {
  label: string;
  countTarget: number;
  prefix?: string;
  suffix?: string;
  detail?: string; // ← point de départ et période (ex : « passé de 300 à 1 900 abonnés en 18 mois »)
};

// Cadre de la mission, affiché sous le titre de l'étude de cas
export type Fiche = {
  periode?: string; // ← ex : « Sept. 2023 → août 2025 »
  statut?: string; // ← alternance, stage, freelance...
  equipe?: string; // ← seule ou en équipe
  outils?: string; // ← ex : « Canva, Premiere Pro, Meta Business Suite »
};

// Un choix dont Lola est fière : un format, une idée, une façon de faire
export type PartiPris = {
  title: string;
  text: string;
  lien?: { href: string; label: string }; // ← exemple à voir sur le site (ex : une vidéo)
  visuels?: { src: string; alt: string }[]; // ← images qui illustrent ce choix, affichées à côté de la carte
  legende?: string; // ← légende sous ces images
};

// Une publication du classement des plus vues
export type PublicationVue = {
  titre: string; // ← ce que montre la publication
  vues: number; // ← arrondi comme dans les statistiques (ex : 3,1 K → 3100)
  image: string; // ← vignette carrée de la publication
};

// Classement des publications les plus vues, recréé aux couleurs du site à partir des captures des statistiques
export type TopPublications = {
  titre: string;
  contexte: string;
  reseaux: { nom: "Instagram" | "Facebook"; publications: PublicationVue[] }[];
};

// Capture des statistiques, montrée comme preuve sous les résultats
export type Preuve = {
  src: string;
  alt: string;
  legende?: string; // ← réseau et période (ex : « Instagram · janvier 2026 »)
};

export type CarouselItem = {
  src: string;
  videoSlug?: string; // ← slug de la vidéo si c'est une vidéo
  fit?: "cover" | "contain"; // ← nouveau
  thumbnail?: string;
  alt?: string; // ← texte alternatif de l'image (accessibilité)
};

export type CoverItem = {
  src?: string; // ← visuel réalisé (affiche, brochure, flyer...)
  alt?: string;
  position?: string; // ← cadrage de l'image dans sa case (ex : "center 30%")
  fit?: "contain"; // ← visuel montré en entier, sur un fond flou (ex : flyer dont le texte touche les bords)
  placeholder?: string; // ← texte affiché à la place d'un visuel manquant (ex : capture du site)
  url?: string; // ← adresse affichée dans le cadre « navigateur » du placeholder
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  siteUrl: string;
  accroche?: string; // ← une phrase d'accroche, affichée sur la page Projets
  tags?: string[]; // ← types de missions, en pastilles sur la page Projets
  cover: CoverItem[]; // ← visuels réalisés montrés en couverture (le premier en grand)
  imagesCarrousel?: CarouselItem[];
  stats?: Stat[];
  sections: {
    title: string;
    objective?: string;
    items: string[];
  }[];
  // Étude de cas : réponses du questionnaire de Lola (question « numéro du projet.x »).
  // Un champ absent affiche un emplacement « À compléter » en local, et rien en production.
  fiche?: Fiche; // ← question x.1
  depart?: string; // ← question x.2 : la situation à son arrivée
  objectif?: string; // ← question x.3 : ce qu'on attendait d'elle
  partisPris?: PartiPris[]; // ← question x.4 : 2 ou 3 choix dont elle est fière
  resultat?: string; // ← question x.5 : un résultat concret, en une phrase
  topPublications?: TopPublications; // ← publications les plus vues, d'après les captures ci-dessous
  preuves?: Preuve[]; // ← captures des statistiques ([] s'il n'y en a pas)
};




export const projects: Project[] = [
  {
    slug: "halle-aux-grains",
    title: "Halle aux grains\nScène nationale de Blois",
    description:
      "La Halle aux grains - Scène nationale de Blois est un espace dédié au spectacle vivant qui offre une programmation artistique pluridisciplinaire et qui s'adresse à des publics variés.\n\nMon rôle : concevoir, produire et coordonner les contenus de communication, en lien avec l'identité et les missions d'une scène nationale.",
    siteUrl: "https://www.halleauxgrains.com/site/",
    accroche: "Faire vivre une scène nationale sur les réseaux sociaux et toucher de nouveaux publics.",
    tags: ["Réseaux sociaux", "Vidéo", "Print", "Reporting"],
    cover: [
      { src: "/photosProjectSlugs/photosHAG/BrochureHAG.webp", alt: "Brochures de saison de la Halle aux grains" },
      { src: "/photosProjectSlugs/photosHAG/thumbnailGeneClimat.webp", alt: "Affiche du festival Génération Climat", position: "center 30%" },
      { src: "/photosProjectSlugs/photosHAG/thumbnailvoeux2026.webp", alt: "Visuel « Meilleurs vœux 2026 » de la Halle aux grains", position: "center 30%" },
    ],
    imagesCarrousel: [
  { src: "/photosProjectSlugs/photosHAG/BrochureHAG.webp", fit:"cover", alt: "Brochures de saison de la Halle aux grains" },
  { src: "https://res.cloudinary.com/dkwxhd6ck/video/upload/v1781640759/RecapGenerationClimat_xy0jya.mp4", videoSlug: "video-3", fit:"contain", thumbnail:"/photosProjectSlugs/photosHAG/thumbnailGeneClimat.webp", alt: "Vidéo récapitulative du festival Génération Climat" },
  { src: "https://res.cloudinary.com/dkwxhd6ck/video/upload/v1781640740/TeaserHalleAuxGrains2526_klb2zx.mp4", videoSlug: "video-4", fit:"contain", thumbnail:"/photosProjectSlugs/photosHAG/thumbnailTeaser.webp", alt: "Teaser de la Halle aux grains" },
  { src: "https://res.cloudinary.com/dkwxhd6ck/video/upload/v1781640726/Vide%CC%81o_voeux_2026_mxfho0.mp4", videoSlug: "video-5", fit:"contain", thumbnail:"/photosProjectSlugs/photosHAG/thumbnailvoeux2026.webp", alt: "Vidéo de vœux 2026 de la Halle aux grains" },
],
   stats: [
  { countTarget: 1800, prefix: "+ ", label: "abonnés", detail: "Tous réseaux confondus, en 18 mois." },
  { countTarget: 25000, prefix: "+ ", label: "vues par mois", detail: "En moyenne, tous réseaux confondus." },
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
    // Réponses de Lola au questionnaire (projet 1)
    fiche: {
      periode: "2024 → 2026 · 2 ans",
      statut: "Alternance, assistante en communication digitale",
      equipe: "Avec Sandrine Lhuillier, responsable communication et presse",
      outils: "InDesign, Photoshop, Premiere Pro, Canva, CapCut, Google Analytics, Meta Business Suite",
    },
    depart:
      "Personne n'était dédié au digital, qui restait mis de côté. Le lieu n'avait pas de vraie présence en ligne, ni d'échanges avec son public.",
    objectif:
      "Animer les réseaux sociaux régulièrement pour faire vivre le lieu, et toucher de nouveaux publics, plus jeunes, ainsi que les professionnels.",
    partisPris: [
      {
        title: "Des capsules vidéo",
        text: "J'ai apporté ma touche en créant des capsules vidéo, une nouveauté pour le lieu.",
        lien: { href: "/videos/video-2", label: "Voir la capsule Chato'do" },
        visuels: [
          { src: "/photosHome/CouvChatodo.webp", alt: "Image de la capsule vidéo Scène nationale X Chato'do" },
        ],
        legende: "La capsule Scène nationale X Chato'do",
      },
    ],
    resultat:
      "Un changement remarqué par d'autres lieux culturels en France, de bons retours des collègues, et un public plus présent sur les réseaux sociaux.",
    topPublications: {
      titre: "Les publications les plus vues en janvier 2026",
      contexte: "Autour du festival Génération Climat, d'après les statistiques Instagram et Facebook de la Halle aux grains.",
      reseaux: [
        {
          nom: "Instagram",
          publications: [
            { titre: "Affiche du festival Génération Climat", vues: 3100, image: "/photosProjectSlugs/photosHAG/top-affiche-generation-climat.webp" },
            { titre: "Reel face caméra", vues: 2800, image: "/photosProjectSlugs/photosHAG/top-ig-reel-face-camera.webp" },
            { titre: "Reel sur l'exposition Génération Climat", vues: 1700, image: "/photosProjectSlugs/photosHAG/top-ig-reel-expo.webp" },
            { titre: "Atelier étudiants : découverte théâtre", vues: 1400, image: "/photosProjectSlugs/photosHAG/top-ig-atelier-etudiants.webp" },
          ],
        },
        {
          nom: "Facebook",
          publications: [
            { titre: "Photo du public dans la Halle", vues: 5600, image: "/photosProjectSlugs/photosHAG/top-fb-public-halle.webp" },
            { titre: "Vœux 2026", vues: 2800, image: "/photosProjectSlugs/photosHAG/top-voeux-2026.webp" },
            { titre: "Photo d'un atelier", vues: 1200, image: "/photosProjectSlugs/photosHAG/top-fb-atelier.webp" },
            { titre: "Affiche du festival Génération Climat", vues: 1000, image: "/photosProjectSlugs/photosHAG/top-affiche-generation-climat.webp" },
          ],
        },
      ],
    },
    preuves: [
      {
        src: "/photosProjectSlugs/photosHAG/stats-instagram-janvier-2026.webp",
        alt: "Statistiques Instagram de la Halle aux grains en janvier 2026 : les contenus les plus vus, de 1,4 K à 3,1 K vues",
        legende: "Instagram · janvier 2026, autour du festival Génération Climat",
      },
      {
        src: "/photosProjectSlugs/photosHAG/stats-facebook-janvier-2026.webp",
        alt: "Statistiques Facebook de la Halle aux grains en janvier 2026 : les publications les plus vues, jusqu'à 5,6 K vues",
        legende: "Facebook · janvier 2026, les publications les plus vues",
      },
    ],
  },
  {
    slug: "pole-des-arts",
    title: "Pôle des arts Paul Gaudet",
    description:
      "Le Pôle des arts Paul Gaudet offre un panel de disciplines artistiques riches et diversifiées : musique, théâtre, danse, ou plus récemment, un département bien être. \n\nMon rôle : création des réseaux sociaux, community management, développement du site internet, newsletters et supports print.",
    siteUrl: "https://poledesarts-paulgaudet.fr/",
    accroche: "Lancer les réseaux sociaux d'une école d'arts et redonner vie à son site.",
    tags: ["Réseaux sociaux", "Site web", "Newsletters", "Print"],
    cover: [
      { src: "/photosProjectSlugs/photosPoleDesArts/Afficheconcert.webp", alt: "Affiche du concert « Fantaisie et féerie » au Théâtre Beaumarchais", position: "center top" },
      { src: "/photosProjectSlugs/photosPoleDesArts/site-pole-des-arts.webp", alt: "Page d'accueil du site du Pôle des arts Paul Gaudet", url: "poledesarts-paulgaudet.fr", position: "left top" },
      { src: "/photosProjectSlugs/photosPoleDesArts/Portesouvertes.webp", alt: "Flyers réalisés pour le Pôle des arts" },
    ],
    imagesCarrousel: [
  { src: "/photosProjectSlugs/photosPoleDesArts/site-pole-des-arts.webp", fit:"contain", alt: "Page d'accueil du site du Pôle des arts Paul Gaudet, réalisé par Lola" },
  { src: "/photosProjectSlugs/photosPoleDesArts/Afficheconcert.webp", alt: "Affiche du concert « Fantaisie et féerie » au Théâtre Beaumarchais" },
  { src: "/photosProjectSlugs/photosPoleDesArts/Afficheconcertoha.webp", alt: "Affiche du concert « Les cors sous les projecteurs » de l'Orchestre d'harmonie d'Amboise" },
  { src: "/photosProjectSlugs/photosPoleDesArts/Portesouvertes.webp", alt: "Flyers réalisés pour le Pôle des arts" },
  { src: "https://res.cloudinary.com/dkwxhd6ck/video/upload/v1781694511/4PoleDesArts_dwxpqi.mp4", videoSlug: "video-6", fit:"contain", thumbnail:"/photosHome/CouvPoleDesArts.webp", alt: "Vidéo de présentation du Pôle des arts" },
],
    stats: [
  { countTarget: 1000, prefix: "+ ", label: "abonnés", detail: "En partant de zéro, sur Instagram, Facebook et LinkedIn." },
  { countTarget: 54, suffix: " %", label: "taux d'ouverture de la newsletter", detail: "Sur environ 600 abonnés." },
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
    // Réponses de Lola au questionnaire (projet 2)
    fiche: {
      periode: "2022 → 2023",
      statut: "Alternance",
      equipe: "Seule au pôle communication",
      outils: "InDesign, Photoshop, Canva, Brevo, Google Analytics, WordPress",
    },
    depart:
      "Il n'y avait pas de réseaux sociaux, et le site n'était plus mis à jour. J'ai donc créé les réseaux, et je me suis aussi occupée de la communication interne.",
    objectif:
      "Faire connaître les nouveautés, comme les cours de danse et le pôle bien-être avec le stretching, attirer de nouveaux élèves et bien informer les parents.",
    partisPris: [
      {
        title: "Ma charte graphique",
        text: "J'ai mis ma petite touche dans chacun des réseaux sociaux, avec une charte graphique que j'ai mise en place.",
        visuels: [
          {
            src: "/photosProjectSlugs/photosPoleDesArts/feed-instagram-1.webp",
            alt: "Extrait du feed Instagram du Pôle des arts : citations, cours de trompette et de chant aux couleurs de la charte graphique",
          },
          {
            src: "/photosProjectSlugs/photosPoleDesArts/feed-instagram-2.webp",
            alt: "Extrait du feed Instagram du Pôle des arts : tarifs, danse bien-être, concerts et cours de guitare aux couleurs de la charte graphique",
          },
        ],
        legende: "Extraits du feed Instagram du Pôle des arts",
      },
    ],
    resultat: "Des visites en hausse sur le site, et un bon référencement grâce à des mises à jour régulières.",
    preuves: [],
  },
  {
    slug: "chambres-en-wrach",
    title: "Les Chambres en Wrac'h\nde L'Aber",
    description:
      "Les Chambres en Wrac'h est une maison d'hôte située dans le Finistère en Bretagne. \n\nMon rôle : création complète du site internet (rédaction et photos), réalisation de flyers et création du logo de l'établissement.",
    siteUrl: "https://leschambresenwrachdelaber.fr/",
    accroche: "Faire connaître une maison d'hôtes qui démarrait : site, logo et flyers en deux mois.",
    tags: ["Site web", "Logo", "Flyers", "Photos"],
    cover: [
      { src: "/photosProjectSlugs/photosChambresEnWrach/ChambresEnWrach.webp", alt: "La maison d'hôtes Les Chambres en Wrac'h", position: "75% center" },
      { src: "/photosProjectSlugs/photosChambresEnWrach/site-chambres.webp", alt: "Page d'accueil du site Les Chambres en Wrac'h de l'Aber", url: "leschambresenwrachdelaber.fr" },
      // Flyer recadré sur le logo et le nom : l'adresse et les coordonnées personnelles de Françoise n'apparaissent pas
      { src: "/photosProjectSlugs/photosChambresEnWrach/Flyer-recadre.webp", alt: "Flyer de la maison d'hôtes Les Chambres en Wrac'h", fit: "contain" },
    ],
    imagesCarrousel: [
  { src: "/photosProjectSlugs/photosChambresEnWrach/site-chambres.webp", fit:"contain", alt: "Page d'accueil du site Les Chambres en Wrac'h de l'Aber, réalisé par Lola" },
  { src: "/photosProjectSlugs/photosChambresEnWrach/Activitenautique.webp", fit:"cover", alt: "Kitesurfeur sur une plage" },
  { src: "/photosProjectSlugs/photosChambresEnWrach/ChambresEnWrach.webp", fit:"cover", alt: "La maison d'hôtes Les Chambres en Wrac'h et son jardin" },
  { src: "/photosProjectSlugs/photosChambresEnWrach/Flyer-recadre.webp", fit:"contain", alt: "Flyer de la maison d'hôtes Les Chambres en Wrac'h" },
  { src: "/photosProjectSlugs/photosChambresEnWrach/francoise.webp", fit:"cover", alt: "Portrait de Françoise, l'hôtesse des Chambres en Wrac'h" },
],
    stats: [
  { countTarget: 2, label: "mois pour tout créer", detail: "Le site internet, le logo et les flyers, pendant mon stage." },
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
    // Réponses de Lola au questionnaire (projet 3)
    fiche: {
      periode: "2021 · 2 mois",
      statut: "Stage",
      equipe: "Seule à la communication",
      outils: "WordPress",
    },
    depart:
      "Françoise lançait tout juste son activité de maison d'hôtes. Elle n'avait ni site internet, ni logo, ni flyers, alors je suis partie de zéro.",
    objectif:
      "Être visible dans la région, chez les commerçants et sur les plateformes de réservation, pour remplir les chambres.",
    partisPris: [
      { title: "Le design du site", text: "J'ai conçu moi-même le design du site internet." },
      {
        title: "Des flyers toujours utilisés",
        text: "J'ai mené jusqu'au bout l'impression des flyers, qui sont encore utilisés aujourd'hui.",
      },
    ],
    resultat:
      "Depuis, la maison d'hôtes a des réservations toute l'année, et elle va même être classée en épis par Gîtes de France.",
    preuves: [],
  },
];