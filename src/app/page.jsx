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
  ScanLine,
  Terminal
} from "lucide-react";
import { motion } from "framer-motion";
import ShaderBackground from "@/components/ui/shader-background"; 
import { GooeyText } from "@/components/ui/gooey-text-morphing"; 

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

// Text reveal variant for headings
const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden selection:bg-violet-500/30 text-white flex flex-col font-sans">
      
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
          className="w-full mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
            <StatsBar />
        </motion.div>

        {/* 3. INTELLIGENT CODE WINDOW */}
        <motion.div 
          className="w-full max-w-5xl mb-40"
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
            <CodeWindow />
        </motion.div>

        {/* 4. HOW IT WORKS */}
        <motion.div 
          className="w-full mb-40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
             <div className="text-center mb-20">
                <motion.h2 
                  variants={textVariant} 
                  className="text-4xl md:text-6xl font-bold text-white mb-6 font-display tracking-tight"
                >
                  From <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Brute Force</span> to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Optimal</span>
                </motion.h2>
                <motion.p 
                  variants={textVariant} 
                  className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                >
                  Stop guessing. Hover across the timeline to see the optimization journey step-by-step.
                </motion.p>
            </div>
            <WorkflowSteps />
        </motion.div>

        {/* 5. AI PIPELINE VISUALIZATION */}
        <motion.div 
          className="w-full mb-40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
             <div className="text-center mb-20">
                <motion.h2 
                  variants={textVariant}
                  className="text-4xl md:text-6xl font-bold text-white mb-6 font-display tracking-tight"
                >
                  Under the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Hood</span>
                </motion.h2>
                <motion.p 
                  variants={textVariant}
                  className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                >
                  See how CodeLens breaks down, analyzes, and rebuilds your algorithm in milliseconds.
                </motion.p>
            </div>
            <AiPipeline />
        </motion.div>

        {/* 6. FEATURE GRID */}
        <motion.div 
          className="w-full mb-40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-end justify-between mb-12 px-2">
                <div className="max-w-2xl">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-display tracking-tight">
                      Your Competitive <span className="text-violet-400">Edge</span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                      Professional-grade tools designed to transform you from a coder into an algorithmic master.
                    </p>
                </div>
                <Link href="/features" className="hidden md:flex text-sm font-mono text-violet-400 items-center gap-2 hover:text-violet-300 transition-colors group">
                    View all features <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </motion.div>
            <BentoGrid />
        </motion.div>

        {/* 7. FINAL CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="w-full"
        >
          <FinalCTA />
        </motion.div>

        {/* 8. MINIMAL FOOTER */}
        <MinimalFooter />

      </div>
    </div>
  );
}

// --- FINAL CTA COMPONENT (UPDATED) ---

function FinalCTA() {
  return (
    <motion.div 
      variants={itemVariants}
      className="w-full relative py-32 mb-10 flex flex-col items-center text-center overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-3xl group"
    >
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-500/10 via-transparent to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-1000" />
        
        <div className="relative z-10 px-6">
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-8 backdrop-blur-md"
            >
                <Terminal size={14} /> Ready to commit?
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 font-display"
            >
                Code at the <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Speed of Thought</span>
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-slate-300/80 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
                Join 12,000+ developers who have elevated their problem-solving skills. 
                Stop getting TLE. Start getting AC.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
                <Link 
                    href="/signup"
                    className="px-12 py-5 bg-white text-black rounded-full font-bold text-base hover:bg-violet-50 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center gap-2"
                >
                    <Sparkles size={20} className="text-violet-600" />
                    Start Your Journey
                </Link>
            </motion.div>
        </div>

        {/* Grid Floor (Subtle) */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] mask-image-gradient-b opacity-50" />
    </motion.div>
  )
}

// --- 1. WORKFLOW STEPS (LAVA THEME) ---

