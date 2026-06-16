import type { MetadataRoute } from "next";
import { services } from "@/app/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.hrgreenrootslandscaping.com";

  return [
    {
      url: base,
      lastModified: new Date()
    },
    ...services.map((service) => ({
      url: `${base}/services/${service.slug}`,
      lastModified: new Date()
    }))
  ];
}
