"use client";

import { useRef, useState } from "react";
import Link from "next/link";

type CarouselItem = {
  src: string;
  videoSlug?: string;
  fit?: "cover" | "contain";
  thumbnail?: string;
  alt?: string;
};

interface CarouselProps {
  images: CarouselItem[];
}

function isVideo(src: string) {
  return src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".mov");
}

export default function Carousel({ images }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Pas de défilement automatique : le visuel change uniquement quand on clique, swipe ou utilise le clavier
  const goTo = (i: number) => setCurrent((i + images.length) % images.length);
  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  // Flèches gauche / droite du clavier
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  // Swipe sur mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <div className="w-full bg-zinc-100 py-8">
      <div className="max-w-[1100px] mx-auto px-4 md:px-10">

        {/* Cadre au ratio fixe : la hauteur ne change plus d'un visuel à l'autre */}
        <div
          role="region"
          aria-roledescription="carrousel"
          aria-label="Visuels du projet"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-video overflow-hidden rounded-xl bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        >
          {images.map((item, i) => {
            const video = isVideo(item.src);
            const fitClass = item.fit === "cover" ? "object-cover" : "object-contain";
            const isCurrent = i === current;

            return (
              <div
                key={i}
                inert={!isCurrent}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  isCurrent ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                {video ? (
                  <Link href={`/videos/${item.videoSlug}`} className="block w-full h-full relative group">
                    {item.thumbnail ? (
                      <img src={item.thumbnail} alt={item.alt ?? ""} className={`w-full h-full ${fitClass}`} />
                    ) : (
                      <video src={item.src} className={`w-full h-full ${fitClass}`} muted playsInline />
                    )}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/55 transition">
                      <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 ml-1">
                          <polygon points="5,3 19,12 5,21" />
                        </svg>
                      </div>
                    </div>
                    <p className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full whitespace-nowrap">
                      Voir la vidéo →
                    </p>
                  </Link>
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt ?? ""}
                    className={`w-full h-full ${fitClass}`}
                  />
                )}
              </div>
            );
          })}

          {/* Prev / Next */}
          <button
            onClick={prev}
            aria-label="Image précédente"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition z-10"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button
            onClick={next}
            aria-label="Image suivante"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition z-10"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5"><polyline points="9 18 15 12 9 6" /></svg>
          </button>

          {/* Points : simple repère de position (trop petits pour être cliqués, la navigation passe par les flèches et les miniatures) */}
          <div aria-hidden="true" className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? "bg-white w-6" : "bg-white/50 w-2"}`}
              />
            ))}
          </div>
        </div>

        {/* Annonce du visuel affiché, pour les lecteurs d'écran */}
        <p className="sr-only" aria-live="polite">
          Visuel {current + 1} sur {images.length}
        </p>

        {/* Miniatures */}
        <div className="flex gap-3 mt-4 overflow-x-auto pb-1">
          {images.map((item, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Voir l'élément ${i + 1} du carrousel`}
              aria-current={i === current ? "true" : undefined}
              className={`relative flex-shrink-0 w-20 h-14 rounded-md overflow-hidden border-2 transition-all duration-200 ${i === current ? "border-brand" : "border-transparent opacity-50 hover:opacity-80"}`}
            >
              {isVideo(item.src) ? (
                <>
                  {item.thumbnail ? (
                    <img src={item.thumbnail} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <video src={item.src} className="w-full h-full object-cover" muted playsInline />
                  )}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4 ml-0.5"><polygon points="5,3 19,12 5,21" /></svg>
                  </div>
                </>
              ) : (
                <img src={item.src} alt="" className="w-full h-full object-cover" />
              )}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
