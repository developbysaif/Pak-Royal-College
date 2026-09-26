import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Privacy Policy | Pak Royal College",
  description:
    "Pak Royal College institutional privacy policy explaining how applicant and student data is collected, processed, and protected."
};

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-12 pb-20">
      {/* Hero */}
      <section className="bg-royal-dark-gradient text-white pt-10 pb-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy-policy" }]} />

          <div className="mt-6 space-y-3">
            <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 font-light">
              Last updated: September 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md space-y-6 text-sm text-slate-700 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-xl font-bold text-prc-navy">1. Institutional Commitment to Privacy</h2>
          <p>
            Pak Royal College ("we", "us", "our", or "the College") respects the personal privacy of our prospective students, currently enrolled scholars, faculty members, and website visitors. This policy explains how we collect, store, utilize, and protect your personal information when you access our official web portals and online admission systems.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-prc-navy">2. Information We Collect</h2>
          <p>
            When you complete an online application, schedule a campus visit, or submit an inquiry form, we may collect:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Full Name, Father/Guardian Name, and Date of Birth</li>
            <li>Computerized National Identity Card (CNIC) or B-Form number</li>
            <li>Contact details including phone numbers, WhatsApp, and email addresses</li>
            <li>Previous academic certificates, board roll numbers, and examination marks</li>
            <li>Uploaded identification documents and academic transcripts</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-prc-navy">3. How Information Is Used</h2>
          <p>
            The collected information is used strictly for:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Processing academic admission applications and calculating merit eligibility</li>
            <li>Communicating admission decisions, fee challans, and orientation schedules</li>
            <li>Regulatory reporting to the Higher Education Commission (HEC) and education boards</li>
            <li>Issuing student identity credentials and portal access accounts</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-prc-navy">4. Data Security & Confidentiality</h2>
          <p>
            Pak Royal College employs industry-standard encryption, SSL transport security, and restricted administrative access protocols. We never sell, rent, or trade student personal records to third-party commercial entities.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-prc-navy">5. Contact Information</h2>
          <p>
            For privacy inquiries or data update requests, please contact our Registrar Directorate at <span className="font-semibold text-prc-primary">info@pakroyalcollege.edu.pk</span>.
          </p>
        </section>
      </article>
    </div>
  );
}
