import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/data/site";

export function ServicesTeaser() {
  return (
    <section className="bg-ivory py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-crimson">
            What We Do
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl leading-tight text-charcoal sm:text-5xl">
            Ten disciplines. One accountable studio.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 border-t border-charcoal/10 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={0.03 * i}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex items-center justify-between gap-6 border-b border-charcoal/10 py-7 pr-4 transition-colors hover:bg-charcoal/[0.03] sm:pl-4"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <span className="font-display text-sm text-charcoal/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl text-charcoal transition-colors group-hover:text-crimson sm:text-2xl">
                      {service.name}
                    </h3>
                  </div>
                  <p className="mt-2 pl-9 text-sm text-charcoal/60 sm:pl-9">
                    {service.short}
                  </p>
                </div>
                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-charcoal/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-crimson"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
