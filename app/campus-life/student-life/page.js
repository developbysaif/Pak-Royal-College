import Image from "next/image";
import Link from "next/link";
import {
  Cpu,
  Award,
  BookOpen,
  Sparkles,
  Users,
  Compass,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBanner from "@/components/PageHeroBanner";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Student Life & Societies | Pak Royal College",
  description:
    "Discover student clubs, computing societies, athletics, sports championships, debates, and leadership activities at Pak Royal College."
};

const societies = [
  {
    title: "Royal Computing & AI Society",
    category: "Technology",
    desc: "Organizes 24-hour coding hackathons, AI algorithmic challenges, open-source workshops, and developer meetups.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Royal Sports Club & Athletics",
    category: "Sports",
    desc: "Hosts inter-departmental cricket leagues, futsal cups, badminton championships, and annual athletic tournaments.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Literary & Debating Society",
    category: "Literature & Arts",
    desc: "Fosters bilingual public speaking, parliamentary debates, poetry recitations, and Model United Nations (MUN) delegations.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Creative Media & Design Guild",
    category: "Media & Arts",
    desc: "Manages college video podcasts, event photography, campus newsletters, and UI/UX design critiques.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Youth Entrepreneurship Society (YES)",
    category: "Business & Startups",
    desc: "Connects aspiring founders with venture capitalists, startup incubation mentors, and business plan competitions.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Community Outreach & Social Welfare",
    category: "Civic Service",
    desc: "Conducts blood donation drives, tree plantation campaigns, and digital literacy workshops for underprivileged youth.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
  }
];

export default function StudentLifePage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section with Full-Bleed Background Image */}
      <PageHeroBanner
        title="Student Life & Societies"
        badge="HOLISTIC STUDENT DEVELOPMENT"
        urdu="غیر نصابی سرگرمیاں، کھیل اور طلباء کی سوسائٹیز"
        description="Beyond the classroom, life at Pak Royal College is defined by vibrant clubs, athletics, leadership development, and unforgettable friendships."
        bgImage="/images/hero_careers.jpg"
        breadcrumbs={[
          { label: "Campus Life", href: "/campus-life" },
          { label: "Student Life", href: "/campus-life/student-life" }
        ]}
      />

      {/* Societies Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {societies.map((soc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl hover:border-prc-primary transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 group"
            >
              <div>
                <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={soc.image}
                    alt={soc.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-prc-primary text-white font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {soc.category}
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="font-extrabold text-lg text-prc-navy group-hover:text-prc-primary transition-colors">
                    {soc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {soc.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100">
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Active Society
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-royal-gradient rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black">
            Ready to Experience Vibrant Campus Life?
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
            Join Pak Royal College for the upcoming Fall 2026 academic session.
          </p>
          <div className="pt-2">
            <Link
              href="/apply"
              className="bg-white text-prc-navy hover:bg-prc-light font-bold px-8 py-3.5 rounded-full text-sm inline-block shadow-lg transition-all hover:scale-105"
            >
              Apply Online Now →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
