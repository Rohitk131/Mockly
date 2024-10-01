import React from "react";
import Navbar from "@/components/Navbar";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { Macbook, IPhoneSE } from "@/components/mockups";
import Sidebar from "@/components/Sidebar";
import CreateButton from "../components/createButton";
import FileUpload from "@/components/FileUpload";

export default function App() {
  return (
    <div className="relative flex h-screen w-screen overflow-hidden bg-background">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]"
        )}
      />

      {/* Main Content */}
      <div className="relative flex flex-col z-10 h-screen w-full">
        {/* Navbar at the top */}
        <div className="flex pt-2 flex-row justify-center mb-2">
          <Navbar />
        </div>

        {/* Main content area */}
        <div className="flex flex-1 flex-row items-center">
          {/* Sidebar */}
          <div className="flex items-center">
            <Sidebar />
          </div>

          {/* File Upload area */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-5/6 h-5/6 rounded-xl flex items-center justify-center">
              <FileUpload />
            </div>
          </div>
        </div>
      </div>

      {/* CreateButton at the bottom right corner */}
      <div className="fixed bottom-4 right-4 z-20">
        <CreateButton />
      </div>
    </div>
  );
}