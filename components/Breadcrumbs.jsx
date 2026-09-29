"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) return null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://pakroyalcollege.edu.pk"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": item.href ? `https://pakroyalcollege.edu.pk${item.href}` : undefined
      }))
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="py-2.5">
        <ol className="inline-flex items-center flex-wrap gap-2 text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-slate-200 shadow-md">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            >
              <Home className="w-3.5 h-3.5 text-blue-300" />
              <span>Home</span>
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                {isLast || !item.href ? (
                  <span className="text-white font-bold truncate max-w-[200px] sm:max-w-none drop-shadow" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-slate-200 hover:text-white transition-colors truncate max-w-[150px] sm:max-w-none"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
