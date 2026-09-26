"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin, ArrowRight, Sparkles } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBanner from "@/components/PageHeroBanner";
import SectionHeading from "@/components/SectionHeading";
import EventCard from "@/components/EventCard";
import { events } from "@/data/events";

export default function EventsPage() {
  const [filter, setFilter] = useState("all");

  const filteredEvents = events.filter((e) => {
    if (filter === "all") return true;
    if (filter === "upcoming") return e.registrationOpen;
    return true;
  });

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section with Full-Bleed Background Image */}
      <PageHeroBanner
        title="Events & Tech Conferences"
        badge="SEMINARS, HACKATHONS & SUMMITS"
        urdu="تعلیمی سیمینارز، ہیکاتھونز اور سالانہ کانفرنسز"
        description="Join industry keynote sessions, 24-hour coding sprints, academic symposiums, career recruitment fairs, and sports galas hosted at Pak Royal College."
        bgImage="/images/hero_graduation.jpg"
        breadcrumbs={[{ label: "Events", href: "/events" }]}
      />

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setFilter("all")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              filter === "all"
                ? "bg-prc-primary text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            All Events
          </button>
          <button
            onClick={() => setFilter("upcoming")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              filter === "upcoming"
                ? "bg-prc-primary text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            Upcoming & Open for Registration
          </button>
        </div>
      </section>

      {/* Events Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
}
