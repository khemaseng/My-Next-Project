import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {},

  // configure image
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shadcnblocks.com",
      },
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
      },
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
      {
        protocol: "https",
        hostname: "www.jones.com",
      },
      {
        protocol: "http",
        hostname: "www.jones.com",
      },
    ],
  },
};

export default nextConfig;
