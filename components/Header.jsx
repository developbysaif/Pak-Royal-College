"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Award,
  Sparkles,
  Users,
  Compass,
  FileText,
  DollarSign,
  Gift,
  Building,
  Image as ImageIcon,
  Newspaper,
  Calendar,
  Phone,
  MapPin,
  Laptop,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import TopBar from "./TopBar";
import { collegeInfo } from "@/data/collegeInfo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const isTransparent = isHomePage && !isScrolled;

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      <TopBar />

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isTransparent
            ? "bg-prc-dark/90 backdrop-blur-md border-b border-white/10 text-white py-2.5"
            : "bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-900/5 border-b border-slate-200/80 text-slate-800 py-2"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-11 h-11 md:w-13 md:h-13 shrink-0 transition-transform duration-300 group-hover:scale-105 drop-shadow-md">
              <Image
                src="/images/logo.png"
                alt="Pak Royal College Official Crest"
                width={52}
                height={52}
                className="object-contain w-auto h-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-black tracking-wider text-base sm:text-lg md:text-xl uppercase leading-tight transition-colors ${
                  isTransparent
                    ? "text-white group-hover:text-blue-300"
                    : "text-prc-navy group-hover:text-prc-primary"
                }`}
              >
                PAK ROYAL COLLEGE
              </span>
              <span
                className={`text-[10px] md:text-[11px] font-medium tracking-wide leading-tight ${
                  isTransparent ? "text-blue-200/90" : "text-slate-500"
                }`}
              >
                A Place Where Futures Begin.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
            
            {/* Home */}
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                pathname === "/"
                  ? isTransparent
                    ? "text-white bg-white/20 shadow-sm"
                    : "text-prc-primary bg-prc-light font-bold"
                  : isTransparent
                  ? "text-white/90 hover:text-white hover:bg-white/10"
                  : "text-slate-700 hover:text-prc-primary hover:bg-slate-100"
              }`}
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div className="relative group">
              <Link
                href="/about"
                className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1 transition-all whitespace-nowrap ${
                  pathname.startsWith("/about")
                    ? isTransparent
                      ? "text-white bg-white/20 shadow-sm"
                      : "text-prc-primary bg-prc-light font-bold"
                    : isTransparent
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-slate-700 hover:text-prc-primary hover:bg-slate-100"
                }`}
              >
                About
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 opacity-80" />
              </Link>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 w-72 pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 text-slate-800 ring-1 ring-black/5">
                  <div className="px-3 py-2 border-b border-slate-100 mb-1">
                    <p className="text-[11px] font-bold text-prc-primary uppercase tracking-wider">About PRC</p>
                    <p className="text-xs text-slate-500">Excellence in higher education</p>
                  </div>
                  <Link
                    href="/about"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-prc-light hover:text-prc-primary transition-colors text-sm font-medium"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-prc-primary shrink-0">
                      <Building className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">College Overview</div>
                      <div className="text-[11px] text-slate-500">History, leadership & campus</div>
                    </div>
                  </Link>
                  <Link
                    href="/about/mission-vision"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-prc-light hover:text-prc-primary transition-colors text-sm font-medium"
                  >
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Mission & Vision</div>
                      <div className="text-[11px] text-slate-500">Our values & educational goal</div>
                    </div>
                  </Link>
                  <Link
                    href="/about/leadership"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-prc-light hover:text-prc-primary transition-colors text-sm font-medium"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-700 shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Leadership & Governance</div>
                      <div className="text-[11px] text-slate-500">Principal & Academic Council</div>
                    </div>
                  </Link>
                  <Link
                    href="/about/faculty"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-prc-light hover:text-prc-primary transition-colors text-sm font-medium"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Faculty Directory</div>
                      <div className="text-[11px] text-slate-500">Qualified professors & mentors</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Programs Mega Menu */}
            <div className="relative group">
              <Link
                href="/programs"
                className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1 transition-all whitespace-nowrap ${
                  pathname.startsWith("/programs")
                    ? isTransparent
                      ? "text-white bg-white/20 shadow-sm"
                      : "text-prc-primary bg-prc-light font-bold"
                    : isTransparent
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-slate-700 hover:text-prc-primary hover:bg-slate-100"
                }`}
              >
                Programs
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 opacity-80" />
              </Link>

              {/* Mega Dropdown */}
              <div className="absolute top-full -left-24 w-[620px] pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 text-slate-800 ring-1 ring-black/5 grid grid-cols-2 gap-5">
                  {/* Left Column: BS Degrees */}
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-100">
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-prc-primary">
                        <GraduationCap className="w-4 h-4" />
                        <span>Undergraduate Degrees</span>
                      </div>
                      <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">4 Years</span>
                    </div>

                    <div className="space-y-1">
                      <Link
                        href="/programs/bs-computer-science"
                        className="group/item flex items-center justify-between p-2 rounded-lg hover:bg-prc-light transition-colors"
                      >
                        <div>
                          <div className="text-xs font-bold text-slate-800 group-hover/item:text-prc-primary">
                            BS Computer Science
                          </div>
                          <p className="text-[11px] text-slate-500">Software, Algorithms & Systems</p>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-prc-primary opacity-0 group-hover/item:opacity-100 transition-all -translate-x-1 group-hover/item:translate-x-0" />
                      </Link>

                      <Link
                        href="/programs/bs-artificial-intelligence"
                        className="group/item flex items-center justify-between p-2 rounded-lg hover:bg-prc-light transition-colors"
                      >
                        <div>
                          <div className="text-xs font-bold text-slate-800 group-hover/item:text-prc-primary">
                            BS Artificial Intelligence
                          </div>
                          <p className="text-[11px] text-slate-500">Machine Learning & Neural Nets</p>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-prc-primary opacity-0 group-hover/item:opacity-100 transition-all -translate-x-1 group-hover/item:translate-x-0" />
                      </Link>

                      <Link
                        href="/programs/bs-software-engineering"
                        className="group/item flex items-center justify-between p-2 rounded-lg hover:bg-prc-light transition-colors"
                      >
                        <div>
                          <div className="text-xs font-bold text-slate-800 group-hover/item:text-prc-primary">
                            BS Software Engineering
                          </div>
                          <p className="text-[11px] text-slate-500">Enterprise App Architecture</p>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-prc-primary opacity-0 group-hover/item:opacity-100 transition-all -translate-x-1 group-hover/item:translate-x-0" />
                      </Link>

                      <Link
                        href="/programs/bs"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-prc-primary hover:underline pt-2 pl-2"
                      >
                        View All BS Programs →
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Diplomas & Certifications */}
                  <div className="border-l border-slate-100 pl-5">
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-100">
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-prc-primary">
                        <Laptop className="w-4 h-4" />
                        <span>Diplomas & Certifications</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Link
                        href="/programs/diploma"
                        className="group/item block p-2.5 rounded-xl bg-slate-50 hover:bg-prc-light transition-colors"
                      >
                        <div className="font-bold text-xs text-slate-800 group-hover/item:text-prc-primary flex items-center justify-between">
                          <span>1-Year Diplomas (DIT, AI)</span>
                          <ArrowRight className="w-3.5 h-3.5 text-prc-primary opacity-0 group-hover/item:opacity-100 transition-all" />
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">Practical, hands-on career foundation</p>
                      </Link>

                      <Link
                        href="/programs/professional"
                        className="group/item block p-2.5 rounded-xl bg-slate-50 hover:bg-prc-light transition-colors"
                      >
                        <div className="font-bold text-xs text-slate-800 group-hover/item:text-prc-primary flex items-center justify-between">
                          <span>Professional Certifications</span>
                          <ArrowRight className="w-3.5 h-3.5 text-prc-primary opacity-0 group-hover/item:opacity-100 transition-all" />
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">Cloud DevOps & Full-Stack tracks</p>
                      </Link>

                      <div className="pt-2 bg-gradient-to-r from-blue-50 to-indigo-50 p-2.5 rounded-xl border border-blue-100">
                        <Link
                          href="/programs"
                          className="flex items-center justify-between text-xs font-bold text-prc-navy hover:text-prc-primary"
                        >
                          <span>Explore All Academic Programs</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Courses Dropdown */}
            <div className="relative group">
              <Link
                href="/courses"
                className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1 transition-all whitespace-nowrap ${
                  pathname.startsWith("/courses")
                    ? isTransparent
                      ? "text-white bg-white/20 shadow-sm"
                      : "text-prc-primary bg-prc-light font-bold"
                    : isTransparent
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-slate-700 hover:text-prc-primary hover:bg-slate-100"
                }`}
              >
                Courses
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 opacity-80" />
              </Link>

              <div className="absolute top-full left-0 w-72 pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 text-slate-800 ring-1 ring-black/5">
                  <div className="px-3 py-2 border-b border-slate-100 mb-1 flex items-center justify-between">
                    <p className="text-[11px] font-bold text-prc-primary uppercase tracking-wider">Skill Courses</p>
                    <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded-full">New Batches</span>
                  </div>
                  <Link
                    href="/courses"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-prc-light hover:text-prc-primary transition-colors text-sm font-medium"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-prc-primary shrink-0">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">All Short Courses</div>
                      <div className="text-[11px] text-slate-500">Browse complete 2026 catalog</div>
                    </div>
                  </Link>
                  <Link
                    href="/courses?cat=Technical"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-prc-light hover:text-prc-primary transition-colors text-sm font-medium"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Technical Courses</div>
                      <div className="text-[11px] text-slate-500">Python, AI, Cyber Security</div>
                    </div>
                  </Link>
                  <Link
                    href="/courses?cat=Professional"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-prc-light hover:text-prc-primary transition-colors text-sm font-medium"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Professional Tracks</div>
                      <div className="text-[11px] text-slate-500">Digital Marketing & SEO</div>
                    </div>
                  </Link>
                  <Link
                    href="/courses?cat=Skill Development"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-prc-light hover:text-prc-primary transition-colors text-sm font-medium"
                  >
                    <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600 shrink-0">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Skill Development</div>
                      <div className="text-[11px] text-slate-500">Graphic Design, UI/UX, IELTS</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Admissions Dropdown */}
            <div className="relative group">
              <Link
                href="/admissions"
                className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1 transition-all whitespace-nowrap ${
                  pathname.startsWith("/admissions") || pathname === "/apply"
                    ? isTransparent
                      ? "text-white bg-white/20 shadow-sm"
                      : "text-prc-primary bg-prc-light font-bold"
                    : isTransparent
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-slate-700 hover:text-prc-primary hover:bg-slate-100"
                }`}
              >
                Admissions
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 opacity-80" />
              </Link>

              <div className="absolute top-full left-0 w-80 pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 text-slate-800 ring-1 ring-black/5">
                  <div className="px-3 py-2 border-b border-slate-100 mb-1 flex items-center justify-between">
                    <p className="text-[11px] font-bold text-prc-primary uppercase tracking-wider">Admissions 2026</p>
                    <span className="text-[10px] bg-red-100 text-red-700 font-bold px-2 py-0.5 rounded-full animate-pulse">Open Now</span>
                  </div>
                  <Link
                    href="/admissions"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-prc-light hover:text-prc-primary transition-colors text-sm font-medium"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-prc-primary shrink-0">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Admissions Hub 2026</div>
                      <div className="text-[11px] text-slate-500">Overview, dates & guide</div>
                    </div>
                  </Link>
                  <Link
                    href="/admissions/requirements"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-prc-light hover:text-prc-primary transition-colors text-sm font-medium"
                  >
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Admission Requirements</div>
                      <div className="text-[11px] text-slate-500">Eligibility & required documents</div>
                    </div>
                  </Link>
                  <Link
                    href="/admissions/process"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-prc-light hover:text-prc-primary transition-colors text-sm font-medium"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-700 shrink-0">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Admission Process</div>
                      <div className="text-[11px] text-slate-500">Step-by-step roadmap</div>
                    </div>
                  </Link>
                  <Link
                    href="/admissions/fees"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-prc-light hover:text-prc-primary transition-colors text-sm font-medium"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Fee Structure</div>
                      <div className="text-[11px] text-slate-500">Transparent semester fee details</div>
                    </div>
                  </Link>
                  <Link
                    href="/admissions/scholarships"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-prc-light hover:text-prc-primary transition-colors text-sm font-medium"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                      <Gift className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Scholarships & Aid</div>
                      <div className="text-[11px] text-slate-500">Merit & need-based fee waivers</div>
                    </div>
                  </Link>
                  <div className="p-1 pt-2">
                    <Link
                      href="/apply"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-prc-primary to-blue-600 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all"
                    >
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        Apply Online Now
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Campus Life Dropdown */}
            <div className="relative group">
              <Link
                href="/campus-life"
                className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1 transition-all whitespace-nowrap ${
                  pathname.startsWith("/campus-life") || pathname.startsWith("/news") || pathname.startsWith("/events")
                    ? isTransparent
                      ? "text-white bg-white/20 shadow-sm"
                      : "text-prc-primary bg-prc-light font-bold"
                    : isTransparent
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-slate-700 hover:text-prc-primary hover:bg-slate-100"
                }`}
              >
                Campus Life
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 opacity-80" />
              </Link>

              <div className="absolute top-full -left-12 w-72 pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 text-slate-800 ring-1 ring-black/5">
                  <div className="px-3 py-2 border-b border-slate-100 mb-1">
                    <p className="text-[11px] font-bold text-prc-primary uppercase tracking-wider">Life at PRC</p>
                    <p className="text-xs text-slate-500">Culture, activities & community</p>
                  </div>
                  <Link
                    href="/campus-life"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-prc-light hover:text-prc-primary transition-colors text-sm font-medium"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-prc-primary shrink-0">
                      <Building className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Campus Facilities</div>
                      <div className="text-[11px] text-slate-500">Modern labs, library & spaces</div>
                    </div>
                  </Link>
                  <Link
                    href="/campus-life/student-life"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-prc-light hover:text-prc-primary transition-colors text-sm font-medium"
                  >
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Student Societies</div>
                      <div className="text-[11px] text-slate-500">Clubs, sports & leadership</div>
                    </div>
                  </Link>
                  <Link
                    href="/campus-life/gallery"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-prc-light hover:text-prc-primary transition-colors text-sm font-medium"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                      <ImageIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Photo Gallery</div>
                      <div className="text-[11px] text-slate-500">Moments & memories</div>
                    </div>
                  </Link>
                  <Link
                    href="/news"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-prc-light hover:text-prc-primary transition-colors text-sm font-medium"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                      <Newspaper className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">College News</div>
                      <div className="text-[11px] text-slate-500">Latest announcements</div>
                    </div>
                  </Link>
                  <Link
                    href="/events"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-prc-light hover:text-prc-primary transition-colors text-sm font-medium"
                  >
                    <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600 shrink-0">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Upcoming Events</div>
                      <div className="text-[11px] text-slate-500">Workshops & hackathons</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact */}
            <Link
              href="/contact"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                pathname === "/contact"
                  ? isTransparent
                    ? "text-white bg-white/20 shadow-sm"
                    : "text-prc-primary bg-prc-light font-bold"
                  : isTransparent
                  ? "text-white/90 hover:text-white hover:bg-white/10"
                  : "text-slate-700 hover:text-prc-primary hover:bg-slate-100"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-prc-primary via-blue-600 to-indigo-600 hover:from-prc-navy hover:via-prc-primary hover:to-blue-700 text-white font-bold px-5 py-2.5 rounded-full text-sm shadow-md shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shrink-0"
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span className="whitespace-nowrap">Apply Now</span>
            </Link>
          </div>

          {/* Mobile Right Menu Trigger */}
          <div className="lg:hidden flex items-center gap-2 shrink-0">
            <Link
              href="/apply"
              className="bg-gradient-to-r from-prc-primary to-blue-600 text-white font-bold px-3.5 py-1.5 rounded-full text-xs shadow-sm whitespace-nowrap flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" />
              <span>Apply</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl transition-colors ${
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-slate-800 hover:bg-slate-100"
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white text-slate-900 border-t border-slate-100 px-4 py-5 shadow-2xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
            <div className="space-y-1.5">
              
              <Link
                href="/"
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-semibold hover:bg-prc-light hover:text-prc-primary"
              >
                <span>Home</span>
              </Link>

              {/* Mobile About Accordion */}
              <div>
                <button
                  onClick={() => toggleDropdown("about")}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-semibold hover:bg-prc-light"
                >
                  <span className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-prc-primary" />
                    About
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === "about" ? "rotate-180 text-prc-primary" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "about" && (
                  <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50 rounded-xl my-1 border border-slate-100">
                    <Link href="/about" className="block py-2 px-2 text-sm font-medium text-slate-700 hover:text-prc-primary">
                      • College Overview
                    </Link>
                    <Link href="/about/mission-vision" className="block py-2 px-2 text-sm font-medium text-slate-700 hover:text-prc-primary">
                      • Mission & Vision
                    </Link>
                    <Link href="/about/leadership" className="block py-2 px-2 text-sm font-medium text-slate-700 hover:text-prc-primary">
                      • Leadership & Governance
                    </Link>
                    <Link href="/about/faculty" className="block py-2 px-2 text-sm font-medium text-slate-700 hover:text-prc-primary">
                      • Faculty Directory
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Programs Accordion */}
              <div>
                <button
                  onClick={() => toggleDropdown("programs")}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-semibold hover:bg-prc-light"
                >
                  <span className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-prc-primary" />
                    Programs
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === "programs" ? "rotate-180 text-prc-primary" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "programs" && (
                  <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50 rounded-xl my-1 border border-slate-100">
                    <Link href="/programs" className="block py-2 px-2 text-sm font-bold text-prc-primary">
                      All Academic Programs →
                    </Link>
                    <Link href="/programs/bs" className="block py-1.5 px-2 text-sm text-slate-700 hover:text-prc-primary">
                      • BS Degrees (4 Years)
                    </Link>
                    <Link href="/programs/bs-computer-science" className="block py-1.5 px-3 text-xs text-slate-600 hover:text-prc-primary">
                      - BS Computer Science
                    </Link>
                    <Link href="/programs/bs-artificial-intelligence" className="block py-1.5 px-3 text-xs text-slate-600 hover:text-prc-primary">
                      - BS Artificial Intelligence
                    </Link>
                    <Link href="/programs/bs-software-engineering" className="block py-1.5 px-3 text-xs text-slate-600 hover:text-prc-primary">
                      - BS Software Engineering
                    </Link>
                    <Link href="/programs/diploma" className="block py-1.5 px-2 text-sm text-slate-700 hover:text-prc-primary">
                      • 1-Year Diplomas (DIT, AI)
                    </Link>
                    <Link href="/programs/professional" className="block py-1.5 px-2 text-sm text-slate-700 hover:text-prc-primary">
                      • Professional Certifications
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Courses Accordion */}
              <div>
                <button
                  onClick={() => toggleDropdown("courses")}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-semibold hover:bg-prc-light"
                >
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-prc-primary" />
                    Courses
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === "courses" ? "rotate-180 text-prc-primary" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "courses" && (
                  <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50 rounded-xl my-1 border border-slate-100">
                    <Link href="/courses" className="block py-2 px-2 text-sm font-bold text-prc-primary">
                      All Short Courses →
                    </Link>
                    <Link href="/courses?cat=Technical" className="block py-1.5 px-2 text-sm text-slate-700">
                      • Technical (Python, AI, Cyber)
                    </Link>
                    <Link href="/courses?cat=Professional" className="block py-1.5 px-2 text-sm text-slate-700">
                      • Professional (Digital Marketing)
                    </Link>
                    <Link href="/courses?cat=Skill Development" className="block py-1.5 px-2 text-sm text-slate-700">
                      • Skill Development (UI/UX, IELTS)
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Admissions Accordion */}
              <div>
                <button
                  onClick={() => toggleDropdown("admissions")}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-semibold hover:bg-prc-light"
                >
                  <span className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-prc-primary" />
                    Admissions
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === "admissions" ? "rotate-180 text-prc-primary" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "admissions" && (
                  <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50 rounded-xl my-1 border border-slate-100">
                    <Link href="/admissions" className="block py-2 px-2 text-sm font-bold text-prc-primary">
                      Admissions Hub 2026 →
                    </Link>
                    <Link href="/admissions/requirements" className="block py-1.5 px-2 text-sm text-slate-700">
                      • Admission Requirements
                    </Link>
                    <Link href="/admissions/process" className="block py-1.5 px-2 text-sm text-slate-700">
                      • Admission Process
                    </Link>
                    <Link href="/admissions/fees" className="block py-1.5 px-2 text-sm text-slate-700">
                      • Fee Structure
                    </Link>
                    <Link href="/admissions/scholarships" className="block py-1.5 px-2 text-sm text-slate-700">
                      • Scholarships & Aid
                    </Link>
                    <Link href="/apply" className="block py-2 px-2 text-sm font-bold text-blue-600">
                      • Online Application Form
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Campus Life Accordion */}
              <div>
                <button
                  onClick={() => toggleDropdown("campus")}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-semibold hover:bg-prc-light"
                >
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-prc-primary" />
                    Campus Life
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === "campus" ? "rotate-180 text-prc-primary" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "campus" && (
                  <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50 rounded-xl my-1 border border-slate-100">
                    <Link href="/campus-life" className="block py-2 px-2 text-sm text-slate-700">
                      • Campus Facilities
                    </Link>
                    <Link href="/campus-life/student-life" className="block py-2 px-2 text-sm text-slate-700">
                      • Student Life & Societies
                    </Link>
                    <Link href="/campus-life/gallery" className="block py-2 px-2 text-sm text-slate-700">
                      • Photo Gallery
                    </Link>
                    <Link href="/news" className="block py-2 px-2 text-sm text-slate-700">
                      • News & Announcements
                    </Link>
                    <Link href="/events" className="block py-2 px-2 text-sm text-slate-700">
                      • Upcoming Events
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-semibold hover:bg-prc-light hover:text-prc-primary"
              >
                <span>Contact Us</span>
              </Link>
              
              <Link
                href="/faq"
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-semibold hover:bg-prc-light hover:text-prc-primary"
              >
                <span>FAQs</span>
              </Link>

              {/* Mobile CTA Box */}
              <div className="pt-4 space-y-3">
                <Link
                  href="/apply"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-prc-primary via-blue-600 to-indigo-600 text-white font-bold py-3.5 rounded-xl shadow-lg text-center text-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  Apply Online for Admissions 2026
                </Link>

                <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-600">
                  <a
                    href={`tel:${collegeInfo.phone}`}
                    className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-50 hover:bg-slate-100"
                  >
                    <Phone className="w-3.5 h-3.5 text-prc-primary" />
                    <span>Call College</span>
                  </a>
                  <a
                    href={collegeInfo.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-50 hover:bg-slate-100"
                  >
                    <MapPin className="w-3.5 h-3.5 text-red-500" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
