import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a fully static site in `out/` on `next build` — no Node server needed
  // at runtime, so it can be hosted on plain cPanel static hosting (HostPinnacle).
  output: "export",
  // Static export can't run the default Image Optimization server, so serve images
  // as-is (they load directly from the Unsplash CDN in the browser).
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/aida-public/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
