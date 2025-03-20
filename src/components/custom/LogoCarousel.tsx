"use client"

import { LogoCarousel, type Logo } from "@/components/logo-carousel"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

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
        id: 2, 
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
          id: 3, 
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
            id: 4, 
            img: () => (
              <img 
                src="/images/stackicon/react.png" 
                alt="raect" 
                className="w-20 h-20"
                style={{ objectFit: 'contain' }}
              />
            )
            },

            { name: "tailwind", 
              id: 5, 
              img: () => (
                <img 
                  src="/images/stackicon/tailwind.png" 
                  alt="tailwind" 
                  className="w-20 h-20"
                  style={{ objectFit: 'contain' }}
                />
              )
              },

            { name: "nextjs", 
              id: 6, 
              img: () => (
                <img 
                  src="/images/stackicon/next.js.svg" 
                  alt="nextjs" 
                  className="w-20 h-20"
                  style={{ objectFit: 'contain' }}
                />
              )
              },
              { 
                name: "MySQL", 
                id: 7, 
                img: () => (
                  <img 
                    src="/images/stackicon/mysql.svg" 
                    alt="mysql" 
                    className="w-22 h-22"
                    style={{ objectFit: 'contain' }}
                  />
                )
              },
              { 
                name: "mongodb", 
                id: 8, 
                img: () => (
                  <img 
                    src="/images/stackicon/mongodb.svg" 
                    alt="mongodb" 
                    className="w-20 h-20"
                    style={{ objectFit: 'contain' }}
                  />
                )
              },
              { 
                name: "linux", 
                id: 9, 
                img: () => (
                  <img 
                    src="/images/stackicon/linux.svg" 
                    alt="linux" 
                    className="w-20 h-20"
                    style={{ objectFit: 'contain' }}
                  />
                )
              }
]

  return (
    <main className="flex flex-col items-center justify-center p-4 md:p-24">
      <h1 className="text-4xl font-bold text-white mb-8">
        Mon Tech Stack
      </h1>
      <Card className="bg-black/80 backdrop-blur-lg rounded-lg border border-white/10 shadow-xl">
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

