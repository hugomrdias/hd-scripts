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
}
