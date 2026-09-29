import type { NextConfig } from "next";

/**
 * Static export for GitHub Pages: `next build` writes plain HTML/CSS/JS to `out/`.
 * Images are served as-is (no server-side optimizer on GitHub Pages).
 */
const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  images: { unoptimized: true },
};

export default nextConfig;
