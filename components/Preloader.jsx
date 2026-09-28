"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing Campus Portal...");

  useEffect(() => {
    const totalDuration = 6000; // 6 seconds
    const intervalTime = 40;
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

        // Dynamic status updates over 6 seconds
        if (nextVal < 25) {
          setStatusText("Initializing Pak Royal College Portal...");
        } else if (nextVal < 50) {
          setStatusText("Loading BS Degrees & Medical Programs...");
        } else if (nextVal < 75) {
          setStatusText("Verifying FBISE & GCUF Affiliations...");
        } else if (nextVal < 95) {
          setStatusText("Preparing AI Labs & Campus Experience...");
        } else {
          setStatusText("Welcome to Pak Royal College");
        }

        return nextVal;
      });
    }, intervalTime);

    // Fade out after 6 seconds
    const fadeTimer = setTimeout(() => {
      setFade(true);
      setTimeout(() => {
        setLoading(false);
      }, 700); // smooth fade transition
    }, totalDuration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(fadeTimer);
    };
  }, []);

  const handleSkip = () => {
    setFade(true);
    setTimeout(() => {
      setLoading(false);
    }, 400);
  };

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0B1F3A] text-white transition-opacity duration-700 ease-out overflow-hidden select-none ${
        fade ? "opacity-0 pointer-events-none scale-105" : "opacity-100 scale-100"
      }`}
      aria-hidden="true"
    >
      {/* Background Animated Rings & Radial Glow */}
      <div className="absolute w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full bg-blue-600/20 blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] rounded-full bg-indigo-500/15 blur-2xl pointer-events-none" />
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#31549a_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none" />

      {/* Skip Button (Top Right) */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 z-20 text-xs font-semibold text-slate-400 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 transition-all flex items-center gap-1.5"
      >
        <span>Skip</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>

      {/* Main Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-xl mx-auto">
        
        {/* 4X Massive Crest Logo with Luxury Glow */}
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 flex items-center justify-center mb-4 transition-transform duration-700">
          {/* Pulsing Concentric Outer Rings */}
          <div className="absolute inset-0 rounded-full border-2 border-blue-400/40 animate-ping opacity-20 pointer-events-none" />
          <div className="absolute -inset-4 rounded-full border border-blue-300/20 animate-pulse pointer-events-none" />
          
          {/* Logo 852x852 Square Pure Crest */}
          <Image
            src="/images/logo.png"
            alt="Pak Royal College Crest"
            width={320}
            height={320}
            priority
            className="object-contain w-full h-full drop-shadow-[0_15px_35px_rgba(0,0,0,0.7)] animate-in zoom-in-90 duration-700"
          />
        </div>

        {/* Brand Name (Tight Spacing Under Logo) */}
        <div className="space-y-1 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-extrabold uppercase tracking-widest text-blue-200 shadow-sm mb-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
            <span>ESTABLISHED 2024 • SHARAQPUR SHARIF</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-wider uppercase text-white leading-tight drop-shadow-md">
            PAK ROYAL COLLEGE
          </h1>

          <p className="text-xs sm:text-sm font-medium tracking-widest text-blue-300 uppercase">
            A Place Where Futures Begin.
          </p>
        </div>
        
        {/* Urdu Tagline */}
        <p className="urdu-font text-blue-200 text-lg sm:text-2xl tracking-wide mt-2 mb-6 drop-shadow">
          جہاں مستقبل کی بنیاد رکھی جاتی ہے
        </p>

        {/* 6-Second Luxury Progress Bar */}
        <div className="w-64 sm:w-80 space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-300">
            <span className="truncate max-w-[200px] text-left text-[11px] font-medium text-slate-300">{statusText}</span>
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
        <div className="flex items-center justify-center gap-2 text-[10.5px] text-slate-400 mt-5 font-semibold tracking-wider uppercase">
          <span>FBISE Affiliated</span>
          <span>•</span>
          <span>GCUF Degree Partner</span>
          <span>•</span>
          <span>HEC Aligned</span>
        </div>

      </div>
    </div>
  );
}
