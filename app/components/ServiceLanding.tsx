import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { QuoteForm } from "@/app/components/QuoteForm";
import {
  phoneDisplay,
  phoneHref,
  Service,
  serviceAreas,
  whatsappHref
} from "@/app/data/services";

export function ServiceLanding({ service }: { service: Service }) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "HR Greenroots Landscaping",
    url: "https://www.hrgreenrootslandscaping.com",
    telephone: phoneDisplay,
    areaServed: serviceAreas,
    address: {
      "@type": "PostalAddress",
      streetAddress: "100 Matheson Blvd E unit 202",
      addressLocality: "Mississauga",
      addressRegion: "ON",
      postalCode: "L4Z 3P8",
      addressCountry: "CA"
    },
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.seoDescription
      }
    }
  };

  return (
    <>
      <Header />
      <main className="page-shell">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <section className="service-hero">
          <img className="hero-image" src={service.heroImage.src} alt={service.heroImage.alt} />
          <div className="hero-shade" />
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">HR Greenroots Landscaping</p>
              <h1>{service.headline}</h1>
              <p className="hero-lead">{service.lead}</p>
              <p className="hero-summary">{service.summary}</p>
              <div className="hero-actions">
                <a className="primary-button" href="#quote">
                  Get My Quote
                  <ArrowRight size={19} aria-hidden="true" />
                </a>
                <a className="secondary-button" href={phoneHref}>
                  <Phone size={18} aria-hidden="true" />
                  {phoneDisplay}
                </a>
              </div>
              <div className="hero-facts" aria-label={`${service.name} highlights`}>
                {service.facts.map((fact) => (
                  <article key={fact.label}>
                    <span>{fact.label}</span>
                    <strong>{fact.value}</strong>
                  </article>
                ))}
              </div>
            </div>
            <QuoteForm serviceName={service.name} />
          </div>
        </section>

        <section className="section split-section">
          <div>
            <p className="eyebrow">Service Overview</p>
            <h2>{service.overviewTitle}</h2>
            {service.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="image-panel">
            <img src={service.secondaryImage.src} alt={service.secondaryImage.alt} />
            <div className="image-badge">
              <span>Key Advantage</span>
              <strong>{service.badgeTitle}</strong>
              <p>{service.badgeText}</p>
            </div>
          </aside>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">{service.benefitsEyebrow}</p>
            <h2>{service.fitTitle}</h2>
          </div>
          <div className="detail-grid">
            {service.benefits.map((benefit, index) => (
              <article className="detail-card" key={benefit.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <CheckCircle2 size={22} aria-hidden="true" />
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section process-section">
          <div className="section-heading">
            <p className="eyebrow">{service.processEyebrow}</p>
            <h2>{service.processTitle}</h2>
            <p>{service.processIntro}</p>
          </div>
          <div className="process-grid">
            {service.process.map((step, index) => (
              <article className="process-card" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section gallery-section">
          <div className="section-heading">
            <p className="eyebrow">Project Inspiration</p>
            <h2>{service.name} visuals that match the scope and finish quality.</h2>
          </div>
          <div className="gallery-grid">
            {service.gallery.map((image) => (
              <figure key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </section>

        <section className="section lead-panel">
          <div>
            <p className="eyebrow">Ready To Start</p>
            <h2>Need help planning your {service.name.toLowerCase()} project?</h2>
            <p>
              HR Greenroots can walk the site, confirm scope, and recommend the right
              next step for your property, timing, and budget.
            </p>
          </div>
          <div className="lead-actions">
            <a className="primary-button" href="#quote">
              Book a Site Visit
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="secondary-button dark" href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </section>

      </main>
      <Footer />
      <a
        className="floating-whatsapp"
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with HR Greenroots Landscaping on WhatsApp"
      >
        <MessageCircle size={26} aria-hidden="true" />
      </a>
    </>
  );
}
