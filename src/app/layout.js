import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import ShaderBackground from "@/components/ui/shader-background";
import MouseSpotlight from "@/components/ui/mouse-spotlight";
import CustomCursor from "@/components/ui/custom-cursor"; // <--- IMPORT THIS

// ... (Keep your fonts and metadata)

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="...">
      <body className="...">
        
        {/* ... (Keep Shader, Overlay, Noise, Spotlight) ... */}

        {/* --- CUSTOM CURSOR --- */}
        <CustomCursor />

        {/* ... (Keep Navbar and Main) ... */}
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