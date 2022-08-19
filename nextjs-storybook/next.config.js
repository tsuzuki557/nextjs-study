/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // 最後のスラッシュが自動で付与されるようにする
  trailingSlash: true,
  // ベースパス
  // ref. https://nextjs.org/docs/api-reference/next.config.js/basepath
  basePath: '/docs',
  // エクスポート使用時にはnext/imageは使用できないため、画像最適化を無効化（unoptimized: true）する必要がある
  // ref. https://nextjs.org/docs/messages/export-image-api#why-this-error-occurred
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}

module.exports = nextConfig
