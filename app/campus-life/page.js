import Image from "next/image";
import Link from "next/link";
import {
  Building,
  Cpu,
  BookOpen,
  Award,
  Users,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  GraduationCap
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBanner from "@/components/PageHeroBanner";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Campus Life | Pak Royal College",
  description:
    "Experience campus life at Pak Royal College: high-tech AI labs, tiered smart classrooms, expansive digital library, sports athletics, and vibrant student clubs."
};

const campusFacilities = [
  {
    title: "High-Performance GPU AI & Computing Laboratories",
    category: "Computing & Tech",
    description: "Equipped with dedicated NVIDIA GPU accelerators, multi-monitor workstations, and high-speed fiber internet for deep learning and software engineering.",
    image: "/images/hero_ai_lab.jpg"
  },
  {
    title: "Executive Smart Classrooms & Lecture Theaters",
    category: "Academic Facilities",
    description: "Acoustically treated tiered lecture theaters with interactive smart boards, HD projection, and ergonomic seating.",
    image: "/images/course_bba.jpg"
  },
  {
    title: "Central Digital Library & Research Commons",
    category: "Knowledge Center",
    description: "Over 10,000 physical volumes, access to HEC digital library journals, quiet research carrels, and private group study rooms.",
    image: "/images/hero_library.jpg"
  },
  {
    title: "Robotics & Innovation Prototyping Hub",
    category: "Engineering & Tech",
    description: "Hardware microcontrollers, robotic arms, 3D printing equipment, and IoT sensor benches for hands-on engineering sprints.",
    image: "/images/course_robotics.jpg"
  },
  {
    title: "Software Engineering & App Development Studio",
    category: "Software Incubation",
    description: "Collaborative developer sprint pods with glass architecture whiteboards and agile development environments.",
    image: "/images/course_coding.jpg"
  },
  {
    title: "UI/UX Design & Creative Studio",
    category: "Creative Arts",
    description: "Apple Studio displays, Wacom drawing tablets, and creative UI/UX prototyping workspaces.",
    image: "/images/course_design.jpg"
  }
];

export default function CampusLifePage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section with Full-Bleed Background Image */}
      <PageHeroBanner
        title="Life at Pak Royal College"
        badge="CAMPUS EXPERIENCE"
        urdu="جدید سہولیات اور سرسبز، پروقار کیمپس"
        description="Explore our modern campus infrastructure, computing laboratories, sports arenas, and vibrant extracurricular student societies."
        bgImage="/images/hero_campus.jpg"
        breadcrumbs={[{ label: "Campus Life", href: "/campus-life" }]}
      />

      {/* Facilities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campusFacilities.map((fac, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl hover:border-prc-primary transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 group"
            >
              <div>
                <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={fac.image}
                    alt={fac.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-prc-primary text-white font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {fac.category}
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="font-extrabold text-lg text-prc-navy group-hover:text-prc-primary transition-colors">
                    {fac.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {fac.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation to Student Life & Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4 hover:border-prc-primary transition-all">
            <h3 className="text-2xl font-black text-prc-navy">Student Life & Societies</h3>
            <p className="text-sm text-slate-600">
              Discover student-led computing clubs, sports championships, literary debates, and youth festivals.
            </p>
            <Link
              href="/campus-life/student-life"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-prc-primary hover:underline"
            >
              <span>Explore Student Societies →</span>
            </Link>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4 hover:border-prc-primary transition-all">
            <h3 className="text-2xl font-black text-prc-navy">Campus Photo Gallery</h3>
            <p className="text-sm text-slate-600">
              View high-resolution photography of our laboratories, sports galas, classrooms, and convocation ceremonies.
            </p>
            <Link
              href="/campus-life/gallery"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-prc-primary hover:underline"
            >
              <span>Open Campus Gallery →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-royal-gradient rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black">
            Experience Campus First-Hand
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
            Schedule a campus tour with our admissions team and experience our laboratories in person.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="bg-white text-prc-navy hover:bg-prc-light font-bold px-7 py-3 rounded-full text-sm inline-block shadow-md transition-all hover:scale-105"
            >
              Schedule Campus Visit →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
