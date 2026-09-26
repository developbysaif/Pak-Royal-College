"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBanner from "@/components/PageHeroBanner";
import SectionHeading from "@/components/SectionHeading";
import NewsCard from "@/components/NewsCard";
import { newsArticles } from "@/data/news";

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Admissions", "Campus & Tech", "Industry Linkages", "Student Life"];

  const filteredArticles = useMemo(() => {
    return newsArticles.filter((a) => {
      const matchCat = selectedCategory === "All" || a.category === selectedCategory;
      const matchSearch =
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featured = newsArticles[0];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section with Full-Bleed Background Image */}
      <PageHeroBanner
        title="Latest News & Updates"
        badge="INSTITUTIONAL PRESS & ANNOUNCEMENTS"
        urdu="کالج کی تازہ ترین خبریں، اعلانات اور کامیابیاں"
        description="Stay informed about admission deadlines, tech lab inaugurations, academic research breakthroughs, and student achievements."
        bgImage="/images/hero_campus.jpg"
        breadcrumbs={[{ label: "News & Media", href: "/news" }]}
      />

      {/* Featured Article Banner */}
      {featured && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 relative h-72 sm:h-96 w-full bg-slate-100">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 left-4 bg-prc-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                Featured Story
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-prc-primary" />
                  <span>{featured.date}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-prc-primary" />
                  <span>{featured.readTime}</span>
                </div>
              </div>

              <h2 className="font-extrabold text-xl sm:text-2xl text-prc-navy leading-snug">
                {featured.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {featured.excerpt}
              </p>

              <div className="pt-2">
                <Link
                  href={`/news/${featured.slug}`}
                  className="inline-flex items-center gap-2 bg-prc-primary hover:bg-prc-navy text-white font-bold px-6 py-2.5 rounded-full text-xs transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-4">
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search news by title or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-prc-primary text-sm"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-prc-primary text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
