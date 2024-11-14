/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
      return [
        {
          source: '/:path*',
          destination: '/:path*',
        },
        {
          source: '/:path*',
          destination: '/404',
        },
      ]
    },
  }
  
  export default nextConfig;