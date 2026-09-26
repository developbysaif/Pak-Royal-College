"use client";

import { cn } from "@/lib/utils";

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  light = false,
  className
}) {
  const isCenter = align === "center";
  const isLeft = align === "left";

  return (
    <div
      className={cn(
        "mb-12 space-y-3",
        isCenter && "text-center max-w-3xl mx-auto",
        isLeft && "text-left max-w-2xl",
        className
      )}
    >
      {badge && (
        <div className={cn("inline-flex items-center", isCenter && "justify-center")}>
          <span
            className={cn(
              "px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
              light
                ? "bg-white/10 text-blue-200 border border-white/20"
                : "bg-prc-light text-prc-primary border border-blue-200"
            )}
          >
            {badge}
          </span>
        </div>
      )}

      {title && (
        <h2
          className={cn(
            "text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight",
            light ? "text-white" : "text-prc-navy"
          )}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed",
            light ? "text-slate-300" : "text-slate-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
