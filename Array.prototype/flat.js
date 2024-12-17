/*
    * Array.prototype.flat()
    * - Takes one optional argument, `depth`, which specifies how many levels of nested arrays to flatten (default is 1).
    * - Returns a new array with sub-array elements concatenated into it up to the specified depth.
    * - Does not modify the original array.
    * - Special Cases:
    *     - If `depth` is 0 or negative, returns a shallow copy of the array.
    *     - If the array is deeply nested and `depth` is greater than the nesting level, all levels are flattened.
    *     - Removes empty slots ("holes") in arrays.
    * - Examples:
    *   [1, [2, [3, [4]]]].flat();               // [1, 2, [3, [4]]]
    *   [1, [2, [3, [4]]]].flat(2);              // [1, 2, 3, [4]]
    *   [1, [2, [3, [4]]]].flat(Infinity);       // [1, 2, 3, 4]
    *   [1, 2, 3].flat(0);                       // [1, 2, 3]
    *   [1, 2, 3].flat(-1);                      // [1, 2, 3]
    *   [1, , 3, [4, , [5, , 6]]].flat(2);       // [1, 3, 4, 5, 6]
*/


Array.prototype.flat2 = function (depth = 1) {
    depth = isNaN(depth) || depth < 0 ? 0 : Math.floor(depth)

    const array = Array.from(this)

    const flatten = (arr, depth) => {
      return depth > 0
        ? arr.reduce((acc, val) => {
            return acc.concat(
              val === undefined
                ? []
                : Array.isArray(val)
                ? flatten(val, depth - 1) 
                : val 
            )
          }, [])
        : arr.filter((val) => val !== undefined)
    }

    return flatten(array, depth)
}

console.log([1, [2, [3, [4]]]].flat2()); // [ 1, 2, [ 3, [ 4 ] ] ]
console.log([1, [2, [3, [4]]]].flat2(2)); // [ 1, 2, 3, [ 4 ] ]
console.log([1, [2, [3, [4]]]].flat2(2.7)); // [ 1, 2, 3, [ 4 ] ]
console.log([1, [2, [3, [4]]]].flat2(Infinity)); // [ 1, 2, 3, 4 ]
console.log([1, [2, 3]].flat2(1)); // [ 1, 2, 3 ]
console.log([1, [2, [3, [4]]]].flat2(-1)); // [1, [2, [3, [4]]]]
console.log([1, [2, [3, [4]]]].flat2(null)); // [1, [2, [3, [4]]]]
console.log([1, [2, [3, [4]]]].flat2(Infinity)); // [ 1, 2, 3, 4 ]
console.log([1, 2, , 4, 5].flat2()); // [1, 2, 4, 5]

const arrayLike = {
    length: 3,
    0: [1, 2],
    1: { length: 2, 0: 3, 1: 4 },
    2: 5,
    3: 3,
}
console.log(Array.prototype.flat2.call(arrayLike));
// [ 1, 2, { '0': 3, '1': 4, length: 2 }, 5 ]