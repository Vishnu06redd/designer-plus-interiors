import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Interior Design Services",
  description:
    "Explore Designer Plus Interiors' full range of services — residential, commercial, and office interiors, modular kitchens, lighting, furniture, turnkey execution, 3D visualization, and renovation.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Ten disciplines, one accountable studio."
        description="From first sketch to final handover, every service below is delivered in-house — so nothing gets lost between designer, vendor, and site."
      />

      <section className="bg-ivory py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={0.05 * i}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col justify-between rounded-sm border border-charcoal/10 p-8 transition-colors hover:border-crimson hover:bg-charcoal"
                >
                  <div>
                    <span className="font-display text-sm text-charcoal/30 group-hover:text-ivory/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-4 font-display text-2xl text-charcoal group-hover:text-ivory">
                      {service.name}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal/60 group-hover:text-ivory/60">
                      {service.short}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-crimson group-hover:text-orange">
                    Explore Service
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
