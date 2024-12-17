/*
    * Array.prototype.sort()
    * - Takes an optional comparison function that accepts two arguments, `x` and `y`.
    * - If a comparison function is provided, it should return:
    *   - A negative number if `x` should come before `y`.
    *   - A positive number if `x` should come after `y`.
    *   - Zero if `x` and `y` should remain unchanged.
    * - Sorts the elements of the array in place and returns the sorted array.
    * - Modifies the original array.
    * - Special Cases:
    *     - If no comparison function is provided, sorts elements as strings in Unicode order.
    *     - Undefined values are sorted to the end.
    * - Examples:
    *   [3, 1, 2].sort();                        // [1, 2, 3] (default string sort)
    *   [3, 1, 2].sort((a, b) => b - a);         // [3, 2, 1]
    * - Note:
    *   - The sort operation is in place, meaning the original array is modified.
    *   - This method works with array-like objects (objects with a `length` property and indexed elements).
    * - Iteration example:
    *   const numbers = [3, 1, 4, 1, 5, 9];
    *   numbers.sort((a, b) => a - b);            // [1, 1, 3, 4, 5, 9]
    *   console.log(numbers);                     // Logs: [1, 1, 3, 4, 5, 9]
*/

Array.prototype.sort2 = function (comparator) {
    if (this == globalThis) {
        throw new TypeError("Array.prototype.sort called on null or undefined")
    }

    const obj = Object(this)
    const len = obj.length 

    if (comparator !== undefined && typeof comparator !== "function") {
        throw new TypeError("Comparator must be a function or undefined");
    }

    const SortCompare = (x, y) => {
        if (x === undefined && y === undefined) return 0
        if (x === undefined) return 1
        if (y === undefined) return -1

        if (comparator) {
            return comparator(x, y)
        }

        const xStr = String(x)
        const yStr = String(y)
        return xStr < yStr ? -1 : xStr > yStr ? 1 : 0
    }

    const sortedList = []
    for (let i = 0; i < len; i++) {
        if (i in obj) {
            sortedList.push(obj[i])
        }
    }
    sortedList.sort(SortCompare)

    let itemCount = sortedList.length
    let j = 0
    while (j < itemCount) {
        obj[j] = sortedList[j]
        j++
    }

    while (j < len) {
        delete obj[j]
        j++
    }

    return obj
}

const arr = [3, 1, 4, 1, 5, 9];
arr.sort2((a, b) => a - b); 
console.log(arr); // [1, 1, 3, 4, 5, 9]

const sparseArray = [3, , 2, , 1];
sparseArray.sort2(); 
console.log(sparseArray); // [ 1, 2, 3, <2 empty items> ]

const mixedArray = [undefined, 10, "banana", 2];
mixedArray.sort2(); 
console.log(mixedArray); // [10, 2, "banana", undefined]

// [1].sort2.call(null) // TypeError