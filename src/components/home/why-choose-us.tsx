import { Compass, Gem, ShieldCheck, Timer } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const points = [
  {
    icon: Compass,
    title: "Architectural Precision",
    description:
      "Every layout begins with spatial planning, not moodboards — so the design holds up structurally, not just visually.",
  },
  {
    icon: Gem,
    title: "Genuine Luxury Materials",
    description:
      "Italian marble, premium hardware, and solid timber sourced directly from vetted suppliers — no substitutions without sign-off.",
  },
  {
    icon: ShieldCheck,
    title: "Single Point of Accountability",
    description:
      "One project manager, one team, one warranty — design and execution under a single roof, start to finish.",
  },
  {
    icon: Timer,
    title: "Committed Timelines",
    description:
      "Detailed execution schedules with weekly progress reporting, so your handover date is a commitment, not an estimate.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-ivory py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-crimson">
            Why Designer Plus
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl leading-tight text-charcoal sm:text-5xl">
            Precision is the luxury.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, i) => (
            <Reveal key={point.title} delay={0.06 * i} className="h-full">
              <div className="group flex h-full flex-col bg-ivory p-8 transition-colors hover:bg-charcoal">
                <point.icon
                  size={28}
                  className="text-crimson transition-colors group-hover:text-orange"
                  strokeWidth={1.5}
                />
                <h3 className="mt-6 font-display text-xl text-charcoal transition-colors group-hover:text-ivory">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60 transition-colors group-hover:text-ivory/60">
                  {point.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
