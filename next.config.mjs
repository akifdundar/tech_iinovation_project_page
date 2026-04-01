import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
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
