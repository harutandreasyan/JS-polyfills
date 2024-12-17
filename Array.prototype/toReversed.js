/*
    * Array.prototype.toReversed()
    * - Returns a new array with the elements in reverse order.
    * - Does not modify the original array.
    * - Example:
    *   [1, 2, 3].toReversed();     // [3, 2, 1]
*/

Array.prototype.toReversed2 = function() {
    let result = []
    let length = this.length
    for (let i = length - 1; i >= 0; i--) {
        result.push(this[i]);
    }
    return result
}

const arr = [10, 20, 30]
arr.toReversed2()
console.log(arr); // [ 10, 20, 30 ]

console.log([1, 2, 3].toReversed2()); // [ 3, 2, 1 ]
console.log(['abc', 'def', 'ghi'].toReversed2()); // [ 'ghi', 'def', 'abc' ]