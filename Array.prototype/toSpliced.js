/*
    * Array.prototype.toSpliced()
    * - Creates a new array by removing, replacing, or inserting elements without modifying the original array.
    * - Parameters:
    *   1. `start` (required): The index at which to start modifying the array.
    *      - If negative, it is treated as `array.length + start`.
    *      - If the resulting index is less than 0, it starts from index 0.
    *   2. `deleteCount` (optional): The number of elements to remove starting from `start`.
    *      - If omitted, all elements from `start` to the end of the array are considered for removal.
    *      - If `deleteCount` is negative or not a number, it is treated as 0.
    *   3. `...items` (optional): Elements to insert at the `start` position. 
    * - Returns:
    *   - A new array with the modifications applied.
    * - Does NOT modify the original array.
    * - Special Cases:
    *     - If `deleteCount` is greater than the number of elements from `start` to the end, it removes all those elements.
    *     - If `deleteCount` is 0, no elements are removed, and only the provided `items` are inserted.
    * - Examples:
    *   const arr = [1, 2, 3, 4, 5];
    *   
    *   // Remove 2 elements starting at index 1, insert 8 and 9
    *   const result = arr.toSpliced(1, 2, 8, 9);
    *   console.log(result);  // [1, 8, 9, 4, 5]
    *   console.log(arr);     // [1, 2, 3, 4, 5] (original array unchanged)
    * 
    *   // Remove all elements starting from index 3
    *   const result2 = arr.toSpliced(3);
    *   console.log(result2); // [1, 2, 3]
    *   console.log(arr);     // [1, 2, 3, 4, 5] (original array unchanged)
    * 
    *   // Insert without removing any elements
    *   const result3 = arr.toSpliced(1, 0, 100, 200);
    *   console.log(result3); // [1, 100, 200, 2, 3, 4, 5]
    *   console.log(arr);     // [1, 2, 3, 4, 5] (original array unchanged)
    * 
    * - Notes:
    *   - This method works with array-like objects (objects with a `length` property and indexed elements).
    *   - The method does NOT modify the original array; a new array is returned.
    *   - Elements are shifted appropriately due to insertion or removal.
*/

Array.prototype.toSpliced2 = function(start, skipCount, ...items) {
    const O = Object(this)
    const len = O.length
    const relativeStart = Number.isFinite(start) ? Math.trunc(start) : start

    let actualStart
    if (relativeStart === -Infinity) {
        actualStart = 0
    } else if (relativeStart < 0) {
        actualStart = Math.max(len + relativeStart, 0)
    } else {
        actualStart = Math.min(relativeStart, len)
    }

    const insertCount = items.length

    let actualSkipCount
    if (start === undefined) {
        actualSkipCount = 0
    } else if (skipCount === undefined) {
        actualSkipCount = len - actualStart
    } else {
        const sc = Number.isFinite(skipCount) ? Math.trunc(skipCount) : skipCount
        actualSkipCount = Math.max(0, Math.min(sc, len - actualStart))
    }

    const newLen = len + insertCount - actualSkipCount

    if (newLen > 2 ** 53 - 1) {
        throw new TypeError('Array size exceeds the maximum allowed length.')
    }

    const Arr = new Array(newLen)
    let i = 0
    for (; i < actualStart; i++) {
        Arr[i] = O[i]
    }

    for (const item of items) {
        Arr[i++] = item
    }

    let r = actualStart + actualSkipCount
    for (; i < newLen; i++, r++) {
        Arr[i] = O[r]
    }

    return Arr
}

const arr = [1, 2, 3, 4, 5];
const result = arr.toSpliced2(1, 2, 8, 9);
console.log(result); // [1, 8, 9, 4, 5]
console.log(arr);    // [1, 2, 3, 4, 5]

const result2 = arr.toSpliced2(2);
console.log(result2); // [1, 2]

