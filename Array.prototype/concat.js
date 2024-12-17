/*
    * Array.prototype.concat()
    * - Takes zero or more arguments, which can be arrays or values.
    * - Returns a new array by merging the original array with the provided arguments.
    * - Does not modify the original array.
    * - Flattens arrays provided as arguments by one level (shallow merge).
    * - Special Cases:
    *     - If no arguments are provided, it returns a shallow copy of the original array.
    *     - If a non-array object is provided as an argument, it is added as-is.
    *     - Works with array-like objects that have a `length` property and indexed elements.
    *     - Does not recursively flatten nested arrays.
    * - Examples:
    *   [1, 2, 3].concat(4, 5);                  // [1, 2, 3, 4, 5]
    *   [1, 2].concat([3, 4], 5);               // [1, 2, 3, 4, 5]
    *   [1, 2].concat([3, [4, 5]]);             // [1, 2, 3, [4, 5]] (nested array not flattened)
    *   [].concat([1, 2], 3);                   // [1, 2, 3]
    *   [1].concat();                           // [1] (shallow copy of the array)
    *   Array.prototype.concat.call({0: 'a', length: 1}, 'b'); // [{0: 'a', length: 1}, 'b']
*/

Array.prototype.concat2 = function(...values) {
    const res = [...this]

    for (const value of values) {
        if (Array.isArray(value)) {
            res.push(...value)
        } else {
            res.push(value)
        }
    }

    return res
}
 
console.log([1, 2, 3].concat2(4, 5)); // [ 1, 2, 3, 4, 5 ]
console.log([1, 2].concat2([3, 4], 5)); // [ 1, 2, 3, 4, 5 ]
console.log([1, 2].concat2([3, [4, 5]])); // [ 1, 2, 3, [ 4, 5 ] ]
console.log([].concat2([1, 2], 3)); // [ 1, 2, 3 ]
console.log([1].concat2()); // [ 1 ]
console.log([1, 2, 3].concat2({name: 'Mark'}, {age: '15'})); // [ 1, 2, 3, { name: 'Mark' }, { age: '15' } ]