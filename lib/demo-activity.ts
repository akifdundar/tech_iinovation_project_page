const CONTRIBUTIONS_KEY = 'decentralai-contributions'
const CAMPAIGNS_KEY = 'decentralai-demo-campaigns'

export interface Contribution {
  id: string
  campaignId: string
  campaignName: string
  fileName: string
  timestamp: string
  estimatedEarnings: number
}

export interface UserCampaign {
  id: string
  name: string
  category: string
  status: 'funding' | 'active'
  createdAt: string
}

export function addContribution(c: Omit<Contribution, 'id' | 'timestamp'>) {
  if (typeof window === 'undefined') return
  const all = getContributions()
  all.push({
    ...c,
    id: `contrib-${Date.now()}`,
    timestamp: new Date().toISOString(),
  })
  localStorage.setItem(CONTRIBUTIONS_KEY, JSON.stringify(all))
}

export function getContributions(): Contribution[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(CONTRIBUTIONS_KEY)
    return raw ? JSON.parse(raw) : []
  } catch { return [] }
}

export function getUserCampaigns(): UserCampaign[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(CAMPAIGNS_KEY)
    if (!raw) return []
    const campaigns = JSON.parse(raw)
    return campaigns.map((c: any, i: number) => ({
      id: (5 + i).toString(),
      name: c.name,
      category: c.category,
      status: c.status || 'funding',
      createdAt: c.createdAt || new Date().toISOString(),
    }))
  } catch { return [] }
}

export function getProfileStats() {
  const contributions = getContributions()
  const campaigns = getUserCampaigns()

  const uniqueModels = new Set(contributions.map(c => c.campaignId)).size
  const totalEarnings = contributions.reduce((sum, c) => sum + c.estimatedEarnings, 0)

  return {
    totalContributions: contributions.length,
    modelsContributed: uniqueModels,
    pendingEarnings: totalEarnings * 0.3,
    totalEarned: totalEarnings,
    campaignsCreated: campaigns.length,
  }
}
