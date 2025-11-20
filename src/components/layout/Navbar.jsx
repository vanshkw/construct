"use client";
import Link from "next/link";
import { Code2, User, Zap } from "lucide-react"; // Make sure Zap and User are imported
import { usePathname } from "next/navigation"; // <-- THIS IS THE MISSING IMPORT

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="h-16 border-b border-[#2D3A5F] bg-[#111C44]/80 backdrop-blur-md fixed top-0 w-full z-50 flex items-center justify-between px-6">
      
      {/* Brand Logo - Changed accent color to --accent-blue */}
      <Link href="/" className="flex items-center gap-2 group">
        <div className="p-2 bg-gradient-to-br from-accent-blue to-blue-500 rounded-lg shadow-[0_0_15px_rgba(79,209,197,0.4)] group-hover:from-accent-blue/80 group-hover:to-blue-400 transition-all duration-300">
          <Code2 className="text-white" size={20} />
        </div>
        <span className="font-bold text-white text-lg tracking-tight">
          Construct<span className="text-accent-blue">AI</span>
        </span>
      </Link>

      {/* Navigation Links - Updated hover/active colors */}
      <div className="hidden md:flex items-center gap-8">
        {/* Pass pathname to NavLink to determine active state */}
        <NavLink href="/" label="Overview" active={pathname === "/"} />
        <NavLink href="/dashboard" label="Problem Set" active={pathname === "/dashboard"} />
        <NavLink href="/profile" label="Leaderboard" active={pathname === "/profile"} />
      </div>

      {/* Right Side Actions - Updated accent colors */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1A254B] border border-[#2D3A5F] rounded-full text-xs font-medium text-slate-300">
            <Zap size={14} className="text-orange-400 fill-orange-400" />
            <span>12</span>
        </div>
        
        <Link href="/profile" className="h-9 w-9 rounded-full bg-[#1A254B] flex items-center justify-center border border-[#2D3A5F] hover:border-accent-blue/50 transition-colors">
            <User size={16} className="text-slate-400" />
        </Link>
      </div>
    </nav>
  );
}

// NavLink Helper - Updated hover/active colors
function NavLink({ href, label, active }) {
  return (
    <Link 
      href={href} 
      className={`text-sm font-medium transition-all duration-200 ${
        active ? "text-accent-blue" : "text-slate-400 hover:text-white"
      }`}
    >
      {label}
    </Link>
  );
}