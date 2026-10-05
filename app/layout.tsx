import type { Metadata } from "next";
import { Unbounded, Urbanist } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

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

export const metadata: Metadata = {
  // Basique
  title: {
    default: "Lola Gauchy — Communicante digitale freelance",
    template: "%s | Lola Gauchy", // chaque page peut avoir son propre titre
  },
  description:
    "Lola Gauchy, communicante digitale freelance à Tours : réseaux sociaux et vidéos pour les lieux culturels, les lieux touristiques et les indépendants.",
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
    siteName: "Lola Gauchy",
    title: "Lola Gauchy — Communicante digitale freelance",
    description:
      "Réseaux sociaux et vidéos pour faire venir le public dans les lieux culturels, les lieux touristiques et chez les indépendants. Basée à Tours, disponible en freelance.",
    images: [
      {
        url: "/og-image.jpg", // image 1200x630px dans /public
        width: 1200,
        height: 630,
        alt: "Lola Gauchy — Communicante digitale freelance",
      },
    ],
  },

  // Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "Lola Gauchy — Communicante digitale freelance",
    description:
      "Réseaux sociaux et vidéos pour faire venir le public dans les lieux culturels, les lieux touristiques et chez les indépendants. Basée à Tours, disponible en freelance.",
    images: ["/og-image.jpg"],
  },

  // Indexation
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // Favicon
  icons: {
    icon: "/favicon.ico",
  },

  // URL du site : sert à générer les liens absolus (aperçus de partage, og-image...)
  metadataBase: new URL("https://lolagauchy.fr"),
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
