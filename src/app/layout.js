import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

// 1. Base UI Font
const inter = Inter({ 
  subsets: ["latin"], 
  variable: '--font-inter',
  display: 'swap',
});

// 2. Headings Font (Tech/Modern feel)
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: '--font-space',
  display: 'swap',
});

// 3. Code Font (Crucial for a coding app)
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: "Construct AI - Intelligent Coding Mentorship",
  description: "Master competitive programming with AI-powered feedback.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#0B1120] text-slate-300 antialiased selection:bg-violet-500/30 selection:text-violet-200">
        
        {/* --- PERSISTENT BACKGROUND LAYER (Fixed across all pages) --- */}
        <div className="fixed inset-0 z-[-1] h-full w-full pointer-events-none">
            {/* Base Dark Color */}
            <div className="absolute inset-0 bg-[#0B1120]"></div>
            
            {/* Animated/Static Glows */}
            <div className="absolute top-[-10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[100px] opacity-50"></div>
            <div className="absolute bottom-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-fuchsia-600/10 blur-[120px] opacity-40"></div>
            
            {/* Technical Grid Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        {/* --- MAIN CONTENT --- */}
        <Navbar />
        
        <main className="relative pt-16 min-h-screen flex flex-col">
           {children}
        </main>

        {/* --- GLOBAL SCROLLBAR STYLES --- */}
        <style>{`
          /* Webkit (Chrome, Safari, Edge) */
          ::-webkit-scrollbar {
            width: 10px;
          }
          ::-webkit-scrollbar-track {
            background: #0B1120; 
          }
          ::-webkit-scrollbar-thumb {
            background: #1E293B; 
            border-radius: 5px;
            border: 2px solid #0B1120;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #475569; 
          }
          /* Firefox */
          * {
            scrollbar-width: thin;
            scrollbar-color: #1E293B #0B1120;
          }
        `}</style>
      </body>
    </html>
  );
}