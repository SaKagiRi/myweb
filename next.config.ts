import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    webpack(config) {
    config.optimization.splitChunks = {
      chunks: 'all',
      maxSize: 2000000, // 2MB max chunk size
    };
    return config;
  },
    output: 'export',
};

module.exports = nextConfig;
//export default nextConfig;