function WorkflowSteps() {
    const containerRef = useRef(null);
    const [progress, setProgress] = useState(0); // 0 to 100%

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
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
            className="grid grid-cols-1 md:grid-cols-3 gap-8 relative cursor-crosshair py-12"
        >
            {/* Base Line */}
            <div className="absolute top-24 left-0 w-full h-1 bg-white/5 rounded-full hidden md:block" />
            
            {/* Interactive Fill Line - ORANGE LAVA */}
            <motion.div 
                className="absolute top-24 left-0 h-1 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 rounded-full hidden md:block shadow-[0_0_20px_rgba(249,115,22,0.6)]"
                animate={{ width: `${progress}%` }}
                transition={{ type: "tween", ease: "linear", duration: 0.1 }}
            />

            <WorkflowStep 
                step="01" 
                title="Paste & Analyze" 
                desc="Drop your code. We parse ASTs to detect complexity instantly." 
                icon={<ScanLine size={32} />}
                isActive={progress > 10}
                colorTheme="red"
            />
            <WorkflowStep 
                step="02" 
                title="Get Insights" 
                desc="AI identifies bottlenecks (O(n²) loops) and logic flaws." 
                icon={<BrainCircuit size={32} />}
                isActive={progress > 50}
                colorTheme="orange"
            />
            <WorkflowStep 
                step="03" 
                title="Optimize & Learn" 
                desc="Apply fixes, check diffs, and master the pattern." 
                icon={<GraduationCap size={32} />}
                isActive={progress > 85}
                colorTheme="yellow"
            />
        </div>
    )
}

function WorkflowStep({ step, title, desc, icon, isActive, colorTheme }) {
    const themeStyles = {
        red: { border: "border-red-500", shadow: "shadow-[0_0_40px_rgba(220,38,38,0.4)]", text: "text-red-400", bgIcon: "bg-red-500 text-white", bgStep: "bg-red-500 text-white" },
        orange: { border: "border-orange-500", shadow: "shadow-[0_0_40px_rgba(249,115,22,0.4)]", text: "text-orange-400", bgIcon: "bg-orange-500 text-white", bgStep: "bg-orange-500 text-white" },
        yellow: { border: "border-yellow-400", shadow: "shadow-[0_0_40px_rgba(250,204,21,0.4)]", text: "text-yellow-400", bgIcon: "bg-yellow-400 text-black", bgStep: "bg-yellow-400 text-black" }
    };

    const currentTheme = themeStyles[colorTheme];

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
                className={`w-32 h-32 rounded-full border-2 flex items-center justify-center mb-8 relative transition-colors duration-300 ${isActive ? `bg-[#0B1120] ${currentTheme.border} ${currentTheme.shadow}` : "bg-[#0B1120] border-white/10"}`}
            >
                <div className={`transition-all duration-300 ${isActive ? `${currentTheme.text} scale-110 brightness-110` : "text-slate-500"}`}>{icon}</div>
                <div className={`absolute -top-3 -right-3 w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold backdrop-blur-md transition-colors duration-300 ${isActive ? `${currentTheme.bgStep} border-transparent` : "bg-white/10 border-white/20 text-slate-400"}`}>
                    {step}
                </div>
            </motion.div>
            <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 font-display ${isActive ? "text-white" : "text-slate-500"}`}>{title}</h3>
            <p className="text-base text-slate-400 leading-relaxed max-w-xs">{desc}</p>
        </motion.div>
    )
}

// --- 2. AI PIPELINE (RGB COLORS + GAP) ---

function AiPipeline() {
    return (
        <div className="relative w-full max-w-6xl mx-auto py-10">
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 hidden md:block overflow-hidden">
                 <motion.div 
                    className="h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                 />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                <PipelineCard icon={<FileCode size={28} />} title="Input" desc="Raw Code Parsing" color="red" />
                <PipelineCard icon={<ScanLine size={28} />} title="Analysis" desc="AST & Control Flow" color="green" />
                <PipelineCard icon={<BrainCircuit size={28} />} title="Engine" desc="Complexity Calc" color="blue" />
                <PipelineCard icon={<Zap size={28} />} title="Output" desc="Actionable Insights" color="purple" />
            </div>
        </div>
    )
}

function PipelineCard({ icon, title, desc, color }) {
    const colors = {
        red: "group-hover:border-red-500/50 group-hover:bg-red-500/10 group-hover:shadow-[0_0_60px_rgba(220,38,38,0.3)] text-red-400",
        green: "group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 group-hover:shadow-[0_0_60px_rgba(16,185,129,0.3)] text-emerald-400",
        blue: "group-hover:border-blue-500/50 group-hover:bg-blue-500/10 group-hover:shadow-[0_0_60px_rgba(59,130,246,0.3)] text-blue-400",
        purple: "group-hover:border-purple-500/50 group-hover:bg-purple-500/10 group-hover:shadow-[0_0_60px_rgba(168,85,247,0.3)] text-purple-400",
    };
    const iconColors = {
        red: "group-hover:bg-red-500", green: "group-hover:bg-emerald-500", blue: "group-hover:bg-blue-500", purple: "group-hover:bg-purple-500",
    }
    return (
        <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.1, y: -15 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }} 
            className={`flex flex-col items-center text-center p-8 rounded-[2rem] border border-white/10 bg-[#0B1120] backdrop-blur-xl group transition-all duration-500 cursor-default relative z-10 ${colors[color]}`}
        >
            <div className={`mb-6 p-5 rounded-2xl bg-white/5 ${colors[color].split(" ")[3]} group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${iconColors[color]}`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-200 group-hover:text-white transition-colors duration-300 font-display">{title}</h3>
            <p className="text-sm text-slate-500 group-hover:text-slate-300 transition-colors duration-300">{desc}</p>
        </motion.div>
    )
}

// --- EXISTING COMPONENTS (Enhanced Typography) ---

function HeroSection() {
  return (
    <div className="flex flex-col items-center text-center w-full mb-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="px-5 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-sm font-medium text-violet-200 flex items-center gap-2 shadow-[0_0_30px_rgba(139,92,246,0.2)] cursor-default backdrop-blur-md hover:bg-violet-500/20 transition-colors">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-500"></span>
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
        {/* REDUCED FONT SIZE FROM 6xl/9xl to 5xl/8xl */}
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-[1.1] font-display">
            Master <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">Algorithms</span>
        </h1>
        
        <GooeyText 
          texts={["With AI Mentorship", "With Real-time Logic", "With Deep Insights"]}
          morphTime={1.5}
          cooldownTime={2}
          className="h-20 md:h-32"
          textClassName="text-5xl md:text-8xl font-bold tracking-tighter text-violet-400 font-display"
        />

        <p className="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto mt-10 leading-relaxed font-light">
          Don't just grind problems. Understand them. Get instant feedback on time complexity, edge cases, and logic flaws.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-6 mt-16"
      >
        <Link 
          href="/dashboard" 
          className="px-12 py-5 bg-white text-black rounded-full font-bold text-base hover:bg-violet-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]"
        >
          <Sparkles size={20} className="text-violet-600" />
          Start Solving
        </Link>
      </motion.div>
    </div>
  );
}

function StatsBar() {
    const stats = [
        { label: "Active Users", value: "12,000+", icon: <Users size={16} className="text-blue-400" /> },
        { label: "Problems Solved", value: "450K+", icon: <CheckCircle2 size={16} className="text-green-400" /> },
        { label: "Code Reviews", value: "1.2M", icon: <MessageSquareText size={16} className="text-violet-400" /> },
        { label: "Uptime", value: "99.9%", icon: <Activity size={16} className="text-orange-400" /> },
    ];

    return (
        <div className="w-full max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
                <motion.div 
                    key={i}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group cursor-default"
                >
                    <div className="flex items-center gap-2 mb-2 group-hover:scale-110 transition-transform">
                        {stat.icon}
                        <span className="text-3xl font-bold text-white tracking-tight font-display">{stat.value}</span>
                    </div>
                    <span className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</span>
                </motion.div>
            ))}
        </div>
    )
}

