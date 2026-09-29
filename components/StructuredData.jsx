import { collegeInfo } from "@/data/collegeInfo";

export default function StructuredData({ type = "organization", data = {} }) {
  let schema = {};

  if (type === "organization") {
    schema = {
      "@context": "https://schema.org",
      "@type": "CollegeOrUniversity",
      "name": "Pak Royal College",
      "alternateName": ["PRC", "Pak Royal College Sharaqpur"],
      "url": "https://pakroyalcollege.edu.pk",
      "hasMap": collegeInfo.googleMapsUrl,
      "logo": "https://pakroyalcollege.edu.pk/images/logo.png",
      "image": "https://pakroyalcollege.edu.pk/images/hero_campus.jpg",
      "description": "Premier modern college offering undergraduate BS programs in Computer Science, Allied Health Sciences, IT, Intermediate, and 2-year professional diplomas.",
      "telephone": collegeInfo.phone,
      "email": collegeInfo.email,
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "150"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": collegeInfo.address,
        "addressLocality": "Sharaqpur Sharif",
        "addressRegion": "Punjab",
        "addressCountry": "PK"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": collegeInfo.coordinates.lat,
        "longitude": collegeInfo.coordinates.lng
      },
      "sameAs": [
        collegeInfo.socials.facebook,
        collegeInfo.socials.linkedin,
        collegeInfo.socials.instagram,
        collegeInfo.socials.youtube,
        collegeInfo.socials.tiktok
      ]
    };
  } else if (type === "course" && data) {
    schema = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": data.title,
      "description": data.shortDescription || data.overview,
      "provider": {
        "@type": "CollegeOrUniversity",
        "name": "Pak Royal College",
        "sameAs": "https://pakroyalcollege.edu.pk"
      },
      "educationalCredentialAwarded": data.degree || data.title,
      "timeRequired": data.duration
    };
  } else if (type === "faq" && data) {
    schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": (data.items || []).map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  } else if (type === "article" && data) {
    schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": data.title,
      "image": [data.image],
      "datePublished": data.date,
      "author": [{
        "@type": "Organization",
        "name": data.author || "Pak Royal College"
      }],
      "publisher": {
        "@type": "CollegeOrUniversity",
        "name": "Pak Royal College",
        "logo": {
          "@type": "ImageObject",
          "url": "https://pakroyalcollege.edu.pk/images/logo.png"
        }
      },
      "description": data.excerpt
    };
  } else if (type === "event" && data) {
    schema = {
      "@context": "https://schema.org",
      "@type": "EducationEvent",
      "name": data.title,
      "description": data.shortDescription,
      "image": data.image,
      "startDate": data.date,
      "location": {
        "@type": "Place",
        "name": data.location,
        "hasMap": collegeInfo.googleMapsUrl,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": collegeInfo.address,
          "addressLocality": "Sharaqpur Sharif",
          "addressRegion": "Punjab",
          "addressCountry": "PK"
        }
      },
      "organizer": {
        "@type": "CollegeOrUniversity",
        "name": "Pak Royal College",
        "url": "https://pakroyalcollege.edu.pk"
      }
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
