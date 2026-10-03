import Link from "next/link";
import Rubrique from "../components/rubrique";
import { contact } from "../data/contact";

export const metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales et données personnelles du site de Lola Gauchy, communicante digitale freelance à Tours.",
};

const lien = "font-semibold text-brand underline decoration-accent decoration-2 underline-offset-4";

export default function MentionsLegales() {
  const email = (
    <a href={`mailto:${contact.email}`} className={lien}>
      {contact.email}
    </a>
  );
  // « 06 16 31 84 84 » → « +33616318484 », le format attendu par les liens tel:
  const telephone = "+33" + contact.telephone.replace(/\s/g, "").slice(1);

  return (
    <div className="w-full bg-zinc-50 font-[urbanist] text-black">
      <div className="mx-auto max-w-3xl px-6 pb-20 pt-32 md:pt-36">
        <h1 className="text-3xl font-extrabold text-brand md:text-5xl">Mentions légales</h1>
        <p className="mt-4 text-zinc-600">Dernière mise à jour&nbsp;: octobre 2026</p>

        <div className="mt-10">
          <Rubrique titre="Éditrice du site">
            <p>Lola Gauchy, communicante digitale freelance.</p>
            <p>Statut&nbsp;: {contact.statut}.</p>
            <p>SIRET&nbsp;: {contact.siret}</p>
            <p>Adresse&nbsp;: {contact.adresse}</p>
            <p>
              Téléphone&nbsp;:{" "}
              <a href={`tel:${telephone}`} className={lien}>
                {contact.telephone}
              </a>
            </p>
            <p>E-mail&nbsp;: {email}</p>
            <p>Directrice de la publication&nbsp;: Lola Gauchy.</p>
          </Rubrique>

          <Rubrique titre="Conception et développement">
            <p>
              Kévin Machado,{" "}
              <a href="https://portfolio.kevinmachado.dev/" target="_blank" rel="noopener noreferrer" className={lien}>
                portfolio.kevinmachado.dev
              </a>
              .
            </p>
          </Rubrique>

          <Rubrique titre="Hébergement">
            <p>
              Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, États-Unis (
              <a href="https://www.cloudflare.com/fr-fr/" target="_blank" rel="noopener noreferrer" className={lien}>
                cloudflare.com
              </a>
              ).
            </p>
            <p>Téléphone&nbsp;: +1 888 993 5273</p>
          </Rubrique>

          <Rubrique titre="Propriété intellectuelle">
            <p>
              Les textes, visuels et vidéos présentés sur ce site ont été réalisés par Lola Gauchy dans le cadre de
              ses missions. Les noms, logos et contenus des structures citées restent leur propriété.
            </p>
            <p>Toute reproduction sans autorisation est interdite.</p>
          </Rubrique>

          <Rubrique id="donnees" titre="Données personnelles">
            <p>
              Le formulaire de contact recueille votre nom, votre adresse e-mail et votre message. Ces informations
              servent uniquement à vous répondre&nbsp;: elles ne sont ni cédées, ni revendues, ni utilisées à
              d’autres fins.
            </p>
            <p>Les messages sont transmis par e-mail grâce au service EmailJS.</p>
            <p>
              Conformément au RGPD, vous pouvez demander à tout moment l’accès à vos données, leur modification ou
              leur suppression en écrivant à {email}.
            </p>
          </Rubrique>

          <Rubrique titre="Cookies">
            <p>Ce site ne dépose aucun cookie publicitaire ni de mesure d’audience.</p>
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
