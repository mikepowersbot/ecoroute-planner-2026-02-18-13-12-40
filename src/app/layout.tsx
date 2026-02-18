import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "EcoRoute Planner - Sustainable Route Planning",
    template: "%s | EcoRoute Planner",
  },
  description: "EcoRoute Planner helps you find the most eco-friendly routes, reducing carbon emissions and promoting sustainable transportation options.",
  keywords: ["eco", "route", "planner", "sustainable", "transportation", "carbon", "emissions", "green", "environment", "eco-friendly", "route optimizer"],
  authors: [{ name: "EcoRoute Team" }],
  creator: "EcoRoute Team",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ecoroute-planner.vercel.app",
    title: "EcoRoute Planner - Sustainable Route Planning",
    description: "EcoRoute Planner helps you find the most eco-friendly routes, reducing carbon emissions and promoting sustainable transportation options.",
    siteName: "EcoRoute Planner",
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoRoute Planner - Sustainable Route Planning",
    description: "EcoRoute Planner helps you find the most eco-friendly routes, reducing carbon emissions and promoting sustainable transportation options.",
    creator: "@ecoroute",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}