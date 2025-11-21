"use client";
import { motion } from "framer-motion";

export default function CodeScanner({ isScanning }) {
  if (!isScanning) return null;

  return (
    <motion.div
      // Initial state
      initial={{ top: "-10%", opacity: 0 }}
      // Animation Cycle
      animate={{ 
        top: ["0%", "100%", "0%"], 
        opacity: [0, 1, 1, 0] // Fade in at start, stay visible, fade out at end
      }}
      transition={{ 
        duration: 3, 
        repeat: Infinity, 
        ease: "easeInOut",
        times: [0, 0.5, 1] // Timing distribution
      }}
      className="absolute left-0 w-full z-50 pointer-events-none"
    >
      {/* 1. The Core Laser Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-violet-400 to-transparent shadow-[0_0_15px_2px_rgba(139,92,246,0.6)]" />
      
      {/* 2. The "Light Beam" Trail (Gradient fading down) */}
      <div className="h-20 w-full bg-gradient-to-b from-violet-500/20 to-transparent" />
      
      {/* 3. The "Light Beam" Reflection (Gradient fading up - creates a symmetric glow) */}
      <div className="absolute top-[-5rem] h-20 w-full bg-gradient-to-t from-violet-500/20 to-transparent" />

    </motion.div>
  );
}