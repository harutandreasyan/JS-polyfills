/*
    * Array.prototype.reduce()
    * - Reduces an array to a single value by applying a `callback` function to each element.
    * - Parameters:
    *   1. `callback` (required): A function with four arguments: `accumulator`, `currentValue`, `currentIndex`, and the array.
    *   2. `initialValue` (optional): The starting value for the accumulator. If omitted, the first element is used.
    * - Returns:
    *   - A single value, which is the result of running the callback function across all array elements.
    * - Key Behaviors:
    *   - Does not modify the original array.
    *   - Processes elements from left to right.
    *   - Skips empty slots in sparse arrays.
    * - Special Cases:
    *   - If the array is empty and `initialValue` is not provided, a `TypeError` is thrown.
    *   - If `initialValue` is provided:
    *      - Reduction starts from the first element of the array.
    *   - If `initialValue` is not provided:
    *      - The first array element is used as the initial value of the accumulator.
    *      - Reduction starts from the second element.
    *   - Skips empty slots in sparse arrays but processes all defined elements.
    * - Examples:
    *   [1, 2, 3].reduce((acc, cur) => acc + cur, 0); // 6
    *   [].reduce((acc, cur) => acc + cur, 10);      // 10
    *   [].reduce((acc, cur) => acc + cur);          // Throws TypeError
    * - Notes:
    *   - Works with array-like objects (e.g., `arguments` or objects with a `length` property).
    *   - Can be used to perform complex aggregations or transformations.
    *   - Handles sparse arrays correctly, skipping empty slots but processing all defined values.
    *   - Throws a `TypeError` if `callback` is not a function.
*/

Array.prototype.reduce2 = function (callback, initialValue) {
    if (this == globalThis) {
        throw new TypeError("Array.prototype.reduce called on null or undefined")
    }
    if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function")
    }

    const O = Object(this)
    const len = O.length

    if (len === 0 && initialValue === undefined) {
        throw new TypeError("Reduce of empty array with no initial value")
    }

    let k = 0
    let accumulator

    if (initialValue !== undefined) {
        accumulator = initialValue
    } else {
        let kPresent = false;
        while (k < len && !kPresent) {
            if (k in O) { 
                accumulator = O[k]
                kPresent = true
            }
            k++
        }
        if (!kPresent) { 
            throw new TypeError("Reduce of empty array with no initial value")
        }
    }

    while (k < len) {
        if (k in O) { 
            const kValue = O[k]
            accumulator = callback(accumulator, kValue, k, O)
        }
        k++
    }

    return accumulator
}


const sum = [1, 2, 3].reduce2((acc, cur) => acc + cur)
console.log(sum); // 6

const product = [1, 2, 3, 4].reduce2((acc, cur) => acc * cur, 1)
console.log(product); // 24

const emptySum = [].reduce2((acc, cur) => acc + cur, 0)
console.log(emptySum); // 0

const numbers = [1, 2, 3, 4];
const sum2 = numbers.reduce2((acc, cur) => acc + cur);
console.log(sum2); // 10

// [].reduce2(elem => elem + 10) // TypeError