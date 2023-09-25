'use strict'

const offRules = {
  'jsdoc/require-jsdoc': 'off',
  'react/prop-types': 'off',
}

exports.config = [
  {
    files: ['*.md'],
    extends: ['plugin:markdown/recommended'],
  },
  {
    files: ['**/*.md/*.*'],
    rules: offRules,
  },
  {
    files: ['**/*.md/*.ts', '**/*.md/*.tsx'],
    extends: [
      './configs/js',
      './configs/react',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
    rules: offRules,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
  },
]
