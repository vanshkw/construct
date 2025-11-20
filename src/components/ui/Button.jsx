import Link from "next/link";

export function Button({ children, variant = "primary", href, className = "", ...props }) {
  const baseStyles = "inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black";
  
  const variants = {
    primary: "bg-violet-600 hover:bg-violet-500 text-white shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] border border-transparent",
    secondary: "bg-zinc-900 hover:bg-zinc-800 text-zinc-100 border border-zinc-800",
    ghost: "bg-transparent hover:bg-zinc-800 text-zinc-400 hover:text-white",
    outline: "bg-transparent border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return <Link href={href} className={combinedClasses} {...props}>{children}</Link>;
  }

  return <button className={combinedClasses} {...props}>{children}</button>;
}