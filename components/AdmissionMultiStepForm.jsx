"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import {
  User,
  GraduationCap,
  BookOpen,
  FileCheck,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Upload,
  Download,
  Copy,
  Printer
} from "lucide-react";
import { programs } from "@/data/programs";
import { courses } from "@/data/courses";
import { collegeInfo } from "@/data/collegeInfo";

export default function AdmissionMultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [copied, setCopied] = useState(false);
  const [applicationId, setApplicationId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [formData, setFormData] = useState({
    // Step 1: Personal
    fullName: "",
    fatherName: "",
    dob: "",
    gender: "Male",
    cnic: "",
    phone: "",
    email: "",
    address: "",
    city: "Lahore",

    // Step 2: Academic
    lastDegree: "Intermediate (FSc / ICS)",
    institution: "",
    board: "BISE Lahore",
    passingYear: "2026",
    totalMarks: "1100",
    obtainedMarks: "",
    percentage: "",

    // Step 3: Program
    programType: "bs",
    selectedProgram: "bs-computer-science",
    studyShift: "Morning",
    scholarshipCategory: "None",

    // Step 4: Documents
    photoUploaded: true,
    cnicUploaded: true,
    academicTranscriptUploaded: true,

    // Step 5: Declaration
    termsAgreed: false
  });

  const [errors, setErrors] = useState({});

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
      if (!formData.fatherName.trim()) newErrors.fatherName = "Father/Guardian name is required";
      if (!formData.dob) newErrors.dob = "Date of birth is required";
      if (!formData.cnic.trim()) newErrors.cnic = "CNIC / B-Form is required";
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
      if (!formData.email.trim() || !formData.email.includes("@")) newErrors.email = "Valid email is required";
      if (!formData.address.trim()) newErrors.address = "Residential address is required";
    }

    if (step === 2) {
      if (!formData.institution.trim()) newErrors.institution = "Previous institution name is required";
      if (!formData.obtainedMarks || Number(formData.obtainedMarks) <= 0) {
        newErrors.obtainedMarks = "Valid obtained marks are required";
      }
    }

    if (step === 3) {
      if (!formData.selectedProgram) newErrors.selectedProgram = "Please select a program";
    }

    if (step === 5) {
      if (!formData.termsAgreed) newErrors.termsAgreed = "You must agree to the academic declaration";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = async () => {
    if (validateStep(currentStep)) {
      if (currentStep === 5) {
        // Backend API submission
        setIsSubmitting(true);
        setSubmitError("");
        try {
          const res = await fetch("/api/admissions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
          });

          const result = await res.json();

          if (!res.ok || !result.success) {
            throw new Error(result.error || "Failed to submit application");
          }

          setApplicationId(result.applicationId);
          setCurrentStep(6);
          window.scrollTo({ top: 150, behavior: "smooth" });

          try {
            confetti({
              particleCount: 120,
              spread: 80,
              origin: { y: 0.6 }
            });
          } catch (e) {
            // ignore if canvas confetti fails
          }
        } catch (err) {
          console.error("Submission failed:", err);
          setSubmitError(err.message || "Something went wrong while connecting to the server. Please try again.");
        } finally {
          setIsSubmitting(false);
        }
      } else {
        setCurrentStep((prev) => prev + 1);
        window.scrollTo({ top: 200, behavior: "smooth" });
      }
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => {
      const updated = {
        ...prev,
        [name]: type === "checkbox" ? checked : value
      };
      // Auto compute percentage
      if (name === "obtainedMarks" || name === "totalMarks") {
        const obt = Number(name === "obtainedMarks" ? value : prev.obtainedMarks);
        const tot = Number(name === "totalMarks" ? value : prev.totalMarks);
        if (obt && tot) {
          updated.percentage = ((obt / tot) * 100).toFixed(1) + "%";
        }
      }
      return updated;
    });

    // Clear field error
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const copyAppId = () => {
    navigator.clipboard.writeText(applicationId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stepsList = [
    { num: 1, title: "Personal", icon: User },
    { num: 2, title: "Academic", icon: GraduationCap },
    { num: 3, title: "Program", icon: BookOpen },
    { num: 4, title: "Documents", icon: Upload },
    { num: 5, title: "Review", icon: FileCheck },
    { num: 6, title: "Confirmation", icon: CheckCircle2 }
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
      {/* Step Progress Bar Header */}
      <div className="bg-prc-navy text-white p-6 sm:p-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/20 -translate-y-1/2 z-0" />
            <div
              className="absolute top-1/2 left-0 h-1 bg-blue-400 -translate-y-1/2 z-0 transition-all duration-300"
              style={{
                width: `${((currentStep - 1) / (stepsList.length - 1)) * 100}%`
              }}
            />

            {stepsList.map((st) => {
              const Icon = st.icon;
              const isPassed = currentStep > st.num;
              const isCurrent = currentStep === st.num;

              return (
                <div key={st.num} className="relative z-10 flex flex-col items-center">
                  <div
                    className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all ${
                      isPassed
                        ? "bg-blue-500 text-white"
                        : isCurrent
                        ? "bg-white text-prc-navy ring-4 ring-blue-400/40 scale-110"
                        : "bg-prc-dark text-slate-400 border border-white/20"
                    }`}
                  >
                    {isPassed ? <CheckCircle2 className="w-5 h-5" /> : <Icon className="w-4 h-4" />}
                  </div>
                  <span
                    className={`text-[10px] sm:text-xs mt-2 font-semibold hidden md:block ${
                      isCurrent ? "text-white font-bold" : "text-slate-400"
                    }`}
                  >
                    {st.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Form Body */}
      <div className="p-6 sm:p-10 max-w-3xl mx-auto">
        {/* STEP 1: PERSONAL INFO */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-xl font-bold text-prc-navy">
                Step 1: Personal Information
              </h3>
              <p className="text-xs text-slate-500">
                Please provide accurate personal details as listed on your Matric certificate and CNIC.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name (as per Matric) *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Muhammad Ali"
                  className={`w-full p-3 rounded-xl border text-sm ${
                    errors.fullName ? "border-red-500 bg-red-50" : "border-slate-200"
                  }`}
                />
                {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Father / Guardian Name *
                </label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  placeholder="e.g. Tariq Mehmood"
                  className={`w-full p-3 rounded-xl border text-sm ${
                    errors.fatherName ? "border-red-500 bg-red-50" : "border-slate-200"
                  }`}
                />
                {errors.fatherName && <p className="text-xs text-red-500 mt-1">{errors.fatherName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-xl border text-sm ${
                    errors.dob ? "border-red-500 bg-red-50" : "border-slate-200"
                  }`}
                />
                {errors.dob && <p className="text-xs text-red-500 mt-1">{errors.dob}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Gender *
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm bg-white"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  CNIC / B-Form Number *
                </label>
                <input
                  type="text"
                  name="cnic"
                  value={formData.cnic}
                  onChange={handleChange}
                  placeholder="e.g. 35201-1234567-1"
                  className={`w-full p-3 rounded-xl border text-sm ${
                    errors.cnic ? "border-red-500 bg-red-50" : "border-slate-200"
                  }`}
                />
                {errors.cnic && <p className="text-xs text-red-500 mt-1">{errors.cnic}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Mobile / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 0300 1234567"
                  className={`w-full p-3 rounded-xl border text-sm ${
                    errors.phone ? "border-red-500 bg-red-50" : "border-slate-200"
                  }`}
                />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. student@example.com"
                  className={`w-full p-3 rounded-xl border text-sm ${
                    errors.email ? "border-red-500 bg-red-50" : "border-slate-200"
                  }`}
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Residential Address *
                </label>
                <textarea
                  name="address"
                  rows={2}
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="House number, Street, Area, City"
                  className={`w-full p-3 rounded-xl border text-sm ${
                    errors.address ? "border-red-500 bg-red-50" : "border-slate-200"
                  }`}
                />
                {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address}</p>}
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: ACADEMIC INFO */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-xl font-bold text-prc-navy">
                Step 2: Academic Background
              </h3>
              <p className="text-xs text-slate-500">
                Enter your most recent academic qualifications and examination board details.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Previous Qualification *
                </label>
                <select
                  name="lastDegree"
                  value={formData.lastDegree}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm bg-white"
                >
                  <option value="Intermediate (FSc Pre-Eng)">FSc Pre-Engineering</option>
                  <option value="Intermediate (ICS)">ICS (Computer Science)</option>
                  <option value="Intermediate (FSc Pre-Med)">FSc Pre-Medical</option>
                  <option value="Intermediate (I.Com / FA)">I.Com / FA</option>
                  <option value="A-Levels">A-Levels / Foreign Qualification</option>
                  <option value="DAE">DAE (Diploma of Associate Engineer)</option>
                  <option value="Bachelor Degree">Bachelor's / Associate Degree</option>
                  <option value="Matriculation">Matriculation (For DIT)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Examining Board / University *
                </label>
                <input
                  type="text"
                  name="board"
                  value={formData.board}
                  onChange={handleChange}
                  placeholder="e.g. BISE Lahore / Cambridge"
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Institute / College Last Attended *
                </label>
                <input
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  placeholder="e.g. Govt College of Science, Lahore"
                  className={`w-full p-3 rounded-xl border text-sm ${
                    errors.institution ? "border-red-500 bg-red-50" : "border-slate-200"
                  }`}
                />
                {errors.institution && <p className="text-xs text-red-500 mt-1">{errors.institution}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Total Marks
                </label>
                <input
                  type="number"
                  name="totalMarks"
                  value={formData.totalMarks}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Obtained Marks *
                </label>
                <input
                  type="number"
                  name="obtainedMarks"
                  value={formData.obtainedMarks}
                  onChange={handleChange}
                  placeholder="e.g. 890"
                  className={`w-full p-3 rounded-xl border text-sm ${
                    errors.obtainedMarks ? "border-red-500 bg-red-50" : "border-slate-200"
                  }`}
                />
                {errors.obtainedMarks && <p className="text-xs text-red-500 mt-1">{errors.obtainedMarks}</p>}
              </div>

              {formData.percentage && (
                <div className="sm:col-span-2 p-3 bg-blue-50 text-prc-primary rounded-xl font-bold text-sm">
                  Calculated Percentage: {formData.percentage}
                </div>
              )}
            </div>
          </div>
        )}

        {/* STEP 3: PROGRAM SELECTION */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-xl font-bold text-prc-navy">
                Step 3: Program Selection
              </h3>
              <p className="text-xs text-slate-500">
                Choose the degree, diploma or professional program you wish to apply for.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Program Category *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "bs", label: "BS Degree (4 Yrs)" },
                    { id: "diploma", label: "Diploma (1 Yr)" },
                    { id: "professional", label: "Short / Professional" }
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, programType: cat.id }))}
                      className={`p-3 rounded-xl text-xs font-bold border transition-all ${
                        formData.programType === cat.id
                          ? "bg-prc-primary text-white border-prc-primary shadow-sm"
                          : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Select Program *
                </label>
                <select
                  name="selectedProgram"
                  value={formData.selectedProgram}
                  onChange={handleChange}
                  className="w-full p-3.5 rounded-xl border border-slate-200 text-sm font-semibold bg-white"
                >
                  {formData.programType === "bs" &&
                    programs
                      .filter((p) => p.category === "bs")
                      .map((p) => (
                        <option key={p.id} value={p.slug}>
                          {p.title} ({p.duration})
                        </option>
                      ))}

                  {formData.programType === "diploma" &&
                    programs
                      .filter((p) => p.category === "diploma")
                      .map((p) => (
                        <option key={p.id} value={p.slug}>
                          {p.title}
                        </option>
                      ))}

                  {formData.programType === "professional" && (
                    <>
                      {programs
                        .filter((p) => p.category === "professional")
                        .map((p) => (
                          <option key={p.id} value={p.slug}>
                            {p.title}
                          </option>
                        ))}
                      {courses.map((c) => (
                        <option key={c.id} value={c.slug}>
                          Course: {c.title}
                        </option>
                      ))}
                    </>
                  )}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Shift *
                  </label>
                  <select
                    name="studyShift"
                    value={formData.studyShift}
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl border border-slate-200 text-sm bg-white"
                  >
                    <option value="Morning">Morning Shift (8:30 AM – 1:30 PM)</option>
                    <option value="Afternoon">Afternoon Shift (1:30 PM – 5:30 PM)</option>
                    <option value="Weekend">Weekend Batch (Sat & Sun)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Scholarship Consideration
                  </label>
                  <select
                    name="scholarshipCategory"
                    value={formData.scholarshipCategory}
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl border border-slate-200 text-sm bg-white"
                  >
                    <option value="None">None (Standard Fee)</option>
                    <option value="Merit">Merit-Based (80%+ Marks)</option>
                    <option value="Kinship">Kinship (Sibling Studying)</option>
                    <option value="Hafiz">Hafiz-e-Quran</option>
                    <option value="NeedBased">Need-Based Financial Aid</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: DOCUMENTS UPLOAD */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-xl font-bold text-prc-navy">
                Step 4: Document Verification Preview
              </h3>
              <p className="text-xs text-slate-500">
                You can upload soft copies now or bring original hard copies during the on-campus interview.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { title: "Passport Size Photograph (Blue Background)", req: "JPG or PNG, max 2MB", uploaded: true },
                { title: "CNIC / B-Form Scanned Copy", req: "PDF or JPG, front & back", uploaded: true },
                { title: "Matric & Intermediate Result Transcripts", req: "Official board result cards", uploaded: true }
              ].map((doc, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl border border-dashed border-blue-300 bg-blue-50/40 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-prc-primary flex items-center justify-center">
                      <Upload className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-prc-navy">{doc.title}</div>
                      <div className="text-xs text-slate-500">{doc.req}</div>
                    </div>
                  </div>
                  <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Attached
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 5: REVIEW & DECLARATION */}
        {currentStep === 5 && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-xl font-bold text-prc-navy">
                Step 5: Review Application Summary
              </h3>
              <p className="text-xs text-slate-500">
                Please verify all entered credentials before final submission.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <span className="text-slate-500 block">Applicant Name:</span>
                  <span className="font-bold text-slate-900 text-sm">{formData.fullName}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Father Name:</span>
                  <span className="font-bold text-slate-900 text-sm">{formData.fatherName}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">CNIC / B-Form:</span>
                  <span className="font-bold text-slate-900">{formData.cnic}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Contact Phone:</span>
                  <span className="font-bold text-slate-900">{formData.phone}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Selected Degree/Program:</span>
                  <span className="font-bold text-prc-primary text-sm uppercase">{formData.selectedProgram}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Preferred Shift:</span>
                  <span className="font-bold text-slate-900">{formData.studyShift}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Previous Institution:</span>
                  <span className="font-bold text-slate-900">{formData.institution}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Marks Obtained:</span>
                  <span className="font-bold text-slate-900">
                    {formData.obtainedMarks} / {formData.totalMarks} ({formData.percentage || "N/A"})
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="termsAgreed"
                  checked={formData.termsAgreed}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded text-prc-primary focus:ring-prc-primary border-slate-300"
                />
                <span className="text-xs text-slate-600 leading-relaxed">
                  I solemnly declare that all information provided above is true and authentic to the best of my knowledge. I agree to abide by the academic rules, codes of conduct, and disciplinary regulations of Pak Royal College.
                </span>
              </label>
              {errors.termsAgreed && (
                <p className="text-xs text-red-500 mt-1">{errors.termsAgreed}</p>
              )}
            </div>
          </div>
        )}

        {/* STEP 6: SUCCESS / CONFIRMATION */}
        {currentStep === 6 && (
          <div className="text-center py-8 space-y-6">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="bg-emerald-50 text-emerald-700 font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
                Application Successfully Submitted
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-prc-navy">
                Congratulations, {formData.fullName}!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
                Your admission application for Fall 2026 has been received by the Directorate of Admissions at Pak Royal College.
              </p>
            </div>

            <div className="bg-prc-light/70 p-6 rounded-2xl border border-blue-200 max-w-md mx-auto space-y-3">
              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                Official Application Reference ID
              </div>
              <div className="text-2xl sm:text-3xl font-mono font-black text-prc-primary">
                {applicationId}
              </div>
              <button
                onClick={copyAppId}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-prc-primary hover:text-prc-navy bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm transition-colors"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? "Copied!" : "Copy Reference ID"}</span>
              </button>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl max-w-md mx-auto text-xs text-slate-600 text-left space-y-2">
              <div className="font-bold text-slate-800">Next Steps:</div>
              <div>1. A confirmation SMS & email has been dispatched to {formData.phone} and {formData.email}.</div>
              <div>2. Our admissions counselor will contact you within 24–48 hours for document verification.</div>
              <div>3. Please bring 3 passport photos and original educational certificates on your visit.</div>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 bg-slate-800 text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-slate-900 transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>Print Application Summary</span>
              </button>
              <a
                href="/"
                className="inline-flex items-center gap-2 bg-prc-primary text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-prc-navy transition-colors"
              >
                <span>Return to Home</span>
              </a>
            </div>
          </div>
        )}

        {/* Submission Error Banner */}
        {submitError && (
          <div className="mt-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-700 text-xs">
            <AlertCircle className="w-5 h-5 shrink-0 text-red-600 mt-0.5" />
            <div>
              <p className="font-bold">Submission Failed</p>
              <p>{submitError}</p>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        {currentStep < 6 && (
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-3">
            {currentStep > 1 ? (
              <button
                type="button"
                disabled={isSubmitting}
                onClick={handleBack}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-xs transition-colors disabled:opacity-50"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              disabled={isSubmitting}
              onClick={handleNext}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-prc-primary to-blue-600 hover:from-prc-navy hover:to-prc-primary text-white font-bold text-xs sm:text-sm px-7 py-3 rounded-xl shadow-md transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Submitting to Backend...</span>
                </>
              ) : (
                <>
                  <span>{currentStep === 5 ? "Submit Application" : "Proceed Next"}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
