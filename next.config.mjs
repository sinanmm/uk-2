import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: path.resolve('.'),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  }
};

export default nextConfig;
