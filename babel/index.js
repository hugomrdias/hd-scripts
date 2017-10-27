'use strict';

// https://fatfisz.com/blog/using-babelrc-js-today

// The last step was to configure .babelrc properly:
// {
//     "presets": ["./.babelrc.js"]
//   }
module.exports = {
    presets: [
        [
            'env',
            {
                targets: {
                    ie: 9,
                    uglify: true
                },
                exclude: [
                    'transform-regenerator',
                    'transform-es2015-typeof-symbol'
                ],
                useBuiltIns: false,
                modules: false,
                debug: false,
                loose: true
            }
        ]
    ],
    plugins: [
        [
            require.resolve('babel-plugin-transform-runtime'),
            {
                helpers: true,
                polyfill: false,
                regenerator: false
            }
        ],
        [
            require.resolve('babel-plugin-transform-object-rest-spread'),
            { useBuiltIns: true }
        ],
        [
            require.resolve('babel-plugin-transform-react-jsx'),
            {
                useBuiltIns: true,
                pragma: process.env.PREACT ? 'h' : 'React.createElement'
            }
        ],
        require.resolve('babel-plugin-transform-react-remove-prop-types'),
        require.resolve('babel-plugin-transform-class-properties'),
        require.resolve('babel-plugin-syntax-dynamic-import')
    ]
};
