"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LogoMark } from "@/components/ui/logo-mark";
import { navLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Every page opens on a dark (charcoal) hero, so the header defaults to
  // light text until the user scrolls past it onto an ivory section.
  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "bg-ivory/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(21,19,15,0.08)]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <LogoMark size={40} animate={false} />
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                "font-display text-lg tracking-tight transition-colors duration-500",
                solid ? "text-charcoal" : "text-ivory"
              )}
            >
              Designer Plus
            </span>
            <span className="text-[10px] uppercase tracking-[0.35em] text-crimson">
              Interiors
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "group relative text-sm font-medium tracking-wide transition-colors duration-500",
                solid ? "text-charcoal/80 hover:text-charcoal" : "text-ivory/85 hover:text-ivory"
              )}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-crimson transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className={cn(
              "text-sm font-medium transition-colors duration-500",
              solid ? "text-charcoal/80 hover:text-charcoal" : "text-ivory/85 hover:text-ivory"
            )}
          >
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className={cn(
              "rounded-full px-6 py-2.5 text-sm font-semibold transition-colors duration-500",
              solid
                ? "bg-charcoal text-ivory hover:bg-crimson"
                : "bg-ivory text-charcoal hover:bg-crimson hover:text-ivory"
            )}
          >
            Book Consultation
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-500 lg:hidden",
            solid ? "border-charcoal/15 text-charcoal" : "border-ivory/30 text-ivory"
          )}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-ivory lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 pb-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-charcoal/10 py-4 text-lg font-medium text-charcoal"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-6 rounded-full bg-charcoal px-6 py-3 text-center text-sm font-semibold text-ivory"
              >
                Book Free Consultation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
