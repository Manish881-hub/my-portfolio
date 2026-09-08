import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    // Trim per-icon imports from these large packages
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
