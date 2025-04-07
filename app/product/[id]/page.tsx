import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Heart, Share2, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RelatedProducts from "@/components/related-products"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  // In a real app, you would fetch the product data based on the ID
  const product = {
    id: params.id,
    title: "Neon City Dreams",
    type: "wallpaper",
    price: 4.99,
    description:
      "A stunning AI-generated anime wallpaper featuring a futuristic neon cityscape with anime characters. Perfect for desktop and mobile backgrounds.",
    resolution: "4K (3840x2160)",
    format: "JPG, PNG",
    rating: 4.8,
    reviews: 24,
    isNew: true,
    isTrending: true,
    image: "/placeholder.svg?height=800&width=1200",
    creator: "AI Studio Team",
    dateAdded: "March 28, 2025",
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#393459] to-[#2a2642] py-16 px-4">
      <div className="container mx-auto">
        <Link href="/shop" className="inline-flex items-center text-[#fdeff0]/80 hover:text-[#ff5a7e] mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="relative rounded-lg overflow-hidden bg-[#2a2642] shadow-xl">
            <div className="relative aspect-[4/3] w-full">
              <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
              {product.isNew && <Badge className="absolute top-4 left-4 bg-[#ff5a7e] hover:bg-[#ff5a7e]">New</Badge>}
              {product.isTrending && (
                <Badge className="absolute top-4 right-4 bg-[#393459] hover:bg-[#393459]">Trending</Badge>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-[#fdeff0] mb-2">{product.title}</h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-4">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 opacity-50" />
                <span className="ml-2 text-[#fdeff0]/80">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              <span className="text-[#fdeff0]/60">By {product.creator}</span>
            </div>

            <div className="text-2xl font-bold text-[#ff5a7e] mb-6">${product.price}</div>

            <p className="text-[#fdeff0]/80 mb-6">{product.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#393459]/50 p-4 rounded-lg">
                <div className="text-sm text-[#fdeff0]/60 mb-1">Resolution</div>
                <div className="text-[#fdeff0]">{product.resolution}</div>
              </div>
              <div className="bg-[#393459]/50 p-4 rounded-lg">
                <div className="text-sm text-[#fdeff0]/60 mb-1">Format</div>
                <div className="text-[#fdeff0]">{product.format}</div>
              </div>
              <div className="bg-[#393459]/50 p-4 rounded-lg">
                <div className="text-sm text-[#fdeff0]/60 mb-1">Type</div>
                <div className="text-[#fdeff0] capitalize">{product.type}</div>
              </div>
              <div className="bg-[#393459]/50 p-4 rounded-lg">
                <div className="text-sm text-[#fdeff0]/60 mb-1">Date Added</div>
                <div className="text-[#fdeff0]">{product.dateAdded}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-[#ff5a7e] hover:bg-[#ff5a7e]/80 text-white flex-1 py-6">Add to Cart</Button>
              <Button
                variant="outline"
                className="border-[#fdeff0]/20 text-[#fdeff0] hover:bg-[#fdeff0]/10 flex-1 py-6"
              >
                Buy Now
              </Button>
            </div>

            <div className="flex gap-4">
              <Button variant="ghost" className="text-[#fdeff0]/80 hover:text-[#ff5a7e]">
                <Heart className="h-5 w-5 mr-2" /> Add to Wishlist
              </Button>
              <Button variant="ghost" className="text-[#fdeff0]/80 hover:text-[#ff5a7e]">
                <Share2 className="h-5 w-5 mr-2" /> Share
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="description" className="mb-16">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="license">License</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="bg-[#2a2642]/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#fdeff0] mb-4">Product Description</h3>
            <p className="text-[#fdeff0]/80 mb-4">
              "Neon City Dreams" is a stunning AI-generated anime wallpaper that captures the essence of a futuristic
              cyberpunk world. The artwork features a sprawling neon-lit cityscape with towering skyscrapers,
              holographic advertisements, and anime characters navigating through the vibrant streets.
            </p>
            <p className="text-[#fdeff0]/80 mb-4">
              This high-resolution wallpaper is perfect for desktop and mobile backgrounds, bringing a touch of anime
              aesthetic to your digital devices. The 4K resolution ensures crisp, clear details even on large displays.
            </p>
            <h4 className="text-lg font-semibold text-[#fdeff0] mb-2 mt-6">Features:</h4>
            <ul className="list-disc pl-5 text-[#fdeff0]/80 space-y-2">
              <li>High-quality 4K resolution (3840x2160)</li>
              <li>Available in JPG and PNG formats</li>
              <li>Vibrant neon colors and detailed anime art style</li>
              <li>Perfect for desktop and mobile backgrounds</li>
              <li>AI-generated with professional artistic refinement</li>
            </ul>
          </TabsContent>

          <TabsContent value="reviews" className="bg-[#2a2642]/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#fdeff0] mb-4">Customer Reviews</h3>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border-b border-[#fdeff0]/10 pb-6 last:border-0">
                  <div className="flex justify-between mb-2">
                    <div className="font-medium text-[#fdeff0]">Anime Fan {i}</div>
                    <div className="text-sm text-[#fdeff0]/60">March {10 + i}, 2025</div>
                  </div>
                  <div className="flex items-center mb-2">
                    {Array(5)
                      .fill(0)
                      .map((_, j) => (
                        <Star
                          key={j}
                          className={`h-4 w-4 ${j < 5 - (i % 2) ? "text-yellow-400 fill-yellow-400" : "text-[#fdeff0]/20"}`}
                        />
                      ))}
                  </div>
                  <p className="text-[#fdeff0]/80">
                    {i === 1
                      ? "Absolutely stunning wallpaper! The colors are vibrant and it looks amazing on my ultrawide monitor. Definitely worth the price."
                      : i === 2
                        ? "Great quality and the resolution is perfect. I love the cyberpunk aesthetic and anime style. Would buy from this creator again."
                        : "The detail in this wallpaper is incredible. I'm using it on both my desktop and phone. The download was instant and the quality is top-notch."}
                  </p>
                </div>
              ))}
            </div>
            <Button variant="outline" className="mt-4 border-[#fdeff0]/20 text-[#fdeff0] hover:bg-[#fdeff0]/10">
              View All Reviews
            </Button>
          </TabsContent>

          <TabsContent value="license" className="bg-[#2a2642]/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#fdeff0] mb-4">License Information</h3>
            <p className="text-[#fdeff0]/80 mb-4">
              When you purchase this digital product, you are granted a non-exclusive, non-transferable license to use
              the content under the following terms:
            </p>
            <h4 className="text-lg font-semibold text-[#fdeff0] mb-2 mt-6">Permitted Uses:</h4>
            <ul className="list-disc pl-5 text-[#fdeff0]/80 space-y-2 mb-6">
              <li>Personal use on your own devices (computers, phones, tablets)</li>
              <li>Use as a background in personal social media profiles</li>
              <li>Use as a background in personal video calls or streams</li>
            </ul>
            <h4 className="text-lg font-semibold text-[#fdeff0] mb-2">Prohibited Uses:</h4>
            <ul className="list-disc pl-5 text-[#fdeff0]/80 space-y-2">
              <li>Redistribution or resale of the original files</li>
              <li>Use in commercial products for resale</li>
              <li>Claiming the artwork as your own creation</li>
              <li>Modifying and redistributing the content</li>
            </ul>
            <p className="text-[#fdeff0]/80 mt-6">
              For commercial licensing options or extended usage rights, please contact our licensing team.
            </p>
          </TabsContent>
        </Tabs>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#fdeff0] mb-8 text-center">You May Also Like</h2>
          <RelatedProducts />
        </div>
      </div>
    </main>
  )
}