function CodeWindow() {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0d1117]/90 backdrop-blur-xl shadow-2xl shadow-violet-900/20 ring-1 ring-white/5">
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
        <div className="flex gap-2">
          <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56]" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F]" />
        </div>
        <div className="text-sm text-slate-500 font-mono">two_sum.cpp</div>
        <div className="flex items-center gap-2 text-xs font-mono text-violet-400 bg-violet-500/10 px-3 py-1.5 rounded-full border border-violet-500/20">
           <BrainCircuit size={14} /> AI Assistant Active
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 font-mono text-xs md:text-sm border-r border-white/5 bg-black/20">
            <div className="flex gap-4 opacity-50 mb-3">
                 <span className="text-slate-600 w-4 text-right">1</span> <span><span className="text-purple-400">vector</span>&lt;<span className="text-yellow-300">int</span>&gt; twoSum(<span className="text-purple-400">vector</span>&lt;<span className="text-yellow-300">int</span>&gt;& nums, <span className="text-yellow-300">int</span> target) {'{'}</span>
            </div>
            <div className="relative group">
                <div className="absolute -inset-x-8 inset-y-0 bg-red-500/10 border-l-4 border-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex gap-4 relative z-10 mb-1"><span className="text-slate-600 w-4 text-right">2</span> <span className="pl-4 text-slate-300">for (<span className="text-purple-400">int</span> i = 0; i &lt; n; i++)</span></div>
                <div className="flex gap-4 relative z-10 mb-1"><span className="text-slate-600 w-4 text-right">3</span> <span className="pl-8 text-slate-300">for (<span className="text-purple-400">int</span> j = i + 1; j &lt; n; j++)</span></div>
                <div className="flex gap-4 relative z-10 mb-1"><span className="text-slate-600 w-4 text-right">4</span> <span className="pl-12 text-slate-300">if (nums[i] + nums[j] == target)</span></div>
                <div className="flex gap-4 relative z-10 mb-1"><span className="text-slate-600 w-4 text-right">5</span> <span className="pl-16 text-purple-400">return</span> <span className="text-slate-300">{'{'} i, j {'}'};</span></div>
            </div>
            <div className="flex gap-4 opacity-50 mt-3"><span className="text-slate-600 w-4 text-right">6</span> {'}'}</div>
        </div>
        <div className="p-8 bg-[#0d1117]/50 flex flex-col justify-center">
            <div className="space-y-6">
                <motion.div initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex gap-4">
                    <AlertTriangle className="text-red-400 shrink-0 mt-1" size={20} />
                    <div>
                        <h4 className="text-red-400 font-bold text-sm mb-1">Inefficient Complexity Detected</h4>
                        <p className="text-red-200/70 text-xs leading-relaxed">Nested loops result in <span className="font-mono bg-red-500/20 px-1.5 py-0.5 rounded">O(n²)</span>. This will TLE.</p>
                    </div>
                </motion.div>
                <motion.div initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 flex gap-4">
                    <GitMerge className="text-green-400 shrink-0 mt-1" size={20} />
                    <div>
                        <h4 className="text-green-400 font-bold text-sm mb-1">Optimization Suggestion</h4>
                        <p className="text-green-200/70 text-xs leading-relaxed">Use a <span className="font-mono text-green-300">HashMap</span> to reduce to <span className="font-mono bg-green-500/20 px-1.5 py-0.5 rounded">O(n)</span>.</p>
                        <div className="mt-3 pt-3 border-t border-green-500/20"><button className="text-xs font-medium bg-green-500/20 hover:bg-green-500/30 text-green-300 px-3 py-1.5 rounded-lg transition-colors">Apply Fix</button></div>
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
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-6xl auto-rows-[minmax(200px,auto)]">
      
      {/* Card 1: Complexity */}
      <BentoItem className="md:col-span-7 min-h-[320px]" gradient="from-violet-900/20 to-purple-900/20">
        <div className="relative z-20 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <BrainCircuit size={20} className="text-violet-300" />
                        <span className="text-xs font-bold text-violet-300 uppercase tracking-wider">Engine</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-display">Visual Complexity</h3>
                    <p className="text-slate-400 text-sm max-w-md">Compare logic against constraints visually.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="px-3 py-1.5 bg-black/40 rounded-lg text-[10px] font-mono text-slate-400 border border-white/5 flex items-center gap-2"><Clock size={12} /> 142ms</div>
                    <div className="px-3 py-1.5 bg-black/40 rounded-lg text-[10px] font-mono text-slate-400 border border-white/5 flex items-center gap-2"><HardDrive size={12} /> 42MB</div>
                </div>
            </div>
            <div className="mt-4 flex-1 w-full relative border-l border-b border-white/10 p-2 pt-4 min-h-[140px]">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                    <line x1="0" y1="25%" x2="100%" y2="25%" stroke="white" strokeOpacity="0.05" strokeDasharray="4 4" />
                    <line x1="0" y1="50%" x2="100%" y2="50%" stroke="white" strokeOpacity="0.05" strokeDasharray="4 4" />
                    <line x1="0" y1="75%" x2="100%" y2="75%" stroke="white" strokeOpacity="0.05" strokeDasharray="4 4" />
                    <motion.path d="M0,128 Q50,120 100,0" fill="none" stroke="#EF4444" strokeWidth="3" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }} />
                    <motion.path d="M0,128 Q150,100 300,80" fill="none" stroke="#22C55E" strokeWidth="3" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }} />
                </svg>
                <div className="absolute top-0 right-0 text-[10px] text-red-400 bg-red-500/10 px-2 py-0.5 rounded">O(n²)</div>
                <div className="absolute bottom-10 right-0 text-[10px] text-green-400 bg-green-500/10 px-2 py-0.5 rounded">O(n log n)</div>
            </div>
        </div>
      </BentoItem>

      {/* Card 2: Unified Dashboard */}
      <BentoItem className="md:col-span-5 min-h-[320px] group" gradient="from-blue-900/20 to-cyan-900/20">
        <div className="relative z-20 h-full flex flex-col">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <Layers size={20} className="text-blue-300" />
                        <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">Integration</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white font-display">Unified Dashboard</h3>
                </div>
                <div className="flex items-center gap-1 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-xs font-bold">
                    <Flame size={14} className="fill-orange-500" /> 14 Days
                </div>
            </div>
            <p className="text-slate-400 text-sm mb-8">Sync progress from LeetCode & Codeforces automatically.</p>
            <div className="flex-1 flex flex-col items-center justify-center relative bg-black/20 rounded-2xl border border-white/5 p-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent opacity-50" />
                <div className="flex items-center justify-between w-full gap-2 relative z-10">
                    <div className="relative group/lc">
                        <div className="w-14 h-14 rounded-2xl bg-[#2D2D2D] border border-white/10 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 z-10 relative">
                            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" fill="#FFA116"/></svg>
                        </div>
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/lc:opacity-100 transition-opacity px-2 py-1 bg-black/80 rounded text-[9px] font-mono text-white whitespace-nowrap pointer-events-none border border-white/10">Solved: 450</div>
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
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/cf:opacity-100 transition-opacity px-2 py-1 bg-black/80 rounded text-[9px] font-mono text-white whitespace-nowrap pointer-events-none border border-white/10">Rating: 1450</div>
                    </div>
                </div>
                <div className="absolute bottom-3 w-full flex justify-between items-center text-[10px] text-slate-500 px-4">
                    <span className="flex items-center gap-1"><Activity size={12} className="text-green-500" /> Live Sync</span>
                    <RefreshCw size={12} className="group-hover:animate-spin opacity-50" />
                </div>
            </div>
        </div>
      </BentoItem>

      {/* Card 3: Gamification */}
      <BentoItem className="md:col-span-4 min-h-[240px]" gradient="from-yellow-900/20 to-amber-900/20">
        <div className="relative z-20 h-full flex flex-col justify-between">
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <Trophy size={20} className="text-yellow-300" />
                    <span className="text-xs font-bold text-yellow-300 uppercase tracking-wider">Rank</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-display">Global Leaderboard</h3>
            </div>
            <div className="bg-black/30 rounded-xl p-4 border border-white/10 mt-2 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-slate-400">Current Rank</span>
                    <div className="flex items-center gap-1"><span className="text-sm font-bold text-yellow-400">Grandmaster</span></div>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "85%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                </div>
                <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
                    <span className="text-[10px] text-slate-500">Friends</span>
                    <div className="flex -space-x-2">
                        {[1,2,3].map(i => (<div key={i} className="w-6 h-6 rounded-full bg-slate-700 border border-black flex items-center justify-center text-[9px] text-white">U{i}</div>))}
                        <div className="w-6 h-6 rounded-full bg-slate-800 border border-black flex items-center justify-center text-[9px] text-slate-400">+4</div>
                    </div>
                </div>
            </div>
        </div>
      </BentoItem>

      {/* Card 4: AI Chat */}
      <BentoItem className="md:col-span-4 min-h-[240px]" gradient="from-pink-900/20 to-rose-900/20">
         <div className="relative z-20 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-2">
                <Zap size={20} className="text-pink-300" />
                <span className="text-xs font-bold text-pink-300 uppercase tracking-wider">Debugger</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 font-display">Smart Hints</h3>
            <div className="flex-1 flex flex-col gap-3 mt-auto">
                <div className="bg-white/5 rounded-xl rounded-tl-none p-3 text-xs text-slate-300 self-start max-w-[85%]">"Why is my DP solution failing on test case 42?"</div>
                <div className="bg-violet-500/20 rounded-xl rounded-tr-none p-3 text-xs text-violet-100 self-end max-w-[90%] border border-violet-500/30">"You missed integer overflow. Use <span className="font-mono text-violet-200">long long</span>."</div>
            </div>
            <div className="mt-4 flex gap-2">
                <div className="flex-1 h-9 bg-black/30 rounded-lg border border-white/10 px-3 flex items-center text-xs text-slate-600">Ask a follow-up...</div>
                <div className="w-9 h-9 bg-violet-600 rounded-lg flex items-center justify-center"><ArrowRight size={14} /></div>
            </div>
        </div>
      </BentoItem>

      {/* Card 5: Templates */}
      <BentoItem className="md:col-span-4 min-h-[240px]" gradient="from-emerald-900/20 to-teal-900/20">
        <div className="relative z-20 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <Puzzle size={20} className="text-emerald-300" />
                        <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Library</span>
                    </div>
                    <h3 className="text-xl font-bold text-white font-display">Snippets</h3>
                </div>
                <div className="flex bg-black/40 rounded-lg p-1 border border-white/10">
                    <div className="px-2 py-1 rounded-md bg-white/10 text-[10px] text-white">C++</div>
                    <div className="px-2 py-1 rounded-md text-[10px] text-slate-500 hover:text-white cursor-pointer">Py</div>
                    <div className="px-2 py-1 rounded-md text-[10px] text-slate-500 hover:text-white cursor-pointer">Java</div>
                </div>
            </div>
            <div className="bg-black/30 rounded-xl p-4 border border-white/10 font-mono text-[10px] text-slate-300 overflow-hidden mt-4 relative">
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"><ClipboardCopy size={14} className="text-emerald-400 cursor-pointer" /></div>
                <pre><code><span className="text-purple-400">void</span> dfs(<span className="text-yellow-300">int</span> u) {'{'} <br/><span className="pl-3">vis[u] = <span className="text-blue-400">1</span>;</span> <br/><span className="pl-3">for(<span className="text-yellow-300">int</span> v : adj[u])</span> <br/><span className="pl-5">if(!vis[v]) dfs(v);</span> <br/>{'}'}</code></pre>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
                 <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-slate-400">Graph</span>
                 <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-slate-400">DP</span>
            </div>
        </div>
      </BentoItem>

      {/* Card 6: Mock Interviews */}
      <BentoItem className="md:col-span-6 min-h-[240px]" gradient="from-indigo-900/20 to-blue-900/20">
        <div className="relative z-20 h-full flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-2">
                <Briefcase size={20} className="text-indigo-300" />
                <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">Career</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-display">Mock Interviews</h3>
            <p className="text-slate-400 text-sm mb-6">Simulate real FAANG interviews with AI agents.</p>
            <div className="flex items-center gap-4 mt-auto">
                <div className="flex items-center -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-500 border-2 border-black flex items-center justify-center text-xs font-bold">AI</div>
                    <div className="w-10 h-10 rounded-full bg-slate-600 border-2 border-black flex items-center justify-center text-xs font-bold">You</div>
                </div>
                <div className="h-2 flex-1 bg-white/10 rounded-full overflow-hidden"><div className="w-3/4 h-full bg-indigo-500 rounded-full" /></div>
                <span className="text-xs font-bold text-indigo-300">75% Match</span>
            </div>
        </div>
      </BentoItem>

      {/* Card 7: Peer Battles */}
      <BentoItem className="md:col-span-6 min-h-[240px]" gradient="from-red-900/20 to-orange-900/20">
        <div className="relative z-20 h-full flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-2">
                <Swords size={20} className="text-red-300" />
                <span className="text-xs font-bold text-red-300 uppercase tracking-wider">Versus</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-display">Peer Battles</h3>
            <p className="text-slate-400 text-sm mb-6">1v1 Coding duels to test your speed.</p>
            <div className="flex justify-between items-center mt-auto bg-black/30 p-4 rounded-xl border border-white/5">
                <div className="text-center"><div className="text-xs text-slate-400 mb-1">Player 1</div><div className="text-base font-bold text-green-400">AC</div></div>
                <div className="text-sm font-mono text-slate-500 font-bold">VS</div>
                <div className="text-center"><div className="text-xs text-slate-400 mb-1">Player 2</div><div className="text-base font-bold text-slate-200 animate-pulse">Thinking...</div></div>
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
        className={`relative rounded-3xl p-8 border border-white/10 bg-black/40 backdrop-blur-md hover:bg-black/60 hover:border-white/20 transition-all duration-300 group shadow-xl ${className}`}
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
      className="w-full mt-auto py-10 border-t border-white/5 bg-black/20 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-600 gap-6">
        <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-violet-500/50 animate-pulse" />
            <span>© 2024 CodeLens Inc.</span>
        </div>
        <div className="flex gap-8">
            <Link href="#" className="hover:text-violet-400 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-violet-400 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-violet-400 transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-violet-400 transition-colors">GitHub</Link>
        </div>
      </div>
    </motion.footer>
  )
}