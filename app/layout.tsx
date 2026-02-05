import React from "react";
import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { AnalyticsProvider } from "@/components/analytics";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.spasbretagne.fr";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d6b5c",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Spas Bretagne - Les Meilleurs Spas de Bretagne",
    template: "%s | Spas Bretagne",
  },
  description:
    "Découvrez les meilleurs spas et centres de bien-être en Bretagne. Thalassothérapie, massages, soins du corps et moments de détente face à la mer.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: baseUrl,
    siteName: "Spas Bretagne",
    title: "Spas Bretagne - Les Meilleurs Spas de Bretagne",
    description:
      "Découvrez les meilleurs spas et centres de bien-être en Bretagne. Thalassothérapie, massages et soins face à la mer.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spas Bretagne - Les Meilleurs Spas de Bretagne",
    description:
      "Découvrez les meilleurs spas et centres de bien-être en Bretagne.",
  },
  alternates: { canonical: baseUrl },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <AnalyticsProvider />
      </body>
    </html>
  );
}
