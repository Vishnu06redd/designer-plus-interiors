import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export function BrandStory() {
  return (
    <section className="relative overflow-hidden bg-ivory py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src="/images/brand-story.jpg"
              alt="Warm, architecturally detailed living space designed by Designer Plus Interiors"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
            <div className="absolute inset-0 border border-ivory/10" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-crimson">
              Our Philosophy
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-balance font-display text-4xl leading-tight text-charcoal sm:text-5xl">
              Interiors built on structure,
              <br />
              finished with warmth.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-charcoal/70">
              For over a decade, Designer Plus Interiors has approached every
              project the way an architect approaches a building — with
              precision, restraint, and an eye for how space actually gets
              used. We pair that structural discipline with genuinely luxury
              materials and a single point of accountability from first
              sketch to final handover.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/70">
              The result isn&apos;t decoration. It&apos;s design that holds up
              — structurally, aesthetically, and to the way you actually
              live.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-charcoal/10 pt-8 sm:grid-cols-3">
              {[
                { label: "Founded", value: "2011" },
                { label: "Studio", value: "Bangalore" },
                { label: "Focus", value: "Turnkey" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-display text-2xl text-crimson">{item.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-charcoal/50">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
