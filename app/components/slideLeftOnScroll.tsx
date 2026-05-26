"use client";

import { useEffect, useRef, ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
}

export default function SlideLeftOnScroll({ children }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-slide-left");
        } else {
          // Supprime la classe quand l’élément sort du viewport
          el.classList.remove("animate-slide-left");
        }
      },
      { threshold: 0 }
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}
