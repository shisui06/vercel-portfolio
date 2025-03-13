"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full">
      <div className="relative">
        <div className="absolute left-1/2 h-full w-0.5 bg-gray-600 transform -translate-x-1/2"></div>
        
        {data.map((item, index) => (
          <div 
            key={index}
            className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center mb-8`}
          >
            <div className="w-1/2 px-4">
              <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-gray-400">{item.content}</p>
              </div>
            </div>
            <div className="w-1/2 px-4">
              <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
