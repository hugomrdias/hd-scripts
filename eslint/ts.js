'use strict'

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: true,
  },
  extends: [
    './js',
    'plugin:jsdoc/recommended-typescript',
    'standard-with-typescript',
  ],
}
