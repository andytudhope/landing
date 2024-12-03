/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname:"127.0.0.1",
        port: "3000"
      },
      {
        protocol: "http",
        hostname:"localhost",
        port: "3000"
      },
      {
        protocol: "https",
        hostname:"kbx-landing.vercel.app",
      }
    ]
  },
  async redirects() {
    return [
      {
        source: "/:path(.*)", // Match all paths except root
        has: [
          {
            type: "query",
            key: "path",
            value: ".+",
          },
        ], 
        destination: "https://read.kernel.community/:path*",
        permanent: true, 
      },
    ];
  },
};

export default nextConfig;
