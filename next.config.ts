import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // disable eslint
  eslint: {
    ignoreDuringBuilds: true,
  },
  // disable type checking
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
