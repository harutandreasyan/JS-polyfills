/*
    * Array.prototype.with()
    * - Returns a new array with the element at the specified index replaced by a new value.
    * - Parameters:
    *   1. `index` (required): The index of the element to be replaced.
    *      - If negative, it is treated as `array.length + index`.
    *   2. `value`: The new value to insert at the specified index.
    * - Returns:
    *   - A new array with the specified index replaced by the new value.
    * - Throws:
    *   - `RangeError` if `index` is out of bounds.
    * - Examples:
    *   const arr = [1, 2, 3];
    *   const newArr = arr.with(1, 4);
    *   console.log(newArr);  // [1, 4, 3]
    *   console.log(arr);     // [1, 2, 3] (original array unchanged)
    * 
    *   const newArr2 = arr.with(-1, 5);
    *   console.log(newArr2); // [1, 2, 5]
    *   console.log(arr);     // [1, 2, 3] (original array unchanged)
    * 
    * - Note:
    *   - This method does not modify the original array.
    *   - It returns a new array with the specified modifications.
*/

Array.prototype.with2 = function (index, value) {
    const O = Object(this)

    const len = O.length
    const relativeIndex = Number(index);
    const actualIndex = relativeIndex >= 0 ? relativeIndex : len + relativeIndex

    if (actualIndex >= len || actualIndex < 0) {
        throw new RangeError('Index out of bounds')
    }

    const arr = new Array(len)

    for (let k = 0; k < len; k++) {
        const propKey = String(k)
        const fromValue = k === actualIndex ? value : O[propKey]
        arr[propKey] = fromValue
    }

    return arr
}

const arr = [1, 2, 3, 4, 5];
console.log(arr.with2(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]

const arr2 = [1, 2, 3, 4, 5];
console.log(arr2.with2(2, 6).map((x) => x ** 2)); // [1, 4, 36, 16, 25]

const arr3 = [1, , 3, 4, , 6];
console.log(arr3.with2(0, 2)); // [2, undefined, 3, 4, undefined, 6]
