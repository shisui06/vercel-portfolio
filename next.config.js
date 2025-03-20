const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].css',
        chunkFilename: 'static/css/[id].css',
      })
    );
    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["assets.aceternity.com"],
  },
}

module.exports = nextConfig; 