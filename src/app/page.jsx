"use client";
import Link from "next/link";
import { ArrowRight, Check, Code, Cpu, GitBranch } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-32 pb-20 px-6">
      
      {/* Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-400 flex items-center gap-2"
      >
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        v1.0 is now live
      </motion.div>

      {/* Headline */}
      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-6xl font-bold text-center tracking-tight text-white max-w-3xl mb-6"
      >
        Master coding with <br/>
        <span className="text-zinc-500">intelligent mentorship.</span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-zinc-400 text-center max-w-xl text-lg mb-10"
      >
        Stop staring at "Wrong Answer". Get real-time feedback on logic, complexity, and edge cases from our AI engine.
      </motion.p>

      {/* Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex gap-4 mb-24"
      >
        <Link href="/dashboard" className="px-6 py-2.5 bg-white text-black rounded font-medium text-sm hover:bg-zinc-200 transition-colors">
          Start Solving
        </Link>
        <Link href="/dashboard" className="px-6 py-2.5 bg-zinc-900 border border-zinc-800 text-white rounded font-medium text-sm hover:bg-zinc-800 transition-colors flex items-center gap-2">
          View Problem Set <ArrowRight size={14} />
        </Link>
      </motion.div>

      {/* Feature Grid (Clean & Minimal) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        <FeatureCard 
          icon={<Cpu size={20} />}
          title="Complexity Analysis"
          desc="Instant Big-O calculation. Know if your solution is O(n) or O(n²) before you submit."
        />
        <FeatureCard 
          icon={<GitBranch size={20} />}
          title="Logic Debugger"
          desc="The AI doesn't just fix syntax; it finds logical flaws in your algorithm."
        />
        <FeatureCard 
          icon={<Code size={20} />}
          title="Unified Platform"
          desc="Problems from LeetCode, Codeforces, and CodeChef in one consistent interface."
        />
      </div>

    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors">
      <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-200 mb-4 border border-zinc-700">
        {icon}
      </div>
      <h3 className="text-white font-medium mb-2">{title}</h3>
      <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
    </div>
  )
}