"use client";

import { ArrowRight, Phone } from "lucide-react";
import { phoneHref } from "@/app/data/services";

export function Header() {
  return (
    <header className="site-header">
      <div className="brand-link" aria-label="HR Greenroots Landscaping">
        <img
          src="/images/hr-greenroots-logo-transparent.png"
          alt="HR Greenroots Landscaping"
          className="brand-logo"
        />
      </div>

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
