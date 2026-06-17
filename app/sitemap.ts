import type { MetadataRoute } from "next";
import { services, siteUrl } from "@/app/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date()
    },
    ...services.map((service) => ({
      url: `${siteUrl}/services/${service.slug}`,
      lastModified: new Date()
    }))
  ];
}
