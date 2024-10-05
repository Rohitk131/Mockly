"use client";
import React from "react";
import { GridPattern } from "./ui/file-upload";

interface NavbarProps {
  onDownload: () => void;
}

export default function NavbarWithGridBackground({ onDownload }: NavbarProps) {
  return (
    <div className="relative w-1/2 h-16 ">
      {/* Navbar Content */}
      <div className="relative z-10 flex justify-between items-center w-full h-full bg-neutral-900/90 rounded-xl mx-2 py-2 px-4 overflow-hidden shadow-xl border-2 border-gray-400">
        {/* GridPattern as background */}
        <div className="absolute inset-0 z-0">
          <GridPattern />
        </div>
        
        {/* Navbar items */}
        <h1 className="relative z-10 text-black font-mono font-bold text-3xl ">Mockly</h1>
        <button 
          onClick={onDownload}
          className="relative z-10 text-white bg-red-600/75 font-mono font-semibold px-3 py-2 rounded-lg border-2 border-red-600"
        >
          Download
        </button>
      </div>
    </div>
  );
}