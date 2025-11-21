"use client";

import { motion } from "framer-motion";
import { 
  MapPin, 
  Link as LinkIcon, 
  Github, 
  Twitter, 
  Flame, 
  Globe, 
  CheckCircle, 
  Trophy, 
  TrendingUp,
  Calendar,
  Edit2
} from "lucide-react";
// 1. Import the Shader
import ShaderBackground from "@/components/ui/shader-background"; 

export default function ProfilePage() {
  return (
    // 2. Wrapper: Set up relative positioning and overflow handling
    <div className="relative min-h-screen pt-20 pb-20 px-4 sm:px-6 overflow-hidden text-white">
      
      {/* --- Background Layer --- */}
      <ShaderBackground className="-z-20" />
      
      {/* Dark Overlay for readability (Matches Dashboard) */}
      <div className="fixed inset-0 bg-black/70 -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-8 relative z-0">
        
        {/* --- 1. Profile Header --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          // Removed the local 'bg-violet' blob div that was here previously
          className="glass-card p-8 relative overflow-hidden group"
        >
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
            
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center shadow-2xl shadow-violet-500/10">
                 <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-fuchsia-400">VD</span>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#0B1120] p-1 rounded-full">
                <div className="w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#0B1120] animate-pulse" />
              </div>
            </div>

            {/* User Info */}
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Vansh Dev</h1>
                  <p className="text-violet-300 font-medium flex items-center gap-2 mt-1">
                    <Trophy size={16} className="text-amber-400" />
                    Level 4 Architect • <span className="text-slate-400 font-normal">CodeMentor Pro</span>
                  </p>
                </div>
                <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm font-medium">
                    <Edit2 size={14} /> Edit Profile
                </button>
              </div>

              {/* Meta Details */}
              <div className="flex flex-wrap gap-4 text-sm text-slate-400 pt-2">
                <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
                    <MapPin size={14} /> New Delhi, India
                </div>
                <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
                    <LinkIcon size={14} /> vanshdev.dev
                </div>
                <div className="flex gap-3 pl-2 border-l border-white/10">
                    <Github size={18} className="hover:text-white cursor-pointer transition-colors" />
                    <Twitter size={18} className="hover:text-blue-400 cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- 2. Main Stats Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard 
            label="Current Streak" 
            value="12 Days" 
            subtext="Top 5% consistency"
            icon={Flame}
            color="text-orange-500"
            bg="bg-orange-500/10"
            border="group-hover:border-orange-500/30"
            delay={0.1}
          />
          <StatCard 
            label="Global Rating" 
            value="1,450" 
            subtext="+24 points this week"
            icon={Globe}
            color="text-blue-400"
            bg="bg-blue-500/10"
            border="group-hover:border-blue-500/30"
            delay={0.2}
          />
          <StatCard 
            label="Problems Solved" 
            value="87" 
            subtext="12 Hard • 45 Medium"
            icon={CheckCircle}
            color="text-emerald-400"
            bg="bg-emerald-500/10"
            border="group-hover:border-emerald-500/30"
            delay={0.3}
          />
        </div>

        {/* --- 3. Split View: Activity & Platforms --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left: Activity Heatmap */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="lg:col-span-2 glass-card p-6"
            >
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                        <Calendar size={18} className="text-violet-400" /> 
                        Submission Activity
                    </h3>
                    <select className="bg-black/30 border border-white/10 rounded-md text-xs p-1 text-slate-400 focus:outline-none focus:border-violet-500">
                        <option>2024</option>
                        <option>2023</option>
                    </select>
                </div>
                
                {/* The Heatmap Grid */}
                <div className="flex flex-wrap gap-1.5">
                    {[...Array(126)].map((_, i) => {
                        const val = (i * 7) % 10; 
                        
                        let intensity = "bg-white/5"; 
                        if (val > 8) intensity = "bg-violet-500"; 
                        else if (val > 5) intensity = "bg-violet-500/40"; 
                        
                        const count = val > 5 ? val : 0; 

                        return (
                            <div 
                                key={i} 
                                className={`w-3 h-3 rounded-sm ${intensity} hover:scale-125 transition-transform duration-200 cursor-pointer`}
                                title={`${count} submissions`}
                            />
                        )
                    })}
                </div>
                <div className="flex items-center gap-2 mt-4 text-xs text-slate-500 justify-end">
                    <span>Less</span>
                    <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-sm bg-white/5"></div>
                        <div className="w-3 h-3 rounded-sm bg-violet-500/40"></div>
                        <div className="w-3 h-3 rounded-sm bg-violet-500"></div>
                    </div>
                    <span>More</span>
                </div>
            </motion.div>

            {/* Right: Platform Ratings */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-4 px-2">Platform Rankings</h3>
                
                <PlatformCard 
                    name="Codeforces" 
                    rating="1200" 
                    maxRating="Max: 1240"
                    rank="Pupil" 
                    color="text-cyan-400" 
                    barColor="bg-cyan-400"
                    percentage="40%"
                    delay={0.5}
                />
                <PlatformCard 
                    name="LeetCode" 
                    rating="1650" 
                    maxRating="Top 15%"
                    rank="Knight" 
                    color="text-orange-400" 
                    barColor="bg-orange-400"
                    percentage="65%"
                    delay={0.6}
                />
                <PlatformCard 
                    name="CodeChef" 
                    rating="1400" 
                    maxRating="Div 3"
                    rank="2 Star" 
                    color="text-amber-700" 
                    barColor="bg-amber-700"
                    percentage="35%"
                    delay={0.7}
                />
            </div>
        </div>

      </div>
    </div>
  );
}

// --- Helper Components ---

function StatCard({ label, value, subtext, icon: Icon, color, bg, border, delay }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`glass-card p-6 group hover:bg-white/[0.07] transition-all border border-white/5 ${border}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg ${bg}`}>
          <Icon size={20} className={color} />
        </div>
        <div className="flex items-center gap-1 text-emerald-400 text-xs font-medium bg-emerald-400/10 px-2 py-1 rounded-full">
            <TrendingUp size={12} />
            <span>+2.4%</span>
        </div>
      </div>
      
      <div className="space-y-1">
        <h3 className="text-slate-400 text-sm font-medium">{label}</h3>
        <div className="text-3xl font-bold text-white font-mono tracking-tight">{value}</div>
        <p className="text-xs text-slate-500">{subtext}</p>
      </div>
    </motion.div>
  );
}

function PlatformCard({ name, rating, maxRating, rank, color, barColor, percentage, delay }) {
    return (
        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay }}
            className="glass-card p-5 flex flex-col gap-3 group hover:border-white/20 transition-colors"
        >
            <div className="flex justify-between items-start">
                <div>
                    <div className="font-bold text-base text-white">{name}</div>
                    <div className={`text-xs font-medium ${color} mt-0.5`}>{rank}</div>
                </div>
                <div className="text-right">
                    <div className={`text-xl font-bold font-mono ${color}`}>{rating}</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">{maxRating}</div>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mt-1">
                <div 
                    className={`h-full rounded-full ${barColor} opacity-80 group-hover:opacity-100 transition-opacity`} 
                    style={{ width: percentage }}
                />
            </div>
        </motion.div>
    );
}