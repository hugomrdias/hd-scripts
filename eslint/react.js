'use strict';

module.exports = {
    plugins: ['react'],

    parser: 'babel-eslint',

    extends: ['./plugins.js', 'plugin:react/recommended'],

    rules: {
        'react/jsx-no-bind': 2,
        'react/no-did-update-set-state': 2,
        'react/no-redundant-should-component-update': 0,
        'react/prop-types': 1
    }
};
