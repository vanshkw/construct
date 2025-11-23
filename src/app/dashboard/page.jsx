"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  Filter, 
  Sparkles, 
  Trophy, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  ArrowRight, 
  Code2, 
  MoreHorizontal,
  Play,
  Flame,
  Lock,
  Zap,
  Activity
} from "lucide-react";
import Link from "next/link"; 

// --- MOCK DATA ---
const PROBLEMS = [
  { id: "1", title: "Two Sum", difficulty: "Easy", platform: "LeetCode", status: "Solved", acceptance: "48%", tags: ["Array", "Hash Table"] },
  { id: "2", title: "Watermelon", difficulty: "Easy", platform: "Codeforces", status: "Pending", acceptance: "92%", tags: ["Math"] },
  { id: "3", title: "Median of Two Sorted Arrays", difficulty: "Hard", platform: "LeetCode", status: "Attempted", acceptance: "32%", tags: ["Binary Search"] },
  { id: "4", title: "Chef and String", difficulty: "Medium", platform: "CodeChef", status: "Solved", acceptance: "55%", tags: ["String", "Greedy"] },
  { id: "5", title: "Trapping Rain Water", difficulty: "Hard", platform: "LeetCode", status: "Pending", acceptance: "41%", tags: ["Two Pointers"] },
  { id: "6", title: "Longest Substring", difficulty: "Medium", platform: "LeetCode", status: "Solved", acceptance: "34%", tags: ["Sliding Window"] },
];

