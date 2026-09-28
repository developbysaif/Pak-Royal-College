import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"]
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B1F3A"
};

export const metadata = {
  metadataBase: new URL("https://pakroyalcollege.edu.pk"),
  title: {
    default: "Pak Royal College | A Place Where Futures Begin",
    template: "%s | Pak Royal College"
  },
  description:
    "Official website of Pak Royal College. Offering premier undergraduate BS degree programs in Computer Science, Artificial Intelligence, Software Engineering, IT, BBA, and professional diplomas with state-of-the-art labs and verified faculty.",
  keywords: [
    "Pak Royal College",
    "Pak Royal College Lahore",
    "BS Computer Science",
    "BS Artificial Intelligence",
    "BS Software Engineering",
    "BS IT",
    "BBA",
    "DIT",
    "Admissions 2026",
    "University in Lahore",
    "Colleges in Pakistan"
  ],
  authors: [{ name: "Pak Royal College Directorate of Admissions" }],
  creator: "Pak Royal College",
  publisher: "Pak Royal College",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    title: "Pak Royal College | A Place Where Futures Begin",
    description:
      "Premier modern university & college offering future-ready degree programs in AI, Computing, Business & Sciences with generous scholarships.",
    url: "https://pakroyalcollege.edu.pk",
    siteName: "Pak Royal College",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 800,
        alt: "Pak Royal College Official Seal"
      }
    ],
    locale: "en_PK",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pak Royal College | Shape Your Future. Build Your Legacy.",
    description: "Admissions Open 2026. Explore BS Programs, Diplomas, and Scholarships.",
    images: ["/images/logo.png"]
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo.png"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

import FloatingWidgets from "@/components/FloatingWidgets";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${plusJakartaSans.variable}`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen flex flex-col antialiased bg-prc-bg text-slate-800 selection:bg-prc-primary selection:text-white font-sans"
        suppressHydrationWarning
      >
        <StructuredData type="organization" />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWidgets />
      </body>
    </html>
  );
}
