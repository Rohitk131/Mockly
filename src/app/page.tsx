"use client";

import Scroll from "@/components/scroll";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import ShimmerButton from "@/components/ui/shimmer-button";
import Link from "next/link";
import HeroParallax from "@/components/heroParallax";
import { LayoutGridDemo } from "@/components/LayoutGrid";

export default function HomePage() {
  return (
    <div className="h-full bg-zinc-900 relative">
      {/* Aurora background wrapper */}
      <AuroraBackground>
        {/* Page content container */}
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col min-h-screen" // Changed to min-h-screen for full height
        >
          {/* Header section */}
          <header className="w-full bg-transparent py-6">
            <nav className="container mx-auto flex justify-between items-center px-4">
              <h1 className="text-3xl font-bold text-gray-50 font-serif">Mockly</h1>
              <Link href="/editor">
                <ShimmerButton className="shadow-2xl">
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none font-serif tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    Get Started
                  </span>
                </ShimmerButton>
              </Link>
            </nav>
          </header>

          {/* Main content with scroll */}
          <main className="container mx-auto flex-grow flex flex-col px-4">
            <section className="text-center mb-16"> {/* Added margin-bottom */}
              <motion.div
                className="text-5xl font-bold text-gray-50 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <Scroll />
              </motion.div>

              {/* Featured section */}
              <motion.div
                className="text-4xl font-bold text-gray-50 mb-6 font-serif "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <p>What you can create:</p>
                <p>Explore endless possibilities with mockly!</p>
              </motion.div>

              {/* Layout Grid Demo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="w-full"
              >
                <LayoutGridDemo />
              </motion.div>
            </section>
          </main>

          {/* Footer section */}
          <footer className="w-full bg-transparent py-6">
            <div className="container mx-auto text-center text-gray-400">
              <p>&copy; 2024 mockly. All rights reserved.</p>
            </div>
          </footer>
        </motion.div>
      </AuroraBackground>
    </div>
  );
}
