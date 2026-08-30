import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects", "/research", "/about", "/credentials", "/resume", "/contact"];
  const routes = staticRoutes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? ("monthly" as const) : ("monthly" as const),
    priority: path === "" ? 1 : path === "/projects" ? 0.9 : 0.7,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${site.url}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: project.slug === "strokelens" ? 0.6 : 0.8,
  }));

  return [...routes, ...projectRoutes];
}
