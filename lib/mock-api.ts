const MOCK_RESPONSES: Record<number, string[]> = {
  0: [
    'Based on the medical literature in our knowledge base, the symptoms you described are commonly associated with respiratory tract infections. Treatment typically involves rest, hydration, and in some cases antibiotics if a bacterial infection is confirmed.',
    'According to recent clinical studies in our dataset, early intervention with targeted therapies has shown a 40% improvement in patient outcomes for this condition.',
    'The medical data suggests multiple potential causes. Diagnostic approaches include blood tests, imaging studies, and clinical assessment.',
  ],
  1: [
    'Based on the legal precedents in our database, this type of contract clause is generally enforceable under commercial law, with exceptions for unconscionable terms.',
    'The legal research indicates similar cases have been decided in favor of the plaintiff in approximately 65% of instances.',
    'According to our analysis of regulatory frameworks, compliance requirements for this area have been updated recently.',
  ],
  2: [
    'Based on our financial analysis models, market indicators suggest moderate growth for this sector over the next quarter.',
    'Historical data shows similar market conditions have preceded periods of volatility. Diversification is advisable.',
    'Our financial models indicate strong fundamentals with a P/E ratio below the industry average.',
  ],
  3: [
    'The research literature suggests this methodology has been validated across multiple studies with consistent results.',
    'Based on our academic database, recent breakthroughs have opened new avenues for investigation.',
    'Our research data indicates the proposed hypothesis aligns with current theoretical frameworks.',
  ],
  4: [
    'Based on the information available in our knowledge base, here is a comprehensive summary of the topic with key points.',
    'I have analyzed the relevant data and can provide insights across multiple dimensions.',
    'According to our general knowledge base, this is a well-documented subject with extensive literature.',
  ],
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

export async function mockQueryCampaign(campaignId: string, query: string) {
  await delay(800 + Math.random() * 1200)
  const id = parseInt(campaignId) % 5
  const responses = MOCK_RESPONSES[id] ?? MOCK_RESPONSES[4]!
  return {
    success: true,
    data: {
      answer: pick(responses),
      sources: [
        { chunkId: 'chunk-001', content: 'Relevant excerpt from training data...', fileName: 'training-data-v2.pdf', similarity: 0.89, chunkIndex: 3 },
        { chunkId: 'chunk-002', content: 'Additional context from supplementary materials...', fileName: 'supplementary-research.txt', similarity: 0.76, chunkIndex: 7 },
      ],
      metadata: {
        campaignId: parseInt(campaignId),
        totalSourcesFound: 2,
        processingTimeMs: 800 + Math.floor(Math.random() * 1200),
        modelUsed: 'demo-llm-v1',
      },
    },
  }
}

export async function mockContribute(campaignId: string, fileName: string) {
  await delay(500 + Math.random() * 500)
  return {
    success: true,
    message: 'File uploaded and queued for processing',
    data: {
      jobId: `demo-job-${Date.now()}`,
      campaignId: parseInt(campaignId),
      status: 'queued',
      fileName,
    },
    contributionId: `CONTRIB-${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
  }
}

export async function mockCreateCampaign(name: string, fileName: string) {
  await delay(600 + Math.random() * 600)
  return {
    success: true,
    message: 'Model campaign creation queued for processing',
    data: {
      jobId: `demo-campaign-job-${Date.now()}`,
      status: 'queued',
      fileName,
      campaignName: name,
    },
  }
}
