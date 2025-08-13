/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  async rewrites() {
    return [
      {
        source: '/portofolio',
        destination: 'https://randhikar.notion.site',
      },
      {
        source: '/portofolio/:path*',
        destination: 'https://randhikar.notion.site/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
