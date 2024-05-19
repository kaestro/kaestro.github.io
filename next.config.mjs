/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:slug/:id',
        destination: '/routing-page/:id',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;