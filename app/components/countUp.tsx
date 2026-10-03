"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

// Séparateur de milliers fixe (espace insécable) : même rendu côté serveur et navigateur
function formatNumber(n: number) {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export default function CountUp({ target, duration = 1500, prefix = "", suffix = "" }: CountUpProps) {
  // Valeur finale rendue côté serveur (lisible sans JavaScript), cachée jusqu'au démarrage du compteur
  const [count, setCount] = useState(target);
  const [counting, setCounting] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Réglage système « réduire les animations » : pas de compteur, la valeur finale s'affiche (voir globals.css)
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (started.current) return;

        // Hors écran : on repart de 0 en attendant que le chiffre apparaisse
        if (!entry.isIntersecting) {
          setCount(0);
          return;
        }

        started.current = true;
        setCount(0);
        setCounting(true);
        const startTime = performance.now();

        const tick = (now: number) => {
          const elapsed = now - startTime;
          // Bornée entre 0 et 1 : l'horodatage de la frame peut précéder startTime de quelques ms
          const progress = Math.min(Math.max(elapsed / duration, 0), 1);
          // Easing : démarre vite, ralentit à la fin
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * target));

          if (progress < 1) frame = requestAnimationFrame(tick);
          else setCount(target);
        };

        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, duration]);

  return (
    // La valeur finale, invisible, réserve la largeur : le texte autour ne bouge pas pendant le comptage
    <span
      ref={ref}
      data-final={`${prefix}${formatNumber(target)}${suffix}`}
      className="inline-grid justify-items-end tabular-nums before:invisible before:col-start-1 before:row-start-1 before:content-[attr(data-final)]"
    >
      <span className={`col-start-1 row-start-1 ${counting ? "" : "countup-pending"}`}>
        {prefix}{formatNumber(count)}{suffix}
      </span>
    </span>
  );
}
