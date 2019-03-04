'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

const keepFirst = str => str.slice(0, 2)

const keepLast = str => str.slice(str.length - 2)

const keepFirstLast = str => str.slice(0,1) + str.slice(str.length - 1)
//* Begin of tests


const assert = require('assert')
assert.strictEqual(keepFirst('Hello World'), 'He')
assert.strictEqual(keepLast('Hello World'), 'ld')
assert.strictEqual(keepFirstLast('Hello World'), 'Hd')
// End of tests */
