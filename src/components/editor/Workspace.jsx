"use client";

import { useState, useEffect, useRef } from "react";
import { Editor } from "@monaco-editor/react";
import { Bot, Play, Settings, ChevronDown, FileCode, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AISidebar from "@/components/ai/AISidebar"; 
import { Badge } from "@/components/ui/Badge"; 
import CodeScanner from "@/components/ai/CodeScanner"; 

// --- CONFIGURATION ---

// 1. Language Metadata
const LANGUAGES = [
  { id: "cpp", label: "C++", filename: "solution.cpp" },
  { id: "javascript", label: "JavaScript", filename: "solution.js" },
  { id: "python", label: "Python", filename: "solution.py" },
  { id: "java", label: "Java", filename: "Solution.java" },
];

// 2. Default Code Templates
const CODE_SNIPPETS = {
  cpp: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Write your solution here...
        return {};
    }
};

int main() {
    Solution sol;
    // Test your code here
    return 0;
}`,
  javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Write your solution here...
    
};

// Test case
console.log(twoSum([2,7,11,15], 9));`,
  python: `from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Write your solution here...
        pass

# Test case
if __name__ == "__main__":
    s = Solution()
    print(s.twoSum([2,7,11,15], 9))`,
  java: `import java.util.*;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your solution here...
        return new int[]{};
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        // Test your code
    }
}`
};

