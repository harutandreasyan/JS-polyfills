/*
    * Array.prototype.findLast()
    * - Takes a callback function and an optional `thisArg`.
    * - Returns the last element that satisfies the callback condition.
    * - Returns `undefined` if no element satisfies the condition.
    * - Does not modify the original array.
    * - Special Cases:
    *     - Skips holes in sparse arrays.
    *     - Iterates from the end of the array to the beginning.
    *     - Throws a TypeError if the provided `callback` is not a function.
    * - Examples:
    *   [1, 2, 3].findLast(x => x > 1);    // 3
    *   [1, , 3].findLast(x => x === undefined); // undefined
    *   [].findLast(x => x > 0);           // undefined
*/

Array.prototype.findLast2 = function(callback) {
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    for(let i = this.length - 1; i >= 0; --i) {
        if(callback(this[i])) return this[i]
    }
    return undefined
}

console.log([1, 2, 3].findLast2(x => x > 1)); // 3
console.log([1, , 3].findLast2(x => x === undefined)); // undefined
console.log([].findLast2(x => x > 0)); // undefined
// console.log([1].findLast(4)); // TypeError