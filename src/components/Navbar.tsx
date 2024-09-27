"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Glowbutton from '@/components/ui/glowbutton'
export default function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="rounded-xl mx-2 bg-neutral-900 relative w-1/2">
      <div className="py-2 px-4 flex flex-row justify-between items-center">
        <h1 className="text-white font-mono font-bold text-3xl">Mockly</h1>
        <button className="text-white bg-red-500/50  font-mono font-semibold px-3 py-2 rounded-lg border-2 border-red-500">Download</button>
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
