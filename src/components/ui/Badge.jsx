export function Badge({ 
  children, 
  variant = "default", 
  size = "sm", 
  dot = false, 
  className = "" 
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 border whitespace-nowrap backdrop-blur-md";

  const sizeStyles = {
    xs: "px-1.5 py-0.5 text-[10px] rounded",
    sm: "px-2.5 py-0.5 text-xs rounded-full",
    md: "px-3 py-1 text-sm rounded-full",
  };

  const variants = {
    default: "bg-slate-500/10 text-slate-400 border-slate-500/20",
    easy: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.15)]",
    medium: "bg-amber-500/10 text-amber-400 border-amber-500/20 shadow-[0_0_10px_rgba(245,158,11,0.15)]",
    hard: "bg-rose-500/10 text-rose-400 border-rose-500/20 shadow-[0_0_10px_rgba(244,63,94,0.15)]",
    brand: "bg-violet-500/10 text-violet-300 border-violet-500/20 shadow-[0_0_10px_rgba(139,92,246,0.15)]",
  };

  const variantStyle = variants[variant.toLowerCase()] || variants.default;

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyle} ${className}`}>
      {dot && (
        <span className="relative flex h-1.5 w-1.5 mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-current"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-current"></span>
        </span>
      )}
      {children}
    </span>
  );
}