import Image from "next/image";
import Link from "next/link";
import { Sparkles, Award, CheckCircle2, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBanner from "@/components/PageHeroBanner";
import SectionHeading from "@/components/SectionHeading";
import ProgramCard from "@/components/ProgramCard";
import { programs } from "@/data/programs";

export const metadata = {
  title: "Professional Certifications & Bootcamps | Pak Royal College",
  description:
    "Master Full-Stack Web Engineering, Cloud DevOps, and specialized technology stacks with industry-led 6-month professional certifications."
};

export default function ProfessionalProgramsPage() {
  const profPrograms = programs.filter((p) => p.category === "professional");

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section with Full-Bleed Background Image */}
      <PageHeroBanner
        title="Professional Certifications"
        badge="INTENSIVE 6-MONTH BOOTCAMPS"
        urdu="پیشہ ورانہ سرٹیفیکیشنز اور ہینڈز آن بوٹ کیمپس"
        description="High-intensity coding bootcamps in Full-Stack Web Development, Cloud Computing, Kubernetes, and DevOps designed for immediate industry hiring."
        bgImage="/images/course_coding.jpg"
        breadcrumbs={[
          { label: "Programs", href: "/programs" },
          { label: "Professional Certifications", href: "/programs/professional" }
        ]}
      />

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Industry Bootcamps"
          title="Professional Tracks"
          subtitle="Taught by senior software architects and lead DevOps practitioners."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profPrograms.map((prog) => (
            <ProgramCard key={prog.id} program={prog} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-royal-gradient rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black">
            Advance Your Tech Career with Professional Certification
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
            Weekend and evening batches available for university students and working professionals.
          </p>
          <div className="pt-2">
            <Link
              href="/apply"
              className="bg-white text-prc-navy hover:bg-prc-light font-bold px-8 py-3.5 rounded-full text-sm inline-block shadow-lg transition-all hover:scale-105"
            >
              Enroll in Bootcamp →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
