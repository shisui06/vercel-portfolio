"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ThreeDCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  imageUrl?: string;
  link?: string;
  buttonText?: string;
}

export const ThreeDCard = React.forwardRef<HTMLDivElement, ThreeDCardProps>(
  ({ className, title, description, imageUrl, link, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "relative group/card bg-black border-gray-800 w-auto h-auto rounded-xl p-6 border",
          className
        )}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3 },
        }}
        {...props}
      >
        <motion.div
          className="text-xl font-bold text-white"
          whileHover={{ translateZ: 50 }}
        >
          {title}
        </motion.div>
        <motion.p
          className="text-gray-400 text-sm max-w-sm mt-2"
          whileHover={{ translateZ: 60 }}
        >
          {description}
        </motion.p>
        {imageUrl && (
          <motion.div className="w-full mt-4" whileHover={{ translateZ: 100 }}>
            <Image
              src={imageUrl}
              height={1000}
              width={1000}
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt={title || "Card image"}
            />
          </motion.div>
        )}
        {link && (
          <motion.a
            href={link}
            className="mt-4 inline-block px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            whileHover={{ translateZ: 20 }}
          >
            View Project →
          </motion.a>
        )}
      </motion.div>
    );
  }
);
ThreeDCard.displayName = "ThreeDCard";
