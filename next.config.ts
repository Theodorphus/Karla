import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old slug used on karlacleaningcrew.se — permanent redirect to new canonical URL
      {
        source: '/hemstad',
        destination: '/hemstadning',
        permanent: true,
      },
      {
        source: '/hemstad/:path*',
        destination: '/hemstadning/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
