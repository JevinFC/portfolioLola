import type { ReactNode } from "react";

// Une rubrique des pages légales (mentions légales, CGV) : un titre et son contenu
export default function Rubrique({ id, titre, children }: { id?: string; titre: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-zinc-200 py-8">
      <h2 className="text-xl font-extrabold text-brand md:text-2xl">{titre}</h2>
      <div className="mt-4 flex flex-col gap-3 leading-relaxed text-zinc-700">{children}</div>
    </section>
  );
}
