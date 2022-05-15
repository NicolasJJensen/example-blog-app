/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['upload.wikimedia.org'],
  },
  experimental: { images: { layoutRaw: true } }
}

module.exports = nextConfig
