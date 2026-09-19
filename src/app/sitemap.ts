import type { MetadataRoute } from "next";
import { lessons, part1Topics, part2Categories, part3Types, resources, tracks } from "@/content";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bolte-shikhi.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["/", "/learn", "/path", "/practice", "/practice/part-1", "/practice/part-2", "/practice/part-3", "/practice/mock", "/topics/part-1", "/topics/part-2", "/topics/part-3", "/progress", "/mistakes", "/resources", "/docs"];
  return [
    ...staticRoutes.map((route) => ({ url: `${BASE}${route}`, lastModified: now, priority: route === "/" ? 1 : 0.7 })),
    ...tracks.map((track) => ({ url: `${BASE}/learn/${track.id}`, lastModified: now, priority: 0.8 })),
    ...lessons.map((lesson) => ({
      url: `${BASE}/learn/${lesson.track}/${lesson.slug}`,
      lastModified: now,
      priority: 0.9,
    })),
    ...part1Topics.map((topic) => ({ url: `${BASE}/topics/part-1/${topic.slug}`, lastModified: now, priority: 0.8 })),
    ...part2Categories.map((category) => ({ url: `${BASE}/topics/part-2/${category.slug}`, lastModified: now, priority: 0.8 })),
    ...part3Types.map((type) => ({ url: `${BASE}/topics/part-3/${type.slug}`, lastModified: now, priority: 0.8 })),
    ...resources.map((resource) => ({ url: `${BASE}/resources/${resource.slug}`, lastModified: now, priority: 0.6 })),
  ];
}
