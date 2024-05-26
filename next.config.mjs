/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['ko'],
    defaultLocale: 'ko',
  },
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