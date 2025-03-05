"use client";
import React from "react";

export function FlipWords({ words, className }: { words: string[]; className?: string }) {
  const [word, setWord] = React.useState(words[0]);
  
  React.useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      index = (index + 1) % words.length;
      setWord(words[index]);
    }, 2000); // Adjust the interval (in milliseconds) for faster/slower rotation
    return () => clearInterval(intervalId);
  }, [words]);

  return (
    <div className={className}>
      <span className="text-lime-400">{word}</span>
    </div>
  );
}
