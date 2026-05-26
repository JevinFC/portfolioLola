"use client";

import { useEffect, useRef, ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
}

export default function SlideRightOnScroll({ children }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-slide-right");
        } else {
          // Supprime la classe quand l’élément sort du viewport
          el.classList.remove("animate-slide-right");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}
