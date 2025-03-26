import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'as2.ftcdn.net',
      port: '',
      pathname: '**'
    }, {
      protocol: 'https',
      hostname: 'res.cloudinary.com',
      port: '',
      pathname: '**'
    }, {
      protocol: 'https',
      hostname: 'utfs.io',
      port: '',
    }]
  },
};

export default nextConfig;
