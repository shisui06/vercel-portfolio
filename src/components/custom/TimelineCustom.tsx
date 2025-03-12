"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineEntry {
  title: string;
  date: string;
  description: string;
  icon?: React.ReactNode;
}

interface TimelineCustomProps {
  entries: TimelineEntry[];
  className?: string;
}

export const TimelineCustom = ({ entries, className }: TimelineCustomProps) => {
  return (
    <div className={cn("relative max-w-4xl mx-auto", className)}>
      {/* Timeline line */}
      <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-neutral-200 via-neutral-500 to-neutral-200 dark:from-neutral-700 dark:via-neutral-400 dark:to-neutral-700 transform -translate-x-1/2" />
      
      {entries.map((entry, index) => (
        <motion.div
          key={index}
          className="relative mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center`}>
            {/* Content */}
            <div className={`w-1/2 p-4 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
              <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                {entry.title}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                {entry.date}
              </p>
              <p className="text-neutral-600 dark:text-neutral-300">
                {entry.description}
              </p>
            </div>
            
            {/* Icon */}
            <div className="w-1/2 flex justify-center">
              <div className="w-12 h-12 rounded-full bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 flex items-center justify-center">
                {entry.icon || (
                  <span className="text-neutral-500 dark:text-neutral-400">
                    {index + 1}
                  </span>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};



