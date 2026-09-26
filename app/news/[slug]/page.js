import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, User, ArrowLeft, Share2, Tag, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBanner from "@/components/PageHeroBanner";
import SectionHeading from "@/components/SectionHeading";
import StructuredData from "@/components/StructuredData";
import NewsCard from "@/components/NewsCard";
import { newsArticles } from "@/data/news";

export async function generateStaticParams() {
  return newsArticles.map((a) => ({
    slug: a.slug
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | Pak Royal College"
    };
  }

  return {
    title: `${article.title} | Pak Royal College News`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }]
    }
  };
}

export default async function NewsDetailPage({ params }) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const related = newsArticles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <div className="space-y-12 pb-20">
      <StructuredData type="article" data={article} />

      {/* Hero Section with Full-Bleed Background Image */}
      <PageHeroBanner
        title={article.title}
        badge={article.category}
        bgImage={article.image}
        breadcrumbs={[
          { label: "News", href: "/news" },
          { label: article.title, href: `/news/${article.slug}` }
        ]}
      >
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2 border-t border-white/15">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-blue-400" />
            <span>{article.date}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <User className="w-4 h-4 text-blue-400" />
            <span>{article.author}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-blue-400" />
            <span>{article.readTime}</span>
          </div>
        </div>
      </PageHeroBanner>

      {/* Featured Banner Image */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="relative h-72 sm:h-96 md:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
        {article.content.map((para, pIdx) => (
          <p key={pIdx}>{para}</p>
        ))}

        {article.tags && article.tags.length > 0 && (
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-prc-primary" />
            {article.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </article>

      {/* Related News */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-slate-200">
          <SectionHeading
            badge="Keep Reading"
            title="Related Announcements"
            subtitle="Explore other recent news and events from Pak Royal College."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {related.map((a) => (
              <NewsCard key={a.id} article={a} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
