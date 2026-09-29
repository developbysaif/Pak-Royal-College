"use client";

import { Award, GraduationCap, Building2, ShieldCheck, CheckCircle2, Star, Sparkles } from "lucide-react";
import { collegeInfo } from "@/data/collegeInfo";

const recognitions = [
  {
    name: "Federal Board (FBISE)",
    subtitle: "Affiliated Intermediate & Medical Tech",
    badge: "Official FBISE Code",
    icon: Award,
    color: "from-amber-500 to-amber-700",
    bgLight: "bg-amber-50 text-amber-700 border-amber-200"
  },
  {
    name: "Govt College University Faisalabad (GCUF)",
    subtitle: "Degree Programs & Academic Standards",
    badge: "Higher Ed Partner",
    icon: GraduationCap,
    color: "from-blue-600 to-indigo-800",
    bgLight: "bg-blue-50 text-blue-800 border-blue-200"
  },
  {
    name: "University of Okara",
    subtitle: "Affiliated Academic Degree Framework",
    badge: "Recognized Higher Ed",
    icon: Building2,
    color: "from-emerald-600 to-teal-800",
    bgLight: "bg-emerald-50 text-emerald-800 border-emerald-200"
  },
  {
    name: "Higher Education Commission (HEC)",
    subtitle: "National Quality Curriculum Alignment",
    badge: "Coming Soon",
    isComingSoon: true,
    icon: ShieldCheck,
    color: "from-purple-600 to-purple-800",
    bgLight: "bg-amber-50 text-amber-700 border-amber-300 font-bold"
  },
  {
    name: "Punjab Board of Technical Education (PBTE)",
    subtitle: "2-Year Diplomas & IT Certifications",
    badge: "Coming Soon",
    isComingSoon: true,
    icon: CheckCircle2,
    color: "from-cyan-600 to-blue-800",
    bgLight: "bg-amber-50 text-amber-700 border-amber-300 font-bold"
  }
];

export default function AffiliationsBanner() {
  return (
    <section className="bg-slate-50 border-y border-slate-200/80 py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Google Rating Badge */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prc-primary/10 text-prc-primary text-xs font-bold uppercase tracking-wider mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Accreditations & Recognitions</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-prc-navy">
              Officially Affiliated & Recognized Education
            </h3>
          </div>

          {/* Google Verified Review Badge */}
          <a
            href={collegeInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all hover:scale-105 group"
          >
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
              <Star className="w-5 h-5 fill-amber-400 text-amber-500" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                <span className="font-extrabold text-sm text-slate-900">4.9</span>
                <div className="flex text-amber-400 text-xs">★★★★★</div>
              </div>
              <p className="text-[11px] text-slate-500 group-hover:text-prc-primary transition-colors font-medium">
                Google Verified Profile ({collegeInfo.googleReviewCount} Reviews)
              </p>
            </div>
          </a>
        </div>

        {/* Affiliation Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {recognitions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-prc-light text-prc-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border inline-flex items-center gap-1.5 ${item.bgLight}`}>
                      {item.isComingSoon && (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                      )}
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 group-hover:text-prc-primary transition-colors line-clamp-2">
                    {item.name}
                  </h4>
                </div>

                <p className="text-[11px] text-slate-500 mt-2 font-medium">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
