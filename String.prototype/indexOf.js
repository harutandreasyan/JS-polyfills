/*
    * String.prototype.indexOf(searchString, position)
    * - Takes two arguments:
    *   - `searchString`: The string to search for (required, will be converted to a string if not already).
    *   - `position`: The index to start the search from (optional, default is `0`, will be converted to a number if not already).
    * - Returns the index of the first occurrence of `searchString` within the string, starting from `position`.
    * - If `searchString` is not found, it returns `-1`.
    * - Case-sensitive: Matches must have the exact casing.
    * - If `searchString` is empty, the method behaves as follows:
    *     - If the `position` is `0`, it returns `0` (the empty string is considered to start at the beginning of any string).
    *     - If the `position` is non-zero, it returns the `position`, which reflects the index where the search starts. 
    *     - If `position` exceeds or is equal to the string length, it returns the length of the string.
    * - If `position` is negative, it is treated as `0`.
    * - If `position` is greater than or equal to the string length, it always returns `-1`.
    * - Non-string `searchString` values are converted to strings (e.g., numbers, booleans, etc.).
    * - `position` values are coerced to numbers (e.g., strings like `'8.7'` or `null`).
    * - Using a `RegExp` as `searchString` is allowed, but the `RegExp` is coerced to a string (via `.toString()`).
    * Examples:
    *   'hello'.indexOf('ell');           // 1
    *   'hello'.indexOf('eL');            // -1
    *   'hello'.indexOf('ell', 1);        // 1
    *   'hello'.indexOf('ell', 2);        // -1
    *   'hello'.indexOf('');              // 0
    *   'hello'.indexOf('', 10);          // 5 (empty string, position >= string length returns the string's length)
    *   'hello'.indexOf('h', -5);         // 0 (negative position treated as 0)
    *   'hello'.indexOf('h', 100);        // -1 (position exceeds string length)
    *   ''.indexOf('a');                  // -1 (empty string, cannot find 'a')
    *   ''.indexOf('');                   // 0 (empty string found at the start)
    *   'hello'.indexOf('hello', 'bello'); // 0 (position 'bello' coerced to NaN -> treated as 0)
    *   'example'.indexOf('am', 8.7);     // -1 (position 8.7 coerced to 8, exceeds string length)
    *   'example'.indexOf(/d/, 8);        // -1 (RegExp is treated as string '/d/', not found)
    *   'example'.indexOf('am', '8.7');   // -1 (position '8.7' coerced to 8, exceeds string length)
    *   'example'.indexOf(8, 6);          // -1 (number 8 coerced to string '8', not found)
*/

String.prototype.indexOf2 = function(searchString, position) {
    searchString = String(searchString)
    position = position !== undefined ? Math.trunc(position) : 0
    if(!position) position = 0
    if(searchString.length > this.length) return -1
    if (searchString === '') {
      return position < this.length ? position : this.length
    }

    if(position >= this.length) return -1

    for (let i = position; i < this.length; i++) {
      if (this.slice(i, i + searchString.length) === searchString) {
        return i
      }
    }
    return -1
}

let str = 'hello everyone'

console.log('example'.indexOf2(/d$/, 8)); // -1
console.log('hello'.indexOf2('hello', 'bello')); // 0
console.log('hello'.indexOf2('', 100)); // 5
console.log('iugh'.indexOf2('')); // 0
console.log('iugh'.indexOf2('qwerty', 2)); // -1
console.log(''.indexOf2('', 2)); // 0
console.log(''.indexOf2('')); // 0
console.log(str.indexOf2('ever', 4.7)); // 6
console.log(str.indexOf2('lo')); // 3
console.log('hello'.indexOf2('ello', NaN)); // 1
console.log('hello'.indexOf2('llo', null)); // 2
console.log('hello'.indexOf2('lo', '')); // 3
