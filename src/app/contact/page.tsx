"use client";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ContactRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to main page with contact hash
    router.replace('/#contact');
  }, [router]);

  return null; // No need for a loading message
}
