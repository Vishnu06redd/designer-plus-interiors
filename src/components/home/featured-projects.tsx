import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const projects = [
  {
    title: "The Whitefield Residence",
    category: "Residential · 4,200 sq.ft",
    image: "/images/featured-1.jpg",
    span: "lg:col-span-7",
  },
  {
    title: "Koramangala Penthouse",
    category: "Residential · 3,100 sq.ft",
    image: "/images/featured-2.jpg",
    span: "lg:col-span-5",
  },
  {
    title: "Lumen Co-working",
    category: "Commercial · 8,000 sq.ft",
    image: "/images/featured-3.jpg",
    span: "lg:col-span-5",
  },
  {
    title: "Villa Meridian",
    category: "Residential · 5,600 sq.ft",
    image: "/images/featured-4.jpg",
    span: "lg:col-span-7",
  },
];

export function FeaturedProjects() {
  return (
    <section className="bg-charcoal py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-orange">
                Selected Work
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 text-balance font-display text-4xl text-ivory sm:text-5xl">
                Featured Projects
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <Link
              href="/portfolio"
              className="group flex items-center gap-2 text-sm font-semibold text-ivory/80 hover:text-ivory"
            >
              View Full Portfolio
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:auto-rows-[440px]">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={0.05 * i} className={`${project.span} h-full`}>
              <Link
                href="/portfolio"
                className="group relative block aspect-[4/3] h-full overflow-hidden rounded-sm lg:aspect-auto"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(min-width: 1024px) 55vw, 90vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange">
                    {project.category}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-ivory">
                    {project.title}
                  </h3>
                </div>
                <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-ivory/10 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={18} className="text-ivory" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
