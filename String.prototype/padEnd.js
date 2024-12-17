/*
    * String.prototype.padEnd(targetLength, padString)
    * - Takes two arguments:
    *   - `targetLength`: The desired length of the resulting string after padding (required, will be converted to a number).
    *   - `padString`: The string to pad with (optional, default is a single space, will be converted to a string if not already).
    * - Returns a new string of at least `targetLength`:
    *     - If the original string's length is already equal to or greater than `targetLength`, it returns the original string.
    *     - If padding is applied, the string is padded at the end with `padString` until it reaches `targetLength`.
    * - Behavior of `padString`:
    *     - If `padString` is empty or omitted, a space (`" "`) is used.
    *     - If `padString` does not evenly fit, only as much of it as needed is used.
    * - Special Cases:
    *     - If `targetLength` is less than or equal to the original string's length, no padding is added.
    *     - Non-string `padString` values are coerced to strings (e.g., numbers, booleans, objects, etc.).
    *     - If `targetLength` is `NaN` or negative, it behaves as if the target length equals the string's length.
    *     - `padString` is truncated if it overfills the padding requirement.
    * - Examples:
    *   'hello'.padEnd(10);                  // 'hello     ' (default pad with spaces)
    *   'hello'.padEnd(10, '*');            // 'hello*****' (padded with '*')
    *   'hello'.padEnd(8, 'abc');           // 'helloabc' (uses part of 'abc')
    *   'hello'.padEnd(8, '');              // 'hello   ' (default pad with spaces)
    *   'hello'.padEnd(3);                  // 'hello' (no padding, length already >= 3)
    *   ''.padEnd(5, 'x');                  // 'xxxxx' (padded with 'x')
    *   ''.padEnd(0, 'y');                  // '' (targetLength = 0, no padding needed)
    *   'hi'.padEnd(-1);                    // 'hi' (negative targetLength, no padding)
    *   'test'.padEnd(10, null);            // 'testnulln' ('null' coerced to string)
    *   'test'.padEnd(8, 123);              // 'test1231' (number coerced to string '123')
    *   'test'.padEnd(8, true);             // 'testtru' ('true' coerced to string)
    *   'example'.padEnd(15, 'ab');         // 'exampleabababa' (repeated 'ab')
    *   'example'.padEnd(15, {});           // 'example[object' ('{}' coerced to string '[object Object]')
    *   'abc'.padEnd(6.7, '.');             // 'abc...' (targetLength coerced to 6)
    *   'test'.padEnd(Infinity, 'a');       // Error: Invalid string length (targetLength too large)
*/

String.prototype.padEnd2 = function(targetLength, padString) {
    let str = String(this)
    targetLength = Math.trunc(targetLength) || 0
    if (targetLength <= str.length) return str
    padString = padString !== undefined ? String(padString) : ' '

    if (padString === '') {
        padString = ' '
    }

    const paddingNeeded = targetLength - str.length
    const fullPadString = padString.repeat(Math.ceil(paddingNeeded / padString.length))
    const truncatedPadString = fullPadString.slice(0, paddingNeeded)

    return str + truncatedPadString
}

console.log('hello'.padEnd2()); // hello
console.log('hello'.padEnd2('')); // hello
console.log('hello'.padEnd2(NaN)); // hello
console.log('hello'.padEnd2(15, 'a')); // helloaaaaaaaaaa
console.log('hello'.padEnd2(10)); // hello
console.log('hello'.padEnd2(10, '*')); // hello*****
console.log('hello'.padEnd2(8, 'abc')); // helloabc
console.log('hello'.padEnd2(8, '')); // hello
console.log('hello'.padEnd2(3)); // hello
console.log(''.padEnd2(5, 'x')); // xxxxx
console.log(''.padEnd2(0, 'y')); // ''
console.log('hi'.padEnd2(-1)); // hi
console.log('test'.padEnd2(10, null)); // testnullnu
console.log('test'.padEnd2(8, 123)); // test1231
console.log('test'.padEnd2(8, true)); // testtrue
console.log('example'.padEnd2(15, 'ab')); // exampleabababab
console.log('example'.padEnd2(15, {})); // example[object
console.log('abc'.padEnd2(6.7, '.')); // abc...
// console.log('test'.padEnd2(Infinity, 'a')); // RangeError: Invalid count value: Infinity
