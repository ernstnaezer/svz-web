const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const developmentConfig = {
  basePath: '',
  reactStrictMode: true,
};

/** @type {import('next').NextConfig} */
const productionConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = isProd ? productionConfig : developmentConfig;
