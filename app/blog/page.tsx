import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"

export const metadata = {
  title: "Blog | AI Anime Hub",
  description: "Latest news, tutorials, and insights about AI-generated anime content",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#393459] to-[#2a2642] py-16 px-4">
      <div className="container mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#fdeff0] mb-4">
            AI<span className="text-[#ff5a7e]">Anime</span> Blog
          </h1>
          <p className="text-xl text-[#fdeff0]/80 max-w-3xl mx-auto">
            Insights, tutorials, and the latest news from the world of AI-generated anime
          </p>
        </section>

        {/* Featured Post */}
        <section className="mb-16">
          <div className="relative rounded-xl overflow-hidden">
            <div className="relative h-[500px] w-full">
              <Image
                src="/placeholder.svg?height=1000&width=2000"
                alt="The Future of AI Anime Generation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#393459] to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex gap-2 mb-4">
                  <Badge className="bg-[#ff5a7e]">Featured</Badge>
                  <Badge className="bg-[#393459]">Technology</Badge>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Future of AI Anime Generation</h2>
                <p className="text-[#fdeff0]/90 mb-6 max-w-3xl">
                  Exploring the latest advancements in AI technology and how they're revolutionizing anime creation,
                  from character design to animation.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt="Yuki Tanaka"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-[#fdeff0]/80">Yuki Tanaka</span>
                  </div>
                  <span className="text-[#fdeff0]/60">April 2, 2025</span>
                  <span className="text-[#fdeff0]/60">8 min read</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Categories and Search */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Tabs defaultValue="all" className="w-full md:w-auto">
              <TabsList className="grid grid-cols-4 md:grid-cols-5 w-full md:w-auto">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
                <TabsTrigger value="technology">Technology</TabsTrigger>
                <TabsTrigger value="trends">Trends</TabsTrigger>
                <TabsTrigger value="community" className="hidden md:block">
                  Community
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="relative w-full md:w-64">
              <Input
                type="search"
                placeholder="Search articles..."
                className="bg-[#2a2642] border-[#fdeff0]/20 text-[#fdeff0] pr-10"
              />
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
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#fdeff0]/60 h-4 w-4"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-[#2a2642] rounded-xl overflow-hidden shadow-xl group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {post.category && <Badge className="absolute top-4 left-4 bg-[#393459]">{post.category}</Badge>}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#fdeff0] mb-2 group-hover:text-[#ff5a7e] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[#fdeff0]/70 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2">
                          <Image
                            src={post.authorAvatar || "/placeholder.svg"}
                            alt={post.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-sm text-[#fdeff0]/80">{post.author}</span>
                      </div>
                      <span className="text-xs text-[#fdeff0]/60">{post.date}</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-[#2a2642] rounded-xl p-8 md:p-12 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <Badge className="bg-[#ff5a7e] mb-4">Stay Updated</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-[#fdeff0] mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-[#fdeff0]/80 mb-6">
                Get the latest articles, tutorials, and updates on AI anime technology delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-[#393459] border-[#fdeff0]/20 text-[#fdeff0] flex-grow"
                />
                <Button className="bg-[#ff5a7e] hover:bg-[#ff5a7e]/80 text-white whitespace-nowrap">
                  Subscribe Now
                </Button>
              </div>
              <p className="text-xs text-[#fdeff0]/60 mt-3">We respect your privacy. Unsubscribe at any time.</p>
            </div>
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Newsletter" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#fdeff0] mb-8">Popular Topics</h2>
          <div className="flex flex-wrap gap-3">
            {popularTopics.map((topic, index) => (
              <Link
                key={index}
                href={`/blog/topic/${topic.slug}`}
                className="bg-[#393459] hover:bg-[#393459]/80 text-[#fdeff0] px-4 py-2 rounded-full text-sm transition-colors"
              >
                {topic.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Load More Button */}
        <div className="flex justify-center mb-16">
          <Button className="bg-[#393459] hover:bg-[#393459]/80 text-[#fdeff0] border border-[#fdeff0]/20 px-8 py-6">
            Load More Articles
          </Button>
        </div>
      </div>
    </main>
  )
}

const blogPosts = [
  {
    title: "How to Create Your Own AI Anime Character",
    slug: "create-ai-anime-character",
    excerpt:
      "A step-by-step guide to generating your own unique anime character using the latest AI tools and techniques.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Tutorials",
    author: "Alex Chen",
    authorAvatar: "/placeholder.svg?height=100&width=100",
    date: "March 28, 2025",
  },
  {
    title: "Top 10 AI Anime Trends of 2025",
    slug: "top-ai-anime-trends-2025",
    excerpt: "Explore the most exciting trends in AI-generated anime content that are shaping the industry this year.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Trends",
    author: "Sophia Kim",
    authorAvatar: "/placeholder.svg?height=100&width=100",
    date: "March 20, 2025",
  },
  {
    title: "Behind the Scenes: How We Generate Anime Music",
    slug: "behind-scenes-anime-music",
    excerpt: "An inside look at our process for creating AI-generated anime-inspired music tracks and lofi beats.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Technology",
    author: "Marcus Johnson",
    authorAvatar: "/placeholder.svg?height=100&width=100",
    date: "March 15, 2025",
  },
  {
    title: "The Ethics of AI Art: Navigating Copyright in Anime",
    slug: "ethics-ai-art-copyright",
    excerpt:
      "A thoughtful discussion on the ethical considerations and copyright challenges in AI-generated anime content.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Technology",
    author: "Yuki Tanaka",
    authorAvatar: "/placeholder.svg?height=100&width=100",
    date: "March 10, 2025",
  },
  {
    title: "Optimizing AI Anime Wallpapers for Different Devices",
    slug: "optimizing-wallpapers-devices",
    excerpt: "Learn how to adapt and optimize your AI-generated anime wallpapers for various screen sizes and devices.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Tutorials",
    author: "Alex Chen",
    authorAvatar: "/placeholder.svg?height=100&width=100",
    date: "March 5, 2025",
  },
  {
    title: "Community Spotlight: Amazing AI Anime Fan Creations",
    slug: "community-spotlight-fan-creations",
    excerpt: "Showcasing incredible projects and artwork from our community members using our AI-generated content.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Community",
    author: "Marcus Johnson",
    authorAvatar: "/placeholder.svg?height=100&width=100",
    date: "February 28, 2025",
  },
]

const popularTopics = [
  { name: "AI Technology", slug: "ai-technology" },
  { name: "Tutorials", slug: "tutorials" },
  { name: "Wallpapers", slug: "wallpapers" },
  { name: "Animation", slug: "animation" },
  { name: "Character Design", slug: "character-design" },
  { name: "Music Generation", slug: "music-generation" },
  { name: "Video Loops", slug: "video-loops" },
  { name: "Style Transfer", slug: "style-transfer" },
  { name: "Community Projects", slug: "community-projects" },
  { name: "Ethics & Copyright", slug: "ethics-copyright" },
]

