"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Play, ShoppingCart, Share2 } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function MusicGrid() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [playingTrack, setPlayingTrack] = useState<number | null>(null)

  const handlePlayClick = (e: React.MouseEvent, trackId: number) => {
    e.preventDefault()
    e.stopPropagation()
    setPlayingTrack(playingTrack === trackId ? null : trackId)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {musicTracks.map((track, index) => (
        <motion.div
          key={track.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group rounded-lg overflow-hidden bg-[#2a2642] shadow-xl border border-[#fdeff0]/10"
          onMouseEnter={() => setHoveredItem(index)}
          onMouseLeave={() => setHoveredItem(null)}
          whileHover={{ y: -5 }}
        >
          <Link href={`/product/${track.id}`}>
            <div className="relative h-64 w-full">
              <Image
                src={track.cover || "/placeholder.svg"}
                alt={track.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {track.isNew && <Badge className="absolute top-4 left-4 bg-[#ff5a7e] hover:bg-[#ff5a7e]">New</Badge>}

              {/* Play button overlay */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="icon"
                  variant="ghost"
                  className={`h-16 w-16 rounded-full ${
                    playingTrack === track.id
                      ? "bg-[#ff5a7e] hover:bg-[#ff5a7e]/80"
                      : "bg-[#393459]/50 hover:bg-[#393459]/70"
                  } text-white`}
                  onClick={(e) => handlePlayClick(e, track.id)}
                >
                  {playingTrack === track.id ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8"
                    >
                      <rect x="6" y="4" width="4" height="16"></rect>
                      <rect x="14" y="4" width="4" height="16"></rect>
                    </svg>
                  ) : (
                    <Play className="h-8 w-8" />
                  )}
                </Button>
              </motion.div>

              {/* Audio waveform visualization (decorative) */}
              {playingTrack === track.id && (
                <div className="absolute bottom-0 left-0 right-0 h-12 flex items-end justify-center gap-1 px-4 pb-2">
                  {Array(20)
                    .fill(0)
                    .map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-[#ff5a7e]/80 rounded-t-full"
                        initial={{ height: "20%" }}
                        animate={{
                          height: [`${20 + Math.random() * 80}%`, `${20 + Math.random() * 80}%`],
                        }}
                        transition={{
                          duration: 0.5 + Math.random() * 1,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                        }}
                      ></motion.div>
                    ))}
                </div>
              )}

              <div
                className={`absolute inset-0 bg-gradient-to-t from-[#393459]/90 to-transparent flex items-end p-4 transition-opacity duration-300 ${
                  hoveredItem === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <div className="w-full">
                  <div className="flex justify-between items-center w-full">
                    <h3 className="text-lg font-bold text-white">{track.title}</h3>
                    <span className="text-[#ff5a7e] font-bold">${track.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex space-x-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 text-white"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 text-white"
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button size="sm" className="bg-[#ff5a7e] hover:bg-[#ff5a7e]/80 text-white rounded-full">
                      <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <div className="p-4">
            <Link href={`/product/${track.id}`}>
              <h3 className="font-medium text-[#fdeff0] hover:text-[#ff5a7e] transition-colors">{track.title}</h3>
            </Link>
            <div className="flex justify-between items-center mt-2">
              <span className="text-[#fdeff0]/70 text-sm">{track.duration}</span>
              <span className="text-[#ff5a7e] font-bold">${track.price.toFixed(2)}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

const musicTracks = [
  {
    id: 201,
    title: "Midnight Sakura Lofi",
    cover: "/placeholder.svg?height=400&width=600",
    price: 7.99,
    duration: "3:45",
    isNew: true,
  },
  {
    id: 202,
    title: "Rainy Tokyo Beats",
    cover: "/placeholder.svg?height=400&width=600",
    price: 6.99,
    duration: "4:12",
    isNew: false,
  },
  {
    id: 203,
    title: "Neon Dreams Synthwave",
    cover: "/placeholder.svg?height=400&width=600",
    price: 8.99,
    duration: "3:28",
    isNew: false,
  },
  {
    id: 204,
    title: "Cherry Blossom Melodies",
    cover: "/placeholder.svg?height=400&width=600",
    price: 5.99,
    duration: "2:55",
    isNew: true,
  },
  {
    id: 205,
    title: "Cyberpunk Nightlife",
    cover: "/placeholder.svg?height=400&width=600",
    price: 9.99,
    duration: "5:17",
    isNew: false,
  },
  {
    id: 206,
    title: "Samurai's Journey",
    cover: "/placeholder.svg?height=400&width=600",
    price: 7.49,
    duration: "4:32",
    isNew: true,
  },
  {
    id: 207,
    title: "Futuristic Academy Vibes",
    cover: "/placeholder.svg?height=400&width=600",
    price: 6.49,
    duration: "3:15",
    isNew: false,
  },
  {
    id: 208,
    title: "Magical Forest Ambience",
    cover: "/placeholder.svg?height=400&width=600",
    price: 8.49,
    duration: "6:20",
    isNew: false,
  },
  {
    id: 209,
    title: "Cosmic Mecha Battle Theme",
    cover: "/placeholder.svg?height=400&width=600",
    price: 10.99,
    duration: "4:45",
    isNew: true,
  },
]
