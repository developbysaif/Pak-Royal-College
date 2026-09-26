"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Layers, ArrowRight, Sparkles } from "lucide-react";

export default function CourseCard({ course }) {
  if (!course) return null;

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-prc-primary/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5">
      <div>
        {/* Course Image */}
        <div className="relative h-48 w-full overflow-hidden bg-slate-100">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-prc-primary text-white font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              {course.category}
            </span>
          </div>
        </div>

        {/* Course Details */}
        <div className="p-6 space-y-3">
          <div className="flex items-center gap-3 text-xs text-slate-500 font-semibold">
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-prc-primary" />
              <span>{course.duration}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-prc-primary" />
              <span>{course.level}</span>
            </div>
          </div>

          <h3 className="font-extrabold text-lg text-prc-navy group-hover:text-prc-primary transition-colors line-clamp-1">
            {course.title}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {course.shortDescription}
          </p>

          <div className="pt-2 text-xs font-bold text-prc-navy">
            Fee: <span className="text-prc-primary">{course.fee?.amount || "Contact Admissions"}</span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-slate-100">
        <Link
          href={`/courses/${course.slug}`}
          className="text-xs font-bold text-prc-primary hover:text-prc-navy inline-flex items-center gap-1"
        >
          <span>View Course</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>

        <Link
          href="/apply"
          className="bg-prc-navy hover:bg-prc-primary text-white font-bold text-xs px-3.5 py-1.5 rounded-xl transition-colors"
        >
          Enroll Now
        </Link>
      </div>
    </div>
  );
}
