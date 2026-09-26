"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function NewsCard({ article }) {
  if (!article) return null;

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-prc-primary/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5">
      <div>
        {/* Thumbnail */}
        <div className="relative h-48 w-full overflow-hidden bg-slate-100">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-prc-primary text-white font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              {article.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-2.5">
          <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-prc-primary" />
              <span>{article.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-prc-primary" />
              <span>{article.readTime}</span>
            </div>
          </div>

          <h3 className="font-extrabold text-lg text-prc-navy group-hover:text-prc-primary transition-colors line-clamp-2 leading-snug">
            {article.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Read More Link */}
      <div className="p-6 pt-0 border-t border-slate-100">
        <Link
          href={`/news/${article.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-prc-primary hover:text-prc-navy transition-colors"
        >
          <span>Read Full Story</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
