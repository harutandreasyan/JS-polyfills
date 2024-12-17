/*
    * Array.prototype.some()
    * - Takes a callback function and an optional `thisArg`.
    * - Returns `true` if at least one element in the array satisfies the callback condition; otherwise, `false`.
    * - Does not modify the original array.
    * - Special Cases:
    *     - Skips holes in sparse arrays.
    *     - Throws a TypeError if the provided `callback` is not a function.
    * - Examples:
    *   [1, 2, 3].some(x => x > 2);         // true
    *   [1, , 3].some(x => x === undefined); // false (sparse array)
    *   [].some(x => x > 0);                // false (empty array)
*/

Array.prototype.some2 = function(callback) {
    if(typeof callback !== "function") {
        throw new TypeError("Written callback is not a function!")
    }
    for(let i = 0; i < this.length; i++) {
        if (this[i] !== undefined && callback(this[i])) return true
    }
    return false
}

console.log([1, 2, 3].some(x => x > 2));
console.log([1, , 3].some(x => x === undefined));
console.log([].some(x => x > 0));
console.log('-----------');

console.log([1, 2, 3].some2(x => x > 2));
console.log([1, , 3].some2(x => x === undefined));
console.log([].some2(x => x > 0));


