'use strict'

module.exports = {
  overrides: [
    {
      files: ['*.js'],
      extends: ['./js', 'prettier'],
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: ['./ts', 'prettier'],
    },
  ],
}
