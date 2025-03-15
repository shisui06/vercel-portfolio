"use client"
import React from "react"
import LogoCarousel from "@/components/custom/LogoCarousel"

const logos = [
  { id: 1, name: "Logo 1", img: "/logos/logo1.png" },
  { id: 2, name: "Logo 2", img: "/logos/logo2.png" },
]

export default function TestLogoCarousel() {
  return <LogoCarousel logos={logos} />
} 