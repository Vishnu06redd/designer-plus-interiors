import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { ProcessOverview } from "@/components/home/process-overview";
import { CtaSection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "From consultation to handover — the seven-step process Designer Plus Interiors follows on every residential and commercial project.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How We Work"
        title="A process built to remove surprises."
        description="Interior projects fail at the seams — between designer, vendor, and contractor. Ours doesn't have any: one studio, one timeline, one team accountable at every step."
      />
      <ProcessOverview />
      <CtaSection />
    </>
  );
}
