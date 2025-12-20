import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "BizCombinator | The Accelerator of the Future",
  description: "An international innovation program combining AI, mentorship, and global opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${syne.variable} font-sans antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
