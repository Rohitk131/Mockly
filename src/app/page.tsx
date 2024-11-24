'use client'

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import Scroll from "@/components/scroll";
import PatternBackground from '@/components/PatternBackground';
import { LayoutGridDemo } from "@/components/LayoutGrid";
import Link from 'next/link'
export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <PatternBackground />

      <nav className="relative z-10 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="logo.png" alt="Logo" className="h-10 w-10" />
            <h1 className="text-3xl font-bold text-blue-600 ml-2">mockly</h1>
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

        <motion.div
          className="mt-16 text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold text-blue-600">
            What you can create:
          </h2>
          <h3 className="text-5xl font-bold text-blue-800 leading-tight">
            Explore endless possibilities <br /> with <span className="text-blue-500">mockly</span>!
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="w-full"
        >
          <LayoutGridDemo />
        </motion.div>
      </main>
    </div>
  );
}
