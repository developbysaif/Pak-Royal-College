"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 15;
      });
    }, 60);

    // Fade out and remove preloader
    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => {
        setLoading(false);
      }, 500); // fade duration
    }, 900);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0B1F3A] text-white transition-opacity duration-500 ease-out ${
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      {/* Ambient background glow */}
      <div className="absolute w-80 h-80 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-sm">
        
        {/* Animated Crest Container */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-6 animate-pulse">
          {/* Outer glowing pulsing ring */}
          <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-ping opacity-30" />
          
          <Image
            src="/images/logo-crest.png"
            alt="Pak Royal College Crest"
            fill
            priority
            className="object-contain drop-shadow-2xl"
          />
        </div>

        {/* Brand Name */}
        <h2 className="text-xl sm:text-2xl font-black tracking-wider uppercase text-white mb-1">
          PAK ROYAL COLLEGE
        </h2>
        
        {/* Urdu Tagline */}
        <p className="urdu-font text-blue-200 text-sm sm:text-base tracking-wide mb-6">
          جہاں مستقبل کی بنیاد رکھی جاتی ہے
        </p>

        {/* Progress Bar Container */}
        <div className="w-48 sm:w-56 h-1.5 bg-white/10 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-400 rounded-full transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Subtitle */}
        <span className="text-[11px] text-slate-400 font-medium tracking-wider uppercase mt-3">
          Loading Campus Experience...
        </span>

      </div>
    </div>
  );
}
