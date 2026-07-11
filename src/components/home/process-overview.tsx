"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/data/site";

export function ProcessOverview() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-orange">
            How We Work
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl leading-tight text-ivory sm:text-5xl">
            Seven steps, from brief to keys.
          </h2>
        </Reveal>

        <div className="relative mt-20">
          <svg
            className="absolute left-[27px] top-0 hidden h-full w-px lg:block"
            width="1"
            height="100%"
            preserveAspectRatio="none"
          >
            <motion.line
              x1="0.5"
              y1="0"
              x2="0.5"
              y2="100%"
              stroke="rgba(250,247,242,0.15)"
              strokeWidth="1"
            />
            <motion.line
              x1="0.5"
              y1="0"
              x2="0.5"
              y2="100%"
              stroke="url(#process-gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: [0.65, 0, 0.35, 1] }}
            />
            <defs>
              <linearGradient id="process-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop stopColor="#d92818" />
                <stop offset="1" stopColor="#f2811e" />
              </linearGradient>
            </defs>
          </svg>

          <div className="space-y-10 lg:space-y-14">
            {processSteps.map((item, i) => (
              <Reveal key={item.step} delay={0.05 * i}>
                <div className="flex gap-6 lg:gap-10">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-ivory/15 bg-charcoal font-display text-lg text-orange">
                    {item.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-display text-2xl text-ivory">{item.title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-ivory/60">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
