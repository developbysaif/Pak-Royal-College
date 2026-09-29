import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Award,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Target,
  Eye,
  HeartHandshake,
  GraduationCap
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBanner from "@/components/PageHeroBanner";
import SectionHeading from "@/components/SectionHeading";
import FacultyCard from "@/components/FacultyCard";
import { faculty } from "@/data/faculty";
import { leadership } from "@/data/leadership";
import { collegeInfo } from "@/data/collegeInfo";

export const metadata = {
  title: "About Us | Pak Royal College",
  description:
    "Learn about Pak Royal College, our history, academic philosophy, institutional mission, leadership, and our commitment to future-ready education in Lahore."
};

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section with Full-Bleed Background Image */}
      <PageHeroBanner
        title="Education Designed for the Future"
        badge="ABOUT PAK ROYAL COLLEGE"
        urdu="جہاں مستقبل کی بنیاد رکھی جاتی ہے"
        description="Pak Royal College is a premier academic institution committed to cultivating visionary leaders, computing innovators, business strategists, and ethical scholars."
        bgImage="/images/hero_campus.jpg"
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />

      {/* Main Campus Image Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="relative h-72 sm:h-96 md:h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <Image
            src="/images/Pak Royal College view.jpeg"
            alt="Pak Royal College Main Campus View"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* SECTION: Our Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-prc-primary uppercase tracking-wider">
              Institutional Heritage
            </span>
            <h2 className="text-3xl font-extrabold text-prc-navy leading-tight">
              Our Story & Founding Purpose
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Established in 2024, Pak Royal College was envisioned to revolutionize tertiary education in Pakistan by synthesizing classical academic foundations with the rapid advancements of modern artificial intelligence, high-performance computing, and digital commerce.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Recognizing the gap between conventional university curricula and the demanding expectations of the modern global digital economy, the founders of Pak Royal College established an institution characterized by state-of-the-art laboratories, research-oriented faculty, and strong industry linkages.
            </p>
            <div className="pt-2">
              <div className="p-4 bg-prc-light rounded-2xl border border-blue-200">
                <div className="font-bold text-prc-navy text-sm">Official Brand Tagline</div>
                <div className="text-base text-prc-primary font-bold mt-0.5">
                  "{collegeInfo.tagline}"
                </div>
                <div className="urdu-font text-prc-navy text-base mt-1">
                  "{collegeInfo.taglineUrdu}"
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-2">
              <div className="text-3xl font-black text-prc-primary">100%</div>
              <div className="font-bold text-sm text-prc-navy">HEC Aligned</div>
              <p className="text-xs text-slate-500">Rigorous compliance with national undergraduate curricula.</p>
            </div>
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-2">
              <div className="text-3xl font-black text-prc-primary">11</div>
              <div className="font-bold text-sm text-prc-navy">Hi-Tech Labs</div>
              <p className="text-xs text-slate-500">GPU computing, networking, and digital studio facilities.</p>
            </div>
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-2">
              <div className="text-3xl font-black text-prc-primary">19+</div>
              <div className="font-bold text-sm text-prc-navy">Qualified Faculty</div>
              <p className="text-xs text-slate-500">PhD and MPhil qualified educators and industry advisors.</p>
            </div>
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-2">
              <div className="text-3xl font-black text-prc-primary">100%</div>
              <div className="font-bold text-sm text-prc-navy">Merit Concessions</div>
              <p className="text-xs text-slate-500">Up to 100% tuition scholarships for academic toppers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Mission, Vision & Values */}
      <section className="bg-white py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Foundational Pillars"
            title="Mission, Vision & Core Values"
            subtitle="The enduring principles that direct our teaching, research, and community service."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-prc-primary flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-prc-navy">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To deliver comprehensive, rigorous, and student-centered education that empowers learners with scientific knowledge, creative innovation, and ethical leadership required to excel in modern global careers.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-prc-primary flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-prc-navy">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To be recognized as a premier seat of learning in computing, artificial intelligence, business management, and allied disciplines, distinguished by research, student empowerment, and societal impact.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-prc-primary flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-prc-navy">Our Core Values</h3>
              <ul className="text-xs text-slate-600 space-y-2">
                <li>• Academic Integrity & Scholarly Rigor</li>
                <li>• Student Empowerment & Inclusivity</li>
                <li>• Technological Innovation & Research</li>
                <li>• Social Responsibility & Ethics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Academic Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Pedagogy"
          title="Our Academic Philosophy"
          subtitle="How learning thrives at Pak Royal College through practical immersion."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Student-Centered Learning",
              desc: "Interactive lecture environments where students actively question, experiment, and construct knowledge rather than passive absorption."
            },
            {
              title: "Practical & Applied Focus",
              desc: "Over 50% of instructional hours in computing and engineering courses are dedicated to laboratory simulations and project coding."
            },
            {
              title: "Technology & AI Integration",
              desc: "Embracing machine learning tools, digital classrooms, and cloud environments across both technical and business curricula."
            },
            {
              title: "Continuous Industry Engagement",
              desc: "Curricula reviewed regularly with enterprise tech executives to ensure direct relevance to contemporary hiring benchmarks."
            },
            {
              title: "Ethical & Holistic Development",
              desc: "Instilling deep moral responsibility, empathy, communication mastery, and civic leadership alongside technical competence."
            },
            {
              title: "Research & Capstone Innovation",
              desc: "Two-semester final year projects mentored by senior faculty, resulting in deployable software prototypes and research publications."
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-2 hover:border-prc-primary transition-all"
            >
              <h4 className="font-bold text-lg text-prc-navy">{item.title}</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: Founder's Message */}
      <section className="bg-gradient-to-br from-blue-50/80 via-white to-slate-50 py-16 border-y border-blue-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Founder Portrait Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <div className="relative h-96 sm:h-[430px] w-full">
                  <Image
                    src={leadership.message.image}
                    alt={leadership.message.author}
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-prc-navy/90 via-prc-navy/30 to-transparent" />

                  {/* Overlay Name Tag */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-300 block mb-1">
                      Founder & Patron-in-Chief
                    </span>
                    <h4 className="text-xl sm:text-2xl font-black">{leadership.message.author}</h4>
                    <p className="text-xs text-blue-200 mt-0.5">
                      {leadership.message.organization}, {leadership.message.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Message Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-prc-light text-prc-primary text-xs font-bold uppercase tracking-wider border border-blue-200">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Founder’s Message</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-prc-navy leading-tight">
                {leadership.message.title}
              </h2>

              <p className="text-sm font-bold text-prc-primary">
                {leadership.message.salutation}
              </p>

              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  It gives me immense pleasure to welcome you to <strong className="text-prc-navy">Pak Royal College</strong>, an institution established with a vision to provide quality, accessible, and career-oriented education to the youth of Sharaqpur Sharif and surrounding communities.
                </p>
                <p>
                  Our mission goes beyond academic success. We aim to create an environment where students gain knowledge, develop practical skills, build confidence, and prepare themselves for the challenges of higher education and professional life.
                </p>
                <p>
                  At Pak Royal College, we are committed to providing opportunities in <strong className="text-prc-navy">Intermediate Education, Allied Health Sciences, Undergraduate Education, Nursing, Information Technology, and Professional & Digital Skills</strong>.
                </p>
              </div>

              {/* Dream Motto Callout */}
              <div className="p-4 sm:p-5 rounded-2xl bg-royal-gradient text-white shadow-md space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-amber-300 font-extrabold block">
                  Our Guiding Vision
                </span>
                <div className="text-lg sm:text-xl font-black">
                  “Hamara Khawab – Parha Likha Sharaqpur.”
                </div>
                <div className="urdu-font text-base sm:text-lg text-blue-100">
                  ہمارا خواب — پڑھا لکھا شرقپور
                </div>
              </div>

              {/* Closing */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200">
                <div>
                  <div className="font-extrabold text-prc-navy text-base">{leadership.message.author}</div>
                  <div className="text-xs text-slate-500 font-semibold">
                    {leadership.message.designation} — {leadership.message.location}
                  </div>
                </div>

                <Link
                  href="/about/leadership"
                  className="inline-flex items-center gap-2 bg-prc-primary hover:bg-prc-navy text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-md transition-all hover:scale-105"
                >
                  <span>Read Full Message</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-black text-prc-navy">Distinguished Faculty</h3>
            <p className="text-xs sm:text-sm text-slate-500">Learn from accomplished researchers and educators.</p>
          </div>
          <Link href="/about/faculty" className="text-xs font-bold text-prc-primary hover:underline">
            View All Faculty →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.slice(0, 4).map((member) => (
            <FacultyCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-royal-gradient rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl space-y-4">
          <h2 className="text-2xl sm:text-4xl font-black">
            Ready to Begin Your Future at Pak Royal College?
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
            Explore our undergraduate degrees and professional diploma tracks to take the first step.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/programs"
              className="bg-white text-prc-navy hover:bg-prc-light font-bold px-7 py-3 rounded-full text-sm shadow-md transition-all hover:scale-105"
            >
              Explore Academic Programs
            </Link>
            <Link
              href="/apply"
              className="bg-white/20 hover:bg-white/30 text-white font-bold px-6 py-3 rounded-full text-sm backdrop-blur-md border border-white/30 transition-all hover:scale-105"
            >
              Apply Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
