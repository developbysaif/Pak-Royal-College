"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText, CheckCircle2, AlertCircle, ArrowRight, Sparkles } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBanner from "@/components/PageHeroBanner";
import SectionHeading from "@/components/SectionHeading";

export default function RequirementsPage() {
  const [activeTab, setActiveTab] = useState("bs");

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section with Full-Bleed Background Image */}
      <PageHeroBanner
        title="Admission Requirements"
        badge="ELIGIBILITY GUIDELINES"
        urdu="اہلیت اور ضروری دستاویزات کی تفصیلات"
        description="Review institutional eligibility criteria, required educational transcripts, minimum percentage thresholds, and equivalence documentation."
        bgImage="/images/hero_campus.jpg"
        breadcrumbs={[
          { label: "Admissions", href: "/admissions" },
          { label: "Requirements", href: "/admissions/requirements" }
        ]}
      />

      {/* Category Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 space-y-6">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "bs", label: "BS Programs (4 Years)" },
              { id: "diploma", label: "Diploma Programs (1 Year)" },
              { id: "professional", label: "Professional Certifications" },
              { id: "short", label: "Short Courses" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeTab === tab.id
                    ? "bg-prc-primary text-white shadow-md shadow-blue-500/25 scale-105"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {activeTab === "bs" && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md space-y-8">
            <div className="space-y-2">
              <span className="bg-blue-50 text-prc-primary text-xs font-bold px-3 py-1 rounded-full uppercase">
                Undergraduate Criteria
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-prc-navy">
                Eligibility for BS Degree Programs
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <h3 className="font-bold text-base text-prc-navy">
                  BS Computer Science / AI / SE / IT
                </h3>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Intermediate (FSc Pre-Engineering / ICS with Math / General Science) with minimum 50% marks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>A-Levels with Mathematics or equivalent with IBCC Equivalence Certificate (minimum 50% equivalent marks).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Pre-Medical candidates eligible subject to completing deficiency mathematics courses.</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <h3 className="font-bold text-base text-prc-navy">
                  BBA / BS Mathematics / BS English
                </h3>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Intermediate (FA / FSc / ICS / I.Com) or equivalent with minimum 45% aggregate marks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>A-Levels or equivalent qualification with minimum 45% equivalent marks.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Required Documents Checklist */}
            <div className="pt-4 border-t border-slate-100 space-y-4">
              <h3 className="text-xl font-bold text-prc-navy">
                Required Documents Checklist (BS Programs)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl">
                  <FileText className="w-4 h-4 text-prc-primary shrink-0" />
                  <span>Matric / O-Level result card & certificate (Original + 3 attested copies)</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl">
                  <FileText className="w-4 h-4 text-prc-primary shrink-0" />
                  <span>Intermediate / A-Level result card (Original + 3 attested copies)</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl">
                  <FileText className="w-4 h-4 text-prc-primary shrink-0" />
                  <span>CNIC / B-Form copy of applicant and Father/Guardian</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl">
                  <FileText className="w-4 h-4 text-prc-primary shrink-0" />
                  <span>4 recent passport size photographs (Blue background)</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl">
                  <FileText className="w-4 h-4 text-prc-primary shrink-0" />
                  <span>IBCC Equivalence Certificate (for A-Levels and foreign board graduates)</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl">
                  <FileText className="w-4 h-4 text-prc-primary shrink-0" />
                  <span>Character Certificate from the college/school last attended</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "diploma" && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md space-y-6">
            <h2 className="text-2xl font-black text-prc-navy">
              Diploma in IT (DIT) & AI Diplomas
            </h2>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-sm text-slate-600">
              <div><span className="font-bold">Minimum Academic Qualification: </span>Matriculation (Science or Arts) or Intermediate.</div>
              <div><span className="font-bold">Minimum Percentage: </span>45% marks.</div>
              <div><span className="font-bold">Required Documents: </span>Matric certificate copy, CNIC/B-Form copy, 2 passport photos.</div>
            </div>
          </div>
        )}

        {activeTab === "professional" && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md space-y-6">
            <h2 className="text-2xl font-black text-prc-navy">
              Professional Full-Stack & Cloud Bootcamps
            </h2>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-sm text-slate-600">
              <div><span className="font-bold">Qualification: </span>Intermediate or Bachelor degree with basic computer proficiency.</div>
              <div><span className="font-bold">Selection Process: </span>Brief screening interview.</div>
            </div>
          </div>
        )}

        {activeTab === "short" && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md space-y-6">
            <h2 className="text-2xl font-black text-prc-navy">
              Short Courses (Python, UI/UX, IELTS, Marketing)
            </h2>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-sm text-slate-600">
              <div><span className="font-bold">Eligibility: </span>Open enrollment for high school students, university undergraduates, and working professionals.</div>
              <div><span className="font-bold">Required Documents: </span>CNIC/B-Form copy and 1 passport photograph.</div>
            </div>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-royal-gradient rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black">
            Meet the Requirements? Apply Now!
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
            Online applications take less than 5 minutes to submit.
          </p>
          <div className="pt-2">
            <Link
              href="/apply"
              className="bg-white text-prc-navy hover:bg-prc-light font-bold px-8 py-3.5 rounded-full text-sm inline-block shadow-lg transition-all hover:scale-105"
            >
              Start Your Online Application →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
