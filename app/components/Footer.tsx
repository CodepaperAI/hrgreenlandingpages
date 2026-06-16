import { Camera, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  address,
  phoneDisplay,
  phoneHref,
  serviceAreas,
  whatsappHref
} from "@/app/data/services";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <section className="footer-brand">
          <img
            src="/images/hr-greenroots-logo-transparent.png"
            alt="HR Greenroots Landscaping"
            className="footer-logo"
          />
          <h2>Professional Landscaping Solutions</h2>
          <p>
            From design and installation to long-term maintenance, HR Greenroots
            delivers reliable service with precision and care across Mississauga and the GTA.
          </p>
        </section>

        <section>
          <h3>Service Areas</h3>
          <div className="area-tags">
            {serviceAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </section>

        <section>
          <h3>Get In Touch</h3>
          <div className="contact-stack">
            <a href={phoneHref}>
              <Phone size={17} aria-hidden="true" />
              {phoneDisplay}
            </a>
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle size={17} aria-hidden="true" />
              WhatsApp Chat
            </a>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                address
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={17} aria-hidden="true" />
              {address}
            </a>
            <a
              href="https://www.instagram.com/hrgreenroots"
              target="_blank"
              rel="noreferrer"
            >
              <Camera size={17} aria-hidden="true" />
              Instagram
            </a>
          </div>
        </section>
      </div>

      <div className="footer-bottom">
        <p>Copyright 2026 HR Greenroots Landscaping. All Rights Reserved.</p>
        <p>Privacy Policy&nbsp;&nbsp; Terms & Conditions</p>
      </div>
    </footer>
  );
}
