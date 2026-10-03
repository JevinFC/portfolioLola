export type Temoignage = {
  text: string;
  name: string;
  role: string;
  photo: string;
  projet?: string; // ← slug du projet concerné : l'avis est alors repris sur son étude de cas
};

export const temoignages: Temoignage[] = [
  {
    text: "L’entreprise avait besoin d’un.e salarié.e de l’envergure de Lola. Très bonne et rapide intégration dans l’équipe !",
    name: "Sandrine Lhuillier",
    role: "Responsable communication/Presse, Scène nationale de Blois",
    photo: "/photosHome/SandrineLhuillier.webp",
    projet: "halle-aux-grains",
  },
  {
    text: "Lola est très professionnelle dans les missions qui lui sont confiées. Elle sait mener à bien l’ensemble de ses travaux, avec gentillesse et bienveillance. Je la recommande avec grand plaisir et suis sûr qu’elle fera un beau chemin.",
    name: "Pascal Caraty",
    role: "Ancien directeur du Pôle des Arts",
    photo: "/photosHome/PascalCaraty.webp",
    projet: "pole-des-arts",
  },
  {
    text: "J’ai reçu Lola comme stagiaire, chargée de webmarketing, pour l’une de mes activités. Je fus réellement ravie de l’avoir accueillie au sein de mon entreprise ! Elle est impliquée, a soif d’apprendre, a une sensibilité créative, est à l’écoute, est force de propositions et professionnelle. Bref, Lola est une perle et je la recommande chaudement !",
    name: "Marika Pech",
    role: "Coach de vie intuitive",
    photo: "/photosHome/MarikaPech.webp",
  },
];
