"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowLeft, Github, Chrome } from "lucide-react";
import ShaderBackground from "@/components/ui/shader-background";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden text-slate-300">
      
      {/* --- Background --- */}
      <div className="fixed inset-0 z-[-1]">
        <ShaderBackground />
        {/* Dark overlay to make form readable */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* --- Back to Home --- */}
      <Link 
        href="/" 
        className="absolute top-8 left-8 flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </Link>

      {/* --- Login Card --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md glass-card p-8 relative z-10"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-slate-400 text-sm">Enter your credentials to access the workspace.</p>
        </div>

        <form className="space-y-5">
          
          {/* Email Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-300 ml-1">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-violet-400 transition-colors" size={18} />
              <input 
                type="email" 
                placeholder="name@example.com"
                className="w-full bg-[#0B1120]/50 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center ml-1">
              <label className="text-xs font-medium text-slate-300">Password</label>
              <Link href="#" className="text-xs text-violet-400 hover:text-violet-300 transition-colors">Forgot?</Link>
            </div>
            <div className="relative group">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-violet-400 transition-colors" size={18} />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-[#0B1120]/50 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button type="button" className="w-full btn-primary py-3 shadow-lg shadow-violet-500/20">
            Sign In
          </button>

        </form>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-[#121b36] px-2 text-slate-500 rounded-full border border-white/5">Or continue with</span>
          </div>
        </div>

        {/* Social Logins */}
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all text-sm text-slate-300 hover:text-white">
            <Github size={18} /> GitHub
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all text-sm text-slate-300 hover:text-white">
            <Chrome size={18} /> Google
          </button>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-slate-400">
          Don't have an account?{" "}
          <Link href="/signup" className="text-violet-400 hover:text-violet-300 font-medium transition-colors">
            Sign up
          </Link>
        </div>

      </motion.div>
    </div>
  );
}