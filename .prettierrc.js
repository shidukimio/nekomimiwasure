module.exports = {
  // XOの設定に合わせて設定
  trailingComma: 'all', // https://github.com/xojs/xo
  singleQuote: true, // https://github.com/xojs/xo

  // Prettierのデフォルト[always]を優先のデフォルト[true]を優先
  // 特に変更理由はないが、参考にしているソースのほとんどでスペースありのため
  // bracketSpacing: false, // https://github.com/xojs/xo

  jsxSingleQuote: true, // https://prettier.io/docs/en/options.html#jsx-quotes

  // Prettierのデフォルト[always]を優先
  // →コーディングする時の書き方が複数パターンあるのがわかりにくい
  // →実装コードが増えた時に実装しにくい
  // arrowParens: 'avoid', // https://meetup-jp.toast.com/3602
};
