/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
        domains: ['crictracker-admin-panel-local-dev-08032022.s3.ap-south-1.amazonaws.com', 'crictracker-admin-panel.s3.ap-south-1.amazonaws.com'],
    }
}

module.exports = nextConfig
