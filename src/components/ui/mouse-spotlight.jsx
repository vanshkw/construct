"use client";
import { useEffect, useRef } from "react";

export default function MouseSpotlight() {
  const divRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!divRef.current) return;
      const x = e.clientX;
      const y = e.clientY;
      divRef.current.style.setProperty("--x", `${x}px`);
      divRef.current.style.setProperty("--y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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