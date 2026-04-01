import { publicClient, CONTRACT_ADDRESS, CONTRACT_ABI, getCategoryName, type Campaign } from './contract'
import { formatUnits } from 'viem'

const DEMO_MODE = true

const categoryAvatars: Record<string, string> = {
  Medical: '/medical-ai-robot.jpg',
  Legal: '/legal-ai-scales-justice.jpg',
  Financial: '/financial-ai-chart-graph.jpg',
  Research: '/research-ai-microscope.jpg',
  General: '/general-ai-brain-network.jpg',
}

const SEED_CAMPAIGNS: Campaign[] = [
  {
    id: '0',
    name: 'MedicalAI Pro',
    description: 'Advanced medical diagnosis and treatment recommendation AI model trained on peer-reviewed medical literature.',
    owner: '0x742d35Cc6634C0532925a3b844Bc9e7595f2bD18',
    category: 'Medical',
    vectorDbCid: 'mock-uuid-medical-001',
    inputTokenPrice: 0.001,
    outputTokenPrice: 0.002,
    totalDataToken: 4500,
    totalRevenue: 125,
    status: 'active',
    avatar: '/medical-ai-robot.jpg',
  },
  {
    id: '1',
    name: 'LegalAI Assistant',
    description: 'Legal research and document analysis AI specializing in contract law, case precedents, and regulatory compliance.',
    owner: '0x8Ba1f109551bD432803012645Ac136ddd64DBA72',
    category: 'Legal',
    vectorDbCid: 'mock-uuid-legal-002',
    inputTokenPrice: 0.0015,
    outputTokenPrice: 0.003,
    totalDataToken: 3200,
    totalRevenue: 89,
    status: 'active',
    avatar: '/legal-ai-scales-justice.jpg',
  },
  {
    id: '2',
    name: 'FinancialAI Analyst',
    description: 'Financial market analysis and prediction model trained on historical market data and financial reports.',
    owner: '0x742d35Cc6634C0532925a3b844Bc9e7595f2bD18',
    category: 'Financial',
    vectorDbCid: 'mock-uuid-finance-003',
    inputTokenPrice: 0.002,
    outputTokenPrice: 0.004,
    totalDataToken: 2800,
    totalRevenue: 0,
    status: 'funding',
    avatar: '/financial-ai-chart-graph.jpg',
  },
  {
    id: '3',
    name: 'ResearchAI Scholar',
    description: 'Academic research assistant for literature review, hypothesis generation, and data analysis across scientific disciplines.',
    owner: '0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097',
    category: 'Research',
    vectorDbCid: 'mock-uuid-research-004',
    inputTokenPrice: 0.0008,
    outputTokenPrice: 0.0016,
    totalDataToken: 5100,
    totalRevenue: 210,
    status: 'active',
    avatar: '/research-ai-microscope.jpg',
  },
  {
    id: '4',
    name: 'GeneralAI Helper',
    description: 'General-purpose AI assistant for everyday tasks, writing, summarization, and knowledge queries.',
    owner: '0x742d35Cc6634C0532925a3b844Bc9e7595f2bD18',
    category: 'General',
    vectorDbCid: 'mock-uuid-general-005',
    inputTokenPrice: 0.0005,
    outputTokenPrice: 0.001,
    totalDataToken: 7800,
    totalRevenue: 340,
    status: 'active',
    avatar: '/general-ai-brain-network.jpg',
  },
]

const STORAGE_KEY = 'decentralai-demo-campaigns'

function loadCampaigns(): Campaign[] {
  if (typeof window === 'undefined') return SEED_CAMPAIGNS
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const extra: Campaign[] = JSON.parse(stored)
      return [...SEED_CAMPAIGNS, ...extra]
    }
  } catch {}
  return SEED_CAMPAIGNS
}

function saveNewCampaign(campaign: Campaign & { createdAt?: string }) {
  if (typeof window === 'undefined') return
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    const extra: any[] = stored ? JSON.parse(stored) : []
    extra.push({ ...campaign, createdAt: new Date().toISOString() })
    localStorage.setItem(STORAGE_KEY, JSON.stringify(extra))
  } catch {}
}

export class ContractService {
  static addDemoCampaign(data: {
    name: string
    description: string
    category: string
    owner: string
    inputTokenPrice: number
    outputTokenPrice: number
  }) {
    const all = loadCampaigns()
    const id = all.length.toString()
    const categoryName = data.category || 'General'
    const campaign: Campaign = {
      id,
      name: data.name,
      description: data.description,
      owner: data.owner,
      category: categoryName,
      vectorDbCid: `mock-uuid-${id}`,
      inputTokenPrice: data.inputTokenPrice,
      outputTokenPrice: data.outputTokenPrice,
      totalDataToken: 0,
      totalRevenue: 0,
      status: 'funding',
      avatar: categoryAvatars[categoryName] || categoryAvatars.General,
    }
    saveNewCampaign(campaign)
    return campaign
  }

  static async getCampaignCount(): Promise<number> {
    if (DEMO_MODE) return loadCampaigns().length

    try {
      const result = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'get_campaigns_length',
      })
      return Number(result)
    } catch (error) {
      console.error('Error fetching campaign count:', error)
      return 0
    }
  }

  static async getCampaign(campaignId: number): Promise<Campaign | null> {
    if (DEMO_MODE) return loadCampaigns()[campaignId] || null

    try {
      const result = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'getCampaign',
        args: [BigInt(campaignId)],
      })

      const [
        name,
        description,
        owner,
        categoryId,
        vectorDbCid,
        inTokenPrice,
        outTokenPrice,
        totalDataToken,
        totalRevenue
      ] = result

      const categoryName = getCategoryName(Number(categoryId))

      return {
        id: campaignId.toString(),
        name: name as string,
        description: description as string,
        owner: owner as string,
        category: categoryName,
        vectorDbCid: vectorDbCid as string,
        inputTokenPrice: Number(formatUnits(inTokenPrice as bigint, 6)),
        outputTokenPrice: Number(formatUnits(outTokenPrice as bigint, 6)),
        totalDataToken: Number(totalDataToken as bigint),
        totalRevenue: Number(formatUnits(totalRevenue as bigint, 6)),
        status: this.determineStatus(totalDataToken as bigint, totalRevenue as bigint),
        avatar: categoryAvatars[categoryName] || categoryAvatars.General,
      }
    } catch (error) {
      console.error(`Error fetching campaign ${campaignId}:`, error)
      return null
    }
  }

  static async getAllCampaigns(): Promise<Campaign[]> {
    if (DEMO_MODE) return loadCampaigns()

    try {
      const campaignCount = await this.getCampaignCount()
      const campaigns: Campaign[] = []

      const campaignPromises = Array.from({ length: campaignCount }, (_, i) =>
        this.getCampaign(i)
      )

      const results = await Promise.allSettled(campaignPromises)
      
      results.forEach((result) => {
        if (result.status === 'fulfilled' && result.value) {
          campaigns.push(result.value)
        }
      })

      return campaigns
    } catch (error) {
      console.error('Error fetching all campaigns:', error)
      return []
    }
  }

  private static determineStatus(totalDataToken: bigint, totalRevenue: bigint): 'active' | 'funding' | 'inactive' {
    if (totalRevenue > 0n) {
      return 'active'
    } else if (totalDataToken > 0n) {
      return 'funding'
    } else {
      return 'inactive'
    }
  }
}