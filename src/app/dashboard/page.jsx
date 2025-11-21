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
  Play
} from "lucide-react";
import Link from "next/link"; 
// Import the ShaderBackground component
import ShaderBackground from "@/components/ui/shader-background"; 

// --- MOCK DATA ---
const PROBLEMS = [
  { id: "1", title: "Two Sum", difficulty: "Easy", platform: "LeetCode", status: "Solved", acceptance: "48%", tags: ["Array", "Hash Table"] },
  { id: "2", title: "Watermelon", difficulty: "Easy", platform: "Codeforces", status: "Pending", acceptance: "92%", tags: ["Math"] },
  { id: "3", title: "Median of Two Sorted Arrays", difficulty: "Hard", platform: "LeetCode", status: "Attempted", acceptance: "32%", tags: ["Binary Search", "Divide & Conquer"] },
  { id: "4", title: "Chef and String", difficulty: "Medium", platform: "CodeChef", status: "Solved", acceptance: "55%", tags: ["String", "Greedy"] },
  { id: "5", title: "Trapping Rain Water", difficulty: "Hard", platform: "LeetCode", status: "Pending", acceptance: "41%", tags: ["Two Pointers", "Stack"] },
  { id: "6", title: "Longest Substring Without Repeating Characters", difficulty: "Medium", platform: "LeetCode", status: "Solved", acceptance: "34%", tags: ["String", "Sliding Window"] },
  { id: "7", title: "Container With Most Water", difficulty: "Medium", platform: "LeetCode", status: "Attempted", acceptance: "52%", tags: ["Array", "Two Pointers"] },
  { id: "8", title: "Add Two Numbers", difficulty: "Medium", platform: "LeetCode", status: "Solved", acceptance: "40%", tags: ["Linked List", "Math"] },
];

const STATS = [
  { title: "Current Streak", value: "11", unit: "Days", subtext: "Top 15% of users", icon: Sparkles, color: "text-amber-400", bg: "bg-amber-400/10" },
  { title: "Problems Solved", value: "201", unit: "", subtext: "+7 this week", icon: CheckCircle2, color: "text-emerald-400", bg: "bg-emerald-400/10" },
  { title: "Global Rank", value: "1,402", unit: "", subtext: "Top 1200 needed for badge", icon: Trophy, color: "text-violet-400", bg: "bg-violet-400/10" },
];

const SKILLS = [
    { name: "Dynamic Prog.", progress: 75, color: "text-violet-400", stroke: "#A78BFA" }, 
    { name: "Graphs", progress: 60, color: "text-fuchsia-400", stroke: "#E879F9" }, 
    { name: "Data Structs", progress: 90, color: "text-emerald-400", stroke: "#34D399" }, 
    { name: "Strings", progress: 40, color: "text-amber-400", stroke: "#FBBF24" }, 
    { name: "Sorting", progress: 80, color: "text-sky-400", stroke: "#38BDF8" },
    { name: "Greedy", progress: 55, color: "text-red-400", stroke: "#F87171" },
];

