"use client";
import { useState } from "react";
import { Send, Bot, User } from "lucide-react";

export default function AISidebar({ code }) {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hello! I'm CodeMentor. Submit your code and I'll analyze its time complexity and logic." }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    // Mock AI Response (You will connect this to API later)
    setTimeout(() => {
      setMessages((prev) => [...prev, { 
        role: "ai", 
        text: "I noticed you are using a nested loop. This makes the solution O(n²). Try using a Hash Map to optimize it to O(n)." 
      }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-[#111] border-l border-neutral-800">
      {/* Header */}
      <div className="p-4 border-b border-neutral-800 flex items-center gap-2">
        <Bot className="text-purple-500" size={20} />
        <span className="font-semibold">AI Mentor</span>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
              msg.role === "ai" ? "bg-purple-900/50 text-purple-400" : "bg-blue-900/50 text-blue-400"
            }`}>
              {msg.role === "ai" ? <Bot size={16} /> : <User size={16} />}
            </div>
            <div className={`p-3 rounded-lg text-sm max-w-[85%] leading-relaxed ${
              msg.role === "ai" ? "bg-neutral-800 text-gray-200" : "bg-blue-600 text-white"
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-neutral-800">
        <div className="flex gap-2">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask a question..."
            className="flex-1 bg-neutral-900 border border-neutral-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
          />
          <button onClick={handleSend} className="p-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}