"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, GraduationCap, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function ProgramCard({ program, featured = false }) {
  if (!program) return null;

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-prc-primary/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5">
      <div>
        {/* Card Image Banner */}
        <div className="relative h-52 w-full overflow-hidden bg-slate-100">
          <Image
            src={program.image}
            alt={program.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-prc-dark/80 via-transparent to-transparent opacity-60" />

          {/* Program Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="bg-prc-navy/90 backdrop-blur-md text-white font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
              {program.categoryLabel || program.category.toUpperCase()}
            </span>
          </div>

          {/* Degree Tag */}
          <div className="absolute bottom-3 left-3 right-3 text-white">
            <span className="text-xs font-semibold text-blue-200 block truncate">
              {program.degree}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-3">
          <h3 className="font-extrabold text-xl text-prc-navy group-hover:text-prc-primary transition-colors line-clamp-1">
            {program.title}
          </h3>

          <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {program.shortDescription}
          </p>

          {/* Quick Metrics */}
          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-lg">
              <Clock className="w-3.5 h-3.5 text-prc-primary" />
              <span>{program.duration}</span>
            </div>
            <div className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-lg">
              <GraduationCap className="w-3.5 h-3.5 text-prc-primary" />
              <span>{program.studyMode.split("(")[0]}</span>
            </div>
          </div>

          {/* Eligibility Note */}
          <div className="pt-1 text-xs text-slate-500 border-t border-slate-100 line-clamp-1">
            <span className="font-semibold text-slate-700">Eligibility: </span>
            {program.eligibility}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-slate-100">
        <Link
          href={`/programs/${program.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-prc-primary hover:text-prc-navy transition-colors"
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>

        <Link
          href="/apply"
          className="bg-prc-light hover:bg-prc-primary text-prc-primary hover:text-white font-bold text-xs px-3.5 py-2 rounded-xl transition-all"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
}
