"use client";

import { useState } from "react";
import { ChevronDown, CheckCircle2, Terminal } from "lucide-react";

export default function CourseModuleAccordion({ modules = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!modules || modules.length === 0) return null;

  return (
    <div className="space-y-4">
      {modules.map((mod, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={idx}
            className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              className="w-full flex items-center justify-between p-5 text-left font-bold text-base md:text-lg text-prc-navy bg-slate-50/60 hover:bg-prc-light/40 transition-colors"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-prc-primary text-white flex items-center justify-center text-xs font-bold">
                  {mod.number}
                </span>
                <span>{mod.title}</span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-prc-primary transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="p-5 sm:p-6 border-t border-slate-200 space-y-4 text-sm">
                <p className="text-slate-600 leading-relaxed">
                  {mod.description}
                </p>

                {mod.topics && mod.topics.length > 0 && (
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-prc-primary mb-2">
                      Key Topics Covered:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {mod.topics.map((top, tIdx) => (
                        <div key={tIdx} className="flex items-center gap-2 text-slate-700 text-xs">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{top}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {mod.practicalTask && (
                  <div className="p-3.5 bg-blue-50/70 border border-blue-100 rounded-xl flex items-start gap-2.5 text-xs text-prc-navy">
                    <Terminal className="w-4 h-4 text-prc-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Practical Hands-on Task: </span>
                      <span>{mod.practicalTask}</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
