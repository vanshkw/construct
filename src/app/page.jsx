"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  BrainCircuit, 
  Layers, 
  CheckCircle2,
  Trophy,
  AlertTriangle,
  GitMerge,
  Code,
  Clock,
  HardDrive,
  RefreshCw,
  MessageSquareText,
  ClipboardCopy,
  Puzzle,
  Flame,
  Users,
  Activity,
  Briefcase,
  Swords,
  GraduationCap,
  FileCode,
  ScanLine
} from "lucide-react";
import { motion } from "framer-motion";
import ShaderBackground from "@/components/ui/shader-background"; 
import { GooeyText } from "@/components/ui/gooey-text-morphing"; 

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden selection:bg-violet-500/30 text-white flex flex-col">
      
      {/* --- LAYER 1: Deep Background --- */}
      <div className="fixed inset-0 -z-20">
        <ShaderBackground />
      </div>

      {/* --- Main Content Wrapper --- */}
      <div className="relative flex-1 flex flex-col items-center w-full max-w-7xl mx-auto px-4 md:px-6 pt-32 pb-10">
        
        {/* 1. HERO SECTION */}
        <HeroSection />

        {/* 2. LIVE STATS BAR */}
        <motion.div 
          className="w-full mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
            <StatsBar />
        </motion.div>

        {/* 3. INTELLIGENT CODE WINDOW */}
        <motion.div 
          className="w-full max-w-5xl mb-32"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <CodeWindow />
        </motion.div>

        {/* 4. HOW IT WORKS (INTERACTIVE TIMELINE - KEPT AS REQUESTED) */}
        <motion.div 
          className="w-full mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
             <motion.div variants={itemVariants} className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">From Brute Force to Optimal</h2>
                <p className="text-slate-400 max-w-xl mx-auto">Hover across the timeline to see the optimization journey.</p>
            </motion.div>
            <WorkflowSteps />
        </motion.div>

        {/* 5. AI PIPELINE VISUALIZATION (UPDATED: INDIVIDUAL HOVER CARDS) */}
        <motion.div 
          className="w-full mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
             <motion.div variants={itemVariants} className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-2">Under the Hood</h2>
                <p className="text-slate-400">How CodeLens deconstructs your algorithm.</p>
            </motion.div>
            <AiPipeline />
        </motion.div>

        {/* 6. FEATURE GRID */}
        <motion.div 
          className="w-full mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-end justify-between mb-8 px-2">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Your Competitive Edge</h2>
                    <p className="text-slate-400">Professional-grade tools to master algorithmic thinking.</p>
                </div>
                <Link href="/features" className="text-xs font-mono text-violet-400 flex items-center gap-1 hover:text-violet-300 transition-colors mt-4 md:mt-0">
                    View all features <ArrowRight size={12} />
                </Link>
            </motion.div>
            <BentoGrid />
        </motion.div>

        {/* 7. MINIMAL FOOTER */}
        <MinimalFooter />

      </div>
    </div>
  );
}

// --- 1. WORKFLOW STEPS (The Scrubbing Timeline) ---

function WorkflowSteps() {
    const containerRef = useRef(null);
    const [progress, setProgress] = useState(0); // 0 to 100%

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        // Calculate percentage (0 to 100)
        const p = Math.min(100, Math.max(0, (x / rect.width) * 100));
        setProgress(p);
    };

    const handleMouseLeave = () => {
        setProgress(0);
    };

    return (
        <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 relative cursor-crosshair py-8"
        >
            {/* Base Line */}
            <div className="absolute top-20 left-0 w-full h-1 bg-white/5 rounded-full hidden md:block" />
            
            {/* Interactive Fill Line */}
            <motion.div 
                className="absolute top-20 left-0 h-1 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full hidden md:block shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                animate={{ width: `${progress}%` }}
                transition={{ type: "tween", ease: "linear", duration: 0.1 }}
            />

            <WorkflowStep 
                step="01" 
                title="Paste & Analyze" 
                desc="Drop your code. We parse ASTs to detect complexity instantly." 
                icon={<ScanLine size={24} />}
                isActive={progress > 10}
            />
            <WorkflowStep 
                step="02" 
                title="Get Insights" 
                desc="AI identifies bottlenecks (O(n²) loops) and logic flaws." 
                icon={<BrainCircuit size={24} />}
                isActive={progress > 50}
            />
            <WorkflowStep 
                step="03" 
                title="Optimize & Learn" 
                desc="Apply fixes, check diffs, and master the pattern." 
                icon={<GraduationCap size={24} />}
                isActive={progress > 85}
            />
        </div>
    )
}

