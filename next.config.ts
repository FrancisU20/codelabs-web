import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: false,
  },
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
