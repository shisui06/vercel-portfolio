"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { Cinzel, Bebas_Neue, Cormorant_Garamond } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/navbar";
import React from "react";
import { metadata } from "./metadata";

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
  const [currentBg, setCurrentBg] = React.useState('/background/blurry-colorful.jpg');
  const backgrounds = [
    '/background/bg1.jpg',
    '/background/bg2.jpg',
    '/background/bg3.jpg',
    '/background/bg4.jpg'
  ];

  const handleSectionChange = (index: number) => {
    setCurrentBg(backgrounds[index % backgrounds.length]);
  };

  return (
    <html lang="fr">
      <body
        style={{ backgroundImage: `url(${currentBg})` }}
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${bebasNeue.variable} ${cormorantGaramond.variable} antialiased min-h-screen bg-cover bg-center bg-fixed bg-no-repeat transition-all duration-500`}
      >
        <Navbar onSectionChange={handleSectionChange} />
        <main className="pt-16 bg-jetblack/90">{children}</main>
      </body>
    </html>
  );
}
