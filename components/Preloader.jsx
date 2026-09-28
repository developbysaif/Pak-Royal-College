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
      <div className="absolute w-96 h-96 sm:w-[500px] sm:h-[500px] rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-lg">
        
        {/* Animated Grand Crest Container */}
        <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 mb-6 transition-transform duration-700 hover:scale-105">
          {/* Outer glowing pulsing ring */}
          <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-ping opacity-25" />
          
          <Image
            src="/images/logo-crest.png"
            alt="Pak Royal College Crest"
            fill
            priority
            sizes="(max-width: 768px) 224px, 256px"
            className="object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* Brand Name */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wider uppercase text-white mb-1.5">
          PAK ROYAL COLLEGE
        </h2>
        
        {/* Urdu Tagline */}
        <p className="urdu-font text-blue-200 text-base sm:text-lg md:text-xl tracking-wide mb-6">
          جہاں مستقبل کی بنیاد رکھی جاتی ہے
        </p>

        {/* Progress Bar Container */}
        <div className="w-56 sm:w-72 h-2 bg-white/10 rounded-full overflow-hidden relative shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-400 rounded-full transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Subtitle */}
        <span className="text-xs text-slate-400 font-semibold tracking-widest uppercase mt-3.5">
          Loading Campus Experience...
        </span>

      </div>
    </div>
  );
}
