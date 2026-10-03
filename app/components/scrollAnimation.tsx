"use client";

import Lottie from "lottie-react";
import scrollAnimation from "@/public/animations/ScrollDown.json";

export default function ScrollAnimation() {
    const scrollToExpertise = () => {
  const section = document.getElementById("expertise");
  if (section) {
    const yOffset = -80; // ↔️ ajuste ici l'offset (px)
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
};
  return (
    <button
      type="button"
      onClick={scrollToExpertise}
      aria-label="Défiler jusqu'à la section expertise"
      className="block w-26 h-26 md:w-16 md:h-16 lg:w-36 lg:h-36 mx-auto opacity-80 cursor-pointer"
    >
      <Lottie animationData={scrollAnimation} loop />
    </button>
  );
}