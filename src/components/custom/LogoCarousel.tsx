"use client"

import { LogoCarousel, type Logo } from "@/components/logo-carousel"
import { VercelLogo, ReactLogo, NextJsLogo, TailwindLogo, FramerLogo } from "@/components/sample-logos"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Home() {
  const [columnCount, setColumnCount] = useState(5)

  const logos: Logo[] = [
    { 
      name: "Figma", 
      id: 6, 
      img: () => (
        <img 
          src="/images/stackicon/figma.svg" 
          alt="Figma" 
          className="w-8 h-8"
          style={{ objectFit: 'contain' }}
        />
      )
    },
    { name: "Vercel", id: 1, img: VercelLogo },
    { name: "React", id: 2, img: ReactLogo },
    { name: "Next.js", id: 3, img: NextJsLogo },
    { name: "Tailwind CSS", id: 4, img: TailwindLogo },
    { name: "Framer Motion", id: 5, img: FramerLogo },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <h1>Mon Tech Stack</h1>
      <Card className="bg-black border-none">
        <CardHeader>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-8">
          <div className="flex justify-center">
            <LogoCarousel logos={logos} columnCount={columnCount} />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <motion.button 
              className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setColumnCount(2)}
            >
              2 Columns
            </motion.button>
            <motion.button 
              className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setColumnCount(3)}
            >
              3 Columns
            </motion.button>
            <motion.button 
              className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setColumnCount(4)}
            >
              4 Columns
            </motion.button>
            <motion.button 
              className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setColumnCount(5)}
            >
              5 Columns
            </motion.button>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

