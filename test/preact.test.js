'use strict'

const assert = require('assert')
const eslint = require('eslint')
const path = require('path')

const cli = new eslint.ESLint({
  fix: false,
  cache: false,
  errorOnUnmatchedPattern: true,
})

async function lint(file) {
  const lintResults = await cli.lintFiles(file)
  return lintResults[0]
}

const FIXTURES = path.resolve(__dirname, 'fixtures')
const p = (file) => path.resolve(FIXTURES, file)

describe('mjs', function () {
  it('support mjs', async () => {
    const report = await lint(p('invalid.mjs'))
    assert.ok(report.errorCount === 1)
    assert.ok(report.messages[0].ruleId === 'no-useless-constructor')
  })
})

describe('preact', function () {
  it('support mjs', async () => {
    const report = await lint(p('preact/invalid.mjs'))
    assert.ok(report.errorCount === 2)
    assert.ok(report.messages[0].ruleId === 'react/jsx-no-target-blank')
  })
})
