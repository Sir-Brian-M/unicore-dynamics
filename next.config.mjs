/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "payafterdelivery.co.ke",
      },
      {
        protocol: "https",
        hostname: "totochap.com",
      },
      {
        protocol: "https",
        hostname: "www.polyplay.co.ke",
      },
    ],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

};

export default nextConfig;
