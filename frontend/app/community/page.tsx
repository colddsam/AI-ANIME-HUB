import Image from "next/image"
import Link from "next/link"
import { Heart, MessageCircle, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export const metadata = {
  title: "Community | AI Anime Hub",
  description: "Join our creative community of AI anime enthusiasts",
}

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#393459] to-[#2a2642] py-16 px-4">
      <div className="container mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#fdeff0] mb-4">
            Our <span className="text-[#ff5a7e]">Community</span>
          </h1>
          <p className="text-xl text-[#fdeff0]/80 max-w-3xl mx-auto">
            Join thousands of anime enthusiasts sharing their creativity and passion for AI-generated content
          </p>
        </section>

        {/* Community Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <div key={index} className="bg-[#2a2642] rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-[#ff5a7e] mb-2">{stat.value}</div>
              <div className="text-[#fdeff0]/80">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Join Community CTA */}
        <section className="bg-gradient-to-r from-[#393459] to-[#ff5a7e]/30 rounded-xl p-8 md:p-12 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <Badge className="bg-[#ff5a7e] mb-4">Join Us</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-[#fdeff0] mb-4">
                Become Part of Our Creative Community
              </h2>
              <p className="text-[#fdeff0]/80 mb-6">
                Share your creations, get inspired, and connect with fellow anime enthusiasts. Sign up today to access
                exclusive community features.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-[#ff5a7e] hover:bg-[#ff5a7e]/80 text-white">Sign Up Now</Button>
                <Button variant="outline" className="border-[#fdeff0]/30 text-[#fdeff0] hover:bg-[#fdeff0]/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Community" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Community Content Tabs */}
        <section className="mb-16">
          <Tabs defaultValue="featured" className="w-full">
            <TabsList className="grid grid-cols-4 w-full max-w-md mx-auto mb-8">
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="challenges">Challenges</TabsTrigger>
            </TabsList>

            <TabsContent value="featured" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post, index) => (
                  <div key={index} className="bg-[#2a2642] rounded-lg overflow-hidden shadow-xl">
                    <div className="relative h-64 w-full">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      {post.featured && <Badge className="absolute top-4 left-4 bg-[#ff5a7e]">Featured</Badge>}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                          <Image
                            src={post.userAvatar || "/placeholder.svg"}
                            alt={post.username}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-medium text-[#fdeff0]">{post.username}</div>
                          <div className="text-xs text-[#fdeff0]/60">{post.date}</div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-[#fdeff0] mb-2">{post.title}</h3>
                      <p className="text-[#fdeff0]/70 mb-4">{post.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-4">
                          <button className="flex items-center text-[#fdeff0]/60 hover:text-[#ff5a7e]">
                            <Heart className="h-5 w-5 mr-1" />
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center text-[#fdeff0]/60 hover:text-[#ff5a7e]">
                            <MessageCircle className="h-5 w-5 mr-1" />
                            <span>{post.comments}</span>
                          </button>
                        </div>
                        <button className="text-[#fdeff0]/60 hover:text-[#ff5a7e]">
                          <Share2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="recent" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Similar structure to featured posts, with different content */}
                <div className="text-center text-[#fdeff0]/80 py-12">
                  Select the "Recent" tab to see the latest community posts.
                </div>
              </div>
            </TabsContent>

            <TabsContent value="popular" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Similar structure to featured posts, with different content */}
                <div className="text-center text-[#fdeff0]/80 py-12">
                  Select the "Popular" tab to see the most liked community posts.
                </div>
              </div>
            </TabsContent>

            <TabsContent value="challenges" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Similar structure to featured posts, with different content */}
                <div className="text-center text-[#fdeff0]/80 py-12">
                  Select the "Challenges" tab to see current community challenges.
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center mt-8">
            <Button className="bg-[#393459] hover:bg-[#393459]/80 text-[#fdeff0] border border-[#fdeff0]/20">
              Load More
            </Button>
          </div>
        </section>

        {/* Social Media Feed */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <Badge className="bg-[#ff5a7e] mb-4">Social Media</Badge>
            <h2 className="text-3xl font-bold text-[#fdeff0] mb-4">Follow Us Online</h2>
            <p className="text-[#fdeff0]/80 max-w-3xl mx-auto">
              Stay connected with our community across social platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialPosts.map((post, index) => (
              <div key={index} className="bg-[#2a2642] rounded-lg overflow-hidden shadow-xl">
                <div className="relative h-64 w-full">
                  <Image src={post.image || "/placeholder.svg"} alt="Social media post" fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        post.platform === "instagram"
                          ? "bg-gradient-to-tr from-purple-500 to-pink-500"
                          : post.platform === "twitter"
                            ? "bg-blue-400"
                            : post.platform === "tiktok"
                              ? "bg-black"
                              : "bg-[#393459]"
                      }`}
                    >
                      {post.platform === "instagram" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                      )}
                      {post.platform === "twitter" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                      )}
                      {post.platform === "tiktok" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M15 11v4.74a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"></path>
                          <path d="M18 2h-2v4h4V4a2 2 0 0 0-2-2z"></path>
                          <path d="M18 14v-3"></path>
                          <path d="M18 19v-2"></path>
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm text-[#fdeff0]/60">{post.date}</div>
                    <Link href={post.link} target="_blank" className="text-[#ff5a7e] text-sm hover:underline">
                      View
                    </Link>
                  </div>
                  <p className="text-[#fdeff0]/80 text-sm line-clamp-2">{post.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-4">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  link.platform === "instagram"
                    ? "bg-gradient-to-tr from-purple-500 to-pink-500"
                    : link.platform === "twitter"
                      ? "bg-blue-400"
                      : link.platform === "tiktok"
                        ? "bg-black"
                        : link.platform === "facebook"
                          ? "bg-blue-600"
                          : "bg-[#393459]"
                } hover:opacity-90 transition-opacity`}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </section>

        {/* Community Guidelines */}
        <section className="bg-[#2a2642] rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-[#fdeff0] mb-4">Community Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-[#fdeff0] mb-2">What We Encourage</h3>
              <ul className="space-y-2 text-[#fdeff0]/80">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ff5a7e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Sharing your creative projects using our AI-generated content</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ff5a7e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Constructive feedback and supportive comments</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ff5a7e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Collaborative projects and creative challenges</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ff5a7e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Sharing tips and techniques for using AI anime content</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#fdeff0] mb-2">What's Not Allowed</h3>
              <ul className="space-y-2 text-[#fdeff0]/80">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ff5a7e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5"
                  >
                    <line x1="18" x2="6" y1="6" y2="18"></line>
                    <line x1="6" x2="18" y1="6" y2="18"></line>
                  </svg>
                  <span>Inappropriate or offensive content</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ff5a7e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5"
                  >
                    <line x1="18" x2="6" y1="6" y2="18"></line>
                    <line x1="6" x2="18" y1="6" y2="18"></line>
                  </svg>
                  <span>Harassment or bullying of other community members</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ff5a7e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5"
                  >
                    <line x1="18" x2="6" y1="6" y2="18"></line>
                    <line x1="6" x2="18" y1="6" y2="18"></line>
                  </svg>
                  <span>Claiming AI-generated content as your own original artwork</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ff5a7e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5"
                  >
                    <line x1="18" x2="6" y1="6" y2="18"></line>
                    <line x1="6" x2="18" y1="6" y2="18"></line>
                  </svg>
                  <span>Spam or excessive self-promotion</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Share Your Creation */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <Badge className="bg-[#ff5a7e] mb-4">Share</Badge>
            <h2 className="text-3xl font-bold text-[#fdeff0] mb-4">Share Your Creation</h2>
            <p className="text-[#fdeff0]/80 max-w-3xl mx-auto">
              Show the community how you're using our AI-generated anime content in your projects
            </p>
          </div>

          <div className="bg-[#2a2642] rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="mb-4">
                  <label htmlFor="title" className="block text-[#fdeff0] mb-2">
                    Title
                  </label>
                  <Input
                    id="title"
                    placeholder="Give your creation a title"
                    className="bg-[#393459] border-[#fdeff0]/20 text-[#fdeff0]"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className="block text-[#fdeff0] mb-2">
                    Description
                  </label>
                  <Textarea
                    id="description"
                    placeholder="Tell us about your creation"
                    className="bg-[#393459] border-[#fdeff0]/20 text-[#fdeff0] min-h-[120px]"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="tags" className="block text-[#fdeff0] mb-2">
                    Tags
                  </label>
                  <Input
                    id="tags"
                    placeholder="Add tags separated by commas"
                    className="bg-[#393459] border-[#fdeff0]/20 text-[#fdeff0]"
                  />
                </div>
              </div>
              <div>
                <div className="border-2 border-dashed border-[#fdeff0]/20 rounded-lg h-64 flex items-center justify-center mb-4">
                  <div className="text-center p-6">
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
                      className="h-12 w-12 text-[#fdeff0]/40 mx-auto mb-4"
                    >
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path>
                      <line x1="16" x2="22" y1="5" y2="5"></line>
                      <line x1="19" x2="19" y1="2" y2="8"></line>
                      <circle cx="9" cy="9" r="2"></circle>
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                    </svg>
                    <p className="text-[#fdeff0]/60 mb-2">Drag and drop your image or video</p>
                    <p className="text-[#fdeff0]/40 text-sm">Supports JPG, PNG, GIF, MP4 (max 20MB)</p>
                    <Button className="mt-4 bg-[#393459] hover:bg-[#393459]/80 text-[#fdeff0]">Browse Files</Button>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button className="bg-[#ff5a7e] hover:bg-[#ff5a7e]/80 text-white px-8">Share Creation</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

const communityStats = [
  { label: "Community Members", value: "25K+" },
  { label: "Shared Creations", value: "8.5K+" },
  { label: "Active Challenges", value: "12" },
  { label: "Countries Represented", value: "85+" },
]

const featuredPosts = [
  {
    username: "AnimeCreator42",
    userAvatar: "/placeholder.svg?height=100&width=100",
    date: "2 days ago",
    title: "Cyberpunk Anime Character Design",
    description:
      "Created this character using the Neon City Dreams wallpaper as inspiration. Added some custom elements in Photoshop.",
    image: "/placeholder.svg?height=400&width=600",
    likes: 248,
    comments: 32,
    featured: true,
  },
  {
    username: "SakuraDreams",
    userAvatar: "/placeholder.svg?height=100&width=100",
    date: "5 days ago",
    title: "Cherry Blossom Music Video",
    description:
      "Combined several AI anime loops with the Midnight Sakura Lofi track to create this relaxing music video.",
    image: "/placeholder.svg?height=400&width=600",
    likes: 187,
    comments: 24,
    featured: true,
  },
  {
    username: "MechaFan2025",
    userAvatar: "/placeholder.svg?height=100&width=100",
    date: "1 week ago",
    title: "Mecha Battle Animation",
    description:
      "Used the Cosmic Mecha Battle wallpaper and turned it into a short animation sequence with some added effects.",
    image: "/placeholder.svg?height=400&width=600",
    likes: 312,
    comments: 47,
    featured: false,
  },
]

const socialPosts = [
  {
    platform: "instagram",
    image: "/placeholder.svg?height=400&width=400",
    date: "April 2, 2025",
    caption: "Check out this amazing AI-generated anime cityscape! #AIAnime #DigitalArt",
    link: "https://instagram.com",
  },
  {
    platform: "twitter",
    image: "/placeholder.svg?height=400&width=400",
    date: "April 1, 2025",
    caption: "Our new collection of AI anime wallpapers is now available! RT if you're excited! ✨",
    link: "https://twitter.com",
  },
  {
    platform: "tiktok",
    image: "/placeholder.svg?height=400&width=400",
    date: "March 30, 2025",
    caption: "Watch how we transform AI anime art into mesmerizing video loops! #AIAnimation #AnimeArt",
    link: "https://tiktok.com",
  },
  {
    platform: "instagram",
    image: "/placeholder.svg?height=400&width=400",
    date: "March 28, 2025",
    caption: "Behind the scenes look at our AI music generation process! #LofiBeats #AIMusic",
    link: "https://instagram.com",
  },
]

const socialLinks = [
  {
    platform: "instagram",
    url: "https://instagram.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
      </svg>
    ),
  },
  {
    platform: "twitter",
    url: "https://twitter.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
      </svg>
    ),
  },
  {
    platform: "tiktok",
    url: "https://tiktok.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M15 11v4.74a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"></path>
        <path d="M18 2h-2v4h4V4a2 2 0 0 0-2-2z"></path>
        <path d="M18 14v-3"></path>
        <path d="M18 19v-2"></path>
      </svg>
    ),
  },
  {
    platform: "facebook",
    url: "https://facebook.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    ),
  },
]
