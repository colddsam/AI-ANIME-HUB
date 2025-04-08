import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Filter, Music2, Search, ShoppingCart, Sliders } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import MusicGrid from "@/components/shop/music-grid"
import MusicSkeleton from "@/components/shop/music-skeleton"

export const metadata = {
  title: "Anime Music | AI Anime Hub",
  description: "Browse and purchase AI-generated anime-inspired music tracks",
}

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#393459] to-[#2a2642] py-16 px-4">
      <div className="container mx-auto">
        <div className="flex items-center mb-8">
          <Link href="/shop" className="inline-flex items-center text-[#fdeff0]/80 hover:text-[#ff5a7e]">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Shop
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative rounded-xl overflow-hidden mb-12">
          <div className="relative h-[300px] md:h-[400px] w-full">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Anime Music Collection"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#393459]/90 to-transparent flex flex-col justify-center p-8">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-xl">
                AI-Generated <span className="text-[#ff5a7e]">Anime Music</span>
              </h1>
              <p className="text-lg text-[#fdeff0]/90 mb-6 max-w-xl">
                Immersive anime-inspired lofi beats and soundtracks created with advanced AI technology
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#ff5a7e] hover:bg-[#ff5a7e]/80 text-white">
                  <ShoppingCart className="h-4 w-4 mr-2" /> Shop All Tracks
                </Button>
                <Button
                  variant="outline"
                  className="bg-[#393459]/50 border-[#fdeff0]/30 text-[#fdeff0] hover:bg-[#fdeff0]/10"
                >
                  <Music2 className="h-4 w-4 mr-2" /> Listen to Samples
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Filter and Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          {/* Filters Sidebar */}
          <div className="space-y-6">
            <div className="bg-[#2a2642]/80 rounded-xl p-6 shadow-lg border border-[#fdeff0]/10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-[#fdeff0]">Filters</h2>
                <Button variant="ghost" size="sm" className="text-[#fdeff0]/70 hover:text-[#fdeff0]">
                  Reset
                </Button>
              </div>

              <div className="space-y-6">
                {/* Search */}
                <div className="space-y-2">
                  <Label className="text-[#fdeff0]">Search</Label>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[#fdeff0]/50" />
                    <Input
                      type="search"
                      placeholder="Search music..."
                      className="pl-8 bg-[#393459]/30 border-[#fdeff0]/20 text-[#fdeff0]"
                    />
                  </div>
                </div>

                <Separator className="bg-[#fdeff0]/10" />

                {/* Genres */}
                <div className="space-y-2">
                  <Label className="text-[#fdeff0]">Genres</Label>
                  <div className="space-y-2">
                    {musicGenres.map((genre) => (
                      <div key={genre.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`genre-${genre.id}`}
                          className="border-[#fdeff0]/20 data-[state=checked]:bg-[#ff5a7e] data-[state=checked]:border-[#ff5a7e]"
                        />
                        <label
                          htmlFor={`genre-${genre.id}`}
                          className="text-sm text-[#fdeff0]/80 cursor-pointer hover:text-[#fdeff0]"
                        >
                          {genre.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="bg-[#fdeff0]/10" />

                {/* Duration */}
                <div className="space-y-2">
                  <Label className="text-[#fdeff0]">Duration</Label>
                  <div className="space-y-2">
                    {musicDurations.map((duration) => (
                      <div key={duration.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`duration-${duration.id}`}
                          className="border-[#fdeff0]/20 data-[state=checked]:bg-[#ff5a7e] data-[state=checked]:border-[#ff5a7e]"
                        />
                        <label
                          htmlFor={`duration-${duration.id}`}
                          className="text-sm text-[#fdeff0]/80 cursor-pointer hover:text-[#fdeff0]"
                        >
                          {duration.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="bg-[#fdeff0]/10" />

                {/* Price Range */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-[#fdeff0]">Price Range</Label>
                    <span className="text-sm text-[#fdeff0]/80">$0 - $20</span>
                  </div>
                  <Slider defaultValue={[0, 20]} max={20} step={1} className="[&>span]:bg-[#ff5a7e]" />
                </div>

                <Separator className="bg-[#fdeff0]/10" />

                {/* Moods */}
                <div className="space-y-2">
                  <Label className="text-[#fdeff0]">Moods</Label>
                  <div className="flex flex-wrap gap-2">
                    {musicMoods.map((mood) => (
                      <Badge key={mood} className="bg-[#393459]/50 hover:bg-[#393459] text-[#fdeff0] cursor-pointer">
                        {mood}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-[#ff5a7e] hover:bg-[#ff5a7e]/80 text-white mt-4">
                  <Filter className="h-4 w-4 mr-2" /> Apply Filters
                </Button>
              </div>
            </div>

            {/* Featured Collection */}
            <div className="bg-[#2a2642]/80 rounded-xl overflow-hidden shadow-lg border border-[#fdeff0]/10">
              <div className="relative h-40 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Featured Collection"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#393459] to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold text-white">Lofi Study Collection</h3>
                  <p className="text-sm text-[#fdeff0]/80">10 premium tracks</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-[#fdeff0]/80 mb-4">
                  Save 30% when you purchase this curated collection of anime-inspired lofi beats perfect for studying.
                </p>
                <Button className="w-full bg-[#393459] hover:bg-[#393459]/80 text-[#fdeff0] border border-[#fdeff0]/20">
                  View Collection
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            {/* Sorting and View Options */}
            <div className="bg-[#2a2642]/80 rounded-xl p-4 shadow-lg border border-[#fdeff0]/10 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-[#fdeff0]/80 text-sm">150 tracks found</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#fdeff0]/80 text-sm hidden sm:inline">Sort by:</span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="border-[#fdeff0]/20 text-[#fdeff0] hover:bg-[#fdeff0]/10">
                        Newest <Sliders className="h-3.5 w-3.5 ml-2" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-[#2a2642] border-[#fdeff0]/10 text-[#fdeff0]">
                      <DropdownMenuItem className="focus:bg-[#fdeff0]/10 focus:text-[#fdeff0]">Newest</DropdownMenuItem>
                      <DropdownMenuItem className="focus:bg-[#fdeff0]/10 focus:text-[#fdeff0]">
                        Price: Low to High
                      </DropdownMenuItem>
                      <DropdownMenuItem className="focus:bg-[#fdeff0]/10 focus:text-[#fdeff0]">
                        Price: High to Low
                      </DropdownMenuItem>
                      <DropdownMenuItem className="focus:bg-[#fdeff0]/10 focus:text-[#fdeff0]">
                        Most Popular
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <Tabs defaultValue="grid" className="hidden sm:block">
                  <TabsList className="bg-[#393459]/30">
                    <TabsTrigger
                      value="grid"
                      className="data-[state=active]:bg-[#ff5a7e] data-[state=active]:text-white"
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
                        className="h-4 w-4"
                      >
                        <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                        <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                      </svg>
                    </TabsTrigger>
                    <TabsTrigger
                      value="list"
                      className="data-[state=active]:bg-[#ff5a7e] data-[state=active]:text-white"
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
                        className="h-4 w-4"
                      >
                        <line x1="8" x2="21" y1="6" y2="6"></line>
                        <line x1="8" x2="21" y1="12" y2="12"></line>
                        <line x1="8" x2="21" y1="18" y2="18"></line>
                        <line x1="3" x2="3.01" y1="6" y2="6"></line>
                        <line x1="3" x2="3.01" y1="12" y2="12"></line>
                        <line x1="3" x2="3.01" y1="18" y2="18"></line>
                      </svg>
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>

            {/* Music Grid */}
            <Suspense fallback={<MusicSkeleton />}>
              <MusicGrid />
            </Suspense>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled className="border-[#fdeff0]/20 text-[#fdeff0]/50">
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="bg-[#ff5a7e] text-white border-[#ff5a7e]">
                  1
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#fdeff0]/20 text-[#fdeff0] hover:bg-[#fdeff0]/10"
                >
                  2
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#fdeff0]/20 text-[#fdeff0] hover:bg-[#fdeff0]/10"
                >
                  3
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#fdeff0]/20 text-[#fdeff0] hover:bg-[#fdeff0]/10"
                >
                  ...
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#fdeff0]/20 text-[#fdeff0] hover:bg-[#fdeff0]/10"
                >
                  10
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#fdeff0]/20 text-[#fdeff0] hover:bg-[#fdeff0]/10"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

const musicGenres = [
  { id: 1, name: "Lofi" },
  { id: 2, name: "Synthwave" },
  { id: 3, name: "Ambient" },
  { id: 4, name: "Chillhop" },
  { id: 5, name: "Future Bass" },
  { id: 6, name: "Orchestral" },
  { id: 7, name: "J-Pop Inspired" },
]

const musicDurations = [
  { id: 1, name: "1-3 minutes" },
  { id: 2, name: "3-5 minutes" },
  { id: 3, name: "5+ minutes" },
  { id: 4, name: "Extended Loops (10+ min)" },
]

const musicMoods = ["Relaxing", "Energetic", "Melancholic", "Uplifting", "Dreamy", "Intense", "Peaceful", "Epic"]
