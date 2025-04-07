"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, ShoppingCart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function FeaturedContent() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  return (
    <Tabs defaultValue="wallpapers" className="w-full">
      <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
        <TabsTrigger value="wallpapers">Wallpapers</TabsTrigger>
        <TabsTrigger value="videos">Videos</TabsTrigger>
        <TabsTrigger value="songs">Songs</TabsTrigger>
      </TabsList>

      <TabsContent value="wallpapers" className="mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredWallpapers.map((item, index) => (
            <div
              key={item.id}
              className="relative group rounded-lg overflow-hidden bg-[#2a2642] shadow-xl"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {item.isNew && <Badge className="absolute top-2 left-2 bg-[#ff5a7e] hover:bg-[#ff5a7e]">New</Badge>}
                {item.isTrending && (
                  <Badge className="absolute top-2 left-2 bg-[#393459] hover:bg-[#393459]">Trending</Badge>
                )}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#393459]/90 to-transparent flex items-end p-4 transition-opacity duration-300 ${
                    hoveredItem === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <div className="w-full">
                    <div className="flex justify-between items-center w-full">
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                      <span className="text-[#ff5a7e] font-bold">${item.price}</span>
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
              <div className="p-4">
                <h3 className="font-medium text-[#fdeff0]">{item.title}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[#fdeff0]/70 text-sm">{item.resolution}</span>
                  <span className="text-[#ff5a7e] font-bold">${item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="videos" className="mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredVideos.map((item, index) => (
            <div
              key={item.id}
              className="relative group rounded-lg overflow-hidden bg-[#2a2642] shadow-xl"
              onMouseEnter={() => setHoveredItem(index + 100)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={item.thumbnail || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-16 w-16 rounded-full bg-[#393459]/50 hover:bg-[#393459]/70 text-white"
                  >
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
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </Button>
                </div>
                {item.isNew && <Badge className="absolute top-2 left-2 bg-[#ff5a7e] hover:bg-[#ff5a7e]">New</Badge>}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#393459]/90 to-transparent flex items-end p-4 transition-opacity duration-300 ${
                    hoveredItem === index + 100 ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <div className="w-full">
                    <div className="flex justify-between items-center w-full">
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                      <span className="text-[#ff5a7e] font-bold">${item.price}</span>
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
              <div className="p-4">
                <h3 className="font-medium text-[#fdeff0]">{item.title}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[#fdeff0]/70 text-sm">{item.duration}</span>
                  <span className="text-[#ff5a7e] font-bold">${item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="songs" className="mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredSongs.map((item, index) => (
            <div
              key={item.id}
              className="relative group rounded-lg overflow-hidden bg-[#2a2642] shadow-xl"
              onMouseEnter={() => setHoveredItem(index + 200)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={item.cover || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-16 w-16 rounded-full bg-[#393459]/50 hover:bg-[#393459]/70 text-white"
                  >
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
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </Button>
                </div>
                {item.isNew && <Badge className="absolute top-2 left-2 bg-[#ff5a7e] hover:bg-[#ff5a7e]">New</Badge>}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#393459]/90 to-transparent flex items-end p-4 transition-opacity duration-300 ${
                    hoveredItem === index + 200 ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <div className="w-full">
                    <div className="flex justify-between items-center w-full">
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                      <span className="text-[#ff5a7e] font-bold">${item.price}</span>
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
              <div className="p-4">
                <h3 className="font-medium text-[#fdeff0]">{item.title}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[#fdeff0]/70 text-sm">{item.duration}</span>
                  <span className="text-[#ff5a7e] font-bold">${item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}

const featuredWallpapers = [
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
]

const featuredVideos = [
  {
    id: 1,
    title: "Sakura Petals Loop",
    thumbnail: "/placeholder.svg?height=400&width=600",
    price: 9.99,
    duration: "0:15 Loop",
    isNew: true,
  },
  {
    id: 2,
    title: "Cyberpunk Street Scene",
    thumbnail: "/placeholder.svg?height=400&width=600",
    price: 12.99,
    duration: "0:30 Loop",
    isNew: false,
  },
  {
    id: 3,
    title: "Magical Forest Animation",
    thumbnail: "/placeholder.svg?height=400&width=600",
    price: 14.99,
    duration: "0:20 Loop",
    isNew: false,
  },
]

const featuredSongs = [
  {
    id: 1,
    title: "Midnight Sakura Lofi",
    cover: "/placeholder.svg?height=400&width=600",
    price: 7.99,
    duration: "3:45",
    isNew: true,
  },
  {
    id: 2,
    title: "Rainy Tokyo Beats",
    cover: "/placeholder.svg?height=400&width=600",
    price: 6.99,
    duration: "4:12",
    isNew: false,
  },
  {
    id: 3,
    title: "Neon Dreams Synthwave",
    cover: "/placeholder.svg?height=400&width=600",
    price: 8.99,
    duration: "3:28",
    isNew: false,
  },
]

