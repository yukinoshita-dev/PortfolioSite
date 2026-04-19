export const siteData = {
  name: 'Yuu Kinoshita',
  nameJp: '木下 悠',
<<<<<<< HEAD
  email: 'yukinoshita.free@gmail.com',
  github: 'https://github.com/yukinoshita-dev',
=======
  email: 'hello@example.com',           // ← メールアドレスを設定
  github: 'https://github.com/yourusername', // ← GitHubアカウントを設定
>>>>>>> 7696c9290e125be82bc93da9108765291b054098
  location: '福島県',
  status: '案件募集中',

  about: `福島県を拠点に、2018年からフルスタックエンジニアとして活動。自治体向け業務システム開発を主軸に、社内システム統括・新人技術研修講師など幅広い役割を担ってきました。

2024年10月にフリーランスとして独立。業務システムの他社パッケージ移行、DX提案・推進、製造業向けシステムカスタマイズなど、上流から実装まで一気通貫で対応しています。

C# / .NET による業務系の設計力と、クラウドインフラ（AWS / Azure）の知見を活かし、レガシーシステムのモダン化から新規開発まで柔軟に対応できることが強みです。`,

  stats: [
    { num: '6+', label: '年間のフルスタック開発経験' },
    { num: '01', label: '自治体・製造業など業種を問わず対応' },
    { num: 'DX', label: 'レガシー刷新・パッケージ移行の実績' },
    { num: 'FL', label: '福島拠点・フルリモート対応' },
  ],

  skills: [
    { category: 'Backend',  name: 'C# / .NET (MVVM)',       level: 92, label: 'Expert' },
    { category: 'Backend',  name: 'Node.js / TypeScript',   level: 82, label: 'Advanced' },
    { category: 'Backend',  name: 'Hono / REST API',        level: 75, label: 'Advanced' },
    { category: 'Frontend', name: 'Next.js / React',        level: 78, label: 'Advanced' },
    { category: 'Frontend', name: 'HTML / CSS / JavaScript',level: 85, label: 'Expert' },
    { category: 'Database', name: 'Oracle / SQL Server',    level: 85, label: 'Expert' },
    { category: 'Database', name: 'PostgreSQL / Prisma',    level: 78, label: 'Advanced' },
    { category: 'Cloud',    name: 'AWS',                    level: 75, label: 'Advanced' },
    { category: 'Cloud',    name: 'Azure',                  level: 70, label: 'Advanced' },
    { category: 'DevOps',   name: 'GitHub Actions / CI/CD', level: 75, label: 'Advanced' },
  ],

  works: [
    {
      num: '001',
      title: 'WorkLog — 案件・稼働管理システム',
      desc: 'フリーランスエンジニア向けのSaaS型業務管理ツール。案件管理・稼働時間記録・請求書生成をフルTypeScriptで実装。AWS ECS Fargate + RDS PostgreSQL でスケーラブルなインフラを構築。',
      tags: ['Next.js', 'Hono', 'TypeScript', 'PostgreSQL', 'AWS ECS', 'Prisma'],
      link: '#',
      linkLabel: 'Demo',
    },
    {
      num: '002',
      title: '自治体向け業務システム（社内統括）',
      desc: '福島情報処理センター在籍中、自治体向け複数業務システムの開発・保守を担当。社内システム統括リーダーとして設計方針の策定、レガシーシステムの段階的モダン化も推進。新人エンジニア向け技術研修の講師も兼務。',
      tags: ['C# / .NET', 'MVVM', 'Oracle', 'SQL Server', 'Azure', 'AWS'],
      link: '#',
      linkLabel: 'Private',
    },
    {
      num: '003',
      title: '製造業向け業務システムカスタマイズ',
      desc: 'フリーランス独立後、製造業クライアントの基幹業務システムをカスタマイズ。他社パッケージへの移行支援とDX推進提案を並行して実施。業務フロー分析から実装・テストまで一貫対応。',
      tags: ['C# / .NET', 'PostgreSQL', 'Node.js', 'DX推進'],
      link: '#',
      linkLabel: 'Private',
    },
    {
      num: '004',
      title: 'Portfolio Site',
      desc: '本サイト。Next.js 静的エクスポート × GitHub Pages で公開。GitHub Actions による自動デプロイ、Tailwind CSS v4 によるインタラクション実装。',
      tags: ['Next.js', 'TypeScript', 'Tailwind v4', 'GitHub Pages', 'GitHub Actions'],
      link: 'https://github.com/yourusername/portfolio',
      linkLabel: 'GitHub',
    },
  ],

  experience: [
    {
      period: '2024.10 —\nPresent',
      role: 'Freelance Full-Stack Engineer',
      company: 'フリーランス独立 — 福島県',
      desc: '業務システムの他社パッケージ移行支援、DX提案・推進、製造業向け基幹システムカスタマイズを担当。上流の業務フロー分析・要件定義から実装・テスト・運用まで一貫して対応。クラウドインフラ（AWS / Azure）を活用したモダン化提案も実施。',
    },
    {
      period: '2018.4 —\n2024.9',
      role: 'Full-Stack Engineer / System Lead',
      company: '福島情報処理センター — 福島県',
      desc: '自治体向け業務システム開発をメインに、デスクトップアプリ・Webシステム双方を担当。社内システム統括リーダーとして設計方針策定・品質管理を主導。新人エンジニア向け技術研修の講師としてチーム育成にも貢献。C# / .NET / MVVM / Oracle / SQL Server / PostgreSQL / Azure / AWS / Node.js を実務で活用。',
    },
  ],
} as const
