"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

export default function CountUp({ target, duration = 1500, prefix = "", suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Easing : démarre vite, ralentit à la fin
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));

            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString("fr-FR")}{suffix}
    </span>
  );
}