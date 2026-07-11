import { Reveal } from "@/components/ui/reveal";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal pb-20 pt-40 lg:pb-28 lg:pt-48">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250,247,242,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(250,247,242,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-orange">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 text-balance font-display text-4xl leading-tight text-ivory sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-ivory/70">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
