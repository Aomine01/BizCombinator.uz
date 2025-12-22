import type { Metadata, Viewport } from "next";
import { Inter, Syne } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Prevent invisible text during font load
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap", // Prevent invisible text during font load
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  title: "BizCombinator - Transform Ideas into Global Ventures",
  description: "We help entrepreneurs scale from zero to global domination. Expert mentorship, funding access, and proven strategies to build unicorns.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://bizcombinator.uz'),
  alternates: {
    canonical: "/",
  },
  keywords: ["startup accelerator", "business incubator", "venture capital", "entrepreneurship", "mentorship", "funding", "global expansion", "unicorn startups"],
  authors: [{ name: "BizCombinator" }],
  creator: "BizCombinator",
  publisher: "BizCombinator",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "BizCombinator - Transform Ideas into Global Ventures",
    description: "We help entrepreneurs scale from zero to global domination. Expert mentorship, funding access, and proven strategies to build unicorns.",
    siteName: "BizCombinator",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "BizCombinator - The Accelerator of the Future",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BizCombinator - Transform Ideas into Global Ventures",
    description: "We help entrepreneurs scale from zero to global domination. Expert mentorship, funding access, and proven strategies to build unicorns.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@bizcombinator",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body
        className={`font-sans antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
