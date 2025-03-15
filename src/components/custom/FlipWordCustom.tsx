import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["soul", "creature", "entity", "human"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl md:text-6xl mx-auto text-white font-bold">
        Welcome beautiful <FlipWords words={words} className="text-4xl md:text-6xl font-bold text-white" /> into my world
      </div>
    </div>
  );
}
