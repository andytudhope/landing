/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname:"127.0.0.1",
        port: "3001"
      },
      {
        protocol: "https",
        hostname:"kbx-landing.vercel.app",
      }
    ]
  }
};

export default nextConfig;
