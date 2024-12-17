/*
    * String.prototype.startsWith(searchString[, position])
    * - Takes `searchString` (string to check) and an optional `position` (default is 0).
    * - Checks if the string starts with `searchString` starting from `position`.
    * - Converts `position` to an integer; clamps it to the string's length.
    * - Throws `TypeError` if `searchString` is a RegExp.
    * - Returns `true` if the string starts with `searchString` from the given position; otherwise returns `false`.
    * - Handles edge cases:
    *   - Empty `searchString`: Always returns `true` (any string starts with an empty string).
    *     Example: 'hello'.startsWith(''); // true
    *   - `position <= 0`: Starts checking from the beginning of the string.
    *     Example: 'hello'.startsWith('h'); // true
    *     Example: 'hello'.startsWith('h', 0); // true
    *   - `position > string.length`: Always returns `false` (no match possible).
    *     Example: 'hello'.startsWith('hello', 10); // false
    *   - `NaN` for `position`: Treated as 0, always checks from the beginning.
    *     Example: 'hello'.startsWith('h', NaN); // true
    *   - Non-string `searchString`: Coerces `searchString` to a string using `String()`.
    *     Example: '5hello'.startsWith(5); // false, coerces 5 to '5' and checks if string starts with '5'
*/

String.prototype.startsWith2 = function(searchString, position = 0) {
    if (searchString instanceof RegExp) {
        throw new TypeError('First argument to String.prototype.startsWith must not be a regular expression')
    }
    searchString = String(searchString);
    position = position !== undefined ? Math.trunc(position) : 0

    if (isNaN(position) || position < 0) {
        position = 0
    }

    position = Math.min(position, this.length)
    return this.slice(position, position + searchString.length) === searchString
}

const str = 'Cats are 7the best!'

console.log(str.startsWith2('Cats')); // true
console.log(str.startsWith2('are', 5)); // true
console.log(str.startsWith2('are', 5.7)); // true
console.log(str.startsWith('Cats', -5)); // true
console.log(str.startsWith2('Cats', 100)); // false
console.log(str.startsWith2(7, 9)); // true
console.log(str.startsWith2('Cats', NaN)); // true

// console.log(str.startsWith2(/d/)); // TypeError




