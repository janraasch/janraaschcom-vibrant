/** @type {import('next').NextConfig} */
const nextConfig = {}

if (process.env.NODE_ENV === 'production') {
  nextConfig.output = 'export'
}

export default nextConfig
