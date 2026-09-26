import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock,
  Layers,
  Sparkles,
  Award,
  CheckCircle2,
  Calendar,
  DollarSign,
  HelpCircle,
  FileText,
  Briefcase,
  Terminal,
  ShieldCheck,
  Download,
  ArrowRight
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBanner from "@/components/PageHeroBanner";
import SectionHeading from "@/components/SectionHeading";
import CourseModuleAccordion from "@/components/CourseModuleAccordion";
import StickyApplyBar from "@/components/StickyApplyBar";
import StructuredData from "@/components/StructuredData";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";
import { collegeInfo } from "@/data/collegeInfo";

export async function generateStaticParams() {
  return courses.map((c) => ({
    slug: c.slug
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return {
      title: "Course Not Found | Pak Royal College"
    };
  }

  return {
    title: `${course.title} | Pak Royal College`,
    description: course.shortDescription,
    openGraph: {
      title: `${course.title} | Pak Royal College`,
      description: course.shortDescription,
      images: [{ url: course.image }]
    }
  };
}

export default async function CourseDetailPage({ params }) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  const relatedCourses = courses
    .filter((c) => c.slug !== slug && c.category === course.category)
    .slice(0, 3);

  return (
    <div className="space-y-16 pb-20">
      <StructuredData type="course" data={course} />

      {/* Hero Section with Full-Bleed Background Image */}
      <PageHeroBanner
        title={course.title}
        badge={course.categoryLabel || course.category}
        description={course.shortDescription}
        bgImage={course.image}
        breadcrumbs={[
          { label: "Courses", href: "/courses" },
          { label: course.category, href: `/courses?cat=${course.category}` },
          { label: course.title, href: `/courses/${course.slug}` }
        ]}
      >
        <div className="pt-3 flex flex-wrap items-center gap-4">
          <Link
            href="/apply"
            className="bg-white text-prc-navy hover:bg-prc-light font-black px-7 py-3.5 rounded-full text-sm shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-prc-primary" />
            <span>Enroll in Course</span>
          </Link>

          <Link
            href="/contact"
            className="bg-white/15 hover:bg-white/25 text-white font-bold px-6 py-3.5 rounded-full text-sm backdrop-blur-md border border-white/30 transition-all hover:scale-105"
          >
            Contact Admissions
          </Link>
        </div>
      </PageHeroBanner>

      {/* QUICK INFORMATION CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3 border-r border-slate-100 last:border-0">
            <div className="text-xs font-semibold text-slate-400 uppercase">Duration</div>
            <div className="text-xs sm:text-sm font-bold text-prc-primary mt-1">{course.duration}</div>
          </div>
          <div className="p-3 border-r border-slate-100 last:border-0">
            <div className="text-xs font-semibold text-slate-400 uppercase">Difficulty Level</div>
            <div className="text-xs sm:text-sm font-bold text-prc-navy mt-1">{course.level}</div>
          </div>
          <div className="p-3 border-r border-slate-100 last:border-0">
            <div className="text-xs font-semibold text-slate-400 uppercase">Study Mode</div>
            <div className="text-xs sm:text-sm font-bold text-prc-navy mt-1">{course.mode}</div>
          </div>
          <div className="p-3">
            <div className="text-xs font-semibold text-slate-400 uppercase">Certification</div>
            <div className="text-xs sm:text-sm font-bold text-emerald-600 mt-1">Awarded at Completion</div>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Sticky Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content (8 Cols) */}
          <div className="lg:col-span-8 space-y-16">
            {/* COURSE OVERVIEW */}
            <section className="space-y-4">
              <span className="text-xs font-bold text-prc-primary uppercase tracking-wider">
                Course Syllabus
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-prc-navy">
                Course Overview
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {course.overview}
              </p>
            </section>

            {/* WHAT YOU WILL LEARN */}
            {course.whatYouWillLearn && (
              <section className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-prc-primary uppercase tracking-wider">
                    Core Competencies
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-prc-navy mt-1">
                    What You Will Learn
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.whatYouWillLearn.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2"
                    >
                      <h4 className="font-bold text-sm text-prc-navy flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{item.title}</span>
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed pl-6">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* COURSE MODULES ACCORDION */}
            {course.modules && (
              <section className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-prc-primary uppercase tracking-wider">
                    Weekly Modules
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-prc-navy mt-1">
                    Detailed Course Modules & Tasks
                  </h2>
                </div>

                <CourseModuleAccordion modules={course.modules} />
              </section>
            )}

            {/* TOOLS & TECHNOLOGIES */}
            {course.tools && course.tools.length > 0 && (
              <section className="space-y-4">
                <h3 className="text-xl font-bold text-prc-navy">
                  Tools & Technologies Mastered
                </h3>
                <div className="flex flex-wrap gap-3">
                  {course.tools.map((tool, tIdx) => (
                    <div
                      key={tIdx}
                      className="p-3 bg-white border border-slate-200 rounded-2xl flex items-center gap-2.5 shadow-sm"
                    >
                      <div className="relative w-6 h-6">
                        <Image
                          src={tool.logo}
                          alt={tool.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs font-bold text-slate-800">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* BUILD REAL PROJECTS */}
            {course.projects && course.projects.length > 0 && (
              <section className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-prc-primary uppercase tracking-wider">
                    Portfolio Building
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-prc-navy mt-1">
                    Build Real Showcase Projects
                  </h2>
                </div>

                <div className="space-y-4">
                  {course.projects.map((proj, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-2"
                    >
                      <h4 className="font-bold text-base text-prc-navy">
                        {proj.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {proj.description}
                      </p>
                      <div className="pt-2 text-xs font-semibold text-prc-primary">
                        Skills Applied: {proj.skills}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* WHO SHOULD ENROLL */}
            {course.whoShouldEnroll && (
              <section className="space-y-4">
                <h3 className="text-xl font-bold text-prc-navy">
                  Who Should Enroll in this Course?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {course.whoShouldEnroll.map((aud, aIdx) => (
                    <div key={aIdx} className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-1">
                      <div className="font-bold text-sm text-prc-navy">{aud.title}</div>
                      <p className="text-xs text-slate-500">{aud.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* PREREQUISITES */}
            {course.prerequisites && (
              <section className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <h4 className="font-bold text-sm text-prc-navy flex items-center gap-2">
                  <FileText className="w-4 h-4 text-prc-primary" />
                  <span>Course Prerequisites</span>
                </h4>
                <p className="text-xs text-slate-600 pl-6">
                  {course.prerequisites}
                </p>
              </section>
            )}

            {/* CERTIFICATION */}
            {course.certificate && (
              <section className="p-6 bg-blue-50/70 rounded-2xl border border-blue-200 flex items-start gap-4">
                <Award className="w-8 h-8 text-prc-primary shrink-0" />
                <div className="space-y-1 text-xs text-prc-navy">
                  <div className="font-bold text-sm">Official Institutional Certificate</div>
                  <p>{course.certificate}</p>
                </div>
              </section>
            )}

            {/* COURSE SCHEDULE & FEE */}
            <section className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-prc-navy flex items-center gap-2">
                <Calendar className="w-5 h-5 text-prc-primary" />
                <span>Class Schedule & Fee Details</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 bg-slate-50 rounded-xl">
                  <span className="text-slate-500 block">Classes Per Week:</span>
                  <span className="font-bold text-slate-900">{course.classesPerWeek}</span>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl">
                  <span className="text-slate-500 block">Class Timing:</span>
                  <span className="font-bold text-slate-900">{course.timing}</span>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl">
                  <span className="text-slate-500 block">Total Course Fee:</span>
                  <span className="font-black text-prc-primary text-base">{course.fee?.amount}</span>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl">
                  <span className="text-slate-500 block">Installment Options:</span>
                  <span className="font-bold text-slate-900">{course.fee?.installments}</span>
                </div>
              </div>
            </section>

            {/* FAQS */}
            {course.faqs && course.faqs.length > 0 && (
              <section className="space-y-4">
                <h3 className="text-xl font-bold text-prc-navy">
                  Course FAQs
                </h3>
                <div className="space-y-3">
                  {course.faqs.map((faq, fIdx) => (
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
              title={course.title}
              type="course"
              fee={course.fee?.amount}
              duration={course.duration}
            />
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-royal-gradient rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black">
            Ready to Start Learning {course.title}?
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
            Enroll today to reserve your seat in the upcoming batch.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/apply"
              className="bg-white text-prc-navy hover:bg-prc-light font-bold px-8 py-3.5 rounded-full text-sm inline-block shadow-lg transition-all hover:scale-105"
            >
              Enroll Online →
            </Link>
            <Link
              href="/contact"
              className="bg-white/20 hover:bg-white/30 text-white font-bold px-6 py-3.5 rounded-full text-sm backdrop-blur-md border border-white/30 transition-all hover:scale-105"
            >
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
