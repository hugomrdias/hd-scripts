# hd-scripts [![NPM Version](https://img.shields.io/npm/v/hd-scripts.svg)](https://www.npmjs.com/package/hd-scripts) [![NPM Downloads](https://img.shields.io/npm/dt/hd-scripts.svg)](https://www.npmjs.com/package/hd-scripts) [![NPM License](https://img.shields.io/npm/l/hd-scripts.svg)](https://www.npmjs.com/package/hd-scripts) [![Build Status](https://travis-ci.org/hugomrdias/hd-scripts.svg?branch=master)](https://travis-ci.org/hugomrdias/hd-scripts) [![codecov](https://codecov.io/gh/hugomrdias/hd-scripts/badge.svg?branch=master)](https://codecov.io/gh/hugomrdias/hd-scripts?branch=master)

> My personal config and scripts for web projects


## Install

```
$ npm install hd-scripts
```


## Usage

```js
const hdScripts = require('hd-scripts');

hdScripts('unicorns');
//=> 'unicorns & rainbows'
```


## API

### hdScripts(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global hd-scripts
```

```
$ hd-scripts --help

  Usage
    hd-scripts [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ hd-scripts
    unicorns & rainbows
    $ hd-scripts ponies
    ponies & rainbows
```


## License

MIT © [Hugo Dias](http://hugodias.me)
