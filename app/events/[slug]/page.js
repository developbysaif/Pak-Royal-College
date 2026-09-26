import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  Users,
  CheckCircle2,
  ArrowLeft,
  Share2
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBanner from "@/components/PageHeroBanner";
import SectionHeading from "@/components/SectionHeading";
import StructuredData from "@/components/StructuredData";
import { events } from "@/data/events";

export async function generateStaticParams() {
  return events.map((e) => ({
    slug: e.slug
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return {
      title: "Event Not Found | Pak Royal College"
    };
  }

  return {
    title: `${event.title} | Pak Royal College Events`,
    description: event.shortDescription,
    openGraph: {
      title: event.title,
      description: event.shortDescription,
      images: [{ url: event.image }]
    }
  };
}

export default async function EventDetailPage({ params }) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="space-y-12 pb-20">
      <StructuredData type="event" data={event} />

      {/* Hero Section with Full-Bleed Background Image */}
      <PageHeroBanner
        title={event.title}
        badge={event.category}
        bgImage={event.image}
        breadcrumbs={[
          { label: "Events", href: "/events" },
          { label: event.title, href: `/events/${event.slug}` }
        ]}
      >
        <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-300 pt-2 border-t border-white/15">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-blue-400" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-400" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span>{event.location}</span>
          </div>
        </div>
      </PageHeroBanner>

      {/* Event Banner Image */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="relative h-72 sm:h-96 md:h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Event Content & Schedule */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Description */}
        <section className="space-y-4">
          <h2 className="text-2xl font-black text-prc-navy">About This Event</h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {event.overview || event.shortDescription}
          </p>
        </section>

        {/* Schedule */}
        {event.schedule && event.schedule.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-prc-navy">Event Schedule & Agenda</h2>
            <div className="space-y-3">
              {event.schedule.map((item, sIdx) => (
                <div
                  key={sIdx}
                  className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div className="font-mono text-xs font-bold text-prc-primary bg-blue-50 px-3 py-1 rounded-lg w-fit">
                    {item.time}
                  </div>
                  <div className="font-bold text-sm text-slate-900 flex-1 sm:px-4">
                    {item.session}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {item.speaker}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Speakers */}
        {event.speakers && event.speakers.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-prc-navy">Distinguished Speakers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {event.speakers.map((spk, spIdx) => (
                <div
                  key={spIdx}
                  className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm text-center space-y-3"
                >
                  <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-prc-primary">
                    <Image
                      src={spk.image}
                      alt={spk.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-prc-navy">{spk.name}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{spk.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Registration CTA Card */}
        <section className="bg-royal-gradient p-8 rounded-3xl text-white text-center space-y-4 shadow-xl">
          <h3 className="text-2xl font-black">Attend {event.title}</h3>
          <p className="text-xs sm:text-sm text-slate-200 max-w-lg mx-auto">
            Free entry for Pak Royal College students and pre-registered academic guests.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="bg-white text-prc-navy hover:bg-prc-light font-bold px-8 py-3 rounded-full text-sm inline-block shadow-lg transition-transform hover:scale-105"
            >
              Reserve Attendee Pass →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
