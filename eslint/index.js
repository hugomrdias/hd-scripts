'use strict'

module.exports = {
  overrides: [
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
