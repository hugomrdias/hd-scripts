'use strict';

module.exports = {
    extends: ['./react.js'],

    parser: 'babel-eslint',

    rules: {
        'react/no-unknown-property': [2, { ignore: ['class'] }],
        'react/prop-types': 0
    },
    settings: { react: { pragma: 'h' } }
};
