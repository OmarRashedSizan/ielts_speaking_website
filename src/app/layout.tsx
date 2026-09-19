import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ProgressProvider } from "@/components/providers/ProgressProvider";
import SiteHeader from "@/components/shell/SiteHeader";
import SiteFooter from "@/components/shell/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://bolte-shikhi.example.com"),
  title: {
    default: "Bolte Shikhi — IELTS Speaking for Bangladeshi Learners (Band 6–6.5)",
    template: "%s · Bolte Shikhi",
  },
  description:
    "A structured IELTS Speaking course for Bangladeshi learners targeting Band 6.0–6.5. Learn how to build answers, generate ideas and speak naturally — without memorising model answers.",
  keywords: [
    "IELTS Speaking",
    "Bangladesh IELTS",
    "Band 6.5 speaking",
    "Part 2 cue card",
    "Part 3 answers",
    "ইংরেজি স্পিকিং",
  ],
  openGraph: {
    title: "Bolte Shikhi — IELTS Speaking for Bangladeshi Learners",
    description:
      "Build IELTS Speaking skills — don't memorise answers. Structured lessons, idea generation and full mock tests for Band 6–6.5.",
    type: "website",
    locale: "en_BD",
  },
  robots: { index: true, follow: true },
  manifest: "/site.webmanifest",
  applicationName: "Bolte Shikhi",
  authors: [{ name: "Bolte Shikhi" }],
};

export const viewport: Viewport = {
  themeColor: "#f7f6f2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/*
          Fonts are linked at runtime rather than fetched at build time:
          the build stays offline-friendly, and if the CDN is unreachable the
          CSS font stacks in globals.css fall back to system fonts.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+Bengali:wght@400;500;600&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&display=swap"
        />
      </head>
      <body className="min-h-dvh flex flex-col">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ProgressProvider>
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </ProgressProvider>
      </body>
    </html>
  );
}
