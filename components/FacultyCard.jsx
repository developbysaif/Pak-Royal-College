"use client";

import Image from "next/image";
import { Mail, GraduationCap, Award } from "lucide-react";

export default function FacultyCard({ member }) {
  if (!member) return null;

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-prc-primary/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      <div>
        {/* Faculty Portrait */}
        <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-prc-dark/80 via-transparent to-transparent opacity-40" />

          {/* Department Badge */}
          <div className="absolute bottom-3 left-3 right-3">
            <span className="bg-prc-navy/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider block truncate text-center">
              {member.department}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-6 space-y-2">
          <h3 className="font-extrabold text-lg text-prc-navy group-hover:text-prc-primary transition-colors">
            {member.name}
          </h3>
          <p className="text-xs font-bold text-prc-accent">
            {member.designation}
          </p>
          <div className="flex items-start gap-1.5 text-xs text-slate-600 pt-1">
            <GraduationCap className="w-4 h-4 text-prc-primary shrink-0 mt-0.5" />
            <span className="line-clamp-2">{member.qualification}</span>
          </div>
          <p className="text-xs text-slate-500 line-clamp-2 pt-1 leading-relaxed">
            {member.bio}
          </p>
        </div>
      </div>

      {/* Footer / Email */}
      <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <a
          href={`mailto:${member.email}`}
          className="flex items-center gap-1.5 text-prc-primary hover:text-prc-navy font-semibold transition-colors"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>Contact Faculty</span>
        </a>
        <span className="text-[11px] text-slate-400">{member.experience.split(" ")[0]} Experience</span>
      </div>
    </div>
  );
}
