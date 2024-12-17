/*
    * Array.prototype.push()
    * - Takes one or more arguments.
    * - Adds the specified elements to the end of the array.
    * - Returns the new length of the array.
    * - Modifies the original array.
    * - Examples:
    *   const arr = [1, 2];
    *   const len = arr.push(3, 4);             // len = 4, arr = [1, 2, 3, 4]
*/

Array.prototype.push2 = function(...params) {
    for(let i = 0; i < params.length; ++i) {
        this[this.length] = params[i]
    }
    return this.length
}

const arr = [1, 2]
const len = arr.push2(3, 4)
console.log(len); // 4
console.log(arr); // [ 1, 2, 3, 4 ]
