
import React from 'react';
import Navbar from "@/components/Navbar";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { Macbook, IPhoneSE} from "@/components/mockups";

import CreateButton from '../components/createButton';
import DockMenu from '../components/DockMenu';

export default function App() {


  return (
    <div className="relative flex h-screen w-screen overflow-hidden bg-background">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
        )}
      />

      {/* Main Content */}
      <div className="relative flex flex-col z-10 h-full w-full">
        {/* MainName centered at the top */}
        <div className="flex pt-2 flex-row justify-center">
          <Navbar/>
        </div>

        {/* Card and Macbook container */}
        <div className="flex-grow flex justify-center items-center px-4 sm:px-8 md:px-16 lg:px-20 overflow-hidden">
          <div className="w-full max-w-7xl flex items-center justify-center">
            {/* Mockup device */}
            <div 
              className="flex justify-center items-center p-4"
              style={{
                maxWidth: '100%',
                maxHeight: 'calc(200vh - 300px)', 
                overflow: 'hidden'
              }}
              
            >
              <div className="transform transition-transform duration-300 hover:scale-105">
                <IPhoneSE />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CreateButton at the bottom right corner */}
      <div className="fixed bottom-4 right-4 z-20">
        <CreateButton/>
      </div>

      {/* DockMenu at the bottom center */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <DockMenu/>
      </div>
    </div>
  );
}