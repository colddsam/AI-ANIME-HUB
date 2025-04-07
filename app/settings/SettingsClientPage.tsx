"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Camera, CreditCard, Key, Lock, LogOut, Save, User, UserCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

export default function SettingsClientPage() {
  const [profileImage, setProfileImage] = useState("/placeholder.svg?height=200&width=200")

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#393459] to-[#2a2642] py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center mb-8">
          <Link href="/" className="inline-flex items-center text-[#fdeff0]/80 hover:text-[#ff5a7e]">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-[#fdeff0] ml-auto">Account Settings</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-[#2a2642]/80 border-[#fdeff0]/10 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="relative group mb-4">
                    <Avatar className="h-24 w-24 border-2 border-[#ff5a7e]">
                      <AvatarImage src={profileImage} alt="Profile" />
                      <AvatarFallback className="bg-[#393459] text-[#fdeff0]">JD</AvatarFallback>
                    </Avatar>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                      <Camera className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#fdeff0]">John Doe</h3>
                  <p className="text-sm text-[#fdeff0]/70">@anime_lover42</p>
                  <Badge className="mt-2 bg-[#ff5a7e]">Premium Member</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#2a2642]/80 border-[#fdeff0]/10 shadow-lg">
              <CardContent className="p-0">
                <TabsList className="flex flex-col w-full bg-transparent h-auto">
                  <TabsTrigger
                    value="profile"
                    className="justify-start px-6 py-3 data-[state=active]:bg-[#393459]/30 data-[state=active]:text-[#ff5a7e] rounded-none border-l-2 border-transparent data-[state=active]:border-[#ff5a7e]"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </TabsTrigger>
                  <TabsTrigger
                    value="account"
                    className="justify-start px-6 py-3 data-[state=active]:bg-[#393459]/30 data-[state=active]:text-[#ff5a7e] rounded-none border-l-2 border-transparent data-[state=active]:border-[#ff5a7e]"
                  >
                    <UserCircle className="h-4 w-4 mr-2" />
                    Account
                  </TabsTrigger>
                  <TabsTrigger
                    value="security"
                    className="justify-start px-6 py-3 data-[state=active]:bg-[#393459]/30 data-[state=active]:text-[#ff5a7e] rounded-none border-l-2 border-transparent data-[state=active]:border-[#ff5a7e]"
                  >
                    <Lock className="h-4 w-4 mr-2" />
                    Security
                  </TabsTrigger>
                  <TabsTrigger
                    value="billing"
                    className="justify-start px-6 py-3 data-[state=active]:bg-[#393459]/30 data-[state=active]:text-[#ff5a7e] rounded-none border-l-2 border-transparent data-[state=active]:border-[#ff5a7e]"
                  >
                    <CreditCard className="h-4 w-4 mr-2" />
                    Billing
                  </TabsTrigger>
                </TabsList>
              </CardContent>
            </Card>

            <Button
              variant="outline"
              className="w-full border-[#fdeff0]/20 text-[#fdeff0]/80 hover:bg-[#fdeff0]/10 hover:text-[#fdeff0]"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="profile" className="space-y-6">
            <TabsContent value="profile" className="space-y-6">
              <Card className="bg-[#2a2642]/80 border-[#fdeff0]/10 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#fdeff0]">Profile Information</CardTitle>
                  <CardDescription className="text-[#fdeff0]/70">Update your personal information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="first-name" className="text-[#fdeff0]">
                        First Name
                      </Label>
                      <Input
                        id="first-name"
                        defaultValue="John"
                        className="bg-[#393459]/30 border-[#fdeff0]/20 text-[#fdeff0] focus:border-[#ff5a7e] focus:ring-[#ff5a7e]/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name" className="text-[#fdeff0]">
                        Last Name
                      </Label>
                      <Input
                        id="last-name"
                        defaultValue="Doe"
                        className="bg-[#393459]/30 border-[#fdeff0]/20 text-[#fdeff0] focus:border-[#ff5a7e] focus:ring-[#ff5a7e]/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-[#fdeff0]">
                      Username
                    </Label>
                    <Input
                      id="username"
                      defaultValue="anime_lover42"
                      className="bg-[#393459]/30 border-[#fdeff0]/20 text-[#fdeff0] focus:border-[#ff5a7e] focus:ring-[#ff5a7e]/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#fdeff0]">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="john.doe@example.com"
                      className="bg-[#393459]/30 border-[#fdeff0]/20 text-[#fdeff0] focus:border-[#ff5a7e] focus:ring-[#ff5a7e]/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio" className="text-[#fdeff0]">
                      Bio
                    </Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell us about yourself"
                      defaultValue="Anime enthusiast and digital art collector. I love cyberpunk aesthetics and lofi music."
                      className="min-h-[120px] bg-[#393459]/30 border-[#fdeff0]/20 text-[#fdeff0] focus:border-[#ff5a7e] focus:ring-[#ff5a7e]/20"
                    />
                  </div>

                  <Button className="bg-[#ff5a7e] hover:bg-[#ff5a7e]/90 text-white">
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-[#2a2642]/80 border-[#fdeff0]/10 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#fdeff0]">Notification Preferences</CardTitle>
                  <CardDescription className="text-[#fdeff0]/70">Manage how you receive notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-[#fdeff0]">Email Notifications</h4>
                        <p className="text-sm text-[#fdeff0]/70">Receive updates about new content and promotions</p>
                      </div>
                      <Switch defaultChecked className="data-[state=checked]:bg-[#ff5a7e]" />
                    </div>

                    <Separator className="bg-[#fdeff0]/10" />

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-[#fdeff0]">Order Updates</h4>
                        <p className="text-sm text-[#fdeff0]/70">Receive notifications about your orders</p>
                      </div>
                      <Switch defaultChecked className="data-[state=checked]:bg-[#ff5a7e]" />
                    </div>

                    <Separator className="bg-[#fdeff0]/10" />

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-[#fdeff0]">New Content Alerts</h4>
                        <p className="text-sm text-[#fdeff0]/70">Get notified when new anime content is added</p>
                      </div>
                      <Switch defaultChecked className="data-[state=checked]:bg-[#ff5a7e]" />
                    </div>

                    <Separator className="bg-[#fdeff0]/10" />

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-[#fdeff0]">Community Activity</h4>
                        <p className="text-sm text-[#fdeff0]/70">
                          Notifications about comments and likes on your posts
                        </p>
                      </div>
                      <Switch className="data-[state=checked]:bg-[#ff5a7e]" />
                    </div>
                  </div>

                  <Button className="bg-[#ff5a7e] hover:bg-[#ff5a7e]/90 text-white">
                    <Save className="h-4 w-4 mr-2" />
                    Save Preferences
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="account" className="space-y-6">
              <Card className="bg-[#2a2642]/80 border-[#fdeff0]/10 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#fdeff0]">Account Information</CardTitle>
                  <CardDescription className="text-[#fdeff0]/70">Manage your account details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label className="text-[#fdeff0]">Account Type</Label>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-[#ff5a7e]">Premium</Badge>
                      <span className="text-sm text-[#fdeff0]/70">Renewed on April 15, 2025</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[#fdeff0]">Member Since</Label>
                    <p className="text-[#fdeff0]/70">January 10, 2025</p>
                  </div>

                  <Separator className="bg-[#fdeff0]/10" />

                  <div className="space-y-2">
                    <Label htmlFor="language" className="text-[#fdeff0]">
                      Language
                    </Label>
                    <select
                      id="language"
                      className="w-full h-10 px-3 py-2 bg-[#393459]/30 border border-[#fdeff0]/20 rounded-md text-[#fdeff0] focus:outline-none focus:ring-2 focus:ring-[#ff5a7e]/20 focus:border-[#ff5a7e]"
                    >
                      <option value="en">English</option>
                      <option value="jp">Japanese</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timezone" className="text-[#fdeff0]">
                      Timezone
                    </Label>
                    <select
                      id="timezone"
                      className="w-full h-10 px-3 py-2 bg-[#393459]/30 border border-[#fdeff0]/20 rounded-md text-[#fdeff0] focus:outline-none focus:ring-2 focus:ring-[#ff5a7e]/20 focus:border-[#ff5a7e]"
                    >
                      <option value="utc-8">Pacific Time (UTC-8)</option>
                      <option value="utc-5">Eastern Time (UTC-5)</option>
                      <option value="utc+0">Greenwich Mean Time (UTC+0)</option>
                      <option value="utc+9">Japan Standard Time (UTC+9)</option>
                    </select>
                  </div>

                  <Button className="bg-[#ff5a7e] hover:bg-[#ff5a7e]/90 text-white">
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-[#2a2642]/80 border-[#fdeff0]/10 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#fdeff0]">Danger Zone</CardTitle>
                  <CardDescription className="text-[#fdeff0]/70">Irreversible account actions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 border border-red-500/20 rounded-lg bg-red-500/5">
                    <h4 className="text-sm font-medium text-red-400 mb-2">Delete Account</h4>
                    <p className="text-sm text-[#fdeff0]/70 mb-4">
                      Once you delete your account, there is no going back. All your data will be permanently removed.
                    </p>
                    <Button variant="destructive" className="bg-red-500 hover:bg-red-600 text-white">
                      Delete Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <Card className="bg-[#2a2642]/80 border-[#fdeff0]/10 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#fdeff0]">Change Password</CardTitle>
                  <CardDescription className="text-[#fdeff0]/70">
                    Update your password to keep your account secure
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="current-password" className="text-[#fdeff0]">
                      Current Password
                    </Label>
                    <Input
                      id="current-password"
                      type="password"
                      placeholder="••••••••"
                      className="bg-[#393459]/30 border-[#fdeff0]/20 text-[#fdeff0] focus:border-[#ff5a7e] focus:ring-[#ff5a7e]/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="new-password" className="text-[#fdeff0]">
                      New Password
                    </Label>
                    <Input
                      id="new-password"
                      type="password"
                      placeholder="••••••••"
                      className="bg-[#393459]/30 border-[#fdeff0]/20 text-[#fdeff0] focus:border-[#ff5a7e] focus:ring-[#ff5a7e]/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password" className="text-[#fdeff0]">
                      Confirm New Password
                    </Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="••••••••"
                      className="bg-[#393459]/30 border-[#fdeff0]/20 text-[#fdeff0] focus:border-[#ff5a7e] focus:ring-[#ff5a7e]/20"
                    />
                  </div>

                  <Button className="bg-[#ff5a7e] hover:bg-[#ff5a7e]/90 text-white">
                    <Key className="h-4 w-4 mr-2" />
                    Update Password
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-[#2a2642]/80 border-[#fdeff0]/10 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#fdeff0]">Two-Factor Authentication</CardTitle>
                  <CardDescription className="text-[#fdeff0]/70">
                    Add an extra layer of security to your account
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-[#fdeff0]">Enable Two-Factor Authentication</h4>
                      <p className="text-sm text-[#fdeff0]/70">
                        Protect your account with an additional security layer
                      </p>
                    </div>
                    <Switch className="data-[state=checked]:bg-[#ff5a7e]" />
                  </div>

                  <div className="p-4 border border-[#fdeff0]/10 rounded-lg bg-[#393459]/20">
                    <p className="text-sm text-[#fdeff0]/70">
                      Two-factor authentication adds an extra layer of security to your account by requiring more than
                      just a password to sign in.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="billing" className="space-y-6">
              <Card className="bg-[#2a2642]/80 border-[#fdeff0]/10 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#fdeff0]">Subscription Plan</CardTitle>
                  <CardDescription className="text-[#fdeff0]/70">
                    Manage your subscription and billing details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 border border-[#fdeff0]/10 rounded-lg bg-[#393459]/20">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h4 className="text-sm font-medium text-[#fdeff0]">Premium Plan</h4>
                        <p className="text-sm text-[#fdeff0]/70">$9.99/month</p>
                      </div>
                      <Badge className="bg-[#ff5a7e]">Active</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-[#fdeff0]/70">
                      <p>Next billing date: April 15, 2025</p>
                      <p>Payment method: •••• •••• •••• 4242</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" className="border-[#fdeff0]/20 text-[#fdeff0] hover:bg-[#fdeff0]/10">
                      Change Plan
                    </Button>
                    <Button variant="outline" className="border-[#fdeff0]/20 text-[#fdeff0] hover:bg-[#fdeff0]/10">
                      Cancel Subscription
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#2a2642]/80 border-[#fdeff0]/10 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#fdeff0]">Payment Methods</CardTitle>
                  <CardDescription className="text-[#fdeff0]/70">Manage your payment methods</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-[#fdeff0]/10 rounded-lg bg-[#393459]/20">
                      <div className="flex items-center">
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
                      <Badge className="bg-[#393459]">Default</Badge>
                    </div>

                    <Button className="w-full bg-[#393459] hover:bg-[#393459]/80 text-[#fdeff0] border border-[#fdeff0]/20">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Add Payment Method
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#2a2642]/80 border-[#fdeff0]/10 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#fdeff0]">Billing History</CardTitle>
                  <CardDescription className="text-[#fdeff0]/70">View your past invoices and payments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border border-[#fdeff0]/10 rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-[#fdeff0]/10">
                      <thead className="bg-[#393459]/30">
                        <tr>
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
                            className="px-6 py-3 text-right text-xs font-medium text-[#fdeff0]/70 uppercase tracking-wider"
                          >
                            Invoice
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-[#2a2642]/50 divide-y divide-[#fdeff0]/10">
                        {[
                          { date: "Mar 15, 2025", description: "Premium Subscription", amount: "$9.99" },
                          { date: "Feb 15, 2025", description: "Premium Subscription", amount: "$9.99" },
                          { date: "Jan 15, 2025", description: "Premium Subscription", amount: "$9.99" },
                        ].map((invoice, index) => (
                          <tr key={index} className="hover:bg-[#393459]/20 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#fdeff0]">{invoice.date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#fdeff0]">
                              {invoice.description}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#fdeff0]">{invoice.amount}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-[#ff5a7e] hover:text-[#ff5a7e]/80 hover:bg-[#ff5a7e]/10"
                              >
                                Download
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

