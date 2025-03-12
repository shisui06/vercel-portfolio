"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { Cinzel, Bebas_Neue, Cormorant_Garamond } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/navbar";
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
    // Add any additional logic you want to handle when the section changes
  };

  return (
    <html lang="fr" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${bebasNeue.variable} ${cormorantGaramond.variable} antialiased h-full bg-[url('/background/bg1.jpg')] bg-cover bg-center bg-fixed`}>
        <ErrorBoundary>
          <Navbar onSectionChange={handleSectionChange} />
          <main className="pt-16 min-h-full">
            {children}
          </main>
        </ErrorBoundary>
      </body>
    </html>
  );
}
