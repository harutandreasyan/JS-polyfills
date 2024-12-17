/*
    * String.prototype.slice(startIndex, endIndex)
    * - Takes two arguments:
    *   - `startIndex`: The zero-based index at which to start extraction (required, will be coerced to a number).
    *   - `endIndex`: The zero-based index before which to end extraction (optional, defaults to the string's length, will be coerced to a number).
    * - Returns a new string containing the extracted section of the string from `startIndex` up to, but not including, `endIndex`.
    * - Special Cases:
    *     - If `startIndex` is negative, it is treated as `string.length + startIndex`.
    *     - If `endIndex` is negative, it is treated as `string.length + endIndex`.
    *     - If `startIndex` or `endIndex` are `NaN`, they are treated as `0`.
    *     - If `endIndex` is omitted, it defaults to the string's length.
    *     - If `startIndex` is greater than or equal to the string's length, an empty string is returned.
    *     - If `startIndex` is greater than or equal to `endIndex`, an empty string is returned.
    *     - Non-integer values for `startIndex` or `endIndex` are floored to the nearest integer.
    * - Examples:
    *   'hello'.slice(1, 4);          // 'ell' (extracted from index 1 to 3)
    *   'hello'.slice(1);             // 'ello' (extracted from index 1 to the end)
    *   'hello'.slice(-2);            // 'lo' (negative index treated as `string.length + (-2)`)
    *   'hello'.slice(-3, -1);        // 'll' (indexes treated as `string.length - 3` to `string.length - 1`)
    *   'hello'.slice(2, -1);         // 'll' (start at index 2, end at `string.length - 1`)
    *   'hello'.slice(10);            // '' (start index beyond string length, returns empty string)
    *   'hello'.slice(2, 2);          // '' (startIndex >= endIndex, returns empty string)
    *   'hello'.slice(2, 10);         // 'llo' (end index beyond string length, treated as string's length)
    *   'hello'.slice();              // 'hello' (no arguments, returns the entire string)
    *   'hello'.slice(NaN);           // 'hello' (startIndex treated as 0)
    *   'hello'.slice(NaN, NaN);      // '' (startIndex and endIndex both treated as 0)
    *   'hello'.slice(0, undefined);  // 'hello' (endIndex defaults to string length)
    *   'hello'.slice(0, null);       // '' (endIndex coerced to 0)
    *   'hello'.slice(1.5, 4.9);      // 'ell' (indexes floored to 1 and 4)
    *   'hello'.slice('1', '3');      // 'el' (string arguments coerced to numbers)
    *   'hello'.slice('a', 'b');      // '' (arguments coerced to NaN, treated as 0)
    *   'hello'.slice(false, true);   // 'h' (start at 0, end at 1)
    *   ''.slice(1, 3);               // '' (empty string always returns empty string)
*/

String.prototype.slice2 = function(startIndex, endIndex) {
    let start = startIndex ? Math.trunc(startIndex) : 0
    let end = endIndex ? Math.trunc(endIndex) : this.length
    if(start < 0) start += this.length
    if(end < 0) end += this.length

    start = Math.max(0, Math.min(start, this.length))
    end = Math.max(0, Math.min(end, this.length))
    if (start >= end) return ''

    let result = []
    for (let i = start; i < end; ++i) {
        result.push(this[i])
    }

    return result.join('')
}

console.log(''.slice2(-3, 3));
console.log('a'.slice2(-2));
console.log('hello world'.slice2(2, 5));
console.log('hello world'.slice2(6));
console.log('hello world'.slice2(-5));
console.log('hello world'.slice2(-2, -1));
console.log('hello'.slice2(10));
console.log('hello'.slice2(3, 2));
console.log('hello'.slice2(3, 3));
console.log('hello'.slice2(0));
console.log('hello 😊 world'.slice2(6, 7));
console.log(''.slice2(0, 5));
console.log('a'.slice2(0));
console.log('a'.slice2(1));
console.log('a'.slice2(-1));

