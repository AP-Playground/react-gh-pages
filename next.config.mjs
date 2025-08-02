/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/react-gh-pages' : '',
  assetPrefix: isProd ? '/react-gh-pages/' : '',
  images: {
    unoptimized: true
  }
};


export default nextConfig;
