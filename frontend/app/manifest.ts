import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AI Anime Hub",
    short_name: "AIAnimeHub",
    description: "Discover and purchase AI-generated anime content",
    start_url: "/",
    display: "standalone",
    background_color: "#393459",
    theme_color: "#ff5a7e",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
