import { ArrowDown, ArrowUp, Download, Filter, Search, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export const metadata = {
  title: "Transactions | AI Anime Hub",
  description: "View and manage your transactions",
}

export default function TransactionsPage() {
  return (
    <div className="flex-1 md:ml-64 bg-gradient-to-b from-[#393459] to-[#2a2642] min-h-screen">
      {/* Header is included in the dashboard layout */}

      {/* Main Content */}
      <main className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-[#fdeff0] mb-1">Transactions</h1>
            <p className="text-[#fdeff0]/70">View and manage all your payment transactions</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-3">
            <Button
              variant="outline"
              className="flex items-center gap-2 border-[#fdeff0]/20 text-[#fdeff0] hover:bg-[#fdeff0]/10"
            >
              <Download className="h-4 w-4" />
              Export
            </Button>
            <Button className="bg-[#ff5a7e] hover:bg-[#ff5a7e]/90 text-white flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        {/* Transaction Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-[#2a2642]/80 border-[#fdeff0]/10 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#fdeff0]/70">Total Revenue</p>
                  <h3 className="text-2xl font-bold mt-1 text-[#fdeff0]">$24,563.82</h3>
                  <div className="flex items-center mt-1 text-sm text-green-400">
                    <ArrowUp className="h-4 w-4 mr-1" />
                    <span>+12.5% from last month</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-[#393459]">
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
                    className="h-6 w-6"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                    <line x1="2" x2="22" y1="10" y2="10"></line>
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#2a2642]/80 border-[#fdeff0]/10 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#fdeff0]/70">Pending Payments</p>
                  <h3 className="text-2xl font-bold mt-1 text-[#fdeff0]">$1,250.00</h3>
                  <div className="flex items-center mt-1 text-sm text-yellow-400">
                    <span>8 transactions pending</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-[#ff5a7e]">
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
                    className="h-6 w-6"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#2a2642]/80 border-[#fdeff0]/10 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#fdeff0]/70">Refunds</p>
                  <h3 className="text-2xl font-bold mt-1 text-[#fdeff0]">$345.20</h3>
                  <div className="flex items-center mt-1 text-sm text-red-400">
                    <ArrowDown className="h-4 w-4 mr-1" />
                    <span>-2.3% from last month</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-[#393459]">
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
                    className="h-6 w-6"
                  >
                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                    <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
                    <path d="M12 3v6"></path>
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transactions Table */}
        <Card className="bg-[#2a2642]/80 border-[#fdeff0]/10 shadow-lg mb-8">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-[#fdeff0]">Transaction History</CardTitle>
              <CardDescription className="text-[#fdeff0]/70">View all your payment transactions</CardDescription>
            </div>
            <Tabs defaultValue="all" className="w-[400px]">
              <TabsList className="bg-[#393459]/30">
                <TabsTrigger value="all" className="data-[state=active]:bg-[#ff5a7e] data-[state=active]:text-white">
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="completed"
                  className="data-[state=active]:bg-[#ff5a7e] data-[state=active]:text-white"
                >
                  Completed
                </TabsTrigger>
                <TabsTrigger
                  value="pending"
                  className="data-[state=active]:bg-[#ff5a7e] data-[state=active]:text-white"
                >
                  Pending
                </TabsTrigger>
                <TabsTrigger
                  value="refunded"
                  className="data-[state=active]:bg-[#ff5a7e] data-[state=active]:text-white"
                >
                  Refunded
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <div className="relative w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[#fdeff0]/50" />
                <Input
                  type="search"
                  placeholder="Search transactions..."
                  className="pl-8 bg-[#393459]/30 border-[#fdeff0]/20 text-[#fdeff0]"
                />
              </div>
              <div className="flex gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#fdeff0]/20 text-[#fdeff0] hover:bg-[#fdeff0]/10"
                    >
                      <Filter className="h-3.5 w-3.5 mr-2" />
                      Filter
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-[#2a2642] border-[#fdeff0]/10 text-[#fdeff0]">
                    <DropdownMenuItem className="focus:bg-[#fdeff0]/10 focus:text-[#fdeff0]">
                      Last 7 days
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-[#fdeff0]/10 focus:text-[#fdeff0]">
                      Last 30 days
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-[#fdeff0]/10 focus:text-[#fdeff0]">
                      Last 3 months
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-[#fdeff0]/10 focus:text-[#fdeff0]">
                      Custom range
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#fdeff0]/20 text-[#fdeff0] hover:bg-[#fdeff0]/10"
                    >
                      Sort: Newest
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-[#2a2642] border-[#fdeff0]/10 text-[#fdeff0]">
                    <DropdownMenuItem className="focus:bg-[#fdeff0]/10 focus:text-[#fdeff0]">Newest</DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-[#fdeff0]/10 focus:text-[#fdeff0]">Oldest</DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-[#fdeff0]/10 focus:text-[#fdeff0]">
                      Amount: High to Low
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-[#fdeff0]/10 focus:text-[#fdeff0]">
                      Amount: Low to High
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
                      Transaction ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-[#fdeff0]/70 uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-[#fdeff0]/70 uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-[#fdeff0]/70 uppercase tracking-wider"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-[#fdeff0]/70 uppercase tracking-wider"
                    >
                      Status
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
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="hover:bg-[#393459]/20 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#fdeff0]">#{transaction.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#fdeff0]">{transaction.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#fdeff0]">{transaction.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#fdeff0]">
                        ${transaction.amount.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            transaction.status === "Completed"
                              ? "bg-green-900/30 text-green-300"
                              : transaction.status === "Pending"
                                ? "bg-yellow-900/30 text-yellow-300"
                                : "bg-red-900/30 text-red-300"
                          }`}
                        >
                          {transaction.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[#fdeff0]/70 hover:text-[#fdeff0] hover:bg-[#fdeff0]/10"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-[#fdeff0]/70">Showing 1 to 10 of 50 entries</div>
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
          </CardContent>
        </Card>

        {/* Transaction Details */}
        <Card className="bg-[#2a2642]/80 border-[#fdeff0]/10 shadow-lg">
          <CardHeader>
            <CardTitle className="text-[#fdeff0]">Payment Methods</CardTitle>
            <CardDescription className="text-[#fdeff0]/70">View and manage your payment methods</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border border-[#fdeff0]/10 rounded-lg bg-[#393459]/20">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-6 bg-[#fdeff0]/10 rounded mr-4 flex items-center justify-center">
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
                      className="h-4 w-4 text-[#fdeff0]"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                      <line x1="2" x2="22" y1="10" y2="10"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-[#fdeff0]">Visa ending in 4242</h4>
                    <p className="text-xs text-[#fdeff0]/70">Expires 04/2026</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#fdeff0]/20 text-[#fdeff0] hover:bg-[#fdeff0]/10"
                  >
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="border-red-500/20 text-red-400 hover:bg-red-500/10">
                    Remove
                  </Button>
                </div>
              </div>

              <div className="p-4 border border-[#fdeff0]/10 rounded-lg bg-[#393459]/20">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-6 bg-[#fdeff0]/10 rounded mr-4 flex items-center justify-center">
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
                      className="h-4 w-4 text-[#fdeff0]"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                      <line x1="2" x2="22" y1="10" y2="10"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-[#fdeff0]">Mastercard ending in 8888</h4>
                    <p className="text-xs text-[#fdeff0]/70">Expires 12/2025</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#fdeff0]/20 text-[#fdeff0] hover:bg-[#fdeff0]/10"
                  >
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="border-red-500/20 text-red-400 hover:bg-red-500/10">
                    Remove
                  </Button>
                </div>
              </div>

              <div className="p-4 border border-[#fdeff0]/10 rounded-lg bg-[#393459]/20 border-dashed flex items-center justify-center">
                <Button className="bg-[#393459] hover:bg-[#393459]/80 text-[#fdeff0] border border-[#fdeff0]/20">
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
                    className="h-4 w-4 mr-2"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  Add Payment Method
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

const transactions = [
  {
    id: "TRX-1234",
    date: "Apr 05, 2025",
    description: "Premium Subscription",
    amount: 9.99,
    status: "Completed",
  },
  {
    id: "TRX-1233",
    date: "Apr 03, 2025",
    description: "Neon City Dreams Wallpaper",
    amount: 4.99,
    status: "Completed",
  },
  {
    id: "TRX-1232",
    date: "Apr 01, 2025",
    description: "Sakura Petals Video Loop",
    amount: 12.99,
    status: "Completed",
  },
  {
    id: "TRX-1231",
    date: "Mar 28, 2025",
    description: "Anime Bundle Pack",
    amount: 24.99,
    status: "Pending",
  },
  {
    id: "TRX-1230",
    date: "Mar 25, 2025",
    description: "Midnight Sakura Lofi",
    amount: 7.99,
    status: "Completed",
  },
  {
    id: "TRX-1229",
    date: "Mar 20, 2025",
    description: "Cosmic Mecha Battle Wallpaper",
    amount: 5.99,
    status: "Refunded",
  },
  {
    id: "TRX-1228",
    date: "Mar 15, 2025",
    description: "Premium Subscription",
    amount: 9.99,
    status: "Completed",
  },
  {
    id: "TRX-1227",
    date: "Mar 10, 2025",
    description: "Cherry Blossom Warrior Wallpaper",
    amount: 3.99,
    status: "Completed",
  },
  {
    id: "TRX-1226",
    date: "Mar 05, 2025",
    description: "Cyberpunk Street Scene Video",
    amount: 14.99,
    status: "Pending",
  },
  {
    id: "TRX-1225",
    date: "Mar 01, 2025",
    description: "Rainy Tokyo Beats Music",
    amount: 6.99,
    status: "Completed",
  },
]

