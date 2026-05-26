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
  title: "Portfolio Lola Gauchy",
  description: "Portfolio de Lola Gauchy",
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
