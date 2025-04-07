import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Trash2, Plus, Minus, CreditCard, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import RelatedProducts from "@/components/related-products"

export const metadata = {
  title: "Shopping Cart | AI Anime Hub",
  description: "View and manage your shopping cart",
}

export default function CartPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#393459] to-[#2a2642] py-16 px-4">
      <div className="container mx-auto">
        <div className="flex items-center mb-8">
          <Link href="/shop" className="inline-flex items-center text-[#fdeff0]/80 hover:text-[#ff5a7e]">
            <ArrowLeft className="h-4 w-4 mr-2" /> Continue Shopping
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-[#fdeff0] ml-auto">Your Cart</h1>
          <span className="ml-4 bg-[#ff5a7e] text-white px-2 py-1 rounded-full text-sm">3 Items</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card className="bg-[#2a2642] border-[#fdeff0]/10">
              <CardContent className="p-6">
                <div className="hidden md:grid md:grid-cols-12 text-[#fdeff0]/60 text-sm mb-4">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Total</div>
                </div>

                <Separator className="bg-[#fdeff0]/10 mb-6" />

                {cartItems.map((item, index) => (
                  <div key={index}>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                      <div className="col-span-6">
                        <div className="flex items-center">
                          <div className="relative h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="ml-4">
                            <h3 className="text-[#fdeff0] font-medium">{item.name}</h3>
                            <p className="text-[#fdeff0]/60 text-sm">{item.type}</p>
                            <button className="text-[#ff5a7e] text-sm flex items-center mt-1 hover:underline">
                              <Trash2 className="h-3.5 w-3.5 mr-1" /> Remove
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2 text-center text-[#fdeff0]">
                        <div className="md:hidden text-[#fdeff0]/60 text-sm mb-1">Price:</div>${item.price.toFixed(2)}
                      </div>
                      <div className="col-span-2 text-center">
                        <div className="md:hidden text-[#fdeff0]/60 text-sm mb-1">Quantity:</div>
                        <div className="flex items-center justify-center">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-l-md border-[#fdeff0]/20 text-[#fdeff0]"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <div className="h-8 w-10 flex items-center justify-center border-y border-[#fdeff0]/20 bg-[#393459]/30 text-[#fdeff0]">
                            {item.quantity}
                          </div>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-r-md border-[#fdeff0]/20 text-[#fdeff0]"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="col-span-2 text-right font-medium text-[#fdeff0]">
                        <div className="md:hidden text-[#fdeff0]/60 text-sm mb-1">Total:</div>$
                        {(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                    {index < cartItems.length - 1 && <Separator className="bg-[#fdeff0]/10 my-6" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="bg-[#2a2642] border-[#fdeff0]/10 sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-[#fdeff0] mb-4">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-[#fdeff0]/80">
                    <span>Subtotal</span>
                    <span className="text-[#fdeff0]">$38.97</span>
                  </div>
                  <div className="flex justify-between text-[#fdeff0]/80">
                    <span>Discount</span>
                    <span className="text-[#fdeff0]">-$5.00</span>
                  </div>
                  <div className="flex justify-between text-[#fdeff0]/80">
                    <span>Tax</span>
                    <span className="text-[#fdeff0]">$3.40</span>
                  </div>
                  <Separator className="bg-[#fdeff0]/10 my-3" />
                  <div className="flex justify-between font-bold">
                    <span className="text-[#fdeff0]">Total</span>
                    <span className="text-[#ff5a7e]">$37.37</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <h3 className="text-[#fdeff0] font-medium">Promo Code</h3>
                  </div>
                  <div className="flex gap-2">
                    <Input placeholder="Enter code" className="bg-[#393459] border-[#fdeff0]/20 text-[#fdeff0]" />
                    <Button variant="outline" className="border-[#fdeff0]/20 text-[#fdeff0] whitespace-nowrap">
                      Apply
                    </Button>
                  </div>
                </div>

                <Button className="w-full bg-[#ff5a7e] hover:bg-[#ff5a7e]/80 text-white py-6 mb-3">
                  <CreditCard className="h-5 w-5 mr-2" /> Proceed to Checkout
                </Button>

                <div className="flex items-center justify-center text-[#fdeff0]/60 text-sm">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  <span>Secure Checkout</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#fdeff0] mb-8 text-center">You May Also Like</h2>
          <RelatedProducts />
        </div>
      </div>
    </main>
  )
}

const cartItems = [
  {
    name: "Neon City Dreams",
    type: "Wallpaper • 4K",
    price: 4.99,
    quantity: 1,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Sakura Petals Loop",
    type: "Video • 15s Loop",
    price: 9.99,
    quantity: 2,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Midnight Sakura Lofi",
    type: "Music • MP3",
    price: 7.99,
    quantity: 1,
    image: "/placeholder.svg?height=400&width=600",
  },
]

