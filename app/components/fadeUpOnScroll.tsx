"use client";

import { useEffect, useRef, ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  className?: string;
}

export default function FadeUpOnScroll({ children, className = "" }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("fade-up");
        } else {
          el.classList.remove("fade-up");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return <div ref={ref} className={className}>{children}</div>;
}