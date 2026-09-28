import Image from "next/image";
import Link from "next/link";
import { Sparkles, Code2, ShieldCheck, TrendingUp, Palette, Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBanner from "@/components/PageHeroBanner";
import SectionHeading from "@/components/SectionHeading";
import ProgramCard from "@/components/ProgramCard";
import { programs } from "@/data/programs";

export const metadata = {
  title: "IT Skills & Professional Bootcamps | Pak Royal College",
  description:
    "Master high-demand tech skills with hands-on bootcamps in Full-Stack Web Development, Python & AI, Cyber Security, Digital Marketing, and UI/UX Design."
};

export default function ItSkillsProgramsPage() {
  const itPrograms = programs.filter((p) => p.category === "it-skills" || p.category === "professional");

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <PageHeroBanner
        title="IT Skills & Bootcamps"
        badge="HIGH-INCOME DIGITAL CAREERS"
        urdu="جدید آئی ٹی اسکلز اور پروفیشنل بوٹ کیمپس"
        description="Accelerate your career and freelance earning potential with hands-on, project-driven certifications taught by seasoned industry software engineers, AI researchers, and growth marketers."
        bgImage="/images/program_it_web_dev.jpg"
        breadcrumbs={[
          { label: "Programs", href: "/programs" },
          { label: "IT Skills", href: "/programs/it-skills" }
        ]}
      />

      {/* Stats Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 border-r border-slate-100 last:border-0">
            <div className="text-2xl sm:text-3xl font-black text-prc-primary">4–6 Months</div>
            <div className="text-xs font-semibold text-slate-500">Accelerated Bootcamps</div>
          </div>
          <div className="p-4 border-r border-slate-100 last:border-0">
            <div className="text-2xl sm:text-3xl font-black text-prc-primary">100% Practical</div>
            <div className="text-xs font-semibold text-slate-500">Lab & Project Based</div>
          </div>
          <div className="p-4 border-r border-slate-100 last:border-0">
            <div className="text-2xl sm:text-3xl font-black text-prc-primary">Freelance</div>
            <div className="text-xs font-semibold text-slate-500">Upwork & Fiverr Training</div>
          </div>
          <div className="p-4">
            <div className="text-2xl sm:text-3xl font-black text-emerald-600">Weekend & Eve</div>
            <div className="text-xs font-semibold text-slate-500">Flexible Timings</div>
          </div>
        </div>
      </section>

      {/* IT Skills Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="High-Income Tech Tracks"
          title="Industry-Standard IT Certifications"
          subtitle="Explore modern certifications below to review course modules, live project portfolios, and career opportunities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itPrograms.map((prog) => (
            <ProgramCard key={prog.id} program={prog} />
          ))}
        </div>
      </section>

      {/* Why IT Bootcamps at PRC */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="px-3.5 py-1 rounded-full bg-white text-prc-primary text-xs font-bold uppercase tracking-wider border border-slate-200">
              Career Advantage
            </span>
            <h2 className="text-3xl font-black text-prc-navy mt-2">
              Why Learn IT Skills at Pak Royal College?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-prc-primary flex items-center justify-center font-bold">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-prc-navy">Live Production Projects</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Build full-stack web platforms, AI models, and ad campaigns for your live portfolio to impress international recruiters.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-prc-primary flex items-center justify-center font-bold">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-prc-navy">Freelance & Job Placement</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Dedicated Upwork, Fiverr, and LinkedIn masterclasses along with mock technical interview sessions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-prc-primary flex items-center justify-center font-bold">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-prc-navy">GPU & Cloud Labs</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Access high-speed Nvidia RTX GPU workstations and AWS/Docker cloud environments for practical experimentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-royal-gradient rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black">
            Enroll in Upcoming Weekend & Evening Batches
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
            Limited seats per batch to guarantee one-on-one lab guidance and mentorship.
          </p>
          <div className="pt-2">
            <Link
              href="/apply"
              className="bg-white text-prc-navy hover:bg-prc-light font-bold px-8 py-3.5 rounded-full text-sm inline-block shadow-lg transition-all hover:scale-105"
            >
              Reserve Your Seat Online →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
