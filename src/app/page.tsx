"use client";
import React, { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import {
  IPhoneSE,
  Pixel2,
  IPhoneX,
  Macbook,
  IPhone5C,
  IPad,
} from "@/components/mockups";
import Sidebar from "@/components/Sidebar";
import CreateButton from "@/components/createButton";
import { FileUpload } from "@/components/ui/file-upload";
import html2canvas from 'html2canvas';
export default function App() {
  const [theme, setTheme] = useState(
    "from-indigo-600 via-purple-500 to-pink-500"
  );

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [padding, setPadding] = useState(16);
  const mockupRef = useRef(null);

  const [selectedDevice, setSelectedDevice] = useState("IPhoneSE");
  const handleDeviceChange = (newDevice) => {
    setSelectedDevice(newDevice);
  };
  const renderSelectedDevice = () => {
    const props = { src: imageSrc };
    switch (selectedDevice) {
      case "IPhoneSE":
        return <IPhoneSE {...props} />;
      case "Pixel2":
        return <Pixel2 {...props} />;
      case "IPhoneX":
        return <IPhoneX {...props} />;
      case "Macbook":
        return <Macbook {...props} />;
      case "IPhone5C":
        return <IPhone5C {...props} />;
      case "IPad":
        return <IPad {...props} />;
      default:
        <IPhoneSE {...props} />;
    }
  };
  
  const handlePaddingChange = (newPadding) => {
    setPadding(newPadding);
  };
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };
  const handleFileUpload = (uploadedFiles: File[]) => {
    if (uploadedFiles.length > 0) {
      const file = uploadedFiles[0];
      const fileUrl = URL.createObjectURL(file);
      setImageSrc(fileUrl);
    }
  };

  const handleDownload = async () => {
    if (mockupRef.current) {
      const canvas = await html2canvas(mockupRef.current);
      const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      const link = document.createElement('a');
      link.download = 'mockup.png';
      link.href = image;
      link.click();
    }
  };

  return (
    <div className="relative flex h-full w-screen overflow-hidden bg-background">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]"
        )}
      />

      {/* Main Content */}
      <div className="relative flex flex-col z-10 h-screen w-full">
        {/* Navbar at the top */}
        <div className="flex pt-2 flex-row justify-center mb-2">
          <Navbar onDownload={handleDownload} />
        </div>

        <div className="flex flex-1 flex-row items-center h-screen ">
          <div className="flex items-center">
            <Sidebar
              onThemeChange={handleThemeChange}
              onPaddingChange={handlePaddingChange}
              onDeviceChange={handleDeviceChange}
            />
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="w-5/6 h-5/6 rounded-xl flex items-center justify-center" >
              {imageSrc ? (
                <div
                  className={`bg-gradient-to-br ${theme} `}
                  style={{ padding: `${padding / 4}px ${padding / 1}px` }}
                  ref={mockupRef}
                >
                  {renderSelectedDevice()}
                </div>
              ) : (
                <FileUpload onChange={handleFileUpload} />
              )}
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
