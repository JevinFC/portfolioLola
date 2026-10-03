"use client";

import { useRef, useState } from "react";

// Extrait vidéo muet joué au survol d'une tuile (souris uniquement, rien n'est chargé avant le survol)
export default function HoverVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);

  const play = () => {
    const video = ref.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.play().catch(() => {});
  };

  const stop = () => {
    ref.current?.pause();
    setVisible(false);
  };

  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      playsInline
      preload="none"
      onMouseEnter={play}
      onMouseLeave={stop}
      onPlaying={() => setVisible(true)}
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
    />
  );
}
