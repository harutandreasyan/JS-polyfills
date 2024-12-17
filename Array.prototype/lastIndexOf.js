/*
    * Array.prototype.lastIndexOf()
    * - Takes up to two arguments: `searchElement` and `fromIndex` (optional).
    * - Returns the last index at which `searchElement` is found, or `-1` if not found.
    * - Searches the array from right to left.
    * - Special Cases:
    *     - If `fromIndex` is negative, it is treated as `array.length + fromIndex`.
    *     - Does not detect `NaN`.
    * - Examples:
    *   [1, 2, 1, 2].lastIndexOf(2);            // 3
    *   [1, 2, 1, 2].lastIndexOf(2, 2);         // 1
    *   [NaN].lastIndexOf(NaN);                 // -1
*/

Array.prototype.lastIndexOf2 = function (searchElement, fromIndex = this.length - 1) {
    if (this == globalThis) {
        throw new TypeError('Cannot convert undefined or null to object')
    }

    fromIndex = Math.trunc(fromIndex)
    let start = fromIndex < 0 ? Math.max(this.length + fromIndex, 0) : fromIndex

    for (let i = start; i >= 0; --i) {
        if (this[i] === searchElement) {
            return i
        }
    }
    return -1
}

console.log([1, 2, 1, 2].lastIndexOf2(2)); // 3
console.log([1, 2, 1, 2].lastIndexOf2(2, 2)); // 1
console.log([1, 2, 1, 2].lastIndexOf2(2, 2.8)); // 1
console.log([1, 2, 1, 2].lastIndexOf2(1, -2)); // 2
console.log([NaN].lastIndexOf2(NaN)); // -1
// console.log([1, 2].lastIndexOf2.call(null, 2)); // TypeError
