// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // React Strict Mode is recommended
  reactStrictMode: true,

  // Allowed dev origins for local development
  allowedDevOrigins: ["http://192.168.100.2:3000"],

  // Remote image domains
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
