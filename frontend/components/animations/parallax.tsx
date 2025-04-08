"use client"

import { type ReactNode, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface ParallaxProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
}

export default function Parallax({ children, className, speed = 0.5, direction = "up" }: ParallaxProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const getTransformValue = () => {
    switch (direction) {
      case "up":
        return [100 * speed, -100 * speed]
      case "down":
        return [-100 * speed, 100 * speed]
      case "left":
        return [100 * speed, -100 * speed]
      case "right":
        return [-100 * speed, 100 * speed]
      default:
        return [0, 0]
    }
  }

  const transformValue = getTransformValue()

  const yValue = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" || direction === "down" ? transformValue : [0, 0],
  )

  const xValue = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" || direction === "right" ? transformValue : [0, 0],
  )

  return (
    <motion.div ref={ref} style={{ y: yValue, x: xValue }} className={cn(className)}>
      {children}
    </motion.div>
  )
}
