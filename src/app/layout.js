import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import ShaderBackground from "@/components/ui/shader-background"; // Your existing shader
import MouseSpotlight from "@/components/ui/mouse-spotlight"; // The new spotlight

// 1. Base UI Font
const inter = Inter({ 
  subsets: ["latin"], 
  variable: '--font-inter',
  display: 'swap',
});

// 2. Headings Font
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: '--font-space',
  display: 'swap',
});

// 3. Code Font
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"], 
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: "Construct AI",
  description: "Master competitive programming with AI-powered feedback.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#0B1120] text-slate-300 antialiased selection:bg-violet-500/30 selection:text-violet-200 relative">
        
        {/* --- LAYER 1: The WebGL Universe (Deepest Background) --- */}
        <div className="fixed inset-0 z-0">
            <ShaderBackground />
        </div>

        {/* --- LAYER 2: Darkening Overlay --- */}
        {/* This ensures text is readable even if the shader gets bright */}
        <div className="fixed inset-0 z-0 bg-[#0B1120]/80 pointer-events-none" />

        {/* --- LAYER 3: Noise Texture (The "Premium" Feel) --- */}
        {/* Adds a subtle static grain to the whole app */}
        <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>

        {/* --- LAYER 4: Mouse Spotlight --- */}
        {/* Follows cursor with a violet glow */}
        <MouseSpotlight />

        {/* --- LAYER 5: Grid Pattern (Optional technical feel) --- */}
        <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

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