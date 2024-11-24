'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'

interface GitHubButtonProps {
  starCount: number
  onClick?: () => void
}

export default function GitHubButton({ starCount = 11957, onClick }: GitHubButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="flex"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="outline"
        className="flex items-center gap-2 rounded-full border-2 border-primary bg-gradient-to-r from-primary/10 to-secondary/10 text-primary shadow-lg transition-all duration-300 hover:shadow-xl dark:from-primary/20 dark:to-secondary/20 dark:text-primary-foreground"
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.span 
          className="flex items-center gap-2 pl-2"
          animate={{ x: isHovered ? 5 : 0 }}
        >
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <motion.path
              d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
          <span className="text-sm font-semibold">Star on GitHub</span>
        </motion.span>
        <motion.div 
          className="ml-2 flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 dark:bg-primary-foreground/10"
          animate={{ 
            backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'
          }}
        >
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Star className="h-4 w-4 text-yellow-400" />
          </motion.div>
          <motion.span 
            className="text-sm font-bold"
            animate={{ scale: isHovered ? 1.1 : 1 }}
          >
            {starCount.toLocaleString()}
          </motion.span>
        </motion.div>
      </Button>
    </motion.div>
  )
}

