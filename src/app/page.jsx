"use client";
import Link from "next/link";
import { ArrowRight, Code, Cpu, GitBranch, Terminal, Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0B1120] overflow-hidden selection:bg-violet-500/30">
      
      {/* --- Background Effects --- */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[#0B1120]">
        {/* Radial Gradients for "Glow" */}
        <div className="absolute top-[-10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[120px]" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative flex flex-col items-center justify-center pt-32 pb-20 px-6 max-w-7xl mx-auto">
        
        {/* --- Hero Badge --- */}
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

        {/* --- Headline --- */}
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
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Stop staring at "Wrong Answer". Get real-time feedback on logic, complexity, and edge cases from our AI engine.
          </p>
        </motion.div>

        {/* --- Buttons --- */}
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
            className="px-8 py-3.5 bg-white/5 border border-white/10 text-white rounded-lg font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-sm group"
          >
            View Problem Set 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* --- Code Showcase (Visual Hook) --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full max-w-4xl mb-24 relative"
        >
            {/* Glow behind the code block */}
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl blur opacity-20"></div>
            
            <div className="relative rounded-xl border border-white/10 bg-[#0F1629] overflow-hidden shadow-2xl">
                {/* Fake Window Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#131B31]">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                    </div>
                    <div className="text-xs text-slate-500 font-mono">solution.cpp — Complexity Analysis</div>
                    <div className="w-10"></div> 
                </div>
                
                {/* Code Content */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-sm">
                    <div className="text-slate-300 space-y-1">
                        <div className="flex"><span className="text-slate-600 w-6">1</span><span className="text-violet-400">void</span> <span className="text-yellow-200">solve</span>() {'{'}</div>
                        <div className="flex"><span className="text-slate-600 w-6">2</span>&nbsp;&nbsp;<span className="text-violet-400">for</span>(<span className="text-fuchsia-400">int</span> i=0; i&lt;n; i++) {'{'}</div>
                        <div className="flex"><span className="text-slate-600 w-6">3</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-violet-400">for</span>(<span className="text-fuchsia-400">int</span> j=0; j&lt;n; j++) {'{'}</div>
                        <div className="flex"><span className="text-slate-600 w-6">4</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500">// processing...</span></div>
                        <div className="flex"><span className="text-slate-600 w-6">5</span>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
                        <div className="flex"><span className="text-slate-600 w-6">6</span>&nbsp;&nbsp;{'}'}</div>
                        <div className="flex"><span className="text-slate-600 w-6">7</span>{'}'}</div>
                    </div>

                    {/* AI Analysis Side */}
                    <div className="bg-white/5 rounded-lg p-4 border border-white/5 relative">
                        <div className="absolute -top-2 -right-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Sparkles size={10} /> AI Insight
                        </div>
                        <h4 className="text-white font-semibold mb-2 text-xs uppercase tracking-wider">Performance Alert</h4>
                        <p className="text-slate-400 text-xs leading-relaxed mb-3">
                            Your solution has a time complexity of <strong className="text-red-400">O(n²)</strong> due to nested loops.
                        </p>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            For <span className="bg-white/10 px-1 rounded text-slate-300">n = 10^5</span>, this will exceed the time limit (TLE). Try using a hash map to optimize to <strong className="text-green-400">O(n)</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>

        {/* --- Feature Grid --- */}
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

// --- Feature Card Component ---
function FeatureCard({ icon, title, desc, delay }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-violet-500/30 transition-all duration-300 group"
    >
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 flex items-center justify-center text-violet-400 mb-4 border border-white/5 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-violet-300 transition-colors">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
    </motion.div>
  )
}