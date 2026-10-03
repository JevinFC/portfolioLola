import { Fragment } from "react";

interface AnimatedWordsProps {
  text: string;
  accent?: string; // fin de phrase affichée en rose
  delay?: number; // délai avant le premier mot (s)
  step?: number; // décalage entre deux mots (s)
}

// Titre qui apparaît mot par mot (animation CSS : rien à charger, et rien ne bouge si l'appareil réduit les animations)
export default function AnimatedWords({ text, accent, delay = 0.1, step = 0.06 }: AnimatedWordsProps) {
  const plain = text.split(" ").filter(Boolean);
  const accented = accent ? accent.split(" ").filter(Boolean) : [];

  const word = (w: string, i: number) => (
    <span className="word-in" style={{ animationDelay: `${(delay + i * step).toFixed(2)}s` }}>
      {w}
    </span>
  );

  return (
    <>
      {/* Phrase complète pour les lecteurs d'écran, mots animés masqués */}
      <span className="sr-only">{accent ? `${text} ${accent}` : text}</span>
      <span aria-hidden="true">
        {plain.map((w, i) => (
          <Fragment key={i}>
            {word(w, i)}{" "}
          </Fragment>
        ))}
        {accented.length > 0 && (
          <span className="text-accent">
            {accented.map((w, j) => (
              <Fragment key={j}>
                {word(w, plain.length + j)}
                {j < accented.length - 1 ? " " : ""}
              </Fragment>
            ))}
          </span>
        )}
      </span>
    </>
  );
}
