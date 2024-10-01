"use client";
import { GridPattern } from "./ui/file-upload";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Combobox from "../components/combobox";
import { Settings, Palette, Smartphone, Square } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="relative w-72 h-max overflow-hidden rounded-r-3xl shadow-xl border-r bg-gradient-to-br0 border-2 border-gray-300">
      {/* Subtle background effect */}
      <div className="absolute inset-0">
          <GridPattern />
        </div>
      <div className="relative p-6 space-y-8">
        {/* Header */}
        <div className="flex items-center space-x-3">
          <Settings className="w-6 h-6 text-gray-900" />
          <h1 className="text-xl font-bold text-gray-700">Settings</h1>
        </div>

        <Separator />

        {/* Theme Section */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium flex items-center space-x-2 text-gray-800">
              <Palette className="w-4 h-4" />
              <span>Theme</span>
            </Label>
            <div className="grid grid-cols-4 gap-3 w-36">
              {/* Clean and modern color buttons */}
              {[
                ["Sunset", "from-purple-400 via-pink-500 to-red-500"],
                ["Ocean", "from-green-300 via-blue-500 to-purple-600"],
                ["Spring", "from-yellow-200 via-green-200 to-green-500"],
                ["Autumn", "from-red-500 via-red-400 to-yellow-300"],
                ["Night", "from-blue-700 via-blue-800 to-gray-900"],
                ["Vibrant", "from-red-500 via-yellow-600 to-blue-600"],
                ["Light", "from-gray-100 to-gray-300"],
                ["Dark", "from-gray-700 to-gray-900"],
              ].map(([label, gradient], index) => (
                <button
                  key={index}
                  className={`w-8 h-8 rounded-lg bg-gradient-to-r ${gradient} hover:opacity-90  transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-md`}
                  aria-label={`${label} theme`}
                ></button>
              ))}
            </div>
          </div>

          {/* Padding Section */}
          <div className="space-y-2">
            <Label className="text-sm font-medium flex items-center space-x-2 text-gray-800">
              <Square className="w-4 h-4" />
              <span>Padding</span>
            </Label>
            <div className="flex space-x-2">
              {[16, 32, 64, 128].map((value) => (
                <span
                  key={value}
                  className="font-mono bg-slate-300/40 rounded-md p-2 text-sm font-semibold text-gray-700 transition-transform duration-200 ease-in-out hover:bg-slate-400/50 hover:scale-105 hover:shadow-md"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>

          {/* Device Mockup Section */}
          <div className="space-y-2">
            <Label className="text-sm font-medium flex items-center space-x-2 text-gray-600">
              <Smartphone className="w-4 h-4" />
              <span>Device Mockup</span>
            </Label>
            <Combobox />
          </div>
        </div>

        <Separator />

        {/* Apply Button */}
        <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-lg py-2 shadow-md">
          Apply Settings
        </Button>
      </div>
    </div>
  );
}
