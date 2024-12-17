/*
    * String.prototype.split(separator, limit)
    * - Takes two arguments:
    *   - `separator`: A string or regular expression to match for splitting the string (optional).
    *     - If `separator` is omitted or `undefined`, the entire string is returned as a single-element array.
    *     - If `separator` is an empty string, the string is split between each UTF-16 character.
    *   - `limit`: A non-negative integer specifying the maximum number of splits (optional).
    *     - If `limit` is omitted, the string is split entirely based on the `separator`.
    *     - If `limit` is `0` or coerced to `0` (e.g., `NaN`), an empty array is returned.
    * - Returns an array of substrings, split at each point where the `separator` occurs.
    * - Special Cases:
    *     - If `separator` is not present in the string, the array contains the original string as a single element.
    *     - If the string is empty, it returns an array with one empty string unless `separator` is an empty string, in which case it returns an empty array.
    *     - If `limit` is set to `0`, an empty array is returned.
    *     - Non-integer or invalid `limit` values (e.g., `NaN`) are coerced to `0`.
    *     - Regular expression `separator` can include capturing groups, which will be included in the resulting array.
    * - Examples:
    *   'hello world'.split(' ');          // ['hello', 'world'] (split at spaces)
    *   'hello'.split('');                 // ['h', 'e', 'l', 'l', 'o'] (split between each character)
    *   'hello'.split();                   // ['hello'] (no separator, entire string as one element)
    *   'a,b,c'.split(',');                // ['a', 'b', 'c'] (split at commas)
    *   'a,b,c'.split(',', 2);             // ['a', 'b'] (limit to 2 splits)
    *   'abc'.split('d');                  // ['abc'] (`separator` not found, entire string returned)
    *   'abc'.split('');                   // ['a', 'b', 'c'] (split between each character)
    *   ''.split(',');                     // [''] (empty string returns array with one empty string)
    *   ''.split('');                      // [] (empty string with empty separator returns empty array)
    *   'a1b2c3'.split(/\d/);              // ['a', 'b', 'c', ''] (split at digits)
    *   'a1b2c3'.split(/(\d)/);            // ['a', '1', 'b', '2', 'c', '3'] (capturing groups included)
    *   'hello'.split(null);               // ['hello'] (non-string or regex separator treated as `undefined`)
    *   'a,b,c'.split(',', NaN);           // [] (invalid `limit` treated as `0`)
    *   'hello'.split(',', 0);             // [] (`limit` of 0 returns empty array)
    *   'abc'.split(false);                // ['abc'] (non-string separator treated as `undefined`)
*/

String.prototype.split2 = function(separator, limit) {
    const str = String(this)

    if (separator === undefined) {
        return [str]
    }

    limit = limit === undefined ? Infinity : Math.max(0, Math.floor(Number(limit)))

    if (separator === '') {
        const result = []
        for (let i = 0; i < str.length && result.length < limit; i++) {
            result.push(str.charAt(i))
        }
        return result
    }

    const result = []

    if (typeof separator === 'string') {
        let lastIndex = 0
        let index

        while ((index = str.indexOf(separator, lastIndex)) !== -1) {
            result.push(str.slice(lastIndex, index))
            lastIndex = index + separator.length

            if (result.length === limit - 1) {
                break
            }
        }

        result.push(str.slice(lastIndex))
        return result.slice(0, limit)
    }

    if (separator instanceof RegExp) {
        let lastIndex = 0
        let match

        separator.lastIndex = 0

        while ((match = separator.exec(str)) !== null) {
            result.push(str.slice(lastIndex, match.index))

            if (match.length > 1) {
                result.push(...match.slice(1))
            }

            lastIndex = match.index + match[0].length

            if (separator.lastIndex === match.index) {
                separator.lastIndex++
            }

            if (result.length >= limit - 1) break
        }

        result.push(str.slice(lastIndex))
        return result.slice(0, limit)
    }

    return [str]
}

console.log('hello world'.split2(' '));
console.log('hello'.split2(''));
console.log('hello'.split2());
console.log('a,b,c'.split2(','));
console.log('abc'.split2('d'));
console.log('abc'.split2(''));
console.log(''.split2(','));
console.log(''.split2(''));
console.log('hello'.split2(null));
console.log('hello'.split2(',', 0));
console.log('abc'.split2(false));
console.log('a,b,c'.split2(',', NaN));
console.log('a,b,c'.split2(',', 2)); // ?
// console.log('a1b2c3'.split2(/\d/)); // ?
// console.log('a1b2c3'.split2(/(\d)/)); // ?