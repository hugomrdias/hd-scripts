'use strict'

module.exports = {
  overrides: [
    {
      files: ['*.jsx'],
      extends: ['./js', './_preact.js', 'prettier'],
    },
    {
      files: ['*.tsx'],
      extends: ['./ts', './_preact.js', 'prettier'],
    },
    {
      files: ['*.js', '*.mjs', '*.cjs'],
      extends: ['./js', 'prettier'],
    },
    {
      files: ['*.ts'],
      extends: ['./ts', 'prettier'],
    },
  ],
}
