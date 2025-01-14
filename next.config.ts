import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["imagedelivery.net"], // Add Cloudflare image delivery domain
  },
};

export default nextConfig;
