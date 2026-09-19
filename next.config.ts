import type { NextConfig } from "next";

/**
 * Dev requests proxied through the preview host arrive with a different Origin
 * than localhost, so the preview hostnames must be allowed explicitly.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["*.e2b.app", "*.arena.ai", "*.arena.dev"],
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
