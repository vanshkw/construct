"use client";

import { motion, AnimatePresence } from "framer-motion";
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
  Edit2,
  Code2,
  Activity,
  Zap,
  Award,
  Terminal,
  Target,
  Lock,
  ChevronDown,
  BarChart3
} from "lucide-react";
import ShaderBackground from "@/components/ui/shader-background"; 
import LaserFlow from "@/components/ui/LaserFlow";
import { useRef, useState } from 'react';

// --- MOCK DATA ---
const PLATFORM_DATA = {
  LeetCode: {
    rating: "1,950",
    rank: "Knight",
    maxRating: "1,980",
    color: "#FFA116",
    bg: "bg-[#FFA116]/10",
    border: "border-[#FFA116]/20",
    graphColor: "#FFA116",
    chartData: [1800, 1820, 1850, 1840, 1890, 1920, 1950, 1940, 1950],
    icon: <Code2 size={18} />
  },
  Codeforces: {
    rating: "1,420",
    rank: "Specialist",
    maxRating: "1,450",
    color: "#1F8ACB",
    bg: "bg-[#1F8ACB]/10",
    border: "border-[#1F8ACB]/20",
    graphColor: "#1F8ACB",
    chartData: [1200, 1250, 1240, 1300, 1350, 1380, 1400, 1410, 1420],
    icon: <Terminal size={18} />
  },
  CodeChef: {
    rating: "1,680",
    rank: "3 Star",
    maxRating: "1,700",
    color: "#D4A373", 
    bg: "bg-[#5B4638]/10",
    border: "border-[#5B4638]/20",
    graphColor: "#E68A00", // Brighter Amber for visibility
    chartData: [1500, 1550, 1520, 1580, 1620, 1650, 1660, 1670, 1680],
    icon: <Globe size={18} />
  }
};

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function ProfilePage() {
  const [selectedPlatform, setSelectedPlatform] = useState("LeetCode");
  const revealImgRef = useRef(null);

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 overflow-hidden text-white font-sans">
      
      {/* --- Background Layers --- */}
      <div className="fixed inset-0 -z-30">
        <ShaderBackground />
      </div>
      
      {/* LaserFlow as Page Background (Right aligned) */}
      <div className="fixed inset-0 -z-20 pointer-events-none opacity-60 mix-blend-screen">
        <div className="absolute right-[-10%] top-0 w-[50%] h-full opacity-40">
             <LaserFlow 
                horizontalBeamOffset={0.1}
                verticalBeamOffset={0.1}
                color="#a855f7"
                speed={0.5}
            />
        </div>
      </div>

      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-[#0B1120]/90 -z-10 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-0">
        
        {/* Main Grid */}
        <motion.div 
          className="grid grid-cols-1 xl:grid-cols-12 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
            
            {/* === LEFT COLUMN (Profile & Stats) === */}
            <div className="xl:col-span-8 flex flex-col gap-6">
                
                {/* 1. PROFILE HEADER */}
                <motion.div variants={itemVariants} className="glass-card p-8 relative overflow-hidden group bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem]">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-transparent opacity-50" />
                  
                  <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                    <div className="relative group/avatar">
                      <div className="w-32 h-32 rounded-3xl bg-[#0F172A] border border-white/10 flex items-center justify-center shadow-2xl overflow-hidden">
                         <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-fuchsia-400">VD</span>
                         {/* Shine effect */}
                         <div className="absolute inset-0 bg-white/20 skew-x-12 -translate-x-full group-hover/avatar:animate-[shine_1s_ease-in-out]" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-[#0B1120] p-1.5 rounded-full border border-white/5">
                        <div className="w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#0B1120] animate-pulse shadow-[0_0_10px_#10B981]" />
                      </div>
                    </div>

                    <div className="flex-1 space-y-4 w-full">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3">
                              <h1 className="text-4xl font-bold text-white tracking-tight font-display">Vansh Dev</h1>
                              <div className="px-2.5 py-0.5 rounded-full bg-white/10 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-slate-300">
                                PRO
                              </div>
                          </div>
                          <div className="flex items-center gap-3 mt-2">
                            <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                                <Trophy size={12} /> Grandmaster
                            </span>
                            <span className="text-slate-400 text-sm font-mono">Rank #1,402</span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                            <button className="px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all shadow-lg shadow-violet-500/20 flex items-center gap-2 group">
                                <Zap size={16} className="group-hover:fill-white transition-colors" /> Follow
                            </button>
                            <button className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-slate-300">
                                <Edit2 size={18} />
                            </button>
                        </div>
                      </div>

                      <div className="h-px w-full bg-white/5" />

                      <div className="flex flex-wrap gap-6 text-sm text-slate-400">
                        <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group/icon">
                            <MapPin size={15} className="text-slate-500 group-hover/icon:text-violet-400 transition-colors" /> New Delhi, India
                        </div>
                        <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group/icon">
                            <LinkIcon size={15} className="text-slate-500 group-hover/icon:text-violet-400 transition-colors" /> vanshdev.dev
                        </div>
                        
                        {/* Platform Icons */}
                        <div className="flex gap-4 ml-auto items-center">
                            {/* LeetCode */}
                            <div className="p-2 rounded-lg bg-white/5 hover:bg-[#FFA116]/20 border border-white/5 hover:border-[#FFA116]/50 transition-all cursor-pointer group/icon">
                                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-slate-400 group-hover/icon:fill-[#FFA116] transition-colors"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
                            </div>
                            {/* Codeforces */}
                            <div className="p-2 rounded-lg bg-white/5 hover:bg-[#1F8ACB]/20 border border-white/5 hover:border-[#1F8ACB]/50 transition-all cursor-pointer group/icon">
                                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-slate-400 group-hover/icon:fill-[#1F8ACB] transition-colors"><rect x="1.5" y="9" width="6" height="12" rx="1.5" /><rect x="9" y="4" width="6" height="17" rx="1.5" /><rect x="16.5" y="9" width="6" height="12" rx="1.5" /></svg>
                            </div>
                             {/* CodeChef */}
                             <div className="p-2 rounded-lg bg-white/5 hover:bg-[#5B4638]/40 border border-white/5 hover:border-[#E68A00]/50 transition-all cursor-pointer group/icon">
                                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-slate-400 group-hover/icon:fill-[#E68A00] transition-colors"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 2. QUICK STATS ROW */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatCard 
                        label="Current Streak" 
                        value="12" 
                        unit="Days"
                        subtext="Top 5% consistency" 
                        icon={Flame} 
                        color="text-orange-500" 
                        bg="bg-orange-500/10" 
                        delay={0.1}
                    />
                    <StatCard 
                        label="Total Solved" 
                        value="847" 
                        unit=""
                        subtext="+12 this week" 
                        icon={CheckCircle} 
                        color="text-emerald-400" 
                        bg="bg-emerald-500/10" 
                        delay={0.2}
                    />
                    <StatCard 
                        label="Global Rating" 
                        value="1,850" 
                        unit=""
                        subtext="Top 12% globally" 
                        icon={Globe} 
                        color="text-blue-400" 
                        bg="bg-blue-500/10" 
                        delay={0.3}
                    />
                </div>

                {/* 3. CONTEST RATING CHART */}
                <motion.div variants={itemVariants} className="glass-card p-1 rounded-[2.5rem] bg-black/20 border border-white/10 overflow-hidden">
                    <div className="bg-[#0B1120]/50 rounded-[2.3rem] p-6 md:p-8 backdrop-blur-sm">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <Activity size={20} className="text-violet-400" /> Contest Rating
                                </h3>
                                <p className="text-slate-400 text-sm mt-1">Performance history across platforms</p>
                            </div>
                            
                            {/* Platform Selector */}
                            <div className="flex bg-black/30 p-1 rounded-xl border border-white/10">
                                {Object.keys(PLATFORM_DATA).map((platform) => (
                                    <button
                                        key={platform}
                                        onClick={() => setSelectedPlatform(platform)}
                                        className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                                            selectedPlatform === platform 
                                            ? "bg-white/10 text-white shadow-lg" 
                                            : "text-slate-500 hover:text-slate-300"
                                        }`}
                                    >
                                        {platform}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                            {/* Graph Area */}
                            <div className="lg:col-span-3 h-64 w-full relative">
                                {/* FIX: Use chartData from the selected platform */}
                                <RatingChart 
                                    data={PLATFORM_DATA[selectedPlatform].chartData} 
                                    color={PLATFORM_DATA[selectedPlatform].color} 
                                    graphColor={PLATFORM_DATA[selectedPlatform].graphColor}
                                />
                            </div>

                            {/* Side Stats for Selected Platform */}
                            <div className="lg:col-span-1 flex flex-col justify-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                                <div>
                                    <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Current Rating</div>
                                    <div className={`text-3xl font-bold font-mono ${PLATFORM_DATA[selectedPlatform].color}`}>
                                        {PLATFORM_DATA[selectedPlatform].rating}
                                    </div>
                                </div>
                                <div className="h-px w-full bg-white/10" />
                                <div>
                                    <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Rank</div>
                                    <div className="text-lg font-bold text-white">
                                        {PLATFORM_DATA[selectedPlatform].rank}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Peak</div>
                                    <div className="text-lg font-mono text-slate-300">
                                        {PLATFORM_DATA[selectedPlatform].maxRating}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* === RIGHT COLUMN (Stats & Heatmap) === */}
            <div className="xl:col-span-4 flex flex-col gap-6">
                
                {/* Total Solved */}
                <motion.div variants={itemVariants} className="glass-card p-8 rounded-[2.5rem] bg-black/20 border border-white/10">
                    <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <Award size={20} className="text-amber-400" /> Problem Distribution
                    </h3>

                    <div className="space-y-6">
                        <div className="flex items-end justify-between">
                             <div className="text-4xl font-bold text-white font-mono">847 <span className="text-sm text-slate-500 font-sans font-medium">Solved</span></div>
                             <div className="text-xs text-slate-400 mb-1">top 0.1%</div>
                        </div>
                        
                        {/* Multi-color Progress Bar */}
                        <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden flex">
                            <div className="h-full bg-emerald-400 w-[35%]" />
                            <div className="h-full bg-amber-400 w-[50%]" />
                            <div className="h-full bg-rose-500 w-[15%]" />
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                            <ProblemStat label="Easy" count="296" color="text-emerald-400" />
                            <ProblemStat label="Medium" count="423" color="text-amber-400" />
                            <ProblemStat label="Hard" count="128" color="text-rose-500" />
                        </div>
                    </div>
                </motion.div>

                {/* Heatmap (UPDATED: Emerald/Green Theme) */}
                <motion.div variants={itemVariants} className="glass-card p-8 rounded-[2.5rem] bg-black/20 border border-white/10 flex-1">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                            <Calendar size={18} className="text-emerald-400" /> 
                            Activity
                        </h3>
                        <div className="text-xs text-slate-500">2024</div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5 justify-between">
                        {[...Array(105)].map((_, i) => { // ~3-4 months grid
                            const intensity = Math.random();
                            let colorClass = "bg-white/5";
                            // Updated to Green Scale for better visibility
                            if (intensity > 0.9) colorClass = "bg-emerald-400 shadow-[0_0_10px_#34d399]";
                            else if (intensity > 0.7) colorClass = "bg-emerald-500";
                            else if (intensity > 0.5) colorClass = "bg-emerald-600/80";
                            else if (intensity > 0.2) colorClass = "bg-emerald-800/50";

                            return (
                                <motion.div 
                                    key={i} 
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: i * 0.005 }}
                                    className={`w-4 h-4 rounded-sm ${colorClass} hover:scale-125 transition-transform duration-200 cursor-pointer`}
                                    title={`${Math.floor(intensity * 10)} submissions`}
                                />
                            )
                        })}
                    </div>
                    
                    <div className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-between">
                        <div>
                            <div className="text-xs text-slate-400 uppercase tracking-wider">Longest Streak</div>
                            <div className="text-xl font-bold text-white font-mono">42 Days</div>
                        </div>
                        <Flame className="text-orange-500 fill-orange-500/20" size={24} />
                    </div>
                </motion.div>

            </div>

        </motion.div>
      </div>
    </div>
  );
}

// --- COMPONENTS ---

function StatCard({ label, value, unit, subtext, icon: Icon, color, bg, delay }) {
    return (
      <motion.div 
        variants={itemVariants}
        className="glass-card p-6 rounded-[2rem] bg-black/20 border border-white/10 group hover:bg-white/5 transition-all duration-300 hover:-translate-y-1"
      >
        <div className="flex items-start justify-between mb-4">
            <div className={`p-3.5 rounded-2xl ${bg} border border-white/5`}>
                <Icon size={22} className={color} />
            </div>
            <div className="flex items-center gap-1 text-emerald-400 text-[10px] font-bold bg-emerald-400/10 px-2 py-1 rounded-lg border border-emerald-400/20">
                <TrendingUp size={10} /> +2.4%
            </div>
        </div>
        <div>
          <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">{label}</h3>
          <div className="flex items-baseline gap-1">
            <div className="text-2xl font-bold text-white font-mono tracking-tight">{value}</div>
            {unit && <span className="text-xs text-slate-500 font-medium">{unit}</span>}
          </div>
          <p className="text-xs text-slate-500 mt-1 font-medium">{subtext}</p>
        </div>
      </motion.div>
    );
}

function ProblemStat({ label, count, color }) {
    return (
        <div className="text-center p-2 rounded-xl bg-white/5 border border-white/5">
            <div className={`text-xs font-bold mb-1 ${color}`}>{label}</div>
            <div className="text-lg font-bold text-white font-mono">{count}</div>
        </div>
    )
}

function RatingChart({ data, color, graphColor }) {
    if (!data || data.length === 0) return null;

    const maxVal = Math.max(...data) + 50;
    const minVal = Math.min(...data) - 50;
    const range = maxVal - minVal;

    // Generate path d
    const points = data.map((val, i) => {
        const x = (i / (data.length - 1)) * 100;
        const y = 100 - ((val - minVal) / range) * 100;
        return `${x},${y}`;
    }).join(" ");

    return (
        <div className="w-full h-full">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Gradient Definition */}
                <defs>
                    <linearGradient id={`grad-${graphColor}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={graphColor} stopOpacity="0.5"/>
                        <stop offset="100%" stopColor={graphColor} stopOpacity="0"/>
                    </linearGradient>
                </defs>
                
                {/* Grid Lines */}
                <line x1="0" y1="25" x2="100" y2="25" stroke="white" strokeOpacity="0.05" strokeDasharray="3 3" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeOpacity="0.05" strokeDasharray="3 3" />
                <line x1="0" y1="75" x2="100" y2="75" stroke="white" strokeOpacity="0.05" strokeDasharray="3 3" />

                {/* Area Fill */}
                <motion.path
                    d={`M0,100 L${points.replace(/ /g, " L")} L100,100 Z`}
                    fill={`url(#grad-${graphColor})`}
                    stroke="none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />

                {/* Stroke Line */}
                <motion.path
                    d={`M${points.replace(/ /g, " L")}`}
                    fill="none"
                    stroke={graphColor} 
                    strokeWidth="1.5" // Very slim line
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    style={{ filter: `drop-shadow(0 0 8px ${graphColor})` }} // Colored glow
                />
                
                {/* Dots removed as requested */}
            </svg>
        </div>
    )
}