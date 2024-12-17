/*
    * Array.prototype.toSorted()
    * - Takes an optional comparison function that accepts two arguments, `x` and `y`.
    * - If a comparison function is provided, it should return:
    *   - A negative number if `x` should come before `y`.
    *   - A positive number if `x` should come after `y`.
    *   - Zero if `x` and `y` should remain unchanged.
    * - Returns a new array with the elements sorted, without modifying the original array.
    * - Special Cases:
    *     - If no comparison function is provided, sorts elements as strings in Unicode order.
    *     - Undefined values are sorted to the end.
    * - Examples:
    *   [3, 1, 2].toSorted();                     // [1, 2, 3] (default string sort)
    *   [3, 1, 2].toSorted((a, b) => b - a);      // [3, 2, 1]
    * - Note:
    *   - The sort operation does NOT modify the original array.
    *   - This method works with array-like objects (objects with a `length` property and indexed elements).
    * - Iteration example:
    *   const numbers = [3, 1, 4, 1, 5, 9];
    *   const sorted = numbers.toSorted((a, b) => a - b); // [1, 1, 3, 4, 5, 9]
    *   console.log(numbers);                            // Logs: [3, 1, 4, 1, 5, 9] (unchanged)
    *   console.log(sorted);                             // Logs: [1, 1, 3, 4, 5, 9] (sorted)
    *
*/

Array.prototype.toSorted2 = function (comparator) {
    if (comparator !== undefined && typeof comparator !== 'function') {
        throw new TypeError('Comparator must be a function or undefined')
    }

    const O = Object(this)
    const len = O.length 
    const Arr = new Array(len)

    let SortCompare = function (x, y) {
        if (x === undefined && y === undefined) return 0
        if (x === undefined) return 1
        if (y === undefined) return -1

        if (comparator) {
            return comparator(x, y)
        }

        let xString = String(x)
        let yString = String(y)
        return xString < yString ? -1 : xString > yString ? 1 : 0
    }

    const items = [];
    for (let i = 0; i < len; i++) {
        if (i in O) items.push(O[i])
        else items.push(undefined)
    }

    items.sort(SortCompare)

    for (let j = 0; j < len; j++) {
        if (items[j] !== undefined) {
            Arr[j] = items[j]
        }
    }

    return Arr
}

const arr = [3, 1, 4, 1, 5, 9];
const res = arr.toSorted2((a, b) => a - b);
console.log(res); // [ 1, 1, 3, 4, 5, 9 ]
console.log(arr); // [ 3, 1, 4, 1, 5, 9 ]

const sparseArray = [3, , 2, , 1];
const res2 = sparseArray.toSorted2();
console.log(res2); // [ 1, 2, 3, <2 empty items> ]
console.log(sparseArray); // [ 3, <1 empty item>, 2, <1 empty item>, 1 ]

const mixedArray = [undefined, 10, "banana", 2];
const res3 = mixedArray.toSorted2();
console.log(res3); // [ 10, 2, 'banana', <1 empty item> ]      
console.log(mixedArray); // [undefined, 10, "banana", 2]

const arr2 = [10, 20, 30, 40]
const descSorted = arr2.toSorted2((a, b) => b - a);
console.log(descSorted); // [ 40, 30, 20, 10 ]

const arrayLike = {
    length: 3,
    0: 5,
    2: 4,
    3: 3
}
console.log(Array.prototype.toSorted2.call(arrayLike)); // [ 4, 5, <1 empty item> ]
  