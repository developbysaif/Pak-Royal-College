"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Mail, GraduationCap, Award, Users, BookOpen } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBanner from "@/components/PageHeroBanner";
import SectionHeading from "@/components/SectionHeading";
import FacultyCard from "@/components/FacultyCard";
import { faculty, facultyDepartments } from "@/data/faculty";

export default function FacultyDirectoryPage() {
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaculty = useMemo(() => {
    return faculty.filter((f) => {
      const matchDept =
        selectedDept === "All Departments" || f.department === selectedDept;
      const matchSearch =
        f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.specialization.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchDept && matchSearch;
    });
  }, [selectedDept, searchQuery]);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section with Full-Bleed Background Image */}
      <PageHeroBanner
        title="Faculty Directory"
        badge="ACADEMIC SCHOLARS & RESEARCHERS"
        urdu="اساتذہ کرام اور محققین کا باوقار پینل"
        description="Meet our distinguished professors, PhD researchers, and industry veterans committed to delivering inspiring classroom lectures and laboratory mentorship."
        bgImage="/images/hero_graduation.jpg"
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Faculty", href: "/about/faculty" }
        ]}
      />

      {/* Directory Search & Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search faculty by name, department, or specialization (e.g. AI, Software, Finance)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-prc-primary text-sm shadow-inner"
            />
          </div>

          {/* Department Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {facultyDepartments.map((dept, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedDept === dept
                    ? "bg-prc-primary text-white shadow-md shadow-blue-500/25 scale-105"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="text-sm font-bold text-prc-navy">
            Showing <span className="text-prc-primary">{filteredFaculty.length}</span> Faculty Members
          </div>
        </div>

        {filteredFaculty.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 text-slate-500">
            No faculty members matched your filter criteria. Try resetting search filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredFaculty.map((member) => (
              <FacultyCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-royal-gradient rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black">
            Learn Under World-Class Faculty Mentorship
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
            Submit your application for Admissions 2026 and begin learning with leaders in computing, business and science.
          </p>
          <div className="pt-2">
            <Link
              href="/apply"
              className="bg-white text-prc-navy hover:bg-prc-light font-bold px-7 py-3 rounded-full text-sm inline-block shadow-md transition-all hover:scale-105"
            >
              Apply Online for Admissions 2026
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
