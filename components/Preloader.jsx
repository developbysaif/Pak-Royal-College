"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing Campus Portal...");

  useEffect(() => {
    const totalDuration = 4000; // 4 seconds
    const intervalTime = 30;
    const totalSteps = totalDuration / intervalTime;
    const stepIncrement = 100 / totalSteps;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const nextVal = prev + stepIncrement;
        if (nextVal >= 100) {
          clearInterval(progressInterval);
          setStatusText("Welcome to Pak Royal College");
          return 100;
        }

        // Dynamic status updates over 4 seconds
        if (nextVal < 30) {
          setStatusText("Initializing Pak Royal College Portal...");
        } else if (nextVal < 60) {
          setStatusText("Loading Academic Programs & Labs...");
        } else if (nextVal < 90) {
          setStatusText("Verifying FBISE & GCUF Affiliations...");
        } else {
          setStatusText("Welcome to Pak Royal College");
        }

        return nextVal;
      });
    }, intervalTime);

    // Fade out after 4 seconds
    const fadeTimer = setTimeout(() => {
      setFade(true);
      setTimeout(() => {
        setLoading(false);
      }, 600); // smooth fade transition
    }, totalDuration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(fadeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0B1F3A] text-white transition-opacity duration-600 ease-out overflow-hidden select-none px-4 ${
        fade ? "opacity-0 pointer-events-none scale-105" : "opacity-100 scale-100"
      }`}
      aria-hidden="true"
    >
      {/* Background Animated Rings & Radial Glow */}
      <div className="absolute w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] rounded-full bg-blue-600/20 blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute w-[250px] h-[250px] sm:w-[380px] sm:h-[380px] rounded-full bg-indigo-500/15 blur-2xl pointer-events-none" />
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#31549a_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none" />

      {/* Main Centered Content with Balanced Spacing */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-lg mx-auto py-6">
        
        {/* Crest Logo with Balanced Size and Nice Margins */}
        <div className="relative w-32 h-32 sm:w-44 sm:h-44 md:w-48 md:h-48 flex items-center justify-center mb-5 sm:mb-6 transition-transform duration-500">
          {/* Pulsing Concentric Outer Rings */}
          <div className="absolute inset-0 rounded-full border-2 border-blue-400/40 animate-ping opacity-20 pointer-events-none" />
          <div className="absolute -inset-3 rounded-full border border-blue-300/20 animate-pulse pointer-events-none" />
          
          {/* Logo Crest Image */}
          <Image
            src="/images/logo.png"
            alt="Pak Royal College Crest"
            width={200}
            height={200}
            priority
            className="object-contain w-full h-full drop-shadow-[0_12px_30px_rgba(0,0,0,0.6)] animate-in zoom-in-90 duration-500"
          />
        </div>

        {/* Brand Name */}
        <div className="space-y-1.5 text-center mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 border border-white/20 text-[10.5px] font-extrabold uppercase tracking-widest text-blue-200 shadow-sm mb-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
            <span>ESTABLISHED 2024 • SHARAQPUR SHARIF</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wider uppercase text-white leading-tight drop-shadow-md">
            PAK ROYAL COLLEGE
          </h1>

          <p className="text-xs sm:text-sm font-medium tracking-widest text-blue-300 uppercase">
            A Place Where Futures Begin.
          </p>
        </div>
        
        {/* Urdu Tagline */}
        <p className="urdu-font text-blue-200 text-lg sm:text-2xl tracking-wide mb-6 drop-shadow">
          جہاں مستقبل کی بنیاد رکھی جاتی ہے
        </p>

        {/* 4-Second Luxury Progress Bar */}
        <div className="w-60 sm:w-72 space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-300">
            <span className="truncate max-w-[190px] text-left text-[11px] font-medium text-slate-300">{statusText}</span>
            <span className="text-blue-400 font-mono">{Math.floor(progress)}%</span>
          </div>

          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden relative shadow-inner p-0.5 border border-white/10">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 rounded-full transition-all duration-75 ease-out shadow-lg"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>

        {/* Affiliations Badge */}
        <div className="flex items-center justify-center gap-2 text-[10.5px] text-slate-400 mt-6 font-semibold tracking-wider uppercase">
          <span>FBISE Affiliated</span>
          <span>•</span>
          <span>GCUF Partner</span>
          <span>•</span>
          <span>HEC Aligned</span>
        </div>

      </div>
    </div>
  );
}
