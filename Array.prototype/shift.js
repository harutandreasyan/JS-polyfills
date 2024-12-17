/*
    * Array.prototype.shift()
    * - Takes no arguments.
    * - Removes the first element from the array and returns it.
    * - Modifies the original array.
    * - Special Cases:
    *     - If the array is empty, returns `undefined`.
    * - Examples:
    *   const arr = [1, 2, 3];
    *   const first = arr.shift();               // first = 1, arr = [2, 3]
    *   [].shift();                              // undefined
*/

Array.prototype.shift2 = function() {
    if(this.length > 0) {
        let firstElement = this[0]
        for(let i = 0; i < this.length; ++i) {
            this[i] = this[i + 1]
        }
        this.length -= 1
        return firstElement
    }

}

const arr = [1, 2, 3]
const first = arr.shift2()
console.log(first); // 1
console.log(arr); // [ 2, 3 ]
console.log([].shift2()); // undefined