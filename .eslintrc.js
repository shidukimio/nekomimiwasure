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
      files: [
        '*.ts',
        '*.tsx',
      ],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // https://zenn.dev/toshiyuki/articles/d2d8b53a9cbfa8
    'react/function-component-definition': [
      'error',
      {namedComponents: 'arrow-function'},
    ],
    'react/react-in-jsx-scope': 'off',
  },
};
