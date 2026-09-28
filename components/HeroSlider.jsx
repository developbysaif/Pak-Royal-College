"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Calendar,
  Play,
  Pause,
  MapPin
} from "lucide-react";
import { collegeInfo } from "@/data/collegeInfo";

const slides = [
  {
    id: 1,
    slideNum: "01",
    eyebrow: "PAK ROYAL COLLEGE",
    title: "Where Excellence Meets Opportunity",
    urdu: "جہاں مستقبل کی بنیاد رکھی جاتی ہے",
    description:
      "Discover an environment designed to help students learn, grow and prepare for the future.",
    image: "/images/hero_campus.jpg",
    alt: "Pak Royal College modern campus with students in Sharaqpur",
    location: "Main Campus, Sharaqpur Sharif",
    primaryCta: { label: "Apply Now", href: "/apply" },
    secondaryCta: { label: "Explore Programs", href: "/programs" }
  },
  {
    id: 2,
    slideNum: "02",
    eyebrow: "INNOVATION & TECHNOLOGY",
    title: "Learn. Innovate. Build the Future.",
    urdu: "جدید ٹیکنالوجی اور علم کی نئی راہیں",
    description:
      "Develop practical knowledge and modern skills for a technology-driven world.",
    image: "/images/hero_ai_lab.jpg",
    alt: "Pakistani university computer science and AI students in modern laboratory",
    location: "Advanced Computing & AI Lab",
    primaryCta: { label: "Explore Programs", href: "/programs" },
    secondaryCta: { label: "View Courses", href: "/courses" }
  },
  {
    id: 3,
    slideNum: "03",
    eyebrow: "CAMPUS LIFE",
    title: "More Than Education",
    urdu: "روشن ماحول، دوستی اور باوقار تعلیمی تجربہ",
    description:
      "Experience a campus environment where learning, friendship and personal growth come together.",
    image: "/images/hero_graduation.jpg",
    alt: "Pak Royal College students celebrating graduation and campus achievements",
    location: "Student Commons & Convocation",
    primaryCta: { label: "Explore Campus", href: "/campus-life" },
    secondaryCta: { label: "Student Life", href: "/campus-life/student-life" }
  },
  {
    id: 4,
    slideNum: "04",
    eyebrow: "YOUR FUTURE STARTS HERE",
    title: "Build Skills. Create Your Future.",
    urdu: "باوقار پیشہ ورانہ مہارتیں اور روشن مستقبل",
    description:
      "Gain knowledge, practical skills and confidence for the next chapter of your journey.",
    image: "/images/hero_careers.jpg",
    alt: "Diverse group of Pakistani students in modern professional academic environment discussing future projects",
    location: "Career Incubation & Research Center",
    primaryCta: { label: "Start Your Journey", href: "/apply" },
    secondaryCta: { label: "Explore Programs", href: "/programs" }
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  return (
    <div
      className="relative w-full min-h-[82vh] sm:min-h-[78vh] md:min-h-[80vh] flex items-center bg-prc-dark overflow-hidden -mt-[58px] md:-mt-[88px] pt-[58px] md:pt-[88px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Pak Royal College Hero Image Slider"
    >
      {/* Background Slides with Cinematic Cross-Fade and Soft Scale */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-0" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            sizes="100vw"
            className={`object-cover object-center transition-transform duration-[6000ms] ease-out ${
              index === currentSlide ? "scale-105" : "scale-100"
            }`}
            priority={index === 0}
          />

          {/* Clean Dark Cinematic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        </div>
      ))}

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Headline & CTAs (Cols 1-8) */}
          <div className="lg:col-span-8 space-y-5 text-white">
            
            {/* Top Eyebrow Badges & Location */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-bold tracking-wider text-blue-200 uppercase shadow-sm">
                <Sparkles className="w-4 h-4 text-blue-300 animate-pulse" />
                <span>{slides[currentSlide].eyebrow}</span>
              </div>

              <a
                href={collegeInfo.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-900/50 backdrop-blur-md border border-blue-400/30 text-xs text-blue-200 hover:text-white transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                <span>{slides[currentSlide].location}</span>
              </a>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight drop-shadow-lg">
              {slides[currentSlide].title}
            </h1>

            {/* Urdu Tagline */}
            <div className="pt-1">
              <p className="urdu-font text-blue-200 text-xl sm:text-3xl tracking-wide font-normal drop-shadow-md">
                {slides[currentSlide].urdu}
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed font-light drop-shadow">
              {slides[currentSlide].description}
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href={slides[currentSlide].primaryCta.href}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-prc-primary hover:from-blue-600 hover:to-prc-navy text-white font-extrabold px-7 py-3.5 rounded-full text-base shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>{slides[currentSlide].primaryCta.label}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href={slides[currentSlide].secondaryCta.href}
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold px-6 py-3.5 rounded-full text-base backdrop-blur-md border border-white/30 transition-all duration-300 hover:scale-105"
              >
                <span>{slides[currentSlide].secondaryCta.label}</span>
              </Link>

              <a
                href={collegeInfo.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-300 hover:text-white font-semibold text-sm underline-offset-4 hover:underline py-2 px-3 transition-colors"
              >
                <MapPin className="w-4 h-4 text-red-400" />
                <span>Visit Sharaqpur Campus</span>
              </a>
            </div>
          </div>

          {/* Floating Admission 2026 Card (Cols 8-12) */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="glass-dark rounded-3xl p-6 shadow-2xl border border-white/20 text-white relative overflow-hidden animate-float">
              {/* Corner Badge */}
              <div className="absolute top-0 right-0 bg-blue-500 text-white font-bold text-[10px] uppercase px-4 py-1 rounded-bl-xl tracking-wider shadow-sm">
                Fall 2026 Batch
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-400/30">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-white">
                    Admissions Open 2026
                  </h3>
                  <p className="text-xs text-blue-200">
                    Apply Online for BS & Diplomas
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300 border-t border-white/10 pt-4 mb-5">
                <div className="flex items-center justify-between">
                  <span>BS Computing & AI:</span>
                  <span className="font-bold text-white">4 Years (8 Semesters)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>BBA Business Degree:</span>
                  <span className="font-bold text-white">4 Years (8 Semesters)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>1-Year IT Diplomas:</span>
                  <span className="font-bold text-white">Hands-On & Industry-Ready</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Merit Scholarships:</span>
                  <span className="font-bold text-emerald-400">Up to 100% Fee Waiver</span>
                </div>
              </div>

              <div className="space-y-2.5">
                <Link
                  href="/apply"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3.5 px-4 rounded-xl text-sm shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Start Online Application</span>
                </Link>

                <a
                  href={collegeInfo.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 text-xs text-slate-300 hover:text-white py-1.5 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-red-400" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls: Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/35 hover:bg-prc-primary text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/35 hover:bg-prc-primary text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Thumbnails & Progress Bar at Bottom */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setCurrentSlide(i)}
            className={`flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
              i === currentSlide
                ? "bg-blue-500 text-white shadow-md scale-105"
                : "text-white/60 hover:text-white hover:bg-white/10"
            }`}
            aria-label={`Go to slide ${s.slideNum}`}
          >
            <span className="w-2 h-2 rounded-full bg-current" />
            <span>{s.slideNum}</span>
          </button>
        ))}

        <div className="h-4 w-px bg-white/20 mx-1" />

        <button
          onClick={() => setIsPaused(!isPaused)}
          className="text-white/70 hover:text-white p-1 transition-colors"
          aria-label={isPaused ? "Play slider" : "Pause slider"}
          title={isPaused ? "Play autoplay" : "Pause autoplay"}
        >
          {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
}
