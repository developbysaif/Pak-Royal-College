"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle2, Phone, Sparkles, UserCheck } from "lucide-react";
import { collegeInfo } from "@/data/collegeInfo";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Admissions Inquiry",
    message: ""
  });

  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await res.json();
      if (!res.ok || !result.success) {
        throw new Error(result.error || "Failed to submit message.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "General Admissions Inquiry",
        message: ""
      });
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
      setErrorMessage(err.message || "Failed to send message. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200">
      <div className="mb-6 space-y-1">
        <h3 className="text-xl sm:text-2xl font-black text-prc-navy">
          Send Us a Message
        </h3>
        <p className="text-xs sm:text-sm text-slate-500">
          Our admissions team and academic counselors typically respond within 24 hours.
        </p>
      </div>

      {status === "success" ? (
        <div className="p-8 text-center bg-emerald-50 border border-emerald-200 rounded-2xl space-y-3">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="font-bold text-emerald-900 text-lg">
            Message Sent Successfully!
          </h4>
          <p className="text-xs text-emerald-700 max-w-md mx-auto">
            Thank you for reaching out to Pak Royal College. An academic representative will get in touch with you shortly.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-3 text-xs font-bold text-prc-primary hover:underline"
          >
            Send another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === "error" && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
              {errorMessage}
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Bilal Ahmed"
                className="w-full p-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-prc-primary"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. bilal@example.com"
                className="w-full p-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-prc-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Phone / WhatsApp Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 0300 1234567"
                className="w-full p-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-prc-primary"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Subject / Area of Inquiry
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-prc-primary"
              >
                <option value="General Admissions Inquiry">General Admissions Inquiry</option>
                <option value="BS Computer Science / AI">BS Computer Science / AI</option>
                <option value="BS Software Engineering">BS Software Engineering</option>
                <option value="BS Business Administration">BS Business Administration</option>
                <option value="Diploma Programs">Diploma Programs</option>
                <option value="Short Courses & Bootcamps">Short Courses & Bootcamps</option>
                <option value="Scholarships & Financial Aid">Scholarships & Financial Aid</option>
                <option value="Campus Visit Appointment">Schedule Campus Visit</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Your Message / Questions *
            </label>
            <textarea
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your educational background and any questions you have regarding admissions, fees or courses..."
              className="w-full p-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-prc-primary"
            />
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-prc-primary to-blue-600 hover:from-prc-navy hover:to-prc-primary text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{status === "loading" ? "Submitting Inquiry..." : "Send Message"}</span>
            </button>

            <a
              href={`tel:${collegeInfo.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-prc-navy font-bold text-sm px-6 py-3.5 rounded-xl border border-slate-200 transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 text-prc-primary" />
              <span>Contact Admissions Hotline</span>
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
