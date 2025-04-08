"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart, Share2 } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function WallpaperGrid() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {wallpapers.map((wallpaper, index) => (
        <motion.div
          key={wallpaper.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group rounded-lg overflow-hidden bg-[#2a2642] shadow-xl border border-[#fdeff0]/10"
          onMouseEnter={() => setHoveredItem(index)}
          onMouseLeave={() => setHoveredItem(null)}
          whileHover={{ y: -5 }}
        >
          <Link href={`/product/${wallpaper.id}`}>
            <div className="relative h-64 w-full">
              <Image
                src={wallpaper.image || "/placeholder.svg"}
                alt={wallpaper.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {wallpaper.isNew && <Badge className="absolute top-4 left-4 bg-[#ff5a7e] hover:bg-[#ff5a7e]">New</Badge>}
              {wallpaper.isTrending && (
                <Badge className="absolute top-4 right-4 bg-[#393459] hover:bg-[#393459]">Trending</Badge>
              )}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-[#393459]/90 to-transparent flex items-end p-4 transition-opacity duration-300 ${
                  hoveredItem === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <div className="w-full">
                  <div className="flex justify-between items-center w-full">
                    <h3 className="text-lg font-bold text-white">{wallpaper.title}</h3>
                    <span className="text-[#ff5a7e] font-bold">${wallpaper.price.toFixed(2)}</span>
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
            <Link href={`/product/${wallpaper.id}`}>
              <h3 className="font-medium text-[#fdeff0] hover:text-[#ff5a7e] transition-colors">{wallpaper.title}</h3>
            </Link>
            <div className="flex justify-between items-center mt-2">
              <span className="text-[#fdeff0]/70 text-sm">{wallpaper.resolution}</span>
              <span className="text-[#ff5a7e] font-bold">${wallpaper.price.toFixed(2)}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

const wallpapers = [
  {
    id: 1,
    title: "Neon City Dreams",
    image: "/placeholder.svg?height=400&width=600",
    price: 4.99,
    resolution: "4K (3840x2160)",
    isNew: true,
    isTrending: false,
  },
  {
    id: 2,
    title: "Cherry Blossom Warrior",
    image: "/placeholder.svg?height=400&width=600",
    price: 3.99,
    resolution: "4K (3840x2160)",
    isNew: false,
    isTrending: true,
  },
  {
    id: 3,
    title: "Cosmic Mecha Battle",
    image: "/placeholder.svg?height=400&width=600",
    price: 5.99,
    resolution: "4K (3840x2160)",
    isNew: false,
    isTrending: false,
  },
  {
    id: 4,
    title: "Moonlit Samurai",
    image: "/placeholder.svg?height=400&width=600",
    price: 4.49,
    resolution: "4K (3840x2160)",
    isNew: false,
    isTrending: false,
  },
  {
    id: 5,
    title: "Futuristic Academy",
    image: "/placeholder.svg?height=400&width=600",
    price: 4.99,
    resolution: "4K (3840x2160)",
    isNew: true,
    isTrending: false,
  },
  {
    id: 6,
    title: "Magical Forest Spirits",
    image: "/placeholder.svg?height=400&width=600",
    price: 3.99,
    resolution: "4K (3840x2160)",
    isNew: false,
    isTrending: true,
  },
  {
    id: 7,
    title: "Cyberpunk Alleyway",
    image: "/placeholder.svg?height=400&width=600",
    price: 5.49,
    resolution: "4K (3840x2160)",
    isNew: false,
    isTrending: false,
  },
  {
    id: 8,
    title: "Sakura Rain",
    image: "/placeholder.svg?height=400&width=600",
    price: 4.29,
    resolution: "4K (3840x2160)",
    isNew: false,
    isTrending: false,
  },
  {
    id: 9,
    title: "Neon Ronin",
    image: "/placeholder.svg?height=400&width=600",
    price: 5.99,
    resolution: "4K (3840x2160)",
    isNew: true,
    isTrending: true,
  },
]
