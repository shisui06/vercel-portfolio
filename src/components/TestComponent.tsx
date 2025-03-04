"use client";
import React from "react";

export function TestComponent() {
  return (
    <div style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "blue",
      color: "white",
      padding: "20px",
      borderRadius: "8px",
      zIndex: 9999
    }}>
      <h1>Test Component</h1>
    </div>
  );
} 