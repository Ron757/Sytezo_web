import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // This will ignore ESLint errors during the build
  },
  typescript: {
    ignoreBuildErrors: true, // This will ignore TypeScript errors during the build
  },
};

export default nextConfig;
