"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, Circle, Clock, ArrowRight, BarChart2 } from "lucide-react";

// Helper for Difficulty Styles
const getDifficultyStyle = (difficulty) => {
  switch (difficulty?.toLowerCase()) {
    case "easy":
      return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]";
    case "medium":
      return "text-amber-400 bg-amber-500/10 border-amber-500/20 shadow-[0_0_10px_rgba(245,158,11,0.1)]";
    case "hard":
      return "text-rose-400 bg-rose-500/10 border-rose-500/20 shadow-[0_0_10px_rgba(244,63,94,0.1)]";
    default:
      return "text-slate-400 bg-slate-500/10 border-slate-500/20";
  }
};

export default function ProblemRow({ problem, index }) {
  const isSolved = problem.status === "Solved";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="group"
    >
      <Link
        href={`/problem/${problem.id}`}
        className="relative flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 
                   backdrop-blur-sm transition-all duration-300 
                   hover:bg-white/10 hover:border-violet-500/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)]"
      >
        {/* Left Side: Icon & Title */}
        <div className="flex items-center gap-5">
          
          {/* Status Icon with Glow */}
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#0B1120] border border-white/10 group-hover:border-white/20 transition-colors">
            {isSolved ? (
              <>
                <div className="absolute inset-0 bg-emerald-500/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <CheckCircle2 size={20} className="text-emerald-400 relative z-10" />
              </>
            ) : (
              <Circle size={20} className="text-slate-500 group-hover:text-slate-400 transition-colors relative z-10" />
            )}
          </div>

          {/* Text Info */}
          <div>
            <div className="flex items-baseline gap-3 mb-1.5">
                <h3 className="text-base font-semibold text-white group-hover:text-violet-300 transition-colors">
                   {problem.title}
                </h3>
                <span className="text-xs font-mono text-slate-500">#{problem.id}</span>
            </div>

            <div className="flex items-center gap-3">
              {/* Difficulty Badge */}
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-medium border uppercase tracking-wide ${getDifficultyStyle(problem.difficulty)}`}>
                {problem.difficulty}
              </span>
              
              {/* Platform Tag */}
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400">
                  <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                  <span>{problem.platform}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Stats & Action */}
        <div className="flex items-center gap-6 pr-2">
          
          {/* Acceptance Rate (Hidden on mobile) */}
          <div className="hidden md:flex flex-col items-end">
            <div className="flex items-center gap-1 text-[10px] font-medium text-slate-500 uppercase tracking-wider mb-0.5">
                <BarChart2 size={10} /> Acceptance
            </div>
            <div className="text-sm font-mono font-medium text-slate-300 group-hover:text-white transition-colors">
              {problem.acceptance}
            </div>
          </div>

          {/* Action Button */}
          <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center 
                        text-slate-400 group-hover:bg-violet-500 group-hover:text-white group-hover:border-violet-500 
                        shadow-sm transition-all duration-300 group-hover:scale-110">
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}