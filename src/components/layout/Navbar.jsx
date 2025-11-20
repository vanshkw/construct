"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  User, 
  Zap, 
  LayoutDashboard, 
  Trophy, 
  Menu, 
  X, 
  Sparkles 
} from "lucide-react";

// Navigation config
const navItems = [
  { name: "Overview", href: "/", icon: LayoutDashboard },
  { name: "Problem Set", href: "/dashboard", icon: Code2 },
  { name: "Leaderboard", href: "/profile", icon: Trophy },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar background density
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-black/60 backdrop-blur-xl border-white/10 shadow-lg shadow-violet-500/5"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* --- Logo Section --- */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-xl shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-all duration-300">
                <Code2 className="text-white" size={20} />
                {/* Subtle glow effect behind icon */}
                <div className="absolute inset-0 bg-white/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Construct<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">AI</span>
              </span>
            </Link>

            {/* --- Desktop Navigation --- */}
            <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-sm">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full flex items-center gap-2 ${
                      isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-gradient-to-r from-violet-600/80 to-fuchsia-600/80 rounded-full shadow-inner"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* --- Right Side Actions --- */}
            <div className="flex items-center gap-4">
              
              {/* Points / Energy Badge */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.1)]">
                <Zap size={14} className="text-amber-400 fill-amber-400 animate-pulse" />
                <span className="text-xs font-bold text-amber-100">12 Energy</span>
              </div>

              {/* Profile Icon */}
              <Link href="/profile" className="relative group">
                <div className="h-9 w-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-violet-500/50 transition-colors overflow-hidden">
                   <User size={18} className="text-slate-300 group-hover:text-white transition-colors" />
                </div>
                {/* Online Status Dot */}
                <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-emerald-500 border-2 border-[#0B1120] rounded-full"></span>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#0B1120]/95 backdrop-blur-xl border-b border-white/10 md:hidden"
          >
            <div className="p-4 flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "bg-white/10 text-white border border-white/10"
                        : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                    }`}
                  >
                    <item.icon size={18} className={isActive ? "text-violet-400" : ""} />
                    {item.name}
                  </Link>
                );
              })}
              
              {/* Mobile Only Points Display */}
              <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center px-2">
                <span className="text-slate-400 text-sm">Current Energy</span>
                <div className="flex items-center gap-2 text-amber-400 font-medium">
                  <Zap size={16} className="fill-amber-400" />
                  <span>12</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}