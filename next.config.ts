// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },

  async rewrites() {
    const domain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
    return [
      {
        source: "/__/auth/:path*",
        destination: `https://${domain}/__/auth/:path*`,
      },
      {
        source: "/__/firebase/init.json",
        destination: `https://${domain}/__/firebase/init.json`,
      },
    ];
  },
};

export default nextConfig;
