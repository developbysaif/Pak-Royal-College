"use client";

import { useState } from "react";
import { ChevronDown, BookOpen, Clock, Tag } from "lucide-react";

export default function CurriculumAccordion({ curriculum = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!curriculum || curriculum.length === 0) return null;

  return (
    <div className="space-y-4">
      {curriculum.map((sem, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={idx}
            className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-200"
          >
            {/* Accordion Header */}
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              className="w-full flex items-center justify-between p-5 text-left font-bold text-base md:text-lg text-prc-navy bg-slate-50/50 hover:bg-prc-light/40 transition-colors"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-prc-primary text-white flex items-center justify-center text-xs font-bold">
                  {idx + 1}
                </span>
                <span>{sem.semester}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-slate-500 hidden sm:inline">
                  {sem.courses?.length || 0} Courses
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-prc-primary transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            {/* Accordion Body */}
            {isOpen && (
              <div className="p-4 sm:p-6 border-t border-slate-200">
                {/* Desktop Table View */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full text-left text-sm text-slate-700">
                    <thead className="bg-slate-100 text-xs uppercase font-bold text-prc-navy">
                      <tr>
                        <th className="py-3 px-4 rounded-l-lg">Course Code</th>
                        <th className="py-3 px-4">Course Title</th>
                        <th className="py-3 px-4">Credit Hours</th>
                        <th className="py-3 px-4 rounded-r-lg">Course Type</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium">
                      {sem.courses?.map((course, cIdx) => (
                        <tr key={cIdx} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-3 px-4 font-mono font-bold text-prc-primary">
                            {course.code}
                          </td>
                          <td className="py-3 px-4 text-slate-900 font-semibold">
                            {course.title}
                          </td>
                          <td className="py-3 px-4 text-slate-600">
                            {course.credits}
                          </td>
                          <td className="py-3 px-4">
                            <span className="bg-blue-50 text-prc-primary text-xs font-bold px-2.5 py-1 rounded-md">
                              {course.type}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards View */}
                <div className="md:hidden space-y-3">
                  {sem.courses?.map((course, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-prc-primary bg-white px-2 py-0.5 rounded border border-slate-200">
                          {course.code}
                        </span>
                        <span className="bg-blue-100 text-prc-primary font-bold px-2 py-0.5 rounded">
                          {course.credits}
                        </span>
                      </div>
                      <div className="font-bold text-sm text-slate-900">
                        {course.title}
                      </div>
                      <div className="text-slate-500 font-medium flex items-center gap-1">
                        <Tag className="w-3 h-3 text-slate-400" />
                        <span>{course.type}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
