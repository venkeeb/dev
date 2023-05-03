/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [""],
    dangerouslyAllowSVG: true,
  },
  i18n: {
    locales: ["en-gb"],
    defaultLocale: "en-gb",
  },
}

module.exports = nextConfig
