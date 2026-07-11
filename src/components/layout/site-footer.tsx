import Link from "next/link";
import {
  InstagramIcon,
  FacebookIcon,
  LinkedInIcon,
  YoutubeIcon,
} from "@/components/ui/social-icons";
import { LogoMark } from "@/components/ui/logo-mark";
import { navLinks, services, siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-charcoal text-ivory">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250,247,242,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(250,247,242,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-24 lg:px-10">
        <div className="grid grid-cols-1 gap-16 border-b border-ivory/10 pb-16 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark size={44} animate={false} />
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl">Designer Plus</span>
                <span className="text-[10px] uppercase tracking-[0.35em] text-orange">
                  Interiors
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/60">
              {siteConfig.description}
            </p>
            <div className="mt-8 flex gap-4">
              {[
                { icon: InstagramIcon, href: siteConfig.social.instagram, label: "Instagram" },
                { icon: FacebookIcon, href: siteConfig.social.facebook, label: "Facebook" },
                { icon: LinkedInIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
                { icon: YoutubeIcon, href: siteConfig.social.youtube, label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 transition-colors hover:border-crimson hover:text-crimson"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-ivory/40">
              Quick Links
            </h3>
            <ul className="mt-6 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory/70 transition-colors hover:text-orange"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-ivory/40">
              Services
            </h3>
            <ul className="mt-6 space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-ivory/70 transition-colors hover:text-orange"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-ivory/40">
              Studio
            </h3>
            <p className="mt-6 text-sm leading-relaxed text-ivory/70">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.city}, {siteConfig.address.region}{" "}
              {siteConfig.address.postalCode}
            </p>
            <p className="mt-4 text-sm text-ivory/70">{siteConfig.hours}</p>
            <div className="mt-4 space-y-1">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="block text-sm font-medium text-orange"
              >
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="block text-sm text-ivory/70">
                {siteConfig.email}
              </a>
            </div>

            <form className="mt-8">
              <label
                htmlFor="footer-newsletter"
                className="text-xs font-semibold uppercase tracking-[0.25em] text-ivory/40"
              >
                Newsletter
              </label>
              <div className="mt-3 flex gap-2">
                <input
                  id="footer-newsletter"
                  type="email"
                  required
                  placeholder="Your email"
                  className="w-full rounded-full border border-ivory/15 bg-transparent px-4 py-2.5 text-sm text-ivory placeholder:text-ivory/40 focus:border-orange focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-charcoal transition-colors hover:bg-gold"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-ivory/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Crafted with precision in Bangalore.</p>
        </div>
      </div>
    </footer>
  );
}
