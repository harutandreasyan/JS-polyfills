/*
    * Array.prototype.copyWithin(target, start[, end])
    * - Copies a sequence of array elements within the same array, modifying it in place.
    * - Parameters:
    *   - `target`: The index where the copied sequence will start being placed.
    *     - If negative, it is treated as `array.length + target`.
    *     - Values beyond the array length will result in no copying.
    *   - `start`: The index to begin copying elements from.
    *     - If negative, it is treated as `array.length + start`.
    *   - `end` (optional): The index to stop copying (exclusive).
    *     - Defaults to `array.length` if not provided.
    *     - If negative, it is treated as `array.length + end`.
    * - Returns: The modified array (in-place).
    * - Behavior and Cases:
    *   1. **Positive indices**: Copies elements from `start` to `end` into the array starting at `target`.
    *      - [1, 2, 3, 4].copyWithin(1, 2); // [1, 3, 4, 4]
    *   2. **Negative indices**: Negative `target`, `start`, or `end` are converted to positive indices relative to the array length.
    *      - [1, 2, 3, 4].copyWithin(-3, -2); // [1, 3, 4, 4]
    *   3. **Omitted `end`**: Copies from `start` to the array's end if `end` is not specified.
    *      - [1, 2, 3, 4].copyWithin(0, 2); // [3, 4, 3, 4]
    *   4. **Overlapping ranges**: Overlapping source (`start`) and target (`target`) ranges are handled correctly.
    *      - If `target > start`, copying happens in reverse to prevent overwriting.
    *      - [1, 2, 3, 4].copyWithin(1, 0, 2); // [1, 1, 2, 4]
    *   5. **Empty range (start >= end)**: If the range to copy is empty, the array remains unchanged.
    *      - [1, 2, 3, 4].copyWithin(0, 3, 3); // [1, 2, 3, 4]
    *   6. **Target outside array bounds**: If `target` is greater than the array length, no copying occurs.
    *      - [1, 2, 3, 4].copyWithin(10, 1); // [1, 2, 3, 4]
    *   7. **`start` or `end` out of bounds**: Indices are clamped to valid range `[0, array.length]`.
    *      - [1, 2, 3, 4].copyWithin(0, -10, 10); // [1, 2, 3, 4]
    *   8. **No-op for empty array**: Copying on an empty array does nothing.
    *      - [].copyWithin(0, 1, 2); // []
    * - Notes:
    *   - The method modifies the original array and does not create a new one.
    *   - The array's length remains unchanged, even if elements are overwritten or deleted.
    *   - Works on sparse arrays:
    *      - Missing elements are treated as `undefined` and copied as such.
    *   - Handles all array-like objects (e.g., arguments, NodeLists).
*/

Array.prototype.copyWithin2 = function(target, start, end) {
    if (this == globalThis) {
        throw new TypeError('Array.prototype.copyWithin called on null or undefined')
    }
    let O = Object(this)

    let len = Math.max(0, Math.trunc(O.length))

    let relativeTarget = Math.trunc(target)
    let to = relativeTarget < 0 ? Math.max(len + relativeTarget, 0) : Math.min(relativeTarget, len)

    let relativeStart = Math.trunc(start)
    let from = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len)

    let relativeEnd = end === undefined ? len : Math.trunc(end)
    let final = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len)

    let count = Math.min(final - from, len - to)

    let direction = 1
    if (from < to && to < from + count) {
        direction = -1
        from += count - 1
        to += count - 1
    }

    while (count > 0) {
        let fromKey = from.toString()
        let toKey = to.toString()

        if (fromKey in O) {
            O[toKey] = O[fromKey]
        } else {
            delete O[toKey]
        }

        from += direction
        to += direction
        count--
    }

    return O
}

console.log([1, 2, 3, 4].copyWithin2(1, 2)); // [ 1, 3, 4, 4 ]
console.log([1, 2, 3, 4].copyWithin2(-3, -2)); // [ 1, 3, 4, 4 ]
console.log([1, 2, 3, 4].copyWithin2(0, 2)); // [ 3, 4, 3, 4 ]
console.log([1, 2, 3, 4].copyWithin2(1, 0, 2)); // [ 1, 1, 2, 4 ]
console.log([1, 2, 3, 4].copyWithin2(0, 3, 3)); // [ 1, 2, 3, 4 ]
console.log([1, 2, 3, 4, 5].copyWithin2(-100, 1, 4)); // [ 2, 3, 4, 4, 5 ]
console.log([1, 2, 3, 4].copyWithin2(1.2, 0.5, 3.9)); // [ 1, 1, 2, 3 ]
console.log([].copyWithin2(0, 1, 2)); // []
console.log([1, 2, 3, 4].copyWithin2(0, -10, 10)); // [ 1, 2, 3, 4 ]
console.log([1, 2, 3, 4].copyWithin2(10, 1)); // [ 1, 2, 3, 4 ]
console.log([1, , 3, 4].copyWithin2(0, 1)); // [ <1 empty item>, 3, 4, 4 ]
console.log([1, , 3, 4].copyWithin2(2, 3)); // [ 1, <1 empty item>, 4, 4 ]

