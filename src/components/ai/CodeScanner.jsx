"use client";
import { motion } from "framer-motion";

export default function CodeScanner({ isScanning }) {
  if (!isScanning) return null;

  return (
    <motion.div
      // Initial state
      initial={{ top: "0%", opacity: 0.8 }}
      // Animation state
      animate={{ 
        top: "100%", 
        opacity: 0 
      }}
      // Loop configuration
      transition={{ 
        duration: 2, 
        repeat: Infinity, 
        ease: "linear" 
      }}
      className="absolute left-0 w-full h-[2px] bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.8)] z-50 pointer-events-none"
    />
  );
}