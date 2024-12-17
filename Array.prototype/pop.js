/*
    * Array.prototype.pop()
    * - Takes no arguments.
    * - Removes the last element from the array and returns it.
    * - Modifies the original array.
    * - Special Cases:
    *     - If the array is empty, returns `undefined`.
    * - Examples:
    *   const arr = [1, 2, 3];
    *   const last = arr.pop();                 // last = 3, arr = [1, 2]
    *   [].pop();                               // undefined
*/

Array.prototype.pop2 = function () {
    if (this.length > 0) {
      let lastElement = this[this.length - 1];
      this.length -= 1;
      return lastElement;
    }
}

const arr = [1, 2, 3]
const last = arr.pop2()
console.log(last); // 3
console.log(arr); [ 1, 2 ]
console.log([].pop2()); // undefined
