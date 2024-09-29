"use client"

import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Combobox from '../components/combobox'
import { Settings, Palette, Smartphone, Square } from 'lucide-react'

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
            <Combobox />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="padding" className="text-sm font-medium flex items-center space-x-2">
              <Square className="w-4 h-4" />
              <span>Padding</span>
            </Label>
            <Input id="padding" type="number" placeholder="Enter padding value" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="device-mockup" className="text-sm font-medium flex items-center space-x-2">
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
  )
}