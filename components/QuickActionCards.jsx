"use client";

import Link from "next/link";
import {
  BookOpen,
  Sparkles,
  GraduationCap,
  Download,
  PhoneCall,
  ArrowRight,
  Stethoscope,
  Gift,
  DollarSign,
  Award
} from "lucide-react";

const actions = [
  {
    title: "BS Degrees (4 Yrs)",
    description: "CS, AI, Software Eng & BBA Tracks",
    icon: GraduationCap,
    badge: "HEC Aligned",
    href: "/programs/bs",
    color: "bg-blue-50 text-blue-700"
  },
  {
    title: "Medical Technologies",
    description: "F.Sc MLT, OTT, RIT & Nursing",
    icon: Stethoscope,
    badge: "FBISE Recognized",
    href: "/programs/diploma",
    color: "bg-emerald-50 text-emerald-700"
  },
  {
    title: "Online Admission 2026",
    description: "Fall Batch Application Form",
    icon: Sparkles,
    badge: "Open Now",
    href: "/apply",
    color: "bg-indigo-50 text-indigo-700"
  },
  {
    title: "Merit Scholarships",
    description: "Up to 100% Tuition Fee Waivers",
    icon: Gift,
    badge: "Financial Aid",
    href: "/admissions/scholarships",
    color: "bg-amber-50 text-amber-700"
  },
  {
    title: "Fee Structure",
    description: "Transparent Semester Breakdown",
    icon: DollarSign,
    badge: "Challan & Aid",
    href: "/admissions/fees",
    color: "bg-cyan-50 text-cyan-700"
  }
];

export default function QuickActionCards() {
  return (
    <div className="relative -mt-10 sm:-mt-14 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {actions.map((act, index) => {
          const Icon = act.icon;
          return (
            <Link
              key={index}
              href={act.href}
              className="group bg-white rounded-2xl p-5 shadow-lg shadow-slate-200/80 border border-slate-200/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-prc-primary flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-prc-primary group-hover:text-white shadow-sm ${act.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {act.badge}
                  </span>
                </div>

                <h3 className="font-extrabold text-slate-800 text-base group-hover:text-prc-primary transition-colors">
                  {act.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {act.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-prc-primary group-hover:translate-x-1 transition-transform">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
