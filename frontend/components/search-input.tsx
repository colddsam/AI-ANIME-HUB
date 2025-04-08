"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useDebounce } from "@/hooks/use-debounce"

// Mock data for suggestions - in a real app, you would fetch these from an API
const mockSuggestions = [
  { id: 1, text: "Neon City Dreams", type: "wallpaper" },
  { id: 2, text: "Cherry Blossom Warrior", type: "wallpaper" },
  { id: 3, text: "Cosmic Mecha Battle", type: "wallpaper" },
  { id: 4, text: "Sakura Petals Loop", type: "video" },
  { id: 5, text: "Cyberpunk Street Scene", type: "video" },
  { id: 6, text: "Midnight Sakura Lofi", type: "music" },
  { id: 7, text: "Rainy Tokyo Beats", type: "music" },
  { id: 8, text: "Anime Bundle Pack", type: "bundle" },
]

interface SearchInputProps {
  onClose: () => void
}

export default function SearchInput({ onClose }: SearchInputProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [suggestions, setSuggestions] = useState<typeof mockSuggestions>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const debouncedSearchTerm = useDebounce(searchTerm, 300)
  const inputRef = useRef<HTMLInputElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  // Focus the input when it appears
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  // Handle clicks outside to close suggestions
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Update suggestions based on debounced search term
  useEffect(() => {
    if (debouncedSearchTerm) {
      const filtered = mockSuggestions.filter((item) =>
        item.text.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
      )
      setSuggestions(filtered)
      setShowSuggestions(true)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [debouncedSearchTerm])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement actual search functionality here
    console.log("Searching for:", searchTerm)
    setShowSuggestions(false)
    // In a real app, you would navigate to search results page
  }

  return (
    <div ref={wrapperRef} className="relative w-full md:w-[300px]">
      <form onSubmit={handleSearch} className="flex items-center w-full">
        <div className="relative flex-grow">
          <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#fdeff0]/50" />
          <Input
            ref={inputRef}
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => searchTerm && setShowSuggestions(true)}
            className="pl-8 pr-8 bg-[#393459]/30 border-[#fdeff0]/20 text-[#fdeff0] w-full"
          />
        </div>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="ml-1 text-[#fdeff0]/80 hover:text-[#fdeff0]"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </Button>
      </form>

      {/* Suggestions Panel */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-50 mt-1 w-full bg-[#2a2642] border border-[#fdeff0]/10 rounded-md shadow-lg max-h-60 overflow-auto">
          <ul className="py-1">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.id}
                className="px-4 py-2 hover:bg-[#393459]/50 cursor-pointer flex items-center justify-between"
                onClick={() => {
                  setSearchTerm(suggestion.text)
                  setShowSuggestions(false)
                }}
              >
                <span className="text-[#fdeff0]">{suggestion.text}</span>
                <span className="text-xs text-[#fdeff0]/60 bg-[#393459]/30 px-2 py-0.5 rounded">{suggestion.type}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
