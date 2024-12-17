/*
    * String.prototype.endsWith(searchString[, length])
    * - Takes `searchString` (string to check) and optional `length` (default is string length).
    * - Checks if the string ends with `searchString`.
    * - Returns `true` if it does, otherwise `false`.
    * - Converts `length` to an integer; clamps it to the string's length.
    * - Throws `TypeError` if `searchString` is a RegExp.
    * - Handles edge cases:
    *   - Empty `searchString`: Always returns `true`.
    *     Example: 'hello'.endsWith('') === true
    *   - `length <= 0`: Always returns `false`.
    *     Example: 'hello'.endsWith('o', 0) === false
    *   - `length > string.length`: Treated as `string.length`.
    *     Example: 'hello'.endsWith('o', 10) === true
    *   - `NaN` for `length`: Treated as `0`, always returns `false` (except for an empty `searchString`).
    *     Example: 'hello'.endsWith('o', NaN) === false
    *   - Non-string `searchString`: Coerced to string using `String()`.
    *     Examples:
    *       'hello'.endsWith({}) === false // '[object Object]' doesn't match end of string
    *       'hello'.endsWith(5) === false // '5' doesn't match
    *       'hello5'.endsWith(5) === true // '5' matches
    *   - `undefined` as `length`: Uses the string's length.
    *     Example: 'hello'.endsWith('o', undefined) === true
    *   - Substring larger than the string or specified length:
    *     Examples:
    *       'hello'.endsWith('world!') === false
    *       'hello'.endsWith('he', 1) === false
*/

String.prototype.endsWith2 = function(searchString, endPosition) {
    if (searchString instanceof RegExp) {
        throw new TypeError('First argument to String.prototype.endsWith must not be a regular expression')
    }
    searchString = String(searchString)
    endPosition = endPosition !== undefined ? Math.trunc(endPosition) : this.length
    if (isNaN(endPosition)) endPosition = 0
    endPosition = Math.min(endPosition, this.length)
    let startIdx = endPosition - searchString.length

    if (startIdx < 0) return false
    return this.slice(startIdx, endPosition) === searchString
}

const str = 'Cats are the best!5'
console.log(str.endsWith2('best!5')); // true
console.log(str.endsWith2('best!5', 19)); // true
console.log(str.endsWith2('best!5', 120)); // true
console.log(str.endsWith2('best!5', -5)); // false
console.log(str.endsWith2('are', 8.7)); // true 
console.log(str.endsWith2('best!5', undefined)); // true
console.log(str.endsWith2('best!5', 'abc')); // false
console.log(str.endsWith2('best!5', NaN)); // false
console.log(str.endsWith2('best!5', -5)); // false
console.log(str.endsWith2('')); // true
console.log(str.endsWith2(5)); // true
// console.log(str.endsWith2(/d/)); // TypeError


