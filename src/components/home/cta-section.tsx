import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-burgundy via-crimson to-orange py-28 text-ivory lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <Reveal>
          <h2 className="text-balance font-display text-4xl leading-tight sm:text-5xl">
            Let&apos;s design your next space.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-lg text-balance text-base leading-relaxed text-ivory/85">
            A free, no-obligation consultation with our design team — bring
            your floor plan, your budget, and your ideas.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <Link
            href="/contact"
            className="group mt-10 flex items-center gap-2 rounded-full bg-charcoal px-8 py-4 text-sm font-semibold text-ivory transition-colors hover:bg-ivory hover:text-charcoal"
          >
            Book Free Consultation
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
