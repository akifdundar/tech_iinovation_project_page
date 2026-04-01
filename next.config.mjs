import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const staticExport = process.env.STATIC_EXPORT === 'true'
const rawBase = (process.env.BASE_PATH || '').trim().replace(/\/$/, '')
const basePath = rawBase ? (rawBase.startsWith('/') ? rawBase : `/${rawBase}`) : undefined

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(staticExport ? { output: 'export' } : {}),
  ...(basePath ? { basePath } : {}),
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    const mockPath = path.resolve(__dirname, 'lib/dynamic-mock.tsx')
    config.resolve.alias = {
      ...config.resolve.alias,
      '@dynamic-labs/sdk-react-core': mockPath,
      '@dynamic-labs/ethereum': mockPath,
    }
    return config
  },
}

export default nextConfig
