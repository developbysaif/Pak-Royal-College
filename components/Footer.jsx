"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles
} from "lucide-react";
import { collegeInfo } from "@/data/collegeInfo";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-prc-dark text-slate-300 relative overflow-hidden pt-16 pb-8 border-t border-white/10">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-prc-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Identity (2 cols on large) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-14 h-14 shrink-0 transition-transform group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="Pak Royal College Crest"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black tracking-wider text-xl uppercase text-white group-hover:text-blue-200 transition-colors">
                  PAK ROYAL COLLEGE
                </span>
                <span className="text-xs text-blue-300 font-medium">
                  {collegeInfo.tagline}
                </span>
              </div>
            </Link>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 max-w-md">
              <p className="urdu-font text-blue-200 text-base leading-relaxed text-right">
                {collegeInfo.taglineUrdu}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Empowering the next generation of engineers, data scientists, managers, and scholars with future-ready education.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={collegeInfo.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-prc-primary flex items-center justify-center text-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href={collegeInfo.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-prc-primary flex items-center justify-center text-white transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a>
              <a
                href={collegeInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-prc-primary flex items-center justify-center text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href={collegeInfo.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-prc-primary flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={collegeInfo.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-prc-primary flex items-center justify-center text-white transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  About College
                </Link>
              </li>
              <li>
                <Link href="/about/mission-vision" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Mission & Vision
                </Link>
              </li>
              <li>
                <Link href="/about/leadership" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Leadership & Governance
                </Link>
              </li>
              <li>
                <Link href="/about/faculty" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Faculty Directory
                </Link>
              </li>
              <li>
                <Link href="/campus-life" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Campus Life
                </Link>
              </li>
              <li>
                <Link href="/campus-life/gallery" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  News & Media
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Events & Hackathons
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Academic Programs */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">
              Academic Programs
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/programs/bs-computer-science" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  BS Computer Science
                </Link>
              </li>
              <li>
                <Link href="/programs/bs-artificial-intelligence" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  BS Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link href="/programs/bs-software-engineering" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  BS Software Engineering
                </Link>
              </li>
              <li>
                <Link href="/programs/bs-information-technology" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  BS Information Technology
                </Link>
              </li>
              <li>
                <Link href="/programs/bs-business-administration" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  BBA Business Administration
                </Link>
              </li>
              <li>
                <Link href="/programs/diploma-in-information-technology" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Diploma in IT (DIT)
                </Link>
              </li>
              <li>
                <Link href="/programs/diploma-in-ai-and-data-science" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Diploma in AI & Data Science
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-blue-400 font-semibold hover:underline inline-flex items-center gap-1">
                  View Short Courses <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Admissions & Contact */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">
              Admissions & Contact
            </h3>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{collegeInfo.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${collegeInfo.phone}`} className="hover:text-white transition-colors">
                  {collegeInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${collegeInfo.email}`} className="hover:text-white transition-colors">
                  {collegeInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{collegeInfo.officeHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/apply"
                className="w-full flex items-center justify-center gap-2 bg-prc-primary hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl text-xs shadow-md transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Apply for Admissions 2026
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Pak Royal College. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/faq" className="hover:text-slate-300 transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
