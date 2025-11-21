"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function MouseSpotlight() {
  const divRef = useRef(null);
  const pathname = usePathname();

  // Check if we are on a problem page (e.g., /problem/1)
  const isProblemPage = pathname?.startsWith("/problem/");

  useEffect(() => {
    // Performance: Don't add event listeners if we aren't rendering
    if (isProblemPage) return;

    const handleMouseMove = (e) => {
      if (!divRef.current) return;
      const x = e.clientX;
      const y = e.clientY;
      divRef.current.style.setProperty("--x", `${x}px`);
      divRef.current.style.setProperty("--y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isProblemPage]);

  // Return null to render nothing on problem pages
  if (isProblemPage) return null;

  return (
    <div
      ref={divRef}
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at var(--x) var(--y), rgba(139, 92, 246, 0.15), transparent 40%)`,
      }}
    />
  );
}