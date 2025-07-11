import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Disable ESLint blocking build
  },
  // Add other config options below if needed
};

export default nextConfig;
