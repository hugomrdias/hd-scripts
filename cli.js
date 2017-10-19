#!/usr/bin/env node

'use strict';

const meow = require('meow');
const hdScripts = require('.');

const cli = meow(`
    Usage
        $ hd-scripts [input]
    Options
        --foo  Lorem ipsum [Default: false]
    Examples
        $ hd-scripts
        unicorns & rainbows
        $ hd-scripts ponies
        ponies & rainbows
`);

console.log(hdScripts(cli.input[0] || 'unicorns'));
