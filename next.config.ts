import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/Cars-Website",
  assetPrefix: "/Cars-Website/",

  images: {
    unoptimized: true,
  },
};


export default nextConfig;
