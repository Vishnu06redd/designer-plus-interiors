"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            required
            type="text"
            className="mt-2 w-full border-b border-charcoal/20 bg-transparent py-3 text-base text-charcoal placeholder:text-charcoal/30 focus:border-crimson focus:outline-none"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            required
            type="tel"
            className="mt-2 w-full border-b border-charcoal/20 bg-transparent py-3 text-base text-charcoal placeholder:text-charcoal/30 focus:border-crimson focus:outline-none"
            placeholder="+91 00000 00000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">
          Email
        </label>
        <input
          id="email"
          name="email"
          required
          type="email"
          className="mt-2 w-full border-b border-charcoal/20 bg-transparent py-3 text-base text-charcoal placeholder:text-charcoal/30 focus:border-crimson focus:outline-none"
          placeholder="you@email.com"
        />
      </div>

      <div>
        <label htmlFor="service" className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">
          Project Type
        </label>
        <select
          id="service"
          name="service"
          className="mt-2 w-full border-b border-charcoal/20 bg-transparent py-3 text-base text-charcoal focus:border-crimson focus:outline-none"
          defaultValue=""
        >
          <option value="" disabled>
            Select project type
          </option>
          <option>Residential Interiors</option>
          <option>Commercial Interiors</option>
          <option>Office Interiors</option>
          <option>Modular Kitchen</option>
          <option>Renovation</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">
          Tell us about your space
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-2 w-full border-b border-charcoal/20 bg-transparent py-3 text-base text-charcoal placeholder:text-charcoal/30 focus:border-crimson focus:outline-none"
          placeholder="Location, area, timeline, budget range..."
        />
      </div>

      <button
        type="submit"
        className="group flex items-center gap-2 rounded-full bg-charcoal px-8 py-4 text-sm font-semibold text-ivory transition-colors hover:bg-crimson"
      >
        {submitted ? "Thank you — we'll be in touch shortly" : "Book Free Consultation"}
        {!submitted && (
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        )}
      </button>
    </form>
  );
}
