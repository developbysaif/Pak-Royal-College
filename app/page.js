"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  BookOpen,
  Award,
  Users,
  Cpu,
  TrendingUp,
  Compass,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Search,
  ChevronRight,
  ShieldCheck,
  GraduationCap,
  Download,
  Phone,
  Mail
} from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import QuickActionCards from "@/components/QuickActionCards";
import SectionHeading from "@/components/SectionHeading";
import ProgramCard from "@/components/ProgramCard";
import CourseCard from "@/components/CourseCard";
import FacultyCard from "@/components/FacultyCard";
import NewsCard from "@/components/NewsCard";
import EventCard from "@/components/EventCard";
import StatsCounter from "@/components/StatsCounter";
import { programs } from "@/data/programs";
import { courses } from "@/data/courses";
import { faculty } from "@/data/faculty";
import { newsArticles } from "@/data/news";
import { events } from "@/data/events";
import { testimonials } from "@/data/testimonials";
import { collegeInfo } from "@/data/collegeInfo";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPrograms = useMemo(() => {
    return programs.filter((p) => {
      const matchTab = activeTab === "all" || p.category === activeTab;
      const matchSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.degree.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchTab && matchSearch;
    });
  }, [activeTab, searchQuery]);

  const featuredBsPrograms = useMemo(() => {
    return programs.filter((p) => p.category === "bs").slice(0, 4);
  }, []);

  return (
    <div className="space-y-20 pb-16">
      {/* SECTION 1 — HERO */}
      <section>
        <HeroSlider />
      </section>

      {/* SECTION 2 — QUICK ACTIONS */}
      <section>
        <QuickActionCards />
      </section>

      {/* SECTION 3 — ABOUT PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Image Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-56 sm:h-64 rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/images/hero_campus.jpg"
                  alt="Pak Royal College Campus Architecture"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-40 sm:h-48 rounded-3xl overflow-hidden shadow-lg bg-prc-primary/10 p-6 flex flex-col justify-center text-prc-navy border border-blue-200">
                <div className="text-3xl font-black text-prc-primary">Est. 2024</div>
                <div className="font-bold text-sm">Founded on Modern Standards</div>
                <p className="text-xs text-slate-500 mt-1">
                  Built to empower youth with computing, intelligence, and business acumen.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="relative h-40 sm:h-48 rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-prc-navy to-prc-primary p-6 text-white flex flex-col justify-center">
                <div className="urdu-font text-xl text-blue-200 mb-1">
                  جہاں مستقبل کی بنیاد رکھی جاتی ہے
                </div>
                <div className="text-xs text-slate-300">
                  A Place Where Futures Begin.
                </div>
              </div>
              <div className="relative h-56 sm:h-64 rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/images/hero_library.jpg"
                  alt="Students in modern library and study lounge"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right: Institutional Introduction */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-prc-light text-prc-primary text-xs font-bold uppercase tracking-wider border border-blue-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Pak Royal College</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-prc-navy leading-tight">
              Preparing Students for a Rapidly Changing World
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              At Pak Royal College, education transcends rote memorization. We combine rigorous academic theory with hands-on technical skills, industry-guided software engineering sprints, AI research laboratories, and comprehensive leadership development.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>HEC & BISE Aligned Standards</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>High-Performance GPU AI Labs</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>PhD & Industry Veteran Faculty</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Generous Merit Scholarships</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-prc-primary hover:bg-prc-navy text-white font-bold px-6 py-3 rounded-full text-sm shadow-md shadow-blue-500/25 transition-all hover:scale-105"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about/leadership"
                className="inline-flex items-center gap-1 text-sm font-bold text-prc-primary hover:underline px-3 py-2"
              >
                <span>Meet Leadership & Governance →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY CHOOSE US */}
      <section className="bg-white py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Institutional Strengths"
            title="Why Choose Pak Royal College?"
            subtitle="Engineered for academic distinction, technological mastery, and career readiness."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Academic Excellence",
                desc: "Curriculum designed to nurture deep analytical intellect, critical inquiry, and scholastic achievement across all undergraduate programs."
              },
              {
                icon: Cpu,
                title: "Modern & AI-Driven Learning",
                desc: "Integrated hands-on computing coursework, machine learning pipelines, and access to GPU-accelerated computing infrastructure."
              },
              {
                icon: Users,
                title: "Distinguished Faculty",
                desc: "Learn from accomplished professors, researchers, and tech industry veterans committed to one-on-one student mentorship."
              },
              {
                icon: Sparkles,
                title: "Technology & Innovation Hub",
                desc: "Active coding hackathons, incubation support, robotics projects, and continuous experiential learning."
              },
              {
                icon: TrendingUp,
                title: "Structured Career Development",
                desc: "Corporate internship linkages, CV clinics, executive guest seminars, and pre-placement recruitment drives."
              },
              {
                icon: Compass,
                title: "Student-Centered Environment",
                desc: "Vibrant societies, sports tournaments, literary festivals, air-conditioned smart theaters, and serene green campus lawns."
              }
            ].map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="group bg-slate-50 hover:bg-white rounded-3xl p-8 border border-slate-200 hover:border-prc-primary hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-prc-light text-prc-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-prc-primary group-hover:text-white shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-extrabold text-xl text-prc-navy group-hover:text-prc-primary transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-200 flex items-center text-xs font-bold text-prc-primary group-hover:translate-x-1 transition-transform">
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5 — PROGRAM EXPLORER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic Offerings"
          title="Explore Our Programs"
          subtitle="Discover BS degrees, professional diplomas, and career-advancing certifications."
        />

        {/* Search & Tabs */}
        <div className="space-y-6 mb-10">
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search programs by degree or keywords (e.g. Computer Science, AI, BBA)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-prc-primary text-sm shadow-sm"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "All Programs" },
              { id: "bs", label: "BS Programs (4 Yrs)" },
              { id: "diploma", label: "Diplomas (1 Yr)" },
              { id: "professional", label: "Professional Certifications" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeTab === tab.id
                    ? "bg-prc-primary text-white shadow-md shadow-blue-500/25 scale-105"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((prog) => (
            <ProgramCard key={prog.id} program={prog} />
          ))}
        </div>
      </section>

      {/* SECTION 6 — FEATURED BS PROGRAMS */}
      <section className="bg-prc-light/60 py-20 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="px-3.5 py-1 rounded-full bg-white text-prc-primary text-xs font-bold uppercase tracking-wider border border-blue-200">
                Undergraduate Degrees
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-prc-navy mt-2">
                Build Your Future With Our BS Programs
              </h2>
              <p className="text-sm text-slate-600 max-w-2xl mt-1">
                Four-year HEC-compliant degree tracks crafted to produce industry-ready leaders in software engineering, artificial intelligence, business and science.
              </p>
            </div>
            <Link
              href="/programs/bs"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-prc-primary hover:text-prc-navy transition-colors shrink-0"
            >
              <span>View All BS Programs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBsPrograms.map((prog) => (
              <ProgramCard key={prog.id} program={prog} featured />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — ACADEMIC STATS */}
      <section>
        <StatsCounter />
      </section>

      {/* SECTION 8 — CAMPUS EXPERIENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-prc-dark min-h-[420px] flex items-center p-8 sm:p-14 shadow-2xl">
          <Image
            src="/images/hero_ai_lab.jpg"
            alt="Campus Experience at Pak Royal College"
            fill
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-prc-dark via-prc-navy/80 to-transparent" />

          <div className="relative z-10 max-w-2xl space-y-6 text-white">
            <span className="bg-blue-500/20 text-blue-300 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider border border-blue-400/30">
              Campus Life & Culture
            </span>
            <h2 className="text-3xl sm:text-5xl font-black leading-tight text-white">
              Experience Life at Pak Royal College
            </h2>
            <p className="text-base text-slate-200 leading-relaxed font-light">
              Immerse yourself in high-energy campus events, competitive sports leagues, digital coding bootcamps, and creative student societies built for personal transformation.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/campus-life"
                className="bg-white text-prc-navy hover:bg-prc-light font-bold px-6 py-3 rounded-full text-sm transition-all shadow-lg hover:scale-105"
              >
                Explore Campus Life
              </Link>
              <Link
                href="/campus-life/gallery"
                className="bg-white/15 hover:bg-white/25 text-white font-bold px-6 py-3 rounded-full text-sm backdrop-blur-md border border-white/30 transition-all hover:scale-105"
              >
                View Photo Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — FACULTY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="px-3.5 py-1 rounded-full bg-prc-light text-prc-primary text-xs font-bold uppercase tracking-wider border border-blue-200">
              Scholars & Mentors
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-prc-navy mt-2">
              Meet Our Distinguished Faculty
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mt-1">
              Qualified professors, PhD scholars, and experienced industry practitioners committed to academic excellence.
            </p>
          </div>
          <Link
            href="/about/faculty"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-prc-primary hover:text-prc-navy transition-colors shrink-0"
          >
            <span>View All Faculty Directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.slice(0, 4).map((member) => (
            <FacultyCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* SECTION 10 — STUDENT LIFE */}
      <section className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Holistic Development"
            title="Vibrant Student Community"
            subtitle="Nurturing athletic talents, creative expression, and technical leadership beyond classrooms."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: "Computing Society", icon: Cpu, count: "Weekly Hackathons" },
              { title: "Sports Athletics", icon: Award, count: "Cricket & Football" },
              { title: "Literary & Debates", icon: BookOpen, count: "Model UN & Declamations" },
              { title: "Creative Media Hub", icon: Sparkles, count: "Design & Video Studio" },
              { title: "Incubation Center", icon: TrendingUp, count: "Startup Mentorship" },
              { title: "Digital Library", icon: GraduationCap, count: "10,000+ Resources" }
            ].map((soc, idx) => {
              const Icon = soc.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-slate-200 text-center space-y-2 hover:border-prc-primary hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-prc-light text-prc-primary flex items-center justify-center group-hover:bg-prc-primary group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-800">{soc.title}</h4>
                  <p className="text-[11px] text-slate-500">{soc.count}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 11 & 12 — NEWS & EVENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* News Column */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-prc-primary uppercase tracking-wider">
                  Campus Updates
                </span>
                <h3 className="text-2xl font-black text-prc-navy mt-1">
                  Latest News & Announcements
                </h3>
              </div>
              <Link href="/news" className="text-xs font-bold text-prc-primary hover:underline">
                View All →
              </Link>
            </div>

            <div className="space-y-4">
              {newsArticles.slice(0, 2).map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          {/* Events Column */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-prc-primary uppercase tracking-wider">
                  What's Happening
                </span>
                <h3 className="text-2xl font-black text-prc-navy mt-1">
                  Upcoming Events & Summits
                </h3>
              </div>
              <Link href="/events" className="text-xs font-bold text-prc-primary hover:underline">
                View All →
              </Link>
            </div>

            <div className="space-y-4">
              {events.slice(0, 2).map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13 — TESTIMONIALS */}
      <section className="bg-royal-dark-gradient py-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            badge="Voices of Success"
            title="Student & Alumni Stories"
            subtitle="Hear how Pak Royal College is empowering future tech innovators and professionals."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 flex flex-col justify-between hover:bg-white/10 transition-colors"
              >
                <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed mb-6">
                  "{test.quote}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-blue-400">
                    <Image
                      src={test.image}
                      alt={test.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white">{test.name}</div>
                    <div className="text-xs text-blue-300">{test.program}</div>
                    <div className="text-[10px] text-slate-400">{test.batch}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14 — ADMISSION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-prc-dark via-prc-navy to-prc-primary rounded-3xl p-8 sm:p-14 text-white text-center shadow-2xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

          <span className="bg-white/10 text-blue-200 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-white/20 inline-block">
            Take The Next Step
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-white max-w-2xl mx-auto leading-tight">
            Your Future Starts Here.
          </h2>

          <p className="urdu-font text-xl text-blue-200">
            جہاں مستقبل کی بنیاد رکھی جاتی ہے
          </p>

          <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto font-light">
            Admissions for Fall 2026 are officially open. Submit your application online or visit our campus admissions office to begin your journey.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/apply"
              className="bg-white text-prc-navy hover:bg-prc-light font-black px-8 py-4 rounded-full text-base shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-prc-primary" />
              <span>Apply Online Now</span>
            </Link>
            <Link
              href="/programs"
              className="bg-white/15 hover:bg-white/25 text-white font-bold px-7 py-4 rounded-full text-base backdrop-blur-md border border-white/30 transition-all hover:scale-105"
            >
              Explore Academic Programs
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 15 — CONTACT PREVIEW & LOCATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-prc-primary">
                Connect With Us
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-prc-navy mt-1">
                Visit Pak Royal College
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Our admissions counselors and faculty advisors are available Monday through Saturday to guide you.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl">
                <MapPin className="w-5 h-5 text-prc-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Campus Address</div>
                  <div className="text-slate-600">{collegeInfo.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl">
                <Phone className="w-5 h-5 text-prc-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Admissions Helpline</div>
                  <div className="text-slate-600">{collegeInfo.phone} / {collegeInfo.altPhone}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl">
                <Mail className="w-5 h-5 text-prc-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Official Inquiries</div>
                  <div className="text-slate-600">{collegeInfo.email}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl">
                <Clock className="w-5 h-5 text-prc-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Office Working Hours</div>
                  <div className="text-slate-600">{collegeInfo.officeHours}</div>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-prc-navy hover:bg-prc-primary text-white font-bold px-6 py-3 rounded-full text-xs sm:text-sm transition-colors"
              >
                <span>Contact Admissions Directorate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={collegeInfo.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-blue-50 text-prc-primary hover:bg-prc-light font-bold px-5 py-3 rounded-full text-xs sm:text-sm transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span>Open Google Maps</span>
              </a>
            </div>
          </div>

          {/* Map Preview Embed */}
          <div className="lg:col-span-6 h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 relative">
            <iframe
              title="Pak Royal College Location Map"
              src={collegeInfo.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
