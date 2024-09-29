"use client";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Combobox from "../components/combobox";
import { Settings, Palette, Smartphone, Square } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="relative w-64 h-min overflow-hidden rounded-r-3xl shadow-xl border-r">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-400 to-blue-500 opacity-35 animate-gradient-x"></div>
      <div className="relative bg-background/20 backdrop-blur-lg p-6 space-y-6">
        <div className="flex items-center space-x-2">
          <Settings className="w-6 h-6" />
          <h1 className="text-2xl font-semibold">Settings</h1>
        </div>

        <Separator />

        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium flex items-center space-x-2">
              <Palette className="w-4 h-4" />
              <span>Theme</span>
            </Label>
            {/* Moving the color buttons outside of the Label */}
            <div className="grid grid-cols-4 gap-4 w-32">
              <button
                className="w-6 h-6 rounded-md bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:opacity-80 transition-opacity"
                aria-label="Sunset theme"
              ></button>
              <button
                className="w-6 h-6 rounded-md bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 hover:opacity-80 transition-opacity"
                aria-label="Ocean theme"
              ></button>
              <button
                className="w-6 h-6 rounded-md bg-gradient-to-r from-yellow-200 via-green-200 to-green-500 hover:opacity-80 transition-opacity"
                aria-label="Spring theme"
              ></button>
              <button
                className="w-6 h-6 rounded-md bg-gradient-to-r from-red-500 via-red-400 to-yellow-300 hover:opacity-80 transition-opacity"
                aria-label="Autumn theme"
              ></button>
              <button
                className="w-6 h-6 rounded-md bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 hover:opacity-80 transition-opacity"
                aria-label="Night theme"
              ></button>
              <button
                className="w-6 h-6 rounded-md bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-500 via-yellow-600 to-blue-600 hover:opacity-80 transition-opacity"
                aria-label="Vibrant theme"
              ></button>
              <button
                className="w-6 h-6 rounded-md bg-gradient-to-r from-gray-100 to-gray-300 hover:opacity-80 transition-opacity"
                aria-label="Light theme"
              ></button>
              <button
                className="w-6 h-6 rounded-md bg-gradient-to-r from-gray-700 to-gray-900 hover:opacity-80 transition-opacity"
                aria-label="Dark theme"
              ></button>
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="padding"
              className="text-sm font-medium flex items-center space-x-2"
            >
              <Square className="w-4 h-4" />
              <span>Padding</span>
            </Label>
            <Input
              id="padding"
              type="number"
              placeholder="Enter padding value"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="device-mockup"
              className="text-sm font-medium flex items-center space-x-2"
            >
              <Smartphone className="w-4 h-4" />
              <span>Device Mockup</span>
            </Label>
            <Combobox />
          </div>
        </div>

        <Separator />

        <Button className="w-full">Apply Settings</Button>
      </div>
    </div>
  );
}
