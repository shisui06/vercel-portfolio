const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.plugins.push(new MiniCssExtractPlugin());
    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["assets.aceternity.com"],
  },
}

module.exports = nextConfig; 