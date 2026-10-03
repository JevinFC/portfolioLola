"use client";

import { useEffect, useRef } from "react";
import { stickerImage } from "./sticker";

interface HeroVisualProps {
  variant?: "bleu" | "rose"; // damier bleu (accueil) ou rose (à propos)
}

// Visuel en calques, repris du visuel Canva de Lola : damier, portrait détouré et stickers.
// La carte arrive avec un rebond, les stickers flottent, suivent un peu la souris et gigotent au survol.
export default function HeroVisual({ variant = "bleu" }: HeroVisualProps) {
  const rose = variant === "rose";
  const stickerGauche = rose ? "flower" : "smiley";
  const stickerDroite = rose ? "smiley" : "flower";
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Pas de parallaxe si l'appareil réduit les animations ou n'a pas de souris
    if (window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        // Position de la souris ramenée entre -1 et 1 (centre de l'écran = 0)
        el.style.setProperty("--mx", ((e.clientX / window.innerWidth) * 2 - 1).toFixed(3));
        el.style.setProperty("--my", ((e.clientY / window.innerHeight) * 2 - 1).toFixed(3));
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pop-in relative aspect-[4/5] w-[min(280px,78vw)] sm:w-[320px] lg:w-[340px] xl:w-[400px]"
      style={{ animationDelay: "0.25s" }}
    >
      {/* Carte : damier en fond, portrait posé en bas (bouge légèrement à l'opposé de la souris) */}
      <div className="absolute inset-0 transition-transform duration-300 ease-out [transform:translate3d(calc(var(--mx,0)*-6px),calc(var(--my,0)*-6px),0)]">
        <div
          className={`absolute inset-0 overflow-hidden rounded-2xl ${
            rose ? "shadow-[0_0_40px_20px_#E9638E40]" : "shadow-[0_0_40px_20px_#1800AD40]"
          }`}
        >
          <img
            src={rose ? "/stickers/damier-rose.svg" : "/stickers/damier.svg"}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <img
            src="/photosHome/portrait-lola.webp"
            alt="Photo de Lola Gauchy"
            fetchPriority="high"
            className="absolute bottom-0 left-1/2 w-[94%] -translate-x-1/2"
          />
        </div>
      </div>

      {/* Stickers : parallaxe plus marquée (effet de profondeur) + flottement + gigotement au survol */}
      <div
        className={`absolute -left-5 top-[14%] transition-transform duration-300 ease-out [transform:translate3d(calc(var(--mx,0)*16px),calc(var(--my,0)*16px),0)_rotate(-12deg)] ${
          rose ? "w-[32%]" : "w-[27%]"
        }`}
      >
        <div className="float">
          <img
            {...stickerImage(stickerGauche)}
            alt=""
            aria-hidden="true"
            className="wiggle-hover w-full drop-shadow-lg"
          />
        </div>
      </div>
      <div
        className={`absolute -right-7 top-[42%] transition-transform duration-300 ease-out [transform:translate3d(calc(var(--mx,0)*24px),calc(var(--my,0)*24px),0)_rotate(14deg)] ${
          rose ? "w-[27%]" : "w-[32%]"
        }`}
      >
        <div className="float-slow">
          <img
            {...stickerImage(stickerDroite)}
            alt=""
            aria-hidden="true"
            className="wiggle-hover w-full drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
