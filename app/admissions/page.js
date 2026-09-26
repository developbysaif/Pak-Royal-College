import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  FileText,
  DollarSign,
  Gift,
  ArrowRight,
  Clock,
  Compass,
  GraduationCap
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBanner from "@/components/PageHeroBanner";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import { collegeInfo } from "@/data/collegeInfo";

export const metadata = {
  title: "Admissions 2026 | Pak Royal College",
  description:
    "Apply for Fall 2026 admissions at Pak Royal College. Learn about entry criteria, 5-step admission roadmap, scholarships, fee schedules, and deadlines."
};

export default function AdmissionsPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section with Full-Bleed Background Image */}
      <PageHeroBanner
        title="Start Your Journey With Us"
        badge="FALL 2026 ADMISSIONS OPEN"
        urdu="داخلہ برائے سیشن 2026 جاری ہے"
        description="Join Pak Royal College and experience a futuristic, student-centered academic ecosystem built to turn ambition into meaningful career accomplishment."
        bgImage="/images/hero_campus.jpg"
        breadcrumbs={[{ label: "Admissions", href: "/admissions" }]}
      >
        <div className="pt-2 flex flex-wrap gap-4">
          <Link
            href="/apply"
            className="bg-white text-prc-navy hover:bg-prc-light font-black px-7 py-3.5 rounded-full text-sm shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-prc-primary" />
            <span>Start Online Application</span>
          </Link>
          <Link
            href="/admissions/requirements"
            className="bg-white/15 hover:bg-white/25 text-white font-bold px-6 py-3.5 rounded-full text-sm backdrop-blur-md border border-white/30 transition-all hover:scale-105"
          >
            Check Eligibility Requirements
          </Link>
        </div>
      </PageHeroBanner>

      {/* 5-STEP ADMISSION PROCESS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-1">
            <span className="text-xs font-bold text-prc-primary uppercase tracking-wider">
              Roadmap to Enrollment
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-prc-navy">
              5-Step Seamless Admission Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Explore Programs", desc: "Select from our BS degrees or 1-year professional diplomas." },
              { step: "02", title: "Check Eligibility", desc: "Verify intermediate score benchmarks and required subjects." },
              { step: "03", title: "Submit Application", desc: "Fill out the 6-step online admission form at /apply." },
              { step: "04", title: "Application Review", desc: "Document verification and merit assessment by counselors." },
              { step: "05", title: "Enrollment & Welcome", desc: "Fee deposit, challan submission and orientation day." }
            ].map((st, idx) => (
              <div
                key={idx}
                className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 hover:border-prc-primary transition-all relative group"
              >
                <div className="w-10 h-10 rounded-xl bg-prc-primary text-white font-black text-sm flex items-center justify-center">
                  {st.step}
                </div>
                <h3 className="font-bold text-base text-prc-navy">{st.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/admissions/process"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-prc-primary hover:underline"
            >
              <span>View Detailed Step-by-Step Admission Timeline & Policy →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK LINKS SECTION (Requirements, Fees, Scholarships) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4 hover:border-prc-primary hover:shadow-xl transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-prc-primary flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-prc-navy">Admission Requirements</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Review specific minimum aggregate percentages, subject prerequisites, and necessary document attestations.
              </p>
            </div>
            <Link
              href="/admissions/requirements"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-prc-primary group-hover:translate-x-1 transition-transform"
            >
              <span>View Requirements</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4 hover:border-prc-primary hover:shadow-xl transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-prc-primary flex items-center justify-center">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-prc-navy">Transparent Fee Structure</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Semester-wise tuition breakdown, laboratory dues, and flexible installment schedules.
              </p>
            </div>
            <Link
              href="/admissions/fees"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-prc-primary group-hover:translate-x-1 transition-transform"
            >
              <span>View Fee Tables</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4 hover:border-prc-primary hover:shadow-xl transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-prc-primary flex items-center justify-center">
                <Gift className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-prc-navy">Scholarships & Financial Aid</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Merit scholarships up to 100% tuition waiver, kinship discounts, and need-based financial relief.
              </p>
            </div>
            <Link
              href="/admissions/scholarships"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-prc-primary group-hover:translate-x-1 transition-transform"
            >
              <span>Explore Scholarships</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ADMISSION FAQS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Got Questions?"
          title="Admissions Frequently Asked Questions"
          subtitle="Everything you need to know about criteria, entrance assessments, and document processing."
        />

        <FAQAccordion initialCategory="Admissions" showSearch={false} />
      </section>

      {/* FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-royal-gradient rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl space-y-4">
          <h2 className="text-2xl sm:text-4xl font-black">
            Ready to Begin Your Application?
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
            Take 5 minutes to submit your details online. No registration fee required for the preliminary review.
          </p>
          <div className="pt-2">
            <Link
              href="/apply"
              className="bg-white text-prc-navy hover:bg-prc-light font-black px-8 py-3.5 rounded-full text-sm inline-block shadow-lg transition-all hover:scale-105"
            >
              Start Online Application Form →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