// Expanded Skills Data
const SKILLS = [
    { name: "Dynamic Prog.", progress: 75, color: "text-violet-400", stroke: "#A78BFA", locked: false, level: "Lvl 4" }, 
    { name: "Graph Theory", progress: 60, color: "text-fuchsia-400", stroke: "#E879F9", locked: false, level: "Lvl 3" }, 
    { name: "Trees & Tries", progress: 90, color: "text-emerald-400", stroke: "#34D399", locked: false, level: "Lvl 5" }, 
    { name: "Adv. Strings", progress: 40, color: "text-amber-400", stroke: "#FBBF24", locked: false, level: "Lvl 2" },
    { name: "Bit Manipulation", progress: 20, color: "text-cyan-400", stroke: "#22d3ee", locked: false, level: "Lvl 1" },
    { name: "Heaps / PQ", progress: 0, color: "text-slate-500", stroke: "#475569", locked: true, level: "Locked" },
    { name: "System Design", progress: 0, color: "text-slate-500", stroke: "#475569", locked: true, level: "Locked" },
    { name: "Quantum Algos", progress: 0, color: "text-slate-500", stroke: "#475569", locked: true, level: "Locked" },
];

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Dashboard() {
  return (
    // pt-36 ensures content clears the larger navbar
    <div className="min-h-screen w-full text-white pb-24 pt-36">
      
      {/* --- Main Content --- */}
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header / Welcome */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <h1 className="text-5xl md:text-6xl font-bold font-display tracking-tight text-white">
              Dashboard
            </h1>
            <p className="text-slate-400 mt-3 text-xl">Welcome back, Vansh. You're on a <span className="text-amber-400 font-bold">11 day streak!</span></p>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-3">
                <Flame className="text-orange-500 fill-orange-500" size={24} />
                <span className="font-mono font-bold text-2xl">1,240</span>
                <span className="text-base text-slate-500 uppercase tracking-wider font-medium">XP</span>
             </div>
             <button className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-2xl font-bold transition-colors shadow-lg shadow-violet-500/20 text-base">
                Daily Challenge
             </button>
          </div>
        </motion.div>

        {/* --- Bento Grid Layout --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" // Added items-start to prevent stretching
        >
          
          {/* 1. HERO CARD: Daily Recommendation (Span 8) */}
          <motion.div variants={itemVariants} className="lg:col-span-8 relative overflow-hidden rounded-[2rem] p-10 border border-white/10 bg-black/20 backdrop-blur-xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-fuchsia-500/5 opacity-50" />
              
              <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                  <div>
                      <div className="flex items-center gap-3 mb-5">
                          <span className="px-3 py-1.5 rounded-lg bg-violet-500/20 text-violet-300 text-sm font-bold uppercase border border-violet-500/30 tracking-wider">
                              Recommended
                          </span>
                          <span className="text-slate-400 text-base flex items-center gap-1.5 font-medium">
                              <Clock size={16} /> ~25 mins
                          </span>
                      </div>
                      <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">Find Critical Edges in MST</h2>
                      <p className="text-slate-300 max-w-xl leading-relaxed text-xl">
                          Based on your recent struggle with <strong>Graph Theory</strong>, we've selected this problem to reinforce Kruskal's Algorithm concepts.
                      </p>
                  </div>

                  <div className="flex items-center gap-5 mt-2">
                      <Link href="/problem/1" className="px-8 py-4 bg-white text-black rounded-2xl font-bold hover:scale-105 transition-transform flex items-center gap-2 text-lg shadow-xl shadow-white/10">
                          <Play size={22} fill="black" /> Solve Now
                      </Link>
                      <div className="flex items-center gap-3 px-5 py-3 bg-black/30 rounded-xl border border-white/5">
                        <div className="flex -space-x-3">
                            {[1,2,3].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full bg-slate-800 border-2 border-black/50 flex items-center justify-center text-xs text-slate-400 font-medium">U{i}</div>
                            ))}
                        </div>
                        <span className="text-base text-slate-400 font-medium">+42 active</span>
                      </div>
                  </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/20 blur-[100px] rounded-full pointer-events-none" />
          </motion.div>

          {/* 2. STATS CARD: Global Rank (Span 4) */}
          <motion.div variants={itemVariants} className="lg:col-span-4 rounded-[2rem] p-8 border border-white/10 bg-black/20 backdrop-blur-xl flex flex-col justify-between relative overflow-hidden min-h-[320px]">
              <div className="absolute -top-4 -right-4 p-6 opacity-5 rotate-12 transform scale-150">
                  <Trophy size={180} />
              </div>
              
              <div>
                  <h3 className="text-slate-400 font-medium text-xl mb-3">Global Rank</h3>
                  <div className="text-7xl font-bold text-white font-mono tracking-tighter">#1,402</div>
                  <div className="text-emerald-400 text-lg flex items-center gap-1.5 mt-4 font-medium bg-emerald-500/10 w-fit px-3 py-1.5 rounded-lg border border-emerald-500/20">
                      <TrendingUp size={18} /> Top 2.5%
                  </div>
              </div>

              <div className="space-y-4 relative z-10">
                  <div className="flex justify-between text-base font-medium">
                      <span className="text-slate-400">Next Rank</span>
                      <span className="text-white font-bold tracking-wide">MASTER</span>
                  </div>
                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "72%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-[0_0_15px_rgba(167,139,250,0.5)]" 
                      />
                  </div>
                  <div className="text-sm text-slate-500 text-right font-mono">128 XP to level up</div>
              </div>
          </motion.div>

          {/* 3. SKILLS GRID (Span 4) - UPDATED FOR BETTER SPACING */}
          <motion.div variants={itemVariants} className="lg:col-span-4 h-fit rounded-[2rem] p-8 border border-white/10 bg-black/20 backdrop-blur-xl flex flex-col">
              <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-amber-500/10 rounded-xl border border-amber-500/20">
                        <Zap size={24} className="text-amber-400 fill-amber-400" />
                      </div>
                      <h3 className="font-bold text-2xl text-white">Skill Mastery</h3>
                  </div>
                  <MoreHorizontal size={24} className="text-slate-500 cursor-pointer hover:text-white transition-colors" />
              </div>
              
              <div className="grid grid-cols-2 gap-5">
                  {SKILLS.map((skill, i) => (
                      <SkillItem key={i} skill={skill} index={i} />
                  ))}
              </div>
              
              {/* Footer Action */}
              <div className="mt-10 pt-6 border-t border-white/5 text-center">
                  <Link href="/skills" className="text-base font-medium text-violet-400 hover:text-violet-300 transition-colors flex items-center justify-center gap-2 w-full group py-3 rounded-xl hover:bg-violet-500/10">
                      View Full Skill Tree <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
              </div>
          </motion.div>

          {/* 4. MAIN PROBLEM LIST (Span 8) */}
          <motion.div variants={itemVariants} className="lg:col-span-8 rounded-[2rem] border border-white/10 bg-black/20 backdrop-blur-xl overflow-hidden flex flex-col min-h-[600px]">
              
              {/* Toolbar */}
              <div className="p-8 border-b border-white/5 flex flex-col sm:flex-row gap-6 justify-between items-center bg-white/[0.02]">
                  <h3 className="font-bold text-2xl text-white flex items-center gap-3">
                      <div className="p-2.5 bg-violet-500/10 rounded-xl border border-violet-500/20">
                        <Code2 size={24} className="text-violet-400" />
                      </div>
                      Recent Problems
                  </h3>
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                      <div className="relative flex-1 sm:w-80 group">
                          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5 group-focus-within:text-violet-400 transition-colors" />
                          <input 
                              type="text" 
                              placeholder="Search problems..." 
                              className="w-full bg-black/40 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-base text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all placeholder:text-slate-600"
                          />
                      </div>
                      <button className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                          <Filter size={20} className="text-slate-400" />
                      </button>
                  </div>
              </div>

              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 px-8 py-5 bg-white/[0.01] border-b border-white/5 text-sm font-bold text-slate-500 uppercase tracking-wider">
                  <div className="col-span-6 md:col-span-5 pl-2">Problem Name</div>
                  <div className="col-span-3 md:col-span-2 text-center">Difficulty</div>
                  <div className="col-span-3 md:col-span-2 text-center">Status</div>
                  <div className="hidden md:block col-span-2 text-right">Acceptance</div>
                  <div className="hidden md:block col-span-1"></div>
              </div>

              {/* List Items */}
              <div className="divide-y divide-white/5 bg-black/10">
                  {PROBLEMS.map((prob, i) => (
                      <motion.div 
                          key={prob.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="grid grid-cols-12 gap-4 px-8 py-6 items-center hover:bg-white/[0.03] transition-colors group cursor-pointer"
                      >
                          {/* Title & Tags */}
                          <div className="col-span-6 md:col-span-5">
                              <div className="font-bold text-xl text-slate-200 group-hover:text-violet-300 transition-colors mb-2 truncate">
                                  {prob.id}. {prob.title}
                              </div>
                              <div className="flex flex-wrap gap-2.5">
                                  <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-slate-500 border border-white/5 font-medium">{prob.platform}</span>
                                  {prob.tags.slice(0, 2).map(tag => (
                                      <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-slate-500 border border-white/5 hidden sm:inline-block font-medium">
                                          {tag}
                                      </span>
                                  ))}
                              </div>
                          </div>

                          {/* Difficulty */}
                          <div className="col-span-3 md:col-span-2 flex justify-center">
                              <span className={`text-sm font-bold px-4 py-1.5 rounded-full border ${
                                  prob.difficulty === 'Easy' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                                  prob.difficulty === 'Medium' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                                  'bg-rose-500/10 text-rose-400 border-rose-500/20'
                              }`}>
                                  {prob.difficulty}
                              </span>
                          </div>

                          {/* Status */}
                          <div className="col-span-3 md:col-span-2 flex justify-center">
                              {prob.status === 'Solved' ? (
                                  <div className="flex items-center gap-2 text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-xl border border-emerald-400/20">
                                      <CheckCircle2 size={16} /> <span className="text-sm font-bold hidden md:inline">Solved</span>
                                  </div>
                              ) : prob.status === 'Attempted' ? (
                                  <div className="flex items-center gap-2 text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-xl border border-amber-400/20">
                                      <Activity size={16} /> <span className="text-sm font-bold hidden md:inline">Tried</span>
                                  </div>
                              ) : (
                                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                              )}
                          </div>

                          {/* Acceptance */}
                          <div className="hidden md:block col-span-2 text-right text-base font-mono text-slate-400 font-medium">
                              {prob.acceptance}
                          </div>

                          {/* Action */}
                          <div className="hidden md:flex col-span-1 justify-end opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-200">
                              <ArrowRight size={20} className="text-violet-400" />
                          </div>
                      </motion.div>
                  ))}
              </div>
              
              {/* Footer Link */}
              <div className="p-6 border-t border-white/5 text-center bg-white/[0.01]">
                  <Link href="/problems" className="text-base font-semibold text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2 hover:underline decoration-violet-500/50 underline-offset-4">
                      View all 2,450 problems <ArrowRight size={16} />
                  </Link>
              </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}

