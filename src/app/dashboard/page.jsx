"use client";
import { motion } from "framer-motion";
import { Search, Filter, Sparkles, Trophy, CheckCircle2, Circle, ArrowRight, BookOpen, Clock } from "lucide-react";
import Link from "next/link"; 

// Assuming ProblemRow is in '@/components/ui/ProblemRow'
import ProblemRow from "@/components/ui/ProblemRow";

// --- MOCK DATA ---
const PROBLEMS = [
  { id: "1", title: "Two Sum", difficulty: "Easy", platform: "LeetCode", status: "Solved", acceptance: "48%" },
  { id: "2", title: "Watermelon", difficulty: "Easy", platform: "Codeforces", status: "Pending", acceptance: "92%" },
  { id: "3", title: "Median of Two Sorted Arrays", difficulty: "Hard", platform: "LeetCode", status: "Pending", acceptance: "32%" },
  { id: "4", title: "Chef and String", difficulty: "Medium", platform: "CodeChef", status: "Solved", acceptance: "55%" },
  { id: "5", title: "Trapping Rain Water", difficulty: "Hard", platform: "LeetCode", status: "Pending", acceptance: "41%" },
  { id: "6", title: "Longest Increasing Subsequence", difficulty: "Medium", platform: "LeetCode", status: "Solved", acceptance: "40%" },
];

const PROGRAMMING_STATS = [
  { title: "Current Streak", value: "11 Days", percentage: "+1 Day", icon: <Sparkles size={20} className="text-orange-400" /> },
  { title: "Problems Solved", value: "201", percentage: "+7 this week", icon: <CheckCircle2 size={20} className="text-emerald-400" /> },
  { title: "Global Rank", value: "#1,402", percentage: "+23 positions", icon: <Trophy size={20} className="text-yellow-400" /> },
  { title: "Avg. Time/Problem", value: "28 min", percentage: "-2 min", icon: <Clock size={20} className="text-blue-400" /> },
];

const PROBLEM_CATEGORY_PROGRESS = [
    { name: "Dynamic Programming", progress: 75, color: "#8C52FF" }, // purple
    { name: "Graph Algorithms", progress: 60, color: "#4FD1C5" }, // teal
    { name: "Data Structures", progress: 90, color: "#EB5757" }, // red
    { name: "String Manipulation", progress: 40, color: "#F2C94C" }, // yellow
];

// --- MAIN DASHBOARD COMPONENT ---
export default function Dashboard() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 max-w-[1600px] mx-auto">
      
      {/* Top Row: Welcome Card & Search */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
        {/* Welcome Card & AI Call to Action */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="xl:col-span-2 glass-effect rounded-2xl p-8 flex flex-col md:flex-row items-center relative overflow-hidden"
            style={{ backgroundImage: 'url("/images/space-bg-abstract.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="relative z-10 text-center md:text-left md:pr-12">
                <h2 className="text-3xl font-bold text-white mb-2">Hello, Mark Johnson!</h2>
                <p className="text-slate-300 mb-6 max-w-lg">
                    Your AI mentor has identified areas for growth. Let's tackle new challenges.
                </p>
                <Link href="/ai-challenge" className="px-6 py-3 bg-gradient-to-r from-accent-purple to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/30">
                    Start Daily AI Challenge →
                </Link>
            </div>
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </motion.div>

        {/* Search & Filter Card */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="glass-effect rounded-2xl p-6 flex flex-col justify-between"
        >
            <h3 className="text-lg font-semibold text-white mb-4">Find Problems</h3>
            <div className="relative mb-4">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                <input 
                    type="text" 
                    placeholder="Search by tag, title..." 
                    className="w-full bg-[#1A254B] border border-[#2D3A5F] text-white rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/50 transition-all"
                />
            </div>
            <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#1A254B] border border-[#2D3A5F] rounded-xl text-slate-300 hover:text-white hover:border-accent-blue transition-colors">
                <Filter size={20} /> Advanced Filters
            </button>
        </motion.div>
      </div>

      {/* Middle Row: Stats Cards & Category Progress */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
        {/* Programming Stats Cards */}
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
            {PROGRAMMING_STATS.map((card, index) => (
                <StatsCard key={index} {...card} delay={index * 0.1} />
            ))}
        </motion.div>

        {/* Problem Category Progress */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="glass-effect rounded-2xl p-6"
        >
            <h3 className="text-lg font-semibold text-white mb-2">Skill Progression</h3>
            <p className="text-sm text-slate-400 mb-6">Mastery across categories</p>
            <div className="grid grid-cols-2 gap-4">
                {PROBLEM_CATEGORY_PROGRESS.map((cat, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="relative w-16 h-16 mb-2">
                             <svg className="w-full h-full" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="45" fill="none" stroke="#2D3A5F" strokeWidth="8" />
                                <circle cx="50" cy="50" r="45" fill="none" stroke={cat.color} strokeWidth="8" 
                                        strokeDasharray="282.7" strokeDashoffset={282.7 - (282.7 * (cat.progress / 100))}
                                        transform="rotate(-90 50 50)" />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">{cat.progress}%</span>
                        </div>
                        <span className="text-xs text-slate-400 text-center">{cat.name}</span>
                    </div>
                ))}
            </div>
        </motion.div>
      </div>

      {/* Bottom Row: Recent Problems (Full Width) */}
      <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          className="glass-effect rounded-2xl p-6"
      >
          <h3 className="text-xl font-semibold text-white mb-6">Recent Problems & Recommendations</h3>
          <div className="space-y-4">
              {PROBLEMS.map((prob, index) => (
                  <ProblemRow key={prob.id} problem={prob} index={index} />
              ))}
          </div>
      </motion.div>
    </div>
  );
}

// --- HELPER COMPONENTS ---

// Updated StatsCard for competitive programming focus
function StatsCard({ title, value, percentage, icon, delay }) {
  const isPositive = parseFloat(percentage) >= 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.5 }}
      className="glass-effect rounded-2xl p-6 flex items-start justify-between"
    >
      <div>
        <div className="text-sm font-medium text-slate-400 mb-1">{title}</div>
        <h4 className="text-3xl font-bold text-white mb-1">{value}</h4>
        <div className={`text-xs font-semibold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {percentage}
        </div>
      </div>
      <div className="p-3 bg-gradient-to-br from-accent-blue to-blue-500 rounded-lg text-white shadow-lg">
        {icon}
      </div>
    </motion.div>
  );
}