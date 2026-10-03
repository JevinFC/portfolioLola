import videos from "../../videodata";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const video = videos.find((v) => v.slug === slug);

  return {
    title: video?.title ?? "Vidéo",
    description: video?.description ?? "",
  };
}

export default function VideoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
