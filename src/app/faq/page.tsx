import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { CtaSection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Designer Plus Interiors' turnkey process, timelines, pricing, and warranty for residential and commercial interior projects.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    question: "How long does a typical turnkey project take?",
    answer:
      "A full residential turnkey project — from signed design to handover — typically takes 90 to 150 days depending on scope, civil work required, and material lead times. Commercial fit-outs are scoped individually based on square footage and approvals.",
  },
  {
    question: "Do you handle both design and execution?",
    answer:
      "Yes. Designer Plus Interiors is a turnkey studio — design, procurement, civil work, carpentry, electrical, and finishing are all managed by our in-house team under one project manager, so you never coordinate between separate vendors.",
  },
  {
    question: "Can I see my space before construction begins?",
    answer:
      "Every project includes photorealistic 3D visualization and walkthroughs. You approve layouts, materials, and lighting in render form before any material is ordered or work begins on site.",
  },
  {
    question: "What is included in the quotation?",
    answer:
      "Our quotations are fixed-scope and itemised by material, hardware, and labour. Any changes to scope after sign-off are documented and quoted separately before work proceeds — no surprise costs at handover.",
  },
  {
    question: "Do you offer a warranty on completed work?",
    answer:
      "Yes. Civil and carpentry work carries a one-year workmanship warranty, and modular kitchen hardware carries manufacturer warranties of up to ten years depending on the brand selected.",
  },
  {
    question: "Which cities do you currently serve?",
    answer:
      "We currently deliver projects across Bangalore, and select projects in Chennai, Hyderabad, Mysore, Coimbatore, and Pune for larger commercial engagements.",
  },
];

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        eyebrow="Good to Know"
        title="Frequently asked questions."
        description="Everything clients typically ask before starting a project with us. Can't find your answer? Reach out directly."
      />
      <section className="bg-ivory py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <FaqAccordion items={faqs} />
        </div>
      </section>
      <CtaSection />
    </>
  );
}
