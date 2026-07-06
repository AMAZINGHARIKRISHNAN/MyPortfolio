import { createContext, useContext, useEffect, useState } from 'react'

const T = {
  en: {
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
      roles: ['AI Software Developer', 'RAG Engineer', 'Full Stack Developer', 'ML Systems Builder'],
      pitch:
        'I build AI systems that ship — Retrieval-Augmented Generation pipelines and LLM-powered applications at Thirdwave Corporation, with a full-stack background across web and mobile.',
      viewWork: 'view work',
      downloadCv: 'download cv',
      kbdPre: 'press',
      kbdPost: 'to navigate',
    },
    about: {
      title: 'About',
      p1: [
        "I'm an AI Software Developer at ",
        'Thirdwave Corporation, Tokyo',
        ', where I work on Retrieval-Augmented Generation systems and intelligent applications. With hands-on experience across AI, web, and mobile, I specialize in building solutions that are technically robust and genuinely pleasant to use.',
      ],
      p2: 'Before Tokyo: a B.Tech in Information Technology from MSEC, internships in software development and networking, and real products shipped for real organizations while still a student.',
      trustedBy: 'trusted by',
      modules: {
        'ai.development': 'RAG pipelines and intelligent applications powered by large language models.',
        'web.development': 'Fast, responsive, scalable web applications built at a professional level.',
        'mobile.apps': 'Cross-platform mobile applications with clean UI and smooth UX.',
      },
    },
    projects: {
      title: 'Selected Work',
      filters: { all: 'all', web: 'web', mobile: 'mobile' },
      desc: {
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
      current: 'current',
      items: {
        'Thirdwave Corporation': {
          role: 'AI Software Developer',
          place: 'Tokyo, Japan 🇯🇵',
          points: [
            'Building Retrieval-Augmented Generation (RAG) pipelines for intelligent document and knowledge retrieval.',
            'Designing and integrating LLM-based workflows into production applications.',
            'Collaborating with cross-functional teams in Japan on cutting-edge AI projects.',
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
      achievements: 'achievements',
      certifications: 'certifications',
    },
    contact: {
      title: 'Get In Touch',
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
      roles: ['AIソフトウェア開発者', 'RAGエンジニア', 'フルスタック開発者', 'MLシステム構築者'],
      pitch:
        '株式会社サードウェーブグループ（東京）で、RAGパイプラインやLLMを活用したアプリケーションを開発しています。Webからモバイルまでのフルスタック経験を持ち、「実際に届くAIシステム」を作ることにこだわっています。',
      viewWork: '作品を見る',
      downloadCv: '履歴書をダウンロード',
      kbdPre: '',
      kbdPost: 'でナビゲート',
    },
    about: {
      title: '自己紹介',
      p1: [
        '',
        '株式会社サードウェーブグループ（東京）',
        'のAIソフトウェア開発者として、RAG（検索拡張生成）システムとインテリジェントなアプリケーションの開発に携わっています。AI・Web・モバイル領域での実践経験を活かし、技術的に堅牢で、使っていて心地よいソリューションづくりを得意としています。',
      ],
      p2: '東京に来る前は、MSECで情報技術の学士号（B.Tech）を取得。ソフトウェア開発とネットワークのインターンシップを経験し、学生時代から実在の組織のためにプロダクトを開発・納品してきました。',
      trustedBy: '信頼いただいている組織',
      modules: {
        'ai.development': '大規模言語モデルを活用したRAGパイプラインとインテリジェントなアプリケーションの構築。',
        'web.development': '高速・レスポンシブでスケーラブルなWebアプリケーションをプロフェッショナル水準で開発。',
        'mobile.apps': 'クリーンなUIと滑らかなUXを備えたクロスプラットフォームのモバイルアプリ開発。',
      },
    },
    projects: {
      title: '制作実績',
      filters: { all: 'すべて', web: 'Web', mobile: 'モバイル' },
      desc: {
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
      current: '現職',
      items: {
        'Thirdwave Corporation': {
          company: '株式会社サードウェーブグループ',
          role: 'AIソフトウェア開発者',
          place: '東京、日本 🇯🇵',
          points: [
            'ドキュメントやナレッジの高度な検索を実現するRAG（検索拡張生成）パイプラインの構築。',
            'LLMベースのワークフローを本番アプリケーションへ設計・統合。',
            '日本の部門横断チームと最先端AIプロジェクトで協働。',
          ],
        },
        'The Nest School': {
          role: 'ソフトウェア開発インターン',
          place: 'チェンナイ、インド',
          points: [
            'カスタムWebアプリケーション開発による業務課題の解決。',
            '学校運営とコミュニケーションを支援するWebサイトの設計・公開。',
            '教職員への直接ヒアリングによる要件定義とソリューション提供。',
          ],
        },
        'Eagle-Tech IT Solutions': {
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
      groups: {
        'ai & ml': 'AI & ML',
        languages: '言語',
        frontend: 'フロントエンド',
        'backend & db': 'バックエンド & DB',
        'mobile & tools': 'モバイル & ツール',
      },
    },
    credentials: {
      title: '資格・実績',
      achievements: '実績',
      certifications: '資格',
    },
    contact: {
      title: 'お問い合わせ',
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
      successTitle: 'message sent — exit 0',
      successBody: 'お問い合わせありがとうございます。できるだけ早くご返信いたします。',
      sendAnother: 'もう一度送信する',
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
