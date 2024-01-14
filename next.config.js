const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const developmentConfig = {
  basePath: '',
  reactStrictMode: true,
};

/** @type {import('next').NextConfig} */
const productionConfig = {
  output: 'export',
  basePath: '/9a8fc5ba-9b06-4e37-94d5-37fcd36eac7e',
  reactStrictMode: true,
  images: {
    loader: 'custom',
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  transpilePackages: ['next-image-export-optimizer'],
  env: {
    nextImageExportOptimizer_imageFolderPath: 'public/img',
    nextImageExportOptimizer_exportFolderPath: 'out',
    nextImageExportOptimizer_quality: '75',
    nextImageExportOptimizer_storePicturesInWEBP: 'true',
    nextImageExportOptimizer_exportFolderName: 'nextImageExportOptimizer',

    // If you do not want to use blurry placeholder images, then you can set
    // nextImageExportOptimizer_generateAndUseBlurImages to false and pass
    // `placeholder="empty"` to all <ExportedImage> components.
    nextImageExportOptimizer_generateAndUseBlurImages: 'true',

    // If you want to cache the remote images, you can set the time to live of the cache in seconds.
    // The default value is 0 seconds.
    nextImageExportOptimizer_remoteImageCacheTTL: '0',
  },
};

module.exports = isProd ? productionConfig : developmentConfig;
