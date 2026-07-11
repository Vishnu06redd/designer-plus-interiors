import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/data/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

const highlights = [
  "Dedicated design consultant from brief to handover",
  "Photorealistic 3D visualization before execution begins",
  "Premium, vetted material and hardware suppliers",
  "Fixed-scope quotation with no hidden change orders",
];

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const index = services.findIndex((s) => s.slug === slug);
  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
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
        <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
          <Reveal>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-ivory/60 hover:text-ivory"
            >
              <ArrowLeft size={14} /> All Services
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="mt-8 block text-xs font-semibold uppercase tracking-[0.35em] text-orange">
              Service {String(index + 1).padStart(2, "0")}
            </span>
          </Reveal>
          <Reveal delay={0.15}>
            <h1 className="mt-4 text-balance font-display text-4xl leading-tight text-ivory sm:text-5xl">
              {service.name}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-ivory/70">
              {service.description}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/images/services-hero.jpg"
                alt={service.name}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-crimson">
                What&apos;s Included
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="mt-8 space-y-5">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={18} className="mt-0.5 shrink-0 text-crimson" />
                    <span className="text-base text-charcoal/75">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                href="/contact"
                className="group mt-10 inline-flex items-center gap-2 rounded-full bg-charcoal px-8 py-4 text-sm font-semibold text-ivory transition-colors hover:bg-crimson"
              >
                Book Free Consultation
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <h2 className="font-display text-3xl text-ivory">Related Services</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={0.06 * i}>
                <Link
                  href={`/services/${r.slug}`}
                  className="group block rounded-sm border border-ivory/10 p-6 transition-colors hover:border-orange"
                >
                  <h3 className="font-display text-lg text-ivory group-hover:text-orange">
                    {r.name}
                  </h3>
                  <p className="mt-2 text-sm text-ivory/60">{r.short}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
