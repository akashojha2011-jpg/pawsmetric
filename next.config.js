/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'pawsmetric.com' }],
        destination: 'https://www.pawsmetric.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

