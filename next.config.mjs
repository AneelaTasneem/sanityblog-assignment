/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Add your allowed domains here
  },
};

// Using export default for .mjs files
export default nextConfig;
