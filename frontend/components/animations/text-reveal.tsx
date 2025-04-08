"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  once?: boolean
  element?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
}

export default function TextReveal({
  text,
  className,
  delay = 0,
  once = true,
  element: Element = "p",
}: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once })

  const words = text.split(" ")

  // Variants for the container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay },
    }),
  }

  // Variants for each word
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={cn("overflow-hidden", className)}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Element className="flex flex-wrap">
        {words.map((word, index) => (
          <motion.span key={index} className="mr-1.5 inline-block" variants={child}>
            {word}
          </motion.span>
        ))}
      </Element>
    </motion.div>
  )
}
