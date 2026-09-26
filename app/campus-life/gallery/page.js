import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBanner from "@/components/PageHeroBanner";
import MasonryGallery from "@/components/MasonryGallery";

export const metadata = {
  title: "Campus Photo Gallery | Pak Royal College",
  description:
    "Explore high-resolution photographs of Pak Royal College: academic buildings, state-of-the-art AI labs, classrooms, sports championships, and campus events."
};

export default function GalleryPage() {
  return (
    <div className="space-y-12 pb-20">
      {/* Hero Section with Full-Bleed Background Image */}
      <PageHeroBanner
        title="Campus Photo Gallery"
        badge="VISUAL CHRONICLES"
        urdu="کیمپس کی سرگرمیوں اور سہولیات کی تصویری جھلکیاں"
        description="Explore snapshots of our modern laboratories, lecture theaters, inter-collegiate tournaments, hackathons, and vibrant student community life."
        bgImage="/images/hero_campus.jpg"
        breadcrumbs={[
          { label: "Campus Life", href: "/campus-life" },
          { label: "Photo Gallery", href: "/campus-life/gallery" }
        ]}
      />

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <MasonryGallery />
      </section>
    </div>
  );
}
