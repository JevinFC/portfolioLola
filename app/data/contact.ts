// Coordonnées de Lola : formulaire de contact, pied de page et mentions légales
export const contact = {
  email: "lolagauchy@gmail.com",
  telephone: "06 16 31 84 84",
  adresse: "16 rue Jean-Jacques Noirmant, 37000 Tours",
  statut: "entrepreneure individuelle (EI), en micro-entreprise",
  siret: "103 086 997 00014",
  linkedin: "https://www.linkedin.com/in/lola-gauchy/",
  instagram: "https://www.instagram.com/lolafetacom/",
  delaiReponse: "48 h", // ← délai de réponse annoncé dans le formulaire
  // ← agenda en ligne de Lola (Calendly) pour le rendez-vous découverte : les boutons « Réserver un rendez-vous
  // découverte » y mènent directement. Vide, ils mèneraient au formulaire de contact de l'accueil
  rendezVous: "https://calendly.com/lolagauchy/rdvdecouverte",
};

// « 06 16 31 84 84 » → « +33616318484 », le format attendu par les liens tel: et par Google
export const telephoneInternational = "+33" + contact.telephone.replace(/\s/g, "").slice(1);
