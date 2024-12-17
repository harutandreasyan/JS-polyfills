/*
    * Array.prototype.at()
    * - Takes one argument: an integer index.
    * - Returns the element at the specified index in the array.
    * - Special Cases:
    *     - If the index is negative, it counts from the end of the array.
    *     - If the index is out of bounds (greater than or equal to the array length or less than -array.length), it returns `undefined`.
    *     - Works with array-like objects, such as strings or objects with numeric keys.
    * - Examples:
    *   const arr = [10, 20, 30, 40];
    *   arr.at(0);                    // 10 (element at index 0)
    *   arr.at(-1);                   // 40 (last element)
    *   arr.at(2);                    // 30 (element at index 2)
    *   arr.at(10);                   // undefined (index out of bounds)
    *   arr.at(-5);                   // undefined (index out of bounds)
    *   Array.prototype.at.call({0: 'a', 1: 'b', length: 2}, 1); // 'b' (works with array-like objects)
    *   Array.prototype.at.call({0: 'a', 1: 'b', length: 2}, -1); // 'b' (last element in array-like object)
*/

Array.prototype.at2 = function(index) {
    if (this === globalThis) {
        throw new TypeError('Array.prototype.at2 called on null or undefined')
    }
  
    index = Math.trunc(index) || 0
    if(index >= this.length || index < -this.length) return undefined
    if(index < 0) index += this.length
    
    return this[index]
}

let arr = [10, 20, 30, 40]

console.log(arr.at2(1)); // 20
console.log(arr.at2(1.9)); // 20
console.log(arr.at2(-1)); // 40
console.log(arr.at2(-1.9)); // 40
console.log(arr.at2('-1.1')); // 40
console.log(arr.at2(-4)); // 10
console.log(arr.at2()); // 10
console.log(arr.at2('2')); // 30
console.log(arr.at2(-5)); // undefined
console.log(arr.at2(NaN)); // 10
console.log(arr.at2(false)); // 10
console.log(arr.at2(null)); // 10
console.log(Array.prototype.at2.call({0: 'a', 1: 'b', length: 2}, 1)); // 'b'
console.log(Array.prototype.at2.call({0: 'a', 1: 'b', length: 2}, -1)); // 'b'
// console.log(Array.prototype.at2.call(null)) // TypeError
// console.log(Array.prototype.at2.call(undefined, -1)); // TypeError
