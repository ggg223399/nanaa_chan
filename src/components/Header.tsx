import React from 'react';
import { Cat, Twitter, CandlestickChart, MessageCircle, Send } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-pink-100/80 backdrop-blur-sm fixed w-full top-0 z-50 border-b-2 border-pink-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Cat className="w-6 h-6 text-pink-400 wiggle-on-hover" />
          <h1 className="text-2xl font-bold text-pink-600 tracking-wider hover:text-pink-500 transition-colors">
            Nanaa Nation
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://x.com/nanaa_changtp" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-6 h-6 text-blue-400 hover:text-blue-500 cursor-pointer transform hover:scale-110 transition-transform" />
          </a>
          <a href="https://t.me/nanaa_nation" target="_blank" rel="noopener noreferrer">
           <Send className="w-6 h-6 text-blue-400 hover:text-purple-700 cursor-pointer transform hover:scale-110 transition-transform float-animation" />
         </a>
          {/* <a href="https://dexscreener.com/solana/So11111111111111111111111111111111111111112" target="_blank" rel="noopener noreferrer">
           <CandlestickChart className="w-6 h-6 text-amber-600 hover:text-amber-700 cursor-pointer transform hover:scale-110 transition-transform" />
         </a> */}
         {/* <a href="https://vvaifu.fun/" target="_blank" rel="noopener noreferrer">
           <MessageCircle className="w-6 h-6 text-purple-600 hover:text-purple-700 cursor-pointer transform hover:scale-110 transition-transform float-animation" />
         </a> */}
        </div>
      </div>
    </header>
  );
}