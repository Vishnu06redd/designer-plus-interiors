import type { Metadata } from "next";
import Image from "next/image";
import { Star, PlayCircle } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { TestimonialsPreview } from "@/components/home/testimonials-preview";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Hear from Designer Plus Interiors clients across Bangalore — residential families, commercial founders, and everything in between.",
  alternates: { canonical: "/testimonials" },
};

const videoTestimonials = [
  { name: "The Sharma Family", project: "Whitefield Residence", image: "/images/featured-1.jpg" },
  { name: "Karthik Iyer", project: "Lumen Co-working", image: "/images/featured-3.jpg" },
  { name: "Priya Nair", project: "Koramangala Penthouse", image: "/images/featured-2.jpg" },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Client Word"
        title="Real clients. Real handovers."
        description="Every testimonial below comes from a completed, occupied project — not a rendering."
      />

      <TestimonialsPreview />

      <section className="bg-ivory py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-crimson">
              Video Stories
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl text-charcoal">
              Hear it directly from our clients
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {videoTestimonials.map((v, i) => (
              <Reveal key={v.name} delay={0.08 * i}>
                <div className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-sm">
                  <Image
                    src={v.image}
                    alt={`${v.name} video testimonial`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 640px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-charcoal/40 transition-colors group-hover:bg-charcoal/55" />
                  <PlayCircle
                    size={56}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-ivory/90"
                    strokeWidth={1.2}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="font-display text-lg text-ivory">{v.name}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-ivory/60">
                      {v.project}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-orange">
              Google Reviews
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 flex justify-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={22} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 font-display text-3xl text-ivory">4.9 / 5</p>
            <p className="mt-2 text-sm text-ivory/50">Based on 210+ verified Google reviews</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
