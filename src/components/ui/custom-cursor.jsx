"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation"; 

export default function CustomCursor() {
  const pathname = usePathname();
  const canvasRef = useRef(null);
  const cursorRef = useRef({ x: 0, y: 0 }); 
  const trailRef = useRef([]); 
  const animationRef = useRef(null);

  const config = {
    color: "139, 92, 246", 
    size: 24, 
    trailLength: 20, 
    decay: 0.15, 
    lag: 0.2, 
  };

  useEffect(() => {
    const isEditorPage = pathname?.startsWith("/problem/");
    
    // Force system cursor on editor pages
    if (isEditorPage) {
      const style = document.createElement("style");
      style.id = "cursor-restore";
      style.innerHTML = `
        @media (pointer: fine) {
          html, body, * { cursor: auto !important; }
          a, button, .cursor-pointer { cursor: pointer !important; }
        }
      `;
      document.head.appendChild(style);
      return () => {
        const existingStyle = document.getElementById("cursor-restore");
        if (existingStyle) existingStyle.remove();
      };
    }
  }, [pathname]);

  useEffect(() => {
    const isSkillsPage = pathname?.startsWith("/skills");
    const isEditorPage = pathname?.startsWith("/problem/");
    const isMobile = typeof navigator !== "undefined" && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);

    if (isSkillsPage || isEditorPage || isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    
    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Handle mouse
    const handleMouseMove = (e) => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let currentHead = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const animate = () => {
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth movement
      currentHead.x += (cursorRef.current.x - currentHead.x) * config.lag;
      currentHead.y += (cursorRef.current.y - currentHead.y) * config.lag;

      trailRef.current.push({ ...currentHead, age: 0 });

      if (trailRef.current.length > config.trailLength) {
        trailRef.current.shift();
      }

      if (trailRef.current.length > 1) {
        ctx.beginPath();
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        
        ctx.moveTo(trailRef.current[0].x, trailRef.current[0].y);
        
        for (let i = 1; i < trailRef.current.length - 1; i++) {
          const point = trailRef.current[i];
          const nextPoint = trailRef.current[i + 1];
          const midX = (point.x + nextPoint.x) / 2;
          const midY = (point.y + nextPoint.y) / 2;
          ctx.quadraticCurveTo(point.x, point.y, midX, midY);
        }
        
        const lastPoint = trailRef.current[trailRef.current.length - 1];
        ctx.lineTo(lastPoint.x, lastPoint.y);

        const gradient = ctx.createLinearGradient(
          trailRef.current[0].x, trailRef.current[0].y, 
          lastPoint.x, lastPoint.y
        );
        
        gradient.addColorStop(0, `rgba(${config.color}, 0)`);
        gradient.addColorStop(1, `rgba(${config.color}, 0.6)`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = config.size;
        ctx.stroke();
      }

      // Head Dot
      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 255, 255, 0.9)`;
      ctx.arc(currentHead.x, currentHead.y, 6, 0, Math.PI * 2);
      ctx.fill();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [pathname]);

  const isSkillsPage = pathname?.startsWith("/skills");
  const isEditorPage = pathname?.startsWith("/problem/");
  
  if (isSkillsPage || isEditorPage) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
      // REMOVED mixBlendMode to fix visibility issues on light elements
    />
  );
}