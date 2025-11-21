"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, Trash2, X, ChevronDown, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AISidebar() {
  // State for collapse/expand
  const [isOpen, setIsOpen] = useState(true); // Default to open? or false
  
  const [messages, setMessages] = useState([
    { 
      id: 1,
      role: "ai", 
      text: "Hello! I'm CodeMentor. Submit your code and I'll analyze its time complexity and logic." 
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = { id: Date.now(), role: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const aiMsg = { 
        id: Date.now() + 1,
        role: "ai", 
        text: "I noticed you are using a nested loop. This makes the solution O(n²). Try using a Hash Map to optimize it to O(n)." 
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        
        {/* --- STATE 1: EXPANDED CHAT WINDOW --- */}
        {isOpen ? (
          <motion.div
            key="sidebar"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.2 } }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            // Fixed positioning to float over content on the right
            className="fixed bottom-6 right-6 w-[400px] h-[600px] max-h-[80vh] flex flex-col bg-[#0B1120]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Ambient Glow inside the card */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-violet-500/20 blur-[80px] pointer-events-none" />

            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5 backdrop-blur-md z-10">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
                    <Bot className="text-white" size={18} />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#0B1120] rounded-full animate-pulse" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">AI Mentor</h3>
                  <p className="text-[10px] text-violet-300 flex items-center gap-1">
                    <Sparkles size={10} /> Online
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => setMessages([])}
                  className="p-2 text-slate-500 hover:text-rose-400 hover:bg-white/5 rounded-lg transition-colors"
                  title="Clear Chat"
                >
                  <Trash2 size={16} />
                </button>
                {/* Minimize Button */}
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  <ChevronDown size={20} />
                </button>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar relative z-0">
              {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-500 opacity-50">
                  <Bot size={48} className="mb-4" />
                  <p className="text-sm">Ask me anything about your code.</p>
                </div>
              )}

              {messages.map((msg) => (
                <MessageBubble key={msg.id} message={msg} />
              ))}

              {isTyping && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                     <Bot size={16} className="text-violet-400" />
                  </div>
                  <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-[#0B1120]/80 z-10">
              <div className="relative flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-1.5 focus-within:border-violet-500/50 transition-all shadow-inner">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask logic, complexity..."
                  className="flex-1 bg-transparent border-none text-sm text-white placeholder:text-slate-500 focus:ring-0 px-3 py-2"
                  autoFocus
                />
                <button 
                  onClick={handleSend} 
                  disabled={!input.trim()}
                  className="p-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-violet-500/20 active:scale-95"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          
          /* --- STATE 2: COLLAPSED FLOATING BUTTON --- */
          <motion.button
            key="button"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-full shadow-[0_0_30px_rgba(139,92,246,0.5)] border border-white/20 group"
          >
            <div className="relative">
              <Bot size={24} className="fill-white/20" />
              {/* Notification Dot if needed */}
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-violet-600"></span>
            </div>
            <span className="font-semibold text-sm tracking-wide pr-1">Ask AI</span>
            
            {/* Glowing effect behind */}
            <div className="absolute inset-0 -z-10 bg-violet-500/50 blur-xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

// --- Sub-Component: Message Bubble ---
function MessageBubble({ message }) {
  const isAI = message.role === "ai";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className={`flex gap-3 ${isAI ? "" : "flex-row-reverse"}`}
    >
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${
        isAI 
          ? "bg-white/5 border-white/10 text-violet-400" 
          : "bg-gradient-to-br from-slate-700 to-slate-800 border-white/10 text-slate-200"
      }`}>
        {isAI ? <Bot size={16} /> : <User size={16} />}
      </div>

      <div className={`relative p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm max-w-[85%] ${
        isAI 
          ? "bg-white/5 border border-white/10 text-slate-300 rounded-tl-none" 
          : "bg-violet-600 text-white rounded-tr-none shadow-violet-500/10"
      }`}>
        {message.text}
      </div>
    </motion.div>
  );
}