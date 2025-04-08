"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#2a2642]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center">
            <motion.div
              className="mb-8 text-4xl font-bold text-[#fdeff0]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              AI<span className="text-[#ff5a7e]">Anime</span>Hub
            </motion.div>

            <motion.div
              className="relative h-2 w-64 overflow-hidden rounded-full bg-[#393459]"
              initial={{ width: 0 }}
              animate={{ width: "16rem" }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="absolute h-full bg-[#ff5a7e]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </motion.div>

            <motion.p
              className="mt-4 text-[#fdeff0]/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Loading your anime experience...
            </motion.p>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#ff5a7e]/10 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#393459]/20 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
