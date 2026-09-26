import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Sparkles,
  Building,
  CheckCircle2,
  ExternalLink,
  Navigation
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBanner from "@/components/PageHeroBanner";
import ContactForm from "@/components/ContactForm";
import { collegeInfo } from "@/data/collegeInfo";

export const metadata = {
  title: "Contact Us & Campus Location | Pak Royal College",
  description:
    "Get in touch with Pak Royal College admissions counselors, academic heads, and administration. Locate our Sharaqpur campus on Google Maps."
};

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section with Full-Bleed Background Image */}
      <PageHeroBanner
        title="Contact Pak Royal College"
        badge="GET IN TOUCH & CAMPUS VISIT"
        urdu="رہنمائی، معلومات اور کیمپس کا دورہ"
        description="Our academic counselors, faculty advisors, and admissions directorate are available to answer your questions and assist with student enrollment."
        bgImage="/images/hero_campus.jpg"
        breadcrumbs={[{ label: "Contact Us", href: "/contact" }]}
      />

      {/* Main Grid: Form + Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form (7 Cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Contact Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
              <h3 className="font-extrabold text-xl text-prc-navy">
                Campus Contact Information
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3.5 p-4 bg-slate-50 rounded-2xl">
                  <MapPin className="w-5 h-5 text-prc-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">Campus Location</div>
                    <div className="text-slate-600 mt-0.5">{collegeInfo.address}</div>
                    <a
                      href={collegeInfo.googleMapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-prc-primary hover:underline mt-2"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 bg-slate-50 rounded-2xl">
                  <Phone className="w-5 h-5 text-prc-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">Phone & Admissions Helpline</div>
                    <div className="text-slate-600 mt-0.5 space-y-1">
                      <a href={`tel:${collegeInfo.phone}`} className="hover:text-prc-primary block font-semibold">
                        Main: {collegeInfo.phone}
                      </a>
                      <a href={`tel:${collegeInfo.altPhone}`} className="hover:text-prc-primary block">
                        Admissions Hotline: {collegeInfo.altPhone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 bg-slate-50 rounded-2xl">
                  <Mail className="w-5 h-5 text-prc-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">Email Inquiries</div>
                    <div className="text-slate-600 mt-0.5 space-y-1">
                      <a href={`mailto:${collegeInfo.email}`} className="hover:text-prc-primary block">
                        General: {collegeInfo.email}
                      </a>
                      <a href={`mailto:${collegeInfo.admissionsEmail}`} className="hover:text-prc-primary block font-medium">
                        Admissions: {collegeInfo.admissionsEmail}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 bg-slate-50 rounded-2xl">
                  <Clock className="w-5 h-5 text-prc-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">Office Working Hours</div>
                    <div className="text-slate-600 mt-0.5">{collegeInfo.officeHours}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Apply Card */}
            <div className="bg-royal-dark-gradient rounded-3xl p-6 text-white text-center space-y-3 shadow-lg">
              <h4 className="font-bold text-lg text-white">Admissions Open 2026</h4>
              <p className="text-xs text-slate-300">
                You can complete your application online in 6 quick steps.
              </p>
              <div className="pt-1 flex flex-wrap items-center justify-center gap-2">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-1.5 bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition-colors shadow-md"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Apply Online Now</span>
                </Link>
                <a
                  href={collegeInfo.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 text-white font-semibold px-4 py-2.5 rounded-xl text-xs transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Full Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-xl font-extrabold text-prc-navy">
                Pak Royal College on Google Maps
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {collegeInfo.address}
              </p>
            </div>
            <a
              href={collegeInfo.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-prc-primary hover:bg-prc-navy text-white font-bold px-4 py-2 rounded-xl text-xs transition-colors shadow-sm self-start sm:self-auto"
            >
              <Navigation className="w-4 h-4" />
              <span>Open in Google Maps App</span>
            </a>
          </div>

          <div className="h-96 sm:h-[450px] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100 relative">
            <iframe
              title="Pak Royal College Location Map"
              src={collegeInfo.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
