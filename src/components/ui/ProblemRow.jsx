"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";

export default function ProblemRow({ problem, index }) {
  const getDifficultyBadge = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "bg-emerald-500/10 text-emerald-400";
      case "medium":
        return "bg-yellow-500/10 text-yellow-400";
      case "hard":
        return "bg-red-500/10 text-red-400";
      default:
        return "bg-slate-700/30 text-slate-400";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }} // Faster stagger for list items
    >
      <Link
        href={`/problem/${problem.id}`}
        className="group flex items-center justify-between p-4 rounded-xl bg-[#111C44] border border-[#2D3A5F] 
                   hover:border-accent-blue/50 hover:shadow-lg hover:shadow-accent-blue/10 transition-all duration-300"
      >
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <div className={`p-2 rounded-full ${
            problem.status === "Solved" 
              ? "text-accent-blue bg-accent-blue/10" 
              : "text-slate-600 bg-slate-800"
          }`}>
            {problem.status === "Solved" ? <CheckCircle2 size={20} /> : <Circle size={20} />}
          </div>

          <div>
            <h3 className="text-base font-semibold text-white group-hover:text-accent-blue transition-colors">
              {problem.id}. {problem.title}
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
              <span className={`px-2 py-0.5 rounded-md ${getDifficultyBadge(problem.difficulty)} font-medium`}>
                {problem.difficulty}
              </span>
              <span className="text-slate-600">•</span>
              <span className="font-mono">{problem.platform}</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5 pr-2">
          <div className="text-right hidden sm:block">
            <div className="text-[10px] font-medium text-slate-500 uppercase tracking-wider mb-0.5">Acceptance</div>
            <div className="text-sm font-mono text-slate-300 group-hover:text-white transition-colors">
              {problem.acceptance}
            </div>
          </div>

          <div className="w-10 h-10 rounded-lg bg-[#1A254B] border border-[#2D3A5F] flex items-center justify-center 
                        text-slate-400 group-hover:bg-accent-blue group-hover:text-white group-hover:border-accent-blue 
                        transition-all duration-300 group-hover:translate-x-1">
            <ArrowRight size={18} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}