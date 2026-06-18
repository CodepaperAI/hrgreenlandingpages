import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import {
  phoneDisplay,
  phoneHref,
  services,
  siteUrl,
  whatsappHref
} from "@/app/data/services";

type ThankYouProps = {
  searchParams?: Promise<{
    service?: string;
  }>;
};

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for requesting a quote from HR Greenroots Landscaping.",
  alternates: {
    canonical: "/thank-you"
  },
  robots: {
    index: false,
    follow: false
  }
};

export default async function ThankYouPage({ searchParams }: ThankYouProps) {
  const params = await searchParams;
  const serviceName = params?.service ? decodeURIComponent(params.service) : "";
  const service = services.find((item) => item.name === serviceName);
  const serviceLabel = service?.name || "your landscaping project";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Thank You | HR Greenroots Landscaping",
    url: `${siteUrl}/thank-you`,
    description: "Confirmation page after a landscaping quote request."
  };

  return (
    <>
      <Header />
      <main className="page-shell thank-you-page" id="top">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: 'quote_thank_you_view',
                service: ${JSON.stringify(serviceLabel)}
              });
            `
          }}
        />
        <section className="thank-you-hero">
          <div className="thank-you-card">
            <span className="success-mark">
              <CheckCircle2 size={34} aria-hidden="true" />
            </span>
            <p className="eyebrow">Request received</p>
            <h1>Thanks. HR Greenroots has your request.</h1>
            <p>
              Your {serviceLabel.toLowerCase()} inquiry has been sent. The team can
              review the details and follow up using the contact information you provided.
            </p>
            <div className="hero-actions thank-you-actions">
              <a className="primary-button" href={phoneHref}>
                <Phone size={18} aria-hidden="true" />
                {phoneDisplay}
              </a>
              <a className="secondary-button" href={whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle size={18} aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>

          <aside className="thank-you-next">
            <p className="eyebrow">Next Step</p>
            <h2>Keep your phone nearby.</h2>
            <p>
              For faster follow-up, be ready to confirm the property city, timeline,
              and any important site details.
            </p>
            <a className="text-link" href={service ? `/services/${service.slug}` : "/"}>
              Back to page
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
