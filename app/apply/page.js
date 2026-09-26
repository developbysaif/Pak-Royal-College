import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBanner from "@/components/PageHeroBanner";
import AdmissionMultiStepForm from "@/components/AdmissionMultiStepForm";

export const metadata = {
  title: "Online Application Portal (Fall 2026) | Pak Royal College",
  description:
    "Apply online for BS Computer Science, BS AI, BS Software Engineering, BBA, and professional diplomas at Pak Royal College in 6 easy steps."
};

export default function ApplyPage() {
  return (
    <div className="space-y-12 pb-20">
      {/* Hero Section with Full-Bleed Background Image */}
      <PageHeroBanner
        title="Online Admission Application"
        badge="FALL 2026 APPLICATION FORM"
        urdu="آن لائن داخلہ فارم برائے سیشن 2026"
        description="Complete the 6-step online application to secure your seat. You will receive an official application reference number immediately upon submission."
        bgImage="/images/hero_careers.jpg"
        breadcrumbs={[{ label: "Apply Online", href: "/apply" }]}
      />

      {/* Main Multi-Step Form Container */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <AdmissionMultiStepForm />
      </section>
    </div>
  );
}
