"use client"

import { useScroll, motion } from "framer-motion"

interface ScrollProgressProps {
  color?: string
  height?: number
  zIndex?: number
}

export default function ScrollProgress({ color = "#ff5a7e", height = 4, zIndex = 100 }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0"
      style={{
        height,
        backgroundColor: color,
        scaleX: scrollYProgress,
        transformOrigin: "0%",
        zIndex,
      }}
    />
  )
}
