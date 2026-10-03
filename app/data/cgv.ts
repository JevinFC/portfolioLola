// Conditions générales de vente : les règles propres à Lola, une ou deux phrases par point.
// Tant qu'une règle manque (undefined), elle apparaît « À compléter » en local,
// et la page CGV reste hors ligne en production (404, pas de lien dans le pied de page).
export const cgv: Record<
  "clientele" | "devis" | "tva" | "acompte" | "paiement" | "modifications" | "annulation" | "droits",
  string | undefined
> = {
  clientele: undefined, // ← CGV 1 : professionnels uniquement, ou aussi des particuliers ?
  devis: undefined, // ← CGV 2 : durée de validité des devis
  tva: undefined, // ← CGV 3 : « TVA non applicable, article 293 B du CGI » si elle est en franchise de TVA
  acompte: undefined, // ← CGV 4 : acompte demandé à la signature, et combien
  paiement: undefined, // ← CGV 5 : délai de paiement des factures et moyens de paiement acceptés
  modifications: undefined, // ← CGV 6 : séries de modifications comprises, et ce qui se passe au-delà
  annulation: undefined, // ← CGV 7 : ce qui reste dû si le client annule ; préavis pour arrêter un suivi mensuel
  droits: undefined, // ← CGV 8 : droits cédés sur les créations, fichiers sources, présence dans son portfolio
};

// Les CGV ne sont publiées qu'une fois toutes les règles renseignées
export const cgvCompletes = Object.values(cgv).every(Boolean);
