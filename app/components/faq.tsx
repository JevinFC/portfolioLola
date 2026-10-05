"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import faqData from "../data/faq.json";
import SectionTitle from "./sectionTitle";

// Espaces insécables : « ? », « : », « € »… ne partent jamais seuls à la ligne, ni les milliers (« 1 800 »)
const typo = (s: string) => s.replace(/ ([?!:;€%])/g, " $1").replace(/(\d) (\d{3})\b/g, "$1 $2");

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
    <section id="faq" className="w-full text-black">
      <SectionTitle title={faqData.title} sticker="smiley" />

      <div className="mt-10 flex max-w-[900px] flex-col gap-4">
        {faqData.items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl border bg-white transition-shadow ${
                isOpen ? "border-accent shadow-lg" : "border-zinc-200 shadow-sm"
              }`}
            >
              {/* Question */}
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-reponse-${index}`}
                className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-zinc-900 transition-colors hover:text-brand md:text-lg"
              >
                {typo(item.question)}
                <span
                  className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition duration-300 ${
                    isOpen ? "rotate-45 bg-accent text-white" : "bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white"
                  }`}
                >
                  <Plus className="h-5 w-5" aria-hidden="true" />
                </span>
              </button>

              {/* Réponse (inerte une fois repliée : son lien éventuel ne prend pas le focus clavier) */}
              <div
                id={`faq-reponse-${index}`}
                ref={(el) => { answerRefs.current[index] = el; }}
                inert={!isOpen}
                className="max-h-0 overflow-hidden transition-[max-height] duration-300 ease-in-out"
              >
                <p className="px-6 pb-6 text-sm leading-relaxed text-zinc-600 md:text-base">
                  {typo(item.answer)}
                  {item.lien && (
                    <>
                      {" "}
                      <Link
                        href={item.lien.href}
                        className="font-semibold text-brand underline decoration-accent decoration-2 underline-offset-4"
                      >
                        {item.lien.label}
                      </Link>
                    </>
                  )}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
