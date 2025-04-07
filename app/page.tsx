import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play, ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import FeaturedContent from "@/components/featured-content"
import HeroVideo from "@/components/hero-video"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <HeroVideo />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#393459]/90 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Where AI Meets <span className="text-[#ff5a7e]">Anime Dreams</span>
          </h1>
          <p className="text-lg md:text-xl text-[#fdeff0] mb-8 max-w-2xl">
            Discover stunning AI-generated anime wallpapers, videos, and music created just for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#ff5a7e] hover:bg-[#ff5a7e]/80 text-white px-8 py-6 rounded-full">
              Explore Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-[#fdeff0] text-[#fdeff0] hover:bg-[#fdeff0]/10 px-8 py-6 rounded-full"
            >
              Shop Wallpapers <ShoppingCart className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-[#fdeff0] text-[#fdeff0] hover:bg-[#fdeff0]/10 px-8 py-6 rounded-full"
            >
              Listen to AI Songs <Play className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#393459] to-[#2a2642]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#fdeff0] mb-8 text-center">Featured Content</h2>
          <FeaturedContent />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-[#2a2642]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#fdeff0] mb-12 text-center">Explore Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="group relative h-64 overflow-hidden rounded-lg transition-transform hover:scale-[1.02]"
              >
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#393459]/90 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-[#fdeff0]/80">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#393459] to-[#ff5a7e]/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#fdeff0] mb-4">Join Our Creative Community</h2>
          <p className="text-lg text-[#fdeff0]/80 mb-8 max-w-2xl mx-auto">
            Get exclusive access to premium content, early releases, and special discounts
          </p>
          <Button className="bg-[#ff5a7e] hover:bg-[#ff5a7e]/80 text-white px-8 py-6 rounded-full">
            Sign Up Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <div className="mt-8 flex justify-center gap-4">
            <Button variant="outline" size="icon" className="rounded-full border-[#fdeff0]/30 text-[#fdeff0]">
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
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-[#fdeff0]/30 text-[#fdeff0]">
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
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
              <span className="sr-only">Instagram</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-[#fdeff0]/30 text-[#fdeff0]">
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
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-[#fdeff0]/30 text-[#fdeff0]">
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
                className="h-5 w-5"
              >
                <path d="M15 11v4.74a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"></path>
                <path d="M18 2h-2v4h4V4a2 2 0 0 0-2-2z"></path>
                <path d="M18 14v-3"></path>
                <path d="M18 19v-2"></path>
              </svg>
              <span className="sr-only">TikTok</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-[#ff5a7e] text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 animate-pulse">
          <Heart className="h-5 w-5" />
          <span>Follow for more anime drops 💖</span>
        </div>
      </div>
    </main>
  )
}

const categories = [
  {
    title: "Wallpapers",
    description: "High-quality AI-generated anime wallpapers",
    image: "/placeholder.svg?height=400&width=600",
    href: "/shop/wallpapers",
  },
  {
    title: "Anime Loops",
    description: "Mesmerizing video loops for your projects",
    image: "/placeholder.svg?height=400&width=600",
    href: "/shop/videos",
  },
  {
    title: "Lofi Music",
    description: "AI-composed anime-inspired music tracks",
    image: "/placeholder.svg?height=400&width=600",
    href: "/shop/music",
  },
]

