import { Hero } from "@/components/home/hero";
import { BrandStory } from "@/components/home/brand-story";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { ServicesTeaser } from "@/components/home/services-teaser";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { ProcessOverview } from "@/components/home/process-overview";
import { StatsBand } from "@/components/home/stats-band";
import { TestimonialsPreview } from "@/components/home/testimonials-preview";
import { CtaSection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStory />
      <StatsBand />
      <FeaturedProjects />
      <ServicesTeaser />
      <WhyChooseUs />
      <ProcessOverview />
      <TestimonialsPreview />
      <CtaSection />
    </>
  );
}
