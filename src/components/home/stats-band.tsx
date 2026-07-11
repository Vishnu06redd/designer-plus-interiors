import { Reveal } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";
import { stats } from "@/data/site";

export function StatsBand() {
  return (
    <section className="border-y border-charcoal/10 bg-ivory py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-10">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={0.05 * i} className="text-center lg:text-left">
            <p className="font-display text-4xl text-crimson sm:text-5xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-charcoal/50">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
