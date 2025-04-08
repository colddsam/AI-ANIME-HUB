"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface StaggerChildrenProps {
  children: ReactNode
  className?: string
  delay?: number
  staggerDelay?: number
  once?: boolean
}

export default function StaggerChildren({
  children,
  className,
  delay = 0,
  staggerDelay = 0.1,
  once = true,
}: StaggerChildrenProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  return (
    <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once }} className={cn(className)}>
      {children}
    </motion.div>
  )
}
