"use client";

import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function QuoteForm({ serviceName }: { serviceName: string }) {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setState("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          pageUrl: window.location.href
        })
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Please try again.");
      }

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "quote_form_submit",
        service: payload.service,
        page_path: window.location.pathname
      });

      setState("success");
      setMessage("Thanks. Redirecting you to the confirmation page.");
      const service = encodeURIComponent(String(payload.service || serviceName));
      window.location.assign(`/thank-you?service=${service}`);
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Please try again.");
    }
  }

  return (
    <form className="quote-form" id="quote" onSubmit={onSubmit}>
      <input className="hidden-field" name="company" tabIndex={-1} autoComplete="off" />
      <div className="form-heading">
        <p>Request a Quote</p>
        <h2>Book a site visit</h2>
        <span>Tell us a little about the project and we will follow up.</span>
      </div>

      <label>
        Name
        <input name="name" type="text" autoComplete="name" required />
      </label>

      <div className="form-row">
        <label>
          Phone
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>

      <input type="hidden" name="service" value={serviceName} />
      <div className="locked-service" aria-label={`Selected service: ${serviceName}`}>
        <span>Service</span>
        <strong>{serviceName}</strong>
      </div>

      <div className="form-row">
        <label>
          City
          <input name="city" type="text" autoComplete="address-level2" />
        </label>
        <label>
          Timeline
          <select name="timeline" defaultValue="As soon as possible">
            <option>As soon as possible</option>
            <option>Next 2-4 weeks</option>
            <option>Next 1-3 months</option>
            <option>Planning ahead</option>
          </select>
        </label>
      </div>

      <label>
        <span className="label-line">
          Project details
          <span className="optional-label">Optional</span>
        </span>
        <textarea
          name="details"
          rows={3}
          placeholder="Share the property type, rough size, or what you want improved."
        />
      </label>

      <button className="primary-button form-submit" type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? (
          <>
            <Loader2 className="spin" size={18} aria-hidden="true" />
            Sending
          </>
        ) : (
          <>
            Send Request
            <ArrowRight size={18} aria-hidden="true" />
          </>
        )}
      </button>

      {message ? (
        <p className={`form-status ${state === "success" ? "success" : "error"}`} role="status">
          {state === "success" ? <CheckCircle2 size={17} aria-hidden="true" /> : null}
          {message}
        </p>
      ) : null}
    </form>
  );
}
