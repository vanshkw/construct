export function Badge({ children, variant = "default" }) {
  const styles = {
    default: "bg-zinc-800 text-zinc-300 border-zinc-700",
    easy: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    medium: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    hard: "bg-red-500/10 text-red-400 border-red-500/20",
  };

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[variant] || styles.default}`}>
      {children}
    </span>
  );
}