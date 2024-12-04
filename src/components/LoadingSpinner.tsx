import React from 'react';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center space-x-1">
      <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
    </div>
  );
}