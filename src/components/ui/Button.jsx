import Link from "next/link";

export function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  href, 
  className = "", 
  ...props 
}) {
  // 1. Base Styles: Layout, Focus Ring, Animation
  const baseStyles = 
    "relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1120] " +
    "active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

  // 2. Size Variants
  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  // 3. Visual Variants
  const variants = {
    primary: 
      "bg-gradient-to-b from-violet-500 to-violet-600 hover:from-violet-400 hover:to-violet-500 " +
      "text-white border border-violet-400/20 " +
      "shadow-[0_4px_20px_rgba(124,58,237,0.25)] hover:shadow-[0_4px_25px_rgba(124,58,237,0.4)] " +
      "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-b before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity",
    
    secondary: 
      "bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-white/20 " +
      "backdrop-blur-md shadow-sm",
    
    outline: 
      "bg-transparent border border-white/20 text-slate-300 " +
      "hover:border-violet-400/50 hover:text-white hover:bg-violet-500/10 hover:shadow-[0_0_15px_rgba(124,58,237,0.15)]",
    
    ghost: 
      "bg-transparent hover:bg-white/5 text-slate-400 hover:text-white",
  };

  const combinedClasses = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

  // Render logic
  if (href) {
    return <Link href={href} className={combinedClasses} {...props}>{children}</Link>;
  }

  return <button className={combinedClasses} {...props}>{children}</button>;
}