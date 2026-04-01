"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Coins, Activity, DollarSign, TrendingUp, Copy, Wallet, FileText, Rocket } from "lucide-react"
import { useDynamicContext } from "@dynamic-labs/sdk-react-core"
import { useState, useEffect } from "react"
import { getContributions, getUserCampaigns, getProfileStats, type Contribution, type UserCampaign } from "@/lib/demo-activity"
import Link from "next/link"

export function ProfileContent() {
  const { primaryWallet } = useDynamicContext()
  const [copied, setCopied] = useState(false)
  const [contributions, setContributions] = useState<Contribution[]>([])
  const [campaigns, setCampaigns] = useState<UserCampaign[]>([])
  const [stats, setStats] = useState({
    totalContributions: 0,
    modelsContributed: 0,
    pendingEarnings: 0,
    totalEarned: 0,
    campaignsCreated: 0,
  })

  useEffect(() => {
    setContributions(getContributions())
    setCampaigns(getUserCampaigns())
    setStats(getProfileStats())
  }, [])

  const copyAddress = async () => {
    if (primaryWallet?.address) {
      await navigator.clipboard.writeText(primaryWallet.address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const formatAddress = (address: string) => `${address.slice(0, 6)}...${address.slice(-4)}`
  const formatDate = (iso: string) => new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Profile</h1>
            <p className="text-muted-foreground">Manage your contributions, campaigns, and earnings</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground mb-1">Wallet Address</p>
            <div className="flex items-center gap-2">
              <code className="text-sm bg-muted px-2 py-1 rounded">
                {primaryWallet?.address ? formatAddress(primaryWallet.address) : "0x742d...bD18"}
              </code>
              <Button variant="outline" size="sm" onClick={copyAddress} className="h-8 px-2">
                <Copy className="h-3 w-3" />
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Balance Card */}
      <div className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wallet className="h-5 w-5" />
              Wallet Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-sm text-muted-foreground">Balance</p>
                <p className="text-2xl font-bold">$0.00</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pending Earnings</p>
                <p className="text-2xl font-bold text-green-600">${stats.pendingEarnings.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Earned</p>
                <p className="text-2xl font-bold">${stats.totalEarned.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Campaigns Created</p>
                <p className="text-2xl font-bold">{stats.campaignsCreated}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="contributions" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="contributions">My Contributions</TabsTrigger>
          <TabsTrigger value="campaigns">My Campaigns</TabsTrigger>
        </TabsList>

        {/* Contributions Tab */}
        <TabsContent value="contributions" className="space-y-6">
          {/* Stats Row */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Contributions</CardTitle>
                <Coins className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalContributions}</div>
                <p className="text-xs text-muted-foreground">Files contributed</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Models Contributed</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.modelsContributed}</div>
                <p className="text-xs text-muted-foreground">Unique models</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Earnings</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${stats.pendingEarnings.toFixed(2)}</div>
                <p className="text-xs text-muted-foreground">Awaiting distribution</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Earned</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${stats.totalEarned.toFixed(2)}</div>
                <p className="text-xs text-muted-foreground">All-time earnings</p>
              </CardContent>
            </Card>
          </div>

          {/* Contribution List */}
          {contributions.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No contributions yet</h3>
                <p className="text-muted-foreground mb-4">
                  Start earning by contributing data to AI models
                </p>
                <Link href="/app">
                  <Button>Browse Models</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Contribution History</CardTitle>
                <CardDescription>Your data contributions to AI models</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Model</TableHead>
                      <TableHead>File</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Est. Earnings</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contributions.map((c) => (
                      <TableRow key={c.id}>
                        <TableCell className="font-medium">{c.campaignName}</TableCell>
                        <TableCell className="text-muted-foreground">{c.fileName}</TableCell>
                        <TableCell>{formatDate(c.timestamp)}</TableCell>
                        <TableCell className="text-green-600 font-medium">${c.estimatedEarnings}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Campaigns Tab */}
        <TabsContent value="campaigns" className="space-y-6">
          {campaigns.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <Rocket className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No campaigns created yet</h3>
                <p className="text-muted-foreground mb-4">
                  Launch your own AI model campaign and start receiving data contributions
                </p>
                <Link href="/app">
                  <Button>Create Campaign</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6">
              {campaigns.map((campaign) => (
                <Card key={campaign.id}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{campaign.name}</CardTitle>
                      <Badge
                        variant="secondary"
                        className={
                          campaign.status === "active"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400"
                        }
                      >
                        {campaign.status === "active" ? "Active" : "Funding"}
                      </Badge>
                    </div>
                    <CardDescription>{campaign.category} AI Model</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Category</p>
                        <p className="text-lg font-semibold">{campaign.category}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Created</p>
                        <p className="text-lg font-semibold">{formatDate(campaign.createdAt)}</p>
                      </div>
                      <div>
                        <Link href={`/model/${campaign.id}`}>
                          <Button variant="outline" size="sm">View Campaign</Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
