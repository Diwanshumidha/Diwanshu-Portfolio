/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    urlImports: ["https://themer.sanity.build/"],
  },
};

module.exports = nextConfig;
