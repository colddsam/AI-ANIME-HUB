"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ShoppingCart, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useMobile } from "@/hooks/use-mobile"
import SearchInput from "@/components/search-input"

export default function Navbar() {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const searchContainerRef = useRef<HTMLDivElement>(null)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Community", href: "/community" },
  ]

  const isActive = (path: string) => {
    return pathname === path
  }

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
      }
    }

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isSearchOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#fdeff0]/10 bg-[#393459]/90 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-[#fdeff0]">
              AI<span className="text-[#ff5a7e]">Anime</span>Hub
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="mx-6 flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors hover:text-[#ff5a7e] ${
                  isActive(item.href) ? "text-[#ff5a7e]" : "text-[#fdeff0]/80"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-4">
          {isSearchOpen ? (
            <div
              ref={searchContainerRef}
              className="absolute left-0 right-0 top-0 z-50 flex h-16 items-center justify-center bg-[#393459] px-4 md:relative md:w-auto md:bg-transparent"
            >
              <SearchInput onClose={() => setIsSearchOpen(false)} />
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              className="text-[#fdeff0]/80 hover:text-[#fdeff0]"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <Button variant="ghost" size="icon" className="text-[#fdeff0]/80 hover:text-[#fdeff0]">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>

          <Button variant="ghost" size="icon" className="text-[#fdeff0]/80 hover:text-[#fdeff0] relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#ff5a7e] text-[10px] font-bold flex items-center justify-center">
              3
            </span>
            <span className="sr-only">Cart</span>
          </Button>

          {/* Mobile Menu */}
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#fdeff0]/80 hover:text-[#fdeff0]">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#393459] border-[#fdeff0]/10">
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-lg transition-colors hover:text-[#ff5a7e] ${
                        isActive(item.href) ? "text-[#ff5a7e]" : "text-[#fdeff0]/80"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  )
}

