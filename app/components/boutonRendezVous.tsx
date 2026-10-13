import Link from "next/link";
import type { ReactNode } from "react";
import { CalendarCheck } from "lucide-react";
import { contact } from "../data/contact";

// Le lien du rendez-vous découverte : l'agenda Calendly de Lola (data/contact.ts), ouvert dans un nouvel onglet,
// ou à défaut le formulaire de contact de l'accueil
export function LienRendezVous({ className, children }: { className?: string; children: ReactNode }) {
  if (contact.rendezVous) {
    return (
      <a href={contact.rendezVous} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
        <span className="sr-only"> (nouvel onglet)</span>
      </a>
    );
  }
  return (
    <Link href="/#contact" className={className}>
      {children}
    </Link>
  );
}

const variantes = {
  plein: "border-brand bg-brand text-white hover:scale-105",
  contour: "border-brand text-brand hover:bg-brand hover:text-white",
};

// Bouton « Réserver un rendez-vous découverte (30 min, gratuit) » : la porte d'entrée vers un abonnement,
// en haut de l'accueil et de la page À propos, et dans les tarifs
export default function BoutonRendezVous({
  variante = "plein",
  className = "",
}: {
  variante?: keyof typeof variantes;
  className?: string;
}) {
  return (
    <LienRendezVous
      className={`inline-flex items-center gap-3 rounded-full border-2 px-5 py-2.5 text-left text-[0.9375rem] font-semibold transition sm:px-6 sm:text-base ${variantes[variante]} ${className}`}
    >
      {/* Pas d'icône sur téléphone : la ligne « Réserver un rendez-vous découverte » tient alors sans se couper */}
      <CalendarCheck className="hidden h-5 w-5 flex-shrink-0 sm:block" aria-hidden="true" />
      <span className="flex flex-col leading-tight">
        Réserver un rendez-vous découverte
        <span className="text-sm font-medium opacity-80">30&nbsp;min, gratuit</span>
      </span>
    </LienRendezVous>
  );
}
