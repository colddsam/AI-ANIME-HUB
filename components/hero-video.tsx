"use client"

import { useEffect, useRef } from "react"

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8
    }
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full">
      <video ref={videoRef} autoPlay muted loop playsInline className="w-full h-full object-cover">
        <source src="/placeholder.svg?height=1080&width=1920" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

