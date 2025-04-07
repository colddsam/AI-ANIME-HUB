import { Suspense } from "react"
import ExploreContent from "@/components/explore-content"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata = {
  title: "Explore AI Anime Content",
  description: "Browse our collection of AI-generated anime wallpapers, videos, and music",
}

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#393459] to-[#2a2642] py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-[#fdeff0] mb-2 text-center">Explore Content</h1>
        <p className="text-[#fdeff0]/70 text-center mb-12 max-w-2xl mx-auto">
          Discover and filter through our vast collection of AI-generated anime content
        </p>

        <Suspense fallback={<ExploreSkeletons />}>
          <ExploreContent />
        </Suspense>
      </div>
    </main>
  )
}

function ExploreSkeletons() {
  return (
    <div className="space-y-8">
      <div className="flex justify-center space-x-4 mb-8">
        <Skeleton className="h-10 w-24 rounded-full" />
        <Skeleton className="h-10 w-24 rounded-full" />
        <Skeleton className="h-10 w-24 rounded-full" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-64 w-full rounded-lg" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
      </div>
    </div>
  )
}

