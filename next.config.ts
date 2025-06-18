/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false, // change to true if it's a 301 redirect
      },
    ]
  },
}

module.exports = nextConfig
