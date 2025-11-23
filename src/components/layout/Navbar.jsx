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
  LogIn 
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

  // --- SIMULATED AUTH STATE ---
  const isLoggedIn = false; 

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
            ? "bg-[#0B1120]/80 backdrop-blur-xl border-white/10 shadow-lg shadow-violet-500/5 py-2"
            : "bg-transparent border-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between h-24">
            
            {/* --- Logo Section --- */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-2xl shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-all duration-300">
                <Code2 className="text-white" size={24} />
                <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                Code<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Lens</span>
              </span>
            </Link>

            {/* --- Desktop Navigation --- */}
            <div className="hidden md:flex items-center gap-2 bg-white/5 p-1.5 rounded-full border border-white/5 backdrop-blur-sm">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-6 py-2.5 text-base font-medium transition-colors duration-200 rounded-full flex items-center gap-2.5 ${
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
            <div className="flex items-center gap-6">
              
              {isLoggedIn ? (
                <>
                  {/* Logged In: Points & Profile */}
                  <div className="hidden sm:flex items-center gap-2.5 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.1)]">
                    <Zap size={18} className="text-amber-400 fill-amber-400 animate-pulse" />
                    <span className="text-sm font-bold text-amber-100">12 Energy</span>
                  </div>

                  <Link href="/profile" className="relative group">
                    <div className="h-11 w-11 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-violet-500/50 transition-colors overflow-hidden">
                       <User size={22} className="text-slate-300 group-hover:text-white transition-colors" />
                    </div>
                    <span className="absolute top-0 right-0 h-3 w-3 bg-emerald-500 border-2 border-[#0B1120] rounded-full"></span>
                  </Link>
                </>
              ) : (
                <>
                  {/* Logged Out: Sign In Button */}
                  <Link href="/login" className="px-7 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-base font-medium text-white transition-all flex items-center gap-2.5 group">
                    <LogIn size={20} className="text-violet-400 group-hover:text-white transition-colors" />
                    Sign In
                  </Link>
                  
                  {/* Mobile Menu Toggle */}
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
                  >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                  </button>
                </>
              )}

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
            className="fixed inset-x-0 top-24 z-40 bg-[#0B1120]/95 backdrop-blur-xl border-b border-white/10 md:hidden"
          >
            <div className="p-6 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-4 px-5 py-4 rounded-xl text-base font-medium transition-all ${
                    pathname === item.href
                      ? "bg-white/10 text-white border border-white/10"
                      : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                  }`}
                >
                  <item.icon size={22} className={pathname === item.href ? "text-violet-400" : ""} />
                  {item.name}
                </Link>
              ))}
              
              {!isLoggedIn && (
                 <Link
                   href="/login"
                   onClick={() => setIsMobileMenuOpen(false)}
                   className="mt-4 flex items-center justify-center gap-3 px-5 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-base font-medium shadow-lg shadow-violet-500/20"
                 >
                   <LogIn size={22} />
                   Sign In
                 </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}