"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Lock, 
  Zap, 
  BookOpen, 
  Star,
  GitBranch,
  Crown,
  Code2,
  Binary,
  Network,
  Layers,
  Minimize2,
  Link as LinkIcon,
  Undo2,
  Clock,
  Grid3X3,
  Triangle
} from "lucide-react";
import Link from "next/link";
import TargetCursor from "@/components/ui/TargetCursor"; // Import the custom cursor

// --- SKILL TREE DATA ---
const SKILL_TIERS = [
  {
    id: "tier-1",
    title: "Novice",
    subtitle: "Fundamentals",
    colorTheme: "emerald", 
    skills: [
      { id: "arrays", name: "Arrays & Hashing", status: "completed", progress: 100, icon: <Code2 /> },
      { id: "two-pointers", name: "Two Pointers", status: "completed", progress: 100, icon: <Zap /> },
      { id: "stack", name: "Stack & Queue", status: "completed", progress: 100, icon: <Layers /> },
    ]
  },
  {
    id: "tier-2",
    title: "Apprentice",
    subtitle: "Data Structures",
    colorTheme: "blue",
    skills: [
      { id: "sliding-window", name: "Sliding Window", status: "in-progress", progress: 60, icon: <Minimize2 /> },
      { id: "linked-list", name: "Linked List", status: "available", progress: 0, icon: <LinkIcon /> },
      { id: "trees", name: "Trees & BST", status: "available", progress: 0, icon: <GitBranch /> },
      { id: "binary-search", name: "Binary Search", status: "available", progress: 0, icon: <CheckCircle2 /> },
    ]
  },
  {
    id: "tier-3",
    title: "Adept",
    subtitle: "Core Algorithms",
    colorTheme: "violet",
    skills: [
      { id: "heap", name: "Heaps / PQ", status: "locked", progress: 0, icon: <Layers /> },
      { id: "backtracking", name: "Backtracking", status: "locked", progress: 0, icon: <Undo2 /> },
      { id: "graphs", name: "Graphs (BFS/DFS)", status: "locked", progress: 0, icon: <Network /> },
      { id: "dp-1d", name: "1D DP", status: "locked", progress: 0, icon: <SparklesIcon /> },
    ]
  },
  {
    id: "tier-4",
    title: "Expert",
    subtitle: "Advanced Logic",
    colorTheme: "amber",
    skills: [
      { id: "intervals", name: "Intervals", status: "locked", progress: 0, icon: <Clock /> },
      { id: "greedy", name: "Greedy", status: "locked", progress: 0, icon: <Star /> },
      { id: "dp-2d", name: "2D DP", status: "locked", progress: 0, icon: <Grid3X3 /> },
    ]
  },
  {
    id: "tier-5",
    title: "Grandmaster",
    subtitle: "Elite Techniques",
    colorTheme: "rose",
    skills: [
      { id: "adv-graphs", name: "Network Flow", status: "locked", progress: 0, icon: <Network /> },
      { id: "bit-manipulation", name: "Bit Manipulation", status: "locked", progress: 0, icon: <Binary /> },
      { id: "segment-tree", name: "Segment Trees", status: "locked", progress: 0, icon: <Triangle /> },
    ]
  }
];

function SparklesIcon() { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg> }

export default function SkillTreePage() {
  return (
    <div className="min-h-screen w-full text-white pb-40 pt-36 overflow-x-hidden">
      
      {/* --- Target Cursor Integration --- */}
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24">
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-6 backdrop-blur-md"
            >
                <Crown size={14} /> Mastery Path
            </motion.div>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold font-display tracking-tight text-white mb-6"
            >
                The Algorithm Tree
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-slate-400 text-lg max-w-2xl leading-relaxed"
            >
                Your roadmap to algorithmic mastery. Unlock advanced nodes by proving your skills in the fundamentals.
            </motion.p>
        </div>

        {/* --- THE NETWORK TREE --- */}
        <div className="relative flex flex-col items-center">
            
            {/* Central Trunk Line (Background) */}
            <div className="absolute top-0 bottom-0 left-[20%] md:left-[18%] w-1 bg-gradient-to-b from-emerald-500 via-violet-500 to-rose-900/30 rounded-full hidden md:block opacity-20" />

            {/* Render Tiers */}
            <div className="space-y-32 w-full relative z-10">
                {SKILL_TIERS.map((tier, index) => (
                    <TierSection key={tier.id} tier={tier} index={index} />
                ))}
            </div>

        </div>
      </div>
    </div>
  );
}

