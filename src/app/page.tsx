"use client";

import Scroll from "@/components/scroll";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import ShimmerButton from "@/components/ui/shimmer-button";
import Link from "next/link";
export default function HomePage() {
  return (
    <div className="h-max bg-zinc-900 relative">
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
          className="relative flex flex-col h-screen"
        >
          {/* Header section */}
          <header className="w-full bg-transparent py-6">
            <nav className="container mx-auto flex justify-between items-center px-4">
              <h1 className="text-3xl font-bold text-gray-50">mockly</h1>{" "}
              {/* Change text color to light */}
              <Link href="/editor">
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Get Started
                </span>
              </ShimmerButton>
              </Link>
            </nav>
          </header>

          {/* Main content with scroll */}
          <main className="container mx-auto flex-grow flex  px-4 ">
            <section className="text-center">
              <motion.div
                className="text-5xl font-bold text-gray-50 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <Scroll />
              </motion.div>
            </section>
          </main>

          {/* Footer section */}
          <footer className="w-full bg-transparent py-6 ">
            <div className="container mx-auto text-center text-gray-400">
              {" "}
              {/* Change footer text color */}
              <p>&copy; 2024 mockly. All rights reserved.</p>
            </div>
          </footer>
        </motion.div>
      </AuroraBackground>
    </div>
  );
}
