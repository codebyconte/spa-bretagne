import type { MetadataRoute } from "next";
import { spas, departments } from "@/lib/spas-data";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.spasbretagne.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/spas`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/departements`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/mentions-legales`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/politique-confidentialite`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const departmentPages: MetadataRoute.Sitemap = departments.map((dept) => ({
    url: `${baseUrl}/departements/${dept.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const spaPages: MetadataRoute.Sitemap = spas.map((spa) => ({
    url: `${baseUrl}/spas/${spa.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...departmentPages, ...spaPages];
}
