"use client";
import React from "react";

export function FlipWords({ words }: { words: string[] }) {
  const [word, setWord] = React.useState(words[0]);
  
  React.useEffect(() => {
    let index = 0;
    
    function updateWord() {
      console.log("Updating word...");
      index = (index + 1) % words.length;
      setWord(words[index]);
    }
    
    const intervalId = setInterval(updateWord, 2000);
    return () => clearInterval(intervalId);
  }, [words]);

  return (
    <div style={{
      backgroundColor: "red",
      padding: "20px",
      margin: "20px",
      borderRadius: "8px",
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 9999
    }}>
      <h1 style={{
        color: "white",
        fontSize: "24px",
        fontWeight: "bold"
      }}>
        {word}
      </h1>
    </div>
  );
}
