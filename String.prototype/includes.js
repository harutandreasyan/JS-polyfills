/*
    * String.prototype.includes(substring, position)
    * - Takes two arguments:
    *   - `substring`: The string to search for (required, will be converted to a string if not already).
    *   - `position`: The index to start the search from (optional, default is `0`, will be converted to a number if not already).
    * - Returns `true` if the `substring` is found within the string, otherwise `false`.
    * - Case-sensitive: Matches must have the exact casing.
    * - Empty `substring` always returns `true`.
    * - If `position` is negative, it is treated as `0`.
    * - If `position` is greater than or equal to the string length, it always returns `false`.
    * - Non-string `substring` values are converted to strings (e.g., numbers, booleans, etc.).
    * - `position` values are coerced to numbers (e.g., strings like `'8.7'` or `null`).
    * - Using a `RegExp` as `substring` throws a `TypeError`.
    * Examples:
    *   'hello'.includes('ell');           // true
    *   'hello'.includes('eL');            // false
    *   'hello'.includes('ell', 1);        // true
    *   'hello'.includes('ell', 2);        // false
    *   'hello'.includes('');              // true
    *   'hello'.includes('', 10);          // false
    *   'hello'.includes('h', -5);         // true
    *   'hello'.includes('h', 100);        // false
    *   ''.includes('a');                  // false
    *   ''.includes('');                   // true
    *   'hello'.includes('hello', 'bello'); // false (position 'bello' coerced to NaN -> treated as 0)
    *   'example'.includes('am', 8.7);     // false (position 8.7 -> coerced to 8, exceeds string length)
    *   'example'.includes(/d/, 8);        // TypeError (RegExp is not allowed)
    *   'example'.includes('am', '8.7');   // false (position '8.7' coerced to 8, exceeds string length)
    *   'example'.includes(8, 6);          // false (number 8 coerced to string '8', not found)
*/

String.prototype.includes2 = function(searchString, position) {
    if(searchString instanceof RegExp) {
        throw new TypeError('First argument to String.prototype.includes must not be a regular expression')
    }
    searchString = String(searchString)
    position = position !== undefined ? Math.trunc(position) : 0
    if(position < 0) position = 0
    if(position >= this.length) return false
    return this.indexOf(searchString, position) !== -1
}

let str = 'hello 8i am a developer'
console.log(str.includes2('hello')); // true
console.log(str.includes2('good')); // false
console.log(str.includes2('hello', 0)); // true
console.log(str.includes2('hello', undefined)); // true
console.log(str.includes2('hello', NaN)); // true
console.log(str.includes2('hello', null)); // true
console.log(str.includes2('hello', false)); // true
console.log(str.includes2('hello', '')); // true
console.log(str.includes2('')); // true
console.log(str.includes2('hello', 'bello')); // true
console.log(str.includes2('hello', 7)); // false
console.log(str.includes2('am', 8)); // true
console.log(str.includes2('lop', 9)); // true
console.log(str.includes2('am', 8.7)); // true
console.log(str.includes2('am', '8.7')); // true
console.log(str.includes2(8, 6)); // true
console.log(str.includes2('developer', -1)); // true
// console.log(str.includes2(/d/, 8)); // TypeError


