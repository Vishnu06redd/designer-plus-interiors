import { Star } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const testimonials = [
  {
    quote:
      "They treated our home like an architectural project, not a decorating job. Eighteen months later, every joint and finish still feels new.",
    name: "Ananya & Rohit Sharma",
    location: "Whitefield, Bangalore",
  },
  {
    quote:
      "Designer Plus ran our office fit-out like a construction site with a clock — on schedule, on budget, zero surprises at handover.",
    name: "Karthik Iyer",
    location: "Founder, Lumen Co-working",
  },
  {
    quote:
      "The 3D walkthroughs meant we approved every material before it arrived on site. What we saw in render is exactly what we got.",
    name: "Priya Nair",
    location: "Koramangala, Bangalore",
  },
];

export function TestimonialsPreview() {
  return (
    <section className="bg-charcoal py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-orange">
            Client Word
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl leading-tight text-ivory sm:text-5xl">
            Trusted by families and founders alike.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={0.08 * i}>
              <div className="flex h-full flex-col rounded-sm border border-ivory/10 bg-ivory/[0.03] p-8">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star key={star} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-6 flex-1 text-[15px] leading-relaxed text-ivory/80">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-8 border-t border-ivory/10 pt-4">
                  <p className="font-display text-base text-ivory">{t.name}</p>
                  <p className="mt-0.5 text-xs uppercase tracking-[0.15em] text-ivory/40">
                    {t.location}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
