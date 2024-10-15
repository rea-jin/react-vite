# React + Vite
<br>
npm create vite@latest my-react-app -- --template react
<br>
npm create vite@latest my-react-app
<br>
これは、npm create コマンドを使って、vite@latest のプロジェクトテンプレートを使い、新しいプロジェクト my-react-app を作成するコマンドです。vite の最新バージョンを取得してプロジェクトを作成します。
<br>
--
<br>
-- は、コマンドの引数部分とその後に続くオプションや引数の区切りとして使われます。
npm コマンドでは、-- の後に記述されたオプションや引数は、実際のスクリプト（ここでは Vite）に渡されます。
<br>
--template react
<br>
--template react は、Vite に渡される引数で、テンプレートとして React を使用することを指定しています。これにより、Reactプロジェクトとしてセットアップされます。
<br>

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