export default function Workspace({ problemId }) {
  // State
  const [language, setLanguage] = useState("cpp"); 
  // Initialize code with the C++ snippet
  const [code, setCode] = useState(CODE_SNIPPETS["cpp"]); 
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false); 
  const [isScanning, setIsScanning] = useState(false);

  // Logic to switch language AND template
  const handleLanguageChange = (langId) => {
    setLanguage(langId);
    setCode(CODE_SNIPPETS[langId]); // <--- Updates the editor content
    setIsLangMenuOpen(false);
  };

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 3000);
  };

  const currentLang = LANGUAGES.find(l => l.id === language) || LANGUAGES[0];

  // --- RESIZABLE PANEL LOGIC ---
  const [leftWidth, setLeftWidth] = useState(35); 
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const startResizing = (e) => {
    setIsDragging(true);
    e.preventDefault(); 
  };

  const stopResizing = () => setIsDragging(false);

  const resize = (e) => {
    if (isDragging && containerRef.current) {
      const newWidth = (e.clientX / containerRef.current.offsetWidth) * 100;
      if (newWidth > 20 && newWidth < 70) { 
        setLeftWidth(newWidth);
      }
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", resize);
      window.addEventListener("mouseup", stopResizing);
    } else {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    }
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [isDragging]);


  return (
    <div ref={containerRef} className="flex h-full w-full relative bg-transparent overflow-hidden">
      
      {/* --- LEFT PANEL --- */}
      <div 
        style={{ width: `${leftWidth}%` }} 
        className="h-full flex flex-col border-r border-white/10 bg-[#0B1120]/60 backdrop-blur-md transition-[width] duration-0 ease-linear"
      >
        <div className="h-12 border-b border-white/10 flex items-center px-6 bg-white/5">
           <div className="flex items-center gap-2 text-sm font-medium text-white">
              <span className="text-slate-500">Problem</span>
              <span className="text-slate-600">/</span>
              <span>Two Sum</span>
           </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
           <h1 className="text-2xl font-bold text-white mb-4">1. Two Sum</h1>
           <div className="flex gap-3 mb-6">
             <Badge variant="easy">Easy</Badge>
             <Badge variant="default" className="bg-slate-800 text-slate-400 border-slate-700">LeetCode</Badge>
           </div>
           <div className="prose prose-invert prose-sm max-w-none text-slate-300 leading-relaxed">
             <p>Given an array of integers <code className="bg-white/10 px-1 py-0.5 rounded text-violet-300">nums</code> and an integer <code className="bg-white/10 px-1 py-0.5 rounded text-violet-300">target</code>, return indices of the two numbers such that they add up to <code className="bg-white/10 px-1 py-0.5 rounded text-violet-300">target</code>.</p>
             <p>You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice.</p>
           </div>
           <div className="mt-8 space-y-4">
              <div className="glass-card p-4 rounded-lg border border-white/10 bg-black/20">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Example 1</h3>
                <div className="font-mono text-sm space-y-2">
                  <div><span className="text-violet-400">Input:</span> <span className="text-slate-300">nums = [2,7,11,15], target = 9</span></div>
                  <div><span className="text-violet-400">Output:</span> <span className="text-emerald-400">[0,1]</span></div>
                  <div className="text-slate-500 text-xs mt-2">// Because nums[0] + nums[1] == 9, we return [0, 1].</div>
                </div>
              </div>
           </div>
        </div>
      </div>

      {/* --- RESIZER --- */}
      <div
        className={`w-1.5 h-full cursor-col-resize flex items-center justify-center hover:bg-violet-500/50 transition-colors z-20 ${
          isDragging ? "bg-violet-500" : "bg-transparent"
        }`}
        onMouseDown={startResizing}
      >
        <div className="h-8 w-1 bg-white/20 rounded-full" /> 
      </div>

      {/* --- MIDDLE PANEL: Code Editor --- */}
      <div className="flex-1 flex flex-col relative bg-[#111827]/80 backdrop-blur-sm min-w-0 border-l border-white/5">
        
        {/* Toolbar */}
        <div className="h-12 border-b border-white/10 flex items-center justify-between px-4 bg-[#111827]/50 relative z-20">
            
            {/* Language Selector */}
            <div className="relative">
                <button 
                    onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-xs text-slate-300 font-mono group"
                >
                    <FileCode size={14} className="text-blue-400" />
                    <span>{currentLang.filename}</span>
                    <ChevronDown size={12} className={`text-slate-500 transition-transform duration-200 ${isLangMenuOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                    {isLangMenuOpen && (
                        <>
                            <div className="fixed inset-0 z-10" onClick={() => setIsLangMenuOpen(false)} />
                            <motion.div
                                initial={{ opacity: 0, y: 5, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                                transition={{ duration: 0.1 }}
                                className="absolute top-full left-0 mt-2 w-48 bg-[#0B1120] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-20 backdrop-blur-xl"
                            >
                                <div className="p-1">
                                    {LANGUAGES.map((lang) => (
                                        <button
                                            key={lang.id}
                                            onClick={() => handleLanguageChange(lang.id)} // Updated Handler
                                            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors ${
                                                language === lang.id 
                                                    ? "bg-violet-500/10 text-violet-300" 
                                                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                                            }`}
                                        >
                                            <div className="flex items-center gap-2">
                                                <span className="font-medium">{lang.label}</span>
                                            </div>
                                            {language === lang.id && <Check size={12} />}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
                <button 
                    onClick={handleScan}
                    className="flex items-center gap-2 px-4 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-violet-300 hover:text-violet-200 rounded-lg text-xs font-medium transition-all"
                >
                    <Bot size={14} /> AI Scan
                </button>
                <button className="flex items-center gap-2 px-4 py-1.5 bg-emerald-600/10 hover:bg-emerald-600/20 border border-emerald-500/20 text-emerald-400 rounded-lg text-xs font-medium transition-all">
                    <Play size={14} fill="currentColor" /> Run
                </button>
                <div className="w-px h-4 bg-white/10 mx-1" />
                <button className="p-1.5 hover:bg-white/10 rounded text-slate-400 hover:text-white transition-colors">
                  <Settings size={16} />
                </button>
            </div>
        </div>

        {/* Editor */}
        <div className="flex-1 relative group">
            <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
               <CodeScanner isScanning={isScanning} />
            </div>

            <Editor
              height="100%"
              language={language}
              theme="midnight" 
              value={code}
              onChange={(val) => setCode(val || "")}
              options={{ 
                minimap: { enabled: false }, 
                fontSize: 14,
                fontFamily: "var(--font-mono)",
                lineHeight: 24,
                scrollBeyondLastLine: false,
                automaticLayout: true,
                padding: { top: 16, bottom: 16 },
                smoothScrolling: true,
                cursorBlinking: "smooth",
                cursorSmoothCaretAnimation: "on",
              }}
              beforeMount={(monaco) => {
                monaco.editor.defineTheme('midnight', {
                  base: 'vs-dark',
                  inherit: true,
                  rules: [],
                  colors: {
                    'editor.background': '#00000000', 
                    'editor.lineHighlightBackground': '#FFFFFF08',
                  }
                });
              }}
            />
            
            {isDragging && <div className="absolute inset-0 z-50 bg-transparent cursor-col-resize" />}
        </div>
      </div>

      <AISidebar />
    </div>
  );
}