function WorkflowStep({ step, title, desc, icon, isActive }) {
    return (
        <motion.div 
            className="relative flex flex-col items-center text-center group z-10"
            animate={{ 
                scale: isActive ? 1.05 : 1, 
                opacity: isActive ? 1 : 0.5,
                y: isActive ? -10 : 0
            }}
            transition={{ duration: 0.3 }}
        >
            <motion.div 
                className={`w-24 h-24 rounded-full border flex items-center justify-center mb-6 relative transition-colors duration-300 ${isActive ? "bg-[#0B1120] border-violet-500 shadow-[0_0_30px_rgba(139,92,246,0.3)]" : "bg-[#0B1120] border-white/10"}`}
            >
                <div className={`text-violet-400 transition-all duration-300 ${isActive ? "scale-110 brightness-150" : ""}`}>{icon}</div>
                <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold backdrop-blur-md transition-colors duration-300 ${isActive ? "bg-violet-500 border-violet-400 text-white" : "bg-white/10 border-white/20 text-slate-400"}`}>
                    {step}
                </div>
            </motion.div>
            <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${isActive ? "text-white" : "text-slate-500"}`}>{title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">{desc}</p>
        </motion.div>
    )
}

// --- 2. AI PIPELINE (UPDATED: Premium Hover Cards) ---

function AiPipeline() {
    return (
        <div className="relative w-full max-w-4xl mx-auto py-10">
            {/* Connecting Line (Background) */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 hidden md:block overflow-hidden">
                 <motion.div 
                    className="h-full w-1/2 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                 />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                <PipelineCard icon={<FileCode size={24} />} title="Input" desc="Raw Code" />
                <PipelineCard icon={<ScanLine size={24} />} title="Analysis" desc="AST Parsing" />
                <PipelineCard icon={<BrainCircuit size={24} />} title="Engine" desc="Complexity" />
                <PipelineCard icon={<Zap size={24} />} title="Output" desc="Insights" />
            </div>
        </div>
    )
}

function PipelineCard({ icon, title, desc }) {
    return (
        <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.1, y: -10 }}
            className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md group hover:bg-[#0B1120] hover:border-violet-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] transition-all duration-300 cursor-default"
        >
            <div className="mb-4 p-3 rounded-xl bg-white/5 text-slate-400 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                {icon}
            </div>
            <h3 className="font-bold mb-1 text-slate-300 group-hover:text-white transition-colors duration-300">{title}</h3>
            <p className="text-xs text-slate-500 group-hover:text-violet-200 transition-colors duration-300">{desc}</p>
        </motion.div>
    )
}

// --- EXISTING COMPONENTS ---

function HeroSection() {
  return (
    <div className="flex flex-col items-center text-center w-full mb-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-xs font-medium text-violet-200 flex items-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.2)] cursor-default backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
          </span>
          v1.0 is live
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative z-10 flex flex-col items-center"
      >
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-4 leading-[1.1]">
            Master Algorithms
        </h1>
        
        <GooeyText 
          texts={["With AI Mentorship", "With Real-time Logic", "With Deep Insights"]}
          morphTime={1.5}
          cooldownTime={2}
          className="h-16 md:h-24"
          textClassName="text-4xl md:text-7xl font-bold tracking-tighter text-violet-400"
        />

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mt-8 leading-relaxed">
          Don't just grind problems. Understand them. Get instant feedback on time complexity, edge cases, and logic flaws.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-4 mt-12"
      >
        <Link 
          href="/dashboard" 
          className="px-10 py-4 bg-white text-black rounded-full font-bold text-sm hover:bg-violet-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105"
        >
          <Sparkles size={18} className="text-violet-600" />
          Start Solving
        </Link>
      </motion.div>
    </div>
  );
}

