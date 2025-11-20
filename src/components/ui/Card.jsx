export function Card({ children, className = "", hover = false }) {
  return (
    <div 
      className={`
        relative rounded-xl overflow-hidden
        bg-white/5 backdrop-blur-md border border-white/10
        ${hover 
          ? "transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-violet-500/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-violet-500/10 cursor-pointer" 
          : "shadow-lg"
        }
        ${className}
      `}
    >
      {/* Optional Content Wrapper to ensure z-index above background */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}