import Image from "next/image";
import Link from "next/link";
import { Sparkles, GraduationCap, CheckCircle2, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBanner from "@/components/PageHeroBanner";
import SectionHeading from "@/components/SectionHeading";
import ProgramCard from "@/components/ProgramCard";
import { programs } from "@/data/programs";

export const metadata = {
  title: "BS Undergraduate Programs (4 Years) | Pak Royal College",
  description:
    "Explore undergraduate BS degree programs at Pak Royal College in Computer Science, Operation Theater Technology (BS-OTT), Medical Imaging (BS-RIT), DPT, MLT, Psychology, Nursing, ADP-CS, and BS-IT."
};

export default function BsProgramsPage() {
  const bsPrograms = programs.filter((p) => p.category === "bs");

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section with Full-Bleed Background Image */}
      <PageHeroBanner
        title="Undergraduate Programs"
        badge="FOUR-YEAR UNDERGRADUATE DEGREES"
        urdu="چار سالہ بیچلر ڈگری پروگرامز"
        description="Designed in compliance with Higher Education Commission (HEC) standards to equip students with deep theoretical insight, extensive laboratory engineering, and industry career preparation."
        bgImage="/images/course_coding.jpg"
        breadcrumbs={[
          { label: "Programs", href: "/programs" },
          { label: "BS Undergraduate", href: "/programs/bs" }
        ]}
      />

      {/* BS Overview Stats Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 border-r border-slate-100 last:border-0">
            <div className="text-2xl sm:text-3xl font-black text-prc-primary">4 Years</div>
            <div className="text-xs font-semibold text-slate-500">8 Regular Semesters</div>
          </div>
          <div className="p-4 border-r border-slate-100 last:border-0">
            <div className="text-2xl sm:text-3xl font-black text-prc-primary">130+</div>
            <div className="text-xs font-semibold text-slate-500">Credit Hours</div>
          </div>
          <div className="p-4 border-r border-slate-100 last:border-0">
            <div className="text-2xl sm:text-3xl font-black text-prc-primary">2-Semester</div>
            <div className="text-xs font-semibold text-slate-500">Capstone Project</div>
          </div>
          <div className="p-4">
            <div className="text-2xl sm:text-3xl font-black text-emerald-600">100%</div>
            <div className="text-xs font-semibold text-slate-500">Merit Scholarships</div>
          </div>
        </div>
      </section>

      {/* BS Programs Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Degree Disciplines"
          title="Undergraduate Degrees Offered"
          subtitle="Select a BS degree below to view complete semester curriculum, fee structure, and career pathways."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bsPrograms.map((prog) => (
            <ProgramCard key={prog.id} program={prog} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-royal-gradient rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black">
            Apply for Fall 2026 BS Admissions
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
            Applications are being processed on merit. Complete your online registration today.
          </p>
          <div className="pt-2">
            <Link
              href="/apply"
              className="bg-white text-prc-navy hover:bg-prc-light font-bold px-8 py-3.5 rounded-full text-sm inline-block shadow-lg transition-all hover:scale-105"
            >
              Start Your BS Application →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
