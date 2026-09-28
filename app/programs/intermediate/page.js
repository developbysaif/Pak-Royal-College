import Image from "next/image";
import Link from "next/link";
import { Sparkles, GraduationCap, CheckCircle2, ArrowRight, BookOpen, Award, Microscope, FlaskConical, Stethoscope } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBanner from "@/components/PageHeroBanner";
import SectionHeading from "@/components/SectionHeading";
import ProgramCard from "@/components/ProgramCard";
import { programs } from "@/data/programs";

export const metadata = {
  title: "Intermediate Programs (FSc & ICS) | Pak Royal College",
  description:
    "Explore 2-year Intermediate programs at Pak Royal College in F.Sc Pre-Medical, F.Sc Pre-Engineering, ICS Computer Science, and F.Sc Medical Laboratory Technology (MLT)."
};

export default function IntermediateProgramsPage() {
  const intermediatePrograms = programs.filter((p) => p.category === "intermediate");

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <PageHeroBanner
        title="Intermediate Programs (HSSC)"
        badge="FA / FSC / ICS / MLT ADMISSIONS 2026"
        urdu="انٹرمیڈیٹ اور میڈیکل لیب ٹیکنالوجی پروگرامز"
        description="Build a rock-solid foundation in science, pre-engineering, computer science, and allied healthcare with experienced BISE board examiners and integrated MDCAT/ECAT coaching."
        bgImage="/images/program_fsc_pre_medical.jpg"
        breadcrumbs={[
          { label: "Programs", href: "/programs" },
          { label: "Intermediate", href: "/programs/intermediate" }
        ]}
      />

      {/* Stats Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 border-r border-slate-100 last:border-0">
            <div className="text-2xl sm:text-3xl font-black text-prc-primary">2 Years</div>
            <div className="text-xs font-semibold text-slate-500">Part I & Part II</div>
          </div>
          <div className="p-4 border-r border-slate-100 last:border-0">
            <div className="text-2xl sm:text-3xl font-black text-prc-primary">BISE & PMF</div>
            <div className="text-xs font-semibold text-slate-500">Board Aligned Syllabi</div>
          </div>
          <div className="p-4 border-r border-slate-100 last:border-0">
            <div className="text-2xl sm:text-3xl font-black text-prc-primary">MDCAT / ECAT</div>
            <div className="text-xs font-semibold text-slate-500">Integrated Entry Test Prep</div>
          </div>
          <div className="p-4">
            <div className="text-2xl sm:text-3xl font-black text-emerald-600">Up to 100%</div>
            <div className="text-xs font-semibold text-slate-500">Merit Scholarships</div>
          </div>
        </div>
      </section>

      {/* Intermediate Programs Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="HSSC Disciplines"
          title="Intermediate Academic Streams"
          subtitle="Choose your intermediate faculty below to view full board curriculum, laboratory schedule, and career pathways."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {intermediatePrograms.map((prog) => (
            <ProgramCard key={prog.id} program={prog} />
          ))}
        </div>
      </section>

      {/* Why Intermediate at Pak Royal College */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="px-3.5 py-1 rounded-full bg-white text-prc-primary text-xs font-bold uppercase tracking-wider border border-slate-200">
              Why Pak Royal College Intermediate
            </span>
            <h2 className="text-3xl font-black text-prc-navy mt-2">
              Engineered for Top Board Positions & University Admissions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-prc-primary flex items-center justify-center font-bold">
                <Microscope className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-prc-navy">High-Tech Science Laboratories</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Dedicated biology, chemistry, and physics laboratories equipped with precision microscopes, optics benches, and testing equipment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-prc-primary flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-prc-navy">Daily & Monthly Test Series</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Chapter-wise tests, quarter-book evaluations, and full board simulation examinations ensure 100% exam readiness and time management.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-prc-primary flex items-center justify-center font-bold">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-prc-navy">MDCAT & ECAT Mentorship</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Weekend test prep workshops covering high-yield MCQs for King Edward, Allama Iqbal, NUST, UET, GIKI, FAST, and PMDC tests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-royal-gradient rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black">
            Register for Fall 2026 Intermediate Admissions
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
            Merit scholarships up to 100% available for students with 80%+ marks in Matriculation.
          </p>
          <div className="pt-2">
            <Link
              href="/apply"
              className="bg-white text-prc-navy hover:bg-prc-light font-bold px-8 py-3.5 rounded-full text-sm inline-block shadow-lg transition-all hover:scale-105"
            >
              Start Intermediate Application →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
