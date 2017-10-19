'use strict';

module.exports = {
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true
        }
    },
    env: {
        browser: true,
        commonjs: true,
        node: true,
        es6: true
    },
    extends: 'eslint:recommended',
    rules: {
        // Possible Errors
        'for-direction': 2,
        'getter-return': 2,
        'no-await-in-loop': 2,
        'no-compare-neg-zero': 2,
        'no-cond-assign': 2,
        'no-console': 1,
        'no-constant-condition': 2,
        'no-control-regex': 2,
        'no-debugger': 2,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty': 2,
        'no-empty-character-class': 2,
        'no-ex-assign': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-parens': 0,
        'no-extra-semi': 2,
        'no-func-assign': 2,
        'no-inner-declarations': [2, 'functions'],
        'no-invalid-regexp': 2,
        'no-irregular-whitespace': 2,
        'no-obj-calls': 2,
        'no-prototype-builtins': 2,
        'no-regex-spaces': 2,
        'no-sparse-arrays': 2,
        'no-template-curly-in-string': 2,
        'no-unexpected-multiline': 0,
        'no-unreachable': 2,
        'no-unsafe-finally': 2,
        'no-unsafe-negation': 2,
        'use-isnan': 2,
        'valid-jsdoc': 1,
        'valid-typeof': 2,

        // Best Practices
        'accessor-pairs': 0,
        'array-callback-return': 2,
        'block-scoped-var': 2,
        'class-methods-use-this': 0,
        'complexity': [0, 11],
        'consistent-return': 0,
        'curly': [2, 'all'],
        'default-case': 2,
        'dot-notation': 2,
        'dot-location': [2, 'property'],
        'eqeqeq': [2, 'smart'],
        'guard-for-in': 2,
        'no-alert': 1,
        'no-caller': 2,
        'no-case-declarations': 2,
        'no-div-regex': 2,
        'no-else-return': 2,
        'no-empty-function': 2,
        'no-empty-pattern': 2,
        'no-eq-null': 2,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-extra-label': 2,
        'no-fallthrough': 2,
        'no-floating-decimal': 2,
        'no-global-assign': 2,
        'no-implicit-coercion': 2,
        'no-implicit-globals': 2,
        'no-implied-eval': 2,
        'no-invalid-this': 1,
        'no-iterator': 2,
        'no-labels': 2,
        'no-lone-blocks': 2,
        'no-loop-func': 2,
        'no-magic-numbers': 0,
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-new': 2,
        'no-new-func': 2,
        'no-new-wrappers': 2,
        'no-octal': 2,
        'no-octal-escape': 2,
        'no-param-reassign': 0,
        'no-proto': 2,
        'no-redeclare': 2,
        'no-restricted-properties': 0,
        'no-return-assign': [2, 'always'],
        'no-return-await': 2,
        'no-script-url': 2,
        'no-self-assign': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-unmodified-loop-condition': 0,
        'no-unused-expressions': 2,
        'no-unused-labels': 2,
        'no-useless-call': 2,
        'no-useless-concat': 2,
        'no-useless-escape': 2,
        'no-useless-return': 1,
        'no-void': 2,
        'no-warning-comments': 1,
        'no-with': 2,
        'prefer-promise-reject-errors': 2,
        'radix': 2,
        'require-await': 1,
        'vars-on-top': 2,
        'wrap-iife': [2, 'inside'],
        'yoda': 2,

        // Strict Mode
        'strict': [2, 'global'],

        // Variables
        'init-declarations': 0,
        'no-catch-shadow': 2,
        'no-delete-var': 2,
        'no-label-var': 2,
        'no-restricted-globals': 0,
        'no-shadow': 0,
        'no-shadow-restricted-names': 2,
        'no-undef': [2, { typeof: true }],
        'no-undef-init': 2,
        'no-undefined': 1,
        'no-unused-vars': 2,
        'no-use-before-define': [2, 'nofunc'],

        // Node.js CommonJS
        // Disabled because of https://github.com/eslint/eslint/issues/3420
        // 'callback-return': [1, ['cb', 'callback', 'next', 'done']],
        'global-require': 1,
        'handle-callback-err': 1,
        'no-buffer-constructor': 2,
        'no-mixed-requires': [1, { grouping: true }],
        'no-new-require': 2,
        'no-path-concat': 2,
        'no-process-env': 0,
        'no-process-exit': 0,
        'no-restricted-modules': 0,
        'no-sync': 0,

        // Stylistic Issues
        'array-bracket-newline': [0, { multiline: true }],
        'array-bracket-spacing': [2, 'never'],
        'array-element-newline': [0, { multiline: true }],
        'block-spacing': 0,
        'brace-style': [2, '1tbs', { allowSingleLine: false }],
        'camelcase': [2, { properties: 'always' }],
        'capitalized-comments': 0,
        'comma-dangle': [2, 'never'],
        'comma-spacing': [
            2,
            {
                before: false,
                after: true
            }
        ],
        'comma-style': [2, 'last'],
        'computed-property-spacing': [2, 'never'],
        'consistent-this': [2, 'self'],
        'eol-last': 2,
        'func-call-spacing': 2,
        'func-name-matching': 1,
        'func-names': 0,
        'func-style': [0, 'declaration'],
        'function-paren-newline': 0,
        'id-blacklist': 0,
        'id-length': 0,
        'id-match': 0,
        'indent': [2, 4, { SwitchCase: 1 }],
        'jsx-quotes': 2,
        'key-spacing': [
            2,
            {
                beforeColon: false,
                afterColon: true,
                mode: 'minimum'
            }
        ],
        'keyword-spacing': 2,
        'line-comment-position': 0,
        'linebreak-style': [2, 'unix'],
        'lines-around-comment': 0,
        'max-depth': [0, 4],
        'max-len': [0, 80, 4],
        'max-lines': 0,
        'max-nested-callbacks': [1, 4],
        'max-params': [0, 3],
        'max-statements': [0, 10],
        'max-statements-per-line': [2, { max: 2 }],
        'multiline-ternary': 0,
        'new-cap': 2,
        'new-parens': 2,
        'newline-per-chained-call': 0,
        'no-array-constructor': 2,
        'no-bitwise': 0,
        'no-continue': 2,
        'no-inline-comments': 0,
        'no-lonely-if': 2,
        'no-mixed-operators': [
            2,
            {
                groups: [
                    // prettier doesnt think this is usefull ["+", "-", "*", "/", "%", "**"]
                    ['%', '**'],
                    ['&', '|', '^', '~', '<<', '>>', '>>>'],
                    ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                    ['&&', '||'],
                    ['in', 'instanceof']
                ],
                allowSamePrecedence: true
            }
        ],
        'no-mixed-spaces-and-tabs': 2,
        'no-multi-assign': 2,
        'no-multiple-empty-lines': [2, { max: 1 }],
        'no-negated-condition': 2,
        'no-nested-ternary': 2,
        'no-new-object': 2,
        'no-plusplus': 0,
        'no-restricted-syntax': [2, 'WithStatement'],
        'no-tabs': 2,
        'no-ternary': 0,
        'no-trailing-spaces': 2,
        'no-underscore-dangle': 0,
        'no-unneeded-ternary': 2,
        'no-whitespace-before-property': 2,
        'nonblock-statement-body-position': 1,
        'object-curly-newline': [2, { multiline: true }],
        'object-curly-spacing': [2, 'always'],
        'object-property-newline': 2,
        'one-var': [2, 'never'],
        'one-var-declaration-per-line': 2,
        'operator-assignment': [2, 'always'],
        'operator-linebreak': [2, 'after'],
        'padded-blocks': [2, 'never'],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: 'return'
            },
            {
                blankLine: 'always',
                prev: ['const', 'let', 'var'],
                next: '*'
            },
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var']
            },
            {
                blankLine: 'always',
                prev: 'directive',
                next: '*'
            },
            {
                blankLine: 'any',
                prev: 'directive',
                next: 'directive'
            }
        ],
        'quote-props': [2, 'consistent'],
        'quotes': [2, 'single'],
        'require-jsdoc': 0,
        'semi': [2, 'always'],
        'semi-spacing': [
            2,
            {
                before: false,
                after: true
            }
        ],
        'semi-style': ['error', 'last'],
        'sort-keys': 0,
        'sort-vars': 0,
        'space-before-blocks': [2, 'always'],
        'space-before-function-paren': [
            2,
            {
                anonymous: 'never',
                named: 'never'
            }
        ],
        'space-in-parens': [2, 'never'],
        'space-infix-ops': 2,
        'space-unary-ops': 2,
        'spaced-comment': [2, 'always', { exceptions: ['*'] }],
        'switch-colon-spacing': [
            'error',
            {
                after: true,
                before: false
            }
        ],
        'template-tag-spacing': 2,
        'unicode-bom': 2,
        'wrap-regex': 0,

        // ECMAScript 6
        'arrow-body-style': [
            2,
            'as-needed',
            { requireReturnForObjectLiteral: true }
        ],
        'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
        'arrow-spacing': [
            2,
            {
                before: true,
                after: true
            }
        ],
        'constructor-super': 2,
        'generator-star-spacing': [2, 'both'],
        'no-class-assign': 2,
        'no-confusing-arrow': [2, { allowParens: true }],
        'no-const-assign': 2,
        'no-dupe-class-members': 2,
        'no-duplicate-imports': 2,
        'no-new-symbol': 2,
        'no-restricted-imports': 0,
        'no-this-before-super': 2,
        'no-useless-computed-key': 2,
        'no-useless-constructor': 2,
        'no-useless-rename': 2,
        'no-var': 2,
        'object-shorthand': 0,
        'prefer-arrow-callback': 2,
        'prefer-const': 2,
        'prefer-destructuring': 0,
        'prefer-numeric-literals': 0,
        'prefer-rest-params': 0,
        'prefer-spread': 0,
        'prefer-template': 0,
        'require-yield': 0,
        'rest-spread-spacing': 0,
        'sort-imports': 0,
        'symbol-description': 2,
        'template-curly-spacing': 2,
        'yield-star-spacing': [2, 'both']
    }
};
