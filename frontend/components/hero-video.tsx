"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8
    }
  }, [])

  return (
    <motion.div
      className="absolute inset-0 w-full h-full"
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <video ref={videoRef} autoPlay muted loop playsInline className="w-full h-full object-cover">
        <source src="/placeholder.svg?height=1080&width=1920" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  )
}
