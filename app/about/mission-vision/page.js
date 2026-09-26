import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Eye,
  HeartHandshake,
  Sparkles,
  Compass,
  CheckCircle2,
  TrendingUp,
  Award,
  BookOpen,
  ArrowRight
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBanner from "@/components/PageHeroBanner";
import SectionHeading from "@/components/SectionHeading";
import { collegeInfo } from "@/data/collegeInfo";

export const metadata = {
  title: "Mission, Vision & Values | Pak Royal College",
  description:
    "Explore the mission, vision, core values, academic philosophy, and institutional development goals of Pak Royal College."
};

export default function MissionVisionPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section with Full-Bleed Background Image */}
      <PageHeroBanner
        title="Our Mission, Vision & Values"
        badge="INSTITUTIONAL PURPOSE"
        urdu="علم، تحقیق اور باوقار مستقبل کا سفر"
        description="Guiding every pedagogical innovation, academic degree, research endeavor, and community service initiative at Pak Royal College."
        bgImage="/images/hero_library.jpg"
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Mission & Vision", href: "/about/mission-vision" }
        ]}
      />

      {/* Main Mission & Vision Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-200 space-y-4 relative overflow-hidden group hover:border-prc-primary transition-all">
            <div className="w-16 h-16 rounded-2xl bg-prc-light text-prc-primary flex items-center justify-center group-hover:bg-prc-primary group-hover:text-white transition-colors">
              <Target className="w-8 h-8" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-prc-primary">
              Core Purpose
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-prc-navy">
              Our Mission
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              To provide transformative higher education in computing, artificial intelligence, business management, and foundational sciences by synthesizing academic excellence with experiential lab learning, fostering critical inquiry, ethical character, and global professional competence.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-200 space-y-4 relative overflow-hidden group hover:border-prc-primary transition-all">
            <div className="w-16 h-16 rounded-2xl bg-prc-light text-prc-primary flex items-center justify-center group-hover:bg-prc-primary group-hover:text-white transition-colors">
              <Eye className="w-8 h-8" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-prc-primary">
              Aspirational Horizon
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-prc-navy">
              Our Vision
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              To establish Pak Royal College as a premier center of academic distinction, recognized for technological innovation, industry integration, impactful research, and for producing graduates who serve as catalysts for social and economic progress.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Guiding Principles"
          title="Our Core Values"
          subtitle="The moral and intellectual bedrock defining life at Pak Royal College."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Academic Integrity",
              desc: "Upholding absolute honesty, rigorous intellectual standards, and authentic scholarly pursuit in every classroom and laboratory."
            },
            {
              title: "Innovation & AI Literacy",
              desc: "Embracing emerging technologies, modern computational tools, and creative problem-solving across all disciplines."
            },
            {
              title: "Student Empowerment",
              desc: "Prioritizing student growth, active mentorship, holistic wellbeing, and career leadership readiness."
            },
            {
              title: "Social & Civic Ethics",
              desc: "Cultivating empathy, national civic duty, environmental sustainability, and ethical professional conduct."
            }
          ].map((val, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3 hover:shadow-xl hover:border-prc-primary transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-prc-primary flex items-center justify-center font-black text-sm">
                0{idx + 1}
              </div>
              <h3 className="font-extrabold text-lg text-prc-navy">{val.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Future Development Goals Timeline */}
      <section className="bg-white py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Strategic Roadmap"
            title="Institutional Development Goals"
            subtitle="Our planned trajectory toward academic growth and technological leadership."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-prc-primary">
                Phase 1 (2024–2026)
              </div>
              <h4 className="font-bold text-lg text-prc-navy">Foundation & Infrastructure</h4>
              <ul className="text-xs text-slate-600 space-y-2">
                <li>• Establishment of state-of-the-art GPU AI Computing Lab</li>
                <li>• Accreditation alignment with HEC and BISE</li>
                <li>• Launch of 7 BS undergraduate degrees and 3 professional diplomas</li>
              </ul>
            </div>

            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-prc-primary">
                Phase 2 (2027–2028)
              </div>
              <h4 className="font-bold text-lg text-prc-navy">Industry Incubation & Research</h4>
              <ul className="text-xs text-slate-600 space-y-2">
                <li>• Launch of student business & tech startup incubator</li>
                <li>• International university student exchange agreements</li>
                <li>• Expansion of biomedical computing and robotics labs</li>
              </ul>
            </div>

            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-prc-primary">
                Phase 3 (2029+)
              </div>
              <h4 className="font-bold text-lg text-prc-navy">Postgraduate Degree Programs</h4>
              <ul className="text-xs text-slate-600 space-y-2">
                <li>• Introduction of MS and MPhil degree tracks in AI and Management</li>
                <li>• National tech research symposium and journal publications</li>
                <li>• Expansion to dedicated satellite campus facility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-royal-gradient rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black">
            Join Our Vision for Modern Higher Education
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
            Applications are open for Fall 2026 undergraduate programs.
          </p>
          <div className="pt-2">
            <Link
              href="/apply"
              className="bg-white text-prc-navy hover:bg-prc-light font-bold px-7 py-3 rounded-full text-sm inline-block shadow-md transition-all hover:scale-105"
            >
              Apply Online Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
