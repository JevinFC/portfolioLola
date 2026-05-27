import type { Metadata } from "next";
import { Geist, Geist_Mono, Urbanist } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400","600", "700"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Basique
  title: {
    default: "Lola Gauchy — Communicante digitale freelance",
    template: "%s | Lola Gauchy", // chaque page peut avoir son propre titre
  },
  description:
    "Lola Gauchy, communicante digitale freelance à Tours. Création de contenu, stratégie réseaux sociaux, webdéveloppement, print et charte graphique.",
  keywords: [
    "communicante digitale",
    "freelance Tours",
    "création de contenu",
    "réseaux sociaux",
    "community manager",
    "webdéveloppement",
    "SEO",
    "charte graphique",
    "Lola Gauchy",
  ],
  authors: [{ name: "Lola Gauchy" }],
  creator: "Lola Gauchy",

  // Open Graph (aperçu lors d'un partage sur Facebook, LinkedIn...)
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://votre-domaine.fr", // à remplacer
    siteName: "Lola Gauchy",
    title: "Lola Gauchy — Communicante digitale freelance",
    description:
      "Création de contenu, stratégie réseaux sociaux, webdéveloppement et print. Basée à Tours, disponible en freelance.",
    images: [
      {
        url: "/og-image.jpg", // image 1200x630px à mettre dans /public
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
      "Création de contenu, stratégie réseaux sociaux, webdéveloppement et print. Basée à Tours, disponible en freelance.",
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
    apple: "/apple-touch-icon.png", // optionnel, pour iOS
  },

  // URL canonique
  metadataBase: new URL("https://votre-domaine.fr"), // à remplacer
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />        
        {children}
        <Footer />
      </body>
    </html>
  );
}
