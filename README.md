# LoL Beginner's Guide（栃木県eスポーツ部向け）

League of Legendsの基本を学ぶための、非公式・初心者向け静的Webサイトです。

## 主な機能

- ゲームの基本解説
- TOP / JG / MID / ADC(BOT) / SUPのロール解説
- 回答内容に応じたチャンピオン診断
- 10問の知識クイズと解説
- 用語集
- スマートフォン対応のレイアウト

## ファイル構成

```text
lol-beginner-guide/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── champion-diagnosis.js
│   └── knowledge-quiz.js
├── data/
└── guides/
```

`data/` と `guides/` は、今後チャンピオンデータや解説ページを分割して増やすためのフォルダです。初期版では、解説とデータの一部をHTML・JavaScriptに記載しています。

## ローカルで確認する

`index.html` をブラウザで開いて動作確認できます。開発用サーバーを使う場合は、プロジェクトフォルダで次を実行してください。

```bash
python -m http.server 8000
```

ブラウザで `http://localhost:8000` を開きます。

## GitHub Pagesで公開する

1. GitHubで新しい **Public** リポジトリを作成します。
2. このフォルダ内のファイルをリポジトリのルートにアップロードします。
3. リポジトリの **Settings → Pages** を開きます。
4. **Build and deployment** の Source で `Deploy from a branch` を選択します。
5. Branchを `main`、フォルダを `/(root)` にして保存します。
6. 公開されたURLを開いて確認します。

## 編集時の注意

- GitHub Pagesは静的サイト向けです。ログイン、部員間の進捗同期、全員の成績集計は実装していません。
- この初期版は個人情報を収集せず、診断結果やクイズの回答をサーバーへ送信しません。
- 診断はプレイスタイルに基づく参考提案です。チャンピオンの強さや現在のメタを評価するものではありません。
- パッチで変更されやすい数値やアイテムビルドを避け、基本的な考え方を中心にしています。ただし、ゲームの基本仕様も将来変更される可能性があるため、定期的に内容を確認してください。
- Riot Gamesの名称・画像等を使う場合は、公式の法務・ファンコンテンツポリシーを確認してください。Riot Gamesの公式サイトと誤認されないよう、非公式サイトであることを明記してください。

## カスタマイズ

- 見出しや教材：`index.html`
- 色、余白、スマートフォン対応：`css/style.css`
- チャンピオン診断の質問と候補：`js/champion-diagnosis.js`
- クイズ問題：`js/knowledge-quiz.js`
