import 'eslint'
import fs from 'node:fs'
import path from 'path'
import * as c from '../eslint/configs/ts.js'
import b from '../eslint/preact.js'
import * as a from '../eslint/index.js'

console.warn(path, fs, c, b, a)

const o = ['sss', 'sss']

const obj = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
}

export { o, obj }
