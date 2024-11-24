'use client'

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import Scroll from "@/components/scroll";
import PatternBackground from '@/components/PatternBackground';
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Link from 'next/link'
export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <PatternBackground />

      <nav className="relative z-10  bg-opacity-90 backdrop-filter backdrop-blur-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="logo.png" alt="Logo" className="h-10 w-10" />
            <h1 className="text-3xl font-bold text-blue-500 ml-2">mockly</h1>
          </motion.div>

          <motion.div
            className="md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href='/editor'>
              <Button />
            </Link>
          </motion.div>
        </div>
      </nav>

      <main className="relative z-10 container mx-auto px-4 py-12">
        <Scroll />
        <TextHoverEffect text="MOCKLY" />
      </main>
    </div>
  );
}
