import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata = {
  title: "Shop AI Anime Content",
  description: "Purchase high-quality AI-generated anime wallpapers, videos, and music",
}

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#393459] to-[#2a2642] py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-[#fdeff0] mb-2 text-center">Shop</h1>
        <p className="text-[#fdeff0]/70 text-center mb-12 max-w-2xl mx-auto">
          Browse and purchase our premium AI-generated anime content
        </p>

        <Suspense fallback={<CategorySkeletons />}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {shopCategories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="group relative h-80 overflow-hidden rounded-lg transition-transform hover:scale-[1.02]"
              >
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#393459]/90 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-[#fdeff0]/80 mb-4">{category.description}</p>
                    <Button className="bg-[#ff5a7e] hover:bg-[#ff5a7e]/80 text-white">
                      Browse {category.title} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Suspense>

        <div className="bg-[#2a2642]/50 rounded-xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-[#fdeff0] mb-4">Bundle & Save</h2>
              <p className="text-[#fdeff0]/80 mb-6">
                Get more for less with our curated content bundles. Perfect for creators and anime enthusiasts.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-[#fdeff0]/80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ff5a7e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Save up to 40% compared to individual purchases
                </li>
                <li className="flex items-center text-[#fdeff0]/80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ff5a7e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Curated collections with matching themes
                </li>
                <li className="flex items-center text-[#fdeff0]/80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ff5a7e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Exclusive bundle-only content
                </li>
              </ul>
              <Button className="bg-[#ff5a7e] hover:bg-[#ff5a7e]/80 text-white">View All Bundles</Button>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Content Bundle" fill className="object-cover" />
              <div className="absolute top-4 right-4 bg-[#ff5a7e] text-white px-3 py-1 rounded-full text-sm font-bold">
                Save 40%
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-[#fdeff0] mb-4">Looking for something specific?</h2>
          <p className="text-[#fdeff0]/80 mb-6 max-w-2xl mx-auto">
            We can create custom AI anime content tailored to your specific needs and preferences.
          </p>
          <Button className="bg-[#393459] hover:bg-[#393459]/80 text-white border border-[#fdeff0]/20">
            Request Custom Content
          </Button>
        </div>
      </div>
    </main>
  )
}

function CategorySkeletons() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {Array(3)
        .fill(0)
        .map((_, i) => (
          <Skeleton key={i} className="h-80 w-full rounded-lg" />
        ))}
    </div>
  )
}

const shopCategories = [
  {
    title: "Wallpapers",
    description: "High-quality AI-generated anime wallpapers for your devices",
    image: "/placeholder.svg?height=400&width=600",
    href: "/shop/wallpapers",
  },
  {
    title: "Video Loops",
    description: "Mesmerizing anime video loops for your projects and backgrounds",
    image: "/placeholder.svg?height=400&width=600",
    href: "/shop/videos",
  },
  {
    title: "Music",
    description: "AI-composed anime-inspired lofi and soundtrack music",
    image: "/placeholder.svg?height=400&width=600",
    href: "/shop/music",
  },
]

