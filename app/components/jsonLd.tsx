// Données structurées (schema.org) lues par Google, dans une balise <script type="application/ld+json">.
// Les « < » sont échappés : le contenu ne peut pas refermer la balise
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
