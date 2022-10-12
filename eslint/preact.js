'use strict'

module.exports = {
  overrides: [
    {
      files: ['*.js', '*.mjs'],
      extends: ['./js', './_preact.js', 'prettier'],
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: ['./ts', 'prettier'],
    },
  ],
}
