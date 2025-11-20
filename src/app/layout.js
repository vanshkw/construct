import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-space' });

export const metadata = {
  title: "Construct AI - Intelligent Coding Mentorship",
  description: "Master competitive programming with AI-powered feedback, complexity analysis, and a unified problem set.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Navbar />
        {/* The 'main' tag is the last div-like element in the body, which our CSS targets for the second blob. */}
        <main className="pt-16 min-h-screen relative z-10"> {/* z-10 ensures content is above blobs */}
           {children}
        </main>
      </body>
    </html>
  );
}