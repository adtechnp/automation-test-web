import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['placehold.co']
  },
  output: 'export',
  distDirectory: 'build',
  trailingSlash: true,
  basePath: '/automation-test-web',
};

export default nextConfig;
