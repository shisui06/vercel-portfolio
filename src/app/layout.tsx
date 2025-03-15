"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { Cinzel, Bebas_Neue, Cormorant_Garamond } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";
import React from "react";
import ErrorBoundary from "@/components/ErrorBoundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
});

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  weight: '400',
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant-garamond',
  weight: '400',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const handleSectionChange = (index: number) => {
    console.log("Section changed to:", index);
    
  };

  return (
    <html lang="fr" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${bebasNeue.variable} ${cormorantGaramond.variable} antialiased h-full`}
        style={{
          backgroundImage: "url('/images/background/bg3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <ErrorBoundary>
          <Navbar onSectionChange={handleSectionChange} />
          <main className="relative z-10 pt-16 min-h-full">
            {children}
          </main>
        </ErrorBoundary>
      </body>
    </html>
  );
}
