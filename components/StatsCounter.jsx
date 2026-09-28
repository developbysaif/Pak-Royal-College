"use client";

import { useEffect, useState, useRef } from "react";
import { collegeInfo } from "@/data/collegeInfo";
import { Award, BookOpen, Users, Cpu, Star, Gift, ShieldCheck, Sparkles } from "lucide-react";

const statIcons = [BookOpen, Users, GraduationCapIcon, Cpu, Star, Gift];

function GraduationCapIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function AnimatedNumber({ value, isAnimated }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isAnimated) return;

    let start = 0;
    const end = parseFloat(value);
    const duration = 1800; // ms
    const stepTime = 25;
    const totalSteps = duration / stepTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayValue(end);
        clearInterval(timer);
      } else {
        setDisplayValue(value % 1 !== 0 ? parseFloat(start.toFixed(1)) : Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isAnimated, value]);

  return <span>{isAnimated ? displayValue : 0}</span>;
}

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
      { threshold: 0.15 }
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
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-blue-200 border border-white/20 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-300" />
            <span>Verified Institutional Benchmarks</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Excellence in Numbers
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Real academic metrics reflecting Pak Royal College's commitment to quality higher education and student empowerment.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {collegeInfo.stats.map((stat, index) => {
            const Icon = statIcons[index % statIcons.length];
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 text-center hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-11 h-11 mx-auto mb-3 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center group-hover:scale-110 transition-transform border border-blue-400/20">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white mb-1">
                  <AnimatedNumber value={stat.value} isAnimated={hasAnimated} />
                  <span className="text-blue-400">{stat.suffix}</span>
                </div>
                <div className="font-bold text-xs sm:text-sm text-blue-100 line-clamp-1">
                  {stat.label}
                </div>
                <p className="text-[10.5px] text-slate-400 mt-1 line-clamp-2">
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
