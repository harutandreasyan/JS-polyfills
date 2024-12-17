/*
    * String.prototype.padStart(targetLength, padString)
    * - Takes two arguments:
    *   - `targetLength`: The desired length of the resulting string after padding (required, will be converted to a number).
    *   - `padString`: The string to pad with (optional, default is a single space, will be converted to a string if not already).
    * - Returns a new string of at least `targetLength`:
    *     - If the original string's length is already equal to or greater than `targetLength`, it returns the original string.
    *     - If padding is applied, the string is padded at the beginning with `padString` until it reaches `targetLength`.
    * - Behavior of `padString`:
    *     - If `padString` is empty or omitted, no padding is added.
    *     - If `padString` does not evenly fit, only as much of it as needed is used.
    * - Special Cases:
    *     - If `targetLength` is less than or equal to the original string's length, no padding is added.
    *     - Non-string `padString` values are coerced to strings (e.g., numbers, booleans, objects, etc.).
    *     - If `targetLength` is `NaN` or negative, it behaves as if the target length equals the string's length.
    *     - `padString` is truncated if it overfills the padding requirement.
    * - Examples:
    *   'hello'.padStart(10);                  // '     hello' (default pad with spaces)
    *   'hello'.padStart(10, '*');            // '*****hello' (padded with '*')
    *   'hello'.padStart(8, 'abc');           // 'abchello' (uses part of 'abc')
    *   'hello'.padStart(8, '');              // '   hello' (default pad with spaces)
    *   'hello'.padStart(3);                  // 'hello' (no padding, length already >= 3)
    *   ''.padStart(5, 'x');                  // 'xxxxx' (padded with 'x')
    *   ''.padStart(0, 'y');                  // '' (targetLength = 0, no padding needed)
    *   'hi'.padStart(-1);                    // 'hi' (negative targetLength, no padding)
    *   'test'.padStart(8, null);             // 'nulltest' ('null' coerced to string)
    *   'test'.padStart(8, 123);              // '123test' (number coerced to string '123')
    *   'test'.padStart(8, true);             // 'truetest' ('true' coerced to string)
    *   'example'.padStart(15, 'ab');         // 'abababababexample' (repeated 'ab')
    *   'example'.padStart(15, {});           // '[objectObjectexample' ('{}' coerced to string '[object Object]')
    *   'abc'.padStart(6.7, '.');             // '...abc' (targetLength coerced to 6)
    *   'test'.padStart(Infinity, 'a');       // Error: Invalid string length (targetLength too large)
*/

String.prototype.padStart2 = function(targetLength, padString) {
    let str = String(this)
    targetLength = Math.trunc(targetLength) || 0
    if (targetLength <= str.length) return str
    padString = padString !== undefined ? String(padString) : ' '

    if (padString === '') {
        return str
    }

    const paddingNeeded = targetLength - str.length
    const fullPadString = padString.repeat(Math.ceil(paddingNeeded / padString.length))
    const truncatedPadString = fullPadString.slice(0, paddingNeeded)

    return truncatedPadString + str
}

console.log('hello'.padStart2()); // hello
console.log('hello'.padStart2('')); // hello
console.log('hello'.padStart2(NaN)); // hello
console.log('hello'.padStart2(15, 'a')); // aaaaaaaaaahello
console.log('hello'.padStart2(10)); //      hello
console.log('hello'.padStart2(10, '*')); // *****hello
console.log('hello'.padStart2(8, 'abc')); // abchello
console.log('hello'.padStart2(8, '')); // hello
console.log('hello'.padStart2(3)); // hello
console.log(''.padStart2(5, 'x')); // xxxxx
console.log(''.padStart2(0, 'y')); // ''
console.log('hi'.padStart2(-1)); // hi
console.log('test'.padStart2(10, null)); // nullnutest
console.log('test'.padStart2(8, 123)); // 1231test
console.log('test'.padStart2(8, true)); // truetest
console.log('example'.padStart2(15, 'ab')); // ababababexample
console.log('example'.padStart2(15, {})); // [object example
console.log('abc'.padStart2(6.7, '.')); // ...abc
// console.log('test'.padStart2(Infinity, 'a')); // RangeError: Invalid count value: Infinity
