'use strict'

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#parseroptionsproject
    project: './tsconfig.json',
  },
  extends: [
    './js',
    'plugin:jsdoc/recommended-typescript',
    'standard-with-typescript',
  ],
  plugins: ['etc'],
  //   rules: {
  //     'no-use-before-define': 'off', // Types often are recursive & no use before define is too restrctive
  //     'etc/prefer-interface': 'error', // https://ncjamieson.com/prefer-interfaces/
  //     '@typescript-eslint/prefer-function-type': 'off', // conflicts with 'etc/prefer-interface'
  //   },
}
