import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock,
  GraduationCap,
  Sparkles,
  BookOpen,
  Award,
  CheckCircle2,
  Download,
  HelpCircle,
  FileText,
  DollarSign,
  Gift,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Briefcase
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBanner from "@/components/PageHeroBanner";
import SectionHeading from "@/components/SectionHeading";
import CurriculumAccordion from "@/components/CurriculumAccordion";
import StickyApplyBar from "@/components/StickyApplyBar";
import StructuredData from "@/components/StructuredData";
import ProgramCard from "@/components/ProgramCard";
import { programs } from "@/data/programs";
import { collegeInfo } from "@/data/collegeInfo";

function findProgram(slug) {
  let program = programs.find((p) => p.slug === slug);
  if (!program) {
    if (slug === "ics-computer-science") {
      program = programs.find((p) => p.slug === "ics-physics-combination");
    } else if (slug === "fsc-medical-laboratory-technology") {
      program = programs.find((p) => p.slug === "medical-laboratory-science-technology-mlt");
    } else if (slug === "bs-computer-science" || slug === "bs-software-engineering") {
      program = programs.find((p) => p.slug === "adp-computer-science") || programs.find((p) => p.slug === "bs-information-technology");
    } else if (slug === "bs-artificial-intelligence") {
      program = programs.find((p) => p.slug === "bs-information-technology");
    } else if (slug === "bs-business-administration" || slug === "bs-mathematics" || slug === "bs-english") {
      program = programs.find((p) => p.slug === "bs-psychology");
    }
  }
  return program;
}

export async function generateStaticParams() {
  const params = programs.map((p) => ({
    slug: p.slug
  }));
  const legacySlugs = [
    "ics-computer-science",
    "fsc-medical-laboratory-technology",
    "bs-computer-science",
    "bs-software-engineering",
    "bs-artificial-intelligence",
    "bs-business-administration",
    "bs-mathematics",
    "bs-english"
  ];
  legacySlugs.forEach((s) => params.push({ slug: s }));
  return params;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const program = findProgram(slug);

  if (!program) {
    return {
      title: "Program Not Found | Pak Royal College"
    };
  }

  return {
    title: `${program.title} | Pak Royal College`,
    description: program.shortDescription,
    openGraph: {
      title: `${program.title} | Pak Royal College`,
      description: program.shortDescription,
      images: [{ url: program.image }]
    }
  };
}

