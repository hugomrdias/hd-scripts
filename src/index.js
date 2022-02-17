'use strict'

module.exports = (
  /** @type {string} */ input,
  /** @type {{ postfix?: any; }} */ opts
) => {
  if (typeof input !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof input}`)
  }

  opts = opts || {}

  return input + ' & ' + (opts.postfix || 'rainbows')
}
