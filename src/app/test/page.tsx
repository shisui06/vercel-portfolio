"use client";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function TestPage() {
  return (
    <TracingBeam>
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Test TracingBeam</h1>
      </div>
    </TracingBeam>
  );
} 