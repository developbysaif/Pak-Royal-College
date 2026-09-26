import Image from "next/image";
import Link from "next/link";
import { Gift, Award, CheckCircle2, FileText, ArrowRight, Sparkles } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBanner from "@/components/PageHeroBanner";
import SectionHeading from "@/components/SectionHeading";
import { scholarships } from "@/data/scholarships";

export const metadata = {
  title: "Scholarships & Financial Aid | Pak Royal College",
  description:
    "Explore merit-based scholarships (up to 100% tuition waiver), kinship concessions, Hafiz-e-Quran aid, and need-based financial relief at Pak Royal College."
};

export default function ScholarshipsPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section with Full-Bleed Background Image */}
      <PageHeroBanner
        title="Scholarships & Financial Aid"
        badge="FINANCIAL SUPPORT SCHEMES"
        urdu="میرٹ اور مستحق طلباء کے لیے خصوصی وظائف"
        description="We believe financial constraints should never stand between an ambitious student and quality academic excellence. Pak Royal College offers extensive merit and need-based scholarships."
        bgImage="/images/hero_graduation.jpg"
        breadcrumbs={[
          { label: "Admissions", href: "/admissions" },
          { label: "Scholarships", href: "/admissions/scholarships" }
        ]}
      />

      {/* Scholarship Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scholarships.map((sch) => (
            <div
              key={sch.id}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-2xl hover:border-prc-primary transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-prc-primary flex items-center justify-center">
                    <Gift className="w-6 h-6" />
                  </div>
                  <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">
                    {sch.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-extrabold text-xl text-prc-navy">
                    {sch.name}
                  </h3>
                  <div className="text-xs font-bold text-prc-primary mt-1">
                    Coverage: {sch.coverage}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {sch.description}
                </p>

                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <div className="text-xs font-bold text-slate-800">Eligibility & Requirements:</div>
                  <ul className="text-xs text-slate-500 space-y-1">
                    {sch.requirements.map((req, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100">
                <div className="text-xs text-slate-500 mb-3">
                  <span className="font-semibold text-slate-700">How to apply: </span>
                  {sch.applicationProcess}
                </div>
                <Link
                  href="/apply"
                  className="w-full inline-flex items-center justify-center gap-1 bg-prc-light hover:bg-prc-primary text-prc-primary hover:text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors"
                >
                  Apply for Admission with Scholarship
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-royal-gradient rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black">
            Have Questions About Scholarship Eligibility?
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
            Contact the Student Financial Aid Directorate for personalized guidance on scholarship documents.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="bg-white text-prc-navy hover:bg-prc-light font-bold px-7 py-3.5 rounded-full text-sm inline-block shadow-lg transition-all hover:scale-105"
            >
              Contact Financial Aid Directorate →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
