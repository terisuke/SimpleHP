# プロジェクト概要

このプロジェクトは、建築会社のウェブサイトを構築するためのものです。シンプルなデザインと基本的な会社情報、サービス、ポートフォリオ、お問い合わせフォームを含んでいます。

## ビルドとデプロイ

プロジェクトはNetlifyを使用してデプロイされます。ビルドプロセスはpackage.jsonに定義されたスクリプトを通じて行われます。

## ビルドスクリプト

ビルドプロセスは以下のコマンドで実行されます。

```
"build": "mkdir -p dist && node copy-files.js"
```

このコマンドは、distディレクトリを作成し、copy-files.jsスクリプトを使用してファイルをコピーします。distディレクトリはコピーから除外されます。

## ファイルコピーのスクリプト

copy-files.jsは、distディレクトリを除くすべてのファイルとディレクトリをdistにコピーするためのスクリプトです。このスクリプトはプロジェクトのルートディレクトリに配置されます。

## Netlify設定

Netlifyでのビルドとデプロイはnetlify.tomlファイルで管理されます。このファイルにはビルドコマンド、Node.jsのバージョン、公開ディレクトリの設定が含まれています。

## ローカルでのビルド方法

ローカル環境でビルドを実行するには、以下のコマンドを使用します。

```
npm run build
```

このコマンドはdistディレクトリを作成し、必要なファイルをコピーします。

## 依存関係のインストール

プロジェクトの依存関係をインストールするには、以下のコマンドを実行します。

```
npm install
```