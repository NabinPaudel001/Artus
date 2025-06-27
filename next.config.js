const config = require("./src/config/config.json");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "", // or remove if not using
  trailingSlash: false, // optional, based on your routing style
};

module.exports = nextConfig;

