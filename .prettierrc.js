module.exports = {
  // XOの設定に合わせて設定
  trailingComma: 'all', // https://github.com/xojs/xo
  singleQuote: true, // https://github.com/xojs/xo
  bracketSpacing: false, // https://github.com/xojs/xo
  jsxSingleQuote: true, // https://prettier.io/docs/en/options.html#jsx-quotes
  // Prettierのデフォルト[always]を優先
  // →コーディングする時の書き方が複数パターンあるのがわかりにくい
  // →実装コードが増えた時に実装しにくい
  // arrowParens: 'avoid', // https://meetup-jp.toast.com/3602
};
