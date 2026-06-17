import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceLanding } from "@/app/components/ServiceLanding";
import { absoluteUrl, serviceAdContent, serviceBySlug, services } from "@/app/data/services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug.get(slug);

  if (!service) {
    return {};
  }

  const adContent = serviceAdContent[service.slug];

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    keywords: adContent.keywords,
    alternates: {
      canonical: `/services/${service.slug}`
    },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `/services/${service.slug}`,
      images: [
        {
          url: absoluteUrl(service.heroImage.src),
          alt: service.heroImage.alt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.seoDescription,
      images: [absoluteUrl(service.heroImage.src)]
    }
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = serviceBySlug.get(slug);

  if (!service) {
    notFound();
  }

  return <ServiceLanding service={service} />;
}
