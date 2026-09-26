"use client";

import Link from "next/link";
import {
  BookOpen,
  Sparkles,
  GraduationCap,
  Download,
  PhoneCall,
  ArrowRight
} from "lucide-react";

const actions = [
  {
    title: "Explore Programs",
    description: "BS Degrees & Professional Diplomas",
    icon: BookOpen,
    href: "/programs",
    color: "from-blue-600 to-indigo-700"
  },
  {
    title: "Apply Now",
    description: "Fall 2026 Online Application Form",
    icon: Sparkles,
    href: "/apply",
    color: "from-indigo-600 to-blue-800"
  },
  {
    title: "Admissions 2026",
    description: "Eligibility, Criteria & Deadlines",
    icon: GraduationCap,
    href: "/admissions",
    color: "from-blue-700 to-cyan-700"
  },
  {
    title: "Download Prospectus",
    description: "Institutional Academic Handbook",
    icon: Download,
    href: "/admissions/requirements",
    color: "from-slate-700 to-slate-900"
  },
  {
    title: "Contact Admissions",
    description: "Speak with Academic Counselors",
    icon: PhoneCall,
    href: "/contact",
    color: "from-blue-800 to-indigo-900"
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
              className="group bg-white rounded-2xl p-5 shadow-lg shadow-slate-200/80 border border-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-prc-primary flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-prc-light text-prc-primary flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:bg-prc-primary group-hover:text-white shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-800 text-base group-hover:text-prc-primary transition-colors">
                  {act.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {act.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-prc-primary group-hover:translate-x-1 transition-transform">
                <span>Explore</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
