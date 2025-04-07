"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function RelatedProducts() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {relatedProducts.map((product, index) => (
        <div
          key={product.id}
          className="relative group rounded-lg overflow-hidden bg-[#2a2642] shadow-xl"
          onMouseEnter={() => setHoveredItem(index)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link href={`/product/${product.id}`}>
            <div className="relative h-48 w-full">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-[#393459]/90 to-transparent flex items-end p-4 transition-opacity duration-300 ${
                  hoveredItem === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <div className="w-full">
                  <div className="flex justify-between items-center w-full">
                    <h3 className="text-lg font-bold text-white">{product.title}</h3>
                    <span className="text-[#ff5a7e] font-bold">${product.price}</span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 text-white"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" className="bg-[#ff5a7e] hover:bg-[#ff5a7e]/80 text-white rounded-full">
                      <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <div className="p-4">
            <Link href={`/product/${product.id}`}>
              <h3 className="font-medium text-[#fdeff0] hover:text-[#ff5a7e] transition-colors">{product.title}</h3>
            </Link>
            <div className="flex justify-between items-center mt-2">
              <span className="text-[#fdeff0]/70 text-sm">{product.type}</span>
              <span className="text-[#ff5a7e] font-bold">${product.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const relatedProducts = [
  {
    id: 2,
    title: "Cherry Blossom Warrior",
    type: "Wallpaper",
    price: 3.99,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Cosmic Mecha Battle",
    type: "Wallpaper",
    price: 5.99,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Moonlit Samurai",
    type: "Wallpaper",
    price: 4.49,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "Futuristic Academy",
    type: "Wallpaper",
    price: 4.99,
    image: "/placeholder.svg?height=400&width=600",
  },
]

