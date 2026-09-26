import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PageHeroBanner({
  title,
  urdu,
  description,
  badge,
  bgImage = "/images/hero_campus.jpg",
  breadcrumbs = [],
  primaryCta,
  secondaryCta,
  children,
  className = ""
}) {
  return (
    <section className={`relative text-white pt-8 pb-16 sm:pb-20 overflow-hidden bg-prc-dark ${className}`}>
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={typeof title === "string" ? title : "Pak Royal College"}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Dark Navy & Royal Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/95 via-[#142B55]/90 to-[#31549A]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/90 via-[#0B1F3A]/30 to-black/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumbs items={breadcrumbs} />
        )}

        <div className="mt-6 max-w-4xl space-y-4">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-blue-200 shadow-sm">
              {badge}
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight drop-shadow-md">
            {title}
          </h1>

          {urdu && (
            <p className="urdu-font text-blue-200 text-xl sm:text-2xl drop-shadow">
              {urdu}
            </p>
          )}

          {description && (
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light max-w-3xl drop-shadow">
              {description}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-prc-primary hover:from-blue-600 hover:to-prc-navy text-white font-bold px-6 py-3 rounded-full text-sm shadow-lg shadow-blue-500/25 transition-all hover:scale-105 active:scale-95"
                >
                  {primaryCta.icon && primaryCta.icon}
                  <span>{primaryCta.label}</span>
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold px-5 py-3 rounded-full text-sm backdrop-blur-md border border-white/30 transition-all hover:scale-105"
                >
                  {secondaryCta.icon && secondaryCta.icon}
                  <span>{secondaryCta.label}</span>
                </Link>
              )}
            </div>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
