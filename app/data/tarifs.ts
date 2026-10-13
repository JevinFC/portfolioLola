// Tarifs affichés sur l'accueil (section « Mes tarifs ») : grille d'octobre 2026, construite sur 45 €/h,
// où la hausse porte sur les formules qui contiennent de la vidéo. Prix hors taxes, « à partir de » ;
// le détail est dans le devis.
// Les prix d'appel sont aussi cités dans la FAQ (data/faq.json, question sur les tarifs) : les changer aux deux endroits.

// Une ligne de formule : du texte, ou du texte suivi d'une fin mise en gras
export type Ligne = string | { texte: string; gras: string };

export type Formule = {
  nom: string;
  prix: number; // ← par mois, hors taxes, à partir de
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
  pastille?: string; // ← mention à côté du nom (ex : « Avant de vous engager »)
};

// Une option, possible avec chacune des formules
export type Option = {
  nom: string;
  detail: string;
  prix?: number; // ← absent : le prix est indiqué sur le devis
};

// Abonnements mensuels : une première période de 3 mois, puis sans engagement, avec un préavis de 15 jours
// (voir les CGV). Les quantités sont des totaux par mois, tous réseaux confondus
export const formules: Formule[] = [
  {
    nom: "Présence",
    prix: 490,
    pourQui: "Pour les indépendants qui veulent rester visibles sans y passer leurs soirées.",
    inclus: [
      "1 réseau principal, relayé sur un second",
      "8 publications par mois au total (visuels, carrousels, textes)",
      "Calendrier du mois, validé en une fois",
      "Modération 2 fois par semaine et bilan mensuel d’une page",
    ],
  },
  {
    nom: "Rayonnement",
    prix: 990,
    pourQui: "Pour celles et ceux qui veulent faire venir du monde, pas seulement exister.",
    inclus: [
      "2 à 3 réseaux",
      { texte: "12 publications par mois au total, dont", gras: "2 reels tournés lors d’un même passage" },
      "4 séries de stories par mois, autour des temps forts et des coulisses",
      "Modération 3 fois par semaine, bilan avec recommandations et visio de 30 minutes",
    ],
    conseillee: true,
  },
  {
    nom: "Saison",
    prix: 1690,
    pourQui: "Pour les structures qui n’ont personne de dédié à leur communication.",
    inclus: [
      "Stratégie et calendrier trimestriels",
      { texte: "Tous les deux mois,", gras: "2 capsules vidéo tournées sur place" },
      "Newsletter mensuelle et reporting détaillé",
    ],
  },
];

// Options, pour toutes les formules
export const options: Option[] = [
  {
    nom: "Couverture d’un événement",
    detail: "Présence sur place, stories en direct et reel récapitulatif. Majorée de 20 % le soir et le week-end.",
    prix: 320,
  },
  { nom: "Capsule vidéo supplémentaire", detail: "Tournée le même jour qu’un tournage déjà prévu.", prix: 300 },
  { nom: "Déplacement", detail: "Au-delà de Tours Métropole, un forfait indiqué sur le devis." },
];

// Frais de mise en route, facturés le premier mois : modèles de publication, accès aux comptes et audit express
export const miseEnRoute = 290;

// L'audit : pour un plan détaillé avant de s'engager. Il est déduit de l'abonnement signé dans les 30 jours,
// en trois fois, sur les trois premiers mois (un client ne peut pas encaisser la remise et partir aussitôt)
export const audit: Prestation = {
  nom: "Audit de vos réseaux",
  detail: "Analyse de vos comptes, de vos publics et de la concurrence, plan d’action restitué en une heure.",
  prix: 450,
  pastille: "Avant de vous engager",
};

// Prestations ponctuelles (sélection : la grille complète sert aux devis)
export const prestations: Prestation[] = [
  audit,
  { nom: "Stratégie éditoriale", detail: "Cibles, ligne éditoriale, piliers de contenu et calendrier sur trois mois.", prix: 790 },
  { nom: "Capsule vidéo", detail: "Repérage, une demi-journée de tournage, montage, sous-titres, deux formats.", prix: 360 },
  { nom: "Pack de 3 capsules", detail: "Trois capsules issues d’un même tournage.", prix: 990 },
  { nom: "Couverture d’événement", detail: "Présence sur place, stories en direct et reel récapitulatif.", prix: 320 },
  { nom: "Affiche ou flyer", detail: "Création, deux séries de modifications, fichiers pour l’impression.", prix: 230 },
  { nom: "Newsletter", detail: "Rédaction, mise en page, envoi et statistiques.", prix: 140 },
  { nom: "Renfort à la journée", detail: "Dans votre équipe com ou votre agence, pour un temps fort ou un remplacement.", prix: 315 },
];
