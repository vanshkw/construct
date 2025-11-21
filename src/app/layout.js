import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import ShaderBackground from "@/components/ui/shader-background"; 
import MouseSpotlight from "@/components/ui/mouse-spotlight"; 
import CustomCursor from "@/components/ui/custom-cursor"; 

// 1. Primary Font (Global Website Font)
// Space Grotesk is used here to match the technical "Momo Trust" display look.
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: '--font-sans', // We map this to 'font-sans' so Tailwind applies it globally
  display: 'swap',
});

// 2. Code Font
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"], 
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: "CodeLens - Intelligent Coding Mentorship",
  description: "Master competitive programming with AI-powered feedback.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#0B1120] text-slate-300 font-sans antialiased selection:bg-violet-500/30 selection:text-violet-200 relative">
        
        {/* --- LAYER 1: The WebGL Universe --- */}
        <div className="fixed inset-0 z-0">
            <ShaderBackground />
        </div>

        {/* --- LAYER 2: Darkening Overlay --- */}
        <div className="fixed inset-0 z-0 bg-[#0B1120]/80 pointer-events-none" />

        {/* --- LAYER 3: Noise Texture --- */}
        <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>

        {/* --- LAYER 4: Mouse Spotlight --- */}
        <MouseSpotlight />

        {/* --- LAYER 5: Grid Pattern --- */}
        <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

        {/* --- CUSTOM CURSOR --- */}
        <CustomCursor />

        {/* --- MAIN APP CONTENT --- */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 pt-16">
             {children}
          </main>
        </div>

      </body>
    </html>
  );
}