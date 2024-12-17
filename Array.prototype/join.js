/*
    * Array.prototype.join()
    * - Converts array elements to strings and concatenates them, separated by the specified `separator`.
    * - Takes a single optional argument, `separator`:
    *     - Specifies the string to insert between array elements.
    *     - Defaults to `,` if no `separator` is provided.
    * - Returns a string representing the array elements joined together.
    * - Works with array-like objects (e.g., objects with a `length` property and indexed elements).
    * - Handles sparse arrays:
    *     - Missing indices are treated as if they contain `undefined`.
    *     - `undefined` and `null` elements are converted to empty strings.
    * - Does not modify the original array.
    * - Handles errors:
    *     - Throws a `TypeError` if called on `null` or `undefined`.
    * - Edge Cases:
    *     - Empty array: Returns an empty string (`""`).
    *     - Array with one element: Returns the string representation of the single element.
    *     - Array with `undefined` or `null` elements: These are treated as empty strings.
    * - Examples:
    *   [1, 2, 3].join();                        // "1,2,3" (default separator is `,`)
    *   [1, 2, 3].join(' - ');                   // "1 - 2 - 3"
    *   [].join();                               // "" (empty array results in empty string)
    *   [undefined, null].join();                // "," (both elements treated as empty strings)
    *   [1, , 3].join();                         // "1,,3" (sparse slot treated as empty)
    *   Array.prototype.join.call({ 0: 'x', 1: 'y', length: 2 }, '-');
    *                                            // "x-y" (works with array-like objects)
*/


Array.prototype.join2 = function(separator) {
    if (this === globalThis) {
      throw new TypeError("Array.prototype.join called on null or undefined")
    }

    const O = Object(this);
    const len = O.length
    const sep = separator === undefined ? "," : String(separator)
    let result = ""
    let index = 0

    while (index < len) {
      if (index > 0) {
        result += sep
      }

      const element = O[index]

      if (element !== undefined && element !== null) {
        result += String(element)
      }
      index++
    }

    return result
}
  
console.log([1, 2, 3].join2()); // "1,2,3"
console.log([1, 2, 3].join2(' - ')); // "1 - 2 - 3"
console.log([].join2()); // ""
console.log([undefined, null].join2()); // ","
console.log(["a", "b", "c"].join2()); // "a,b,c"
console.log(["a", "b", "c"].join2("-")); // "a-b-c"
console.log(["a", , "c"].join2("-")); // "a--c"
console.log([1, null, undefined, 4].join2()); // "1,,4"
console.log([].join2()); // ""
console.log([1].join2()); // "1"
console.log(Array.prototype.join2.call({ 0: "a", 1: "b", length: 2 }, "-")); // "a-b" 
// console.log(Array.prototype.join2.call(null, "-")); // TypeError

