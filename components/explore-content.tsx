"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, ShoppingCart, Share2, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type ContentType = "all" | "image" | "video" | "song"
type SortType = "newest" | "trending" | "popular"

export default function ExploreContent() {
  const [contentType, setContentType] = useState<ContentType>("all")
  const [sortType, setSortType] = useState<SortType>("newest")
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  // Combine and filter content based on selected filters
  const allContent = [...exploreImages, ...exploreVideos, ...exploreSongs]
  const filteredContent = contentType === "all" ? allContent : allContent.filter((item) => item.type === contentType)

  // Sort content based on selected sort type
  const sortedContent = [...filteredContent].sort((a, b) => {
    if (sortType === "newest") return b.dateAdded.getTime() - a.dateAdded.getTime()
    if (sortType === "trending") return b.trending - a.trending
    return b.popularity - a.popularity
  })

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={contentType === "all" ? "default" : "outline"}
            className={
              contentType === "all" ? "bg-[#ff5a7e] hover:bg-[#ff5a7e]/80" : "border-[#fdeff0]/30 text-[#fdeff0]"
            }
            onClick={() => setContentType("all")}
          >
            All Content
          </Button>
          <Button
            variant={contentType === "image" ? "default" : "outline"}
            className={
              contentType === "image" ? "bg-[#ff5a7e] hover:bg-[#ff5a7e]/80" : "border-[#fdeff0]/30 text-[#fdeff0]"
            }
            onClick={() => setContentType("image")}
          >
            Images
          </Button>
          <Button
            variant={contentType === "video" ? "default" : "outline"}
            className={
              contentType === "video" ? "bg-[#ff5a7e] hover:bg-[#ff5a7e]/80" : "border-[#fdeff0]/30 text-[#fdeff0]"
            }
            onClick={() => setContentType("video")}
          >
            Videos
          </Button>
          <Button
            variant={contentType === "song" ? "default" : "outline"}
            className={
              contentType === "song" ? "bg-[#ff5a7e] hover:bg-[#ff5a7e]/80" : "border-[#fdeff0]/30 text-[#fdeff0]"
            }
            onClick={() => setContentType("song")}
          >
            Songs
          </Button>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="border-[#fdeff0]/30 text-[#fdeff0]">
              <Filter className="h-4 w-4 mr-2" /> Sort By
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Sort Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={sortType} onValueChange={(value) => setSortType(value as SortType)}>
              <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="trending">Trending</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="popular">Popular</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedContent.map((item, index) => (
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
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-12 w-12 rounded-full bg-[#393459]/50 hover:bg-[#393459]/70 text-white"
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
                      className="h-6 w-6"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </Button>
                </div>
              )}
              {item.type === "song" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-12 w-12 rounded-full bg-[#393459]/50 hover:bg-[#393459]/70 text-white"
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
                      className="h-6 w-6"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </Button>
                </div>
              )}
              {item.isNew && <Badge className="absolute top-2 left-2 bg-[#ff5a7e] hover:bg-[#ff5a7e]">New</Badge>}
              {item.trending > 8 && (
                <Badge className="absolute top-2 right-2 bg-[#393459] hover:bg-[#393459]">Trending</Badge>
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
                <span className="text-[#fdeff0]/70 text-sm">
                  {item.type === "image" && (item as any).resolution}
                  {item.type === "video" && (item as any).duration}
                  {item.type === "song" && (item as any).duration}
                </span>
                <span className="text-[#ff5a7e] font-bold">${item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button className="bg-[#ff5a7e] hover:bg-[#ff5a7e]/80 text-white px-8 py-6 rounded-full">Load More</Button>
      </div>
    </div>
  )
}

// Sample data
const exploreImages = [
  {
    id: 1,
    type: "image",
    title: "Neon City Dreams",
    image: "/placeholder.svg?height=400&width=600",
    price: 4.99,
    resolution: "4K (3840x2160)",
    isNew: true,
    trending: 9,
    popularity: 85,
    dateAdded: new Date("2025-03-28"),
  },
  {
    id: 2,
    type: "image",
    title: "Cherry Blossom Warrior",
    image: "/placeholder.svg?height=400&width=600",
    price: 3.99,
    resolution: "4K (3840x2160)",
    isNew: false,
    trending: 10,
    popularity: 92,
    dateAdded: new Date("2025-03-15"),
  },
  {
    id: 3,
    type: "image",
    title: "Cosmic Mecha Battle",
    image: "/placeholder.svg?height=400&width=600",
    price: 5.99,
    resolution: "4K (3840x2160)",
    isNew: false,
    trending: 7,
    popularity: 78,
    dateAdded: new Date("2025-02-20"),
  },
  {
    id: 4,
    type: "image",
    title: "Moonlit Samurai",
    image: "/placeholder.svg?height=400&width=600",
    price: 4.49,
    resolution: "4K (3840x2160)",
    isNew: false,
    trending: 6,
    popularity: 75,
    dateAdded: new Date("2025-01-10"),
  },
]

const exploreVideos = [
  {
    id: 101,
    type: "video",
    title: "Sakura Petals Loop",
    image: "/placeholder.svg?height=400&width=600",
    price: 9.99,
    duration: "0:15 Loop",
    isNew: true,
    trending: 9,
    popularity: 88,
    dateAdded: new Date("2025-04-01"),
  },
  {
    id: 102,
    type: "video",
    title: "Cyberpunk Street Scene",
    image: "/placeholder.svg?height=400&width=600",
    price: 12.99,
    duration: "0:30 Loop",
    isNew: false,
    trending: 8,
    popularity: 82,
    dateAdded: new Date("2025-03-10"),
  },
  {
    id: 103,
    type: "video",
    title: "Magical Forest Animation",
    image: "/placeholder.svg?height=400&width=600",
    price: 14.99,
    duration: "0:20 Loop",
    isNew: false,
    trending: 7,
    popularity: 79,
    dateAdded: new Date("2025-02-15"),
  },
]

const exploreSongs = [
  {
    id: 201,
    type: "song",
    title: "Midnight Sakura Lofi",
    image: "/placeholder.svg?height=400&width=600",
    price: 7.99,
    duration: "3:45",
    isNew: true,
    trending: 10,
    popularity: 95,
    dateAdded: new Date("2025-04-02"),
  },
  {
    id: 202,
    type: "song",
    title: "Rainy Tokyo Beats",
    image: "/placeholder.svg?height=400&width=600",
    price: 6.99,
    duration: "4:12",
    isNew: false,
    trending: 9,
    popularity: 90,
    dateAdded: new Date("2025-03-20"),
  },
]

