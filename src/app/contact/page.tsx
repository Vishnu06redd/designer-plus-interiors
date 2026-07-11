import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Book a free interior design consultation with Designer Plus Interiors in Bangalore. Call, WhatsApp, or send us your project details directly.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(
    `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.region}`
  );

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's talk about your space."
        description="Book a free, no-obligation consultation — bring your floor plan, your budget, and your ideas."
      />

      <section className="bg-ivory py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1fr_1.1fr] lg:px-10">
          <Reveal>
            <div>
              <h2 className="font-display text-3xl text-charcoal">Send us a message</h2>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <div className="space-y-10">
            <Reveal delay={0.1}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-4 rounded-sm border border-charcoal/10 p-6 transition-colors hover:border-crimson"
                >
                  <Phone size={20} className="text-crimson" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-charcoal/50">Call Us</p>
                    <p className="mt-1 font-medium text-charcoal">{siteConfig.phone}</p>
                  </div>
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-sm border border-charcoal/10 p-6 transition-colors hover:border-crimson"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-crimson">
                    <path
                      d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.3A9 9 0 1 0 12 3Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M8.5 9.3c0 4 3.2 6.7 6.6 7 .9.1 1.6-.6 1.6-1.4v-.6c0-.4-.3-.7-.7-.8l-1.6-.4c-.3-.1-.6 0-.8.2l-.4.5c-1.2-.5-2.1-1.4-2.6-2.6l.5-.4c.2-.2.3-.5.2-.8l-.4-1.6c-.1-.4-.4-.7-.8-.7h-.6c-.8 0-1.5.7-1.4 1.6Z"
                      fill="currentColor"
                    />
                  </svg>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-charcoal/50">WhatsApp</p>
                    <p className="mt-1 font-medium text-charcoal">Chat with us</p>
                  </div>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex items-start gap-4 rounded-sm border border-charcoal/10 p-6">
                <MapPin size={20} className="mt-0.5 shrink-0 text-crimson" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-charcoal/50">Studio Address</p>
                  <p className="mt-1 text-base text-charcoal/80">
                    {siteConfig.address.street}, {siteConfig.address.city},{" "}
                    {siteConfig.address.region} {siteConfig.address.postalCode}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex items-start gap-4 rounded-sm border border-charcoal/10 p-6">
                <Clock size={20} className="mt-0.5 shrink-0 text-crimson" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-charcoal/50">Working Hours</p>
                  <p className="mt-1 text-base text-charcoal/80">{siteConfig.hours}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="flex items-start gap-4 rounded-sm border border-charcoal/10 p-6">
                <Mail size={20} className="mt-0.5 shrink-0 text-crimson" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-charcoal/50">Email</p>
                  <a href={`mailto:${siteConfig.email}`} className="mt-1 block text-base text-charcoal/80">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="overflow-hidden rounded-sm border border-charcoal/10">
                <iframe
                  title="Designer Plus Interiors studio location"
                  src={`https://maps.google.com/maps?q=${mapQuery}&z=14&output=embed`}
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
