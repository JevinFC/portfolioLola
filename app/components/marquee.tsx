"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { stickerImage } from "./sticker";

const services = [
  "Création de contenu",
  "Réseaux sociaux",
  "Vidéo",
  "Print",
  "Sites web",
  "SEO",
  "Newsletters",
  "Charte graphique",
];

// Bandeau défilant des services, séparés par la fleur de Lola.
// Il ne s'arrête pas au survol ; si l'appareil réduit les animations, il est figé (voir globals.css).
export default function Marquee() {
  const [paused, setPaused] = useState(false);

  return (
    <div className="relative overflow-hidden bg-brand text-white">
      <p className="sr-only">Services : {services.join(", ")}.</p>

      {/* Deux copies de la liste : le défilement boucle sans à-coup */}
      <div className={`marquee-track flex w-max py-4 md:py-5 ${paused ? "marquee-paused" : ""}`} aria-hidden="true">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {services.map((service) => (
              <li key={service} className="flex items-center">
                <span className="whitespace-nowrap px-5 font-display text-lg font-extrabold uppercase md:px-7 md:text-2xl">
                  {service}
                </span>
                <img {...stickerImage("flower")} alt="" className="h-7 w-7 md:h-9 md:w-9" />
              </li>
            ))}
          </ul>
        ))}
      </div>

      {/* Bouton pause : invisible à la souris, il n'apparaît que pour la navigation au clavier */}
      <button
        type="button"
        onClick={() => setPaused(!paused)}
        aria-label={paused ? "Relancer le défilement du bandeau" : "Mettre en pause le défilement du bandeau"}
        className="pointer-events-none absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand opacity-0 transition focus-visible:pointer-events-auto focus-visible:opacity-100 motion-reduce:hidden"
      >
        {paused ? <Play className="h-4 w-4" aria-hidden="true" /> : <Pause className="h-4 w-4" aria-hidden="true" />}
      </button>
    </div>
  );
}
