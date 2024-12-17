/*
    * String.prototype.lastIndexOf(searchString, position)
    * - Takes two arguments:
    *   - `searchString`: The string to search for (required, will be converted to a string if not already).
    *   - `position`: The index to start searching backward from (optional, default is the string's length, will be converted to a number if not already).
    * - Returns the index of the last occurrence of `searchString` within the string, up to and including `position`.
    * - If `searchString` is not found, it returns `-1`.
    * - Case-sensitive: Matches must have the exact casing.
    * - Behavior for `position`:
    *     - If `position` is `undefined`, it defaults to the string's length.
    *     - If `position` is `NaN`, it is treated as `+Infinity` (which means the entire string is searched).
    *     - If `position` is greater than or equal to the string length, the entire string is searched.
    *     - If `position` is less than `0`, the method immediately returns `-1`.
    * - Non-string `searchString` values are converted to strings (e.g., numbers, booleans, etc.).
    * - Using a `RegExp` as `searchString` is allowed but coerced to a string (via `.toString()`).
    * - An empty `searchString` is always found:
    *     - If `position` is `undefined` or `NaN`, it returns the string's length.
    *     - If `position` is within valid bounds, it returns `position`.
    *     - If `position` is less than `0`, it returns `0`.
    * - Examples:
    *   'hello'.lastIndexOf('l');            // 3 (last occurrence of 'l')
    *   'hello'.lastIndexOf('l', 2);         // 2 (last occurrence of 'l' up to index 2)
    *   'hello'.lastIndexOf('l', 1);         // -1 (no 'l' found before or at index 1)
    *   'hello'.lastIndexOf('e');            // 1 (case-sensitive match)
    *   'hello'.lastIndexOf('E');            // -1 (case-sensitive, no match)
    *   'hello'.lastIndexOf('');             // 5 (empty string found at the end)
    *   'hello'.lastIndexOf('', 3);          // 3 (empty string exists at every position)
    *   'hello'.lastIndexOf('h', -5);        // -1 (negative position immediately returns -1)
    *   'hello'.lastIndexOf('h', 100);       // 0 (entire string searched, match at 0)
    *   ''.lastIndexOf('a');                 // -1 (empty string, cannot find 'a')
    *   ''.lastIndexOf('');                  // 0 (empty string found at the start)
    *   'hello'.lastIndexOf('hello', 'bello'); // 0 (position 'bello' coerced to NaN -> treated as +Infinity)
    *   'example'.lastIndexOf('am', 8.7);    // 2 (position 8.7 coerced to 8)
    *   'example'.lastIndexOf(/d/, 8);       // -1 (RegExp coerced to string '/d/', not found)
    *   'example'.lastIndexOf('am', '8.7');  // 2 (position '8.7' coerced to 8)
    *   'example'.lastIndexOf(8, 6);         // -1 (number 8 coerced to string '8', not found)
    *   'test'.lastIndexOf('', NaN);         // 4 (empty string found at the end)
    *   'test'.lastIndexOf('e', NaN);        // 1 (position treated as +Infinity, entire string searched)
 */

String.prototype.lastIndexOf2 = function (searchString, position) {
    searchString = String(searchString)
    position = position === undefined || isNaN(position) ? this.length : Math.trunc(position)
    position = Math.min(position, this.length)

    if (position < 0) {
        if(searchString === '') return 0
        return -1
    }

    if (searchString === '') {
        return position
    }
  
    for (let i = position; i >= 0; i--) {
        if (this.slice(i, i + searchString.length) === searchString) {
            return i
        }
    }
    return -1
}
  
let str = 'hello everyone'

console.log(str.lastIndexOf2('e', 0));
console.log(str.lastIndexOf2('e', 100));
console.log(str.lastIndexOf2(''));
console.log(str.lastIndexOf2('', null));
console.log(str.lastIndexOf('e', null));
console.log(str.lastIndexOf('e', false));
console.log(str.lastIndexOf2('', -1));
console.log(str.lastIndexOf2('', 13));
console.log(str.lastIndexOf2('everyone'));
console.log(str.lastIndexOf2('e', NaN));
console.log(str.lastIndexOf2('', NaN));


