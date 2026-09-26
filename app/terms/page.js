import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Terms & Conditions | Pak Royal College",
  description:
    "Institutional terms of use, enrollment rules, academic conduct guidelines, and legal terms for Pak Royal College."
};

export default function TermsPage() {
  return (
    <div className="space-y-12 pb-20">
      {/* Hero */}
      <section className="bg-royal-dark-gradient text-white pt-10 pb-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: "Terms & Conditions", href: "/terms" }]} />

          <div className="mt-6 space-y-3">
            <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Terms & Conditions
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
          <h2 className="text-xl font-bold text-prc-navy">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the official website, online portals, or admission application systems of Pak Royal College, you agree to comply with and be bound by these Terms and Conditions and all applicable laws and academic regulations.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-prc-navy">2. Accuracy of Admission Information</h2>
          <p>
            Applicants must ensure that all academic credentials, certificates, marks, and personal information submitted through the online application portal are authentic and accurate. The submission of fraudulent or fabricated documentation will result in immediate cancellation of admission and disciplinary action.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-prc-navy">3. Tuition Fees & Refund Guidelines</h2>
          <p>
            All fee payments must be deposited through official college bank challans or approved institutional digital payment gateways. Fee refund requests are processed strictly in accordance with national HEC fee refund regulations:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>100% tuition refund if applied within the 1st week of classes</li>
            <li>50% tuition refund if applied within the 2nd week of classes</li>
            <li>No refund after the 2nd week of classes</li>
            <li>Admission fee is non-refundable in all circumstances</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-prc-navy">4. Campus Code of Conduct</h2>
          <p>
            Enrolled students are expected to maintain the highest standards of academic integrity, personal discipline, mutual respect, and adherence to laboratory safety protocols. The College maintains a zero-tolerance policy toward harassment, plagiarism, and unauthorized political activities on campus.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-prc-navy">5. Intellectual Property</h2>
          <p>
            All course syllabi, examination designs, logos, crests, graphics, and instructional materials available on this site remain the exclusive intellectual property of Pak Royal College.
          </p>
        </section>
      </article>
    </div>
  );
}
