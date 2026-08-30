import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ghayda N. Ja'afreh — AI Portfolio",
    short_name: "Ghayda Portfolio",
    description: "AI engineering, data science, computer vision, research, and applied systems portfolio.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A1020",
    theme_color: "#0A1020",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
