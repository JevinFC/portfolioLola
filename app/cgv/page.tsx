import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import Rubrique from "../components/rubrique";
import ACompleter, { AFFICHER_EMPLACEMENTS } from "../components/aCompleter";
import { contact } from "../data/contact";
import { cgv, cgvCompletes } from "../data/cgv";

export const metadata = {
  title: "Conditions générales de vente",
  description:
    "Conditions générales de vente des prestations de communication digitale de Lola Gauchy, freelance à Tours.",
};

const lien = "font-semibold text-brand underline decoration-accent decoration-2 underline-offset-4";

// Une règle propre à Lola (data/cgv.ts) : ses paragraphes, ou un emplacement « À compléter » tant qu'elle manque
function Regle({ texte, question, children }: { texte?: string; question: string; children: ReactNode }) {
  if (!texte) return <ACompleter question={question}>{children}</ACompleter>;
  // Espace insécable avant « : », « % »… et après « : la ponctuation ne part jamais seule à la ligne
  const typo = (s: string) => s.replace(/ ([:;?!%»])/g, " $1").replace(/« /g, "« ");
  return (
    <>
      {texte.split("\n").map((paragraphe) => (
        <p key={paragraphe}>{typo(paragraphe)}</p>
      ))}
    </>
  );
}

export default function Cgv() {
  // En production, la page n'existe qu'une fois toutes les règles renseignées
  if (!cgvCompletes && !AFFICHER_EMPLACEMENTS) notFound();

  return (
    <div className="w-full bg-zinc-50 font-[urbanist] text-black">
      <div className="mx-auto max-w-3xl px-6 pb-20 pt-32 md:pt-36">
        <h1 className="text-3xl font-extrabold text-brand md:text-5xl">Conditions générales de vente</h1>
        <p className="mt-4 text-zinc-600">Dernière mise à jour&nbsp;: octobre 2026</p>

        <div className="mt-10">
          <Rubrique titre="Prestataire">
            <p>Lola Gauchy, {contact.statut}.</p>
            <p>
              SIRET&nbsp;: {contact.siret} · {contact.adresse}
            </p>
            <p>
              Contact&nbsp;:{" "}
              <a href={`mailto:${contact.email}`} className={lien}>
                {contact.email}
              </a>
            </p>
          </Rubrique>

          <Rubrique titre="Objet">
            <p>
              Les présentes conditions générales de vente (CGV) s’appliquent aux prestations de communication digitale
              de Lola Gauchy&nbsp;: stratégie, création de contenus (visuels, vidéos, textes), gestion et animation des
              réseaux sociaux, sites internet et supports imprimés.
            </p>
            <Regle texte={cgv.clientele} question="CGV 1">
              À qui s’adressent les prestations&nbsp;: uniquement aux professionnels (entreprises, associations,
              collectivités, indépendants), ou aussi aux particuliers. Avec des particuliers, deux points s’ajoutent&nbsp;:
              le droit de rétractation de 14 jours et le médiateur de la consommation auquel adhérer.
            </Regle>
            <p>
              Signer un devis vaut acceptation des présentes CGV. Si le devis prévoit autre chose, c’est le devis qui
              s’applique.
            </p>
          </Rubrique>

          <Rubrique titre="Devis et commande">
            <p>Chaque prestation fait l’objet d’un devis détaillé.</p>
            <Regle texte={cgv.devis} question="CGV 2">
              Combien de temps un devis reste valable (30 jours, par exemple).
            </Regle>
            <p>La commande est confirmée par le retour du devis daté et signé, avec la mention « Bon pour accord ».</p>
          </Rubrique>

          <Rubrique titre="Prix">
            <p>Les prix sont indiqués en euros sur le devis.</p>
            <Regle texte={cgv.tva} question="CGV 3">
              Si Lola est en franchise de TVA&nbsp;: « TVA non applicable, article 293 B du CGI ».
            </Regle>
          </Rubrique>

          <Rubrique titre="Paiement">
            <Regle texte={cgv.acompte} question="CGV 4">
              Un acompte est-il demandé à la signature du devis&nbsp;? Si oui, de combien (30&nbsp;%, 50&nbsp;%…)&nbsp;?
            </Regle>
            <Regle texte={cgv.paiement} question="CGV 5">
              Le délai de paiement des factures (à réception, sous 30 jours…) et les moyens acceptés (virement…).
            </Regle>
            <p>
              Tout retard de paiement entraîne de plein droit des pénalités au taux
              appliqué par la Banque centrale européenne à son opération de refinancement la plus récente, majoré de
              10 points, ainsi qu’une indemnité forfaitaire de 40&nbsp;€ pour frais de recouvrement (articles L441-10 et
              D441-5 du Code de commerce).
            </p>
            <p>
              Pour un client public (collectivité, établissement public), ce sont les règles de la commande publique qui
              s’appliquent&nbsp;: la facture est déposée sur Chorus Pro et réglée dans le délai fixé par le Code de la
              commande publique (30&nbsp;jours pour la plupart des acheteurs publics), avec les intérêts moratoires qu’il
              prévoit en cas de retard.
            </p>
          </Rubrique>

          <Rubrique titre="Déroulement de la mission">
            <p>
              Lola Gauchy réalise les prestations avec soin et selon les règles de l’art&nbsp;: elle est tenue à une
              obligation de moyens.
            </p>
            <p>
              Le client lui transmet à temps les informations, textes, images et accès nécessaires, et garantit qu’il
              dispose des droits sur ces éléments. Les délais prévus au devis courent à partir de leur réception.
            </p>
            <Regle texte={cgv.modifications} question="CGV 6">
              Le nombre de séries de modifications comprises dans le devis, et ce qui se passe au-delà (facturées en
              plus, par exemple).
            </Regle>
            <p>
              Les résultats sur les réseaux sociaux (portée, abonnés, interactions) dépendent aussi des plateformes et
              de leurs algorithmes&nbsp;: ils ne peuvent pas être garantis.
            </p>
          </Rubrique>

          <Rubrique titre="Annulation et résiliation">
            <Regle texte={cgv.annulation} question="CGV 7">
              Ce qui reste dû si le client annule en cours de route (acompte, travail déjà réalisé) et, pour un suivi
              mensuel des réseaux sociaux, le préavis pour y mettre fin.
            </Regle>
          </Rubrique>

          <Rubrique titre="Propriété intellectuelle">
            <p>Les créations réalisées (visuels, vidéos, textes) sont protégées par le droit d’auteur.</p>
            <Regle texte={cgv.droits} question="CGV 8">
              Les droits cédés au client&nbsp;: pour quels usages et supports, pour combien de temps, à partir de quand
              (après paiement complet, par exemple). Les fichiers sources sont-ils fournis&nbsp;? Lola peut-elle montrer
              les réalisations dans son portfolio&nbsp;?
            </Regle>
          </Rubrique>

          <Rubrique titre="Responsabilité">
            <p>Le client reste responsable des contenus qu’il fournit et de ceux qu’il valide avant publication.</p>
            <p>
              Lola Gauchy ne peut être tenue responsable des décisions ou des pannes des plateformes et outils tiers
              (réseaux sociaux, hébergeurs), comme une suspension de compte ou un changement d’algorithme.
            </p>
          </Rubrique>

          <Rubrique titre="Force majeure">
            <p>
              Aucune des parties n’est responsable d’un retard ou d’un manquement dû à un cas de force majeure, au sens
              de l’article 1218 du Code civil.
            </p>
          </Rubrique>

          <Rubrique titre="Données personnelles">
            <p>
              Les données du client servent uniquement à la relation commerciale&nbsp;: devis, factures et échanges. Le
              détail figure dans les{" "}
              <Link href="/mentions-legales#donnees" className={lien}>
                mentions légales
              </Link>
              .
            </p>
          </Rubrique>

          <Rubrique titre="Droit applicable et litiges">
            <p>Les présentes CGV sont soumises au droit français.</p>
            <p>
              En cas de désaccord, les parties cherchent d’abord une solution amiable. À défaut, le litige est porté
              devant le tribunal compétent.
            </p>
          </Rubrique>
        </div>

        <Link
          href="/"
          className="mt-6 inline-flex rounded-full border-2 border-brand px-6 py-3 font-semibold text-brand transition hover:bg-brand hover:text-white"
        >
          Retour à l’accueil
        </Link>
      </div>
    </div>
  );
}
