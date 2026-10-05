import videos from "../../videodata";
import { metadonnees } from "../../lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const video = videos.find((v) => v.slug === slug);
  if (!video) return { title: "Vidéo" };

  return metadonnees({
    // « Teaser Halle aux grains – vidéo » (sauf si le titre commence déjà par « Vidéo »)
    titre: video.title.startsWith("Vidéo") ? video.title : `${video.title} – vidéo`,
    description: `${video.description} Réalisation : Lola Gauchy, communicante digitale à Tours.`,
    chemin: `/videos/${video.slug}`,
  });
}

export default function VideoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
