module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // https://zenn.dev/toshiyuki/articles/d2d8b53a9cbfa8
  extends: [
    // https://zenn.dev/januswel/articles/402774d76424e71ac906
    'react-app',
    'react-app/jest',
    'plugin:react/recommended',
    'xo',
    // https://github.com/xojs/eslint-config-xo-space
    'xo-space',
    // https://github.com/xojs/eslint-config-xo-react
    'xo-react',
    'xo-react/space',
  ],
  overrides: [
    {
      extends: [
        // https://github.com/xojs/eslint-config-xo-typescript
        'xo-typescript',
        'xo-typescript/space',
      ],
      files: ['*.ts', '*.tsx'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // https://zenn.dev/toshiyuki/articles/d2d8b53a9cbfa8
    'react/function-component-definition': [
      'error',
      {namedComponents: 'arrow-function'},
    ],
    'react/react-in-jsx-scope': 'off',

    // フォーマッタ(Prettier)要因でチェックOFF
    'react/jsx-tag-spacing': 'off',

    // 個人的な設定
    'capitalized-comments': 'off', // コメントの最初の文字の大文字化を強制または禁止する→コメントの書き方を強制されたくない
    'no-warning-comments': 'off', // コメントで指定された警告用語(TODO等)を許可しない→コメントの書き方を強制されたくない
    yoda: ['error', 'never', {onlyEquality: true}], // 「ヨーダ」条件を要求または禁止する→不等号の向きは揃えたいのでイコールの時だけ有効にする
    'arrow-parens': ['error', 'always'], // Prettierのデフォルト[always]を優先
    'arrow-body-style': ['error', 'always'], // 省略せずに{}とreturnを記載する→書き方が複数あるのがわかりにくい、機能拡張した時の変化点が大きい
  },
};
