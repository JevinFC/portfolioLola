"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type CarouselItem = {
  src: string;
  videoSlug?: string;
  fit?: "cover" | "contain";
  thumbnail?: string;
};

interface CarouselProps {
  images: CarouselItem[];
}

function isVideo(src: string) {
  return src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".mov");
}

export default function Carousel({ images }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((i) => (i + 1) % images.length);
    }, 3000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [images.length]);

  const goTo = (i: number) => {
    setCurrent(i);
    startTimer();
  };

  const prev = () => goTo((current - 1 + images.length) % images.length);
  const next = () => goTo((current + 1) % images.length);

  return (
    <div className="w-full bg-zinc-100 py-8">
      <div className="max-w-[1100px] mx-auto px-10">

        {/* Conteneur qui s'adapte à la hauteur naturelle de l'image */}
        <div className="relative w-full overflow-hidden rounded-xl">
          {images.map((item, i) => {
            const video = isVideo(item.src);
            const fitClass = item.fit === "cover" ? "object-cover" : "object-contain";

            return (
              <div
                key={i}
                className={`transition-opacity duration-700 ${
                  i === current
                    ? "opacity-100 relative"
                    : "opacity-0 absolute inset-0 pointer-events-none"
                }`}
              >
                {video ? (
                  <Link href={`/videos/${item.videoSlug}`} className="block w-full relative group">
                    {item.thumbnail ? (
                      <img src={item.thumbnail} alt="" className={`w-full h-auto max-h-[600px] ${fitClass}`} />
                    ) : (
                      <video src={item.src} className={`w-full h-auto max-h-[600px] ${fitClass}`} muted playsInline />
                    )}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/55 transition">
                      <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 ml-1">
                          <polygon points="5,3 19,12 5,21" />
                        </svg>
                      </div>
                    </div>
                    <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full whitespace-nowrap">
                      Voir la vidéo →
                    </p>
                  </Link>
                ) : (
                  <img
                    src={item.src}
                    alt={`Slide ${i + 1}`}
                    className={`w-full h-auto max-h-[600px] ${fitClass}`}
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

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Aller à l'image ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? "bg-white w-6" : "bg-white/50 w-2"}`}
              />
            ))}
          </div>
        </div>

        {/* Miniatures */}
        <div className="flex gap-3 mt-4 overflow-x-auto pb-1">
          {images.map((item, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Voir l'élément ${i + 1} du carrousel`}
              className={`relative flex-shrink-0 w-20 h-14 rounded-md overflow-hidden border-2 transition-all duration-200 ${i === current ? "border-[#1800AD]" : "border-transparent opacity-50 hover:opacity-80"}`}
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