"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface StaggerItemProps {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "none"
}

export default function StaggerItem({ children, className, direction = "up" }: StaggerItemProps) {
  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: {},
  }

  const item = {
    hidden: { opacity: 0, ...directionOffset[direction] },
    show: { opacity: 1, x: 0, y: 0, transition: { type: "spring", stiffness: 100 } },
  }

  return (
    <motion.div variants={item} className={cn(className)}>
      {children}
    </motion.div>
  )
}
