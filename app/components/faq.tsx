"use client";

import { useState, useRef, useEffect } from "react";
import faqData from "../data/faq.json";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    answerRefs.current.forEach((ref, idx) => {
      if (ref) {
        ref.style.maxHeight =
          openIndex === idx ? `${ref.scrollHeight}px` : "0px";
      }
    });
  }, [openIndex]);

  return (
    <section
      id="faq"
      className="w-full max-w-[900px] mx-auto px-6 py-10 text-black"
    >
      {/* Titre */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#1800AD]">
        {faqData.title}
      </h2>

      <div className="flex flex-col gap-4">
        {faqData.items.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl border border-zinc-200 bg-zinc-50 overflow-hidden transition-all ${
              openIndex === index ? "ring-1 ring-[#1800AD]/30" : ""
            }`}
          >
            {/* Question */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left px-6 py-5 font-semibold text-base md:text-lg text-zinc-900
                         hover:bg-[#1800AD] hover:text-white transition-colors"
            >
              {item.question}

              <span
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {/* Réponse */}
            <div
              ref={(el) => (answerRefs.current[index] = el)}
              className="max-h-0 overflow-hidden transition-[max-height] duration-300 ease-in-out"
            >
              <p className="px-6 pb-6 pt-2 text-sm md:text-base text-zinc-600 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

