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
            : "bg-brand backdrop-blur-md shadow-lg"
          : "bg-brand"
      }`}
    >
      <div className="flex items-center justify-between px-8 py-6">

        {/* LOGO : pas un titre, le titre principal de chaque page est son propre h1 */}
        <p className="font-display text-2xl md:text-3xl font-extrabold text-white">
          <Link href="/" onClick={() => setOpen(false)}>
          Lola Gauchy
          </Link>
        </p>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-lg font-medium text-white mr-8 *:transition-transform *:duration-300 *:hover:scale-110">
          <Link href="/">Accueil</Link>
          <Link href="/about">À propos</Link>
          <Link href="/projects">Projets</Link>
          <Link href="/#contact" className="px-4 py-2 rounded-full bg-white text-brand font-semibold">
            Contact
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
        className={`md:hidden absolute top-full left-0 w-full bg-brand text-white overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 py-6" : "max-h-0 py-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 text-lg font-medium">
          <Link onClick={() => setOpen(false)} href="/">Accueil</Link>
          <Link onClick={() => setOpen(false)} href="/about">À propos</Link>
          <Link onClick={() => setOpen(false)} href="/projects">Projets</Link>
          <Link
            onClick={() => setOpen(false)}
            href="/#contact"
            className="px-4 py-2 rounded-full bg-white text-brand font-semibold hover:scale-105 transition"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}