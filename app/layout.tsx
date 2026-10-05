import type { Metadata } from "next";
import { Unbounded, Urbanist } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { IMAGE_PARTAGE, SITE_NAME, SITE_URL } from "./lib/seo";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Police des titres (variable : toutes les graisses dans un seul fichier)
const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

// Valeurs par défaut : chaque page déclare ses propres titre, description, URL canonique
// et aperçus de partage avec metadonnees() (lib/seo.ts)
export const metadata: Metadata = {
  // Basique
  title: {
    default: "Lola Gauchy · Communicante digitale freelance à Tours",
    template: "%s | Lola Gauchy", // chaque page peut avoir son propre titre
  },
  description:
    "Communicante digitale et community manager freelance à Tours : stratégie, réseaux sociaux et vidéos tournées sur place, pour que le public vienne.",
  keywords: [
    "communicante digitale",
    "freelance Tours",
    "community manager Tours",
    "réseaux sociaux",
    "vidéo",
    "capsules vidéo",
    "lieux culturels",
    "création de contenu",
    "print événementiel",
    "Lola Gauchy",
  ],
  authors: [{ name: "Lola Gauchy" }],
  creator: "Lola Gauchy",

  // Open Graph (aperçu lors d'un partage sur Facebook, LinkedIn...)
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SITE_NAME,
    title: "Lola Gauchy · Communicante digitale freelance à Tours",
    description:
      "Réseaux sociaux et vidéos tournées sur place pour faire venir le public. Basée à Tours, disponible en freelance.",
    images: [IMAGE_PARTAGE],
  },

  // Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "Lola Gauchy · Communicante digitale freelance à Tours",
    description:
      "Réseaux sociaux et vidéos tournées sur place pour faire venir le public. Basée à Tours, disponible en freelance.",
    images: [IMAGE_PARTAGE.url],
  },

  // Indexation : Google peut montrer de grandes images, des extraits et des aperçus vidéo complets
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Favicon : app/favicon.ico, ajouté automatiquement par Next

  // URL du site : sert à générer les liens absolus (URL canoniques, aperçus de partage, og-image...)
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${urbanist.variable} ${unbounded.variable}`}>

      <body className="antialiased">
        {/* Lien d'évitement : visible seulement au clavier, il mène directement au contenu */}
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-brand focus:shadow-lg"
        >
          Aller au contenu
        </a>
        <Header />        
        <main id="contenu">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
