import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, Users, BookOpen, Sparkles, Mail } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBanner from "@/components/PageHeroBanner";
import SectionHeading from "@/components/SectionHeading";
import { leadership } from "@/data/leadership";

export const metadata = {
  title: "Leadership & Governance | Pak Royal College",
  description:
    "Meet the Board of Governors, Principal, Deans, and Academic Council guiding Pak Royal College with educational integrity and vision."
};

export default function LeadershipPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section with Full-Bleed Background Image */}
      <PageHeroBanner
        title="Leadership & Governance"
        badge="INSTITUTIONAL GOVERNANCE"
        urdu="قیادت، تدبر اور باوقار تعلیمی نظام"
        description="Guided by distinguished academic visionaries, researchers, and administrators dedicated to fostering an environment of integrity and scholastic excellence."
        bgImage="/images/campus_business.jpg"
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Leadership", href: "/about/leadership" }
        ]}
      />

      {/* Principal & Executive Director Message */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 relative h-96 rounded-3xl overflow-hidden shadow-lg border-4 border-slate-100">
              <Image
                src={leadership.message.image}
                alt={leadership.message.author}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-prc-light text-prc-primary text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Executive Address</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-prc-navy">
                {leadership.message.title}
              </h2>

              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                {leadership.message.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100">
                <div className="font-extrabold text-prc-navy text-lg">
                  {leadership.message.author}
                </div>
                <div className="text-xs text-prc-primary font-bold">
                  {leadership.message.designation}
                </div>
                <div className="text-xs text-slate-500">
                  {leadership.message.qualification}
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
