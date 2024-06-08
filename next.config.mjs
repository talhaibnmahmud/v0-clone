const isDev = process.env.NODE_ENV !== "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: { fetches: { fullUrl: isDev } },
};

export default nextConfig;
