/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true
    },
    reactStrictMode: true,
    images:{
        domains:["lh3.googleusercontent.com","firebasestorage.googleapis.com"]
      }
}

module.exports = nextConfig
