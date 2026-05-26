import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1800AD] text-white py-12">
      <div className="max-w-[1200px] mx-auto px-10 flex justify-between items-start">

        {/* --- Colonne gauche --- */}
        <div className="flex flex-col gap-2">
          <p className="text-4xl font-semibold">Lola Gauchy</p>
          <a  href="https://portfolio.kevinmachado.dev/"  target="_blank"className="text-sm mb-5 transition-transform duration-300 ease-in-out hover:scale-110">Développé par Kévin Machado</a>

          {/* Icônes réseaux */}
          <div className="flex gap-4 mt-3 *:transition-transform *:duration-300 *:ease-in-out *:hover:scale-110">

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/lolafetacom/"
              target="_blank"
              className="hover:opacity-80 transition-opacity"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3a3 3 0 110-6zm4.5-3a1 1 0 100 2 1 1 0 000-2z" />
              </svg>
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/lola-gauchy/"
              target="_blank"
              className="hover:opacity-80 transition-opacity hover"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.1C12.2 8.6 14 7.2 16.7 7.2 22 7.2 23 10.8 23 16v8h-4v-7.1c0-2-.04-4.5-2.8-4.5-2.8 0-3.2 2.2-3.2 4.4V24h-4V8z" />
              </svg>
            </Link>

          </div>
        </div>

        {/* --- Colonne droite : menu footer --- */}
        <div className="flex flex-col gap-2 text-right *:transition-transform *:duration-300 *:ease-in-out [&>*:hover]:scale-110">
          <Link href="/projects" className="hover:opacity-80">Mes projets</Link>
          <Link href="/about" className="hover:opacity-80">À propos</Link>
          <Link href="/about" className="hover:opacity-80">Qui suis-je</Link>
          <Link href="/CV_LolaGauchy.pdf" className="hover:opacity-80" download>Téléchargez mon CV</Link>
        </div>
      </div>
    </footer>
  );
}
