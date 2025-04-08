"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FloatingElementProps {
  children: ReactNode
  className?: string
  duration?: number
  yOffset?: number
  delay?: number
}

export default function FloatingElement({
  children,
  className,
  duration = 4,
  yOffset = 15,
  delay = 0,
}: FloatingElementProps) {
  return (
    <motion.div
      className={cn(className)}
      animate={{ y: [0, -yOffset, 0] }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
