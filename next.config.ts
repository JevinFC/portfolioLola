import type { NextConfig } from "next";

// Anciennes adresses des vidéos (/videos/video-1…), remplacées par des adresses lisibles :
// les liens déjà partagés redirigent définitivement vers la nouvelle page
const anciennesVideos: Record<string, string> = {
  "video-1": "decouvertes-scene-nationale",
  "video-2": "scene-nationale-chatodo",
  "video-3": "recap-generation-climat",
  "video-4": "teaser-halle-aux-grains",
  "video-5": "voeux-2026-halle-aux-grains",
  "video-6": "presentation-pole-des-arts",
};

const nextConfig: NextConfig = {
  async redirects() {
    return Object.entries(anciennesVideos).map(([ancien, nouveau]) => ({
      source: `/videos/${ancien}`,
      destination: `/videos/${nouveau}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
