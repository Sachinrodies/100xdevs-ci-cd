"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [showCake, setShowCake] = useState(false);
  const [showWish, setShowWish] = useState(false);

  useEffect(() => {
    // Animate elements in sequence
    setTimeout(() => setShowCake(true), 500);
    setTimeout(() => setShowWish(true), 1000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Birthday Cake Animation */}
        <div className={`transition-all duration-1000 transform ${showCake ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
          <div className="relative mb-8">
            {/* Cake Base */}
            <div className="w-48 h-32 bg-gradient-to-r from-pink-300 to-purple-300 rounded-lg mx-auto shadow-lg relative">
              {/* Cake Layers */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-40 h-8 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-lg"></div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-r from-red-300 to-pink-300 rounded-lg"></div>
              
              {/* Candles */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="relative">
                    <div className="w-1 h-6 bg-yellow-400 mx-auto"></div>
                    <div className="w-2 h-2 bg-yellow-200 rounded-full mx-auto -mt-1 animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Birthday Message */}
        <div className={`transition-all duration-1000 transform ${showWish ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4 animate-pulse">
            🎉 Happy Birthday! 🎉
          </h1>
          
          <div className="text-2xl text-gray-700 mb-8 leading-relaxed">
            <p className="mb-4">Wishing you a day filled with</p>
            <p className="text-3xl font-semibold text-purple-600 mb-4">
              Joy ✨ Laughter 😄 Love ❤️
            </p>
            <p className="text-xl text-gray-600">
              And all the wonderful things that make you smile!
            </p>
          </div>

          {/* Birthday Wishes */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-8">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">🎂 Birthday Wishes 🎂</h2>
            <div className="space-y-3 text-lg text-gray-700">
              <p>🌟 May your day be as special as you are!</p>
              <p>🎁 Here's to another amazing year ahead!</p>
              <p>✨ May all your dreams come true!</p>
              <p>💫 Wishing you health, happiness, and success!</p>
            </div>
          </div>

          {/* Interactive Elements */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="animate-bounce">
              <span className="text-4xl">🎈</span>
            </div>
            <div className="animate-bounce" style={{ animationDelay: '0.2s' }}>
              <span className="text-4xl">🎊</span>
            </div>
            <div className="animate-bounce" style={{ animationDelay: '0.4s' }}>
              <span className="text-4xl">🎉</span>
            </div>
            <div className="animate-bounce" style={{ animationDelay: '0.6s' }}>
              <span className="text-4xl">🎂</span>
            </div>
            <div className="animate-bounce" style={{ animationDelay: '0.8s' }}>
              <span className="text-4xl">🎁</span>
            </div>
          </div>

          {/* Special Message */}
          <div className="bg-gradient-to-r from-pink-200 to-purple-200 rounded-xl p-6 shadow-lg">
            <p className="text-xl font-semibold text-purple-800">
              "Every birthday is a new beginning, a time to reflect on the past year and look forward to the adventures ahead. 
              May this year bring you countless moments of happiness and fulfillment!"
            </p>
          </div>
        </div>

        {/* Floating Confetti Effect */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => {
            const emojis = ['🎈', '🎊', '🎉', '✨', '🌟'];
            const left = (i * 5) % 100;
            const top = (i * 7) % 100;
            const delay = (i * 0.1) % 2;
            const duration = 2 + (i % 2);
            const emoji = emojis[i % emojis.length];
            
            return (
              <div
                key={i}
                className="absolute animate-ping"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`
                }}
              >
                <span className="text-2xl">{emoji}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
