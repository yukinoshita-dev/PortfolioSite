export const siteData = {
  name: 'Yuu Kinoshita',
  nameJp: '木下 悠',
  email: 'yukinoshita.free@gmail.com',
  github: 'https://github.com/yukinoshita-dev',
  location: '福島県郡山市',
  status: '案件募集中',

  about: `C# / .NET を中心に、フロントエンド・データベース・クラウドまで幅広く対応できるエンジニアです。要件整理・設計・実装・運用まで、上流から実装まで一貫してお任せいただけます。

2018年から業務システム開発に8年携わり、自治体向けシステム・社内ツール・Excel自動化など、規模を問わずさまざまな開発を経験してきました。

2024年10月にフリーランスとして独立。小さな改修から新規開発まで、まずはお気軽にご相談ください。`,

  stats: [
    { num: '8+', label: '年間の業務開発経験' },
    { num: 'FS',  label: 'フルスタック対応（Backend / Frontend / Cloud）' },
    { num: 'DX',  label: 'レガシー刷新・パッケージ移行の実績' },
    { num: 'Cloud', label: 'Microsoft Azure 認定資格取得 / AWS' },
  ],

  skills: [
    { category: 'Backend',  name: 'C# / VB.NET (.NET)',      level: 92, label: 'Expert' },
    { category: 'Backend',  name: 'Node.js / TypeScript',    level: 78, label: 'Advanced' },
    { category: 'AI Dev',   name: 'AI-Driven Development',   level: 78, label: 'Advanced' },
    { category: 'Frontend', name: 'HTML / CSS / Bootstrap',  level: 85, label: 'Expert' },
    { category: 'Frontend', name: 'JavaScript',              level: 85, label: 'Expert' },
    { category: 'Frontend', name: 'Next.js / React',         level: 75, label: 'Advanced' },
    { category: 'Database', name: 'Oracle / SQL Server',     level: 88, label: 'Expert' },
    { category: 'Database', name: 'PostgreSQL',              level: 78, label: 'Advanced' },
    { category: 'Cloud',    name: 'Azure (AZ-400)',          level: 72, label: 'Advanced' },
    { category: 'Cloud',    name: 'AWS',                     level: 62, label: 'Intermediate' },
    { category: 'DevOps',   name: 'GitHub Actions / CI/CD',  level: 75, label: 'Advanced' },
  ],

  works: [
    {
      num: '001',
      title: '業務システム開発（業務委託・継続中）',
      desc: '複数クライアントと業務委託契約にて、C# / .NET による業務系システムの設計・開発・テストを担当。要件定義から実装・運用まで一気通貫で対応中。既存システムの機能追加・改修から新規開発まで幅広く対応。',
      tags: ['C# / .NET', 'VB.NET', 'Oracle', 'SQL Server', 'PostgreSQL'],
      link: '',
      linkLabel: 'Closed',
    },
    {
      num: '002',
      title: '他社パッケージ移行・DX推進支援',
      desc: 'クライアントの基幹システムを他社パッケージへ移行する支援を担当。業務フロー分析・要件整理から移行設計・テストまで一貫対応。データ移行件数 数万件規模。並行してペーパーレス化など DX推進提案も実施。',
      tags: ['C# / .NET', 'PostgreSQL', 'DX推進', '要件定義'],
      link: '',
      linkLabel: 'Closed',
    },
    {
      num: '003',
      title: '社内業務効率化ツール開発',
      desc: '申請・承認フローをシステム化し、月30時間超の手作業工数を削減。業務改善効果が評価され社内表彰受賞。Excel VBAによるデータ集計自動化も並行実施し、集計作業を1/10以下に短縮。',
      tags: ['C# / .NET', 'VBA', 'SQL Server', '業務改善'],
      link: '',
      linkLabel: 'Closed',
    },
    {
      num: '004',
      title: '自治体向け業務システム開発・統括',
      desc: '複数自治体向け業務システムの開発・保守を6年間担当。社内システム統括リーダーとして設計方針策定・レガシーシステムのモダン化を推進。新人エンジニア向け技術研修の講師も兼務。',
      tags: ['C# / .NET', 'VB.NET', 'Oracle', 'SQL Server', 'Azure'],
      link: '',
      linkLabel: 'Closed',
    },
    {
      num: '005',
      title: 'Excelマクロ・VBAによる業務自動化',
      desc: '請求書作成・勤怠集計・データ転記など定型業務をExcel VBAで自動化。複数シートをまたぐ集計処理や外部システムとのデータ連携マクロを構築。担当者の作業時間を週8時間以上削減した実績あり。',
      tags: ['VBA', 'Excel', '業務自動化', 'マクロ開発'],
      link: '',
      linkLabel: 'Closed',
    },
    {
      num: '006',
      title: 'Windows Serverインフラ構築・運用',
      desc: '社内および顧客向けWindows Server環境の構築・運用管理を4年間担当。Active Directory・IIS・ファイルサーバーの設計から障害対応・定期保守まで一貫して対応。',
      tags: ['Windows Server', 'Active Directory', 'IIS', 'Azure'],
      link: '',
      linkLabel: 'Closed',
    },
    {
      num: '007',
      title: 'Oracleデータベース設計・チューニング',
      desc: '自治体向け業務システムのOracle DB論理・物理設計を担当。インデックス最適化・実行計画分析によるクエリチューニングで、処理時間を大幅短縮した実績あり。8年間にわたり実務で設計・保守を継続。',
      tags: ['Oracle', 'SQL', 'DB設計', 'チューニング'],
      link: '',
      linkLabel: 'Closed',
    },
    {
      num: '008',
      title: 'WPFデスクトップアプリケーション',
      desc: 'MVVMパターンを採用したWPFアプリを個人開発。データバインディング・コマンドパターンによる設計で、保守性の高いデスクトップツールを実装。C# 8年の知見を活かした実用的なツール。',
      tags: ['C# / .NET', 'WPF', 'MVVM', 'SQLite'],
      link: '',
      linkLabel: 'Private',
    },
    {
      num: '009',
      title: 'Webアプリケーション開発（個人）',
      desc: 'Ruby on Railsを用いた個人開発Webアプリ。MVC設計・RESTful API実装・PostgreSQLでのデータ設計まで一貫して構築。フロントはBootstrap + JavaScriptで実装。',
      tags: ['Ruby on Rails', 'PostgreSQL', 'Bootstrap', 'JavaScript'],
      link: '',
      linkLabel: 'Private',
    },
    {
      num: '010',
      title: 'Portfolio Site',
      desc: '本サイト。AI駆動開発を前提に、訴求設計・実装・レビュー・改善を短いサイクルで回すためのポートフォリオ。Next.js 静的エクスポート × GitHub Pages で公開し、GitHub Actions による自動デプロイまで整備。',
      tags: ['AI-Driven Dev', 'Next.js', 'TypeScript', 'GitHub Pages', 'GitHub Actions'],
      link: 'https://yu-engineer.dev/',
      linkLabel: 'Portfolio',
    },
    {
      num: '011',
      title: '営業車両管理システム',
      desc: '営業車両の管理を効率化するシチュエーションのWEBシステム。AI駆動開発を前提に、訴求設計・実装・レビュー・改善を短いサイクルで回すためのポートフォリオ。Next.js 静的エクスポート × フロントエンドを AWS Amplify バックエンドを AWS Lambda で公開し、GitHub Actions による自動デプロイまで整備。',
      tags: ['AI-Driven Dev', 'Next.js', 'TypeScript', 'AWS Amplify', 'AWS Lambda', 'Neon(PostgreSQL)', 'GitHub Actions'],
      link: 'https://cardelivery.yu-engineer.dev/',
      linkLabel: 'Portfolio',
    },
  ],

  experience: [
    {
      period: '2026.1 —\n現在',
      role: 'フリーランスエンジニア（業務委託）',
      company: '複数クライアント',
      desc: '複数クライアントと業務委託契約を締結。C# / .NET による業務系システム開発を担当。要件定義・設計・実装・テストまで一貫対応中。',
    },
    {
      period: '2024.10 —\n2026.3',
      role: 'フリーランスエンジニア（個人受託）',
      company: 'フリーランス独立',
      desc: '独立後、前職クライアントとの個人受託契約にて業務システム開発を継続。他社パッケージへの移行支援・DX推進提案を担当。',
    },
    {
      period: '2018.4 —\n2024.9',
      role: 'フルスタックエンジニア / システム統括',
      company: '株式会社福島情報処理センター',
      desc: '自治体向け業務システム開発をメインに、デスクトップアプリ・Webシステム双方を担当。社内システム統括リーダー・QMS委員会リーダーとして設計方針策定・品質管理を主導。郡山ハッカソン優勝、社内業務効率化で社内表彰受賞。新人技術研修講師も兼務。',
    },
    {
      period: '2014.4 —\n2018.3',
      role: 'コンピュータ系学科 卒業',
      company: '福島大学 理工学群（コンピュータ系専攻）',
      desc: '',
    },
  ],
  hero: {
    bgText: '',
    counter: '[ 01 / 05 ]',
    eyebrow: 'AI-Driven Engineer — 業務システム改善 / レガシー刷新',
    tagline: '相手の立場に寄り添いながら進める設計と改善の推進力',
    stack: 'C# / TypeScript / AI Dev',
  },

  contact: {
    headingEm: 'お気軽に',
    headingRest: 'ご相談ください',
    sub: '小さな修正・Excel自動化・新規開発など、どんな内容でもお気軽にご相談ください。',
  },

  nav: [
    { label: '技術スタック', href: 'skills' },
    { label: '実績',         href: 'works' },
    { label: '経歴',         href: 'experience' },
    { label: '自己紹介',     href: 'about' },
    { label: 'お問い合わせ', href: 'contact' },
  ],
} as const