function TierSection({ tier, index }) {
    const gradients = {
        emerald: "from-emerald-400 to-teal-400",
        blue: "from-blue-400 to-indigo-400",
        violet: "from-violet-400 to-fuchsia-400",
        amber: "from-amber-400 to-orange-400",
        rose: "from-rose-400 to-red-400",
    };

    // Animation variants for text
    const textVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
                visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="relative w-full flex flex-col md:flex-row items-start gap-8 md:gap-16"
        >
            {/* Tier Label - Fixed width to prevent overlap */}
            <div className="w-full md:w-48 flex-shrink-0 flex flex-col items-center md:items-end md:text-right md:pt-20 relative z-10">
                <motion.h2 
                    variants={textVariants}
                    className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${gradients[tier.colorTheme]}`}
                >
                    {tier.title}
                </motion.h2>
                <motion.p 
                    variants={textVariants}
                    className="text-xs text-slate-500 font-mono uppercase tracking-widest mt-2"
                >
                    {tier.subtitle}
                </motion.p>
            </div>

            {/* Skills Cluster - Takes remaining space */}
            <div className="flex-1 flex flex-wrap justify-center md:justify-start gap-8 md:gap-12 relative z-10">
                {tier.skills.map((skill, i) => (
                    <SkillCard 
                        key={skill.id} 
                        skill={skill} 
                        index={i} 
                        theme={tier.colorTheme} 
                    />
                ))}
            </div>
        </motion.div>
    )
}

function SkillCard({ skill, index, theme }) {
    const isLocked = skill.status === 'locked';
    const isCompleted = skill.status === 'completed';
    
    const themeConfig = {
        emerald: { activeBorder: "border-emerald-500/50", glow: "shadow-[0_0_40px_rgba(16,185,129,0.2)]", iconBg: "bg-emerald-500/20", iconColor: "text-emerald-400", stroke: "#10b981" },
        blue: { activeBorder: "border-blue-500/50", glow: "shadow-[0_0_40px_rgba(59,130,246,0.2)]", iconBg: "bg-blue-500/20", iconColor: "text-blue-400", stroke: "#3b82f6" },
        violet: { activeBorder: "border-violet-500/50", glow: "shadow-[0_0_40px_rgba(139,92,246,0.2)]", iconBg: "bg-violet-500/20", iconColor: "text-violet-400", stroke: "#8b5cf6" },
        amber: { activeBorder: "border-amber-500/50", glow: "shadow-[0_0_40px_rgba(245,158,11,0.2)]", iconBg: "bg-amber-500/20", iconColor: "text-amber-400", stroke: "#f59e0b" },
        rose: { activeBorder: "border-rose-500/50", glow: "shadow-[0_0_40px_rgba(244,63,94,0.2)]", iconBg: "bg-rose-500/20", iconColor: "text-rose-400", stroke: "#f43f5e" }
    };

    const t = themeConfig[theme];

    const floatAnim = {
        y: [0, -10, 0],
        transition: {
            duration: 4 + (index % 2), 
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2
        }
    };

    // Card enter animation
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 30 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
    };

    return (
        <motion.div
            variants={cardVariants}
            animate={floatAnim}
            whileHover={!isLocked ? { scale: 1.1, zIndex: 20 } : {}}
            className="relative group"
        >
            {/* Connection Nodes */}
            <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#0B1120] border border-white/20 z-0 hidden md:block`} />
            <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#0B1120] border border-white/20 z-0 hidden md:block`} />

            {/* Applied cursor-target class here for interaction */}
            <Link 
                href={`/skills/${skill.id}`} 
                className={`${isLocked ? "pointer-events-none" : "cursor-target"}`}
            >
                <div className={`
                    relative w-52 h-52 rounded-[2rem] flex flex-col items-center justify-center p-6 text-center border backdrop-blur-md transition-all duration-500
                    ${isLocked 
                        ? "bg-[#050A15] border-white/5 opacity-60 grayscale" 
                        : `bg-black/40 border-white/10 hover:bg-black/60 hover:${t.activeBorder} ${t.glow}`
                    }
                `}>
                    
                    <div className="relative w-24 h-24 mb-4">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                            <path className="text-white/5" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2" />
                            {!isLocked && (
                                <motion.path 
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: skill.progress / 100 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, delay: 0.2 }}
                                    className="drop-shadow-md"
                                    stroke={t.stroke}
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                                    fill="none" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                />
                            )}
                        </svg>
                        
                        <div className="absolute inset-0 flex items-center justify-center rounded-full">
                            {isLocked ? (
                                <Lock size={28} className="text-slate-600" />
                            ) : (
                                <div className={`p-3 rounded-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${isCompleted ? "bg-emerald-500/20 text-emerald-400" : `${t.iconBg} ${t.iconColor}`}`}>
                                    {isCompleted ? <CheckCircle2 size={28} /> : skill.icon}
                                </div>
                            )}
                        </div>
                    </div>

                    <h3 className={`text-base font-bold leading-tight mb-2 ${isLocked ? 'text-slate-500' : 'text-white'}`}>
                        {skill.name}
                    </h3>
                    
                    {isLocked ? (
                        <span className="text-[10px] font-bold text-slate-700 border border-slate-800 px-2 py-1 rounded-md uppercase tracking-wide">Locked</span>
                    ) : (
                        <span className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide border ${isCompleted ? "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" : `text-slate-400 border-white/10 bg-white/5 group-hover:text-white group-hover:border-white/20`}`}>
                            {isCompleted ? "Mastered" : `${skill.progress}% Complete`}
                        </span>
                    )}

                </div>
            </Link>
        </motion.div>
    )
}