"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { temoignages } from "../data/temoignages";
import FadeUpOnScroll from "./fadeUpOnScroll";

// Avis : les 3 côte à côte sur grand écran, un à la fois sur mobile et tablette
// (navigation par photo ou par flèches, sans défilement automatique)
export default function Temoignages() {
  const [current, setCurrent] = useState(0);
  const count = temoignages.length;
  const goTo = (i: number) => setCurrent((i + count) % count);

  return (
    <>
      {/* GRAND ÉCRAN : tous les avis visibles d'un coup, texte en haut et auteur aligné en bas */}
      <ul className="hidden gap-8 lg:grid lg:grid-cols-3">
        {temoignages.map((t, i) => (
          <FadeUpOnScroll key={t.name} as="li" delay={i * 100} className="flex">
            <figure className="relative flex w-full flex-col rounded-3xl bg-white p-8 pt-12 shadow-xl">
              <span aria-hidden="true" className="absolute -top-7 left-8 font-display text-7xl leading-none text-accent">
                “
              </span>
              <blockquote className="text-lg leading-relaxed text-zinc-800">{t.text}</blockquote>
              <figcaption className="mt-auto flex items-center gap-4 pt-8">
                <img src={t.photo} alt="" loading="lazy" className="h-14 w-14 rounded-full object-cover ring-4 ring-accent/30" />
                <span className="flex flex-col">
                  <span className="font-semibold text-zinc-900">{t.name}</span>
                  <span className="text-sm text-zinc-600">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          </FadeUpOnScroll>
        ))}
      </ul>

      {/* MOBILE ET TABLETTE : un avis à la fois, en grand */}
      <div className="relative mx-auto w-full max-w-4xl rounded-3xl bg-white p-8 pt-12 shadow-xl md:p-12 md:pt-14 lg:hidden">
        <span aria-hidden="true" className="absolute -top-8 left-8 font-display text-8xl leading-none text-accent md:left-12">
          “
        </span>

        {/* Tous les avis sont empilés dans la même case : la hauteur ne bouge pas d'un avis à l'autre, le texte reste en haut */}
        <div className="grid">
          {temoignages.map((t, i) => (
            <figure
              key={t.name}
              inert={i !== current}
              className={`col-start-1 row-start-1 flex flex-col justify-start transition duration-500 motion-reduce:transition-none ${i === current ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}
            >
              <blockquote className="text-lg leading-relaxed text-zinc-800 md:text-2xl">{t.text}</blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <img src={t.photo} alt="" loading="lazy" className="h-14 w-14 rounded-full object-cover ring-4 ring-accent/30" />
                <span className="flex flex-col">
                  <span className="font-semibold text-zinc-900">{t.name}</span>
                  <span className="text-sm text-zinc-600">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between gap-4 border-t border-zinc-100 pt-6">
          <div className="flex gap-2">
            {temoignages.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Lire l'avis de ${t.name}`}
                aria-current={i === current ? "true" : undefined}
                className={`h-11 w-11 overflow-hidden rounded-full ring-2 ring-offset-2 transition ${
                  i === current ? "ring-accent" : "ring-transparent opacity-50 hover:opacity-100"
                }`}
              >
                <img src={t.photo} alt="" loading="lazy" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => goTo(current - 1)}
              aria-label="Avis précédent"
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand text-brand transition hover:bg-brand hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => goTo(current + 1)}
              aria-label="Avis suivant"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white transition hover:scale-105"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          Avis {current + 1} sur {count} : {temoignages[current].name}
        </p>
      </div>
    </>
  );
}
