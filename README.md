# 🌐 Bipinのウェブポートフォリオ — Node.js & EJS

Node.jsとEJSを使用したサーバーサイドレンダリング（SSR）ポートフォリオサイトです。
Web開発の学習成果・制作物・技術スキルを紹介しています。

[![ライブデモ](https://img.shields.io/badge/ライブデモ-公開中-brightgreen)](https://memoapp-8eb2.onrender.com)
[![Node.js](https://img.shields.io/badge/Node.js-ランタイム-green)](https://nodejs.org)
[![Express.js](https://img.shields.io/badge/Express.js-フレームワーク-lightgrey)](https://expressjs.com)
[![License](https://img.shields.io/badge/ライセンス-MIT-blue)](#)

---

## 📸 プレビュー

> ライブサイトはこちら：[https://memoapp-8eb2.onrender.com](https://memoapp-8eb2.onrender.com)

---

## ✨ 主な機能

- **サーバーサイドレンダリング（SSR）** — EJSによる高速・SEOフレンドリーなページ生成
- **レスポンシブデザイン** — CSS FlexboxとGridを使用し、スマートフォン・PC両対応
- **再利用可能なパーシャル** — ナビゲーションバー・フッターをEJSコンポーネントとして分離
- **動的ルーティング** — Express.jsによるシンプルで拡張しやすいルーティング設計
- **CI/CDデプロイ** — `main`ブランチへのプッシュで自動的にRenderへデプロイ
- **Gitによるバージョン管理** — GitHubで開発履歴を管理

---

## 🛠 使用技術

| カテゴリ             | 技術                          |
|----------------------|-------------------------------|
| ランタイム           | Node.js                       |
| フレームワーク       | Express.js                    |
| テンプレートエンジン | EJS（Embedded JavaScript）    |
| スタイリング         | CSS3（Flexbox & Grid）        |
| デプロイ             | Render（CI/CD）               |
| バージョン管理       | Git / GitHub                  |

---

## 📁 ディレクトリ構成

```
portfolio/
├── views/                  # EJSテンプレート
│   ├── partials/
│   │   ├── navbar.ejs      # 共通ナビゲーションバー
│   │   └── footer.ejs      # 共通フッター
│   └── index.ejs           # メインポートフォリオページ
├── public/                 # 静的ファイル
│   ├── css/                # スタイルシート
│   └── images/             # 画像・アイコン
├── app.js                  # Expressサーバーのエントリーポイント
└── package.json            # 依存関係
```

---

## 🚀 ローカルでの実行方法

### 必要な環境
- [Node.js](https://nodejs.org/) v18 以上
- npm（Node.jsに同梱）

### セットアップ手順

```bash
# 1. リポジトリをクローン
git clone https://github.com/Blon11-ux/portfolio.git

# 2. プロジェクトフォルダに移動
cd portfolio

# 3. 依存パッケージをインストール
npm install

# 4. 開発サーバーを起動
node app.js
```

起動後、ブラウザで `http://localhost:3000` を開いてください。

---

## 🌍 デプロイについて

このプロジェクトは **[Render](https://render.com)** にデプロイされており、CI/CDにより自動デプロイを実現しています。  
`main`ブランチへプッシュするたびに自動的に最新版が反映されます。

**公開URL：** [https://memoapp-8eb2.onrender.com](https://memoapp-8eb2.onrender.com)

---

## 👤 作者

**Bipin**  
email: [blontamang4@gmail.com]  
GitHub：[@Blon11-ux](https://github.com/Blon11-ux)  

---

## 📄 ライセンス

このプロジェクトは MITライセンス のもとで公開されています。
