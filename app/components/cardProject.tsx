import Link from "next/link";

interface CardProjectProps {
  cardImg: string;
  cardTitle: string;
  cardDesc: string;
  linkProject: string;
  isVideo?: boolean; // optionnel avec valeur par défaut
}
export default function CardProject({
  cardImg,
  cardTitle,
  cardDesc,
  linkProject,
  isVideo = false,
}: CardProjectProps) {
  return (
    <div className="max-w-[300px] relative group">
      <Link href={linkProject} className="block w-fit">
        
        {/* Image + icône Play si vidéo */}
        <div className="relative overflow-hidden rounded-md">
          <img
            src={cardImg}
            alt={cardTitle}
            className="w-[300px] h-[300px] object-cover rounded-md shadow-md 
                       transition-transform duration-300 group-hover:scale-105"
          />

          {/* Icône Play */}
          {isVideo && (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-16 h-16 bg-black/40 rounded-full flex items-center justify-center">
      <svg
        width="38"
        height="38"
        viewBox="0 0 24 24"
        fill="white"
         // léger recentrage optique
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  </div>
          )}
        </div>

        <h5 className="mt-3 font-semibold">{cardTitle}</h5>
        <p className="text-sm text-zinc-600">{cardDesc}</p>
      </Link>
    </div>
  );
}

