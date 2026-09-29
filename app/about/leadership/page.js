import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, Users, BookOpen, Sparkles, Mail } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBanner from "@/components/PageHeroBanner";
import SectionHeading from "@/components/SectionHeading";
import { leadership } from "@/data/leadership";

export const metadata = {
  title: "Founder’s Message & Leadership | Pak Royal College",
  description:
    "Official message from Haji Muhammad Ashiq, Founder of Pak Royal College (Pvt.) Ltd. — “Hamara Khawab – Parha Likha Sharaqpur.”"
};

export default function LeadershipPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section with Full-Bleed Background Image */}
      <PageHeroBanner
        title="Founder’s Message & Leadership"
        badge="FOUNDER’S VISION"
        urdu="ہمارا خواب — پڑھا لکھا شرقپور"
        description="A message from Haji Muhammad Ashiq, Founder of Pak Royal College, dedicated to empowering the youth of Sharaqpur Sharif with world-class education."
        bgImage="/images/campus_business.jpg"
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Founder’s Message", href: "/about/leadership" }
        ]}
      />

      {/* Founder's Message */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="relative h-96 sm:h-[450px] rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100">
                <Image
                  src={leadership.message.image}
                  alt={leadership.message.author}
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-prc-navy/90 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-300 block mb-1">
                    Founder & Patron-in-Chief
                  </span>
                  <h3 className="text-2xl font-black">{leadership.message.author}</h3>
                  <p className="text-xs text-blue-200 mt-0.5">
                    {leadership.message.organization}, {leadership.message.location}
                  </p>
                </div>
              </div>

              {/* Founder Motto Card */}
              <div className="p-5 rounded-2xl bg-royal-gradient text-white shadow-md space-y-1.5 text-center">
                <span className="text-[11px] uppercase tracking-wider text-amber-300 font-extrabold block">
                  Our Dream & Mission
                </span>
                <div className="text-lg sm:text-xl font-black">
                  “Hamara Khawab – Parha Likha Sharaqpur.”
                </div>
                <div className="urdu-font text-lg text-blue-100">
                  ہمارا خواب — پڑھا لکھا شرقپور
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-prc-light text-prc-primary text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Founder’s Address</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-prc-navy">
                {leadership.message.title}
              </h2>

              <p className="text-base font-extrabold text-prc-primary">
                {leadership.message.salutation}
              </p>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  It gives me immense pleasure to welcome you to <strong className="text-prc-navy">Pak Royal College</strong>, an institution established with a vision to provide quality, accessible, and career-oriented education to the youth of Sharaqpur Sharif and surrounding communities.
                </p>

                <p>
                  Our mission goes beyond academic success. We aim to create an environment where students gain knowledge, develop practical skills, build confidence, and prepare themselves for the challenges of higher education and professional life.
                </p>

                <p>
                  At Pak Royal College, we are committed to providing opportunities in <strong className="text-prc-navy">Intermediate Education, Allied Health Sciences, Undergraduate Education, Nursing, Information Technology, and Professional & Digital Skills</strong>. Through qualified faculty, modern learning facilities, practical training, and a student-focused approach, we strive to help every learner discover and achieve their potential.
                </p>

                <p>
                  I firmly believe that education is the foundation of a stronger society. Our dream is simple yet meaningful:
                </p>

                <div className="p-4 rounded-xl bg-blue-50 border-l-4 border-prc-primary font-black text-prc-navy text-lg italic">
                  “Hamara Khawab – Parha Likha Sharaqpur.”
                </div>

                <p>
                  I invite students and parents to become part of the Pak Royal College community and join us in building a future filled with knowledge, skills, opportunities, and success.
                </p>

                <p className="font-extrabold text-prc-navy">
                  Pak Royal College – A Place Where Futures Begin.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-1">
                <div className="font-black text-prc-navy text-xl">
                  {leadership.message.author}
                </div>
                <div className="text-sm text-prc-primary font-bold">
                  {leadership.message.designation}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {leadership.message.location}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Structure */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Administrative Framework"
          title="Institutional Governance Bodies"
          subtitle="Three interconnected councils ensuring academic rigor, infrastructural growth, and corporate relevance."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadership.governance.map((gov, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4 hover:border-prc-primary hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-prc-light text-prc-primary flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-prc-navy">{gov.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{gov.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Board & Academic Leadership Team */}
      <section className="bg-white py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Executive Council"
            title="Board of Governors & Directorate"
            subtitle="Senior leadership overseeing institutional planning, academic standards, and student affairs."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.boardMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between hover:-translate-y-1 group"
              >
                <div>
                  <div className="relative h-64 w-full bg-slate-200 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="font-extrabold text-base text-prc-navy group-hover:text-prc-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold text-prc-accent">{member.role}</p>
                    <p className="text-xs text-slate-600 font-medium">{member.qualification}</p>
                    <p className="text-[11px] text-slate-500 pt-1">{member.experience}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-royal-gradient rounded-3xl p-8 text-white text-center shadow-xl space-y-4">
          <h3 className="text-2xl font-black">Explore Our Academic Faculty</h3>
          <p className="text-xs sm:text-sm text-slate-200 max-w-lg mx-auto">
            Meet the professors and researchers leading lectures and laboratory discovery across departments.
          </p>
          <div className="pt-2">
            <Link
              href="/about/faculty"
              className="bg-white text-prc-navy hover:bg-prc-light font-bold px-6 py-3 rounded-full text-xs sm:text-sm inline-block shadow-md transition-all hover:scale-105"
            >
              View Faculty Directory →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
