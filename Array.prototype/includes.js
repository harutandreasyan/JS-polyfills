/*
    * Array.prototype.includes()
    * - Takes up to two arguments: `searchElement` and `fromIndex` (optional).
    * - Returns `true` if the array contains `searchElement`, otherwise `false`.
    * - Uses strict equality (`===`) for comparisons.
    * - Special Cases:
    *     - If `fromIndex` is negative, it is treated as `array.length + fromIndex`.
    *     - For `NaN`, it returns `true` if `NaN` exists in the array, unlike `indexOf()`.
    *     - Empty slots in sparse arrays are treated as `undefined`, so searching for `undefined` in such arrays returns `true`.
    *     - A negative `fromIndex` less than `-array.length` is treated as starting at index `0`.
    * - Examples:
    *   [1, 2, 3].includes(2);                   // true
    *   [1, 2, 3].includes(4);                   // false
    *   [NaN].includes(NaN);                     // true
    *   ['a', 'b', 'c'].includes('b', -2);       // true
    *   [1, , 3].includes(undefined);            // true (empty slot treated as undefined)
    *   [1, , 3].includes(undefined, -10);       // true (negative index out-of-bounds treated as 0)
*/



Array.prototype.includes2 = function (searchElement, fromIndex = 0) {
  if (this == globalThis) {
    throw new TypeError('Cannot convert undefined or null to object')
  }
  let start = fromIndex < 0 ? Math.max(this.length + fromIndex, 0) : fromIndex

  for (let i = start; i < this.length; ++i) {
    if (this[i] === searchElement || isNaN(this[i])) {
      return true
    }
  }
  return false
}

console.log([1, 2, 3].includes2(2)); // true
console.log([1, 2, 3].includes2(4)); // false 
console.log([NaN].includes2(NaN)); // true
console.log([2 * undefined].includes2(NaN)); // true
console.log(['a', 'b', 'c'].includes2('b', -2)); // true
console.log([1, 2, 3].includes(2, -1)) // false
console.log([1, 2, 3, , 5].includes2(undefined)); // true
console.log([1, , 3].includes2(undefined, -10)); // true
// console.log([1, 2].includes2.call(undefined, 2)); // TypeError