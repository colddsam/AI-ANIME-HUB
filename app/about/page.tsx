import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "About Us | AI Anime Hub",
  description: "Learn about our team and how we use AI to create anime magic",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#393459] to-[#2a2642] py-16 px-4">
      <div className="container mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#fdeff0] mb-4">
            About AI<span className="text-[#ff5a7e]">Anime</span>Hub
          </h1>
          <p className="text-xl text-[#fdeff0]/80 max-w-3xl mx-auto">
            Where technology meets creativity to bring anime dreams to life
          </p>
        </section>

        {/* Our Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="AI Anime Creation Process"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#393459]/80 to-transparent"></div>
          </div>
          <div>
            <Badge className="bg-[#ff5a7e] mb-4">Our Story</Badge>
            <h2 className="text-3xl font-bold text-[#fdeff0] mb-6">How We Use AI to Create Anime Magic</h2>
            <p className="text-[#fdeff0]/80 mb-4">
              AIAnimeHub began with a simple question: What if we could harness the power of artificial intelligence to
              create stunning anime content that pushes the boundaries of creativity?
            </p>
            <p className="text-[#fdeff0]/80 mb-4">
              Founded in 2024, our team of AI researchers, artists, and anime enthusiasts came together to build a
              platform that generates high-quality anime content using cutting-edge AI models. We've trained our systems
              on thousands of anime artworks, refining our approach to create content that captures the essence and
              beauty of traditional anime while adding unique AI-generated elements.
            </p>
            <p className="text-[#fdeff0]/80 mb-6">
              Today, we're proud to offer a vast library of AI-generated wallpapers, video loops, and music that brings
              anime dreams to life in ways never before possible.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#393459]/50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-[#ff5a7e] mb-2">10K+</div>
                <div className="text-sm text-[#fdeff0]/80">Unique Designs</div>
              </div>
              <div className="bg-[#393459]/50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-[#ff5a7e] mb-2">50+</div>
                <div className="text-sm text-[#fdeff0]/80">AI Models</div>
              </div>
              <div className="bg-[#393459]/50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-[#ff5a7e] mb-2">15K+</div>
                <div className="text-sm text-[#fdeff0]/80">Happy Customers</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Badge className="bg-[#ff5a7e] mb-4">Our Process</Badge>
            <h2 className="text-3xl font-bold text-[#fdeff0] mb-4">How We Create AI Anime Content</h2>
            <p className="text-[#fdeff0]/80 max-w-3xl mx-auto">
              Our AI-powered creation process combines advanced technology with artistic refinement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-[#2a2642] rounded-lg p-6 shadow-xl relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#ff5a7e]/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[#ff5a7e]/20 rounded-lg flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#fdeff0] mb-2">{step.title}</h3>
                  <p className="text-[#fdeff0]/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Badge className="bg-[#ff5a7e] mb-4">Our Team</Badge>
            <h2 className="text-3xl font-bold text-[#fdeff0] mb-4">The Faces Behind AIAnimeHub</h2>
            <p className="text-[#fdeff0]/80 max-w-3xl mx-auto">
              Meet our diverse team of AI researchers, artists, and anime enthusiasts
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-[#2a2642] rounded-lg overflow-hidden shadow-xl group">
                <div className="relative h-64 w-full">
                  <Image
                    src={member.avatar || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#fdeff0] mb-1">{member.name}</h3>
                  <p className="text-[#ff5a7e] mb-3">{member.role}</p>
                  <p className="text-[#fdeff0]/70 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Badge className="bg-[#ff5a7e] mb-4">Our Values</Badge>
            <h2 className="text-3xl font-bold text-[#fdeff0] mb-4">What Drives Us</h2>
            <p className="text-[#fdeff0]/80 max-w-3xl mx-auto">
              The core principles that guide our work and creativity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-[#2a2642] rounded-lg p-6 shadow-xl flex gap-6">
                <div className="w-16 h-16 bg-[#ff5a7e]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#fdeff0] mb-2">{value.title}</h3>
                  <p className="text-[#fdeff0]/70">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#393459] to-[#ff5a7e]/30 rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-[#fdeff0] mb-4">Join Our Creative Journey</h2>
          <p className="text-[#fdeff0]/80 mb-8 max-w-2xl mx-auto">
            Be part of our community and explore the endless possibilities of AI-generated anime content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#ff5a7e] hover:bg-[#ff5a7e]/80 text-white px-8 py-6">Explore Our Content</Button>
            <Button variant="outline" className="border-[#fdeff0]/30 text-[#fdeff0] hover:bg-[#fdeff0]/10 px-8 py-6">
              Join Our Community
            </Button>
          </div>
        </section>
      </div>
    </main>
  )
}

const processSteps = [
  {
    title: "AI Generation",
    description:
      "Our advanced AI models analyze thousands of anime artworks to generate unique base designs with stunning detail and creativity.",
    icon: (
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
      >
        <path d="M12 2H2v10h10V2Z"></path>
        <path d="M22 12h-4v4h-4v4h8v-8Z"></path>
        <path d="M18 2h4v4"></path>
        <path d="M18 6 8 16"></path>
      </svg>
    ),
  },
  {
    title: "Artistic Refinement",
    description:
      "Our team of artists reviews and refines each AI-generated piece, ensuring the highest quality and aesthetic appeal.",
    icon: (
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
      >
        <circle cx="13.5" cy="6.5" r="2.5"></circle>
        <circle cx="17.5" cy="10.5" r="2.5"></circle>
        <circle cx="8.5" cy="7.5" r="2.5"></circle>
        <circle cx="6.5" cy="12.5" r="2.5"></circle>
        <path d="M12 22v-7.5"></path>
        <path d="M7 22v-5"></path>
        <path d="M17 22v-3"></path>
      </svg>
    ),
  },
  {
    title: "Quality Assurance",
    description:
      "Each piece undergoes rigorous testing for resolution, format compatibility, and visual appeal before being added to our collection.",
    icon: (
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
      >
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    ),
  },
]

const teamMembers = [
  {
    name: "Yuki Tanaka",
    role: "Founder & AI Director",
    bio: "AI researcher with a passion for anime and technology. Leads our AI model development and creative direction.",
    avatar: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Alex Chen",
    role: "Lead Artist",
    bio: "Professional anime artist who refines our AI-generated content and ensures artistic quality and consistency.",
    avatar: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Sophia Kim",
    role: "Technical Director",
    bio: "Software engineer specializing in AI implementation and platform development for creative applications.",
    avatar: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Marcus Johnson",
    role: "Community Manager",
    bio: "Anime enthusiast who manages our community engagement and ensures our content meets user expectations.",
    avatar: "/placeholder.svg?height=400&width=400",
  },
]

const values = [
  {
    title: "Innovation",
    description:
      "We constantly push the boundaries of what's possible with AI and anime, exploring new techniques and styles to create unique content.",
    icon: (
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
      >
        <path d="M2 12h5"></path>
        <path d="M17 12h5"></path>
        <path d="M12 2v5"></path>
        <path d="M12 17v5"></path>
        <path d="M4.93 4.93l3.54 3.54"></path>
        <path d="M15.54 15.54l3.54 3.54"></path>
        <path d="M4.93 19.07l3.54-3.54"></path>
        <path d="M15.54 8.46l3.54-3.54"></path>
      </svg>
    ),
  },
  {
    title: "Quality",
    description:
      "We're committed to delivering the highest quality content, with attention to detail and artistic excellence in every piece we create.",
    icon: (
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
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
    ),
  },
  {
    title: "Community",
    description:
      "We value our community of anime enthusiasts and creators, and we're dedicated to fostering a supportive and engaging environment.",
    icon: (
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
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    title: "Creativity",
    description:
      "We believe in the power of creativity to inspire and transform, and we're dedicated to helping creators express their unique vision.",
    icon: (
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
      >
        <circle cx="13.5" cy="6.5" r="2.5"></circle>
        <circle cx="17.5" cy="10.5" r="2.5"></circle>
        <circle cx="8.5" cy="7.5" r="2.5"></circle>
        <circle cx="6.5" cy="12.5" r="2.5"></circle>
        <path d="M12 22v-7.5"></path>
        <path d="M7 22v-5"></path>
        <path d="M17 22v-3"></path>
      </svg>
    ),
  },
]

