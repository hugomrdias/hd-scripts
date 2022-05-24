'use strict'

module.exports = {
  overrides: [
    {
      files: ['*.js'],
      extends: './js',
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: './ts',
    },
  ],
}
