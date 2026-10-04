// Conditions générales de vente : les règles propres à Lola, une ou deux phrases par point
// (« \n » commence un nouveau paragraphe). Réponses de Lola au questionnaire CGV, octobre 2026.
// Tant qu'une règle manque (undefined), elle apparaît « À compléter » en local,
// et la page CGV reste hors ligne en production (404, pas de lien dans le pied de page).
export const cgv: Record<
  "clientele" | "devis" | "tva" | "acompte" | "paiement" | "modifications" | "annulation" | "droits",
  string | undefined
> = {
  // CGV 1 : uniquement des professionnels
  clientele: "Elles s’adressent exclusivement aux clients professionnels : entreprises, associations, collectivités et indépendants.",
  // CGV 2 : devis valables 1 mois
  devis: "Le devis est valable un mois à compter de sa date d’émission.",
  // CGV 3 : franchise en base de TVA
  tva: "Lola Gauchy bénéficie de la franchise en base de TVA : TVA non applicable, article 293 B du Code général des impôts.",
  // CGV 4 : acompte de 30 %, solde à la livraison
  acompte: "Un acompte de 30 % du montant du devis est demandé à la signature. Le solde est dû à la livraison du travail.",
  // CGV 5 : à réception, par virement ou paiement en ligne
  paiement: "Les factures sont payables à réception, par virement bancaire ou par paiement en ligne.",
  // CGV 6 : deux séries de modifications, les suivantes facturées à l'heure
  modifications:
    "Le prix comprend deux séries de modifications. Au-delà, les modifications sont facturées en supplément, au temps passé, selon le tarif horaire indiqué sur le devis.",
  // CGV 7 : l'acompte reste acquis ; suivi mensuel sans engagement, préavis de 15 jours
  annulation:
    "Si le client annule une mission en cours, l’acompte versé reste acquis à Lola Gauchy.\n" +
    "Le suivi mensuel des réseaux sociaux est sans durée minimum d’engagement : le client peut y mettre fin à tout moment, avec un préavis de 15 jours.",
  // CGV 8 : cession complète après paiement, crédit « Lola Gauchy », sources en supplément, portfolio avec accord
  droits:
    "Une fois la facture entièrement payée, le client peut utiliser librement les créations livrées : Lola Gauchy lui cède les droits de reproduction, de représentation et d’adaptation, sur tous les supports, pour le monde entier et pour toute la durée légale des droits d’auteur.\n" +
    // Crédit adapté à chaque support, validé par Lola : jamais exigé quand c'est techniquement impossible
    "Sauf accord contraire, le client crédite Lola Gauchy lorsque le support le permet : une mention ou un tag (@lolafetacom) sur les réseaux sociaux, « Création : Lola Gauchy » sur les supports imprimés, une mention dans la description ou le générique d’une vidéo, un lien vers lolagauchy.fr sur un site internet. Ce crédit n’est pas demandé quand il est techniquement impossible (petit format, espace insuffisant).\n" +
    "Les fichiers sources (InDesign, Premiere Pro, Canva…) ne sont pas inclus : ils peuvent être fournis sur demande, moyennant un supplément. Lola Gauchy ne présente une réalisation dans son portfolio qu’avec l’accord du client.",
};

// Les CGV ne sont publiées qu'une fois toutes les règles renseignées
export const cgvCompletes = Object.values(cgv).every(Boolean);
