"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

export default function EventCard({ event }) {
  if (!event) return null;

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-prc-primary/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5">
      <div>
        {/* Banner */}
        <div className="relative h-48 w-full overflow-hidden bg-slate-100">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-prc-dark/80 via-transparent to-transparent opacity-60" />

          {/* Date Badge */}
          <div className="absolute top-3 left-3 bg-white text-prc-navy font-black text-xs px-3 py-1.5 rounded-xl shadow-md flex items-center gap-1.5 border border-slate-200">
            <Calendar className="w-3.5 h-3.5 text-prc-primary" />
            <span>{event.date}</span>
          </div>
        </div>

        {/* Info */}
        <div className="p-6 space-y-3">
          <div className="space-y-1 text-xs text-slate-500">
            <div className="flex items-center gap-1.5 text-prc-accent font-semibold">
              <Clock className="w-3.5 h-3.5" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="truncate">{event.location}</span>
            </div>
          </div>

          <h3 className="font-extrabold text-lg text-prc-navy group-hover:text-prc-primary transition-colors line-clamp-2 leading-snug">
            {event.title}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {event.shortDescription}
          </p>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
        <Link
          href={`/events/${event.slug}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-prc-primary hover:text-prc-navy transition-colors"
        >
          <span>View Event Details</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>

        {event.registrationOpen && (
          <Link
            href={`/events/${event.slug}`}
            className="bg-prc-primary text-white text-[11px] font-bold px-3 py-1.5 rounded-xl hover:bg-prc-navy transition-colors"
          >
            Register
          </Link>
        )}
      </div>
    </div>
  );
}
