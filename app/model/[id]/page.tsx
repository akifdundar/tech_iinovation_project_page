import ModelDetailClient from "./model-detail-client"

/** Pre-render model detail shells for static export (GitHub Pages). Client loads real data from mock/localStorage. */
export function generateStaticParams() {
  return Array.from({ length: 500 }, (_, i) => ({ id: String(i) }))
}

export default function ModelDetailPage({ params }: { params: { id: string } }) {
  return <ModelDetailClient campaignId={params.id} />
}
