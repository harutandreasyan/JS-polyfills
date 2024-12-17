/*
    * Array.prototype.values()
    * - Takes no arguments.
    * - Returns a new iterator object containing the values of the array in sequential order.
    * - Works on array-like objects (objects with a `length` property and indexed elements).
    * - Does not modify the original array.
    * - Compatible with `for...of` loops and spread syntax because the returned iterator implements the iterable protocol.
    * - Special Cases:
    *     - Works on sparse arrays:
    *         - Returns `undefined` for empty slots (missing or undefined values).
    *     - For an empty array, the returned iterator immediately completes with no values.
    *     - Can be used with array-like objects, such as `arguments` or objects manually defining `length` and indexed properties.
    * - Throws:
    *     - A `TypeError` if called on `null` or `undefined`.
    * - Examples:
    *   [...['a', 'b', 'c'].values()];           // ['a', 'b', 'c']
    *   [...[1, , 3].values()];                  // [1, undefined, 3] (includes `undefined` for the empty slot)
    *   [...[].values()];                        // [] (empty array has no values)
    *   Array.prototype.values.call({ 0: 'x', 1: 'y', length: 2 });
    *                                            // ['x', 'y'] (works with array-like objects)
    * - Iteration example:
    *   const array = ['a', 'b', 'c'];
    *   const valuesIterator = array.values();
    *   for (const value of valuesIterator) {
    *     console.log(value);                    // Logs: 'a', 'b', 'c'
    *   }
*/


Array.prototype.values2 = function () {
    if (this == globalThis) {
      throw new TypeError("Array.prototype.values called on null or undefined");
    }
    const O = Object(this)

    let index = 0
    const len = O.length

    return {
      next() {
        if (index < len) {
          const value = O[index]
          index++
          return { value, done: false }
        } else {
          return { value: undefined, done: true }
        }
      },
      [Symbol.iterator]() {
        return this
      }
    }
}

const arr = ['a', 'b', 'c'];
const iterator = arr.values2();

console.log(iterator.next()); // { value: "a", done: false }
console.log(iterator.next()); // { value: "b", done: false }
console.log(iterator.next()); // { value: "c", done: false }
console.log(iterator.next()); // { value: undefined, done: true }

for (const value of arr.values2()) {
  console.log(value); // Logs: "a", "b", "c"
}

// Sparse arrays
const sparse = [1, , 3];
console.log([...sparse.values2()]); // [1, undefined, 3]

// Array-like objects
const obj = { 0: 'x', 1: 'y', length: 2 };
console.log([...Array.prototype.values2.call(obj)]); // ["x", "y"]
