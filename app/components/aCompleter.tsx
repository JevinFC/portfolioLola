import { PenLine } from "lucide-react";
import type { ReactNode } from "react";

// Les emplacements « À compléter » ne s'affichent qu'en local (npm run dev) :
// en production, un bloc sans contenu est simplement masqué
export const AFFICHER_EMPLACEMENTS = process.env.NODE_ENV !== "production";

interface ACompleterProps {
  question?: string; // ← numéro de la question dans le questionnaire de Lola (ex : « 1.2 »), s'il y en a une
  children: ReactNode; // ← ce qu'il faudra écrire à cet endroit
  onDark?: boolean; // ← emplacement posé sur un aplat bleu
  className?: string;
}

// Emplacement à remplir avec les réponses du questionnaire
export default function ACompleter({ question, children, onDark = false, className = "" }: ACompleterProps) {
  if (!AFFICHER_EMPLACEMENTS) return null;

  return (
    <div
      className={`rounded-2xl border-2 border-dashed p-5 ${
        onDark ? "border-white/40 bg-white/5 text-white/85" : "border-accent/50 bg-accent/5 text-zinc-700"
      } ${className}`}
    >
      <p
        className={`flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] ${
          onDark ? "text-white" : "text-accent"
        }`}
      >
        <PenLine className="h-4 w-4" aria-hidden="true" />
        À compléter{question ? ` · question ${question}` : ""}
      </p>
      <div className="mt-2 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