// --- DASHBOARD COMPONENT ---
export default function Dashboard() {
  return (
    <div className="relative min-h-screen overflow-hidden selection:bg-violet-500/30 text-white">
      
      {/* --- Background Shader --- */}
      {/* The shader covers the entire viewport, fixed behind everything else. */}
      <ShaderBackground className="-z-20" /> 
      {/* Optional: Dark overlay to provide contrast and make text more readable */}
      <div className="fixed inset-0 bg-black/70 -z-10" />

      {/* --- Main Dashboard Content Area --- */}
      {/* This main div acts as a container for your actual dashboard elements. */}
      {/* It uses a blurred background to sit "over" the shader, creating depth. */}
      <div className="relative z-0 min-h-screen pt-20 pb-12 px-4 sm:px-6 max-w-7xl mx-auto space-y-8 bg-black/30 backdrop-blur-xl rounded-xl shadow-2xl my-8 border border-white/10">
      
        {/* --- Top Section: Hero & Stats --- */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* 1. Hero / Welcome Card (Now takes 3 columns on large screens) */}
          <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="lg:col-span-3 glass-card p-8 relative overflow-hidden flex flex-col justify-center group"
          >
              {/* Abstract Background Shapes */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-600/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-fuchsia-600/10 blur-[80px] rounded-full translate-y-1/3 -translate-x-1/4" />
              
              <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10">
                          <Sparkles className="text-amber-400" size={20} />
                      </div>
                      <span className="text-violet-300 font-medium tracking-wide text-sm uppercase">Daily Recommendation</span>
                  </div>
                  
                  <h2 className="text-4xl font-bold text-white mb-3">Good Evening, Vansh!</h2>
                  <p className="text-slate-300 mb-8 max-w-lg leading-relaxed">
                      Your consistency is paying off. Based on your recent graph problems, we've curated a specific challenge for you. Keep up the great work!
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/problem/1" className="btn-primary flex items-center gap-2">
                          <Play size={16} fill="currentColor" /> Start Challenge
                      </Link>
                      <button className="px-6 py-2.5 rounded-lg border border-white/10 hover:bg-white/5 text-white font-medium text-sm transition-colors bg-black/20 backdrop-blur-sm">
                          View Detailed Analysis
                      </button>
                  </div>
              </div>
          </motion.div>

          {/* 2. Stats Vertical Stack (Now takes 1 column on large screens, or full width on smaller) */}
          <div className="lg:col-span-1 flex flex-col gap-6">
              {STATS.map((stat, idx) => (
                  <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="glass-card p-5 flex items-center gap-4 hover:bg-white/[0.07] transition-colors"
                  >
                      <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                          <stat.icon size={22} />
                      </div>
                      <div>
                          <div className="text-2xl font-bold text-white font-mono">
                              {stat.value} <span className="text-sm font-sans font-medium text-slate-400">{stat.unit}</span>
                          </div>
                          <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-0.5">{stat.title}</div>
                          <div className="text-xs text-emerald-400 flex items-center gap-1">
                              <TrendingUp size={10} /> {stat.subtext}
                          </div>
                      </div>
                  </motion.div>
              ))}
          </div>
        </div>


        {/* --- Middle Section: Filters & Skill Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            
            {/* Search & Problems List (Now takes 3 columns) */}
            <div className="lg:col-span-3 space-y-6">
                {/* Search Bar */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                    <div className="relative flex-1 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-violet-400 transition-colors" size={20} />
                        <input 
                            type="text" 
                            placeholder="Search problems by title, tag, or company..." 
                            className="w-full bg-[#0F1629]/50 border border-white/10 text-white rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all placeholder:text-slate-600 shadow-inner"
                        />
                    </div>
                    <button className="px-5 py-3.5 bg-[#0F1629]/50 border border-white/10 rounded-xl text-slate-400 hover:text-white hover:border-violet-500/50 transition-all flex items-center gap-2 shadow-sm">
                        <Filter size={18} /> <span className="hidden sm:inline">Filters</span>
                    </button>
                </motion.div>

                {/* Problems List */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between px-2 mb-2">
                        <h3 className="text-white font-semibold text-lg">Recent Problems</h3>
                        <Link href="/problems" className="text-sm text-violet-400 hover:text-violet-300 flex items-center gap-1">View All <ArrowRight size={14} /></Link>
                    </div>
                    {PROBLEMS.map((prob, index) => (
                        <ProblemRow key={prob.id} problem={prob} index={index} />
                    ))}
                </div>
            </div>

            {/* Skill Rings (Side Column - takes 1 column) */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
               className="glass-card p-6 flex flex-col h-full"
            >
                <h3 className="text-white font-semibold mb-1 text-lg">Skill Mastery</h3>
                <p className="text-xs text-slate-400 mb-6">Based on solved difficulty</p>
                
                <div className="grid grid-cols-2 gap-y-8 gap-x-4 flex-1 content-center">
                    {SKILLS.map((cat, index) => (
                        <div key={index} className="flex flex-col items-center group cursor-pointer">
                            <div className="relative w-16 h-16 mb-3">
                                 {/* SVG Circle Progress */}
                                 <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                                    <path className="text-white/10" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                                    <path className={`${cat.color} transition-all duration-1000 ease-out`} strokeDasharray={`${cat.progress}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white group-hover:scale-110 transition-transform">
                                    {cat.progress}%
                                </div>
                            </div>
                            <span className="text-xs text-slate-300 text-center font-medium group-hover:text-white transition-colors">{cat.name}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>

      </div> {/* End of Main Dashboard Content Area */}
    </div>
  );
}

// --- SUB-COMPONENTS ---

function ProblemRow({ problem, index }) {
    // Status Colors
    const statusColors = {
        "Solved": "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
        "Pending": "text-slate-400 bg-slate-400/10 border-slate-400/20", 
        "Attempted": "text-amber-400 bg-amber-400/10 border-amber-400/20"
    };

    const difficultyColors = {
        "Easy": "text-emerald-400",
        "Medium": "text-amber-400",
        "Hard": "text-rose-400"
    };

    return (
        // Wrapped the motion div with Link for full row clickability
        <Link href={`/problem/${problem.id}`} className="block">
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group glass-card-hover p-4 flex items-center justify-between cursor-pointer"
            >
                <div className="flex items-center gap-4">
                    {/* Icon Box */}
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${statusColors[problem.status]}`}>
                        {problem.status === "Solved" ? <CheckCircle2 size={18} /> : <Clock size={18} />}
                    </div>
                    
                    <div>
                        <h4 className="text-white font-medium text-base group-hover:text-violet-400 transition-colors">{problem.title}</h4> 
                        <div className="flex items-center gap-2 mt-1">
                            <span className={`text-xs font-medium ${difficultyColors[problem.difficulty]}`}>{problem.difficulty}</span>
                            <span className="text-slate-600 text-[10px]">•</span>
                            <span className="text-xs text-slate-400">{problem.platform}</span> 
                        </div>
                    </div>
                </div>

                {/* Tags & Meta (Hidden on mobile) */}
                <div className="hidden md:flex items-center gap-6">
                    <div className="flex gap-2">
                        {problem.tags.map((tag, i) => (
                            <span key={i} className="px-2.5 py-1 rounded text-xs font-medium bg-black/30 text-slate-300 border border-white/5 backdrop-blur-sm"> 
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="text-right w-20">
                        <div className="text-xs text-slate-400">Acceptance</div>
                        <div className="text-xs font-mono text-white">{problem.acceptance}</div>
                    </div>
                    {/* The arrow is just visual now, the whole card is a link */}
                    <div className="p-2 bg-black/20 hover:bg-white/10 rounded-full text-slate-400 group-hover:text-white transition-colors border border-white/10"> 
                        <ArrowRight size={16} />
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}