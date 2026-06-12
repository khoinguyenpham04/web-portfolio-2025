import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const homepageDiscoveryLinks = [
  '</docs/agents>; rel="service-doc"; type="text/html"',
  '</llms.txt>; rel="service-meta"; type="text/markdown"',
].join(", ");

const nextConfig: NextConfig = {
  images: {
    // Workers has no built-in Next.js image optimizer; serve originals for now.
    // Upgrade path: Cloudflare Images binding + custom loader.
    unoptimized: true,
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
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Link",
            value: homepageDiscoveryLinks,
          },
        ],
      },
    ];
  },
};

export default nextConfig;

// Lets `next dev` access Cloudflare bindings (env.ASSETS etc.) so local dev
// and the Workers runtime behave the same. No-op in production builds.
initOpenNextCloudflareForDev();
