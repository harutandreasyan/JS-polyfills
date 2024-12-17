/*
    * Array.prototype.keys()
    * - Takes no arguments.
    * - Returns a new iterator object containing the keys (indices) of the array, starting from 0.
    * - Works on array-like objects (objects with a `length` property and indexed elements).
    * - Does not modify the original array.
    * - Compatible with `for...of` loops and spread syntax because the returned iterator implements the iterable protocol.
    * - Special Cases:
    *     - Works on sparse arrays:
    *         - Includes the indices of all slots, even if they are empty (undefined or missing).
    *     - For an empty array, the returned iterator immediately completes with no keys.
    *     - Can be used with array-like objects, such as `arguments` or objects manually defining `length` and indexed properties.
    * - Throws:
    *     - A `TypeError` if called on `null` or `undefined`.
    * - Examples:
    *   [...[1, , 3].keys()];                    // [0, 1, 2] (includes index of the empty slot)
    *   [...[].keys()];                          // [] (empty array has no keys)
    *   Array.prototype.keys.call({ 0: 'a', 2: 'b', length: 3 });
    *                                            // [0, 1, 2] (works with array-like objects)
    * - Iteration example:
    *   const array = ['a', , 'c'];
    *   const keysIterator = array.keys();
    *   for (const key of keysIterator) {
    *     console.log(key);                      // Logs: 0, 1, 2
    *   }
*/


Array.prototype.keys2 = function () {
    if (this == globalThis) {
      throw new TypeError("Array.prototype.keys called on null or undefined");
    }
    const O = Object(this)

    let index = 0
    const len = O.length 

    return {
      next() {
        if (index < len) {
          return { value: index++, done: false }
        } else {
          return { value: undefined, done: true }
        }
      },
      [Symbol.iterator]() {
        return this
      },
    }
}

const arr = ["a", "b", "c"]
const keysIterator = arr.keys2();

console.log(keysIterator.next()); // { value: 0, done: false }
console.log(keysIterator.next()); // { value: 1, done: false }
console.log(keysIterator.next()); // { value: 2, done: false }
console.log(keysIterator.next()); // { value: undefined, done: true }

for (const key of arr.keys2()) {
  console.log(key); // 0, 1, 2
}

const obj = { 0: "x", 1: "y", length: 2 };
const keysObj = Array.prototype.keys2.call(obj);
console.log([...keysObj]); // [0, 1]

console.log([...[1, , 3].keys2()]); // [ 0, 1, 2 ]
console.log([...[].keys2()]); // []
