"use client";
import { useState } from "react";
import { Editor } from "@monaco-editor/react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Play, Maximize2 } from "lucide-react";
import AISidebar from "@/components/ai/AISidebar";
import CodeScanner from "@/components/ai/CodeScanner";

export default function Workspace({ problemId }) {
  const [code, setCode] = useState("// Write your C++ solution here...\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n    // Your code\n    return 0;\n}");
  const [showAI, setShowAI] = useState(true);
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    // Scan for 2 seconds then stop
    setTimeout(() => setIsScanning(false), 2000);
    if (!showAI) setShowAI(true);
  };

  return (
    <div className="flex h-full w-full">
      {/* LEFT PANEL: Problem Description */}
      <div className="w-[35%] border-r border-neutral-800 p-6 overflow-y-auto bg-black">
        <div className="mb-6">
           <h1 className="text-2xl font-bold text-white mb-2">1. Two Sum</h1>
           <div className="flex gap-2 mb-4">
             <span className="text-xs bg-green-900/30 text-green-400 px-2 py-1 rounded">Easy</span>
             <span className="text-xs bg-neutral-800 text-gray-400 px-2 py-1 rounded">LeetCode</span>
           </div>
           <p className="text-gray-300 leading-7 text-sm">
             Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.
             <br /><br />
             You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice.
           </p>
        </div>
        
        <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
          <h3 className="text-sm font-bold mb-2">Example 1:</h3>
          <code className="text-xs text-gray-400">
            Input: nums = [2,7,11,15], target = 9<br/>
            Output: [0,1]<br/>
            Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
          </code>
        </div>
      </div>

      {/* MIDDLE PANEL: Code Editor */}
      <div className="flex-1 flex flex-col relative bg-[#1e1e1e]">
        {/* Toolbar */}
        <div className="h-12 border-b border-neutral-800 flex items-center justify-between px-4 bg-neutral-900">
            <span className="text-sm text-gray-400 font-mono">solution.cpp</span>
            <div className="flex gap-2">
                <button 
                    onClick={handleScan}
                    className="flex items-center gap-2 px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded text-xs font-medium transition-colors"
                >
                    <Bot size={16} /> AI Analyze
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded text-xs font-medium">
                    <Play size={16} /> Run Code
                </button>
                <button onClick={() => setShowAI(!showAI)} className="p-1.5 hover:bg-neutral-700 rounded text-gray-400">
                  <Maximize2 size={16} />
                </button>
            </div>
        </div>

        {/* The Editor Area */}
        <div className="flex-1 relative">
            <CodeScanner isScanning={isScanning} />
            
            <Editor
              height="100%"
              defaultLanguage="cpp"
              theme="vs-dark"
              value={code}
              onChange={(val) => setCode(val || "")}
              options={{ 
                minimap: { enabled: false }, 
                fontSize: 14,
                scrollBeyondLastLine: false,
                automaticLayout: true
              }}
            />
        </div>
      </div>

      {/* RIGHT PANEL: AI Sidebar */}
      <AnimatePresence>
        {showAI && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "25%", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="h-full"
          >
            <AISidebar code={code} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}