function SkillItem({ skill, index }) {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
            className={`relative rounded-2xl p-5 flex flex-col items-center justify-center gap-4 border transition-all duration-300 cursor-default group ${
                skill.locked 
                ? 'bg-white/[0.02] border-white/5 opacity-80' 
                : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1'
            }`}
        >
            <div className="relative w-24 h-24">
                {/* Background Circle */}
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    {/* Increase stroke width slightly */}
                    <path className="text-white/5" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2.5" />
                    {!skill.locked && (
                        <motion.path 
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: skill.progress / 100 }}
                        transition={{ duration: 1.5, delay: 0.5 + (index * 0.1) }}
                        className={`${skill.color} drop-shadow-[0_0_6px_currentColor]`} 
                        stroke={skill.stroke} 
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                        fill="none" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        />
                    )}
                </svg>
                
                <div className="absolute inset-0 flex items-center justify-center">
                    {skill.locked ? (
                        <Lock size={28} className="text-slate-600 group-hover:text-slate-400 transition-colors" />
                    ) : (
                        <span className="text-lg font-bold text-white font-mono">{skill.progress}%</span>
                    )}
                </div>
            </div>
            <div className="text-center">
                <div className={`text-base font-bold mb-1 ${skill.locked ? 'text-slate-600' : 'text-slate-200 group-hover:text-white transition-colors'}`}>{skill.name}</div>
                <div className={`text-xs font-semibold uppercase tracking-wide ${skill.locked ? 'text-slate-700' : 'text-slate-500'}`}>{skill.level}</div>
            </div>
        </motion.div>
    )
}