import { MetadataRoute } from "next";
import { client } from "@/lib/sanity";
import { SITE_URL } from "@/lib/seo";

// Rebuild the sitemap at most once an hour so new Sanity articles and projects appear automatically.
export const revalidate = 3600;

const STATIC_PAGES: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/services", priority: 0.9 },
  { path: "/projects", priority: 0.8 },
  { path: "/hsse", priority: 0.7 },
  { path: "/praetorian-iq", priority: 0.7 },
  { path: "/news", priority: 0.7 },
  { path: "/careers", priority: 0.5 },
  { path: "/contact", priority: 0.6 },
  { path: "/privacy", priority: 0.2 },
];

// Project pages that exist as static folders under app/projects/.
const STATIC_PROJECTS = ["cote", "kiena", "penasquito", "amulsar", "so2clean", "conga", "diavik", "emigrant"];

type SanityDoc = { slug: string; updatedAt?: string };

async function getSlugs(type: "article" | "project"): Promise<SanityDoc[]> {
  try {
    return await client.fetch(
      `*[_type == $type && defined(slug.current) && !(_id in path("drafts.**"))]{ "slug": slug.current, "updatedAt": _updatedAt }`,
      { type }
    );
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [articles, projects] = await Promise.all([getSlugs("article"), getSlugs("project")]);

  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority,
  }));

  const projectSlugs = new Map<string, string | undefined>();
  for (const slug of STATIC_PROJECTS) projectSlugs.set(slug, undefined);
  for (const p of projects) {
    // A Sanity project whose slug matches a static folder (in any letter case) is served by that folder.
    const staticMatch = STATIC_PROJECTS.find((s) => s === p.slug.toLowerCase());
    projectSlugs.set(staticMatch ?? p.slug, p.updatedAt);
  }

  const projectEntries: MetadataRoute.Sitemap = Array.from(projectSlugs.entries()).map(([slug, updatedAt]) => ({
    url: `${SITE_URL}/projects/${slug}`,
    ...(updatedAt ? { lastModified: new Date(updatedAt) } : {}),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${SITE_URL}/news/${a.slug}`,
    ...(a.updatedAt ? { lastModified: new Date(a.updatedAt) } : {}),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...projectEntries, ...articleEntries];
}
