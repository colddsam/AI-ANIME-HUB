"use client"

import { type ReactNode, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface ScrollZoomProps {
  children: ReactNode
  className?: string
  scale?: [number, number]
}

export default function ScrollZoom({ children, className, scale = [0.9, 1] }: ScrollZoomProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], scale)

  return (
    <motion.div ref={ref} style={{ scale: scaleProgress }} className={cn(className)}>
      {children}
    </motion.div>
  )
}
