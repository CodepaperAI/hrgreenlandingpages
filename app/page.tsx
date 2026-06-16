import type { Metadata } from "next";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { QuoteForm } from "@/app/components/QuoteForm";
import { phoneDisplay, phoneHref, services } from "@/app/data/services";

export const metadata: Metadata = {
  title: "Professional Landscaping Service Landing Pages",
  description:
    "Lead-focused HR Greenroots Landscaping service pages for sod, pavers, fences, decks, and garden suites.",
  alternates: {
    canonical: "/"
  }
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="page-shell">
        <section className="service-hero home-hero">
          <img
            className="hero-image"
            src="/images/hero-background.jpg"
            alt="Aerial view of sod installation with a curved stone border"
          />
          <div className="hero-shade" />
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Landscape Design & Build</p>
              <h1>Professional Landscaping Solutions</h1>
              <p className="hero-lead">Mississauga, Toronto, and the GTA</p>
              <p className="hero-summary">
                End-to-end landscaping services for homeowners, businesses, and
                larger properties, combining expert design, efficient execution,
                and long-term maintenance thinking.
              </p>
              <div className="hero-actions">
                <a className="primary-button" href="#quote">
                  Start Your Estimate
                  <ArrowRight size={19} aria-hidden="true" />
                </a>
                <a className="secondary-button" href={phoneHref}>
                  <Phone size={18} aria-hidden="true" />
                  {phoneDisplay}
                </a>
              </div>
            </div>
            <QuoteForm serviceName={services[0].name} />
          </div>
        </section>

        <section className="section service-index">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>Choose the project you want priced in the form.</h2>
            <p>
              This page works as a general estimate page. The service-specific
              ad landing pages remain standalone and do not cross-link visitors
              into other services.
            </p>
          </div>
          <div className="service-pill-grid" aria-label="Available services">
            {services.map((service) => (
              <span key={service.slug}>{service.name}</span>
            ))}
          </div>
        </section>

        <section className="section info-row">
          <article>
            <MapPin size={22} aria-hidden="true" />
            <h2>Built for local leads</h2>
            <p>
              The pages emphasize GTA service coverage, site visits, WhatsApp,
              phone calls, and a short quote form routed through Resend.
            </p>
          </article>
          <article>
            <ArrowRight size={22} aria-hidden="true" />
            <h2>Conversion-ready structure</h2>
            <p>
              Global GTM is installed, and successful quote submissions push a
              quote_form_submit event to the dataLayer.
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
