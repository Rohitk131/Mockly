"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Laptop,
  Smartphone,
  Tablet,
  ArrowRight,
  Zap,
  Palette,
} from "lucide-react";

export default function HomePage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-white">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <motion.h1
            className="text-3xl font-bold text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            mockly
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              variant="outline"
              className="text-gray-900 border-gray-300 hover:bg-gray-100"
            >
              Sign In
            </Button>
          </motion.div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-20">
          <motion.h2
            className="text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Create Stunning{" "}
            <span className="text-blue-600">Device Mockups</span> in Seconds
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Elevate your designs with mockly. No design skills needed, just
            drag, drop, and impress.
          </motion.p>
          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="text-gray-900 border-gray-300 hover:bg-gray-100"
            >
              Learn More
            </Button>
          </motion.div>
        </section>

        <section className="mb-20">
          <motion.div
            className="bg-gray-50 rounded-lg p-8 shadow-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Smartphone className="w-40 h-60 text-gray-400" />
                <div className="absolute inset-2 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg" />
              </motion.div>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Laptop className="w-80 h-60 text-gray-400" />
                <div className="absolute inset-2 top-6 bg-gradient-to-br from-green-100 to-green-200 rounded" />
              </motion.div>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Tablet className="w-48 h-60 text-gray-400" />
                <div className="absolute inset-2 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg" />
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section className="mb-20">
          <motion.div
            
            className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 +  0.2 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">
              Why Choose mockly?
            </h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12 mb-4 text-blue-600" />,
                title: "Lightning Fast",
                description: "Create mockups in seconds, not hours",
              },
              {
                icon: <ArrowRight className="w-12 h-12 mb-4 text-blue-600" />,
                title: "Easy to Use",
                description: "Intuitive drag-and-drop interface",
              },
              {
                icon: <Palette className="w-12 h-12 mb-4 text-blue-600" />,
                title: "Customizable",
                description: "Personalize every aspect of your mockup",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
              >
                {feature.icon}
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="text-center bg-gray-50 py-12 rounded-lg">
          <motion.h3
            className="text-3xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            Ready to Elevate Your Designs?
          </motion.h3>
          <motion.div
            className="flex justify-center items-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="max-w-xs bg-white border-gray-300"
            />
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              Get Started
            </Button>
          </motion.div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-6 text-center text-gray-600">
        <p>&copy; 2024 mockly. All rights reserved.</p>
      </footer>
    </div>
  );
}
