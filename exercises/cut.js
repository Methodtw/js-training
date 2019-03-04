'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

//* Begin of tests
const cutFirst = str => str.slice(2)
const cutLast = str => str.slice(0, str.length - 2)
const cutFirstLast = str =>  str.slice(2,str.length - 2)
//* Begin of tests
const assert = require('assert')

assert.strictEqual(cutFirst('Hello World'), 'llo World')
assert.strictEqual(cutLast('Hello World'), 'Hello Wor')
assert.strictEqual(cutFirstLast('Hello World'), 'llo Wor')


// End of tests */
