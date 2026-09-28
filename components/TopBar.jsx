"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  GraduationCap,
  Sparkles,
  MapPin,
  ExternalLink,
  Star,
  MessageCircle,
  BellRing
} from "lucide-react";
import { collegeInfo } from "@/data/collegeInfo";

export default function TopBar() {
  return (
    <div className="bg-prc-dark text-white/90 text-xs py-1.5 px-4 border-b border-white/10 hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
        
        {/* Left Side: Live Admissions Announcement & Urdu Motto */}
        <div className="flex items-center space-x-3 shrink-0">
          <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-2.5 py-0.5 rounded-full text-[10.5px] shadow-sm animate-pulse">
            <Sparkles className="w-3 h-3" />
            {collegeInfo.admissionsSession}
          </span>

          <span className="text-white/30">|</span>

          <span className="urdu-font text-blue-200 text-sm tracking-wide">
            {collegeInfo.taglineUrdu}
          </span>
        </div>

        {/* Right Side: Google Review Badge + Location + Phone + WhatsApp + Student Portal */}
        <div className="flex items-center space-x-3.5 text-[11px]">
          
          {/* Google Rating Badge */}
          <a
            href={collegeInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-amber-300 hover:text-amber-200 transition-colors font-semibold"
          >
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>4.9★ Google Verified</span>
          </a>

          <span className="text-white/30">•</span>

          {/* Location */}
          <a
            href={collegeInfo.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-red-400" />
            <span>Sharaqpur Campus</span>
            <ExternalLink className="w-2.5 h-2.5 opacity-60" />
          </a>

          <span className="text-white/30">•</span>

          {/* Hotline */}
          <a
            href={`tel:${collegeInfo.phone}`}
            className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-blue-400" />
            <span>{collegeInfo.phone}</span>
          </a>

          <span className="text-white/30">•</span>

          {/* WhatsApp Direct */}
          <a
            href={collegeInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>WhatsApp</span>
          </a>

          <span className="text-white/30">•</span>

          {/* Student Portal */}
          <Link
            href="/admissions"
            className="flex items-center gap-1 font-semibold text-blue-300 hover:text-blue-100 transition-colors bg-white/10 px-2 py-0.5 rounded-full"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Student Portal</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
