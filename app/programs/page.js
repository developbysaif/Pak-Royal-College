"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Sparkles, Filter, BookOpen, Clock, GraduationCap } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBanner from "@/components/PageHeroBanner";
import SectionHeading from "@/components/SectionHeading";
import ProgramCard from "@/components/ProgramCard";
import { programs } from "@/data/programs";

export default function ProgramsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPrograms = useMemo(() => {
    return programs.filter((p) => {
      const matchCat = selectedCategory === "all" || p.category === selectedCategory;
      const matchSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.degree.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section with Full-Bleed Background Image */}
      <PageHeroBanner
        title="Explore Our Academic Programs"
        badge="ACADEMIC OFFERINGS"
        urdu="ڈگری، ڈپلومہ اور پیشہ ورانہ تعلیمی شعبہ جات"
        description="From four-year undergraduate BS degrees to intensive professional diplomas and cloud computing bootcamps, choose the program tailored to launch your future."
        bgImage="/images/course_coding.jpg"
        breadcrumbs={[{ label: "Programs", href: "/programs" }]}
      />

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 space-y-6">
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by degree title, department or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-prc-primary text-sm shadow-inner"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "All Programs" },
              { id: "intermediate", label: "Intermediate (FSc / ICS / MLT)" },
              { id: "bs", label: "BS Degrees (4 Years)" },
              { id: "it-skills", label: "IT Skills & Bootcamps" },
              { id: "diploma", label: "1-Year Diplomas" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === tab.id
                    ? "bg-prc-primary text-white shadow-md scale-105"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Program Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="text-sm font-bold text-prc-navy">
            Showing <span className="text-prc-primary">{filteredPrograms.length}</span> Academic Programs
          </div>
        </div>

        {filteredPrograms.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 text-slate-500">
            No programs matched your search. Please check your query or contact Admissions.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-royal-gradient rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black">
            Need Guidance on Choosing the Right Degree?
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
            Our academic counselors are here to assess your intermediate background and guide your career pathway.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-prc-navy hover:bg-prc-light font-bold px-7 py-3 rounded-full text-sm shadow-md transition-all hover:scale-105"
            >
              Speak with an Advisor
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
