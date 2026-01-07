import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // remotePatterns ska ligga inuti 'images'-objektet
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  }
};

export default nextConfig;