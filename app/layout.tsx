import type { Metadata } from "next";
import "./globals.css";
import { Heebo, Inter } from 'next/font/google'
import Socialdock from "@/components/Socialdock";
import Footer from "@/components/Footer";

export const heebo = Heebo({
  subsets: ['latin'],
  weight: [
    '100','200','300','400','500',
    '600','700','800','900'
  ],
  variable: '--font-heebo',
  display: 'swap',
})

export const inter = Inter({
  subsets: ['latin'],
  weight: [
    '100','200','300','400','500',
    '600','700','800','900'
  ],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Sharath - Portfolio",
  description: "This website shows all my works, short bio and updated contact information",
  icons:{
    icon :{
      url : "/icon.png",
      sizes: "512x512",
      type: "image/png",
    }
  }
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
        <Socialdock/>
        <Footer/>
      </body>
    </html>
  );
}
