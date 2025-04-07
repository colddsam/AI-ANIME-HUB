import Image from "next/image"

export default function RecentSales() {
  return (
    <div className="space-y-8">
      {recentSales.map((sale, index) => (
        <div key={index} className="flex items-center">
          <div className="relative h-10 w-10 rounded-full overflow-hidden">
            <Image src={sale.avatar || "/placeholder.svg"} alt={sale.customer} fill className="object-cover" />
          </div>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium text-[#fdeff0]">{sale.customer}</p>
            <p className="text-sm text-[#fdeff0]/60">{sale.email}</p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-sm font-medium text-[#fdeff0]">${sale.amount.toFixed(2)}</p>
            <p className="text-sm text-[#fdeff0]/60">{sale.date}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

const recentSales = [
  {
    customer: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: 19.99,
    date: "Just now",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    customer: "Jackson Lee",
    email: "jackson.lee@email.com",
    amount: 24.99,
    date: "2 hours ago",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    customer: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: 14.99,
    date: "3 hours ago",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    customer: "William Kim",
    email: "william.kim@email.com",
    amount: 29.99,
    date: "5 hours ago",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    customer: "Sofia Rodriguez",
    email: "sofia.rodriguez@email.com",
    amount: 9.99,
    date: "Yesterday",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

