// Tarifs affichés sur l'accueil (section « Mes tarifs ») : grille de l'étude de marché d'octobre 2026,
// construite sur 45 €/h. Prix « à partir de », TVA non applicable ; le détail est dans le devis.
// Les prix d'appel sont aussi cités dans la FAQ (data/faq.json, question sur les tarifs) : les changer aux deux endroits.

// Une ligne de formule : du texte, ou du texte suivi d'une fin mise en gras
export type Ligne = string | { texte: string; gras: string };

export type Formule = {
  nom: string;
  prix: number; // ← par mois, à partir de
  pourQui: string;
  // Présentation en escalier : la première formule liste la base, chacune des suivantes
  // seulement ce qu'elle ajoute à la précédente (« Tout Présence, et en plus : »)
  inclus: Ligne[];
  conseillee?: boolean; // ← formule mise en avant
};

export type Prestation = {
  nom: string;
  detail: string;
  prix: number; // ← à partir de
  pourCommencer?: boolean; // ← porte d'entrée conseillée avant un abonnement
};

// Abonnements mensuels, sans engagement (préavis de 15 jours, comme le prévoient les CGV)
export const formules: Formule[] = [
  {
    nom: "Présence",
    prix: 490,
    pourQui: "Pour les indépendants qui veulent rester visibles sans y passer leurs soirées.",
    inclus: [
      "1 réseau principal, relayé sur un second",
      "8 publications par mois (visuels, carrousels, textes)",
      "Calendrier du mois validé ensemble",
      "Modération 2 fois par semaine et bilan mensuel",
    ],
  },
  {
    nom: "Rayonnement",
    prix: 890,
    pourQui: "Pour les lieux qui veulent faire venir du monde, pas seulement exister.",
    inclus: [
      "2 à 3 réseaux",
      { texte: "12 publications par mois, dont", gras: "2 reels tournés et montés" },
      "Stories autour des temps forts et des coulisses",
      "Modération 3 fois par semaine et point visio mensuel",
    ],
    conseillee: true,
  },
  {
    nom: "Saison",
    prix: 1390,
    pourQui: "Pour les lieux culturels qui n’ont personne de dédié au digital.",
    inclus: [
      "Stratégie de saison et calendrier trimestriel",
      { texte: "16 publications par mois, dont", gras: "4 capsules vidéo tournées sur place" },
      "Couverture d’un temps fort par mois",
      "Newsletter mensuelle et reporting détaillé",
    ],
  },
];

// Prestations ponctuelles (sélection : la grille complète sert aux devis)
export const prestations: Prestation[] = [
  {
    nom: "Audit de vos réseaux",
    detail: "Analyse de vos comptes, de vos publics et de la concurrence, plan d’action restitué en une heure.",
    prix: 450,
    pourCommencer: true,
  },
  { nom: "Stratégie éditoriale", detail: "Cibles, ligne éditoriale, piliers de contenu et calendrier sur trois mois.", prix: 790 },
  { nom: "Capsule vidéo", detail: "Repérage, une demi-journée de tournage, montage, sous-titres, deux formats.", prix: 360 },
  { nom: "Pack de 3 capsules", detail: "Trois capsules issues d’un même tournage.", prix: 990 },
  { nom: "Couverture d’événement", detail: "Présence sur place, stories en direct et reel récapitulatif.", prix: 320 },
  { nom: "Affiche ou flyer", detail: "Création, deux séries de modifications, fichiers pour l’impression.", prix: 230 },
  { nom: "Newsletter", detail: "Rédaction, mise en page, envoi et statistiques.", prix: 140 },
  { nom: "Renfort à la journée", detail: "Dans votre équipe com ou votre agence, pour un temps fort ou un remplacement.", prix: 315 },
];
