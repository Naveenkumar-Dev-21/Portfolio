/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emits .next/standalone with a minimal server.js + only the node_modules
  // actually used, so the Docker runtime image stays small.
  output: 'standalone',
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig