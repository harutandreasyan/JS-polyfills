/*
    * Array.prototype.entries()
    * - Takes no arguments.
    * - Returns a new array iterator object that contains key-value pairs for each index in the array.
    * - Does not modify the original array.
    * - Special Cases:
    *     - Works with sparse arrays, including `empty` slots, which are returned as-is with their indices.
    *     - Can be used with `for...of` loops or manually iterated using `.next()`.
    *     - Key-value pairs are returned as `[index, value]`.
    * - Examples:
    *   const arr = ['a', 'b', 'c'];
    *   const iterator = arr.entries();
    *   console.log(iterator.next().value);     // [0, 'a']
    *   console.log(iterator.next().value);     // [1, 'b']
    *   console.log(iterator.next().value);     // [2, 'c']
    *   
    *   // Using for...of loop
    *   for (const [index, value] of ['x', 'y', 'z'].entries()) {
    *       console.log(index, value);  // 0 'x', 1 'y', 2 'z'
    *   }
    *   
    *   // Sparse array handling
    *   const sparse = [1, , 3];
    *   for (const entry of sparse.entries()) {
    *       console.log(entry);         // [0, 1], [1, undefined], [2, 3]
    *   }
*/

Array.prototype.entries2 = function () {
    if (this == globalThis) {
        throw new TypeError("Array.prototype.entries called on null or undefined");
    }

    const array = Object(this)
    const length = array.length >= 0 ? Math.floor(array.length) : 0;
    let index = 0 

    return {
        next: function () {
            if (index < length) {
                const value = [index, array[index]] 
                index++
                return { value, done: false } 
            } else {
                return { value: undefined, done: true } 
            }
        },
        [Symbol.iterator]: function () {
            return this
        }
    }
}

const arr = ['a', 'b', 'c']
const iterator = arr.entries2()
console.log(iterator.next().value);     // [0, 'a']
console.log(iterator.next().value);     // [1, 'b']
console.log(iterator.next());     // { value: [ 2, 'c' ], done: false }

for (const [index, value] of ['x', 'y', 'z'].entries2()) {
    console.log(index, value);  // 0 'x', 1 'y', 2 'z'
}

const sparse = [1, , 3]
for (const entry of sparse.entries2()) {
    console.log(entry);         // [0, 1], [1, undefined], [2, 3]
}

const a = [].entries2()
console.log(a.next()); // { value: undefined, done: true } 

const arrayLike = { 0: 'a', 1: 'b', length: 2 }

const iterator2 = Array.prototype.entries2.call(arrayLike)
console.log(iterator2.next()); // { value: [0, 'a'], done: false }
console.log(iterator2.next()); // { value: [1, 'b'], done: false }
console.log(iterator2.next()); // { value: undefined, done: true }
