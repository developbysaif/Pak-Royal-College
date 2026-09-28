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
      <div className="absolute w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] rounded-full bg-blue-600/25 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-xl mx-auto">
        
        {/* Animated Grand Crest Container */}
        <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 mb-2 flex items-center justify-center transition-transform duration-700">
          {/* Outer glowing pulsing ring */}
          <div className="absolute inset-2 rounded-full border-2 border-blue-400/30 animate-ping opacity-25 pointer-events-none" />
          
          <Image
            src="/images/logo-crest.png"
            alt="Pak Royal College Crest"
            fill
            priority
            sizes="(max-width: 768px) 288px, 320px"
            className="object-contain drop-shadow-[0_12px_35px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* Brand Name (Closely positioned under logo) */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wider uppercase text-white mb-1 leading-tight text-center">
          PAK ROYAL COLLEGE
        </h2>
        
        {/* Urdu Tagline */}
        <p className="urdu-font text-blue-200 text-base sm:text-lg md:text-xl tracking-wide mb-4 text-center">
          جہاں مستقبل کی بنیاد رکھی جاتی ہے
        </p>

        {/* Progress Bar Container */}
        <div className="w-56 sm:w-72 h-2 bg-white/10 rounded-full overflow-hidden relative shadow-inner mx-auto">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-400 rounded-full transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Subtitle */}
        <span className="text-[11px] sm:text-xs text-slate-400 font-semibold tracking-widest uppercase mt-2.5 text-center">
          Loading Campus Experience...
        </span>

      </div>
    </div>
  );
}
