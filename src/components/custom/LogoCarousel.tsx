"use client"

import { LogoCarousel, type Logo } from "@/components/logo-carousel"
import { VercelLogo, ReactLogo, NextJsLogo, TailwindLogo, FramerLogo } from "@/components/sample-logos"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Home() {
  const columnCount = 5;

  const logos: Logo[] = [
    

    { name: "Html", 
      id: 1, 
      img: () => (
        <img 
          src="/images/stackicon/html.svg" 
          alt="html" 
          className="w-20 h-20"
          style={{ objectFit: 'contain' }}
        />
      )
      },
      { name: "css", 
        id: 1, 
        img: () => (
          <img 
            src="/images/stackicon/css.png" 
            alt="css" 
            className="w-20 h-20"
            style={{ objectFit: 'contain' }}
          />
        )
        },
        { name: "js", 
          id: 1, 
          img: () => (
            <img 
              src="/images/stackicon/js.png" 
              alt="javascript" 
              className="w-20 h-20"
              style={{ objectFit: 'contain' }}
            />
          )
          },
          { name: "react", 
            id: 1, 
            img: () => (
              <img 
                src="/images/stackicon/react.png" 
                alt="raect" 
                className="w-20 h-20"
                style={{ objectFit: 'contain' }}
              />
            )
            },
            { name: "Html", 
              id: 1, 
              img: () => (
                <img 
                  src="/images/stackicon/html.svg" 
                  alt="html" 
                  className="w-20 h-20"
                  style={{ objectFit: 'contain' }}
                />
              )
              },
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
]

  return (
    <main className="flex flex-col items-center justify-center p-4 md:p-24">
      <h1 className="text-4xl font-bold text-white mb-8">
        Mon Tech Stack
      </h1>
      <Card className="bg-black border-none">
        <CardHeader>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-8">
          <div className="flex justify-center">
            <LogoCarousel logos={logos} columnCount={columnCount} />
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

