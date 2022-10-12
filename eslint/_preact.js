'use strict'

// https://github.com/preactjs/eslint-config-preact
module.exports = {
  extends: ['plugin:react/jsx-runtime'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks'],
  settings: {
    react: {
      pragma: 'h',
      version: '17.0',
    },
  },
  rules: {
    /**
     * Preact / JSX rules
     */
    'react/no-deprecated': 2,
    'react/display-name': [1, { ignoreTranspilerName: false }],
    'react/jsx-no-bind': [
      1,
      {
        ignoreRefs: true,
        allowFunctions: true,
        allowArrowFunctions: true,
      },
    ],
    'react/jsx-no-comment-textnodes': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-target-blank': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-tag-spacing': [2, { beforeSelfClosing: 'always' }],
    'react/jsx-uses-vars': 2,
    'react/jsx-key': [2, { checkFragmentShorthand: true }],
    'react/self-closing-comp': 2,
    'react/prefer-es6-class': 2,
    'react/prefer-stateless-function': 1,
    'react/require-render-return': 2,
    'react/no-danger': 1,
    // Legacy APIs not supported in Preact:
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-find-dom-node': 2,
    'react/no-is-mounted': 2,
    'react/no-string-refs': 2,

    /**
     * Hooks
     */
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
