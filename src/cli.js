#!/usr/bin/env node

'use strict';

const meow = require('meow');
const resolveBin = require('resolve-bin');
const spawn = require('cross-spawn');

const cli = meow(
    `
        Usage
            $ hd-scripts [input]
        Options
            --foo  Lorem ipsum [Default: false]
        Examples
            $ hd-scripts
            unicorns & rainbows
            $ hd-scripts ponies
            ponies & rainbows
    `,
    {
        '--': true,
        'boolean': ['no-cache', 'debug'],
        'alias': { d: 'debug' }
    }
);

const cmd = cli.input[0];

switch (cmd) {
    case 'lint':
        runLint(cli.input.slice(1), cli.flags);
        break;
    case 'format':
        runFormat(cli.input.slice(1), cli.flags);
        break;
    default:
        break;
}

function runLint(files, flags) {
    const bin = resolveBin.sync('eslint');
    const cache = flags.noCache ? [] : ['--cache'];

    files = files.length > 0 ? files : ['.'];

    const options = [...cache, ...flags[''], ...files];

    if (flags.debug) {
        console.error('CLI: ', bin);
        console.error(options.join(' '));
    }
    const result = spawn.sync(bin, options, { stdio: 'inherit' });

    process.exit(result.status);
}

function runFormat(files, flags) {
    const bin = resolveBin.sync('concurrently');
    const prettierEslint = resolveBin.sync('prettier-eslint-cli', { executable: 'prettier-eslint' });
    const prettierStylelint = resolveBin.sync('prettier-stylelint');

    if (flags.debug) {
        console.error(
            'CLI: ',
            bin,
            '\n',
            prettierEslint,
            '\n',
            prettierStylelint
        );
    }
    const result = spawn.sync(
        bin,
        [
            '--names',
            'eslint,stylelint',
            '-c',
            'bgBlue.bold,bgMagenta.bold',
            `${prettierEslint} --write 'src/**/*.js'`,
            `${prettierStylelint} -q --write 'src/**/*.css'`
        ],
        { stdio: 'inherit' }
    );

    process.exit(result.status);
}
