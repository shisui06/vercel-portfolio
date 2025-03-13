"use client";
import React from "react";
import { motion } from "framer-motion";

export const ShimmerButton = ({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <motion.button
      className={`relative overflow-hidden px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 transition-all ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-white/20"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
    </motion.button>
  );
}; 