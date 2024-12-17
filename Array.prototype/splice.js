/*
    * Array.prototype.splice()
    * - Allows modifying an array by removing, replacing, or inserting elements.
    * - Parameters:
    *   1. `start` (required): The index at which to start modifying the array.
    *      - If negative, it is treated as `array.length + start`.
    *      - If the resulting index is less than 0, it starts from index 0.
    *   2. `deleteCount` (optional): The number of elements to remove starting from `start`.
    *      - If omitted, all elements from `start` to the end of the array are removed.
    *      - If `deleteCount` is negative or not a number, it is treated as 0.
    *   3. `...items` (optional): Elements to insert at `start` position. 
    * - Returns:
    *   - A new array containing the removed elements.
    * - Modifies the original array by:
    *     - Removing `deleteCount` elements starting from `start`.
    *     - Inserting new elements (`...items`) at the `start` position.
    *     - Adjusting the array length accordingly.
    * - Special Cases:
    *     - If `deleteCount` is greater than the number of elements from `start` to the end, it removes all those elements.
    *     - If `deleteCount` is 0, no elements are removed, and only the provided `items` are inserted.
    * - Examples:
    *   const arr = [1, 2, 3, 4, 5];
    *   
    *   // Remove 2 elements starting at index 1, insert 8 and 9
    *   const removed = arr.splice(1, 2, 8, 9);
    *   console.log(removed);  // [2, 3]
    *   console.log(arr);      // [1, 8, 9, 4, 5]
    * 
    *   // Remove all elements starting from index 3
    *   const removed2 = arr.splice(3);
    *   console.log(removed2); // [4, 5]
    *   console.log(arr);      // [1, 8, 9]
    * 
    *   // Insert without removing any elements
    *   arr.splice(1, 0, 100, 200);
    *   console.log(arr);      // [1, 100, 200, 8, 9]
    * 
    * - Notes:
    *   - This method works with array-like objects (objects with a `length` property and indexed elements).
    *   - The method modifies the original array.
    *   - Elements shifted due to insertion or removal are updated accordingly.
*/

Array.prototype.splice2 = function splice(start = 0, deleteCount = 0, ...items) {
    const O = Object(this)
    const len = O.length

    const relativeStart = Math.trunc(start)
    const actualStart = relativeStart < 0
        ? Math.max(len + relativeStart, 0)
        : Math.min(relativeStart, len)

    let actualDeleteCount = 0
    if (deleteCount !== undefined) {
        const dc = Number(deleteCount)
        actualDeleteCount = !Number.isFinite(dc) || dc < 0
            ? 0
            : Math.min(dc, len - actualStart)
    }

    if (len + items.length - actualDeleteCount > 2 ** 53 - 1) {
        throw new TypeError('Array size limit exceeded')
    }

    const removed = new Array(actualDeleteCount)
    for (let i = 0; i < actualDeleteCount; i++) {
        const index = actualStart + i
        if (index in O) {
            removed[i] = O[index]
        }
    }

    if (items.length < actualDeleteCount) {
        for (let i = actualStart; i < len - actualDeleteCount; i++) {
            O[i + items.length] = O[i + actualDeleteCount]
        }
        for (let i = len; i > len - actualDeleteCount + items.length; i--) {
            delete O[i - 1]
        }
    }
    else if (items.length > actualDeleteCount) {
        for (let i = len - actualDeleteCount; i > actualStart; i--) {
            O[i + items.length - 1] = O[i + actualDeleteCount - 1]
        }
    }

    for (let i = 0; i < items.length; i++) {
        O[actualStart + i] = items[i]
    }

    O.length = len - actualDeleteCount + items.length
    return removed
}

const arr = [1, 2, 3, 4, 5];
console.log(arr.splice2(2, 2, 'a', 'b', 'c')); // [3, 4] 
console.log(arr); // [1, 2, 'a', 'b', 'c', 5]

const sparseArr = [1, , 3]; 
console.log(sparseArr.splice2(1, 1, 'x')); // [ <1 empty item> ]
console.log(sparseArr); // [1, 'x', 3]
