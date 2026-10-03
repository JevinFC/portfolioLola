"use client";

import { useEffect, useRef, ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number; // délai en ms, pour décaler les éléments d'une même grille
  as?: "div" | "li";
}

// Fait apparaître le contenu en montant, une seule fois, quand il arrive à l'écran
export default function FadeUpOnScroll({ children, className = "", delay = 0, as: Tag = "div" }: FadeUpProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Réglage « réduire les animations » : contenu affiché directement
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Déjà visible au chargement : on n'y touche pas (pas de clignotement)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return;

    // Hors écran : on le cache (le visiteur ne le voit pas encore), puis on l'anime à son arrivée
    el.classList.add("reveal-pending");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.style.animationDelay = `${delay}ms`;
        el.classList.replace("reveal-pending", "reveal-in");
        observer.disconnect();
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref as React.Ref<HTMLDivElement & HTMLLIElement>} className={className}>
      {children}
    </Tag>
  );
}
