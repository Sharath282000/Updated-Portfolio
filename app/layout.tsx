import type { Metadata } from "next";
import "./globals.css";
import { Heebo, Inter } from 'next/font/google'
import Socialdock from "@/components/Socialdock";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/next';

export const heebo = Heebo({
  subsets: ['latin'],
  weight: [
    '100', '200', '300', '400', '500',
    '600', '700', '800', '900'
  ],
  variable: '--font-heebo',
  display: 'swap',
})

export const inter = Inter({
  subsets: ['latin'],
  weight: [
    '100', '200', '300', '400', '500',
    '600', '700', '800', '900'
  ],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Sharath - Portfolio",
  description: "Building full-stack products and secure cloud systems. Explore my works and journey.",
  keywords: [
    "Sharath",
    "Full Stack Developer",
    "Cloud Security Analyst",
    "Deloitte",
    "Portfolio",
    "Web Development",
    "Website",
    "Chennai",
    "Oracle Analyst",
    "Deloitte Analyst",
    "Analyst",
    "Sharath - Portfolio",
    "Sharath Portfolio",
    "Sharath space",
    "Space"
  ],
  authors: [{ name: "Sharath" }],
  creator: "Sharath",
  metadataBase: new URL("https://sharath.online"),
  icons: {
    icon: {
      url: "/icon.png",
      sizes: "512x512",
      type: "image/png",
    }
  },
  openGraph: {
    title: "Sharath - Portfolio",
    description:
      "Building full-stack products and secure cloud systems. Explore my works and journey.",
    url: "https://sharath.online",
    siteName: "Sharath",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Sharath Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sharath | Full-Stack Developer & Cloud Security Analyst",
    description:
      "Projects, skills, and thoughts on building modern web experiences.",
    creator: "@Sharath_tech",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${heebo.variable} ${inter.variable} antialiased`}
      >
        {children}
        <Analytics />
        <Socialdock />
        <Footer />
      </body>
    </html>
  );
}
