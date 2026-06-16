"use client";

import videos from "../../videodata";
import Link from "next/link";
import { useParams } from "next/navigation";


export default function VideoPage() {
  const params = useParams();
  const slug = params.slug as string;

  const video = videos.find((v) => v.slug === slug);

  if (!video) {
    return <p className="text-center mt-20">Vidéo introuvable</p>;
  }

  const index = videos.findIndex((v) => v.slug === video.slug);
  const prev = videos[index - 1];
  const next = videos[index + 1];

  return (
    <div className="w-full flex flex-col items-center text-black font-[urbanist] px-6 py-20">
      {/* Titre */}
      <h1 className="text-4xl font-bold mb-6 mt-20 text-center">
        {video.title}
      </h1>

      {/* Description */}
      <p className="mb-8 text-center max-w-xl">
        {video.description}
      </p>

      {/* Vidéo + flèches */}
      <div className="relative w-full max-w-3xl">
        <video
          controls
          className="w-full rounded-lg shadow-lg max-h-[500px]"
        >
          <source src={video.url} type="video/mp4" />
        </video>

        {/* Flèche gauche */}
        {prev && (
          <Link
            href={`/videos/${prev.slug}`}
            aria-label="Vidéo précédente"
            className="
              absolute left-4 top-1/2 -translate-y-1/2
              bg-black/40 hover:bg-black/70
              w-12 h-12
              flex items-center justify-center
              rounded-full transition
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </Link>
        )}

        {/* Flèche droite */}
        {next && (
          <Link
            href={`/videos/${next.slug}`}
            aria-label="Vidéo suivante"
            className="
              absolute right-4 top-1/2 -translate-y-1/2
              bg-black/40 hover:bg-black/70
              w-12 h-12
              flex items-center justify-center
              rounded-full transition
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}
