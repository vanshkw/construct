"use client";

import { use } from "react";
import Workspace from '@/components/editor/Workspace';
import { motion } from "framer-motion";
import ShaderBackground from "@/components/ui/shader-background";

export default function ProblemPage({ params }) {
  const resolvedParams = use(params);
  const problemId = resolvedParams.id;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.99 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative h-[calc(100dvh-64px)] w-full overflow-hidden flex flex-col"
    >
      
      {/* --- Background Layer --- */}
      
      {/* 1. The Animated Shader */}
      <ShaderBackground className="-z-20" />
      
      {/* 2. Dashboard-Style Dark Overlay */}
      {/* This makes the background "black" enough for code readability while keeping the vibe */}
      <div className="fixed inset-0 bg-black/70 -z-10 pointer-events-none" />

      {/* --- Main Workspace Area --- */}
      <div className="relative z-10 h-full w-full flex-1">
        <Workspace problemId={problemId} />
      </div>

    </motion.div>
  );
}