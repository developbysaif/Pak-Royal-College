import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBanner from "@/components/PageHeroBanner";
import FAQAccordion from "@/components/FAQAccordion";
import { faqs } from "@/data/faq";

export const metadata = {
  title: "Frequently Asked Questions (FAQ) | Pak Royal College",
  description:
    "Find answers to frequently asked questions about admissions, BS degrees, fee installments, scholarships, and campus facilities at Pak Royal College."
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  return (
    <div className="space-y-12 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section with Full-Bleed Background Image */}
      <PageHeroBanner
        title="Frequently Asked Questions"
        badge="QUESTIONS & ANSWERS"
        urdu="عام طور پر پوچھے جانے والے سوالات اور ان کے جوابات"
        description="Explore answers to common queries regarding admissions, HEC recognition, degree eligibility, fee installments, and campus student life."
        bgImage="/images/hero_library.jpg"
        breadcrumbs={[{ label: "FAQs", href: "/faq" }]}
      />

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <FAQAccordion showSearch={true} />
      </section>
    </div>
  );
}
