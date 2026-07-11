import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A selection of Designer Plus Interiors' residential and commercial projects across Bangalore — turnkey interiors delivered with architectural precision.",
  alternates: { canonical: "/portfolio" },
};

const projects = [
  { title: "The Whitefield Residence", category: "Residential", area: "4,200 sq.ft", image: "/images/featured-1.jpg", tall: false },
  { title: "Koramangala Penthouse", category: "Residential", area: "3,100 sq.ft", image: "/images/featured-2.jpg", tall: true },
  { title: "Lumen Co-working", category: "Commercial", area: "8,000 sq.ft", image: "/images/featured-3.jpg", tall: false },
  { title: "Villa Meridian", category: "Residential", area: "5,600 sq.ft", image: "/images/featured-4.jpg", tall: true },
  { title: "Indiranagar Boutique Retail", category: "Commercial", area: "1,800 sq.ft", image: "/images/portfolio-1.jpg", tall: false },
  { title: "HSR Layout Apartment", category: "Residential", area: "2,400 sq.ft", image: "/images/portfolio-2.jpg", tall: false },
  { title: "Sarjapur Villa Renovation", category: "Renovation", area: "3,900 sq.ft", image: "/images/portfolio-3.jpg", tall: true },
  { title: "Domlur Corporate Office", category: "Office", area: "6,200 sq.ft", image: "/images/portfolio-4.jpg", tall: true },
  { title: "JP Nagar Modular Kitchen", category: "Modular Kitchen", area: "340 sq.ft", image: "/images/portfolio-5.jpg", tall: true },
  { title: "Yelahanka Family Home", category: "Residential", area: "3,300 sq.ft", image: "/images/portfolio-6.jpg", tall: false },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        title="A portfolio built on precision."
        description="Every project below moved through the same seven-step process — consultation, planning, 3D design, material selection, execution, quality check, and handover."
      />

      <section className="bg-ivory py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
            {projects.map((project, i) => (
              <Reveal key={project.title} delay={0.03 * i} className="break-inside-avoid">
                <div
                  className={`group relative overflow-hidden rounded-sm ${
                    project.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/5 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange">
                      {project.category} &middot; {project.area}
                    </p>
                    <h3 className="mt-1 font-display text-xl text-ivory">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
