import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
<<<<<<< HEAD
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
=======
  output: 'export',          // GitHub Pages 用の静的エクスポート
  trailingSlash: true,       // GitHub Pages でのルーティング対応
  images: {
    unoptimized: true,       // 静的エクスポート時は画像最適化をオフ
  },
  // GitHub Pages でのベースパス設定（リポジトリ名に合わせて変更）
  // basePath: '/portfolio',
>>>>>>> 7696c9290e125be82bc93da9108765291b054098
}

export default nextConfig
