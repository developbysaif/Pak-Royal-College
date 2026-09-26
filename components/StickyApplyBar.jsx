"use client";

import Link from "next/link";
import { Sparkles, Download, PhoneCall, CheckCircle2, ShieldCheck } from "lucide-react";
import { collegeInfo } from "@/data/collegeInfo";

export default function StickyApplyBar({ title, type = "program", fee, duration }) {
  return (
    <>
      {/* Desktop Right Sidebar Card */}
      <aside className="hidden lg:block w-full sticky top-28">
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200 space-y-6">
          <div className="space-y-2">
            <span className="bg-blue-50 text-prc-primary font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              Admissions Open 2026
            </span>
            <h3 className="font-extrabold text-2xl text-prc-navy">
              Ready to Start?
            </h3>
            <p className="text-xs text-slate-500">
              Begin your academic journey at Pak Royal College today.
            </p>
          </div>

          <div className="space-y-3 text-xs bg-slate-50 p-4 rounded-2xl border border-slate-100">
            {duration && (
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Duration:</span>
                <span className="font-bold text-slate-800">{duration}</span>
              </div>
            )}
            {fee && (
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Tuition Fee:</span>
                <span className="font-bold text-prc-primary">{fee}</span>
              </div>
            )}
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Eligibility Check:</span>
              <span className="font-bold text-emerald-600">Available Online</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Scholarships:</span>
              <span className="font-bold text-emerald-600">Up to 100%</span>
            </div>
          </div>

          <div className="space-y-2.5">
            <Link
              href="/apply"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-prc-primary to-blue-600 hover:from-prc-navy hover:to-prc-primary text-white font-bold py-3.5 px-4 rounded-2xl text-sm shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Apply Online Now</span>
            </Link>

            <Link
              href="/admissions"
              className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-4 rounded-2xl text-xs transition-colors"
            >
              <Download className="w-4 h-4 text-prc-primary" />
              <span>Download Prospectus</span>
            </Link>

            <a
              href={`tel:${collegeInfo.phone}`}
              className="w-full flex items-center justify-center gap-2 text-xs font-semibold text-slate-600 hover:text-prc-primary py-2 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Admissions Helpline: {collegeInfo.phone}</span>
            </a>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Verified HEC & BISE Compliant Program</span>
          </div>
        </div>
      </aside>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 shadow-2xl flex items-center justify-between gap-3">
        <div className="truncate">
          <div className="text-xs font-extrabold text-prc-navy truncate">
            {title}
          </div>
          <div className="text-[11px] text-emerald-600 font-semibold">
            Admissions Open 2026
          </div>
        </div>

        <Link
          href="/apply"
          className="bg-prc-primary text-white font-bold text-xs px-5 py-2.5 rounded-xl shrink-0 shadow-md shadow-blue-500/30 flex items-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Apply Now</span>
        </Link>
      </div>
    </>
  );
}
