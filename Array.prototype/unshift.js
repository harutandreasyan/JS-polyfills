/*
    * Array.prototype.unshift()
    * - Takes one or more arguments and prepends them to the beginning of the array.
    * - Returns the new length of the array.
    * - Modifies the original array.
    * - Special Cases:
    *     - If no arguments are provided, it returns the current length of the array (no elements are added).
    * - Examples:
    *   const arr = [1, 2, 3];
    *   const length = arr.unshift(0);           // length = 4, arr = [0, 1, 2, 3]
    *   [].unshift(1);                           // arr = [1]
*/

Array.prototype.unshift2 = function (...params) {
    if (params.length > 0) {
        for (let i = this.length - 1; i >= 0; --i) {
            this[params.length + i] = this[i]
        }

        for (let i = 0; i < params.length; ++i) {
            this[i] = params[i]
        }
    }

    return this.length
}

let arr = [1, 2, 3]
let len = arr.unshift2(4, 5)
console.log(len); // 5
console.log(arr); // [ 4, 5, 1, 2, 3 ]
console.log([10, 20, 30].unshift2()); // 3

let arr2 = []
arr2.unshift2(1)
console.log(arr2); // [ 1 ]