export default async function ProgramDetailPage({ params }) {
  const { slug } = await params;
  const program = findProgram(slug);

  if (!program) {
    notFound();
  }

  const relatedPrograms = programs
    .filter((p) => p.slug !== slug && (p.category === program.category || p.category === "bs"))
    .slice(0, 3);

  return (
    <div className="space-y-16 pb-20">
      <StructuredData type="course" data={program} />

      {/* Hero Section with Full-Bleed Background Image */}
      <PageHeroBanner
        title={program.title}
        badge={program.categoryLabel}
        description={program.shortDescription}
        bgImage={program.image}
        breadcrumbs={[
          { label: "Programs", href: "/programs" },
          { label: program.categoryLabel, href: `/programs/${program.category}` },
          { label: program.title, href: `/programs/${program.slug}` }
        ]}
      >
        <div className="pt-3 flex flex-wrap items-center gap-4">
          {program.isComingSoon ? (
            <Link
              href="/contact"
              className="bg-amber-400 hover:bg-amber-300 text-amber-950 font-black px-7 py-3.5 rounded-full text-sm shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Clock className="w-4 h-4 text-amber-950" />
              <span>Admissions Coming Soon — Inquire Now</span>
            </Link>
          ) : (
            <Link
              href="/apply"
              className="bg-white text-prc-navy hover:bg-prc-light font-black px-7 py-3.5 rounded-full text-sm shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-prc-primary" />
              <span>Apply Now for Fall 2026</span>
            </Link>
          )}

          <Link
            href="/admissions/requirements"
            className="bg-white/15 hover:bg-white/25 text-white font-bold px-6 py-3.5 rounded-full text-sm backdrop-blur-md border border-white/30 transition-all hover:scale-105 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download Prospectus</span>
          </Link>
        </div>
      </PageHeroBanner>

      {/* QUICK INFORMATION CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          <div className="p-3 border-r border-slate-100 last:border-0">
            <div className="text-xs font-semibold text-slate-400 uppercase">Degree Award</div>
            <div className="text-xs sm:text-sm font-bold text-prc-navy mt-1 truncate">{program.degree}</div>
          </div>
          <div className="p-3 border-r border-slate-100 last:border-0">
            <div className="text-xs font-semibold text-slate-400 uppercase">Duration</div>
            <div className="text-xs sm:text-sm font-bold text-prc-primary mt-1">{program.duration}</div>
          </div>
          <div className="p-3 border-r border-slate-100 last:border-0">
            <div className="text-xs font-semibold text-slate-400 uppercase">Study Mode</div>
            <div className="text-xs sm:text-sm font-bold text-prc-navy mt-1">{program.studyMode.split("(")[0]}</div>
          </div>
          <div className="p-3 border-r border-slate-100 last:border-0">
            <div className="text-xs font-semibold text-slate-400 uppercase">Credit Hours</div>
            <div className="text-xs sm:text-sm font-bold text-prc-primary mt-1">{program.creditHours}</div>
          </div>
          <div className="p-3 border-r border-slate-100 last:border-0">
            <div className="text-xs font-semibold text-slate-400 uppercase">Accreditation</div>
            <div className="text-xs sm:text-sm font-bold text-emerald-600 mt-1">
              {program.isComingSoon ? "Pending Inspection" : "HEC / Board Aligned"}
            </div>
          </div>
          <div className="p-3">
            <div className="text-xs font-semibold text-slate-400 uppercase">Admissions</div>
            <div className={`text-xs sm:text-sm font-bold mt-1 ${program.isComingSoon ? "text-amber-600" : "text-blue-600"}`}>
              {program.isComingSoon ? "Coming Soon" : "Open for 2026"}
            </div>
          </div>
        </div>
      </section>

      {/* COMING SOON ANNOUNCEMENT BANNER */}
      {program.isComingSoon && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-amber-300">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white font-extrabold text-xs uppercase px-3 py-1 rounded-full border border-white/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Admissions Coming Soon
              </div>
              <h2 className="text-2xl sm:text-3xl font-black">
                {program.title} — Admissions Launching Soon
              </h2>
              <p className="text-sm sm:text-base text-amber-50 max-w-2xl leading-relaxed">
                Academic and regulatory approval for the Bachelor of Science in Nursing (BSN) degree is currently in progress. Regular student admissions will commence immediately upon notification. Pre-register your interest today to receive priority enrollment alerts.
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-white text-amber-950 hover:bg-amber-50 font-black px-8 py-3.5 rounded-full text-sm shadow-xl transition-all hover:scale-105 whitespace-nowrap"
            >
              Inquire / Pre-Register Now
            </Link>
          </div>
        </section>
      )}

      {/* Main Content Layout with Sticky Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Column (8 Cols) */}
          <div className="lg:col-span-8 space-y-16">
            {/* PROGRAM OVERVIEW */}
            <section className="space-y-4">
              <span className="text-xs font-bold text-prc-primary uppercase tracking-wider">
                Academic Curriculum
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-prc-navy">
                Program Overview
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {program.overview}
              </p>
            </section>

            {/* WHY STUDY THIS PROGRAM */}
            {program.whyStudy && program.whyStudy.length > 0 && (
              <section className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-prc-primary uppercase tracking-wider">
                    Distinctive Highlights
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-prc-navy mt-1">
                    Why Study {program.title} at Pak Royal College?
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {program.whyStudy.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 hover:border-prc-primary transition-all"
                    >
                      <h4 className="font-bold text-sm text-prc-navy flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-prc-primary shrink-0" />
                        <span>{feat.title}</span>
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed pl-6">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* PROGRAM STRUCTURE / CURRICULUM */}
            {program.curriculum && program.curriculum.length > 0 && (
              <section className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-prc-primary uppercase tracking-wider">
                    Course Roadmap
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-prc-navy mt-1">
                    Academic Curriculum & Semester Breakdown
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Explore course codes, credit distribution, and practical lab components across each academic semester.
                  </p>
                </div>

                <CurriculumAccordion curriculum={program.curriculum} />
              </section>
            )}

            {/* LEARNING OUTCOMES */}
            {program.learningOutcomes && program.learningOutcomes.length > 0 && (
              <section className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-prc-primary uppercase tracking-wider">
                    Graduate Competencies
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-prc-navy mt-1">
                    Program Learning Outcomes
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {program.learningOutcomes.map((out, idx) => (
                    <div
                      key={idx}
                      className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-prc-primary font-black text-xs flex items-center justify-center">
                        {out.number}
                      </div>
                      <h4 className="font-bold text-sm text-prc-navy">{out.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{out.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* SKILLS STUDENTS DEVELOP */}
            {program.skills && program.skills.length > 0 && (
              <section className="space-y-4">
                <h3 className="text-xl font-bold text-prc-navy">
                  Skills & Technologies You Will Master
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {program.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-4 py-2 bg-blue-50 text-prc-navy border border-blue-200 rounded-xl text-xs font-bold flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-prc-primary" />
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* CAREER OPPORTUNITIES */}
            {program.careerPaths && program.careerPaths.length > 0 && (
              <section className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-prc-primary uppercase tracking-wider">
                    Future Prospects
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-prc-navy mt-1">
                    Where Can This Degree Take You?
                  </h2>
                  <p className="text-xs text-slate-500">
                    Potential career trajectories and roles pursued by our graduates.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {program.careerPaths.map((career, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5"
                    >
                      <div className="flex items-center gap-2 text-prc-primary font-bold text-sm">
                        <Briefcase className="w-4 h-4" />
                        <span>{career.title}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {career.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ADMISSION REQUIREMENTS */}
            {program.admissionRequirements && (
              <section className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
                <h3 className="text-xl font-bold text-prc-navy flex items-center gap-2">
                  <FileText className="w-5 h-5 text-prc-primary" />
                  <span>Admission Requirements</span>
                </h3>

                <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <div>
                    <span className="font-bold">Required Academic Qualification: </span>
                    <span>{program.admissionRequirements.qualification}</span>
                  </div>
                  <div>
                    <span className="font-bold">Minimum Percentage: </span>
                    <span>{program.admissionRequirements.minPercentage}</span>
                  </div>
                </div>

                {program.admissionRequirements.documents && (
                  <div className="pt-2">
                    <h4 className="font-bold text-xs uppercase text-slate-600 mb-2">
                      Required Application Documents:
                    </h4>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {program.admissionRequirements.documents.map((doc, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            )}

            {/* FEE INFORMATION */}
            {program.fees && (
              <section className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-prc-navy flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-prc-primary" />
                  <span>Fee & Payment Schedule</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <span className="text-slate-500 block">Admission Fee:</span>
                    <span className="font-bold text-slate-900 text-sm">{program.fees.admissionFee}</span>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <span className="text-slate-500 block">Tuition Fee:</span>
                    <span className="font-bold text-slate-900 text-sm">{program.fees.tuitionFee}</span>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <span className="text-slate-500 block">Estimated Semester Fee:</span>
                    <span className="font-black text-prc-primary text-base">{program.fees.totalSemesterEstimate}</span>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <span className="text-slate-500 block">Installment Support:</span>
                    <span className="font-bold text-emerald-600 text-xs">Available upon request</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 italic">
                  * {program.fees.note}
                </p>
              </section>
            )}

            {/* SCHOLARSHIPS */}
            {program.scholarships && (
              <section className="p-6 sm:p-8 bg-blue-50/60 rounded-3xl border border-blue-200 space-y-3">
                <h3 className="text-lg font-bold text-prc-navy flex items-center gap-2">
                  <Gift className="w-5 h-5 text-prc-primary" />
                  <span>Scholarships Available for this Program</span>
                </h3>
                <ul className="space-y-1 text-xs text-slate-700">
                  {program.scholarships.map((sch, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-2 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-prc-primary shrink-0" />
                      <span>{sch}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* PROGRAM SPECIFIC FAQS */}
            {program.faqs && program.faqs.length > 0 && (
              <section className="space-y-4">
                <h3 className="text-xl font-bold text-prc-navy">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-3">
                  {program.faqs.map((faq, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2"
                    >
                      <h4 className="font-bold text-sm text-prc-navy flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-prc-primary shrink-0" />
                        <span>{faq.question}</span>
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed pl-6">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar (4 Cols) */}
          <div className="lg:col-span-4">
            <StickyApplyBar
              title={program.title}
              type="program"
              fee={program.fees?.totalSemesterEstimate}
              duration={program.duration}
              isComingSoon={program.isComingSoon}
            />
          </div>
        </div>
      </div>

      {/* RELATED PROGRAMS */}
      {relatedPrograms.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <SectionHeading
            badge="Explore More"
            title="Related Academic Programs"
            subtitle="Other degree paths aligned with computing, technology, and management."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPrograms.map((rp) => (
              <ProgramCard key={rp.id} program={rp} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
