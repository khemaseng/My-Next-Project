
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.shadcnspace.com",
      },
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
      {
        protocol: "https",
        hostname: "api.escuelajs.co",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
    ],
  },
};

export default nextConfig;