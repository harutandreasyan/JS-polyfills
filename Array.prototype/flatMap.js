/*
    * Array.prototype.flatMap()
    * - Takes a callback function as its argument.
    * - The callback function is applied to each element of the array, and the results are flattened into a new array at a depth of 1.
    * - Does not modify the original array.
    * - Works with array-like objects: Converts them to arrays before applying the logic.
    * - Handles sparse arrays:
    *     - Skips empty slots ("holes") completely during iteration.
    * - Throws errors:
    *     - `TypeError` if called on `null` or `undefined`.
    *     - `TypeError` if the callback is not a function.
    * - Examples:
    *   [1, 2, 3].flatMap(x => [x, x * 2]);    // [1, 2, 2, 4, 3, 6]
    *   ["it's sunny", "in", "california"].flatMap(x => x.split(" "));
    *   // ['it\'s', 'sunny', 'in', 'california']
    *   Array.prototype.flatMap.call({ 0: 1, 1: 2, length: 2 }, x => [x, x * 2]);
    *   // [1, 2, 2, 4]
    *   [1, , 3].flatMap(x => [x, x * 2]);    // [1, 2, 3, 6]
*/

Array.prototype.flatMap2 = function (callback, thisArg) {
    if (this == globalThis) {
      throw new TypeError("Array.prototype.flatMap called on null or undefined")
    }
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function")
    }

    const array = Array.from(this)

    return array
      .filter(val => val !== undefined)
      .map((element, index) => callback.call(thisArg, element, index, array))
      .reduce((acc, val) => acc.concat(val), [])
}
  
console.log([1, 2, 3].flatMap2(x => [x, x * 2])); // [ 1, 2, 2, 4, 3, 6 ]
console.log([1, 2, 3].flatMap2(x => x * 2)); // [ 2, 4, 6 ]
console.log(['a', 'b'].flatMap2(x => x.split(''))); // [ 'a', 'b' ]
console.log(["it's sunny", "in", "california"].flatMap2(x => x.split(" "))); // [ "it's", 'sunny', 'in', 'california' ]        
console.log([1, , 3].flatMap2(x => [x, x * 2])); // [ 1, 2, 3, 6 ]
const arrayLike = {
      length: 3,
      0: 1,
      1: 2,
      2: 3,
      3: 4, 
}
console.log(Array.prototype.flatMap2.call(arrayLike, (x) => [x, x * 2]));
// [ 1, 2, 2, 4, 3, 6 ]