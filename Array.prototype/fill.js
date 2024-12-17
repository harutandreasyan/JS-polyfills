/*
    * Array.prototype.fill()
    * - Takes up to three arguments: `value`, `start` (optional), and `end` (optional).
    * - Replaces elements in the array with the specified `value` from `start` index to `end` index (non-inclusive).
    * - Modifies the original array.
    * - Special Cases:
    *     - If `start` or `end` are not provided, defaults are `0` and `array.length`, respectively.
    *     - If the array is empty, no changes are made.
    *     - If `start` is negative, it is treated as `array.length + start`.
    *     - If `end` is negative, it is treated as `array.length + end`.
    * - Examples:
    *   [1, 2, 3].fill(0);                  // [0, 0, 0]
    *   [1, 2, 3, 4].fill(5, 1, 3);         // [1, 5, 5, 4]
    *   [].fill(10);                        // []
    *   [1, 2, 3, 4, 5].fill(0, -2, -1);    // [1, 2, 0, 4, 5] (negative indices treated)
*/


Array.prototype.fill2 = function(value, start, end) {
    if(this.length === 0) return this

    start = start !== undefined ? Math.trunc(start) : 0
    end = end !== undefined ? Math.trunc(end) : this.length

    if(start < 0) start += this.length
    if(end < 0) end += this.length

    for(let i = start; i < end; ++i) {
        this[i] = value
    }

    return this
}

console.log([1, 2, 3, 4].fill2(5, 1, 3)); // [ 1, 5, 5, 4 ]
console.log([1, 2, 3, 4].fill2(5, 1.7, 3.8)); // [ 1, 5, 5, 4 ]
console.log([].fill2(10)); // []
console.log([1, 2, 3, 4].fill2(5, -2, 3)); // [ 1, 2, 5, 4 ]
console.log([1, 2, 3, 4].fill2({}, 1, 3)); // [ 1, {}, {}, 4 ]
console.log([1, 2, 3].fill2(0)); // [ 0, 0, 0 ]
console.log([1, 2, 3, 4, 5].fill2(0, -2, -1)); // [ 1, 2, 3, 0, 5 ]
