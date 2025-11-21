"use client";
import Link from "next/link";
import { ArrowRight, Code, Cpu, GitBranch, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ShaderBackground from "@/components/ui/shader-background"; // Import the new component

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden selection:bg-violet-500/30 text-white">
      
      {/* --- Background Layer --- */}
      <div className="fixed inset-0 -z-10">
        <ShaderBackground />
      </div>

      {/* --- Main Content --- */}
      <div className="relative flex flex-col items-center justify-center pt-32 pb-20 px-6 max-w-7xl mx-auto">
        
        {/* Your existing Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 group"
        >
          <div className="px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-xs font-medium text-violet-200 flex items-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.2)] group-hover:bg-violet-500/20 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            v1.0 is now live
          </div>
        </motion.div>

        {/* Your existing Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-8 relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Master Algorithms with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-white animate-gradient-x">
              Intelligent Mentorship
            </span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Stop staring at "Wrong Answer". Get real-time feedback on logic, complexity, and edge cases from our AI engine.
          </p>
        </motion.div>

        {/* Your existing Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <Link 
            href="/dashboard" 
            className="px-8 py-3.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-lg font-semibold text-sm hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <Sparkles size={16} className="group-hover:animate-pulse" />
            Start Solving Now
          </Link>
          <Link 
            href="/dashboard" 
            className="px-8 py-3.5 bg-black/20 border border-white/10 text-white rounded-lg font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-md group"
          >
            View Problem Set 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Your existing Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          <FeatureCard 
            icon={<Cpu size={24} />}
            title="Complexity Analysis"
            desc="Instant Big-O calculation. Know if your solution is O(n) or O(n²) before you submit."
            delay={0.4}
          />
          <FeatureCard 
            icon={<GitBranch size={24} />}
            title="Logic Debugger"
            desc="The AI doesn't just fix syntax; it finds logical flaws in your algorithm."
            delay={0.5}
          />
          <FeatureCard 
            icon={<Code size={24} />}
            title="Unified Platform"
            desc="Problems from LeetCode, Codeforces, and CodeChef in one consistent interface."
            delay={0.6}
          />
        </div>

      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc, delay }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      className="p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm hover:bg-white/10 hover:border-violet-500/30 transition-all duration-300 group"
    >
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 flex items-center justify-center text-violet-400 mb-4 border border-white/5 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-violet-300 transition-colors">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
    </motion.div>
  )
}