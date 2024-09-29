
import React from 'react';
import Navbar from "@/components/Navbar";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { Macbook, IPhoneSE} from "@/components/mockups";
import Sidebar from '@/components/Sidebar';
import CreateButton from '../components/createButton';

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
        <div className="flex pt-2 flex-row justify-center mb-2">
          <Navbar/>
        </div>
        {/*Sidebar*/}
        <div className='flex flex-row  gap-2  items-center  '>
          <Sidebar/>
        <div className='w-5/6 border-2 border-black h-screen rounded-xl '>
        </div>
        </div>

        
      </div>
      {/* CreateButton at the bottom right corner */}
      <div className="fixed bottom-4 right-4 z-20">
        <CreateButton/>
      </div>
    </div>
  );
}