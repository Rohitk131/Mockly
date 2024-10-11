"use client";
import { GridPattern } from "./ui/file-upload";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Settings, Palette, Smartphone, Square } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const frameworks = [
  { value: "IPhoneSE", label: "IPhone SE" },
  { value: "Pixel2", label: "Pixel 2" },
  { value: "IPhoneX", label: "IPhone X" },
  { value: "Macbook", label: "Macbook" },
  { value: "IPhone5C", label: "IPhone 5C" },
  { value: "IPad", label: "iPad" },
];

export default function Sidebar({
  onThemeChange,
  onPaddingChange,
  onDeviceChange,
  onWallpaperChange,
}) {
  const [selectedDevice, setSelectedDevice] = useState("IPhoneSE");

  const handleWallpaperClick = (wallpaper) => {
    onWallpaperChange(wallpaper);
  };

  const handleThemeClick = (gradient) => {
    onThemeChange(gradient);
  };

  const handlePaddingClick = (value) => {
    onPaddingChange(value);
  };

  const handleDeviceChange = (value) => {
    setSelectedDevice(value);
    onDeviceChange(value);
  };

  return (
    <div className="relative w-64 h-max overflow-hidden rounded-r-3xl shadow-xl border-r bg-gradient-to-br0 border-2 border-gray-300">
      <div className="absolute inset-0">
        <GridPattern />
      </div>
      <div className="relative p-6 space-y-8">
        <div className="flex items-center space-x-3">
          <Settings className="w-6 h-6 text-gray-900" />
          <h1 className="text-xl font-bold text-gray-700">Settings</h1>
        </div>

        <Separator />

        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium flex items-center space-x-2 text-gray-800">
              <Palette className="w-4 h-4" />
              <span>Theme</span>
            </Label>
            <div className="grid grid-cols-5 gap-3 w-48">
              {[
                ["Neo Mint", "from-emerald-200 via-teal-300 to-cyan-400"],
                ["Coral Silk", "from-rose-300 via-pink-400 to-orange-400"],
                ["Twilight Haze", "from-indigo-600 via-purple-500 to-pink-500"],
                ["Golden Hour", "from-amber-200 via-orange-300 to-rose-300"],
                ["Arctic Aurora", "from-blue-400 via-cyan-400 to-emerald-400"],
                ["Velvet Noir", "from-gray-900 via-purple-900 to-violet-800"],
                ["Spring", "from-yellow-200 via-green-200 to-green-500"],
                ["Ocean Depth", "from-blue-900 via-blue-700 to-teal-500"],
                ["Lavender Mist", "from-purple-200 via-pink-200 to-red-200"],
                [
                  "Cosmic Fusion",
                  "from-fuchsia-500 via-purple-600 to-indigo-600",
                ],
                ["Lush Meadow", "from-green-300 via-emerald-400 to-teal-500"],
                [
                  "Midnight Bloom",
                  "from-blue-800 via-indigo-700 to-purple-800",
                ],
                ["Citrus Zest", "from-yellow-300 via-orange-400 to-red-500"],
                ["Frosted Glass", "from-white via-gray-100 to-gray-200"],
                ["Night", "from-blue-700 via-blue-800 to-gray-900"],
              ].map(([label, gradient], index) => (
                <button
                  key={index}
                  className={`w-8 h-8 rounded-xl bg-gradient-to-r ${gradient} hover:opacity-90 transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-md`}
                  aria-label={`${label} theme`}
                  onClick={() => handleThemeClick(gradient)}
                ></button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium flex items-center space-x-2 text-gray-800">
              <span>Wallpaper</span>
            </Label>
            <div className="grid grid-cols-3 gap-3 w-48">
              {[
                [
                  "Geometric",
                  "https://images.unsplash.com/photo-1518818419601-72c8673f5852?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                ],
                [
                  "Abstract",
                  "https://images.unsplash.com/photo-1634118931958-f1cf1f9c6156?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                ],
                [
                  "Nature",
                  "https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=2107&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                ],
                [
                  "Cityscape",
                  "https://images.unsplash.com/photo-1728329236881-f535f0beca8d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                ],
                [
                  "Minimal",
                  "https://images.unsplash.com/photo-1687392946859-cebb261f01f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                ],
                [
                  "Texture",
                  "https://images.unsplash.com/photo-1634648852208-fc7e55a15751?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                ],
                [
                  "Texture",
                  "https://images.unsplash.com/photo-1635829771690-f2323d3bfea7?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                ],
                [
                  "Texture",
                  "https://images.unsplash.com/photo-1664265694638-e858db3fd16b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                ],
                [
                  "Texture",
                  "https://images.unsplash.com/photo-1727053850611-8351da50cff9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                ],
              ].map(([label, wallpaper], index) => (
                <button
                  key={index}
                  className="w-14 h-14 rounded-xl hover:opacity-90 transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-md"
                  style={{
                    backgroundImage: `url(${wallpaper})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  aria-label={`${label} wallpaper`}
                  onClick={() => handleWallpaperClick(wallpaper)}
                ></button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium flex items-center space-x-2 text-gray-800">
              <Square className="w-4 h-4" />
              <span>Padding</span>
            </Label>
            <div className="flex space-x-2">
              {[32, 64, 128, 256].map((value) => (
                <button
                  key={value}
                  className="font-mono bg-slate-300/40 rounded-xl p-2 text-sm font-semibold text-gray-700 transition-transform duration-200 ease-in-out hover:bg-slate-400/50 hover:scale-105 hover:shadow-md"
                  onClick={() => handlePaddingClick(value)}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium flex items-center space-x-2 text-gray-600">
              <Smartphone className="w-4 h-4" />
              <span>Device Mockup</span>
            </Label>
            <Select onValueChange={handleDeviceChange} value={selectedDevice}>
              <SelectTrigger className="w-[180px] rounded-md ">
                <SelectValue placeholder="Select a device" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                <SelectGroup className="rounded-xl">
                  <SelectLabel className="bg-slate-100 rounded-t-xl ">Devices</SelectLabel>
                  {frameworks.map((framework) => (
                    <SelectItem key={framework.value} value={framework.value} className="bg-slate-50" >
                      {framework.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Separator />
      </div>
    </div>
  );
}
