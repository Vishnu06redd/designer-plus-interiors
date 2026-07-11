import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { StatsBand } from "@/components/home/stats-band";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Designer Plus Interiors is a Bangalore-based turnkey interior design studio founded on architectural precision, premium materials, and single-point accountability.",
  alternates: { canonical: "/about" },
};

const timeline = [
  { year: "2011", event: "Studio founded in Bangalore with a two-person design team." },
  { year: "2015", event: "Expanded into commercial and hospitality interiors." },
  { year: "2018", event: "Opened in-house carpentry and modular kitchen workshop." },
  { year: "2021", event: "Crossed 300 turnkey residential and commercial handovers." },
  { year: "2024", event: "Introduced full 3D visualization pipeline for every project." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Designer Plus"
        title="Designed like architecture. Finished like luxury."
        description="We started Designer Plus Interiors because most interior studios stopped at the moodboard. We wanted to build spaces the way structural engineers think about buildings — then finish them with a jeweller's attention to material and light."
      />

      <section className="bg-ivory py-28 lg:py-36">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-crimson">
                Founder&apos;s Note
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 text-balance font-display text-4xl leading-tight text-charcoal">
                &ldquo;A home should feel inevitable — like it couldn&apos;t
                have been designed any other way.&rdquo;
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-charcoal/70">
                Our mission is simple: deliver spaces that are structurally
                sound, materially honest, and emotionally resonant — without
                the coordination chaos that usually comes with renovation or
                new-build interiors. Our vision is to be the studio Bangalore
                trusts to hand over a full set of keys, not a punch list.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/images/about-hero.jpg"
                alt="Designer Plus Interiors design studio"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <StatsBand />

      <section className="bg-charcoal py-28 lg:py-36">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-orange">
              Our Journey
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl text-ivory">Timeline</h2>
          </Reveal>

          <div className="mt-16 space-y-0 border-t border-ivory/10">
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={0.05 * i}>
                <div className="flex items-start gap-8 border-b border-ivory/10 py-7">
                  <span className="w-20 shrink-0 font-display text-2xl text-crimson">
                    {item.year}
                  </span>
                  <p className="text-base text-ivory/70">{item.event}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-crimson">
              The Studio
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl text-charcoal">
              Inside our Bangalore studio
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {["/images/office-gallery-1.jpg", "/images/office-gallery-2.jpg"].map(
              (src, i) => (
                <Reveal key={src} delay={0.1 * i}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                    <Image
                      src={src}
                      alt="Designer Plus Interiors studio workspace"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 45vw, 90vw"
                    />
                  </div>
                </Reveal>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
