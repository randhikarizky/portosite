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
        destination: 'https://randhikar.notion.site/', // Ganti ke link asli Notion kamu
      },
      {
        source: '/portofolio/:path*',
        destination: 'https://randhikar.notion.site/:path*', // Untuk handle sub-path di Notion
      },
    ];
  },
};

module.exports = nextConfig;
