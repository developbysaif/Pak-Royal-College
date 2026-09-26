"use client";

import { useEffect, useState, useRef } from "react";
import { collegeInfo } from "@/data/collegeInfo";
import { Award, BookOpen, Users, Cpu, TrendingUp } from "lucide-react";

const icons = [BookOpen, Award, Users, Cpu, TrendingUp];

export default function StatsCounter() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-royal-dark-gradient text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#31549a_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="px-3.5 py-1 rounded-full bg-white/10 text-blue-200 border border-white/20 text-xs font-bold uppercase tracking-wider">
            Verified Institutional Benchmarks
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Excellence in Numbers
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Real academic metrics reflecting Pak Royal College's commitment to quality higher education and student empowerment.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {collegeInfo.stats.map((stat, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                  {hasAnimated ? stat.value : "0"}
                  <span className="text-blue-400">{stat.suffix}</span>
                </div>
                <div className="font-bold text-sm text-blue-200">
                  {stat.label}
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
