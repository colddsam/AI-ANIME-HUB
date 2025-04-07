"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Home, RefreshCw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#393459] to-[#2a2642] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-red-500/10 p-4">
            <AlertTriangle className="h-12 w-12 text-red-400" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-[#fdeff0] mb-4">Something went wrong!</h1>

        <p className="text-[#fdeff0]/70 mb-8">
          We're sorry, but we encountered an unexpected error. Our team has been notified and is working on a fix.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} className="bg-[#ff5a7e] hover:bg-[#ff5a7e]/80 text-white">
            <RefreshCw className="mr-2 h-4 w-4" />
            Try again
          </Button>

          <Button asChild variant="outline" className="border-[#fdeff0]/20 text-[#fdeff0] hover:bg-[#fdeff0]/10">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Return home
            </Link>
          </Button>
        </div>

        {error.digest && <p className="mt-8 text-xs text-[#fdeff0]/50">Error ID: {error.digest}</p>}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-red-500/10 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#393459]/20 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    </div>
  )
}

