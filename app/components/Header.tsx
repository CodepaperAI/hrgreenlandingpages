"use client";

import { ArrowRight, ChevronDown, Phone } from "lucide-react";
import { phoneHref } from "@/app/data/services";

export function Header() {
  return (
    <header className="site-header">
      <a className="brand-link" href="#top" aria-label="HR Greenroots Landscaping">
        <img
          src="/images/hr-greenroots-logo-transparent.png"
          alt="HR Greenroots Landscaping"
          className="brand-logo"
        />
      </a>

      <nav className="site-nav" aria-label="Landing page sections">
        <a href="#top">Home</a>
        <a href="#gallery">Project</a>
        <a href="#overview">
          Services
          <ChevronDown size={13} aria-hidden="true" />
        </a>
        <a href="#faq">Resources</a>
        <a href="#quote">Contact</a>
      </nav>
      <div className="header-actions">
        <a className="header-call" href={phoneHref}>
          <Phone size={18} aria-hidden="true" />
          <span>Call Us</span>
        </a>
        <a className="header-quote" href="#quote">
          <span>Request Quote</span>
          <ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
