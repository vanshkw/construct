"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  // Check if we are on the editor page to disable glow
  const isEditorPage = pathname?.startsWith("/problem/");

  // 1. Motion Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Spring physics
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      // Detect interactive elements
      const isLink =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("glass-card-hover") ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsHovering(isLink);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  // Hide on mobile
  if (typeof navigator !== "undefined" && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return null;
  }

  return (
    <>
      {/* 1. The Center Dot (Larger & Inverts colors for visibility) */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] w-4 h-4 bg-white rounded-full pointer-events-none mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* 2. The Trailing Ring (No Blend Mode = No Green on Purple) */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
          // Subtle white glow (shadow) that disappears on editor pages
          boxShadow: !isEditorPage ? "0 0 20px rgba(255, 255, 255, 0.2)" : "none",
        }}
        animate={{
          width: isHovering ? 80 : 32,
          height: isHovering ? 80 : 32,
          // On hover: Slight white tint. No hover: Transparent.
          backgroundColor: isHovering ? "rgba(255, 255, 255, 0.1)" : "transparent",
          borderWidth: isHovering ? 0 : 1.5,
          borderColor: "rgba(255, 255, 255, 0.8)", // Crisp white border
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.25,
        }}
      />
    </>
  );
}