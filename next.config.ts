import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Empty turbopack config to acknowledge Turbopack is being used
  // The '@' alias is already configured in tsconfig.json
  turbopack: {},
};

export default nextConfig;