function StatsBar() {
    const stats = [
        { label: "Active Users", value: "12,000+", icon: <Users size={14} className="text-blue-400" /> },
        { label: "Problems Solved", value: "450K+", icon: <CheckCircle2 size={14} className="text-green-400" /> },
        { label: "Code Reviews", value: "1.2M", icon: <MessageSquareText size={14} className="text-violet-400" /> },
        { label: "Uptime", value: "99.9%", icon: <Activity size={14} className="text-orange-400" /> },
    ];

    return (
        <div className="w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
                <motion.div 
                    key={i}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group cursor-default"
                >
                    <div className="flex items-center gap-2 mb-1 group-hover:scale-110 transition-transform">
                        {stat.icon}
                        <span className="text-2xl font-bold text-white tracking-tight">{stat.value}</span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">{stat.label}</span>
                </motion.div>
            ))}
        </div>
    )
}

function CodeWindow() {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0d1117]/90 backdrop-blur-xl shadow-2xl shadow-violet-900/20 ring-1 ring-white/5">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="text-xs text-slate-500 font-mono">two_sum.cpp</div>
        <div className="flex items-center gap-2 text-xs font-mono text-violet-400 bg-violet-500/10 px-2 py-1 rounded border border-violet-500/20">
           <BrainCircuit size={12} /> AI Assistant Active
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-6 font-mono text-xs md:text-sm border-r border-white/5 bg-black/20">
            <div className="flex gap-3 opacity-50 mb-2">
                 <span className="text-slate-600">1</span> <span className="text-purple-400">vector</span>&lt;<span className="text-yellow-300">int</span>&gt; twoSum(<span className="text-purple-400">vector</span>&lt;<span className="text-yellow-300">int</span>&gt;& nums, <span className="text-yellow-300">int</span> target) {'{'}
            </div>
            <div className="relative group">
                <div className="absolute -inset-x-4 inset-y-0 bg-red-500/10 border-l-2 border-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex gap-3 relative z-10"><span className="text-slate-600">2</span> <span className="pl-4 text-slate-300">for (<span className="text-purple-400">int</span> i = 0; i &lt; n; i++)</span></div>
                <div className="flex gap-3 relative z-10"><span className="text-slate-600">3</span> <span className="pl-8 text-slate-300">for (<span className="text-purple-400">int</span> j = i + 1; j &lt; n; j++)</span></div>
                <div className="flex gap-3 relative z-10"><span className="text-slate-600">4</span> <span className="pl-12 text-slate-300">if (nums[i] + nums[j] == target)</span></div>
                <div className="flex gap-3 relative z-10"><span className="text-slate-600">5</span> <span className="pl-16 text-purple-400">return</span> <span className="text-slate-300">{'{'} i, j {'}'};</span></div>
            </div>
            <div className="flex gap-3 opacity-50 mt-2"><span className="text-slate-600">6</span> {'}'}</div>
        </div>
        <div className="p-6 bg-[#0d1117]/50 flex flex-col justify-center">
            <div className="space-y-4">
                <motion.div initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 flex gap-3">
                    <AlertTriangle className="text-red-400 shrink-0" size={18} />
                    <div>
                        <h4 className="text-red-400 font-bold text-xs mb-1">Inefficient Complexity Detected</h4>
                        <p className="text-red-200/70 text-xs leading-relaxed">Nested loops result in <span className="font-mono bg-red-500/20 px-1 rounded">O(n²)</span>. This will TLE.</p>
                    </div>
                </motion.div>
                <motion.div initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 flex gap-3">
                    <GitMerge className="text-green-400 shrink-0" size={18} />
                    <div>
                        <h4 className="text-green-400 font-bold text-xs mb-1">Optimization Suggestion</h4>
                        <p className="text-green-200/70 text-xs leading-relaxed">Use a <span className="font-mono text-green-300">HashMap</span> to reduce to <span className="font-mono bg-green-500/20 px-1 rounded">O(n)</span>.</p>
                        <div className="mt-2 pt-2 border-t border-green-500/20"><button className="text-[10px] bg-green-500/20 hover:bg-green-500/30 text-green-300 px-2 py-1 rounded transition-colors">Apply Fix</button></div>
                    </div>
                </motion.div>
            </div>
        </div>
      </div>
    </div>
  );
}

