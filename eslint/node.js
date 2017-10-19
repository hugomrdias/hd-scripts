'use strict';

module.exports = {
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'script'
    },
    plugins: ['import', 'no-use-extend-native', 'unicorn'],
    extends: [
        './index.js',
        'plugin:import/recommended',
        'plugin:unicorn/recommended'
    ],
    rules: {
        'no-use-extend-native/no-use-extend-native': 2,
        'import/default': 2,
        'import/export': 2,
        'import/extensions': [2, { js: 'never' }],
        'import/first': 2,
        'import/no-unassigned-import': 0,
        'import/named': 2,
        'import/namespace': [2, { allowComputed: true }],
        'import/no-absolute-path': 2,
        'import/no-webpack-loader-syntax': 2,
        'import/newline-after-import': 2,
        'import/no-amd': 2,
        'import/no-duplicates': 2,
        'import/no-extraneous-dependencies': 2,
        'import/no-mutable-exports': 1,
        'import/no-named-as-default-member': 2,
        'import/no-named-as-default': 2,
        'import/no-unresolved': [2, { commonjs: true }],
        'import/order': 1,
        'import/prefer-default-export': 1,
        'import/imports-first': 2,
        'import/max-dependencies': 0,
        'import/no-anonymous-default-export': 0,
        'import/no-named-default': 2,
        'import/no-commonjs': 0,
        'import/no-deprecated': 0,
        'import/no-restricted-paths': 0,
        'import/no-dynamic-require': 1,
        'import/no-internal-modules': 0,
        'import/no-namespace': 0,
        'import/no-nodejs-modules': 0
    }
};
