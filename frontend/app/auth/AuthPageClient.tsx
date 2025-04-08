"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AuthPageClient() {
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin")

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#393459] to-[#2a2642] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <span className="text-3xl font-bold text-[#fdeff0]">
              AI<span className="text-[#ff5a7e]">Anime</span>Hub
            </span>
          </Link>
          <p className="text-[#fdeff0]/70 mt-2">
            {authMode === "signin" ? "Sign in to access your account" : "Create your account and join our community"}
          </p>
        </div>

        <div className="bg-[#2a2642]/80 backdrop-blur-md rounded-xl shadow-xl border border-[#fdeff0]/10 p-8">
          <Tabs
            defaultValue="signin"
            value={authMode}
            onValueChange={(value) => setAuthMode(value as "signin" | "signup")}
            className="w-full mb-6"
          >
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="signin" className="data-[state=active]:bg-[#ff5a7e] data-[state=active]:text-white">
                Sign In
              </TabsTrigger>
              <TabsTrigger value="signup" className="data-[state=active]:bg-[#ff5a7e] data-[state=active]:text-white">
                Sign Up
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {authMode === "signin" ? (
            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-[#fdeff0]">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-[#393459]/30 border-[#fdeff0]/20 text-[#fdeff0] focus:border-[#ff5a7e] focus:ring-[#ff5a7e]/20"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium text-[#fdeff0]">
                    Password
                  </label>
                  <Link href="/forgot-password" className="text-xs text-[#ff5a7e] hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-[#393459]/30 border-[#fdeff0]/20 text-[#fdeff0] focus:border-[#ff5a7e] focus:ring-[#ff5a7e]/20"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  className="border-[#fdeff0]/20 data-[state=checked]:bg-[#ff5a7e] data-[state=checked]:border-[#ff5a7e]"
                />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#fdeff0]/80"
                >
                  Remember me
                </label>
              </div>

              <Button className="w-full bg-[#ff5a7e] hover:bg-[#ff5a7e]/90 text-white py-6">Sign In</Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium text-[#fdeff0]">
                    First Name
                  </label>
                  <Input
                    id="first-name"
                    placeholder="John"
                    className="bg-[#393459]/30 border-[#fdeff0]/20 text-[#fdeff0] focus:border-[#ff5a7e] focus:ring-[#ff5a7e]/20"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium text-[#fdeff0]">
                    Last Name
                  </label>
                  <Input
                    id="last-name"
                    placeholder="Doe"
                    className="bg-[#393459]/30 border-[#fdeff0]/20 text-[#fdeff0] focus:border-[#ff5a7e] focus:ring-[#ff5a7e]/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="signup-email" className="text-sm font-medium text-[#fdeff0]">
                  Email
                </label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-[#393459]/30 border-[#fdeff0]/20 text-[#fdeff0] focus:border-[#ff5a7e] focus:ring-[#ff5a7e]/20"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium text-[#fdeff0]">
                  Username
                </label>
                <Input
                  id="username"
                  placeholder="anime_lover42"
                  className="bg-[#393459]/30 border-[#fdeff0]/20 text-[#fdeff0] focus:border-[#ff5a7e] focus:ring-[#ff5a7e]/20"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="signup-password" className="text-sm font-medium text-[#fdeff0]">
                  Password
                </label>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-[#393459]/30 border-[#fdeff0]/20 text-[#fdeff0] focus:border-[#ff5a7e] focus:ring-[#ff5a7e]/20"
                />
                <p className="text-xs text-[#fdeff0]/60">
                  Password must be at least 8 characters long with a mix of letters, numbers, and symbols.
                </p>
              </div>

              <div className="space-y-2">
                <label htmlFor="confirm-password" className="text-sm font-medium text-[#fdeff0]">
                  Confirm Password
                </label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-[#393459]/30 border-[#fdeff0]/20 text-[#fdeff0] focus:border-[#ff5a7e] focus:ring-[#ff5a7e]/20"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  className="border-[#fdeff0]/20 data-[state=checked]:bg-[#ff5a7e] data-[state=checked]:border-[#ff5a7e]"
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#fdeff0]/80"
                >
                  I agree to the{" "}
                  <Link href="/terms" className="text-[#ff5a7e] hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-[#ff5a7e] hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button className="w-full bg-[#ff5a7e] hover:bg-[#ff5a7e]/90 text-white py-6">Create Account</Button>
            </div>
          )}

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full bg-[#fdeff0]/10" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-[#2a2642] px-2 text-[#fdeff0]/60">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="border-[#fdeff0]/20 text-[#fdeff0] hover:bg-[#fdeff0]/10">
              <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </Button>
            <Button variant="outline" className="border-[#fdeff0]/20 text-[#fdeff0] hover:bg-[#fdeff0]/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 mr-2"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#ff5a7e]/10 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#393459]/20 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>
    </div>
  )
}