function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full max-w-6xl auto-rows-[minmax(200px,auto)]">
      
      <BentoItem className="md:col-span-7 min-h-[300px]" gradient="from-violet-900/20 to-purple-900/20">
        <div className="relative z-20 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <BrainCircuit size={18} className="text-violet-300" />
                        <span className="text-xs font-bold text-violet-300 uppercase tracking-wider">Engine</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Visual Complexity</h3>
                    <p className="text-slate-400 text-sm max-w-md">Compare logic against constraints visually.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="px-2 py-1 bg-black/40 rounded text-[10px] font-mono text-slate-400 border border-white/5 flex items-center gap-2"><Clock size={10} /> 142ms</div>
                    <div className="px-2 py-1 bg-black/40 rounded text-[10px] font-mono text-slate-400 border border-white/5 flex items-center gap-2"><HardDrive size={10} /> 42MB</div>
                </div>
            </div>
            <div className="mt-4 flex-1 w-full relative border-l border-b border-white/10 p-2 pt-4 min-h-[120px]">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                    <line x1="0" y1="25%" x2="100%" y2="25%" stroke="white" strokeOpacity="0.05" strokeDasharray="4 4" />
                    <line x1="0" y1="50%" x2="100%" y2="50%" stroke="white" strokeOpacity="0.05" strokeDasharray="4 4" />
                    <line x1="0" y1="75%" x2="100%" y2="75%" stroke="white" strokeOpacity="0.05" strokeDasharray="4 4" />
                    <motion.path d="M0,128 Q50,120 100,0" fill="none" stroke="#EF4444" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }} />
                    <motion.path d="M0,128 Q150,100 300,80" fill="none" stroke="#22C55E" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }} />
                </svg>
                <div className="absolute top-0 right-0 text-[10px] text-red-400 bg-red-500/10 px-1 rounded">O(n²)</div>
                <div className="absolute bottom-10 right-0 text-[10px] text-green-400 bg-green-500/10 px-1 rounded">O(n log n)</div>
            </div>
        </div>
      </BentoItem>

      <BentoItem className="md:col-span-5 min-h-[300px] group" gradient="from-blue-900/20 to-cyan-900/20">
        <div className="relative z-20 h-full flex flex-col">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <Layers size={18} className="text-blue-300" />
                        <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">Integration</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Unified Dashboard</h3>
                </div>
                <div className="flex items-center gap-1 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-xs font-bold">
                    <Flame size={14} className="fill-orange-500" /> 14 Days
                </div>
            </div>
            <p className="text-slate-400 text-sm mb-8">Sync progress from LeetCode & Codeforces automatically.</p>
            <div className="flex-1 flex flex-col items-center justify-center relative bg-black/20 rounded-xl border border-white/5 p-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent opacity-50" />
                <div className="flex items-center justify-between w-full gap-2 relative z-10">
                    <div className="relative group/lc">
                        <div className="w-14 h-14 rounded-2xl bg-[#2D2D2D] border border-white/10 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 z-10 relative">
                            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" fill="#FFA116"/></svg>
                        </div>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/lc:opacity-100 transition-opacity px-2 py-1 bg-black/80 rounded text-[9px] font-mono text-white whitespace-nowrap pointer-events-none border border-white/10">Solved: 450</div>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent relative mx-2">
                         <motion.div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-orange-400 rounded-full -translate-y-1/2 shadow-[0_0_10px_#FFA116]" animate={{ x: ["0%", "100%"], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
                    </div>
                    <div className="relative z-20">
                        <div className="absolute inset-0 bg-violet-500/30 blur-xl rounded-full animate-pulse" />
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white shadow-2xl shadow-violet-500/20 group-hover:scale-105 transition-transform duration-300 border border-white/10"><Code size={28} /></div>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent relative mx-2">
                         <motion.div className="absolute top-1/2 right-0 w-1.5 h-1.5 bg-blue-400 rounded-full -translate-y-1/2 shadow-[0_0_10px_#3B82F6]" animate={{ x: ["100%", "0%"], opacity: [0, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }} />
                    </div>
                    <div className="relative group/cf">
                        <div className="w-14 h-14 rounded-2xl bg-[#2D2D2D] border border-white/10 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 z-10">
                            <div className="flex items-end gap-1 pb-1"><div className="w-1.5 h-3 bg-[#FFD400] rounded-sm" /><div className="w-1.5 h-5 bg-[#1883CC] rounded-sm" /><div className="w-1.5 h-4 bg-[#BB3333] rounded-sm" /></div>
                        </div>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/cf:opacity-100 transition-opacity px-2 py-1 bg-black/80 rounded text-[9px] font-mono text-white whitespace-nowrap pointer-events-none border border-white/10">Rating: 1450</div>
                    </div>
                </div>
                <div className="absolute bottom-3 w-full flex justify-between items-center text-[10px] text-slate-500 px-4">
                    <span className="flex items-center gap-1"><Activity size={10} className="text-green-500" /> Live Sync</span>
                    <RefreshCw size={12} className="group-hover:animate-spin opacity-50" />
                </div>
            </div>
        </div>
      </BentoItem>

      <BentoItem className="md:col-span-4 min-h-[220px]" gradient="from-yellow-900/20 to-amber-900/20">
        <div className="relative z-20 h-full flex flex-col justify-between">
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <Trophy size={18} className="text-yellow-300" />
                    <span className="text-xs font-bold text-yellow-300 uppercase tracking-wider">Rank</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Global Leaderboard</h3>
            </div>
            <div className="bg-black/30 rounded-lg p-3 border border-white/10 mt-2 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-slate-400">Current Rank</span>
                    <div className="flex items-center gap-1"><span className="text-xs font-bold text-yellow-400">Grandmaster</span></div>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "85%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                </div>
                <div className="mt-3 pt-3 border-t border-white/5 flex justify-between items-center">
                    <span className="text-[10px] text-slate-500">Friends</span>
                    <div className="flex -space-x-2">
                        {[1,2,3].map(i => (<div key={i} className="w-5 h-5 rounded-full bg-slate-700 border border-black flex items-center justify-center text-[8px] text-white">U{i}</div>))}
                        <div className="w-5 h-5 rounded-full bg-slate-800 border border-black flex items-center justify-center text-[8px] text-slate-400">+4</div>
                    </div>
                </div>
            </div>
        </div>
      </BentoItem>

      <BentoItem className="md:col-span-4 min-h-[220px]" gradient="from-pink-900/20 to-rose-900/20">
         <div className="relative z-20 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-2">
                <Zap size={18} className="text-pink-300" />
                <span className="text-xs font-bold text-pink-300 uppercase tracking-wider">Debugger</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-4">Smart Hints</h3>
            <div className="flex-1 flex flex-col gap-2 mt-auto">
                <div className="bg-white/5 rounded-lg rounded-tl-none p-2 text-[10px] text-slate-300 self-start max-w-[85%]">"Why is my DP solution failing on test case 42?"</div>
                <div className="bg-violet-500/20 rounded-lg rounded-tr-none p-2 text-[10px] text-violet-100 self-end max-w-[90%] border border-violet-500/30">"You missed integer overflow. Use <span className="font-mono text-violet-200">long long</span>."</div>
            </div>
            <div className="mt-3 flex gap-2">
                <div className="flex-1 h-7 bg-black/30 rounded border border-white/10 px-2 flex items-center text-[10px] text-slate-600">Ask a follow-up...</div>
                <div className="w-7 h-7 bg-violet-600 rounded flex items-center justify-center"><ArrowRight size={12} /></div>
            </div>
        </div>
      </BentoItem>

      <BentoItem className="md:col-span-4 min-h-[220px]" gradient="from-emerald-900/20 to-teal-900/20">
        <div className="relative z-20 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <Puzzle size={18} className="text-emerald-300" />
                        <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Library</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">Snippets</h3>
                </div>
                <div className="flex bg-black/40 rounded p-0.5 border border-white/10">
                    <div className="px-1.5 py-0.5 rounded bg-white/10 text-[9px] text-white">C++</div>
                    <div className="px-1.5 py-0.5 rounded text-[9px] text-slate-500 hover:text-white cursor-pointer">Py</div>
                    <div className="px-1.5 py-0.5 rounded text-[9px] text-slate-500 hover:text-white cursor-pointer">Java</div>
                </div>
            </div>
            <div className="bg-black/30 rounded-lg p-3 border border-white/10 font-mono text-[9px] text-slate-300 overflow-hidden mt-3 relative">
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"><ClipboardCopy size={12} className="text-emerald-400 cursor-pointer" /></div>
                <pre><code><span className="text-purple-400">void</span> dfs(<span className="text-yellow-300">int</span> u) {'{'} <br/><span className="pl-2">vis[u] = <span className="text-blue-400">1</span>;</span> <br/><span className="pl-2">for(<span className="text-yellow-300">int</span> v : adj[u])</span> <br/><span className="pl-4">if(!vis[v]) dfs(v);</span> <br/>{'}'}</code></pre>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
                 <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] text-slate-400">Graph</span>
                 <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] text-slate-400">DP</span>
            </div>
        </div>
      </BentoItem>

      <BentoItem className="md:col-span-6 min-h-[220px]" gradient="from-indigo-900/20 to-blue-900/20">
        <div className="relative z-20 h-full flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-2">
                <Briefcase size={18} className="text-indigo-300" />
                <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">Career</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Mock Interviews</h3>
            <p className="text-slate-400 text-xs mb-4">Simulate real FAANG interviews with AI agents.</p>
            <div className="flex items-center gap-3 mt-auto">
                <div className="flex items-center -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-indigo-500 border border-black flex items-center justify-center text-[10px]">AI</div>
                    <div className="w-8 h-8 rounded-full bg-slate-600 border border-black flex items-center justify-center text-[10px]">You</div>
                </div>
                <div className="h-1 flex-1 bg-white/10 rounded-full"><div className="w-3/4 h-full bg-indigo-500 rounded-full" /></div>
                <span className="text-[10px] text-indigo-300">75% Match</span>
            </div>
        </div>
      </BentoItem>

      <BentoItem className="md:col-span-6 min-h-[220px]" gradient="from-red-900/20 to-orange-900/20">
        <div className="relative z-20 h-full flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-2">
                <Swords size={18} className="text-red-300" />
                <span className="text-xs font-bold text-red-300 uppercase tracking-wider">Versus</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Peer Battles</h3>
            <p className="text-slate-400 text-xs mb-4">1v1 Coding duels to test your speed.</p>
            <div className="flex justify-between items-center mt-auto bg-black/30 p-3 rounded-lg border border-white/5">
                <div className="text-center"><div className="text-xs text-slate-400">Player 1</div><div className="text-sm font-bold text-green-400">AC</div></div>
                <div className="text-xs font-mono text-slate-500">VS</div>
                <div className="text-center"><div className="text-xs text-slate-400">Player 2</div><div className="text-sm font-bold text-slate-200">Thinking...</div></div>
            </div>
        </div>
      </BentoItem>

    </div>
  )
}

function BentoItem({ className, gradient, children }) {
  return (
    <motion.div 
        variants={itemVariants}
        className={`relative rounded-2xl p-5 border border-white/10 bg-black/40 backdrop-blur-md hover:bg-black/60 hover:border-white/20 transition-all duration-300 group shadow-xl ${className}`}
    >
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
        {children}
    </motion.div>
  )
}

function MinimalFooter() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full mt-auto py-8 border-t border-white/5 bg-black/20 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-600 gap-4">
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-violet-500/50 animate-pulse" />
            <span>© 2024 CodeLens Inc.</span>
        </div>
        <div className="flex gap-6">
            <Link href="#" className="hover:text-violet-400 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-violet-400 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-violet-400 transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-violet-400 transition-colors">GitHub</Link>
        </div>
      </div>
    </motion.footer>
  )
}