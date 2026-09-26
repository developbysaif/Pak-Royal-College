export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"]
    },
    sitemap: "https://pakroyalcollege.edu.pk/sitemap.xml"
  };
}
