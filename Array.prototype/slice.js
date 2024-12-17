/*
    * Array.prototype.slice()
    * - Takes up to two arguments: `start` (optional) and `end` (optional).
    * - Returns a new array containing elements from the array, starting at `start` and ending before `end`.
    * - Does not modify the original array (non-mutating method).
    * - Special Cases and Behaviors:
    *     - **Default Values:**
    *         - If `start` is not provided, it defaults to `0`.
    *         - If `end` is not provided, it defaults to the array's length.
    *     - **Negative Indices:**
    *         - Negative `start` or `end` values are treated as `length + start` or `length + end`.
    *         - If `start` < `-array.length`, it is treated as `0`.
    *         - If `end` < `-array.length`, it is treated as `0`.
    *     - **Empty Array Cases:**
    *         - If `start` >= `array.length`, or if `start` >= `end`, an empty array is returned.
    *     - **Sparse Arrays:**
    *         - Sparse array elements (e.g., empty slots) are preserved in the new array as `undefined`.
    *         - Only properties that exist on the original array are copied (checks with `in` operator).
    *     - **Array-Like Objects:**
    *         - Can be called on array-like objects (e.g., strings, `arguments`, or custom objects with `length` and indexed elements).
    *     - **Object Coercion:**
    *         - Non-array `this` values are coerced to objects.
    *         - Works with `Array.prototype.slice.call()` for custom behavior.
    *     - **Type Preservation:**
    *         - The new array retains the `Array` type, regardless of the type of the original object or array-like structure.
    * - Examples:
    *   [1, 2, 3, 4].slice(1, 3);                  // [2, 3] (elements from index 1 to 2)
    *   [1, 2, 3, 4].slice(-3, -1);               // [2, 3] (negative indices)
    *   [1, , 3, 4].slice(1, 3);                  // [undefined, 3] (sparse array)
    *   [1, 2, 3, 4].slice(10);                   // [] (start beyond array length)
    *   [1, 2, 3, 4].slice(2, 2);                 // [] (start equals end)
    *   [].slice(0, 10);                          // [] (empty array)
    *   [1, 2, 3].slice(-5, 2);                   // [1, 2] (negative start out of bounds)
    *   Array.prototype.slice.call('hello', 1, 4); // ['e', 'l', 'l'] (array-like object)
    *   Array.prototype.slice.call({0: 'a', 1: 'b', length: 2}, 0, 2); // ['a', 'b'] (custom object)
*/

Array.prototype.slice2 = function(start, end) {
    const O = Object(this)
    const len = Math.max(0, O.length)
    const relativeStart = start === undefined ? 0 : Math.trunc(start) || 0

    const k = relativeStart < 0 
        ? Math.max(len + relativeStart, 0) 
        : Math.min(relativeStart, len)

    const relativeEnd = end === undefined ? len : Math.trunc(end) || 0

    const final = relativeEnd < 0 
        ? Math.max(len + relativeEnd, 0) 
        : Math.min(relativeEnd, len)

    const count = Math.max(final - k, 0)
    const arr = new Array(count)
    let insertIndex = 0

    for (let i = k; i < final; i++) {
        if (i in O) { 
            arr[insertIndex] = O[i]
        }
        insertIndex++
    }

    arr.length = insertIndex
    return arr
}

console.log([1, 2, 3, 4].slice2(1, 3)); // [ 2, 3 ]
console.log([1, 2, 3, 4].slice2(-2)); // [ 3, 4 ]
console.log([1, 2, 3].slice2()); // [ 1, 2, 3 ]
console.log([1, 2, 3, 4].slice2(10)); // []
console.log(Array.prototype.slice2.call('hello', 1, 4)); // [ 'e', 'l', 'l' ]
