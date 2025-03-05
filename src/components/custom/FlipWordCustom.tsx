import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["projects", "creations", "designs", "ideas"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-6xl mx-auto text-white font-normal">
        Welcome my <FlipWords words={words} /> <br />
        websites with Aceternity UI
      </div>
    </div>
  );
}
