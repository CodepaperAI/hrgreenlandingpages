import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { QuoteForm } from "@/app/components/QuoteForm";
import {
  absoluteUrl,
  address,
  businessName,
  defaultProofPoints,
  instagramUrl,
  phoneDisplay,
  phoneHref,
  Service,
  serviceAdContent,
  serviceAreas,
  siteUrl,
  sourceSite,
  whatsappHref
} from "@/app/data/services";

export function ServiceLanding({ service }: { service: Service }) {
  const pageUrl = `${siteUrl}/services/${service.slug}`;
  const adContent = serviceAdContent[service.slug];
  const areaServed = serviceAreas.map((area) => ({
    "@type": "City",
    name: area
  }));
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LandscapingBusiness",
        "@id": `${siteUrl}/#business`,
        name: businessName,
        url: sourceSite,
        telephone: phoneDisplay,
        image: absoluteUrl(service.heroImage.src),
        logo: absoluteUrl("/images/hr-greenroots-logo-transparent.png"),
        sameAs: [instagramUrl],
        address: {
          "@type": "PostalAddress",
          streetAddress: "100 Matheson Blvd E unit 202",
          addressLocality: "Mississauga",
          addressRegion: "ON",
          postalCode: "L4Z 3P8",
          addressCountry: "CA"
        },
        areaServed
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: service.name,
        serviceType: service.name,
        description: service.seoDescription,
        keywords: adContent.keywords.join(", "),
        url: pageUrl,
        image: absoluteUrl(service.heroImage.src),
        provider: {
          "@id": `${siteUrl}/#business`
        },
        areaServed,
        offers: {
          "@type": "Offer",
          name: `Request a quote for ${service.name}`,
          url: `${pageUrl}#quote`,
          availability: "https://schema.org/InStock"
        }
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: service.seoTitle,
        description: service.seoDescription,
        isPartOf: {
          "@type": "WebSite",
          "@id": `${siteUrl}/#website`,
          name: businessName,
          url: siteUrl
        },
        about: {
          "@id": `${pageUrl}#service`
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(service.heroImage.src)
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl
          },
          {
            "@type": "ListItem",
            position: 2,
            name: service.name,
            item: pageUrl
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: adContent.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <Header />
      <main className="page-shell">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <section className="service-hero" id="top">
          <div className="hero-inner">
            <div className="hero-copy">
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <span>Home</span>
                <span>/</span>
                <span>Services</span>
                <span>/</span>
                <strong>{service.shortName}</strong>
              </nav>
              <p className="eyebrow">Service Spotlight</p>
              <h1>{service.headline}</h1>
              <p className="hero-lead">{service.lead}</p>
              <p className="hero-summary">{service.summary}</p>
              <div className="hero-actions">
                <a className="primary-button" href="#quote">
                  Request a Quote
                  <ArrowRight size={19} aria-hidden="true" />
                </a>
                <a className="secondary-button" href="#gallery">
                  View Portfolio
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
            <aside className="hero-art" aria-label={`${service.name} project imagery`}>
              <img className="hero-art-main" src={service.heroImage.src} alt={service.heroImage.alt} />
              <img
                className="hero-art-small"
                src={service.secondaryImage.src}
                alt={service.secondaryImage.alt}
              />
              <div className="hero-art-badge">
                <span>Starting Point</span>
                <strong>{service.badgeTitle}</strong>
                <p>{service.badgeText}</p>
              </div>
            </aside>
          </div>
          <aside className="hero-step-card">
            <span>{service.process[0].title}</span>
            <p>{service.process[0].text}</p>
          </aside>
        </section>

        <section className="trust-strip" aria-label="HR Greenroots contact and service proof">
          {defaultProofPoints.map((point) => (
            <article key={point.title}>
              <ShieldCheck size={22} aria-hidden="true" />
              <strong>{point.title}</strong>
              <span>{point.text}</span>
            </article>
          ))}
        </section>

        <section className="section quote-band">
          <div className="quote-band-copy">
            <p className="eyebrow">Request a Quote</p>
            <h2>Tell HR Greenroots what you want the property to do better.</h2>
            <p>
              This form keeps the ad page focused on one service while still giving
              the team enough context to follow up by phone or email.
            </p>
          </div>
          <QuoteForm serviceName={service.name} />
        </section>

        <section className="section split-section" id="overview">
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
            <p className="eyebrow">Source-Based Service Details</p>
            <h2>Clear details for homeowners comparing {service.name.toLowerCase()}.</h2>
            <p>
              These points are arranged from HR Greenroots service content so ad
              visitors see the relevant scope, process, and local coverage without
              leaving the page.
            </p>
          </div>
          <div className="detail-grid">
            {adContent.proof.map((point, index) => (
              <article className="detail-card compact-card" key={point.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <ClipboardCheck size={22} aria-hidden="true" />
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section estimate-section">
          <div className="section-heading">
            <p className="eyebrow">Project Criteria From The Source Page</p>
            <h2>What the original HR Greenroots content says matters for this service.</h2>
            <p>
              This section turns the service page copy into scannable decision points
              for homeowners who are comparing options from an ad click.
            </p>
          </div>
          <div className="estimate-grid">
            {adContent.quoteFactors.map((factor) => (
              <article key={factor.title}>
                <h3>{factor.title}</h3>
                <p>{factor.text}</p>
              </article>
            ))}
          </div>
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

        <section className="section process-section" id="process">
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

        <section className="section gallery-section" id="gallery">
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

        <section className="section coverage-section">
          <div className="coverage-panel">
            <div>
              <p className="eyebrow">Local Coverage</p>
              <h2>{service.name} across Mississauga, Toronto, and the GTA.</h2>
              <p>
                HR Greenroots lists service coverage across nearby Ontario communities,
                with quote requests routed directly to the team.
              </p>
              <div className="coverage-contact">
                <a href={phoneHref}>
                  <Phone size={18} aria-hidden="true" />
                  {phoneDisplay}
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    address
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPin size={18} aria-hidden="true" />
                  Mississauga office
                </a>
              </div>
            </div>
            <div className="area-tags light">
              {serviceAreas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="section-heading">
            <p className="eyebrow">Common Questions</p>
            <h2>Questions people ask before requesting {service.name.toLowerCase()}.</h2>
          </div>
          <div className="faq-list">
            {adContent.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
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
