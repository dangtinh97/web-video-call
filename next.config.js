/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  images: {
    domains: ['freesvg.org','e7.pngegg.com'],
  },
}

module.exports = nextConfig
