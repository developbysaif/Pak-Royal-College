import Image from "next/image";
import Link from "next/link";
import { DollarSign, ShieldCheck, CheckCircle2, AlertCircle, ArrowRight, Download } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBanner from "@/components/PageHeroBanner";
import SectionHeading from "@/components/SectionHeading";
import { undergraduateFees, diplomaFees, feePolicies } from "@/data/fees";

export const metadata = {
  title: "Fee Structure | Pak Royal College",
  description:
    "Review transparent semester fee structures for BS programs, 1-year diplomas, laboratory charges, and installment plans at Pak Royal College."
};

export default function FeesPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section with Full-Bleed Background Image */}
      <PageHeroBanner
        title="Academic Fee Structure"
        badge="TRANSPARENT INSTITUTIONAL TUITION"
        urdu="فیس کا تفصیلی اور شفاف شیڈول"
        description="Pak Royal College is committed to affordable, transparent, and high-value higher education with flexible payment installment options."
        bgImage="/images/hero_campus.jpg"
        breadcrumbs={[
          { label: "Admissions", href: "/admissions" },
          { label: "Fees", href: "/admissions/fees" }
        ]}
      />

      {/* Undergraduate BS Fee Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200 space-y-6">
          <div>
            <span className="bg-blue-50 text-prc-primary text-xs font-bold px-3 py-1 rounded-full uppercase">
              Undergraduate Programs (4 Years / 8 Semesters)
            </span>
            <h2 className="text-2xl font-black text-prc-navy mt-2">
              BS Degree Programs Fee Schedule
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-100 text-xs uppercase font-bold text-prc-navy">
                <tr>
                  <th className="py-4 px-4 rounded-l-xl">Degree Program</th>
                  <th className="py-4 px-4">Admission Fee (One-Time)</th>
                  <th className="py-4 px-4">Tuition / Semester</th>
                  <th className="py-4 px-4">Lab & Exam Charges</th>
                  <th className="py-4 px-4 rounded-r-xl">Total / Semester</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {undergraduateFees.map((fee, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-900">
                      {fee.program}
                    </td>
                    <td className="py-4 px-4 text-slate-600">
                      {fee.admissionFee}
                    </td>
                    <td className="py-4 px-4 text-slate-600">
                      {fee.tuitionFeePerSemester}
                    </td>
                    <td className="py-4 px-4 text-slate-600">
                      {Number(fee.labChargesPerSemester.replace(/[^0-9]/g, "")) +
                        Number(fee.examFeePerSemester.replace(/[^0-9]/g, "")) >
                      0
                        ? `PKR ${(
                            Number(fee.labChargesPerSemester.replace(/[^0-9]/g, "")) +
                            Number(fee.examFeePerSemester.replace(/[^0-9]/g, ""))
                          ).toLocaleString()}`
                        : "PKR 5,000"}
                    </td>
                    <td className="py-4 px-4 font-black text-prc-primary text-base">
                      {fee.totalPerSemester}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Diplomas & Professional Certifications Fee */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200 space-y-6">
          <div>
            <span className="bg-blue-50 text-prc-primary text-xs font-bold px-3 py-1 rounded-full uppercase">
              Diplomas & Professional Bootcamps
            </span>
            <h2 className="text-2xl font-black text-prc-navy mt-2">
              Diplomas & Certification Fee Schedule
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-100 text-xs uppercase font-bold text-prc-navy">
                <tr>
                  <th className="py-4 px-4 rounded-l-xl">Program Title</th>
                  <th className="py-4 px-4">Duration</th>
                  <th className="py-4 px-4">Admission Fee</th>
                  <th className="py-4 px-4">Total Course Package</th>
                  <th className="py-4 px-4 rounded-r-xl">Easy Monthly Plan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {diplomaFees.map((fee, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-900">
                      {fee.program}
                    </td>
                    <td className="py-4 px-4 text-slate-600">
                      {fee.duration}
                    </td>
                    <td className="py-4 px-4 text-slate-600">
                      {fee.admissionFee}
                    </td>
                    <td className="py-4 px-4 font-bold text-prc-primary">
                      {fee.totalPackage}
                    </td>
                    <td className="py-4 px-4 font-bold text-emerald-600">
                      {fee.monthlyPlan}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fee Policies & Notes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4 text-xs sm:text-sm text-slate-600">
          <h3 className="font-bold text-base text-prc-navy flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-prc-primary" />
            <span>Official Institutional Fee Policies</span>
          </h3>
          <p>• {feePolicies.generalNote}</p>
          <p>• {feePolicies.refundPolicy}</p>
          <p>• {feePolicies.installmentNote}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-royal-gradient rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black">
            Looking for Scholarships & Financial Assistance?
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
            We provide up to 100% merit waivers and generous need-based tuition concessions.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/admissions/scholarships"
              className="bg-white text-prc-navy hover:bg-prc-light font-bold px-7 py-3 rounded-full text-sm shadow-md transition-all hover:scale-105"
            >
              Explore Scholarships
            </Link>
            <Link
              href="/apply"
              className="bg-white/20 hover:bg-white/30 text-white font-bold px-6 py-3 rounded-full text-sm backdrop-blur-md border border-white/30 transition-all hover:scale-105"
            >
              Apply Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
