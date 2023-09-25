'use strict'

const utils = require('./utils.js')
const markdown = require('./configs/markdown.js')

/** @type {import('eslint').Linter.Config} */
const config = {
  ignorePatterns: utils.ignorePatterns,
  overrides: [
    {
      files: ['*.js', '*.mjs', '*.cjs', '*.html'],
      extends: ['./configs/js', 'prettier'],
    },
    {
      files: ['*.ts'],
      excludedFiles: ['**/*.md/*.*'],
      extends: ['./configs/ts', 'prettier'],
    },
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      extends: ['./configs/json'],
    },
    {
      files: ['*.jsx'],
      extends: ['./configs/js', './configs/preact', 'prettier'],
    },

    {
      files: ['*.tsx'],
      excludedFiles: ['**/*.md/*.*'],
      extends: ['./configs/ts', './configs/preact', 'prettier'],
    },
    {
      files: ['*.yaml', '*.yml'],
      extends: ['plugin:yml/standard', 'plugin:yml/prettier'],
    },
    ...markdown.config,
  ],
}

module.exports = config
