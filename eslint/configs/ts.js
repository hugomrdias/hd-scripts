'use strict'

/** @type {import('eslint').Linter.Config} */
const config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: true,
  },
  extends: [
    './js',
    'plugin:import/typescript',
    'plugin:jsdoc/recommended-typescript',
    'standard-with-typescript',
  ],
  rules: {
    // import
    'import/extensions': ['error', 'never'],
  },
  settings: {
    'import/resolver': {
      node: { extensions: ['.ts', '.tsx', '.d.ts'] },
    },
    jsdoc: {
      mode: 'typescript',
    },
  },
}

module.exports = config
