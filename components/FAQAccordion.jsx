"use client";

import { useState, useMemo } from "react";
import { ChevronDown, Search, HelpCircle } from "lucide-react";
import { faqs, faqCategories } from "@/data/faq";

export default function FAQAccordion({ initialCategory = "All FAQs", showSearch = true }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory =
        selectedCategory === "All FAQs" || faq.category === selectedCategory;
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full space-y-6">
      {/* Category Pills & Search */}
      {showSearch && (
        <div className="space-y-4">
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search questions about admissions, fees, degrees..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-prc-primary focus:border-transparent text-sm shadow-sm"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {faqCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-prc-primary text-white shadow-md shadow-blue-500/20"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Accordion list */}
      <div className="space-y-3 pt-2">
        {filteredFaqs.length === 0 ? (
          <div className="p-8 text-center text-slate-500 bg-white rounded-2xl border border-slate-200">
            No questions matched your search criteria. Please contact our Admissions Office directly.
          </div>
        ) : (
          filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id || index}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-base text-prc-navy hover:bg-prc-light/40 transition-colors gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-prc-primary shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-prc-primary shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-5 sm:p-6 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <div className="pt-4">{faq.answer}</div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
