import { createContext, useContext, useEffect, useState } from 'react'

const T = {
  en: {
    resume: '/assets/P.HARIKRISHNAN Resume.pdf',
    nav: {
      about: 'about',
      projects: 'projects',
      experience: 'experience',
      credentials: 'credentials',
      contact: 'contact',
      menu: 'menu',
    },
    hero: {
      status: 'open to interesting problems — tokyo, japan',
      nameKana: '',
      roles: ['AI Application Engineer', 'RAG Engineer', 'Full Stack Developer', 'ML Systems Builder'],
      pitch:
        'I build AI systems that ship — Retrieval-Augmented Generation pipelines and LLM-powered applications at Thirdwave Corporation, with a full-stack background across web and mobile.',
      viewWork: 'view work',
      downloadCv: 'download cv',
      kbdPre: 'press',
      kbdPost: 'to navigate',
      termTitle: 'hari@thirdwave — zsh',
      script: [
        { type: 'cmd', text: 'whoami' },
        { type: 'out', text: 'Harikrishnan P — AI Application Engineer @ Thirdwave Corporation 🇯🇵' },
        { type: 'cmd', text: 'cat ./current-focus', pause: 500 },
        { type: 'out', text: '▸ RAG pipelines · LLM workflows · production AI systems' },
        { type: 'cmd', text: 'uptime --career', pause: 500 },
        { type: 'out', text: 'AI dev @ Tokyo since 2025 · 10 projects · 16 credentials' },
      ],
    },
    about: {
      title: 'About',
      cmd: 'cat ./about.md',
      modulesCmd: 'modules --loaded',
      p1: [
        "I'm an AI Application Engineer in the Digital Innovation Division at ",
        'Thirdwave Corporation, Tokyo',
        ', where I build Retrieval-Augmented Generation systems and intelligent applications. With hands-on experience across AI, web, and mobile, I specialize in building solutions that are technically robust and genuinely pleasant to use.',
      ],
      p2: 'Before Tokyo: a B.Tech in Information Technology from MSEC, internships in software development and networking, and real products shipped for real organizations while still a student.',
      trustedBy: 'trusted by',
      moduleNames: {
        'ai.development': 'ai.development',
        'web.development': 'web.development',
        'mobile.apps': 'mobile.apps',
      },
      modules: {
        'ai.development': 'RAG pipelines and intelligent applications powered by large language models.',
        'web.development': 'Fast, responsive, scalable web applications built at a professional level.',
        'mobile.apps': 'Cross-platform mobile applications with clean UI and smooth UX.',
      },
    },
    projects: {
      title: 'Selected Work',
      cmd: 'ls ./projects --filter=',
      filters: { all: 'all', web: 'web', mobile: 'mobile' },
      workBadge: 'work',
      titles: {},
      desc: {
        'regs-qa': 'RAG-powered internal AI chatbot answering questions about company regulations, used across Thirdwave (Dec 2025).',
        't-atlas': 'File management system for internal operations — proof of concept in active development (2026).',
        digixcare: 'AI telemedicine app: CLIP image analysis + BioGPT symptom understanding, LLaMA consistency checks, and BioClinicalBERT severity triage — ~87% diagnosis accuracy.',
        eyenavi: 'Android version of the "Eye Navi" walking-navigation iOS app, built on secondment at Computer Science Laboratory, Kitakyushu.',
        adminxpert: 'Administrative management platform with custom workflows powering day-to-day school operations.',
        examcell: 'Examination cell management system used by Meenakshi Sundararajan Engineering College.',
        empoweringvoters: 'Voter education and awareness platform with interactive learning features.',
        nestsecurity: 'Cross-platform security and monitoring app for The Nest School campus.',
        serviceregister: 'Digital service registration and tracking system for operational management.',
        medscan: 'Medical document scanning and intelligent management application.',
      },
    },
    experience: {
      title: 'Experience',
      cmd: 'cat ./experience.log',
      eduCmd: 'cat ./education.log',
      current: 'current',
      items: {
        'Thirdwave Corporation': {
          role: 'AI Application Engineer · Digital Innovation Div. 3',
          place: 'Tokyo, Japan 🇯🇵',
          points: [
            'Built the internal regulations Q&A system — a RAG-powered AI chatbot for company-wide use (Dec 2025).',
            'Developing "T-ATLAS", a file management system PoC for internal operations (Jun 2026 — present).',
            'Seconded to Computer Science Laboratory (Kitakyushu) to build the Android version of the "Eye Navi" navigation app (Jul–Sep 2026).',
          ],
        },
        'The Nest School': {
          role: 'Software Development Intern',
          place: 'Chennai, India',
          points: [
            'Solved operational problems through custom web application development.',
            'Designed and shipped websites facilitating school operations and communication.',
            'Gathered requirements directly from educators and administrative staff.',
          ],
        },
        'Eagle-Tech IT Solutions': {
          role: 'Computer Networking Intern',
          place: 'Chennai, India',
          points: [
            'Assisted in setup and configuration of network hardware and software.',
            'Monitored network performance using Wireshark and Nagios.',
            'Documented configurations and created network diagrams.',
          ],
        },
      },
      edu: {
        'Meenakshi Sundararajan Engineering College': 'B.Tech Information Technology · CGPA 7.85',
        'Lalchand Milapchand Dadha Sr. Sec. School': 'AISSCE · Computer Science · 74.6%',
        'Jawahar Vidyalaya': 'AISSE · 66%',
      },
    },
    skills: {
      title: 'Skills',
      cmd: 'pkg list --installed',
      groups: {
        'ai & ml': 'ai & ml',
        languages: 'languages',
        frontend: 'frontend',
        'backend & db': 'backend & db',
        'mobile & tools': 'mobile & tools',
      },
    },
    credentials: {
      title: 'Credentials',
      cmds: { achievements: 'open ./achievements', certifications: 'open ./certifications' },
      achievements: 'achievements',
      certifications: 'certifications',
      filePrefix: { achievements: 'achievement', certifications: 'certification' },
    },
    carousel: {
      preview: 'preview',
      auto: 'auto',
    },
    contact: {
      title: 'Get In Touch',
      cmd: './contact --send',
      email: 'email',
      phone: 'phone',
      location: 'location',
      localTime: 'local time',
      locationValue: 'Tokyo, Japan 🇯🇵',
      fullname: 'full name',
      emailPh: 'email address',
      messagePh: 'your message…',
      send: 'send message',
      sending: 'sending…',
      error: 'error: something went wrong — try again',
      successTitle: 'message sent — exit 0',
      successBody: "Thanks for reaching out. I'll get back to you soon.",
      sendAnother: 'send another',
    },
    footer: {
      name: '© 2026 Harikrishnan P',
    },
    palette: {
      placeholder: 'type a command…',
      notFound: 'command not found:',
      goto: {
        about: 'go to: about',
        projects: 'go to: projects',
        experience: 'go to: experience',
        skills: 'go to: skills',
        credentials: 'go to: credentials',
        contact: 'go to: contact',
      },
      cv: 'download cv',
      email: 'copy email address',
      github: 'open github',
      linkedin: 'open linkedin',
      hintNav: '↑↓ navigate',
      hintRun: '↵ run',
      hintClose: 'esc close',
    },
  },

  ja: {
    resume: '/assets/Harikrishnan_Rirekisho.pdf',
    nav: {
      about: '自己紹介',
      projects: 'プロジェクト',
      experience: '経歴',
      credentials: '資格・実績',
      contact: 'お問い合わせ',
      menu: 'メニュー',
    },
    hero: {
      status: '面白い課題を探しています — 東京、日本',
      nameKana: 'ハリクリシュナン・P',
      roles: ['AIアプリケーションエンジニア', 'RAGエンジニア', 'フルスタック開発者', 'MLシステム構築者'],
      pitch:
        '株式会社サードウェーブグループ（東京）で、RAGパイプラインやLLMを活用したアプリケーションを開発しています。Webからモバイルまでのフルスタック経験を持ち、「実際に届くAIシステム」を作ることにこだわっています。',
      viewWork: '作品を見る',
      downloadCv: '履歴書をダウンロード',
      kbdPre: '',
      kbdPost: 'でナビゲート',
      termTitle: 'hari@サードウェーブ — zsh',
      script: [
        { type: 'cmd', text: 'whoami' },
        { type: 'out', text: 'ハリクリシュナン・P — AIアプリケーションエンジニア @ 株式会社サードウェーブグループ 🇯🇵' },
        { type: 'cmd', text: 'cat ./いまの注力分野', pause: 500 },
        { type: 'out', text: '▸ RAGパイプライン · LLMワークフロー · 本番AIシステム' },
        { type: 'cmd', text: 'cat ./経歴まとめ', pause: 500 },
        { type: 'out', text: '2025年〜 東京でAI開発 · プロジェクト10件 · 資格・実績16件' },
      ],
    },
    about: {
      title: '自己紹介',
      cmd: 'cat ./自己紹介.md',
      modulesCmd: 'ls ./できること',
      p1: [
        '',
        '株式会社サードウェーブグループ（東京）',
        'のデジタルイノベーション部で、AIアプリケーションエンジニアとしてRAG（検索拡張生成）システムやインテリジェントなアプリケーションの開発に携わっています。AI・Web・モバイル領域での実務経験を活かし、技術力と使いやすさを両立したソリューションの構築を得意としています。',
      ],
      p2: '東京に来る前は、MSECで情報技術の学士号（B.Tech）を取得。ソフトウェア開発とネットワークのインターンシップを経験し、学生時代から実在の組織のためにプロダクトを開発・納品してきました。',
      trustedBy: '信頼いただいている組織',
      moduleNames: {
        'ai.development': 'AI開発',
        'web.development': 'Web開発',
        'mobile.apps': 'モバイルアプリ開発',
      },
      modules: {
        'ai.development': '大規模言語モデルを活用したRAGパイプラインとインテリジェントなアプリケーションの構築。',
        'web.development': '高速・レスポンシブでスケーラブルなWebアプリケーションをプロフェッショナル水準で開発。',
        'mobile.apps': 'クリーンなUIと滑らかなUXを備えたクロスプラットフォームのモバイルアプリ開発。',
      },
    },
    projects: {
      title: '制作実績',
      cmd: 'ls ./プロジェクト --絞り込み=',
      filters: { all: 'すべて', web: 'Web', mobile: 'モバイル' },
      workBadge: '実務',
      titles: {
        'regs-qa': '社内規定QAシステム',
        't-atlas': 'T-ATLAS',
        eyenavi: 'Eye Navi（Android版）',
      },
      desc: {
        'regs-qa': 'RAGを活用した社内向けAIチャットボット。社内規定に関する質問に回答（2025年12月）。',
        't-atlas': '社内業務向けファイル管理システムの概念実証（PoC）。現在開発中（2026年）。',
        digixcare: 'AI遠隔医療アプリ。CLIPによる画像解析とBioGPTによる症状分析を組み合わせ、LLaMAで整合性を検証、BioClinicalBERTで重症度を分類（診断精度 約87%）。',
        eyenavi: '株式会社コンピュータサイエンス研究所（北九州市）への出向で担当する、iOSナビアプリ「Eye Navi」のAndroid版開発。',
        adminxpert: '学校運営の日常業務を支える、カスタムワークフロー付き管理プラットフォーム。',
        examcell: 'Meenakshi Sundararajan Engineering College で使用されている試験管理システム。',
        empoweringvoters: 'インタラクティブな学習機能を備えた有権者教育・啓発プラットフォーム。',
        nestsecurity: 'The Nest School キャンパス向けのクロスプラットフォーム警備・監視アプリ。',
        serviceregister: '業務管理のためのデジタルサービス登録・追跡システム。',
        medscan: '医療文書のスキャンとインテリジェント管理アプリケーション。',
      },
    },
    experience: {
      title: '職務経歴',
      cmd: 'cat ./職務経歴.log',
      eduCmd: 'cat ./学歴.log',
      current: '現職',
      items: {
        'Thirdwave Corporation': {
          company: '株式会社サードウェーブグループ',
          role: 'AIアプリケーションエンジニア · デジタルイノベーション３部',
          place: '東京、日本 🇯🇵',
          points: [
            '「社内規定QAシステム」を開発 — RAGを活用した社内向けAIチャットボット（2025年12月）。',
            '「T-ATLAS」（ファイル管理システム・PoC）を開発中（2026年6月〜現在）。',
            '株式会社コンピュータサイエンス研究所（北九州市）に出向し、iOSナビアプリ「Eye Navi」のAndroid版開発を担当（2026年7月〜9月）。',
          ],
        },
        'The Nest School': {
          company: 'The Nest School（ザ・ネスト・スクール）',
          role: 'ソフトウェア開発インターン',
          place: 'チェンナイ、インド',
          points: [
            'カスタムWebアプリケーション開発による業務課題の解決。',
            '学校運営とコミュニケーションを支援するWebサイトの設計・公開。',
            '教職員への直接ヒアリングによる要件定義とソリューション提供。',
          ],
        },
        'Eagle-Tech IT Solutions': {
          company: 'Eagle-Tech ITソリューションズ',
          role: 'ネットワークインターン',
          place: 'チェンナイ、インド',
          points: [
            'ネットワーク機器・ソフトウェアの設置と設定を支援。',
            'WiresharkとNagiosによるネットワーク性能の監視。',
            '構成のドキュメント化とネットワーク図の作成。',
          ],
        },
      },
      edu: {
        'Meenakshi Sundararajan Engineering College': '情報技術学士（B.Tech）· CGPA 7.85',
        'Lalchand Milapchand Dadha Sr. Sec. School': 'AISSCE · コンピュータサイエンス · 74.6%',
        'Jawahar Vidyalaya': 'AISSE · 66%',
      },
    },
    skills: {
      title: 'スキル',
      cmd: 'ls ./スキル一覧',
      groups: {
        'ai & ml': 'AI・機械学習',
        languages: 'プログラミング言語',
        frontend: 'フロントエンド',
        'backend & db': 'バックエンド・DB',
        'mobile & tools': 'モバイル・ツール',
      },
    },
    credentials: {
      title: '資格・実績',
      cmds: { achievements: 'open ./実績', certifications: 'open ./資格' },
      achievements: '実績',
      certifications: '資格',
      filePrefix: { achievements: '実績', certifications: '資格' },
    },
    carousel: {
      preview: 'プレビュー',
      auto: '自動再生',
    },
    contact: {
      title: 'お問い合わせ',
      cmd: './お問い合わせ --送信',
      email: 'メール',
      phone: '電話',
      location: '所在地',
      localTime: '現地時間',
      locationValue: '東京、日本 🇯🇵',
      fullname: 'お名前',
      emailPh: 'メールアドレス',
      messagePh: 'メッセージをどうぞ…',
      send: '送信する',
      sending: '送信中…',
      error: 'エラー：送信に失敗しました。もう一度お試しください。',
      successTitle: '送信完了 — exit 0',
      successBody: 'お問い合わせありがとうございます。できるだけ早くご返信いたします。',
      sendAnother: 'もう一度送信する',
    },
    footer: {
      name: '© 2026 ハリクリシュナン・P',
    },
    palette: {
      placeholder: 'コマンドを入力…',
      notFound: 'コマンドが見つかりません:',
      goto: {
        about: '移動: 自己紹介',
        projects: '移動: プロジェクト',
        experience: '移動: 経歴',
        skills: '移動: スキル',
        credentials: '移動: 資格・実績',
        contact: '移動: お問い合わせ',
      },
      cv: '履歴書をダウンロード',
      email: 'メールアドレスをコピー',
      github: 'GitHubを開く',
      linkedin: 'LinkedInを開く',
      hintNav: '↑↓ 移動',
      hintRun: '↵ 実行',
      hintClose: 'esc 閉じる',
    },
  },
}

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const stored = localStorage.getItem('lang')
    if (stored === 'en' || stored === 'ja') return stored
    return navigator.language?.startsWith('ja') ? 'ja' : 'en'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}

export function useT() {
  const { lang } = useContext(LangContext)
  return T[lang]
}
