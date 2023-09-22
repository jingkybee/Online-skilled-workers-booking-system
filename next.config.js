const webpack = require('webpack'); // Import webpack

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'books.google.com',
      },
    ],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  webpack: (config) => { // Use an arrow function
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      })
    );
    return config;
  },
};

module.exports = nextConfig;
