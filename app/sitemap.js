import { programs } from "@/data/programs";
import { courses } from "@/data/courses";
import { newsArticles } from "@/data/news";
import { events } from "@/data/events";

export default function sitemap() {
  const baseUrl = "https://pakroyalcollege.edu.pk";

  const staticRoutes = [
    "",
    "/about",
    "/about/mission-vision",
    "/about/leadership",
    "/about/faculty",
    "/programs",
    "/programs/bs",
    "/programs/diploma",
    "/programs/professional",
    "/courses",
    "/admissions",
    "/admissions/requirements",
    "/admissions/process",
    "/admissions/fees",
    "/admissions/scholarships",
    "/apply",
    "/campus-life",
    "/campus-life/gallery",
    "/campus-life/student-life",
    "/news",
    "/events",
    "/contact",
    "/faq",
    "/privacy-policy",
    "/terms"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/programs") || route === "/apply" ? 0.9 : 0.8
  }));

  const programRoutes = programs.map((p) => ({
    url: `${baseUrl}/programs/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9
  }));

  const courseRoutes = courses.map((c) => ({
    url: `${baseUrl}/courses/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85
  }));

  const newsRoutes = newsArticles.map((n) => ({
    url: `${baseUrl}/news/${n.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7
  }));

  const eventRoutes = events.map((e) => ({
    url: `${baseUrl}/events/${e.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.75
  }));

  return [...staticRoutes, ...programRoutes, ...courseRoutes, ...newsRoutes, ...eventRoutes];
}
