/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gamesadda.in',
      },
      {
        protocol: 'https',
        hostname: 'wstatic-prod-boc.krafton.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'wallpapers.com',
      },
    ],
  },
};

export default nextConfig;
