import { projects } from "../../data/projects";
import FadeUpOnScroll from "../../components/fadeUpOnScroll";
import CountUp from "../../components/countUp";
import Link from "next/link";
import { notFound } from "next/navigation";
import Carousel from "../../components/carrousel";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  return {
    title: project?.title.replace("\n", " ") ?? "Projet",
    description: project?.description.split("\n")[0] ?? "",
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function IndivProject({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="w-full font-[urbanist] bg-zinc-50 min-h-screen pt-20">

      {/* HEADER */}
      <div className="w-full bg-white border-b border-zinc-200 py-16">
        <div className="max-w-[1100px] mx-auto px-10 flex flex-col md:flex-row items-start gap-16">
          <div className="flex-1">
            <FadeUpOnScroll>
              <h1 className="text-3xl md:text-4xl font-bold text-[#1800AD] leading-tight mb-6 whitespace-pre-line">
                {project.title}
              </h1>
              <p className="text-zinc-600 leading-relaxed mb-8 whitespace-pre-line">
                {project.description}
              </p>
              <a href={project.siteUrl} target="_blank">
                <button className="px-5 py-3 border-2 border-[#1800AD] text-[#1800AD] rounded-md hover:bg-[#1800AD] hover:text-white transition font-medium">
                  Voir le site Internet
                </button>
              </a>
            </FadeUpOnScroll>
          </div>
          <FadeUpOnScroll>
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-w-[460px] h-auto object-cover rounded-xl shadow-sm"
            />
          </FadeUpOnScroll>
        </div>
      </div>
      {/* STATS */}
{project.stats && (
  <FadeUpOnScroll>
    <div className="w-full bg-zinc-100 py-12">
      <div className="max-w-[1100px] mx-auto px-10 grid grid-cols-2 gap-6">
        {project.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-zinc-800">
              <CountUp
                target={stat.countTarget}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
            </p>
            <p className="text-zinc-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </FadeUpOnScroll>
)}
{/* CARROUSEL */}
{project.imagesCarrousel && project.imagesCarrousel.length > 0 && (
  <Carousel images={project.imagesCarrousel} />
)}



      {/* SECTIONS MISSIONS */}
      <div className="max-w-[1100px] mx-auto px-10 py-16 flex flex-col gap-12">
        {project.sections.map((section) => (
          <FadeUpOnScroll key={section.title}>
            <div>
              <h2 className="text-xl font-bold text-[#1800AD] mb-2">{section.title}</h2>
              {section.objective && (
                <p className="text-zinc-500 italic mb-4">Objectif : {section.objective}</p>
              )}
              <ul className="flex flex-col gap-3">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-zinc-600">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#1800AD] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUpOnScroll>
        ))}
      </div>

      {/* RETOUR */}
      <div className="max-w-[1100px] mx-auto px-10 pb-20">
        <Link href="/projects">
          <button className="px-5 py-3 border-2 border-zinc-300 text-zinc-500 rounded-md hover:border-[#1800AD] hover:text-[#1800AD] transition">
            ← Retour aux projets
          </button>
        </Link>
      </div>

    </div>
  );
}