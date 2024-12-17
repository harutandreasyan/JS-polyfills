/*
    * Array.prototype.indexOf()
    * - Takes up to two arguments: `searchElement` and `fromIndex` (optional).
    * - Returns the first index at which `searchElement` is found, or `-1` if not found.
    * - Uses strict equality (`===`) for comparisons.
    * - Special Cases:
    *     - If `fromIndex` is negative, it is treated as `array.length + fromIndex`.
    *     - Does not detect `NaN`.
    * - Examples:
    *   [1, 2, 3].indexOf(2);                    // 1
    *   [1, 2, 3].indexOf(4);                    // -1
    *   [1, 2, 1, 2].indexOf(2, 2);              // 3
    *   [NaN].indexOf(NaN);                      // -1
*/

Array.prototype.indexOf2 = function (searchElement, fromIndex = 0) {
  if (this == globalThis) {
    throw new TypeError('Array.prototype.indexOf called on null or undefined')
  }

  fromIndex = Math.trunc(fromIndex)
  let start = fromIndex < 0 ? Math.max(this.length + fromIndex, 0) : fromIndex

  for (let i = start; i < this.length; ++i) {
    if (this[i] === searchElement) {
      return i
    }
  }
  return -1
}

console.log([1, 2, 3].indexOf2(2)); // 1
console.log([1, 2, 3].indexOf2(4)); // -1
console.log([1, 2, 1, 2].indexOf2(2, 2)); // 3
console.log([1, 2, 1, 2].indexOf2(2, 2.7)); // 3
console.log([1, 2, 1, 2].indexOf2(2, -1)); // 3
console.log([NaN].indexOf2(NaN)); // -1
console.log([].indexOf2(2)); // -1
// console.log([1, 2].indexOf2.call(null, 2)); // TypeError
