import React from 'react';

export function Avatar() {
  return (
    <div className="relative w-48 h-48 mx-auto mb-6">
      <img
        src="https://i.ibb.co/2h003Md/nanachan-1x.png"
        alt="Nanachan Avatar"
        className="rounded-full border-4 border-pink-300 shadow-lg object-cover w-full h-full transform transition-transform group-hover:scale-105 duration-300"
      />
      <div className="absolute -bottom-2 -right-2 bg-pink-400 rounded-full p-3 shadow-lg float-animation">
        <span className="text-2xl">🌸</span>
      </div>
    </div>
  );
}