"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { LogoMark } from "@/components/ui/logo-mark";

export function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[720px] w-full items-center justify-center overflow-hidden bg-charcoal">
      <video
        aria-hidden="true"
        autoPlay
        muted
        playsInline
        preload="metadata"
        poster="/images/hero-interior.jpg"
        className="absolute inset-0 h-full w-full object-cover opacity-50 brightness-[0.65]"
      >
        <source src="/videos/hero-interior.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-charcoal/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-transparent to-charcoal/80" />

      <motion.div
        aria-hidden
        className="absolute -left-24 top-1/4 h-px w-[70vw] bg-gradient-to-r from-transparent via-orange/40 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-24 bottom-1/3 h-px w-[60vw] bg-gradient-to-r from-transparent via-crimson/40 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <LogoMark size={72} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 text-xs font-semibold uppercase tracking-[0.4em] text-orange"
        >
          Bangalore &middot; Turnkey Interior Design
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="mt-6 text-balance font-display text-5xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl"
        >
          We Design Spaces
          <br />
          That Inspire.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-8 max-w-xl text-balance text-base leading-relaxed text-ivory/70 sm:text-lg"
        >
          Premium residential, commercial, and turnkey interior solutions —
          architecturally led, meticulously executed, delivered without
          compromise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-full bg-crimson px-8 py-4 text-sm font-semibold text-ivory transition-all hover:bg-orange"
          >
            Book Free Consultation
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
          <Link
            href="/portfolio"
            className="group flex items-center gap-2 rounded-full border border-ivory/25 px-8 py-4 text-sm font-semibold text-ivory transition-all hover:border-ivory hover:bg-ivory/5"
          >
            View Portfolio
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-ivory/50"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
