import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#393459] to-[#2a2642] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        <h1 className="text-8xl font-bold text-[#ff5a7e] mb-4">404</h1>

        <h2 className="text-3xl font-bold text-[#fdeff0] mb-4">Page Not Found</h2>

        <p className="text-[#fdeff0]/70 mb-8">
          The page you're looking for doesn't exist or has been moved to another URL.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-[#ff5a7e] hover:bg-[#ff5a7e]/80 text-white">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Return home
            </Link>
          </Button>

          <Button asChild variant="outline" className="border-[#fdeff0]/20 text-[#fdeff0] hover:bg-[#fdeff0]/10">
            <Link href="/explore">
              <Search className="mr-2 h-4 w-4" />
              Explore content
            </Link>
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ff5a7e]/10 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#393459]/20 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    </div>
  )
}

