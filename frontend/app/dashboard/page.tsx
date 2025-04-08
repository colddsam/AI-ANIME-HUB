import Link from "next/link"
import Image from "next/image"
import {
  BarChart3,
  ShoppingCart,
  Users,
  Package,
  CreditCard,
  Settings,
  HelpCircle,
  Bell,
  Search,
  Plus,
  Download,
  Filter,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import DashboardChart from "@/components/dashboard-chart"
import RecentSales from "@/components/recent-sales"

export const metadata = {
  title: "Dashboard | AI Anime Hub",
  description: "Admin dashboard for managing AI anime content",
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-[#393459] to-[#2a2642]">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col bg-[#2a2642]/80 backdrop-blur-md text-[#fdeff0] fixed inset-y-0 border-r border-[#fdeff0]/10">
        <div className="flex items-center h-16 px-6 border-b border-[#fdeff0]/10">
          <Link href="/dashboard" className="flex items-center">
            <span className="text-xl font-bold">
              AI<span className="text-[#ff5a7e]">Anime</span>Hub
            </span>
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <div className="space-y-1">
            {sidebarItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  item.active
                    ? "bg-[#ff5a7e]/20 text-[#ff5a7e]"
                    : "text-[#fdeff0]/70 hover:bg-[#fdeff0]/10 hover:text-[#fdeff0]"
                }`}
              >
                {item.icon}
                <span className="ml-3">{item.name}</span>
                {item.count && <Badge className="ml-auto bg-[#ff5a7e] text-white">{item.count}</Badge>}
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="px-3 text-xs font-semibold text-[#fdeff0]/50 uppercase tracking-wider">
              Content Management
            </h3>
            <div className="mt-2 space-y-1">
              {contentItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-[#fdeff0]/70 hover:bg-[#fdeff0]/10 hover:text-[#fdeff0]"
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <div className="p-4 border-t border-[#fdeff0]/10">
          <div className="flex items-center">
            <div className="relative w-8 h-8 rounded-full overflow-hidden mr-3">
              <Image src="/placeholder.svg?height=100&width=100" alt="Admin User" fill className="object-cover" />
            </div>
            <div>
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-[#fdeff0]/60">admin@aianime.hub</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-auto h-8 w-8 text-[#fdeff0]/70">
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
                    className="h-4 w-4"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-[#2a2642] border-[#fdeff0]/10 text-[#fdeff0]">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-[#fdeff0]/10" />
                <DropdownMenuItem className="focus:bg-[#fdeff0]/10 focus:text-[#fdeff0]">Profile</DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-[#fdeff0]/10 focus:text-[#fdeff0]">Settings</DropdownMenuItem>
                <DropdownMenuSeparator className="bg-[#fdeff0]/10" />
                <DropdownMenuItem className="focus:bg-[#fdeff0]/10 focus:text-[#fdeff0]">Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 md:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-[#2a2642]/80 backdrop-blur-md border-b border-[#fdeff0]/10 flex items-center h-16 px-6">
          <Button
            variant="outline"
            size="icon"
            className="md:hidden mr-4 border-[#fdeff0]/20 text-[#fdeff0] hover:bg-[#fdeff0]/10"
          >
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
              className="h-5 w-5"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
            <span className="sr-only">Menu</span>
          </Button>

          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[#fdeff0]/50" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 bg-[#393459]/30 border-[#fdeff0]/20 text-[#fdeff0] focus:bg-[#393459]/50"
            />
          </div>

          <div className="ml-auto flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="relative border-[#fdeff0]/20 text-[#fdeff0] hover:bg-[#fdeff0]/10"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#ff5a7e] text-[10px] font-bold flex items-center justify-center text-white">
                3
              </span>
            </Button>

            <Button variant="outline" size="icon" className="border-[#fdeff0]/20 text-[#fdeff0] hover:bg-[#fdeff0]/10">
              <Settings className="h-5 w-5" />
            </Button>

            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image src="/placeholder.svg?height=100&width=100" alt="Admin User" fill className="object-cover" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-[#fdeff0] mb-1">Dashboard</h1>
              <p className="text-[#fdeff0]/70">Welcome back, Admin! Here's what's happening with your store today.</p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <Button
                variant="outline"
                className="flex items-center gap-2 border-[#fdeff0]/20 text-[#fdeff0] hover:bg-[#fdeff0]/10"
              >
                <Download className="h-4 w-4" />
                Download Reports
              </Button>
              <Button className="bg-[#ff5a7e] hover:bg-[#ff5a7e]/90 text-white flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Add New Content
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsCards.map((card, index) => (
              <Card
                key={index}
                className="bg-[#2a2642]/80 border-[#fdeff0]/10 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-[#fdeff0]/70">{card.title}</p>
                      <h3 className="text-2xl font-bold mt-1 text-[#fdeff0]">{card.value}</h3>
                      <div
                        className={`flex items-center mt-1 text-sm ${
                          card.trend === "up" ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {card.trend === "up" ? (
                          <ArrowUpRight className="h-4 w-4 mr-1" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4 mr-1" />
                        )}
                        <span>{card.trendValue}</span>
                      </div>
                    </div>
                    <div className={`p-3 rounded-lg ${card.iconBg}`}>{card.icon}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts and Recent Sales */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="lg:col-span-2 bg-[#2a2642]/80 border-[#fdeff0]/10 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-[#fdeff0]">Sales Overview</CardTitle>
                  <CardDescription className="text-[#fdeff0]/70">Monthly revenue and sales count</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 border-[#fdeff0]/20 text-[#fdeff0] hover:bg-[#fdeff0]/10"
                  >
                    <Filter className="h-3.5 w-3.5 mr-2" />
                    Filter
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 border-[#fdeff0]/20 text-[#fdeff0] hover:bg-[#fdeff0]/10"
                      >
                        This Month
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-[#2a2642] border-[#fdeff0]/10 text-[#fdeff0]">
                      <DropdownMenuItem className="focus:bg-[#fdeff0]/10 focus:text-[#fdeff0]">
                        This Week
                      </DropdownMenuItem>
                      <DropdownMenuItem className="focus:bg-[#fdeff0]/10 focus:text-[#fdeff0]">
                        This Month
                      </DropdownMenuItem>
                      <DropdownMenuItem className="focus:bg-[#fdeff0]/10 focus:text-[#fdeff0]">
                        This Year
                      </DropdownMenuItem>
                      <DropdownMenuItem className="focus:bg-[#fdeff0]/10 focus:text-[#fdeff0]">
                        All Time
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent>
                <DashboardChart />
              </CardContent>
            </Card>

            <Card className="bg-[#2a2642]/80 border-[#fdeff0]/10 shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#fdeff0]">Recent Sales</CardTitle>
                <CardDescription className="text-[#fdeff0]/70">Latest transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentSales />
              </CardContent>
            </Card>
          </div>

          {/* Content Management */}
          <div className="mb-8">
            <Card className="bg-[#2a2642]/80 border-[#fdeff0]/10 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-[#fdeff0]">Content Management</CardTitle>
                  <CardDescription className="text-[#fdeff0]/70">Manage your AI anime content</CardDescription>
                </div>
                <Button className="bg-[#ff5a7e] hover:bg-[#ff5a7e]/90 text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Content
                </Button>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all">
                  <TabsList className="mb-4 bg-[#393459]/30">
                    <TabsTrigger
                      value="all"
                      className="data-[state=active]:bg-[#ff5a7e] data-[state=active]:text-white"
                    >
                      All Content
                    </TabsTrigger>
                    <TabsTrigger
                      value="wallpapers"
                      className="data-[state=active]:bg-[#ff5a7e] data-[state=active]:text-white"
                    >
                      Wallpapers
                    </TabsTrigger>
                    <TabsTrigger
                      value="videos"
                      className="data-[state=active]:bg-[#ff5a7e] data-[state=active]:text-white"
                    >
                      Videos
                    </TabsTrigger>
                    <TabsTrigger
                      value="music"
                      className="data-[state=active]:bg-[#ff5a7e] data-[state=active]:text-white"
                    >
                      Music
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="relative w-64">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[#fdeff0]/50" />
                        <Input
                          type="search"
                          placeholder="Search content..."
                          className="pl-8 bg-[#393459]/30 border-[#fdeff0]/20 text-[#fdeff0]"
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-[#fdeff0]/20 text-[#fdeff0] hover:bg-[#fdeff0]/10"
                        >
                          <Filter className="h-3.5 w-3.5 mr-2" />
                          Filter
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-[#fdeff0]/20 text-[#fdeff0] hover:bg-[#fdeff0]/10"
                            >
                              Sort By: Newest
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-[#2a2642] border-[#fdeff0]/10 text-[#fdeff0]">
                            <DropdownMenuItem className="focus:bg-[#fdeff0]/10 focus:text-[#fdeff0]">
                              Newest
                            </DropdownMenuItem>
                            <DropdownMenuItem className="focus:bg-[#fdeff0]/10 focus:text-[#fdeff0]">
                              Oldest
                            </DropdownMenuItem>
                            <DropdownMenuItem className="focus:bg-[#fdeff0]/10 focus:text-[#fdeff0]">
                              Price: Low to High
                            </DropdownMenuItem>
                            <DropdownMenuItem className="focus:bg-[#fdeff0]/10 focus:text-[#fdeff0]">
                              Price: High to Low
                            </DropdownMenuItem>
                            <DropdownMenuItem className="focus:bg-[#fdeff0]/10 focus:text-[#fdeff0]">
                              Most Popular
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>

                    <div className="border border-[#fdeff0]/10 rounded-lg overflow-hidden">
                      <table className="min-w-full divide-y divide-[#fdeff0]/10">
                        <thead className="bg-[#393459]/30">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-[#fdeff0]/70 uppercase tracking-wider"
                            >
                              Content
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-[#fdeff0]/70 uppercase tracking-wider"
                            >
                              Type
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-[#fdeff0]/70 uppercase tracking-wider"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-[#fdeff0]/70 uppercase tracking-wider"
                            >
                              Status
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-[#fdeff0]/70 uppercase tracking-wider"
                            >
                              Sales
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-right text-xs font-medium text-[#fdeff0]/70 uppercase tracking-wider"
                            >
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-[#2a2642]/50 divide-y divide-[#fdeff0]/10">
                          {contentItems.slice(0, 5).map((item, index) => (
                            <tr key={index} className="hover:bg-[#393459]/20 transition-colors">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="h-10 w-10 flex-shrink-0 rounded overflow-hidden bg-[#393459]/30">
                                    <Image
                                      src="/placeholder.svg?height=100&width=100"
                                      alt={`Content ${index + 1}`}
                                      width={40}
                                      height={40}
                                      className="object-cover"
                                    />
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-[#fdeff0]">
                                      {contentTitles[index % contentTitles.length]}
                                    </div>
                                    <div className="text-sm text-[#fdeff0]/60">ID: #CONT-{1000 + index}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span
                                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                    index % 3 === 0
                                      ? "bg-purple-900/30 text-purple-300"
                                      : index % 3 === 1
                                        ? "bg-blue-900/30 text-blue-300"
                                        : "bg-green-900/30 text-green-300"
                                  }`}
                                >
                                  {index % 3 === 0 ? "Wallpaper" : index % 3 === 1 ? "Video" : "Music"}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#fdeff0]/80">
                                ${(3.99 + index * 1.5).toFixed(2)}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span
                                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                    index % 4 === 0
                                      ? "bg-yellow-900/30 text-yellow-300"
                                      : "bg-green-900/30 text-green-300"
                                  }`}
                                >
                                  {index % 4 === 0 ? "Pending" : "Active"}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#fdeff0]/80">
                                {10 + index * 12}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-[#fdeff0]/70 hover:text-[#fdeff0] hover:bg-[#fdeff0]/10"
                                >
                                  Edit
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                                >
                                  Delete
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-[#fdeff0]/70">Showing 1 to 5 of 24 entries</div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" disabled className="border-[#fdeff0]/20 text-[#fdeff0]/50">
                          Previous
                        </Button>
                        <Button variant="outline" size="sm" className="bg-[#ff5a7e] text-white border-[#ff5a7e]">
                          1
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-[#fdeff0]/20 text-[#fdeff0] hover:bg-[#fdeff0]/10"
                        >
                          2
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-[#fdeff0]/20 text-[#fdeff0] hover:bg-[#fdeff0]/10"
                        >
                          3
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-[#fdeff0]/20 text-[#fdeff0] hover:bg-[#fdeff0]/10"
                        >
                          Next
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="wallpapers">
                    <div className="text-center py-12 text-[#fdeff0]/70">
                      Select the "Wallpapers" tab to manage wallpaper content.
                    </div>
                  </TabsContent>

                  <TabsContent value="videos">
                    <div className="text-center py-12 text-[#fdeff0]/70">
                      Select the "Videos" tab to manage video content.
                    </div>
                  </TabsContent>

                  <TabsContent value="music">
                    <div className="text-center py-12 text-[#fdeff0]/70">
                      Select the "Music" tab to manage music content.
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

const sidebarItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <BarChart3 className="h-5 w-5" />,
    active: true,
  },
  {
    name: "Orders",
    href: "/dashboard/orders",
    icon: <ShoppingCart className="h-5 w-5" />,
    count: 12,
  },
  {
    name: "Customers",
    href: "/dashboard/customers",
    icon: <Users className="h-5 w-5" />,
  },
  {
    name: "Products",
    href: "/dashboard/products",
    icon: <Package className="h-5 w-5" />,
  },
  {
    name: "Transactions",
    href: "/dashboard/transactions",
    icon: <CreditCard className="h-5 w-5" />,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: <Settings className="h-5 w-5" />,
  },
  {
    name: "Help",
    href: "/dashboard/help",
    icon: <HelpCircle className="h-5 w-5" />,
  },
]

const contentItems = [
  {
    name: "Wallpapers",
    href: "/dashboard/wallpapers",
    icon: (
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
        className="h-5 w-5"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
        <circle cx="9" cy="9" r="2"></circle>
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
      </svg>
    ),
  },
  {
    name: "Videos",
    href: "/dashboard/videos",
    icon: (
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
        className="h-5 w-5"
      >
        <path d="m14 12-8.5 5V7L14 12z"></path>
        <rect width="16" height="16" x="4" y="4" rx="2"></rect>
      </svg>
    ),
  },
  {
    name: "Music",
    href: "/dashboard/music",
    icon: (
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
        className="h-5 w-5"
      >
        <path d="M9 18V5l12-2v13"></path>
        <circle cx="6" cy="18" r="3"></circle>
        <circle cx="18" cy="16" r="3"></circle>
      </svg>
    ),
  },
  {
    name: "Bundles",
    href: "/dashboard/bundles",
    icon: (
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
        className="h-5 w-5"
      >
        <path d="m7.5 4.27 9 5.15"></path>
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
        <path d="m3.3 7 8.7 5 8.7-5"></path>
        <path d="M12 22V12"></path>
      </svg>
    ),
  },
]

const statsCards = [
  {
    title: "Total Revenue",
    value: "$12,628",
    trend: "up",
    trendValue: "12.5% from last month",
    icon: <CreditCard className="h-6 w-6 text-white" />,
    iconBg: "bg-[#393459]",
  },
  {
    title: "Total Orders",
    value: "1,429",
    trend: "up",
    trendValue: "8.2% from last month",
    icon: <ShoppingCart className="h-6 w-6 text-white" />,
    iconBg: "bg-[#ff5a7e]",
  },
  {
    title: "New Customers",
    value: "487",
    trend: "up",
    trendValue: "5.7% from last month",
    icon: <Users className="h-6 w-6 text-white" />,
    iconBg: "bg-[#393459]",
  },
  {
    title: "Refund Rate",
    value: "1.2%",
    trend: "down",
    trendValue: "0.3% from last month",
    icon: <Package className="h-6 w-6 text-white" />,
    iconBg: "bg-[#ff5a7e]",
  },
]

const contentTitles = [
  "Neon City Dreams",
  "Cherry Blossom Warrior",
  "Cosmic Mecha Battle",
  "Moonlit Samurai",
  "Futuristic Academy",
]
