"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface HoverCardProps {
  children: ReactNode
  className?: string
  hoverScale?: number
  rotateIntensity?: number
}

export default function HoverCard({ children, className, hoverScale = 1.05, rotateIntensity = 1.5 }: HoverCardProps) {
  return (
    <motion.div
      className={cn("relative cursor-pointer", className)}
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  )
}
