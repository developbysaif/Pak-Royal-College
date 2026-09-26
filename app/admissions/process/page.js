import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  CheckCircle2,
  FileText,
  Upload,
  UserCheck,
  Award,
  Sparkles,
  ArrowRight,
  HelpCircle
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBanner from "@/components/PageHeroBanner";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Admission Process Timeline | Pak Royal College",
  description:
    "Follow the clear 7-step admission timeline at Pak Royal College from selecting your program to fee submission and freshmen orientation."
};

const timelineSteps = [
  {
    step: "Step 01",
    title: "Choose Your Desired Program",
    desc: "Explore our undergraduate BS degrees, 1-year professional diplomas, or short bootcamps to find the academic pathway matching your career ambition.",
    icon: Compass
  },
  {
    step: "Step 02",
    title: "Verify Eligibility Criteria",
    desc: "Confirm that your Intermediate (FSc / ICS / FA / I.Com / A-Levels) percentage meets the minimum criteria (50% for Computing, 45% for Business & Arts).",
    icon: CheckCircle2
  },
  {
    step: "Step 03",
    title: "Complete Online Application",
    desc: "Fill out the 6-step online registration form at /apply with your personal information and previous academic marks.",
    icon: FileText
  },
  {
    step: "Step 04",
    title: "Upload & Verify Documents",
    desc: "Submit scanned copies of your Matric certificate, Intermediate result card, CNIC / B-Form, and passport photographs.",
    icon: Upload
  },
  {
    step: "Step 05",
    title: "Application Review & Merit List",
    desc: "The Directorate of Admissions evaluates all submitted applications against official merit criteria and publishes merit selections.",
    icon: UserCheck
  },
  {
    step: "Step 06",
    title: "Admission Offer & Fee Deposit",
    desc: "Successful candidates receive an official admission offer letter along with their customized bank fee challan for semester fee submission.",
    icon: Award
  },
  {
    step: "Step 07",
    title: "Enrollment & Freshmen Orientation",
    desc: "Submit paid fee challan, receive your permanent Student Roll Number and official college ID card, and attend Freshmen Orientation Day!",
    icon: Sparkles
  }
];

export default function AdmissionProcessPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section with Full-Bleed Background Image */}
      <PageHeroBanner
        title="Admission Process Roadmap"
        badge="ENROLLMENT TIMELINE"
        urdu="داخلے کے مراحل کی تفصیلی رہنمائی"
        description="A transparent, step-by-step pathway from your first online inquiry to receiving your official student identity and commencing campus lectures."
        bgImage="/images/hero_campus.jpg"
        breadcrumbs={[
          { label: "Admissions", href: "/admissions" },
          { label: "Admission Process", href: "/admissions/process" }
        ]}
      />

      {/* Visual Timeline Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200 space-y-8">
          <div className="space-y-8 relative">
            {/* Connecting Vertical Line on Desktop */}
            <div className="hidden sm:block absolute top-6 bottom-6 left-8 w-0.5 bg-blue-200 z-0" />

            {timelineSteps.map((st, idx) => {
              const Icon = st.icon;
              return (
                <div
                  key={idx}
                  className="relative z-10 flex flex-col sm:flex-row items-start gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-prc-primary hover:bg-white hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-prc-primary text-white flex items-center justify-center shrink-0 shadow-md">
                    <Icon className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-black text-prc-primary uppercase tracking-wider bg-blue-50 px-2.5 py-0.5 rounded-md">
                        {st.step}
                      </span>
                      <h3 className="font-extrabold text-lg sm:text-xl text-prc-navy">
                        {st.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-royal-gradient rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black">
            Ready to Begin Step 01?
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
            Take the first step by filling out your online admission form today.
          </p>
          <div className="pt-2">
            <Link
              href="/apply"
              className="bg-white text-prc-navy hover:bg-prc-light font-bold px-8 py-3.5 rounded-full text-sm inline-block shadow-lg transition-all hover:scale-105"
            >
              Start Online Application →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
