import { Skeleton } from "@/components/ui/skeleton"

export default function WallpaperSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array(9)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="bg-[#2a2642] rounded-lg overflow-hidden shadow-xl border border-[#fdeff0]/10">
            <Skeleton className="h-64 w-full" />
            <div className="p-4 space-y-2">
              <Skeleton className="h-5 w-3/4" />
              <div className="flex justify-between">
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-4 w-1/5" />
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
