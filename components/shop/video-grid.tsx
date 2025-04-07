"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Play, ShoppingCart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function VideoGrid() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video, index) => (
        <div
          key={video.id}
          className="relative group rounded-lg overflow-hidden bg-[#2a2642] shadow-xl border border-[#fdeff0]/10"
          onMouseEnter={() => setHoveredItem(index)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link href={`/product/${video.id}`}>
            <div className="relative h-64 w-full">
              <Image
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {video.isNew && <Badge className="absolute top-4 left-4 bg-[#ff5a7e] hover:bg-[#ff5a7e]">New</Badge>}

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-16 w-16 rounded-full bg-[#393459]/50 hover:bg-[#393459]/70 text-white"
                >
                  <Play className="h-8 w-8" />
                </Button>
              </div>

              <div
                className={`absolute inset-0 bg-gradient-to-t from-[#393459]/90 to-transparent flex items-end p-4 transition-opacity duration-300 ${
                  hoveredItem === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <div className="w-full">
                  <div className="flex justify-between items-center w-full">
                    <h3 className="text-lg font-bold text-white">{video.title}</h3>
                    <span className="text-[#ff5a7e] font-bold">${video.price.toFixed(2)}</span>
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
            <Link href={`/product/${video.id}`}>
              <h3 className="font-medium text-[#fdeff0] hover:text-[#ff5a7e] transition-colors">{video.title}</h3>
            </Link>
            <div className="flex justify-between items-center mt-2">
              <span className="text-[#fdeff0]/70 text-sm">{video.duration}</span>
              <span className="text-[#ff5a7e] font-bold">${video.price.toFixed(2)}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const videos = [
  {
    id: 101,
    title: "Sakura Petals Loop",
    thumbnail: "/placeholder.svg?height=400&width=600",
    price: 9.99,
    duration: "0:15 Loop",
    isNew: true,
  },
  {
    id: 102,
    title: "Cyberpunk Street Scene",
    thumbnail: "/placeholder.svg?height=400&width=600",
    price: 12.99,
    duration: "0:30 Loop",
    isNew: false,
  },
  {
    id: 103,
    title: "Magical Forest Animation",
    thumbnail: "/placeholder.svg?height=400&width=600",
    price: 14.99,
    duration: "0:20 Loop",
    isNew: false,
  },
  {
    id: 104,
    title: "Neon City Nightlife",
    thumbnail: "/placeholder.svg?height=400&width=600",
    price: 11.99,
    duration: "0:25 Loop",
    isNew: true,
  },
  {
    id: 105,
    title: "Rainy Tokyo Streets",
    thumbnail: "/placeholder.svg?height=400&width=600",
    price: 9.99,
    duration: "0:15 Loop",
    isNew: false,
  },
  {
    id: 106,
    title: "Futuristic Mecha Battle",
    thumbnail: "/placeholder.svg?height=400&width=600",
    price: 15.99,
    duration: "0:45 Loop",
    isNew: true,
  },
  {
    id: 107,
    title: "Sunset Beach Waves",
    thumbnail: "/placeholder.svg?height=400&width=600",
    price: 8.99,
    duration: "0:20 Loop",
    isNew: false,
  },
  {
    id: 108,
    title: "Starry Night Sky",
    thumbnail: "/placeholder.svg?height=400&width=600",
    price: 7.99,
    duration: "0:30 Loop",
    isNew: false,
  },
  {
    id: 109,
    title: "Samurai Duel",
    thumbnail: "/placeholder.svg?height=400&width=600",
    price: 13.99,
    duration: "0:35 Loop",
    isNew: true,
  },
]

