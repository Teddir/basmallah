/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole:
      process.env.NODE_ENV == "production" ? { exclude: ["error"] } : false,
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    GOOGLE_VERIF_DOMAIN_ID: process.env.GOOGLE_VERIF_DOMAIN_ID,
  },
};

export default nextConfig;
