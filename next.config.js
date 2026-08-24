/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['pixner.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'async-atharv.com',
        pathname: '/**'
      }
    ]
  },
  swcMinify: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      },
      {
        source: '/og-image.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
          {
            key: 'X-Robots-Tag',
            value: 'index, follow'
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
