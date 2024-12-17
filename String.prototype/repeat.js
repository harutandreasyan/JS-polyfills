/*
    * String.prototype.repeat(count)
    * - Takes one argument:
    *   - `count`: The number of times to repeat the string (required, will be converted to a number).
    * - Returns a new string consisting of the original string repeated `count` times.
    * - Special Cases:
    *     - If `count` is `0` or a falsy value (`false`, `null`, `undefined`, `NaN`, `''`, `0`), it returns an empty string (`''`).
    *     - If `count` is a negative number or `Infinity`, it throws a `RangeError`.
    *     - If `count` is a floating-point number, it is converted to an integer using `Math.floor`.
    * - Non-integer or invalid `count` values:
    *     - Non-numeric values for `count` are coerced to a number.
    *     - If coercion results in a falsy value, it behaves as if `count` is `0`.
    * - Maximum output string length:
    *     - If the resulting string's length exceeds the maximum string size allowed by the JavaScript engine, a `RangeError` is thrown.
    * - Examples:
    *   'abc'.repeat(3);              // 'abcabcabc' (repeated 3 times)
    *   'abc'.repeat(0);              // '' (count is 0)
    *   'abc'.repeat(-1);             // RangeError: Invalid count value
    *   'abc'.repeat(NaN);            // '' (count treated as 0, a falsy value)
    *   'abc'.repeat(Infinity);       // RangeError: Invalid count value
    *   'abc'.repeat(2.5);            // 'abcabc' (count coerced to 2)
    *   'abc'.repeat('3');            // 'abcabcabc' (count coerced to 3)
    *   'abc'.repeat('abc');          // '' (count coerced to NaN, treated as 0)
    *   'abc'.repeat(true);           // 'abc' (count coerced to 1)
    *   'abc'.repeat(false);          // '' (count coerced to 0, a falsy value)
    *   ''.repeat(5);                 // '' (empty string repeated is still empty)
    *   'a'.repeat(1e6);              // A string of 1 million 'a' characters
    *   'abc'.repeat(-Infinity);      // RangeError: Invalid count value
    *   'abc'.repeat(undefined);      // '' (count coerced to 0, a falsy value)
*/


String.prototype.repeat2 = function(count) {
    count = Math.trunc(count)
    if(count < 0 || count === Infinity) {
        throw new RangeError(`Invalid count value: ${count}`)
    }

    if(count === 0 || !count) return ''
    let repeated = ''
    for(let i = 0; i < count; ++i) {
        repeated += this
    }
    return repeated
}

console.log('abc'.repeat2()); ''
console.log('abc'.repeat2(3)); // abcabcabc
console.log('abc'.repeat2(0)); // ''
console.log('abc'.repeat2(true)); // abc
console.log('abc'.repeat2(NaN)); // ''
console.log('abc'.repeat2(2.5)); // abcabc
console.log(''.repeat2(5)); // ''
console.log('abc'.repeat2('3')); // abcabcabc
console.log('abc'.repeat2('abc')); // ''
console.log('abc'.repeat2(null)); // ''
console.log('abc'.repeat2(undefined)); // ''
console.log('abc'.repeat(false)); // ''
// console.log('a'.repeat2(1e6)); // A string of 1 million 'a' characters
// console.log('abc'.repeat2(-1)); // RangeError: Invalid count value: -1
// console.log('abc'.repeat2(Infinity)); // RangeError: Invalid count value: Infinity    
// console.log('abc'.repeat2(-Infinity)); // RangeError: Invalid count value: -Infinity   

