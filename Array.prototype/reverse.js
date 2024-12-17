/*
    * Array.prototype.reverse()
    * - Takes no arguments.
    * - Reverses the order of the array elements in place.
    * - Returns the modified array.
    * - Modifies the original array.
    * - Examples:
    *   const arr = [1, 2, 3];
    *   arr.reverse();  // arr = [3, 2, 1]
*/

Array.prototype.reverse2 = function () {
  let length = this.length
  for (let i = 0, j = length - 1; i < j; i++, j--) {
    let temp = this[i]
    this[i] = this[j]
    this[j] = temp
  }

  return this
}

const arr = [10, 20, 30]
arr.reverse2()
console.log(arr); // [ 30, 20, 10 ]

console.log([1, 2, 3].reverse2()); // [ 3, 2, 1 ]
console.log(['abc', 'def', 'ghi'].reverse2()); // [ 'ghi', 'def', 'abc' ]