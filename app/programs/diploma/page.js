import Image from "next/image";
import Link from "next/link";
import { Sparkles, Award, CheckCircle2, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBanner from "@/components/PageHeroBanner";
import SectionHeading from "@/components/SectionHeading";
import ProgramCard from "@/components/ProgramCard";
import { programs } from "@/data/programs";

export const metadata = {
  title: "1-Year Professional Diplomas | Pak Royal College",
  description:
    "Explore 1-Year Professional Diploma Programs at Pak Royal College in Information Technology (DIT), AI & Data Science, and Computer Applications."
};

export default function DiplomaProgramsPage() {
  const diplomaPrograms = programs.filter((p) => p.category === "diploma");

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section with Full-Bleed Background Image */}
      <PageHeroBanner
        title="Professional Diploma Programs"
        badge="ONE-YEAR CAREER DIPLOMAS"
        urdu="ایک سالہ پروفیشنل ڈپلومہ پروگرامز"
        description="Fast-track 1-year diplomas engineered to impart high-demand practical IT and artificial intelligence skills for immediate career employment."
        bgImage="/images/course_robotics.jpg"
        breadcrumbs={[
          { label: "Programs", href: "/programs" },
          { label: "Diploma Programs", href: "/programs/diploma" }
        ]}
      />

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Fast-Track Training"
          title="Diplomas Offered"
          subtitle="Morning, evening, and weekend batches available for students and working professionals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {diplomaPrograms.map((prog) => (
            <ProgramCard key={prog.id} program={prog} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-royal-gradient rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black">
            Enroll in a Diploma Program Today
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
            Easy monthly installment plans available for all diploma courses.
          </p>
          <div className="pt-2">
            <Link
              href="/apply"
              className="bg-white text-prc-navy hover:bg-prc-light font-bold px-8 py-3.5 rounded-full text-sm inline-block shadow-lg transition-all hover:scale-105"
            >
              Apply Online →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
