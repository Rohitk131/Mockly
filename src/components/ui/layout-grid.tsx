"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

type Card = {
  id: number;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setSelected(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleClick = (card: Card) => {
    setSelected(selected?.id === card.id ? null : card);
  };

  // Calculate modal dimensions based on screen size
  const getModalDimensions = () => {
    const maxWidth = Math.min(dimensions.width * 0.8, 1200);
    const maxHeight = Math.min(dimensions.height * 0.8, 800);
    return {
      width: maxWidth,
      height: maxHeight,
    };
  };

  return (
    <div ref={containerRef} className="w-full h-full p-4 md:p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card) => (
        <motion.div
          key={card.id}
          className={cn(
            card.className,
            "relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3]"
          )}
          onClick={() => handleClick(card)}
          layoutId={`card-${card.id}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <img
            src={card.thumbnail}
            alt={`Image ${card.id}`}
            className="w-full h-full object-cover transition-all duration-300 rounded-2xl"
          />
        </motion.div>
      ))}
      <AnimatePresence>
        {selected && (
          <motion.div
            layoutId={`card-${selected.id}`}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative bg-white/50 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              style={getModalDimensions()}
            >
              <div className="w-full h-full relative">
                <img
                  src={selected.thumbnail}
                  alt={`Zoomed Image ${selected.id}`}
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
              <motion.button
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                onClick={() => setSelected(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LayoutGrid;