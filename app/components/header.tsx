"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const isProjectsListPage = pathname === "/projects";

  const [open, setOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    if (!isProjectsListPage) return;

    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [isProjectsListPage]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300
      ${
        isProjectsListPage
          ? heroVisible
            ? "bg-transparent"
            : "bg-[#1800AD] backdrop-blur-md shadow-lg"
          : "bg-[#1800AD]"
      }`}
    >
      <div className="flex items-center justify-between px-8 py-6">

        {/* LOGO */}
        <h1 className="text-4xl md:text-5xl font-extrabold font-[urbanist] text-white [text-shadow:2px_2px_8px_rgba(0,0,0,0.4)]">
          <a href="/">
          Lola Gauchy
          </a>
        </h1>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-lg font-medium text-white mr-8 *:transition-transform *:duration-300 *:hover:scale-110">
          <Link href="/">Accueil</Link>
          <Link href="/about">À propos</Link>
          <Link href="/projects">Projets</Link>
          <Link href="/#contact">
            <button className="px-4 py-2 border-2 bg-black border-black text-white rounded-md hover:scale-110 transition">
              Contact
            </button>
          </Link>
        </nav>

        {/* BURGER BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#1800AD] text-white overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 py-6" : "max-h-0 py-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 text-lg font-medium">
          <Link onClick={() => setOpen(false)} href="/">Accueil</Link>
          <Link onClick={() => setOpen(false)} href="/about">À propos</Link>
          <Link onClick={() => setOpen(false)} href="/projects">Projets</Link>
          <Link onClick={() => setOpen(false)} href="/#contact">
            <button className="px-4 py-2 border-2 bg-black border-black text-white rounded-md hover:scale-105 transition">
              Contact
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}