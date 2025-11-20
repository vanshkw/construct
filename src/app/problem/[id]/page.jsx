"use client";

import { use } from "react"; // <--- 1. Import 'use' hook
import Workspace from '@/components/editor/Workspace';
import { motion } from "framer-motion";

export default function ProblemPage({ params }) {
  // 2. Unwrap the params Promise
  const resolvedParams = use(params);
  const problemId = resolvedParams.id;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      // Use 100dvh to handle mobile browser address bars correctly
      // Subtract 64px (Navbar) to lock the viewport
      className="relative h-[calc(100dvh-64px)] w-full overflow-hidden bg-[#0B1120] flex flex-col"
    >
      
      {/* --- Technical Background Layer --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         {/* Grid Pattern */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         {/* Vignette */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0B1120_90%)]"></div>
      </div>

      {/* --- Main Workspace Area --- */}
      <div className="relative z-10 h-full w-full">
        {/* 3. Pass the unwrapped ID */}
        <Workspace problemId={problemId} />
      </div>

    </motion.div>
  );
}