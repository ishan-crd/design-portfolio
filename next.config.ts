/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "github.com",
      "raw.githubusercontent.com",
      "images.unsplash.com",
      "via.placeholder.com",
      "picsum.photos",
      "localhost",
      // Add any other domains where your images are hosted
    ],
    // Alternative: use remotePatterns for more control
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
