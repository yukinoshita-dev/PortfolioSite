import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio — Fukushima Full-Stack Engineer',
  description:
    '福島県在住のフリーランスエンジニア。TypeScript / Node.js / AWS を軸に業務システム開発からクラウドインフラまで対応。',
  openGraph: {
    title: 'Portfolio — Fukushima Full-Stack Engineer',
    description: 'TypeScript / Next.js / AWS — 業務システム開発のフリーランスエンジニア',
    locale: 'ja_JP',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
